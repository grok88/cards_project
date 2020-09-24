import {ResponseDataType} from "../../a1-login/l3-dal/LoginAPI";

export type RestoreInitialStateType = typeof  restoreInitialState;

export const restoreInitialState = {
    user: null as ResponseDataType | null
};
