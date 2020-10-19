import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {SWActionType, ThunkType} from "../../../../n1-main/m2-bll/thunks";
import {setUser} from "./profileActions";
import {ProfileAPI} from "../p3-dal/ProfileAPI";

export type SetImgType = {
    token: string | null;
    avatar: string | null | ArrayBuffer;
    name: string | null;
}

export const setImg = (data: SetImgType): ThunkType => {
    return (dispatch: ThunkDispatch<AppRootStateType, unknown, SWActionType>) => {
        ProfileAPI.setImage(data)
            .then(res => {
                dispatch(setUser(res.data.updatedUser));
            });
    }
}

// axiosInstance.put('auth/me', {
//     token: props.user && props.user.token,
//     avatar: reader.result,
//     name: props.user && props.user.name
// })
//     .then(res => {
//         dispatch(setUser(res.data.updatedUser))
//     });