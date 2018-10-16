import React from "react";
import './Search.scss'
import { Menu, Dropdown, Icon } from 'antd';
const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">第一个菜单项</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">第二个菜单项</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">第三个菜单项</Menu.Item>
    </Menu>
  );
class Search extends React.Component {
	render() {
		return (
			<div id="Search">
                <div className="main searchContent">
                    <div className="logo">
                        <img src={require("./../../assets/logo1.png")} alt="资质之家"/>
                    </div>
                    <div className="searchInput">
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link" href="#" className="selection">
                            资质 <Icon type="down" />
                            </a>
                        </Dropdown>
                        <input className="input" placeholder="请输入类别名称或关键字"/>
                        <span className="fangdajing">
                            <i className="iconfont iconFangdajing">&#xe617;</i>
                        </span>
                    </div>
                    <div className="build">
                        <i className="iconfont zhengshu">&#xe602;</i>
                        <span>建企找证</span>
                    </div>
                    <div className="build freePublic">
                        <i className="iconfont public">&#xe64d;</i>
                        <span>免费发布信息</span>
                    </div>
                </div>
                <p className="hotSearch main">
                    <a>热门搜索：</a>
                    <a>二级建造师</a>
                    <a>造价师</a>
                    <a>一级建造师</a>
                    <a>工程师</a>
                </p>
			</div>
		)
	}
}

export default Search;