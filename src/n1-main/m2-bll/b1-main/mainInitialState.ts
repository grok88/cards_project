
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export type MainInitialStateType = typeof mainInitialState;

export const mainInitialState = {
    status:'idle' as RequestStatusType,
    error: null as string | null,
};
