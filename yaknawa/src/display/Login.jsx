import React, { useState, useRef } from "react";
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import Grid from '@material-ui/core/Grid';
import Form from "react-validation/build/form";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import '../style/css/style.css';

const Login = (props) => {
    const form = useRef();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const onChangeId = (e) => {
        const id = e.target.value;
        setId(id);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);

    };

    return (
        <div>
            <Header />
            <div className="body">
                <div className="position-center text-lg"><strong>로그인</strong></div>
                <div className="upperline share-body left-space-lg right-space-lg ">
                    <Form ref={form} className="login-box">
                        <Grid container>
                            <Grid item lg={4}></Grid>
                            <Grid item lg={4}>
                                <TextField
                                    id="margin-none"
                                    className="size-full postion-center"
                                    name="id"
                                    placeholder="ID를 입력해주세요"
                                    variant="outlined"
                                    value={id}
                                    onChange={onChangeId}
                                    autoFocus
                                />
                                <br /><br />
                                <TextField
                                    id="margin-none"
                                    type="password"
                                    className="size-full postion-center"
                                    placeholder="PassWord를 입력해주세요"
                                    name="password"
                                    variant="outlined"
                                    onChange={onChangePassword}
                                    value={password}

                                />
                                <br /><br />
                                <div className="position-right">
                                    <Link className="link-nonunderline link-gray text-sm">아이디 찾기</Link>&nbsp;|&nbsp; <Link className="link-nonunderline link-gray text-sm">비밀번호 찾기</Link>
                                </div>
                                <br/><br/>
                            
                                <Button variant="contained" color="primary" className=" position-center size-full">
                            로그인
                                </Button>
                            </Grid>
                            <Grid item lg={4}></Grid>
                        </Grid>
                       

                    </Form>
                </div>
            </div>

            <Footer />
        </div>

    );
}

export default Login;