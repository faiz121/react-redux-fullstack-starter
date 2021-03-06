import { CHANGE_SELECTED_USER } from 'actions/UsersActionTypes';

export function changeSelectedUser(email) {
    return {
        type: CHANGE_SELECTED_USER,
        payload: {
            email
        }
    };
}
