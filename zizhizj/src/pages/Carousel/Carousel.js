import React, { Component } from 'react'
import './Carousel.scss'

class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			left: 0,
			line:1,
			transiton:false
		}
	}
	
	componentDidMount() {
		this.autoPlay()
	}
	
	// 自动轮播
	autoPlay() {
		let self = this
		this.timer = setInterval(function () {
			self.setState((prevState) => ({
				left: prevState.left + 100,
				line: prevState.line + 1,
				transiton:false
			}))
			if(self.state.left === 300) {
				self.setState((prevState) => ({
					line: 1,
					
				}))
				setTimeout(function () {
					self.setState((prevState) => ({
						left: 0,
						transiton:true
					}))
				}, 2900)
			}
		}, 3000)
	}

	// 暂停自动轮播
	pausePlay() {
		clearInterval(this.timer);
	}
	
	// 点击横线
	activeLine (data) {
		this.setState({
			line:data,
			left:100*data-100
		})
	}
	
	componentWillUnMount () {
		this.timer && clearInterval(this.timer);
	}
	
	render() {
		return (
			<div className='bannerShowBox' onMouseOver={this.pausePlay.bind(this)} onMouseOut={this.autoPlay.bind(this)}>
				<div className='bannerContentBox' style={{
					left: -this.state.left + "%",
					transitionDuration: this.state.transiton ? "0s" : "2s"
				}}>
					<p className='bannerImg'></p>
					<p className='bannerImg'></p>
					<p className='bannerImg'></p>
					<p className='bannerImg'></p>
					{/*<img src={require('../../assets/img/banner2.jpg')} draggable="false" alt="永达小贷" className='bannerImg'/>*/}
					{/*<img src={require('../../assets/img/banner1.jpg')} draggable="false" alt="永达小贷" className='bannerImg'/>*/}
					{/*<img src={require('../../assets/img/banner3.jpg')} draggable="false" alt="永达小贷" className='bannerImg'/>*/}
					{/*<img src={require('../../assets/img/banner2.jpg')} draggable="false" alt="永达小贷" className='bannerImg'/>*/}
				</div>
				<ul className='lineBox'>
					<li className='lien' onClick={this.activeLine.bind(this,1)}
					    style={{
						    backgroundColor: this.state.line === 1 ? 'rgba(255,255,255,0.6)' : 'rgb(106,100,103)'
					    }}></li>
					<li className='lien' onClick={this.activeLine.bind(this,2)}
					    style={{
						    backgroundColor: this.state.line === 2 ? 'rgba(255,255,255,0.6)' : 'rgb(106,100,103)'
					    }}></li>
					<li className='lien' onClick={this.activeLine.bind(this,3)}
					    style={{
						    backgroundColor: this.state.line === 3 ? 'rgba(255,255,255,0.6)' : 'rgb(106,100,103)'
					    }}></li>
				</ul>
			</div>
		)
	}
}

export default Carousel