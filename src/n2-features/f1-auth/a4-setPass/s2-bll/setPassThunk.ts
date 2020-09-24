import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {SWActionType, ThunkType} from "../../../../n1-main/m2-bll/thunks";

import {setError, setStatus} from "../../../../n1-main/m2-bll/b1-main/mainActions";

import {SetPassAPI, SetPassDataType} from "../s3-dal/SetPassAPI";
import {setPassIn} from "./setPassActions";


export const setPassTC = (data: SetPassDataType): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        dispatch(setStatus("loading"));
        try {
            await SetPassAPI.setPass(data);
            dispatch(setPassIn());
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