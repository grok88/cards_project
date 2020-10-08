import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {CardsInitialStateType, CardsType} from "../../../f2-packs_cards/p2-cards/c2-bll/cardsInitialState";
import {getCardTC} from "../../../f2-packs_cards/p2-cards/c2-bll/cardsThunk";
import {Button} from "antd";

type ParamType = {
    packId: string;
}

type LearnPropsType = {}

const getCard = (cards: Array<CardsType>) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    console.log('test: ', sum, rand, res)

    return cards[res.id + 1];
}

export const Learn: React.FC<LearnPropsType> = (props) => {
    console.log('Learn')
    const {cards} = useSelector<AppRootStateType, CardsInitialStateType>(state => state.cards);
    const dispatch = useDispatch();
    const {packId} = useParams<ParamType>();


    const [card, setCard] = useState(getCard(cards));
    const [check, setCheck] = useState<boolean>(false);

    const handleNextCard = () => {
        setCheck(false);
        setCard(getCard(cards))
    }
    const isAnswerOpen = () => {
        setCheck(true);
    }
    const isAnswerClose = () => {

    }

    useEffect(() => {
        cards.length && setCard(getCard(cards));
        console.log('first')
    }, [cards]);

    useEffect(() => {
        dispatch(getCardTC(packId));
        console.log('second')
    }, [packId]);

    return (
        <div>
            <h1> Learn</h1>
            <div>
                {card && card.question}
            </div>
            <Button onClick={isAnswerOpen}>answer</Button>
            {
                check && <div>
                    {card && <div>{card.answer}</div>}
					<Button>1</Button>
					<Button>2</Button>
					<Button>3</Button>
					<Button>4</Button>
					<Button>5</Button>
					<div>
						<Button onClick={handleNextCard}>Next</Button>
					</div>
				</div>
            }

        </div>
    );
}