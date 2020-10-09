import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {CardsInitialStateType, CardsType} from "../../../f2-packs_cards/p2-cards/c2-bll/cardsInitialState";
import {getCardTC, setGradeTC} from "../../../f2-packs_cards/p2-cards/c2-bll/cardsThunk";
import {Button, Space} from "antd";

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
    // console.log('test: ', sum, rand, res)

    return cards[res.id + 1];
}

export const Learn: React.FC<LearnPropsType> = (props) => {
    // console.log('Learn')
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
    }, [cards]);

    useEffect(() => {
        dispatch(getCardTC(packId));
    }, [packId]);


    const onGradeSend = (grade: number) => {
        dispatch(setGradeTC(grade, card._id, packId));
    }

    const buttons = ['не знал', 'забыл', 'долго думал', 'передумал', 'знал'];

    return (
        <div>
            <h1> Learn</h1>
            <div>
                <div>
                    <b>Question:</b>
                </div>
                {card && card.question}
            </div>
            <Button onClick={isAnswerOpen}>show answer</Button>
            {
                check && <div>
					<div>
						<b>Answer: </b>{card && <div>{card.answer}</div>}
					</div>
					<Space>
                        {
                            buttons.map((btn, i) => <Button key={i} onClick={() => {
                                onGradeSend(i + 1);
                            }}>
                                {btn}
                            </Button>)
                        }
					</Space>
					<div>
						<Button onClick={handleNextCard}>Next question</Button>
					</div>
				</div>
            }

        </div>
    );
}