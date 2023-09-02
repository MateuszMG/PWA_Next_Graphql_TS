import { HISTORIES_QUERY, HistoriesFragment } from '@/graphql/histories';
import { useEffect, useRef, useState } from 'react';

import { useLazyQuery } from '@apollo/client';

import { defaultPagination } from '@/utils/const';

export const useHistories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [hasMore, setHasMore] = useState(true);
  const [pagination, setPagination] = useState(defaultPagination);

  const [getHistories, { data, error, fetchMore, loading }] = useLazyQuery(
    HISTORIES_QUERY,
    { notifyOnNetworkStatusChange: true },
  );
  const histories = (data?.histories || []) as HistoriesFragment[];

  const intersectioCallback = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    if (!entry.isIntersecting || !hasMore || loading) return;

    const updatedPagination = {
      limit: pagination.limit + defaultPagination.limit,
      offset: pagination.limit,
    };

    setPagination(updatedPagination);

    fetchMore({
      variables: updatedPagination,
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.histories?.length) {
          setHasMore(false);
          return prev;
        }
        return Object.assign({}, prev, {
          histories: [...prev.histories, ...fetchMoreResult.histories],
        });
      },
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectioCallback);
    observer && scrollRef.current && observer.observe(scrollRef.current);

    return () => {
      observer.disconnect();
    };
  }, [histories]);

  useEffect(() => {
    if (data || loading) return;
    getHistories({ variables: pagination });
  }, []);

  return { error, hasMore, histories, loading, scrollRef };
};
