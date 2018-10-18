import React from "react";
import './QuaQueryChannel.scss'
import { Select} from 'antd';
// import { timingSafeEqual } from "crypto";
const Option = Select.Option;

let enterpriseCreditRatingChildren = [] // 企业信用等级中的数据
let largeClassData = [] // 大类中的数据
let smallClassData = [] // 小类中的数据
let professionalData = [] // 专业中的数据
let levelData = [] // 等级中的数据
let regionalData = [] // 地区范围
let registeredData = [] // 注册地


class QuaQueryChannel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            province: ['北京', '天津', '北京', '天津', '北京', '天津', '北京', '天津','北京', '天津', '北京', '天津','北京', '天津', '北京', '天津','北京', '天津', '北京', '天津','北京', '天津', '北京', '天津','北京', '天津', '北京', '天津'],
            enterpriseCreditRating: ['建筑业企业资质', '监理', '工程勘察', '工程设计', '设计施工一体化', '安全生产许可证', '房地产估价机构'],
            largeClass: ['haha'],
            smallClass: ['小类'],
            professional: ['专业专业专业'],
            level: ['等级'],
            regional: ['地区范围'],
            registered: ['注册地']
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

    // 删除某个元素
    deleteItem(event) {
        let e = event ||window.event
        let currentEle = e.target
        let parentEle = currentEle.parentNode
        parentEle.parentNode.removeChild(parentEle)
    }

    // 展开更多
    showMore(event) {
        let e = event ||window.event
        let currentEle = e.target
        let parentEle = currentEle.parentNode
        parentEle.parentNode.removeChild(parentEle)
        let findMoreContainer = document.querySelector('.findMoreContainer')
        findMoreContainer.style.display = 'block'
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
                    <div className="choosed">
                        <h6>已选：</h6>
                        <span className="itemBox">
                            <span>1建筑业企业资质 /专业承包 / 钢结构工程专业承包 /一级 /全国 </span>
                            <a onClick={self.deleteItem.bind(this)}>X</a>
                        </span>
                        <span className="itemBox">
                            <span>2建筑业企业资质 /专业承包 / 钢结构工程专业承包 /一级 /全国 </span>
                            <a>X</a>
                        </span>
                        <span className="itemBox">
                            <span>3建筑业企业资质 /专业承包 / 钢结构工程专业承包 /一级 /全国 </span>
                            <a>X</a>
                        </span>
                        <span className="itemBox">
                            <span>4建筑业企业资质 /专业承包 / 钢结构工程专业承包 /一级 /全国 </span>
                            <a>X</a>
                        </span>
                    </div>

                    <div className="QuaConditions">
                        <h6>人员条件：</h6>
                        <Select
                            defaultValue="资质类别"
                            onChange={this.enterCreditHandleChange.bind(this)}
                            style={{height: 42, marginRight: 10}}
                            >
                            {enterpriseCreditRatingChildren}
                        </Select>
                        <Select
                            defaultValue="资质名称"
                            onChange={this.largeClassHandleChange.bind(this)}
                            style={{height: 42, marginRight: 10}}
                            >
                            {largeClassData}
                        </Select>
                        <Select
                            defaultValue="名称/等级"
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
                        <h6>人数：</h6>
                        <input className="inputNum"/>
                        <a className="addChoose">添加筛选</a>
                    </div>
                    <div className="choosed">
                        <h6>已选：</h6>
                        <span className="itemBox">
                            <span>1建筑业企业资质 /专业承包 / 钢结构工程专业承包 /一级 /全国 </span>
                            <a onClick={self.deleteItem.bind(this)}>X</a>
                        </span>
                        <span className="itemBox">
                            <span>2建筑业企业资质 /专业承包 / 钢结构工程专业承包 /一级 /全国 </span>
                            <a>X</a>
                        </span>
                        <span className="itemBox">
                            <span>3建筑业企业资质 /专业承包 / 钢结构工程专业承包 /一级 /全国 </span>
                            <a>X</a>
                        </span>
                        <span className="itemBox">
                            <span>4建筑业企业资质 /专业承包 / 钢结构工程专业承包 /一级 /全国 </span>
                            <a>X</a>
                        </span>
                    </div>
                    <div className="findMore">
                        <a onClick={this.showMore.bind(this)}>展开查看更多</a>
                    </div>
                    <div className="findMoreContainer">
                        <div className="QuaConditions">
                            <h6>业绩筛选：</h6>
                            <h6>项目名称：</h6>
                            <input className="inputNum"/>
                            <h6>业绩类型：</h6>
                            <Select
                                defaultValue="监理"
                                onChange={this.enterCreditHandleChange.bind(this)}
                                style={{height: 42, marginRight: 10}}
                                >
                                {enterpriseCreditRatingChildren}
                            </Select>
                            <h6>项目类别：</h6>
                            <Select
                                defaultValue="所有"
                                onChange={this.largeClassHandleChange.bind(this)}
                                style={{height: 42, marginRight: 10}}
                                >
                                {largeClassData}
                            </Select>
                            <a className="addChoose">添加筛选</a>
                        </div>
                        <div className="choosed">
                            <h6>已选：</h6>
                            <span className="itemBox">
                                <span>1建筑业企业资质 /专业承包 / 钢结构工程专业承包 /一级 /全国 </span>
                                <a onClick={self.deleteItem.bind(this)}>X</a>
                            </span>
                            <span className="itemBox">
                                <span>2建筑业企业资质 /专业承包 / 钢结构工程专业承包 /一级 /全国 </span>
                                <a>X</a>
                            </span>
                            <span className="itemBox">
                                <span>3建筑业企业资质 /专业承包 / 钢结构工程专业承包 /一级 /全国 </span>
                                <a>X</a>
                            </span>
                            <span className="itemBox">
                                <span>4建筑业企业资质 /专业承包 / 钢结构工程专业承包 /一级 /全国 </span>
                                <a>X</a>
                            </span>
                        </div>
                    </div>

                </div>
			</div>                              
		)
	}
}

export default QuaQueryChannel;