import React from "react";
import './TalentRecruitment.scss'
import { NavLink } from "react-router-dom";
class TalentRecruitment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recruitDataFull: [ // 全职数据
                {troduce: '2年一次付急聘注册造价、监....', date: '2018.03.06', company: '合肥乐聘网络科技有限公司', department: '造价工程师-建设部', position: '江苏-南京', salary: '70k', year: '2年'},
                {troduce: '2年一次付急聘注册造价、监....', date: '2018.03.06', company: '合肥乐聘网络科技有限公司', department: '造价工程师-建设部', position: '江苏-南京', salary: '70k', year: '2年'},
                {troduce: '2年一次付急聘注册造价、监....', date: '2018.03.06', company: '合肥乐聘网络科技有限公司', department: '造价工程师-建设部', position: '江苏-南京', salary: '70k', year: '2年'},
                {troduce: '2年一次付急聘注册造价、监....', date: '2018.03.06', company: '合肥乐聘网络科技有限公司', department: '造价工程师-建设部', position: '江苏-南京', salary: '70k', year: '2年'}],
            tabs:[
                {tabName: "全职", id: 1},
                {tabName: "兼职", id: 2}
            ],
            currentIndex: 1,
            recruitDataPart: [ // 兼职数据
                {troduce: '2年一次付急聘注册造价、监....', date: '2018.03.06', company: '合肥乐聘网络科技有限公司', department: '造价工程师-建设部', position: '江苏-南京', salary: '70k', year: '2年'},
                {troduce: '2年一次付急聘注册造价、监....', date: '2018.03.06', company: '合肥乐聘网络科技有限公司', department: '造价工程师-建设部', position: '江苏-南京', salary: '70k', year: '2年'},
                {troduce: '2年一次付急聘注册造价、监....', date: '2018.03.06', company: '合肥乐聘网络科技有限公司', department: '造价工程师-建设部', position: '江苏-南京', salary: '70k', year: '2年'}],
            recruitData: []
        }
    }

    componentDidMount() {
        const {recruitDataFull} = this.state
        this.setState({
            recruitData: recruitDataFull
        })
    }

    // 切换全职/兼职
    tabChoiced(id) {
        const {recruitDataFull, recruitDataPart} = this.state
        this.setState({
            currentIndex: id
        })
        console.log('当前切换的: ', id)
        if(id === 1) {
            this.setState({
                recruitData: recruitDataFull
            })
        } else if(id === 2) {
            this.setState({
                recruitData: recruitDataPart
            })
        }
    }

	render() {
        const  {recruitData} = this.state
        var _this = this
        // 控制全职/兼职的tab切换栏
        var tabList= this.state.tabs.map(function(res,index) {
            var tabStyle=res.id==this.state.currentIndex ? 'subCtrl active' : 'subCtrl'
            return    <a key={index} onClick={this.tabChoiced.bind(_this,res.id)} className={tabStyle}>{res.tabName}<span></span></a>
        }.bind(_this))

		return (
			<div id="TalentRecruitment">
                <div className="main">
                    <div className="talentTitle">
                        <h1>最新人才招聘</h1>
                        <p className="imgLine">
                            <img src={require('./../../assets/block_title_bg.png')} alt="资质快捷查询通道"/>
                        </p>
                    </div>
                    <div className="recruitContent">
                        <div className="recruitTitle">
                            {tabList}
                        </div>
                        <div className="hengLine"></div>
                        <div className="recruitList">
                        {
                            recruitData && recruitData.length <= 6 && recruitData.map((item, index)=>{
                                return (
                                    <div className="recruitItem" key={index}>
                                        <span className="top">
                                            <img src={require('./../../assets/top.png')}/>
                                        </span>
                                        <p className="troduce">
                                            <span className="text">{item.troduce}</span>
                                            <span>{item.date}</span>
                                        </p>
                                        <p className="company">{item.company}</p>
                                        <p className="department">
                                            <span>{item.department}</span>
                                            <span>{item.position}</span>
                                        </p>
                                        <p className="salary">
                                            <span>{item.salary}</span>/
                                            <span>{item.year}</span>
                                        </p>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
			</div>                              
		)
	}
}

export default TalentRecruitment;