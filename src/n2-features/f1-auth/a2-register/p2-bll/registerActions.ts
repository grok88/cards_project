

export const REGISTER_IN = 'REGISTER/REGISTER_IN'; // blank

type registerACType = ReturnType<typeof registerIn>;

export type registerReducerActions = registerACType;

export const registerIn = (value:boolean) => {
    return {
        type:REGISTER_IN,
        value

    } as const
}
