import React, {useCallback, useEffect, useState} from "react";
import {Restore} from "./Restore";
import {Status} from "../../../../n0-common/c1-ui/status/Status";
import {useDispatch, useSelector} from "react-redux";
import {RestorePassTC} from "../r2-bll/restoreThunk";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {RequestStatusType} from "../../../../n1-main/m2-bll/b1-main/mainInitialState";
import {setError, setStatus} from "../../../../n1-main/m2-bll/b1-main/mainActions";

type RestoreContainerPropsType = {}

export const RestoreContainer: React.FC<RestoreContainerPropsType> = React.memo((props) => {

    const error = useSelector<AppRootStateType, null | string>(state => state.main.error);
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.main.status);
    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>('grok88@tut.by');

    const [firstVisited, setFirstVisited] = useState<boolean>(true);

    useEffect(() => {
        if (firstVisited) {
            dispatch(setError(''));
            dispatch(setStatus('idle'));
            setFirstVisited(false);
        }
    }, [firstVisited, setFirstVisited]);

    const onRestore = useCallback(() => {
        //thunk
        const from = "test-front-admin <ai73a@yandex.by>";
        const message = `<div style="background-color: lime; padding: 15px">		
	<a href='http://localhost:3000/cards_project#/set-new-password/$token$'>	
	link</a></div>`

        dispatch(RestorePassTC({email, from, message}));
    }, [email]);

    return (
        <div style={{
            width: '40%',
            // outline: '1px solid red',
            margin: '0 auto',
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            alignItems: 'center'
        }}>
            <Status title={'Restore'} status={status} error={error}/>
            <Restore email={email} setEmail={setEmail} onRestore={onRestore} status={status}/>
        </div>
    );
});



