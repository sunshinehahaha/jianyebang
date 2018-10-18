import React from "react";
import './Nav.scss'
import { Carousel } from 'antd';
class Nav extends React.Component {
	render() {
		return (
			<div id="nav">
                <div className="main">
                    <ul className="navContent">
                        <li className="serviceGuide">
                            <span>服务导航</span>
                            <ul className="serviceGuideContainer">
                                <li className="navTabTwo navTabTwoContainer">
                                    <a>企业资质查询</a>
                                    <i className="iconfont">&#xe731;</i>
                                    <div className="navTabThree">
                                        <div className="left">
                                            <ul>
                                                <li><a>企业资质查询</a></li>
                                                <li><a>企业资质查询</a></li>
                                                <li><a>企业资质查询</a></li>
                                                <li><a>企业资质查询</a></li>
                                                <li><a>企业资质查询</a></li>
                                                <li><a>企业资质查询</a></li>
                                                <li><a>企业资质查询</a></li>
                                                <li><a>企业资质查询</a></li>
                                                <li><a>企业资质查询</a></li>
                                                <li><a>企业资质查询</a></li>
                                                <li><a>企业资质查询</a></li>
                                                <li><a>企业资质查询</a></li>
                                            </ul>
                                            <div className="imgSize">
                                                <img alt="资质计算器"/>
                                            </div>
                                            <div className="imgSize">
                                                <img alt="0元注册建筑公司"/>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <Carousel autoplay>
                                                <div><img/>1</div>
                                                <div><img/>2</div>
                                                <div><img/>3</div>
                                                <div><img/>4</div>
                                            </Carousel>
                                        </div>
                                    </div>
                                </li>
                                <li className="navTabTwo">
                                    <a>企业资质服务</a>
                                    <i className="iconfont">&#xe731;</i>
                                </li>
                                <li className="navTabTwo">
                                    <a>建筑企业名录</a>
                                    <i className="iconfont">&#xe731;</i>
                                </li>
                                <li className="navTabTwo">
                                    <a>人才简历</a>
                                    <i className="iconfont">&#xe731;</i>
                                </li>
                                <li className="navTabTwo">
                                    <a>企业招聘</a>
                                    <i className="iconfont">&#xe731;</i>
                                </li>
                                <li className="navTabTwo">
                                    <a>行业动态</a>
                                    <i className="iconfont">&#xe731;</i>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="navTab">网站首页</a>
                            <span className="underline"></span>
                        </li>
                        <li>
                            <a className="navTab">建筑资质</a>
                            <span className="underline"></span>
                        </li>
                        <li>
                            <a className="navTab">建筑企业名录</a>
                            <span className="underline"></span>
                        </li>
                        <li>
                            <a className="navTab">人才简历</a>
                            <span className="underline"></span>
                        </li>
                        <li>
                            <a className="navTab">企业招聘</a>
                            <span className="underline"></span>
                        </li>
                        <li>
                            <a className="navTab">行业动态</a>
                            <span className="underline"></span>
                        </li>
                    </ul>
                </div>
			</div>                              
		)
	}
}

export default Nav;