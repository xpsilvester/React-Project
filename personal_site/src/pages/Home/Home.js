import React, {Component} from 'react';
import Slider from '../../component/Slider/Slider';

const IMAGE_DATA = [
  {
    src: require('../../../public/images/demo1.jpg'),
    alt: 'images-1',
  },
  {
    src: require('../../../public/images/demo2.jpg'),
    alt: 'images-2',
  },
  {
    src: require('../../../public/images/demo3.jpg'),
    alt: 'images-3',
  },
  {
    src: require('../../../public/images/demo4.jpg'),
    alt: 'images-4',
  },
  {
    src: require('../../../public/images/demo1.jpg'),
    alt: 'images-5',
  }
];

class Banner extends Component{
	render(){
	  return(
	    <div className="banner">
	    	<Slider
				items={IMAGE_DATA}
				speed={1.2}
				delay={3}
				pause={true}
				autoplay={false}
				dots={true}
				arrows={true}
			/>
	    </div>
	  )
	}
}
class Content extends Component{
	render(){
	  return(
	    <div className="content">
	    	<h4>声明式</h4>
	    	<p>React可以轻松创建交互式用户界面。为应用程序中的每个状态设计简单的视图，当数据更改时，React 将高效地更新和正确的渲染组件。</p>
	    	<p>声明式视图使您的代码更具可预测性，更易于调试。</p>
	    	<h4>组件化</h4>
	    	<p>创建好拥有各自 state(状态) 的组件，再将其组合构成更加复杂的UI界面。</p>
	    	<p>由于组件逻辑是用 JavaScript 而不是模板编写的，因此可以通过应用程序轻松传递丰富的数据，并将 state(状态) 保留在DOM之外。</p>
	    </div>
	  )
	}
}
class Footer extends Component{
	render(){
	  return(
	    <div className="footer">
	    	<p>Copyright © 2018 Facebook Inc.</p>
	    	<ul>
	    		<li>DOCS</li>
	    		<li>安装</li>
	    		<li>快速入门</li>
	    		<li>高级指南</li>
	    		<li>参考</li>
	    	</ul>
	    </div>
	  )
	}
}
export default class Home extends Component {
    render() {
        return (
        	<div>
        		<Banner />
        		<Content />
        		<Footer />
        	</div> 
        )
    }
}