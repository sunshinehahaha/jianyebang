import React from "react";
import './Nav.scss'
class Nav extends React.Component {
	render() {
		return (
			<div id="nav">
                <div className="main">
                    <ul className="navContent">
                        <li className="serviceGuide">
                            <span>服务导航</span>
                        </li>
                        <li>
                            <a>网站首页</a>
                            <span className="underline"></span>
                        </li>
                        <li>
                            <a>建筑资质</a>
                            <span className="underline"></span>
                        </li>
                        <li>
                            <a>建筑企业名录</a>
                            <span className="underline"></span>
                        </li>
                        <li>
                            <a>人才简历</a>
                            <span className="underline"></span>
                        </li>
                        <li>
                            <a>企业招聘</a>
                            <span className="underline"></span>
                        </li>
                        <li>
                            <a>行业动态</a>
                            <span className="underline"></span>
                        </li>
                    </ul>
                </div>
			</div>                              
		)
	}
}

export default Nav;