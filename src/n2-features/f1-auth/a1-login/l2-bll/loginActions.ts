export const LOGIN_LOADING = 'LOGIN/LOADING';
export const LOGIN_ERROR = 'LOGIN/ERROR';
export const LOGIN_SUCCESS = 'LOGIN/SUCCESS';

export const LOGIN_IN = 'LOGIN/LOGIN_IN'; // blank

type loginInACType = ReturnType<typeof loginIn>;

export type loginReducerActions = loginInACType;

export const loginIn = () => {
    return {
        type:LOGIN_IN,

    } as const
}

