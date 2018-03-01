import React,{Component} from 'react';

import './Slider.scss';

import SliderItem from './SliderItem/SliderItem';
import SliderDots from './SliderDots/SliderDots';
import SliderArrows from './SliderArrows/SliderArrows';

export default class Slider extends Component{
	constructor(props){
		super(props);
		this.state={
			nowLocal:0,
			speed:this.props.speed
		};
	}

	//向前向后多少
	turn (n){
		var _n=this.state.nowLocal + n;
		
		if(_n<0){
			_n = _n + this.props.items.length;
			this.setState({speed:0,nowLocal:_n});
			setTimeout(()=>{
				this.setState({speed:this.props.speed,nowLocal:this.props.items.length-2});
			},10)

		}else if(_n>=this.props.items.length-1){
			_n=this.props.items.length-1;
			this.setState({nowLocal:_n});
			setTimeout(()=>{
				this.setState({speed:0,nowLocal:0});
			},this.props.speed*1000)

		}else{

			this.setState({speed:this.props.speed,nowLocal:_n});
		}
		
	}
	//开始自动轮播
	goPlay(){
		if(this.props.autoplay){
			this.autoPlayFlag=setInterval(()=>{
				this.turn(1);
			},this.props.delay * 1000);
		}
	}

	//暂停自动轮播
	pausePlay(){
		clearInterval(this.autoPlayFlag);
	}

	componentDidMount(){
		this.goPlay();
	}
	
	//组件将被卸载  
  	componentWillUnmount(){ 
        //重写组件的setState方法，直接返回空
        this.setState = (state,callback)=>{
          return;
        };  
    }

	render(){
		let count=this.props.items.length;

		let itemNodes=this.props.items.map((item,idx)=>{
			return <SliderItem item={item} count={count} key={'item'+idx} />;
		});

		let arrowsNode=<SliderArrows turn={this.turn.bind(this)} />;

		let dotsNode=<SliderDots turn={this.turn.bind(this)} count={count-1} nowLocal={this.state.nowLocal} />;

		return (
			<div
				className="slider"
				onMouseOver={this.props.pause?this.pausePlay.bind(this):null} onMouseOut={this.props.pause?this.goPlay.bind(this):null}>
				<ul style={{
					left: -100 * this.state.nowLocal + "%",
					transitionDuration: this.state.speed + "s",
					width: this.props.items.length * 100 + "%"
	            }}>
					{itemNodes}
				</ul>
				{this.props.arrows?arrowsNode:null}
				{this.props.dots?dotsNode:null}
	        </div>
		);
	}
}
Slider.defaultProps = {
  speed:1,
  delay: 2,
  pause: true,
  autoplay: true,
  dots: true,
  arrows: true,
  items: [],
};
Slider.autoPlayFlag = null;