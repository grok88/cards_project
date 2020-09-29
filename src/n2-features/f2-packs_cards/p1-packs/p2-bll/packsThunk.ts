import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {SWActionType, ThunkType} from "../../../../n1-main/m2-bll/thunks";
import {setError, setStatus} from "../../../../n1-main/m2-bll/b1-main/mainActions";
import {AddPackDataType, PacksAPI, UpdatePackDataType} from "../p3-dal/PacksAPI";
import {getPacks} from "./packsActions";


export const packTC = (): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        dispatch(setStatus("loading"));
        try {
            const data = await PacksAPI.getPacks();
            dispatch(getPacks(data.data.cardPacks));
            dispatch(setStatus("succeeded"));
        } catch (e) {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setError(error));
            dispatch(setStatus("failed"));
        }
    }
}
export const deletePackTC = (packId:string): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        dispatch(setStatus("loading"));
        // Запросы на API
        try {
            await PacksAPI.deletePack(packId);
            dispatch(packTC());
            dispatch(setStatus("succeeded"));
        } catch (e) {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setError(error));
            dispatch(setStatus("failed"));
        }
    }
}
export const addPackTC = (data:AddPackDataType): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        dispatch(setStatus("loading"));
        // Запросы на API
        try {
            await PacksAPI.addPack(data);
            dispatch(packTC());
            dispatch(setStatus("succeeded"));
        } catch (e) {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setError(error));
            dispatch(setStatus("failed"));
        }
    }
}
export const updatePackTC = (data:UpdatePackDataType): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        dispatch(setStatus("loading"));
        // Запросы на API
        try {
            await PacksAPI.updatePack(data);
            dispatch(packTC());
            dispatch(setStatus("succeeded"));
        } catch (e) {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setError(error));
            dispatch(setStatus("failed"));
        }
    }
}
