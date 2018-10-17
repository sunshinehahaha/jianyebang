import React from "react";
import './EnterQualificationService.scss'
class EnterQualificationService extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            EnterQuaServiceData: [
                {projectName: '建筑-甲级-工程设计行业资质', projectNum: 1, content: '甲级-工程设计行业资质', imgSrc1: '', imgSrc2: '', price: '1800万', location: '北京', year: '2022年', registMoney: '4000万'},
                {projectName: '建筑-甲级-工程设计行业资质', projectNum: 1, content: '甲级-工程设计行业资质', imgSrc1: '', imgSrc2: '', price: '1800万', location: '北京', year: '2022年', registMoney: '4000万'},
                {projectName: '建筑-甲级-工程设计行业资质', projectNum: 1, content: '甲级-工程设计行业资质', imgSrc1: '', imgSrc2: '', price: '1800万', location: '北京', year: '2022年', registMoney: '4000万'},
                {projectName: '建筑-甲级-工程设计行业资质', projectNum: 1, content: '甲级-工程设计行业资质', imgSrc1: '', imgSrc2: '', price: '1800万', location: '北京', year: '2022年', registMoney: '4000万'},
                {projectName: '建筑-甲级-工程设计行业资质', projectNum: 1, content: '甲级-工程设计行业资质', imgSrc1: '', imgSrc2: '', price: '1800万', location: '北京', year: '2022年', registMoney: '4000万'},
                {projectName: '建筑-甲级-工程设计行业资质', projectNum: 1, content: '甲级-工程设计行业资质', imgSrc1: '', imgSrc2: '', price: '1800万', location: '北京', year: '2022年', registMoney: '4000万'},
            ]
        }
    }

	render() {
        const {EnterQuaServiceData} = this.state
		return (
			<div id="EnterQualificationService">
                <div className="main">
                    <div className="EnterQuaService">
                        <h1>企业资质服务</h1>
                        <p className="imgLine">
                            <img src={require('./../../assets/block_title_bg_white.png')} alt="资质快捷查询通道"/>
                        </p>
                    </div>
                    <div className="equityTransfer">
                        <span>股权转让</span>
                        <span>热门出售资质 马上开抢</span>
                        <span className="line"></span>
                    </div>
                    <div className="serviceList main">
                    {
                        EnterQuaServiceData && EnterQuaServiceData.map((item, index)=>{
                            return (
                                <div className="serviceItem" key={index}>
                                    <div className="serviceItemTop">
                                        <div className="serviceItemLeft">
                                            <h3>{item.projectName}</h3>
                                            <p className="companyContain">
                                                该公司还包含：
                                                <span>{item.projectNum}项</span>
                                            </p>
                                            <p className="intro">{item.content}</p>
                                        </div>
                                        <div className="serviceItemRight">
                                            <div className="imgBox">
                                                <img/>
                                            </div>
                                            <div className="imgBox imgBox2">
                                                <img/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="price">{item.price}</div>
                                    <div className="serviceItemBottom">
                                        <span className="item">
                                            <i className="iconfont">&#xe644;</i>
                                            <span>{item.location}</span>
                                        </span>
                                        <span className="item">
                                            <i className="iconfont">&#xe607;</i>
                                            <span>{item.year}</span>
                                        </span>
                                        <span className="item">
                                            <i className="iconfont">&#xe631;</i>
                                            <span>注册资金{item.registMoney}元</span>
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
			</div>                              
		)
	}
}

export default EnterQualificationService;