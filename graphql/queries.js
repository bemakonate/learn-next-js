import gql from 'graphql-tag';

export const JOBS_QUERY = gql`
  query Jobs {
    jobs {
      id
      title
    }
  }
`;

