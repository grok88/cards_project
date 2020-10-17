import React, {useCallback, useEffect, useState} from "react";
import {Profile} from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {ResponseDataType} from "../../a1-login/l3-dal/LoginAPI";
import {Redirect} from "react-router-dom";
import {PATH} from "../../../../n1-main/m1-ui/main/routes/Routes";
import {authMeTC, logOutTC} from "../../a1-login/l2-bll/loginThunk";

type ProfileContainerPropsType = {}

export const ProfileContainer: React.FC<ProfileContainerPropsType> = React.memo(() => {

        const user = useSelector<AppRootStateType, ResponseDataType | null>(state => state.profile.user);
        const isLoginIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoginIn);
        const [flag, setFlag] = useState<boolean>(false);
        const dispatch = useDispatch();

        useEffect(() => {
            if (!isLoginIn) {
                handleAuth();
            }
            // return () => {
            //     clearTimeout(id);
            // }
        }, []);

        const handleAuth = async () => {
            await dispatch(authMeTC());
            let id = setTimeout(() => {
                setFlag(true);
            }, 2000);
        }

        const logOut = useCallback(() => {
            dispatch(logOutTC());
        }, []);


        if (!isLoginIn && flag) {
            return <Redirect to={PATH.LOGIN}/>
        }

        return (
            <Profile user={user} isLoginIn={isLoginIn} logOut={logOut}/>
        );
    }
);