import {ThunkDispatch} from "redux-thunk";
import {SWActionType, ThunkType} from "../thunks";
import {AppRootStateType} from "../store";


export const mainTC = (): ThunkType => {
    return (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        // Запросы на API
    }
}