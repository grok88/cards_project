import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {SWActionType, ThunkType} from "../../../../n1-main/m2-bll/thunks";
import {LoginAPI, LoginDataType} from "../../a1-login/l3-dal/LoginAPI";
import {loginIn} from "../../a1-login/l2-bll/loginActions";
import {RegisterAPI, RegisterDataType} from "../p3-dal/RegisterAPI";
import {registerIn} from "./registerActions";


export const registerTC = (data: RegisterDataType): ThunkType => {
    return (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        // Запросы на API
        RegisterAPI.register(data)
            .then(res => {
                dispatch(registerIn());

            })
            .catch(e => {
                const error = e.response
                    ? e.response.data.error
                    : (e.message + ', more details in the console');
                console.log(error)

            });

    }
}