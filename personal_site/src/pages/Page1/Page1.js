import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Timer from '../../component/Timer/Timer';

export default class Page1 extends Component {
    render() {
        return (
            <div>
                this is Page1~
                <Timer />
            </div>
        )
    }
}