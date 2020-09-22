import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {SWActionType, ThunkType} from "../../../../n1-main/m2-bll/thunks";
import {LoginAPI, LoginDataType} from "../l3-dal/LoginAPI";
import { loginIn } from "./loginActions";


export const loginTC = (data: LoginDataType): ThunkType => {
    return (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        // Запросы на API
        LoginAPI.login(data)
            .then(res => {
                dispatch(loginIn());
                debugger
            })
            .catch(e => {
                console.log(e.name)
                console.log(e.message)
                console.log(e.stack)
                console.log(e.response)
                const error = e.response
                    ? e.response.data.error
                    : (e.message + ', more details in the console');

                console.log(error)
                console.log('Error: ', {...e})
            });

    }
}