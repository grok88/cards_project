import React, {useEffect} from "react";
import {Table} from "antd";
import 'antd/dist/antd.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {RequestStatusType} from "../../../../n1-main/m2-bll/b1-main/mainInitialState";
import Button from "antd/lib/button";
import {CardsType} from "../c2-bll/cardsInitialState";
import {addCardTC, cardTC, deleteCardTC, updateCardTC} from "../c2-bll/cardsThunk";
import {useParams, NavLink} from "react-router-dom";

type CardsPropsType = {}

export const Cards: React.FC<CardsPropsType> = React.memo((props) => {

    const cards = useSelector<AppRootStateType, Array<CardsType>>(state => state.cards.cards);
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.main.status);
    const error = useSelector<AppRootStateType, null | string>(state => state.main.error);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cardTC(id));
    }, []);

    const {id} = useParams();


    const onDeleteCard = (cardId: string) => {
        dispatch(deleteCardTC(cardId));
    }
    const onAddCard = () => {
        dispatch(addCardTC({
            card: {
                cardsPack_id: id
            }
        }));
    }
    const onUpdateCard = (cardId: string) => {
        dispatch(updateCardTC({
            card: {
                _id: cardId
            }
        }));
    }

    const columns = [
        {
            title: 'Question',
            dataIndex: 'question',
        },
        {
            title: 'answer',
            dataIndex: 'answer',
        },
        {
            title: 'Grade',
            dataIndex: 'grade',
        },
        {
            title: 'updated',
            dataIndex: 'updated',
        },
        {
            title: 'url',
            dataIndex: 'url',
        },

        {
            title: <button onClick={(e)=> onAddCard()}>ADD</button>,
            // dataIndex: 'actions',
            render: (card: CardsType) => {
                return <div>
                    <Button onClick={() => onUpdateCard(card._id)}>
                        update
                    </Button>
                    <button onClick={() => onDeleteCard(card._id)}>
                        DEL
                    </button>
                </div>
            }
        },
    ];

    return (
        <>
            {/*<Status title={'Packs'} status={status} error={error}/>*/}
            <Table<CardsType> dataSource={cards} columns={columns} pagination={false} rowKey={'_id'}/>
        </>
    );
});