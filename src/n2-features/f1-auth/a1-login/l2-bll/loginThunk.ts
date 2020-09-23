import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {SWActionType, ThunkType} from "../../../../n1-main/m2-bll/thunks";
import {LoginAPI, LoginDataType} from "../l3-dal/LoginAPI";
import {loginIn, setLoginError} from "./loginActions";
import {setUser} from "../../a5-profile/p2-bll/profileActions";
import {setStatus} from "../../../../n1-main/m2-bll/b1-main/mainActions";


export const loginTC = (data: LoginDataType): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        dispatch(setStatus("loading"));
        // Запросы на API
        try {
            const res = await LoginAPI.login(data);
            dispatch(setUser(res.data));
            dispatch(loginIn());
            dispatch(setStatus("succeeded"));
        } catch (e) {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setLoginError(error));
            dispatch(setStatus("failed"));
        }
    }
}