import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {SWActionType, ThunkType} from "../../../../n1-main/m2-bll/thunks";


export const loginThunk = ():ThunkType => {
    return (dispatch:ThunkDispatch< AppRootStateType, unknown, SWActionType>) => {
        // Запросы на API
    }
}