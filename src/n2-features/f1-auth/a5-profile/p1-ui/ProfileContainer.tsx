import React, {useState} from "react";
import {Profile} from "./Profile";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {ResponseDataType} from "../../a1-login/l3-dal/LoginAPI";
import {Redirect} from "react-router-dom";
import {PATH} from "../../../../n1-main/m1-ui/main/routes/Routes";

type ProfileContainerPropsType = {}

export const ProfileContainer: React.FC<ProfileContainerPropsType> = React.memo(() => {
        const user = useSelector<AppRootStateType, ResponseDataType | null>(state => state.profile.user);
        const isLoginIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoginIn);
        const [flag, setFlag] = useState<boolean>(false);


        if (!isLoginIn) {
            setTimeout(() => {
                setFlag(true);
            }, 2000)
        }

        if (flag) {
            return <Redirect to={PATH.LOGIN}/>
        }

        return (
            <Profile user={user} isLoginIn={isLoginIn}/>
        );
    }
);