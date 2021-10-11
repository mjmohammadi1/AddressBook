import { UserActions, UserActionType, UpdateUser } from './actions';
import { User } from './state';

export const UserReducer = (state: User, action: UserActions): User => {
  switch (action.type) {
    case UserActionType.update:
      return { ...state, name: action.payload.name, phone: action.payload.phone };
    default:
      return state;
  }
};

export const updateUser = (user: User): UpdateUser => {
  return {
    type: UserActionType.update,
    payload: user,
  };
};
