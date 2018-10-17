import React from "react";
import './TalentRecruitment.scss'
class TalentRecruitment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recruitData: [
                {troduce: '2年一次付急聘注册造价、监....', date: '2018.03.06', company: '合肥乐聘网络科技有限公司', department: '造价工程师-建设部', position: '江苏-南京', salary: '70k', year: '2年'},
                {troduce: '2年一次付急聘注册造价、监....', date: '2018.03.06', company: '合肥乐聘网络科技有限公司', department: '造价工程师-建设部', position: '江苏-南京', salary: '70k', year: '2年'},
                {troduce: '2年一次付急聘注册造价、监....', date: '2018.03.06', company: '合肥乐聘网络科技有限公司', department: '造价工程师-建设部', position: '江苏-南京', salary: '70k', year: '2年'},
                {troduce: '2年一次付急聘注册造价、监....', date: '2018.03.06', company: '合肥乐聘网络科技有限公司', department: '造价工程师-建设部', position: '江苏-南京', salary: '70k', year: '2年'}]
        }
    }

	render() {
        const  {recruitData} = this.state
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
                            <a>全职<span></span></a>
                            <a>兼职<span></span></a>
                        </div>
                        <div className="hengLine"></div>
                        <div className="recruitList">
                        {
                            recruitData && recruitData.length <=6 && recruitData.map((item, index)=>{
                                return (
                                    <div className="recruitItem">
                                        <span className="top">
                                            <img src={require('./../../assets/top.png')}/>
                                        </span>
                                        <p className="troduce">
                                            <span>{item.troduce}</span>
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