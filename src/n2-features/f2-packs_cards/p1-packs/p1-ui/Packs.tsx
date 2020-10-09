import React, {useEffect, useState} from "react";
import {Button, Pagination, Space, Table} from "antd";
import 'antd/dist/antd.css';
import {useDispatch, useSelector} from "react-redux";
import {addPackTC, deletePackTC, packTC, updatePackTC} from "../p2-bll/packsThunk";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {PacksInitialStateType, PacksType} from "../p2-bll/packsInitialState";
import {RequestStatusType} from "../../../../n1-main/m2-bll/b1-main/mainInitialState";
import {NavLink} from "react-router-dom";
import {setCurrentPage, setPageSize} from "../../../../n0-common/c1-ui/pagination/p2_bll/paginationActions";
import {PaginationInitialStateType} from "../../../../n0-common/c1-ui/pagination/p2_bll/paginationInitialState";
import {SearchPanel} from "../../p3-search-panel/s1-ui/SearchPanel";
import {searchPanelInitialStateType} from "../../p3-search-panel/s2-bll/searchPanelInitialState";
import {Sort} from "../../../../n0-common/c1-ui/sort/s1-ui/Sort";
import {SortInitialStateType} from "../../../../n0-common/c1-ui/sort/s2-bll/SortInitialState";
import {sortByField} from "../../../../n0-common/c1-ui/sort/s2-bll/SortActions";
import {Modal} from "../../../../n0-common/c1-ui/modal/m1-ui/Modal";
import {setMaxCardsCount, setMinCardsCount} from "../../p3-search-panel/s2-bll/searchPanelActions";

type PacksPropsType = {}

export const Packs: React.FC<PacksPropsType> = React.memo((props) => {

    const {cardPacks, cardPacksTotalCount, page, pageCount} = useSelector<AppRootStateType, PacksInitialStateType>(state => state.packs);
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.main.status);
    const error = useSelector<AppRootStateType, null | string>(state => state.main.error);
    const {currentPage, pageSize} = useSelector<AppRootStateType, PaginationInitialStateType>(state => state.pagination);
    const {searchValue, minCardsCount, maxCardsCount} = useSelector<AppRootStateType, searchPanelInitialStateType>(state => state.search);
    const {sort} = useSelector<AppRootStateType, SortInitialStateType>(state => state.sort);
    const dispatch = useDispatch();


    //modal
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [packName, setPackName] = useState<string>('');
    //modal
    const onModal = () => {
        setIsOpen(true);
    }

    const onClose = () => {
        setIsOpen(false);
    }
    const onSubmit = () => {
        dispatch(addPackTC({
            cardsPack: {
                name: packName
            }
        }));
        onClose();
    }


    useEffect(() => {
        dispatch(packTC());
    }, []);

    //cards block
    const onDeletePack = (packId: string) => {
        dispatch(deletePackTC(packId));
    }

    const onUpdatePack = (packId: string, newPackName: string) => {
        dispatch(updatePackTC({
            cardsPack: {
                name: newPackName,
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
            // title: <button onClick={onAddPack}>ADD</button>,
            title: <Button onClick={onModal} onKeyDown={(e) => {
                if (e.key = 'Escape') {
                    onClose();
                }
            }
            }>ADD</Button>,
            // dataIndex: 'actions',
            render: (pack: PacksType) => {
                return <ModalDeleteAndUpdatePacks pack={pack} deletePack={onDeletePack} UpdatePack={onUpdatePack}/>
            }
        },
    ];

    //pagination
    const onChangePage = (page: number, pageSize: number | undefined) => {
        dispatch(setCurrentPage(page));
        dispatch(setPageSize(pageSize ? pageSize : 10));
        dispatch(packTC(pageSize, page, minCardsCount, maxCardsCount, searchValue, sort));
    }

    //searchPanel
    const onChange = ([val1, val2]: Array<number>) => {
        dispatch(setMinCardsCount(val1));
        dispatch(setMaxCardsCount(val2));
    }
    const onSearchSubmit = (value:string) => {
        dispatch(packTC(pageSize, currentPage, minCardsCount, maxCardsCount, value));
    }

    return (
        <>
            {/*<Status title={'Packs'} status={status} error={error}/>*/}

            <Modal title={'Введите название колоды'} onClose={onClose} isOpen={isOpen}>
                <input type="text" value={packName} onChange={e => setPackName(e.currentTarget.value)}/>
                <button onClick={onSubmit}>создать</button>
            </Modal>

            <SearchPanel minCardsCount={minCardsCount} maxCardsCount={maxCardsCount} pageSize={pageSize}
                         currentPage={currentPage} onChange={onChange} onSearchSubmit={onSearchSubmit}/>
            <Table<PacksType> dataSource={cardPacks} columns={columns}
                              pagination={false}
                              rowKey={'_id'}

            />

            <Pagination style={{padding: '20px'}}
                current={page as number}
                        defaultCurrent={1}
                        onChange={onChangePage}
                        pageSize={pageCount as number}
                        defaultPageSize={10}
                        total={cardPacksTotalCount as number}
                // onShowSizeChange={onShowSizeChange}
            />
        </>
    );
});

type ModalBTNType = {
    pack: PacksType;
    UpdatePack: (packID: string, newPackName: string) => void;
    deletePack: (packID: string) => void;

}
export const ModalDeleteAndUpdatePacks: React.FC<ModalBTNType> = (props) => {

    const {pack, deletePack, UpdatePack} = props;
    const dispatch = useDispatch();
    //modal

    //UPDATE
    const [isUpdateOpen, setUpdateOpen] = useState<boolean>(false);
    const [packName, setPackName] = useState<string>('');

    const onUpdateOpen = () => {
        setUpdateOpen(true);
    }
    const onUpdateClose = () => {
        setUpdateOpen(false);
    }
    const onUpdateSubmit = () => {
        UpdatePack(pack._id, packName);
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
        deletePack(pack._id);
        onDeleteClose();
    }


    return <div>
        <Space>

            <Modal title={'Are you sure?'} onClose={onDeleteClose} isOpen={isDeleteOpen}>
                <button onClick={onDeleteSubmit}>Yes</button>
                <button onClick={onDeleteClose}>No</button>
            </Modal>

            <Modal title={'Введите новое название колоды'} onClose={onUpdateClose} isOpen={isUpdateOpen}>
                <input type="text" value={packName} onChange={e => setPackName(e.currentTarget.value)}/>
                <button onClick={onUpdateSubmit}>Обновить</button>
            </Modal>

            <Button onClick={onUpdateOpen} onKeyDown={(e) => {
                if (e.key = 'Escape') {
                    onUpdateClose();
                }}}>
                update
            </Button>
            <Button onClick={onDeleteOpen} danger={true} onKeyDown={(e) => {
                if (e.key = 'Escape') {
                    onDeleteClose();
                }}}>
                DEL
            </Button>
            <NavLink to={`/cards/${pack._id}`}>cards</NavLink>
            <NavLink to={`/learn/${pack._id}`}>learn</NavLink>
        </Space>
    </div>
}