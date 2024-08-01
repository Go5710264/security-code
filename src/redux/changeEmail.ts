import { CHANGE_EMAIL } from "../action"

const changeEmail = (dispatch: unknown) => (email: string): void => {
    const action = {
        type: CHANGE_EMAIL,
        payload: email,
    };
    dispatch(action);
};

export {changeEmail};