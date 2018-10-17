import React from "react";
import './TalentExam.scss'
class TalentExam extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hotCertificateData: ['公路/道路桥梁', '公路/道路桥梁', '公路/道路桥梁', '公路/道路桥梁']
        }
    }

	render() {
        const {hotCertificateData} = this.state
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
                            <div className="middle">
                                <i class="iconfont">&#xe60c;</i>
                            </div>
                            <div className="bottom"></div>
                        </div>
                    </div>
                </div>
			</div>                              
		)
	}
}

export default TalentExam;