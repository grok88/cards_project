import {ResponsePacksDataType} from "../p3-dal/PacksAPI";

export const GET_PACKS = 'PACKS/GET_PACKS';

type GetPacksACType = ReturnType<typeof getPacks>;

export type packsReducerActions = GetPacksACType ;

export const getPacks = (packs: ResponsePacksDataType) => {
    return {
        type: GET_PACKS,
        packs
    } as const
}
