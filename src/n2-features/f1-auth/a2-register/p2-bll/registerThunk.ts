import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {SWActionType, ThunkType} from "../../../../n1-main/m2-bll/thunks";
import {RegisterAPI, RegisterDataType} from "../p3-dal/RegisterAPI";
import {registerIn} from "./registerActions";
import {setError, setStatus} from "../../../../n1-main/m2-bll/b1-main/mainActions";



export const registerTC = (data: RegisterDataType): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        dispatch(setStatus("loading"));
        try {
            await RegisterAPI.register(data);
            dispatch(registerIn());
            dispatch(setStatus("succeeded"));
        } catch (e) {
            debugger
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setError(error));
            dispatch(setStatus("failed"));
        }

    }
}