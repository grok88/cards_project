import React, {useEffect} from "react";
import {Table} from "antd";
import 'antd/dist/antd.css';
import {useDispatch, useSelector} from "react-redux";
import {deletePackTC, packTC} from "../p2-bll/packsThunk";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {PacksType} from "../p2-bll/packsInitialState";
import {RequestStatusType} from "../../../../n1-main/m2-bll/b1-main/mainInitialState";
import Button from "antd/lib/button";

type PacksPropsType = {}

export const Packs: React.FC<PacksPropsType> = React.memo((props) => {

    const packs = useSelector<AppRootStateType, Array<PacksType>>(state => state.packs.packs);
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.main.status);
    const error = useSelector<AppRootStateType, null | string>(state => state.main.error);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(packTC());
    }, []);


    const onDeletePack = (packId: string) => {
        dispatch(deletePackTC(packId));
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
            title: <button>ADD</button>,
            // dataIndex: 'actions',
            render: (pack: PacksType) => {
                return <div>
                    <Button>
                        update
                    </Button>

                    <button onClick={() => onDeletePack(pack._id)}>
                        DEL
                    </button>
                    <a href="#">cards</a>
                </div>
            }
        },
    ];

    return (
        <>
            {/*<Status title={'Packs'} status={status} error={error}/>*/}
            <Table<PacksType> dataSource={packs} columns={columns} pagination={false} rowKey={'_id'}/>
        </>
    );
});