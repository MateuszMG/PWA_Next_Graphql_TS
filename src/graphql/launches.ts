import { gql } from '@apollo/client';

export interface LaunchesFragment {
  id: string;
  mission_name: string;
}

export const LAUNCHES_QUERY = gql`
  query Launches($limit: Int!, $offset: Int!) {
    launches(limit: $limit, offset: $offset) {
      id
      mission_name
    }
  }
`;
