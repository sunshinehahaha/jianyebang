import React from "react";
import './TalentExam.scss'
import { Carousel } from 'antd'
class TalentExam extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hotCertificateData: ['公路/道路桥梁', '公路/道路桥梁', '公路/道路桥梁', '公路/道路桥梁'],
            testRequireData: [{content: '2018年年注册安全工报名审全工报名审全工报名审', date: '04/15'},
                            {content: '2018年年注册安全工报名审全工报名审全工报名审', date: '04/15'},
                            {content: '2018年年注册安全工报名审全工报名审全工报名审', date: '04/15'},
                            {content: '2018年年注册安全工报名审全工报名审全工报名审', date: '04/15'}],
            tabs: [
                {tabName: "热点", id: 1},
                {tabName: "挂靠价格", id: 2},
                {tabName: "考试咨询", id: 3},
                {tabName: "资质行情", id: 4},
                {tabName: "猎头资讯", id: 5}
            ],
            currentIndex: 1,
            hotInfoData: [{content: '2018年二级建造师挂靠价格对比不同阶段月薪', date: '2018-04-12'},
                          {content: '2018年二级建造师挂靠价格对比不同阶段月薪', date: '2018-04-12'},
                          {content: '2018年二级建造师挂靠价格对比不同阶段月薪', date: '2018-04-12'},
                          {content: '2018年二级建造师挂靠价格对比不同阶段月薪', date: '2018-04-12'},
                          {content: '2018年二级建造师挂靠价格对比不同阶段月薪', date: '2018-04-12'},
                          {content: '2018年二级建造师挂靠价格对比不同阶段月薪', date: '2018-04-12'}]
        }
    }

    // 切换热点信息
    tabChoiced(id) {
        this.setState({
            currentIndex: id
        })
        console.log('当前切换的: ', id)
        // 根据id 进行查找数据， 将数据设置到hotInfoData中
        // 比如：
        if(id === 2) {
            this.setState({
                hotInfoData: [{content: '11111', date: '2222'}, {content: '11111', date: '2222'}]
            })
        }
    }

	render() {
        const {hotCertificateData, testRequireData, hotInfoData} = this.state
        var _this = this
        // 控制热点信息的tab切换栏
        var tabList= this.state.tabs.map(function(res,index) {
            var tabStyle=res.id==this.state.currentIndex ? 'subCtrl active' : 'subCtrl'
            return    <a key={index} onClick={this.tabChoiced.bind(_this,res.id)} className={tabStyle}>{res.tabName}<span></span></a>
        }.bind(_this))

		return ( 
			<div id="TalentExam">
                <div className="main">
                    <div className="talentExamTitle">
                        <h1>人才考试</h1>
                        <p className="imgLine">
                            <img src={require('./../../assets/block_title_bg.png')} alt="资质快捷查询通道"/>
                        </p>
                    </div>
                    <div className="talentExamContent main">
                        <div className="left">
                            <div className="top">
                                <img src={require('./../../assets/icon_hot.png')}/>
                                <span>热门证书</span>
                            </div>
                            <div className="middle">
                            {
                                hotCertificateData && hotCertificateData.map((item, index)=>{
                                    return (
                                        <span key={index}>{item}</span>
                                    )
                                })
                            }
                            </div>
                        </div>
                        <div className="center">
                            <span>
                                <img/>
                            </span>
                            <span>
                                <img/>
                            </span>
                            <span>
                                <img/>
                            </span>
                            <span>
                                <img/>
                            </span>
                        </div>
                        <div className="right">
                            <div className="top">
                                <img/>
                                <span>考试条件</span>
                            </div>
                            {
                                testRequireData && testRequireData.map((item, index)=>{
                                    return (
                                        <div className="middleRight" key={index}>
                                            <i className="iconfont">&#xe6b7;</i>
                                            <span className="textIntro">{item.content}</span>
                                            <span className="date">{item.date}</span>
                                        </div>
                                    )
                                })
                            }
                            <div className="bottom"></div>
                        </div>
                    </div>
                    <div className="Presignature">
                        <img src={require('./../../assets/examination_ad.jpg')} alt="北京二级建筑师预签"/>
                    </div>
                    <div className="hotInfo">
                        <h2>最新热点信息</h2>
                        <a>更多 >></a>
                    </div>
                    <div className="hotInfoContent">
                        <div className="hotInfoLeft">
                                <div className="leftImg">
                                    <Carousel autoplay>
                                        <div><h3>1</h3></div>
                                        <div><h3>2</h3></div>
                                        <div><h3>3</h3></div>
                                        <div><h3>4</h3></div>
                                    </Carousel>
                                    {/* <img/> */}
                                </div>
                            <div className="leftContent">
                                <div className="topNav">
                                    {tabList}
                                </div>
                                <div className="bottomContent">
                                {
                                    hotInfoData && hotInfoData.length <=6 && hotInfoData.map((item, index)=>{
                                        return (
                                            <p key={index}>
                                                <span className={index === 0 ? "square" : (index === 1 ? "square square2" : (index === 2 ? "square square3" : "circle"))}></span>
                                                <span className="contentIntro">{item.content}</span>
                                                <span className="date">{item.date}</span>
                                            </p>
                                        )
                                    })
                                }
                                </div>
                            </div>
                        </div>
                        <div className="hotInfoRight">
                            <h3>头条文章</h3>
                            <div className="headlineArticle">
                                <img/>
                                <div className="content">
                                    <h4>2018年二级建造师挂靠价格对2018年二级建造师挂靠价格对...</h4>
                                    <p>2018年二级建造师挂靠2018年二级建造师挂靠价格对对对价格对对对...【全文】</p>
                                </div>
                            </div>
                            <p className="list">
                                <span className="circle"></span>
                                <span className="contentIntro">2018年二级建造师挂靠价格对18年二级建造师挂靠价格对比不同阶段月薪!</span>
                            </p>
                            <p className="list">
                                <span className="circle"></span>
                                <span className="contentIntro">2018年二级建造师挂靠价格对18年二级建造师挂靠价格对比不同阶段月薪!</span>
                            </p>
                            <p className="list">
                                <span className="circle"></span>
                                <span className="contentIntro">2018年二级建造师挂靠价格对18年二级建造师挂靠价格对比不同阶段月薪!</span>
                            </p>
                        </div>
                    </div>
                </div>
			</div>                              
		)
	}
}

export default TalentExam;