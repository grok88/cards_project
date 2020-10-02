import React, {useEffect} from "react";
import {Pagination, Table} from "antd";
import 'antd/dist/antd.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {RequestStatusType} from "../../../../n1-main/m2-bll/b1-main/mainInitialState";
import Button from "antd/lib/button";
import {CardsInitialStateType, CardsType} from "../c2-bll/cardsInitialState";
import {addCardTC, getCardTC, deleteCardTC, updateCardTC} from "../c2-bll/cardsThunk";
import {useParams, NavLink} from "react-router-dom";
import {PaginationInitialStateType} from "../../../../n0-common/c1-ui/pagination/p2_bll/paginationInitialState";
import {searchPanelInitialStateType} from "../../p3-search-panel/s2-bll/searchPanelInitialState";
import {setCurrentPage, setPageSize} from "../../../../n0-common/c1-ui/pagination/p2_bll/paginationActions";


type CardsPropsType = {}

export const Cards: React.FC<CardsPropsType> = React.memo((props) => {

    const {cards,cardsTotalCount, page, pageCount} = useSelector<AppRootStateType, CardsInitialStateType>(state => state.cards);
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.main.status);
    const error = useSelector<AppRootStateType, null | string>(state => state.main.error);
    const {currentPage, pageSize} = useSelector<AppRootStateType, PaginationInitialStateType>(state => state.pagination);
    const {searchValue, minGrade, maxGrade} = useSelector<AppRootStateType, searchPanelInitialStateType>(state => state.search);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCardTC(id));
    }, []);

    const {id} = useParams();


    const onDeleteCard = (cardId: string,cardsPackId:string) => {
        dispatch(deleteCardTC(cardId, cardsPackId));
    }
    const onAddCard = () => {
        dispatch(addCardTC({
            card: {
                cardsPack_id: id
            }
        }));
    }
    const onUpdateCard = (cardId: string) => {
        dispatch(updateCardTC({card:{_id:cardId}},id))
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
                    <button onClick={() => onDeleteCard(card._id, card.cardsPack_id)}>
                        DEL
                    </button>
                </div>
            }
        },
    ];
    const onChangePage = (page: number, pageSize: number | undefined) => {
        dispatch(setCurrentPage(page));
        dispatch(getCardTC(id,minGrade,maxGrade,page,pageSize,searchValue));
    }
    const onShowSizeChange = (current: number, pageSize: number) => {
        dispatch(setPageSize(pageSize));
        dispatch(getCardTC(id,minGrade,maxGrade,current,pageSize,searchValue));
    }


    return (
        <>
            {/*<Status title={'Packs'} status={status} error={error}/>*/}



            <Table<CardsType> dataSource={cards} columns={columns} pagination={false} rowKey={'_id'}/>

            <Pagination current={page as number}
                        defaultCurrent={1}
                        onChange={onChangePage}
                        pageSize={pageCount as number}
                        defaultPageSize={10}
                        total={cardsTotalCount as number}
                        onShowSizeChange={onShowSizeChange}/>
        </>
    );
});