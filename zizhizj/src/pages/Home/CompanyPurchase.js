import React from "react";
import './CompanyPurchase.scss'
import { Carousel } from 'antd'
class CompanyPurchase extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            companyPurchaseData: [
                {location: '四川', content: '收购建筑资质，收购建筑资质', intro: '建筑工程施工总承包资质一级', ask: '无债务纠纷，信用良好等', way: '面议', contactPerson: '王哥', contactTel: '028-66565655'},
                {location: '四川', content: '收购建筑资质，收购建筑资质', intro: '建筑工程施工总承包资质一级', ask: '无债务纠纷，信用良好等', way: '面议', contactPerson: '王哥', contactTel: '028-66565655'},
                {location: '四川', content: '收购建筑资质，收购建筑资质', intro: '建筑工程施工总承包资质一级', ask: '无债务纠纷，信用良好等', way: '面议', contactPerson: '王哥', contactTel: '028-66565655'}
                ],
            purchaseImgs: [require('./../../assets/wanttobuy_ad.jpg'), require('./../../assets/wanttobuy_ad.jpg'), require('./../../assets/wanttobuy_ad.jpg')]
        }
    }

	render() {
        const {companyPurchaseData, purchaseImgs} = this.state
		return (
			<div id="CompanyPurchase">
                <div className="main">
                    <div className="companyPurchaseTitle">
                        <span>公司求购</span>
                        <span>在线咨询 免费获取精准报价</span>
                        <span className="line"></span>
                        <a>更多 >></a>
                    </div>
                    <div className="companyContent">
                        <div className="companyList">
                        {
                            companyPurchaseData && companyPurchaseData.map((item, index)=>{
                                return (
                                    <div className="companyItem" key={index}>
                                        <span className="borderLine"></span>
                                        <span className="borderImg">
                                            <img src={require('./../../assets/icon_want.png')}/>
                                        </span>
                                        <h3>
                                            <span>{item.location}</span>丨<span>{item.content}</span>
                                        </h3>
                                        <p className="intro">{item.intro}</p>
                                        <p className="ask">要求：{item.ask}</p>
                                        <p className="faceToFace">{item.way}</p>
                                        <div className="contact">
                                            <span className="location">
                                                <i className="iconfont">&#xe61e;</i>
                                                {item.location}
                                            </span>
                                            <span className="contactPerson">
                                                联系人：{item.contactPerson}
                                            </span>
                                            <span className="contactTel">
                                                联系电话：{item.contactTel}
                                            </span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div className="rightImg">
                            <Carousel autoplay>
                                {
                                    purchaseImgs && purchaseImgs.map((item, index)=>{
                                        return (
                                                <div key={index}><img src={item}/></div>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
			</div>                              
		)
	}
}

export default CompanyPurchase;