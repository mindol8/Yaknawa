import React, { useState, useRef } from "react";
import Header from '../component/Header/Header_home';
import Footer from '../component/Footer/Footer';
import Board from '../component/Body/Board';
import Grid from '@material-ui/core/Grid';
import Search from '../component/Action/Search';
import '../style/css/style.css';

const Home = (props) => {
    const most = "인기";
    const theme1 = "비만";
    const theme2 = "영양제";
    const theme3 = "여드름";
    const theme4 = "피임";
    const theme5 = "발기부전";
    const theme6 = "탈모";
    return (
        <div>
            <Header/>
            <div className="body">
                <Search />
                <Grid container spacing={5}>
                    <Grid item lg={8}>
                        <Board title={most} className="board-most-grid"/>
                        <Grid container  className="board-theme-grid">
                            <Grid item lg={6}>
                                <Board title={theme1} />
                                <br/>
                                <Board title={theme3} />
                                <br/>
                                <Board title={theme5} />
                            </Grid>
                            <Grid item lg={6}>
                                <Board title={theme2} />
                                <br/>
                                <Board title={theme4} />
                                <br/>
                                <Board title={theme6} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={4}>
                        실시간 의약품 가격보기
                    </Grid>
                </Grid>

            </div>
            <Footer />
        </div>

    );
}

export default Home;