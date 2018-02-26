import React, {Component} from 'react';
import $ from 'jquery';

export default class TestData extends Component {
	constructor(props) {
	    super(props);
	    this.state = { arr: [] };
	}
	get(){
		var $this=this;
        $.ajax({
            type:'get',
            url:'/test/data',
            success:function(res){
            	var results=$.parseJSON(res);
            	console.log(results);
                $this.setState(prevState => ({
				  arr: results
				}));
            }
        })
    }
    componentWillMount(){
    	this.get();
    }
    render() {
        return (
            <ul>  
                {  
                    this.state.arr.map(function(username){  
                        return <li key={username.id}>title:{username.title},name:{username.name},date:{username.date}</li>  
                    })  
                }  
            </ul>
        )
    }
}