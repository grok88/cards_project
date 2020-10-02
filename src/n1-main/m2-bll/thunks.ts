import {loginReducerActions} from "../../n2-features/f1-auth/a1-login/l2-bll/loginActions";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./store";
import {registerReducerActions} from "../../n2-features/f1-auth/a2-register/p2-bll/registerActions";
import {mainReducerActions} from "./b1-main/mainActions";
import {profileReducerActions} from "../../n2-features/f1-auth/a5-profile/p2-bll/profileActions";
import {RestoreReducerActions} from "../../n2-features/f1-auth/a3-restore/r2-bll/restoreActions";
import {setPassReducerActions} from "../../n2-features/f1-auth/a4-setPass/s2-bll/setPassActions";
import {packsReducerActions} from "../../n2-features/f2-packs_cards/p1-packs/p2-bll/packsActions";
import {cardsReducerActions} from "../../n2-features/f2-packs_cards/p2-cards/c2-bll/cardsActions";
import {PaginationReducerActions} from "../../n0-common/c1-ui/pagination/p2_bll/paginationActions";

export type SWActionType =
    | loginReducerActions
    | registerReducerActions
    | mainReducerActions
    | profileReducerActions
    | RestoreReducerActions
    | setPassReducerActions
    | packsReducerActions
    | cardsReducerActions
    | PaginationReducerActions
// and add other reducers Actions;

export type ThunkType = ThunkAction<void, AppRootStateType, unknown, SWActionType>;