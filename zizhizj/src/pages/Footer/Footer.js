import React from "react";
import './Footer.scss'
class Footer extends React.Component {
	render() {
		return (
			<div id="Footer">
                <div className="main">
                    <div className="footerLeft">
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
                                <li><a>证书招聘</a></li>
                                <li><a>证书简历</a></li>
                                <li><a>全职招聘</a></li>
                                <li><a>资质服务</a></li>
                                <li><a>建筑培训</a></li>
                            </ul>
                        </div>
                        <div className="about">
                            <h3>帮助中心</h3>
                            <ul>
                                <li><a>常见问题</a></li>
                                <li><a>网站建议</a></li>
                                <li><a>友情链接</a></li>
                                <li><a>便民服务</a></li>
                                <li><a>手机号被冒用</a></li>
                            </ul>
                        </div>
                        <div className="about">
                            <h3>关注我们</h3>
                            <ul>
                                <li><a>手机站</a></li>
                                <li><a>官方微信</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footerRight">
                        <dl>
                            <dd>
                                <img src={require('./../../assets/qrcode.jpg')} alt="建筑顾问"/>
                            </dd>
                            <dt>
                                建筑顾问：JINZHU
                            </dt>
                        </dl>
                        <dl>
                            <dd>
                                <img src={require('./../../assets/qrcode.jpg')} alt="建筑顾问"/>
                            </dd>
                            <dt>
                                微信小程序
                            </dt>
                        </dl>
                        <div className="timePlan">
                            <p className="tel">
                                <i className="iconfont">&#xe632;</i>
                                <span>010-4514515</span>
                            </p>
                            <p className="week">周一至周五10:00-18:30</p>
                            <p className="qqkeFu">
                                <i className="iconfont">&#xe666;</i>
                                <span>在线客服 QQ:262626</span>
                            </p>
                            <p className="week">周一至周五10:00-18:30</p>
                            <p className="email">fplt@360guakao.net</p>
                        </div>
                    </div>
                </div>
                <div className="footerLine main"></div>
                <div className="main footerBottom">
                    <p> 资质之家zizhizhijia.net更专业靠谱的证书挂靠网，一级建造师挂靠，二级建造师挂靠平台© 2016 皖B2-20160073-1</p>
                    <img src={require('./../../assets/footer_logo.png')}/>
                </div>
			</div>                              
		)
	}
}


export default Footer;