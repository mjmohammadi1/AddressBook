const { REACT_APP_USERS_RETURNED_PER_PAGE } = process.env;

export const USER_QUERIES = {
  ALL_USERS: `?results=${REACT_APP_USERS_RETURNED_PER_PAGE}&?page=`,
};

export const REACT_QUERY_STALE_TIME = 20000;
