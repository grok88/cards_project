export const LOGIN_IN = 'LOGIN/LOGIN_IN'; // blank
export const SET_LOGIN_ERROR = 'LOGIN/SET_ERROR'; // blank

type loginInACType = ReturnType<typeof loginIn>;
type setErrorACType = ReturnType<typeof setLoginError>;

export type loginReducerActions = loginInACType | setErrorACType;

export const loginIn = () => {
    return {
        type: LOGIN_IN,
    } as const
}

export const setLoginError = (error: null | string) => {
    return {
        type: SET_LOGIN_ERROR,
        error
    } as const
}

