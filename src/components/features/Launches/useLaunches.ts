import { LAUNCHES_QUERY, LaunchesFragment } from '@/graphql/launches';
import { useEffect, useRef, useState } from 'react';

import { useLazyQuery } from '@apollo/client';

import { defaultPagination } from '@/utils/const';

export const useLaunches = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [hasMore, setHasMore] = useState(true);
  const [pagination, setPagination] = useState(defaultPagination);

  const [getLaunches, { data, error, fetchMore, loading }] = useLazyQuery(
    LAUNCHES_QUERY,
    { notifyOnNetworkStatusChange: true },
  );
  const launches = (data?.launches || []) as LaunchesFragment[];

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
        if (!fetchMoreResult?.launches?.length) {
          setHasMore(false);
          return prev;
        }
        return Object.assign({}, prev, {
          launches: [...prev.launches, ...fetchMoreResult.launches],
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
  }, [launches]);

  useEffect(() => {
    if (data || loading) return;
    getLaunches({ variables: pagination });
  }, []);

  return { error, hasMore, launches, loading, scrollRef };
};
