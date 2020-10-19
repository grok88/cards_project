import React, {ChangeEvent, useRef, useState} from "react";
import {ResponseDataType} from "../../a1-login/l3-dal/LoginAPI";
import anonym from './anonim.jpg'
import {Button} from "antd";
import {axiosInstance} from "../../../../n1-main/m3-dal/instance";
import {useDispatch} from "react-redux";
import {setUser} from "../p2-bll/profileActions";
import {setImg} from "../p2-bll/profileThunk";

type ProfilePropsType = {
    user: ResponseDataType | null;
    isLoginIn: boolean;
    logOut: () => void;
}

export const Profile: React.FC<ProfilePropsType> = React.memo((props) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const uploadImg = (e: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();

        const newFile = e.target.files && e.target.files[0];

        if (newFile) {
            reader.onload = () => {
               dispatch(setImg( {
                   token: props.user && props.user.token,
                   avatar: reader.result,
                   name: props.user && props.user.name
               }))
            }
            // ..перевод в base64
            reader.readAsDataURL(newFile);
        }
    }

    return <div>
        {
            props.isLoginIn ? <div>
                <div>
                    <img src={props.user ? props.user.avatar : anonym} alt="user-avatar"
                         style={{width: '300px', height: 'auto'}}/>
                    <input type="file"
                           ref={inputRef}
                           style={{display: 'none'}}
                           onChange={uploadImg}
                           accept='.jpg, .jpeg, .png ,.txt'
                    />
                    <Button onClick={() => {
                        inputRef && inputRef.current && inputRef.current.click()
                    }}>ChangeAvator</Button>
                </div>
                <div>
                    <p>name:{props.user?.name}</p>
                    <p>email:{props.user?.email}</p>
                </div>
                <button onClick={props.logOut}>LogOut</button>
            </div> : <div> You are not authorized </div>
        }
    </div>
});