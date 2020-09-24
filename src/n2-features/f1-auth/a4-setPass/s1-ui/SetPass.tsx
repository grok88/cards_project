import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {RequestStatusType} from "../../../../n1-main/m2-bll/b1-main/mainInitialState";
import {registerTC} from "../../a2-register/p2-bll/registerThunk";
import {setPassTC} from "../s2-bll/setPassThunk";
import {PATH} from "../../../../n1-main/m1-ui/main/routes/Routes";
import {Redirect} from "react-router-dom";
import {Status} from "../../../../n0-common/c1-ui/status/Status";

type SetPassPropsType = {}

export const SetPass: React.FC<SetPassPropsType> = React.memo((props) => {
    const isSetPassIn = useSelector<AppRootStateType, boolean>(state => state.setPass.isSetPassIn);
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.main.status);
    const error = useSelector<AppRootStateType, null | string>(state => state.main.error);
    const dispatch = useDispatch();
    const [password, setPassword] = useState('')
    const onSetPass = () => {
        //dispatch(setPassTC({password, resetPasswordToken}))
    }
    if (isSetPassIn) {
        return <Redirect to={PATH.LOGIN}/>

    }
    return (
        <div style={{
            width: '40%',
            outline: '1px solid red',
            margin: '0 auto',
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            alignItems: 'center'
        }}>
            <Status title={'SetPassword'} status={status} error={error}/>

            <div>
                <input type="text" placeholder={'enter you password'} value={password}
                       onChange={(e) => setPassword(e.currentTarget.value)}/>
            </div>
            <button onClick={onSetPass}>set pass</button>
        </div>
    );
})