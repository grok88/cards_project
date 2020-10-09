import React, {useEffect, useState} from "react";
import {Pagination, Table} from "antd";
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

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [cardName, setCardName] = useState<string>('');
    //modal
    const onModal = () => {
        setIsOpen(true);
    }

    const onClose = () => {
        setIsOpen(false);
    }
    const onSubmit = () => {
        dispatch(addCardTC({
            card: {
                cardsPack_id: id,
                question: cardName
            }
        }));
        onClose();
    }

    useEffect(() => {
        dispatch(getCardTC(id));
    }, []);

    const {id} = useParams();


    const onDeleteCard = (cardId: string, cardsPackId: string) => {
        dispatch(deleteCardTC(cardId, cardsPackId));
    }

    const onUpdateCard = (cardId: string) => {
        dispatch(updateCardTC({card: {_id: cardId}}, id))
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
                return <div>
                    <Button onClick={() => onUpdateCard(card._id)}>
                        update
                    </Button>
                    <button onClick={() => onDeleteCard(card._id, card.cardsPack_id)}>
                        DEL
                    </button>
                </div>
            }
        },
    ];
    const onChangePage = (page: number, pageSize: number | undefined) => {
        dispatch(setCurrentPage(page));
        dispatch(setPageSize(pageSize ? pageSize : 10));
        dispatch(getCardTC(id, minGrade, maxGrade, page, pageSize, searchValue));
    }
    const onChange = ([val1, val2]: Array<number>) => {

        dispatch(setMinGrade(val1));
        dispatch(setMaxGrade(val2));
    }

    const onSearchSubmit = (value: string) => {
        dispatch(getCardTC(id, minGrade, maxGrade, page, pageSize, value));
    }


    return (
        <>
            {/*<Status title={'Packs'} status={status} error={error}/>*/}

            <Modal title={'Введите вопрос'} onClose={onClose} isOpen={isOpen}>
                <input type="text" value={cardName} onChange={e => setCardName(e.currentTarget.value)}/>
                <button onClick={onSubmit}>создать</button>
            </Modal>

            <SearchPanel minCardsCount={minGrade} maxCardsCount={maxGrade} pageSize={pageSize}
                         currentPage={currentPage} onChange={onChange} onSearchSubmit={onSearchSubmit}/>

            <Table<CardsType> dataSource={cards} columns={columns} pagination={false} rowKey={'_id'}/>

            <Pagination style={{padding: '20px'}}
                        current={page as number}
                        defaultCurrent={1}
                        onChange={onChangePage}
                        pageSize={pageCount as number}
                        defaultPageSize={10}
                        total={cardsTotalCount as number}/>
        </>
    );
});