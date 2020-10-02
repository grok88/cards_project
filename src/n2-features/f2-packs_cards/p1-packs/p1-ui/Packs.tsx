import React, {useEffect} from "react";
import {Pagination, Space, Table} from "antd";
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
import {Sort} from "../../../../n0-common/c1-ui/sort/s1-ui/Sort";
import {SortInitialStateType} from "../../../../n0-common/c1-ui/sort/s2-bll/SortInitialState";
import {sortByField} from "../../../../n0-common/c1-ui/sort/s2-bll/SortActions";

type PacksPropsType = {}

export const Packs: React.FC<PacksPropsType> = React.memo((props) => {

    const {cardPacks, cardPacksTotalCount, page, pageCount} = useSelector<AppRootStateType, PacksInitialStateType>(state => state.packs);
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.main.status);
    const error = useSelector<AppRootStateType, null | string>(state => state.main.error);
    const {currentPage, pageSize} = useSelector<AppRootStateType, PaginationInitialStateType>(state => state.pagination);
    const {searchValue, minCardsCount, maxCardsCount} = useSelector<AppRootStateType, searchPanelInitialStateType>(state => state.search);
    const {sort} = useSelector<AppRootStateType, SortInitialStateType>(state => state.sort);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(packTC());
    }, []);

    //cards block
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
    // sort block
    const onSortUp = () => {
        dispatch(sortByField('0updated'));
        dispatch(packTC(pageSize, page, minCardsCount, maxCardsCount, searchValue, '0updated'));
    }
    const onSortDown = () => {
        dispatch(sortByField('1updated'));
        dispatch(packTC(pageSize, page, minCardsCount, maxCardsCount, searchValue, '1updated'));
    }
    //table block
    const columns = [
        {
            title: 'name',
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
            title: <div style={{display: "flex", alignItems: 'center'}}>
                <Space>
                    <span>updated</span>
                    <Sort onSortUp={onSortUp} onSortDown={onSortDown}/>
                </Space>
            </div>,
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
                    <Space>
                        <Button onClick={() => onUpdatePack(pack._id)}>
                            update
                        </Button>
                        <button onClick={() => onDeletePack(pack._id)}>
                            DEL
                        </button>
                        <NavLink to={`/cards/${pack._id}`}>cards</NavLink>
                    </Space>
                </div>
            }
        },
    ];

    //pagination
    const onChangePage = (page: number, pageSize: number | undefined) => {
        dispatch(setCurrentPage(page));
        dispatch(packTC(pageSize, page, minCardsCount, maxCardsCount, searchValue, sort));
    }
    const onShowSizeChange = (current: number, pageSize: number) => {
        dispatch(setPageSize(pageSize));
        dispatch(packTC(pageSize, current, minCardsCount, maxCardsCount, searchValue, sort));
    }

    return (
        <>
            {/*<Status title={'Packs'} status={status} error={error}/>*/}
            <SearchPanel minCardsCount={minCardsCount} maxCardsCount={maxCardsCount} pageSize={pageSize}
                         currentPage={currentPage}/>
            <Table<PacksType> dataSource={cardPacks} columns={columns}
                              pagination={false}
                              rowKey={'_id'}

            />

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