export enum UserActionType {
  update,
}

export type UpdateUser = {
  type: UserActionType.update;
  payload: {
    name: {
      title: string;
      first: string;
      last: string;
    };
    phone: number;
  };
};

export type UserActions = UpdateUser;
