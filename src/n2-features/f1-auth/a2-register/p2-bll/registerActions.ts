

export const REGISTER = 'REGISTER'; // blank

type registerACType = ReturnType<typeof register>;

export type registerReducerActions = registerACType;

export const register = () => {
    return {
        type:REGISTER,

    } as const
}