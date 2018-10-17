import React from "react";
import './FreeQuotations.scss'
class FreeQuotations extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: '236835'
        }
    }
	render() {
        const {number} = this.state
		return (
			<div id="FreeQuotations">
                <div className="bgImg">
                    <div className="main">
                        <div className="titleContent">
                            <h3>免费获取资讯报价</h3>
                            <span className="line">|</span>
                            <span className="offerService">已为
                                <span>{number}</span>人提供咨询服务
                            </span>
                        </div>
                        <div className="offerServiceBottom">
                            <div className="left">
                                <i className="iconfont">&#xe6d1;</i>
                                <span className="spanLine"></span>
                                <span className="address">四川成都</span>
                                <i className="iconfont">&#xe60c;</i>
                            </div>
                            <div className="left center">
                                <i className="iconfont">&#xe641;</i>
                                <span className="spanLine"></span>
                                <input className="address inputContent" placeholder="028-6655115656"/>
                                <i className="iconfont"></i>
                            </div>
                            <div className="applyBtn">
                                立即申请
                            </div>
                        </div>
                    </div>
                </div>
			</div>                              
		)
	}
}

export default FreeQuotations;