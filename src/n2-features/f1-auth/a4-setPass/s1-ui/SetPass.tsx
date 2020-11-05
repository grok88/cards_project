import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {RequestStatusType} from "../../../../n1-main/m2-bll/b1-main/mainInitialState";
import {setPassTC} from "../s2-bll/setPassThunk";
import {PATH} from "../../../../n1-main/m1-ui/main/routes/Routes";
import {NavLink, Redirect, useParams} from "react-router-dom";
import {Status} from "../../../../n0-common/c1-ui/status/Status";
import {setError, setStatus} from "../../../../n1-main/m2-bll/b1-main/mainActions";
import {Button, Col, Form, Input, Row} from "antd";
import {useFormik} from "formik";
import styles from './SetPass.module.css'

type SetPassPropsType = {}
export type SetPassParamsType = {
    passOne: string
    passTwo: string
}

//Ant-design FORM
const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};

export const SetPass: React.FC<SetPassPropsType> = React.memo((props) => {

    const isSetPassIn = useSelector<AppRootStateType, boolean>(state => state.setPass.isSetPassIn);
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.main.status);
    const error = useSelector<AppRootStateType, null | string>(state => state.main.error);
    const dispatch = useDispatch();

    // const [password, setPassword] = useState('');
    // const [passwordConfirm, setPasswordConfirm] = useState('');
    const [firstVisited, setFirstVisited] = useState<boolean>(true);

    useEffect(() => {
        if (firstVisited) {
            dispatch(setError(''));
            dispatch(setStatus('idle'));
            setFirstVisited(false);
        }
    }, [firstVisited, setFirstVisited]);

    const {token} = useParams();

    // const onSetPass = () => {
    //     if (password !== passwordConfirm) {
    //         dispatch(setStatus('failed'));
    //         dispatch(setError('passwords are not equal'));
    //     } else {
    //         dispatch(setPassTC({password, resetPasswordToken: token}))
    //     }
    // }

    //formik
    const formik = useFormik({
        initialValues: {
            passOne: '',
            passTwo: ''
        },
        onSubmit: (values: SetPassParamsType) => {
            if (values.passOne !== values.passTwo) {
                dispatch(setStatus('failed'));
                dispatch(setError('passwords are not equal'));
            } else {
                dispatch(setPassTC({password: values.passOne, resetPasswordToken: token}))
            }
        },
    });

    const onFinishFailed = (errorInfo: any) => {
        // console.log('Failed:', errorInfo);
    };

    if (isSetPassIn) {
        return <Redirect to={PATH.LOGIN}/>
    }

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
            <Status title={'SetPassword'} status={status} error={error}/>
            <Row>
                <Col span={24}>

                    <div style={{
                        border: '1px solid black',
                        borderRadius: '10px',
                        padding: '24px 24px 24px 24px',
                        margin: '20px auto'
                    }}>
                        <Form onFinish={formik.handleSubmit} initialValues={formik.values}
                              onFinishFailed={onFinishFailed}  {...layout}>
                            <Form.Item
                                label="Password"
                                name="passOne"
                                rules={[
                                    {
                                        required: true,
                                        message: ' '
                                    },
                                    {
                                        validator: (formItemInfo, inputValue) => {
                                            if (!inputValue.length) return Promise.reject('password is required');
                                            if (inputValue.length <= 7) return Promise.reject('Must be 7 characters or more');

                                            else return Promise.resolve();
                                        }
                                    }
                                ]}
                                hasFeedback
                            >
                                <Input.Password type="password"
                                                placeholder={'enter you password'} {...formik.getFieldProps('passOne')}/>
                            </Form.Item>
                            <Form.Item
                                label="Confirm"
                                name="passTwo"
                                rules={[
                                    {
                                        required: true,
                                        message: ' '
                                    },
                                    {
                                        validator: (formItemInfo, inputValue) => {
                                            if (!inputValue.length) return Promise.reject('password is required');
                                            if (inputValue.length <= 7) return Promise.reject('Must be 7 characters or more');

                                            else return Promise.resolve();
                                        }
                                    }
                                ]}
                                hasFeedback

                            >
                                <Input.Password type="password"
                                                placeholder={'enter you password'} {...formik.getFieldProps('passTwo')}/>
                            </Form.Item>
                            <div className={styles.regInfo}>
                                <Form.Item>
                                    <Button htmlType={'submit'}>set pass</Button>
                                </Form.Item>

                                <div>
                                    <NavLink to={PATH.LOGIN}>login</NavLink>
                                </div>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    );
})
