export type User = {
  name: {
    title: string;
    first: string;
    last: string;
  };
  phone: number;
};

export const InitialUser = {
  name: {
    title: '',
    first: '',
    last: '',
  },
  phone: 0,
};
