import React from "react";
import './Header.scss'
import './../../assets/font/iconfont.css'
class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let webGuide = document.querySelector('.webGuide')
        let guideContainer = document.querySelector('.guideContainer')
        webGuide.onmouseover = function() {
            guideContainer.style.display = 'block';
            guideContainer.onmouseover = function() {
                guideContainer.style.display = 'block';
            }
            guideContainer.onmouseout = function() {
                guideContainer.style.display = 'none';
            }
        }
        webGuide.onmouseout = function() {
            guideContainer.style.display = 'none';
        }
    }

	render() {
		return (
			<div id="header">
				<div className="hTop">
                    <div className="main">
                        <ul className="hLeft">
                            <li className="phone">
                                <i className="iconfont mobilePhone">&#xe641;</i>
                                <a href="#">手机站</a>
                                <span className="line"></span>
                                <img src={require('./../../assets/qrcode.jpg')}/>
                            </li>
                            <li className="phone">
                                <i className="iconfont webchat">&#xe69a;</i>
                                <a href="#">微信</a>
                                <span className="line"></span>
                                <img src={require('./../../assets/qrcode.jpg')}/>
                            </li>
                            <li className="kefuTel">
                                <i className="iconfont kefuPhone">&#xe609;</i>
                                <a href="#">客服电话</a>
                                <div className="phonNum">
                                    <i className="iconfont">&#xe632;</i>
                                    <div>
                                        <p>15228888888</p>
                                        <p>15328888888</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="hRight">
                            <li>
                                <span>我是昵称哦！</span>
                                <i className="iconfont">&#xe60c;</i>
                            </li>
                            <li className="back">
                                <a href="#">退出</a>
                                <b className="line"></b>
                            </li>
                            <li className="buildEnter">
                                <span>我是建企</span>
                                <i className="iconfont">&#xe611;</i>
                                <ul>
                                    <li className="item"><a>1</a></li>
                                    <li className="item"><a>1</a></li>
                                    <li className="item"><a>1</a></li>
                                    <li className="item"><a>1</a></li>
                                </ul>
                            </li>
                            <li className="buildEnter">
                                <span>我是中介</span>
                                <i className="iconfont">&#xe611;</i>
                                <ul>
                                    <li className="item"><a>2</a></li>
                                    <li className="item"><a>1</a></li>
                                    <li className="item"><a>1</a></li>
                                    <li className="item"><a>1</a></li>
                                </ul>
                            </li>
                            <li className="buildEnter">
                                <span>我是人才</span>
                                <i className="iconfont">&#xe611;</i>
                                <ul>
                                    <li className="item"><a>2</a></li>
                                    <li className="item"><a>3</a></li>
                                    <li className="item"><a>1</a></li>
                                    <li className="item"><a>1</a></li>
                                </ul>
                            </li>
                            <li className="webGuide">
                                <i className="iconfont iconfont1">&#xe626;</i>
                                <span className="webGuide1">网站导航</span>
                            </li>
                        </ul>
                    </div>
                    <div className="guideContainer">
                        <div className="main">
                            <div className="guideLeft">
                                <div className="about">
                                    <h3>关于</h3>
                                    <ul>
                                        <li><a>关于我们</a></li>
                                        <li><a>招贤纳士</a></li>
                                        <li><a>联系我们</a></li>
                                        <li><a>网站公告</a></li>
                                        <li><a>广告服务</a></li>
                                    </ul>
                                </div>
                                <div className="about">
                                    <h3>信息服务</h3>
                                    <ul>
                                        <li><a>资质查询</a></li>
                                        <li><a>企业招聘</a></li>
                                        <li><a>人才简历</a></li>
                                        <li><a>企业名录</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="guideRight">
                                <dl>
                                    <dt>
                                        微信公众号
                                    </dt>
                                    <dd>
                                        <img src={require('./../../assets/qrcode.jpg')} alt="建筑顾问"/>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>
                                        微信公众号
                                    </dt>
                                    <dd>
                                        <img src={require('./../../assets/qrcode.jpg')} alt="建筑顾问"/>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		)
	}
}

export default Header;