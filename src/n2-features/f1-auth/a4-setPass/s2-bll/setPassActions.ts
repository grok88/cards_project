

export const SET_PASS_IN = 'SET_PASS/SET_PASS_IN'; // blank

type setPassACType = ReturnType<typeof setPassIn>;

export type setPassReducerActions = setPassACType;

export const setPassIn = () => {
    return {
        type: SET_PASS_IN,
    } as const
}

