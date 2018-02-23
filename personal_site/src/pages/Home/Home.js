import React, {Component} from 'react';

class NavLeft extends Component{
	render(){
	  return(
	    <div className="navLeft">
	      <p>中文文档</p>
	      <p>中文教程</p>
	      <p>社区</p>
	      <p>博客</p>
	    </div>
	  )
	}
}
class NavRight extends Component{
	render(){
	  return(
	    <div className="navRight">
	      <p>搜索文档</p>
	      <p>v16.2.0</p>
	      <p>Github</p>
	    </div>
	  )
	}
}
class Nav extends Component{
	render(){
	  return(
	    <div className="nav">
	      <NavLeft />
	      <NavRight />
	    </div>
	  )
	}
}

export default class Home extends Component {
    render() {
        return (
            <Nav />
        )
    }
}