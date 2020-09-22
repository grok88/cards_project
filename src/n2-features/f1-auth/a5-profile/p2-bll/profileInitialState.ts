import {ResponseDataType} from "../../a1-login/l3-dal/LoginAPI";

export type ProfileInitialStateType = typeof  profileInitialState;

export const profileInitialState = {
    user: null as ResponseDataType | null
};
