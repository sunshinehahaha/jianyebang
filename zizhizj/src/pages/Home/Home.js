import React from "react";
import './Home.scss'
import Header from './../Header/Header'
import Search from './../Search/Search'
import Nav from './../Nav/Nav'
import { Carousel } from 'antd'
import QuaQueryChannel from './QuaQueryChannel'
import EnterQualificationService from './EnterQualificationService'
import FreeQuotations from './FreeQuotations'
import CompanyPurchase from './CompanyPurchase'
import DirectoryOfConstEnter from './DirectoryOfConstEnter'
import TalentRecruitment from './TalentRecruitment'
import TalentExam from './TalentExam'
import Footer from './../Footer/Footer'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lunboArr:  [{img: require('./../../assets/banner01.jpg'), imgAlt: '找工作，考证书'},
                        {img: require('./../../assets/banner02.jpg'), imgAlt: '专业顾问，精准匹配'},
                        {img: require('./../../assets/banner03.jpg'), imgAlt: '资质，人员，业绩'}]
        }
    }
	render() {
        const {lunboArr} = this.state
		return (
			<div id="home">
                <Header/>
                <Search/>
                <Nav/>
                <Carousel autoplay={true}>
                    {
                        lunboArr && lunboArr.map((item, index)=>{
                            return (
                                <div key={index}>
                                    <img src={item.img} alt={item.imgAlt}/>
                                </div>
                            )
                        })
                    }
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
                            <img src={require('./../../assets/icon_counter.png')} alt="资质计算器"/>
                            <div className="rightContent">
                                <h4>资质计算器</h4>
                                <p>算一算办资质要多少钱</p>
                            </div>
                        </div>
                        <div className="listItem">
                            <img src={require('./../../assets/icon_offer.png')} alt="免费报价"/>
                            <div className="rightContent">
                                <h4>免费报价</h4>
                                <p>询一询正规公司精准报价</p>
                            </div>
                        </div>
                        <div className="listItem">
                            <img src={require('./../../assets/icon_commission.png')} alt="正规代办公司"/>
                            <div className="rightContent">
                                <h4>正规代办公司</h4>
                                <p>挑一挑服务能力哪家强</p>
                            </div>
                        </div>
                    </div>
                </div>
                <QuaQueryChannel/>
                <EnterQualificationService/>
                <FreeQuotations/>
                <CompanyPurchase/>
                <DirectoryOfConstEnter/>
                <TalentRecruitment/>
                <TalentExam/>
                <Footer/>
			</div>
		)
	}
}

export default Home;