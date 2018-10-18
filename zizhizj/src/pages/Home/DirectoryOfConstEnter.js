import React from "react";
import './DirectoryOfConstEnter.scss'
class DirectoryOfConstEnter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            enterData: [
                {company: '深圳汇诚信息咨询有限公司', address: '北京市通州区九棵树瑞都国际中心', contactPerson: '王哥', contactTel: '028-9988665'},
                {company: '深圳汇诚信息咨询有限公司', address: '北京市通州区九棵树瑞都国际中心', contactPerson: '王哥', contactTel: '028-9988665'},
                {company: '深圳汇诚信息咨询有限公司', address: '北京市通州区九棵树瑞都国际中心', contactPerson: '王哥', contactTel: '028-9988665'},
                {company: '深圳汇诚信息咨询有限公司', address: '北京市通州区九棵树瑞都国际中心', contactPerson: '王哥', contactTel: '028-9988665'},
                {company: '深圳汇诚信息咨询有限公司', address: '北京市通州区九棵树瑞都国际中心', contactPerson: '王哥', contactTel: '028-9988665'},
                {company: '深圳汇诚信息咨询有限公司', address: '北京市通州区九棵树瑞都国际中心', contactPerson: '王哥', contactTel: '028-9988665'}
            ]
        }
    }

	render() {
        const {enterData} = this.state
		return (
			<div id="DirectoryOfConstEnter">
                <div className="main">
                    <div className="enterTitle">
                        <h1>建筑企业名录</h1>
                        <p className="imgLine">
                            <img src={require('./../../assets/block_title_bg.png')} alt="资质快捷查询通道"/>
                        </p>
                    </div>
                    <div className="directoryList">
                    {
                        enterData && enterData.length <= 6 && enterData.map((item, index)=>{
                            return (
                                <div className="directoryItem" key={index}>
                                    <div className="itemLeft">
                                        <img/>
                                    </div>
                                    <div className="itemInfo">
                                        <h3>{item.company}</h3>
                                        <p className="address">
                                            <i className="iconfont">&#xe61e;</i>
                                            <span>地址：{item.address}</span>
                                        </p>
                                        <p className="contact-info">
                                            <i className="iconfont">&#xe601;</i>
                                            <span className="contact-person">
                                                <span>联系人：{item.contactPerson}</span>
                                                <span>联系电话：{item.contactTel}</span>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className="findMoreDiv">
                        <a className="findMore">查看更多</a>
                    </div>
                </div>
			</div>                              
		)
	}
}

export default DirectoryOfConstEnter;