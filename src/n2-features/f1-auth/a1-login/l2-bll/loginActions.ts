export const LOGIN_IN = 'LOGIN/LOGIN_IN'; // blank
export const SET_LOGIN_ERROR = 'LOGIN/SET_ERROR'; // blank

type loginInACType = ReturnType<typeof loginIn>;
type setErrorACType = ReturnType<typeof setLoginError>;

export type loginReducerActions = loginInACType | setErrorACType;

export const loginIn = (value:boolean) => {
    return {
        type: LOGIN_IN,
        value
    } as const
}

export const setLoginError = (error: null | string) => {
    return {
        type: SET_LOGIN_ERROR,
        error
    } as const
}

