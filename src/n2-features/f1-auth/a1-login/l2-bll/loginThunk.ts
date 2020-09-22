import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {SWActionType, ThunkType} from "../../../../n1-main/m2-bll/thunks";
import {LoginAPI, LoginDataType} from "../l3-dal/LoginAPI";
import {loginIn} from "./loginActions";
import {setError, setStatus} from "../../../../n1-main/m2-bll/b1-main/mainActions";


export const loginTC = (data: LoginDataType): ThunkType => {
    return (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        dispatch(setStatus("loading"));
        // Запросы на API
        // const res = await LoginAPI.login(data);
        // try {
        //     console.log(res.data.error)
        //     dispatch(loginIn());
        //     dispatch(setStatus("succeeded"));
        // } catch (e) {
        //     console.log(e.response)
        //     const error = e.response
        //         ? e.response.data.error
        //         : (e.message + ', more details in the console');
        //     dispatch(setError(error));
        //     dispatch(setStatus("failed"));
        // }

        LoginAPI.login(data)
            .then(res => {
                dispatch(loginIn());
                dispatch(setStatus("succeeded"));
            })
            .catch(e => {
                const error = e.response
                    ? e.response.data.error
                    : (e.message + ', more details in the console');
                dispatch(setError(error));
                dispatch(setStatus("failed"));
            });

    }
}