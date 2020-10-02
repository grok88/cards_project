import React, {useEffect} from "react";
import {Pagination, Table} from "antd";
import 'antd/dist/antd.css';
import {useDispatch, useSelector} from "react-redux";
import {addPackTC, deletePackTC, packTC, updatePackTC} from "../p2-bll/packsThunk";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {PacksInitialStateType, PacksType} from "../p2-bll/packsInitialState";
import {RequestStatusType} from "../../../../n1-main/m2-bll/b1-main/mainInitialState";
import Button from "antd/lib/button";
import {NavLink} from "react-router-dom";
import {setCurrentPage, setPageSize} from "../../../../n0-common/c1-ui/pagination/p2_bll/paginationActions";
import {PaginationInitialStateType} from "../../../../n0-common/c1-ui/pagination/p2_bll/paginationInitialState";
import {SearchPanel} from "../../p3-search-panel/s1-ui/SearchPanel";
import {searchPanelInitialStateType} from "../../p3-search-panel/s2-bll/searchPanelInitialState";

type PacksPropsType = {}

export const Packs: React.FC<PacksPropsType> = React.memo((props) => {

    const {cardPacks, cardPacksTotalCount, page, pageCount} = useSelector<AppRootStateType, PacksInitialStateType>(state => state.packs);
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.main.status);
    const error = useSelector<AppRootStateType, null | string>(state => state.main.error);
    const {currentPage, pageSize} = useSelector<AppRootStateType, PaginationInitialStateType>(state => state.pagination);
    const {searchValue, minCardsCount, maxCardsCount} = useSelector<AppRootStateType, searchPanelInitialStateType>(state => state.search);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(packTC());
    }, []);


    const onDeletePack = (packId: string) => {
        dispatch(deletePackTC(packId));
    }
    const onAddPack = () => {
        const name = 'New Grok Pack'
        dispatch(addPackTC({
            cardsPack: {
                name
            }
        }));
    }
    const onUpdatePack = (packId: string) => {
        const name = 'New Grok Update Pack';
        dispatch(updatePackTC({
            cardsPack: {
                name,
                _id: packId
            }
        }));
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            // key: '_id',

            // render: (pack: PacksType) => {
            //     return <div style={{color: "red"}}>{pack.type}{ pack.name}</div>
            // }
        },
        {
            title: 'cardsCount',
            dataIndex: 'cardsCount',
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
            title: <button onClick={onAddPack}>ADD</button>,
            // dataIndex: 'actions',
            render: (pack: PacksType) => {
                return <div>
                    <Button onClick={() => onUpdatePack(pack._id)}>
                        update
                    </Button>
                    <button onClick={() => onDeletePack(pack._id)}>
                        DEL
                    </button>
                    <NavLink to={`/cards/${pack._id}`}>cards</NavLink>
                </div>
            }
        },
    ];

    //pagination
    const onChangePage = (page: number, pageSize: number | undefined) => {
        dispatch(setCurrentPage(page));
        dispatch(packTC(pageSize, page, minCardsCount, maxCardsCount, searchValue));
    }
    const onShowSizeChange = (current: number, pageSize: number) => {
        dispatch(setPageSize(pageSize));
        dispatch(packTC(pageSize, current, minCardsCount, maxCardsCount, searchValue));
    }

    return (
        <>
            {/*<Status title={'Packs'} status={status} error={error}/>*/}
            <SearchPanel minCardsCount={minCardsCount} maxCardsCount={maxCardsCount} pageSize={pageSize}
                         currentPage={currentPage}/>
            <Table<PacksType> dataSource={cardPacks} columns={columns}
                              pagination={false}
                              rowKey={'_id'}/>

            <Pagination current={page as number}
                        defaultCurrent={1}
                        onChange={onChangePage}
                        pageSize={pageCount as number}
                        defaultPageSize={10}
                        total={cardPacksTotalCount as number}
                        onShowSizeChange={onShowSizeChange}/>
        </>
    );
});