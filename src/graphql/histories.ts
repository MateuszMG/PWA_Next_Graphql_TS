import { gql } from '@apollo/client';

// histories

const HISTORIES_FRAGMENT = gql`
  fragment Histories on History {
    id
    title
  }
`;

export interface HistoriesFragment {
  id: string;
  title: string;
}

export const HISTORIES_QUERY = gql`
  query Histories($limit: Int!, $offset: Int!) {
    histories(limit: $limit, offset: $offset) {
      ...Histories
    }
  }
  ${HISTORIES_FRAGMENT}
`;

// history

const HISTORY_FRAGMENT = gql`
  fragment History on History {
    id
    title
    details
  }
`;

export interface HistoryFragment {
  id: string;
  details: string;
  title: string;
}

export const HISTORY_QUERY = gql`
  query History($id: ID!) {
    history(id: $id) {
      ...History
    }
  }
  ${HISTORY_FRAGMENT}
`;
