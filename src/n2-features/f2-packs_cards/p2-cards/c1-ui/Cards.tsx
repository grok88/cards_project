import React, {useEffect, useState} from "react";
import {Pagination, Space, Table} from "antd";
import 'antd/dist/antd.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {RequestStatusType} from "../../../../n1-main/m2-bll/b1-main/mainInitialState";
import Button from "antd/lib/button";
import {CardsInitialStateType, CardsType} from "../c2-bll/cardsInitialState";
import {addCardTC, deleteCardTC, getCardTC, updateCardTC} from "../c2-bll/cardsThunk";
import {useParams} from "react-router-dom";
import {PaginationInitialStateType} from "../../../../n0-common/c1-ui/pagination/p2_bll/paginationInitialState";
import {searchPanelInitialStateType} from "../../p3-search-panel/s2-bll/searchPanelInitialState";
import {setCurrentPage, setPageSize} from "../../../../n0-common/c1-ui/pagination/p2_bll/paginationActions";
import {setMaxGrade, setMinGrade} from "../../p3-search-panel/s2-bll/searchPanelActions";
import {SearchPanel} from "../../p3-search-panel/s1-ui/SearchPanel";
import {Modal} from "../../../../n0-common/c1-ui/modal/m1-ui/Modal";


type CardsPropsType = {}

export const Cards: React.FC<CardsPropsType> = React.memo((props) => {

    const {cards, cardsTotalCount, page, pageCount} = useSelector<AppRootStateType, CardsInitialStateType>(state => state.cards);
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.main.status);
    const error = useSelector<AppRootStateType, null | string>(state => state.main.error);
    const {currentPage, pageSize} = useSelector<AppRootStateType, PaginationInitialStateType>(state => state.pagination);
    const {searchValue, minGrade, maxGrade} = useSelector<AppRootStateType, searchPanelInitialStateType>(state => state.search);

    const dispatch = useDispatch();
    const {id} = useParams();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [cardName, setCardName] = useState<string>('');
    const [cardAnswer, setCardAnswer] = useState<string>('');
    //modal
    const onModal = () => {
        setIsOpen(true);
    }

    const onClose = () => {
        setIsOpen(false);
    }
    const onSubmit = () => {
        dispatch(addCardTC(
            {
                cardsPack_id: id,
                question: cardName,
                answer: cardAnswer
            }
        ));
        onClose();
    }

    useEffect(() => {
        dispatch(getCardTC(id));
    }, []);


    const onDeleteCard = (cardId: string) => {
        dispatch(deleteCardTC(cardId));
    }

    const onUpdateCard = (cardId: string, newQuestion: string, cardAnswer: string) => {
        dispatch(updateCardTC({_id: cardId, question: newQuestion, answer: cardAnswer}))
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
            title: <button onClick={onModal} onKeyDown={(e) => {
                if (e.key = 'Escape') {
                    onClose();
                }
            }
            }>ADD</button>,
            // dataIndex: 'actions',
            render: (card: CardsType) => {
                return <ModalDeleteAndUpdate card={card} deleteCard={onDeleteCard} updateCard={onUpdateCard}/>

            }
        },
    ];
    const onChangePage = (page: number, pageSize: number | undefined) => {
        dispatch(setCurrentPage(page));
        dispatch(setPageSize(pageSize ? pageSize : 10));
        dispatch(getCardTC(id, searchValue, minGrade, maxGrade, page, pageSize));
    }
    const onChange = ([val1, val2]: Array<number>) => {

        dispatch(setMinGrade(val1));
        dispatch(setMaxGrade(val2));
    }

    const onSearchSubmit = (value: string) => {
        dispatch(getCardTC(id, value, minGrade, maxGrade, page, pageSize));
    }


    return (
        <>
            {/*<Status title={'Packs'} status={status} error={error}/>*/}

            <Modal title={'Введите вопрос'} onClose={onClose} isOpen={isOpen}>
                <div>
                    <label> введите вопрос
                        <input type="text" value={cardName} onChange={e => setCardName(e.currentTarget.value)}/>
                    </label>
                </div>
                <div>
                    <label> введите ответ
                        <input type="text" value={cardAnswer} onChange={e => setCardAnswer(e.currentTarget.value)}/>
                    </label>
                </div>
                <button onClick={onSubmit}>создать</button>
            </Modal>

            <SearchPanel minCardsCount={minGrade} maxCardsCount={maxGrade} pageSize={pageSize}
                         currentPage={currentPage} onChange={onChange} onSearchSubmit={onSearchSubmit}/>

            <Table<CardsType> dataSource={cards} columns={columns} pagination={false} rowKey={'_id'}/>

            <Pagination current={page as number}
                        defaultCurrent={1}
                        onChange={onChangePage}
                        pageSize={pageCount as number}
                        defaultPageSize={10}
                        total={cardsTotalCount as number}/>
        </>
    );
});

type ModalAndDeleteType = {
    card: CardsType
    deleteCard: (cardId: string) => void
    updateCard: (cardId: string, newQuestion: string, cardAnswer: string) => void

}

export const ModalDeleteAndUpdate: React.FC<ModalAndDeleteType> = (props) => {
    const {card, deleteCard, updateCard} = props;
    //modal

    //UPDATE
    const [isUpdateOpen, setUpdateOpen] = useState<boolean>(false);
    const [cardName, setCardName] = useState<string>('');
    const [cardAnswer, setCardAnswer] = useState<string>('');

    const onUpdateOpen = () => {
        setUpdateOpen(true)
    }

    const onUpdateClose = () => {
        setUpdateOpen(false);
    }
    const onUpdateSubmit = () => {
        updateCard(card._id, cardName, cardAnswer);


        onUpdateClose();
    }
    //DELETE
    const [isDeleteOpen, setDeleteOpen] = useState<boolean>(false);

    const onDeleteOpen = () => {
        setDeleteOpen(true);
    }
    const onDeleteClose = () => {
        setDeleteOpen(false);
    }
    const onDeleteSubmit = () => {
        deleteCard(card._id);
        onDeleteClose();
    }
    return <div>
        <Space>
            <Modal title={'Are you sure?'} onClose={onDeleteClose} isOpen={isDeleteOpen}>
                <button onClick={onDeleteSubmit}>Yes</button>
                <button onClick={onDeleteClose}>No</button>
            </Modal>
            <Modal title={'Введите другой вопрос'} onClose={onUpdateClose} isOpen={isUpdateOpen}>
                <div>
                    <div>
                        <label> редактировать вопрос
                            <input type='text' value={cardName} onChange={e => setCardName(e.currentTarget.value)}/>
                        </label>
                    </div>

                    <div>
                        <label> редактировать ответ
                            <input type='text' value={cardAnswer} onChange={e => setCardAnswer(e.currentTarget.value)}/>
                        </label>
                    </div>
                </div>
                <button onClick={onUpdateSubmit}>Update</button>

            </Modal>
            <Button onClick={onUpdateOpen}>
                update
            </Button>
            <Button onClick={onDeleteOpen} danger={true}>
                del
            </Button>
        </Space>
    </div>
}