import React from "react";
import './Home.scss'
import Header from './../Header/Header'
import Search from './../Search/Search'
import Nav from './../Nav/Nav'
import { Carousel } from 'antd'
class Home extends React.Component {
	render() {
		return (
			<div id="home">
                <Header/>
                <Search/>
                <Nav/>
                <Carousel autoplay={true}>
                    <div><img src={require('./../../assets/banner01.jpg')}/></div>
                    <div><img src={require('./../../assets/banner02.jpg')}/></div>
                    <div><img src={require('./../../assets/banner03.jpg')}/></div>
                </Carousel>
                <div className="explainList">
                    <div className="main">
                        <div className="listItem">
                            <img src={require('./../../assets/icon_standard.png')} alt="官方资质标准"/>
                            <div className="rightContent">
                                <h4>官方资质标准</h4>
                                <p>查一查国家最新审批标准</p>
                            </div>
                        </div>
                        <div className="listItem">
                            <img src={require('./../../assets/icon_counter.png')} alt="官方资质标准"/>
                            <div className="rightContent">
                                <h4>资质计算器</h4>
                                <p>算一算办资质要多少钱</p>
                            </div>
                        </div>
                        <div className="listItem">
                            <img src={require('./../../assets/icon_offer.png')} alt="官方资质标准"/>
                            <div className="rightContent">
                                <h4>免费报价</h4>
                                <p>询一询正规公司精准报价</p>
                            </div>
                        </div>
                        <div className="listItem">
                            <img src={require('./../../assets/icon_commission.png')} alt="官方资质标准"/>
                            <div className="rightContent">
                                <h4>正规代办公司</h4>
                                <p>挑一挑服务能力哪家强</p>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		)
	}
}

export default Home;