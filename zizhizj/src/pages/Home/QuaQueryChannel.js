import React from "react";
import './QuaQueryChannel.scss'
import { Select } from 'antd';
// import { timingSafeEqual } from "crypto";

let enterpriseCreditRatingChildren = [] // 企业信用等级中的数据
let largeClassData = [] // 大类中的数据
let smallClassData = [] // 小类中的数据
let professionalData = [] // 专业中的数据
let levelData = [] // 等级中的数据
let regionalData = [] // 地区范围
let registeredData = [] // 注册地

const Option = Select.Option;
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};



class QuaQueryChannel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            province: ['北京', '天津', '北京', '天津', '北京', '天津', '北京', '天津','北京', '天津', '北京', '天津','北京', '天津', '北京', '天津','北京', '天津', '北京', '天津','北京', '天津', '北京', '天津','北京', '天津', '北京', '天津'],
            enterpriseCreditRating: ['建筑业企业资质', '监理', '工程勘察', '工程设计', '设计施工一体化', '安全生产许可证', '房地产估价机构'],
            largeClass: ['haha'],
            smallClass: ['小磊'],
            professional: ['专业专业专业'],
            level: ['等级'],
            regional: ['地区范围'],
            registered: ['注册地'],
            cities: cityData[provinceData[0]],
            secondCity: cityData[provinceData[0]][0]
        }
    }

    componentDidMount() {
        this.saveChildren()
    }

    // 当前选择的省份
    chooseProvince(item) {
        console.log(item)
    }

    // 企业信用等级选择项
    enterCreditHandleChange(value) {
        console.log(`企业信用Selected: ${value}`)
    }

    // 大类选择项
    largeClassHandleChange(value) {
        console.log(`大类Selected: ${value}`)
    }

    // 小类选择项
    smallClassHandleChange(value) {
        console.log(`小类Selected: ${value}`)
    }

    // 专业选择项
    professionalHandleChange(value) {
        console.log(`专业Selected: ${value}`)
    }

    // 等级选择项
    levelHandleChange(value) {
        console.log(`等级Selected: ${value}`)
    }

    // 地区范围选择项
    regionalHandleChange(value) {
        console.log(`地区范围Selected: ${value}`)
    }

    // 注册地选择项
    registeredHandleChange(value) {
        console.log(`注册地Selected: ${value}`)
    }


    // 存入到children中
    saveChildren() {
        let {enterpriseCreditRating, largeClass, smallClass, professional, level, regional, registered, cities} = this.state
        for(let i in enterpriseCreditRating) {
            enterpriseCreditRatingChildren.push(<Option key={enterpriseCreditRating[i]}>{enterpriseCreditRating[i]}</Option>);
        }
        for(let j in largeClass) {
            largeClassData.push(<Option key={largeClass[j]}>{largeClass[j]}</Option>);
        }
        for(let m in smallClass) {
            smallClassData.push(<Option key={smallClass[m]}>{smallClass[m]}</Option>);
        }
        for(let n in professional) {
            professionalData.push(<Option key={professional[n]}>{professional[n]}</Option>)
        }
        for(let a in level) {
            levelData.push(<Option key={level[a]}>{level[a]}</Option>)
        }
        for(let b in regional) {
            regionalData.push(<Option key={regional[b]}>{regional[b]}</Option>)
        }
        for(let c in registered) {
            registeredData.push(<Option key={registered[c]}>{registered[c]}</Option>)
        }
    }

	render() {
        const self = this
        const {province, enterpriseCreditRating, cities} = this.state
		return (
			<div id="QuaQueryChannel">
                <div className="main">
                    <div className="search-channel">
                        <h1>资质快捷查询通道</h1>
                        <p className="imgLine">
                            <img src={require('./../../assets/block_title_bg.png')} alt="资质快捷查询通道"/>
                        </p>
                    </div>
                    <div className="province-info">
                        <span className="current-province">当前省份：</span>
                        <div className="provinceList">
                            {
                                province && province.map((item, index) => {
                                    return (
                                            <a onClick={()=>{self.chooseProvince(item)}} key={index} className="provinceStyle">{item}</a>
                                        )
                                })
                            }
                        </div>
                    </div>
                    <div className="QuaConditions">
                        <h6>资质条件：</h6>
                        <Select
                            defaultValue="企业信用等级"
                            onChange={this.enterCreditHandleChange.bind(this)}
                            style={{height: 42, marginRight: 10}}
                            >
                            {enterpriseCreditRatingChildren}
                        </Select>
                        <Select
                            defaultValue="大类"
                            onChange={this.largeClassHandleChange.bind(this)}
                            style={{height: 42, marginRight: 10}}
                            >
                            {largeClassData}
                        </Select>
                        <Select
                            defaultValue="小类"
                            onChange={this.smallClassHandleChange.bind(this)}
                            style={{height: 42, marginRight: 10}}
                            >
                            {smallClassData}
                        </Select>
                        <Select
                            defaultValue="专业"
                            onChange={this.professionalHandleChange.bind(this)}
                            style={{height: 42, marginRight: 10}}
                            >
                            {professionalData}
                        </Select>
                        <Select
                            defaultValue="等级"
                            onChange={this.levelHandleChange.bind(this)}
                            style={{height: 42, marginRight: 10}}
                            >
                            {levelData}
                        </Select>
                        <Select
                            defaultValue="地区范围"
                            onChange={this.regionalHandleChange.bind(this)}
                            style={{height: 42, marginRight: 10}}
                            >
                            {regionalData}
                        </Select>
                        <Select
                            defaultValue="注册地"
                            onChange={this.registeredHandleChange.bind(this)}
                            style={{height: 42, marginRight: 10}}
                            >
                            {registeredData}
                        </Select>
                        <a className="addChoose">添加筛选</a>
                    </div>
                </div>
			</div>                              
		)
	}
}

export default QuaQueryChannel;