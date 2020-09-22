

export const REGISTER_IN = 'REGISTER/REGISTER_IN'; // blank

type registerACType = ReturnType<typeof registerIn>;

export type registerReducerActions = registerACType;

export const registerIn = () => {
    return {
        type:REGISTER_IN,

    } as const
}