import React from "react";
import {ResponseDataType} from "../../a1-login/l3-dal/LoginAPI";
import anonym from './anonim.jpg'

type ProfilePropsType = {
    user: ResponseDataType | null;
    isLoginIn: boolean
}

export const Profile: React.FC<ProfilePropsType> = React.memo((props) => {
    return <div>
        {
            props.isLoginIn ? <div>
                <div>
                    <img src={props.user?.avatar ? props.user?.avatar : anonym} alt="user-avatar"
                         style={{width: '300px', height: 'auto'}}/>
                </div>
                <div>
                    <p>name:{props.user?.name}</p>
                    <p>email:{props.user?.email}</p>
                </div>
                <button>LogOut</button>
            </div> : <div> You are not authorized </div>
        }
    </div>
});