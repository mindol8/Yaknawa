import React, { PureComponent } from 'react';
import './component_css/Header.css';
import Search from './Search';
import logo from './component_img/yaknawa-logo2.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class Header_ver2 extends PureComponent {

    constructor(props) {
        super(props);
        this.click_alert = this.click_alert.bind(this);
    }

    click_alert() {
        alert("click");
    }

    render() {
        return (
            <div className="header">
                <Container fluid className="user-tab">
                    <Row>
                        <Col lg={9}>
                        </Col>
                        <Col lg={2}>
                            <ul className="user-tab-ul">
                                <li className="user-tab-li">
                                    <Link to="/login">로그인</Link>
                                </li>
                                <li className="user-tab-li">
                                    <Link to="/joinus">회원가입</Link>
                                </li>
                                <li className="user-tab-li">
                                    <a>공지사항</a>
                                </li>
                                <li className="user-tab-li-last">
                                    <a>문의하기</a>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={1}>
                        </Col>
                    </Row>

                </Container>
                <Container fluid className='site-tab'>
                    <Row>
                        <Col lg={1}>
                        </Col>
                        <Col lg={2}>
                            <a href="/">
                                <img src={logo} alt="No img" className="logo">
                                </img>
                            </a>
                        </Col>
                        <Col lg={3} className='main-tab'>
                            <ul className="main-tab-ul">
                                <li className="main-tab-li">
                                    <Link to="/">홈</Link>
                                </li>
                                <li className="main-tab-li">
                                    <Link to="/priceform">약값 비교</Link>
                                </li>
                                <li className="main-tab-li">
                                    <a>주변 약국</a>
                                </li>

                            </ul>
                        </Col>
                        <Col lg={4} className="sub-search">
                            <Search />
                        </Col>
                        <Col lg={1} className="main-tab">
                            <Link to="/share">
                                <Button variant="success">
                                    글쓰기
                    </Button>
                            </Link>
                        </Col>
                        < Col lg={1}>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default Header_ver2;



