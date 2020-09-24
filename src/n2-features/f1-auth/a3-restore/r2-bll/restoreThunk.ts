import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {SWActionType, ThunkType} from "../../../../n1-main/m2-bll/thunks";
import {RestoreAPI, RestoreDataType} from "../r3-dal/RestoreAPI";
import {setError, setStatus} from "../../../../n1-main/m2-bll/b1-main/mainActions";


export const RestorePassTC = (data: RestoreDataType): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        dispatch(setStatus('loading'));
        try {
            const resp = await RestoreAPI.restorePass(data);
            dispatch(setStatus('succeeded'));
        } catch (e) {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setError(error));
            dispatch(setStatus("failed"));
        }
    }
}