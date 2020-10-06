import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {CardsInitialStateType} from "../../../f2-packs_cards/p2-cards/c2-bll/cardsInitialState";
import {getCardTC} from "../../../f2-packs_cards/p2-cards/c2-bll/cardsThunk";

type ParamType = {
    packId: string;
}

type LearnPropsType = {}

export const Learn: React.FC<LearnPropsType> = (props) => {
    console.log('Learn')
    const {cards} = useSelector<AppRootStateType, CardsInitialStateType>(state => state.cards);
    const dispatch = useDispatch();
    const {packId} = useParams<ParamType>();

    useEffect(() => {
        debugger
        dispatch(getCardTC(packId));
    }, []);

    console.log(cards, packId);
    return (
        <div>
            Learn
            {packId}
            {
                cards
            }
        </div>
    );
}