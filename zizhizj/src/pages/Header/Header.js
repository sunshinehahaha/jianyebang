import React from "react";
import './Header.scss'
import './../../assets/font/iconfont.css'
class Header extends React.Component {
	render() {
		return (
			<div id="header">
				<div className="hTop">
                    <div className="main">
                        <ul className="hLeft">
                            <li>
                                <i className="iconfont mobilePhone">&#xe641;</i>
                                <a href="#">手机站</a>
                                <span className="line"></span>
                            </li>
                            <li>
                                <i className="iconfont webchat">&#xe69a;</i>
                                <a href="#">微信</a>
                                <span className="line"></span>
                            </li>
                            <li>
                                <i className="iconfont kefuPhone">&#xe609;</i>
                                <a href="#">客服电话</a>
                            </li>
                        </ul>
                        <ul className="hRight">
                            <li>
                                <span>我是昵称哦！</span>
                            </li>
                            <li>
                                <a href="#">退出</a>
                            </li>
                            <li>
                                <span>我是建企</span>
                            </li>
                            <li>
                                <span>我是中介</span>
                            </li>
                            <li>
                                <span>我是人才</span>
                            </li>
                            <li>
                                <span>网站导航</span>
                            </li>
                        </ul>
                    </div>
                </div>
			</div>
		)
	}
}

export default Header;