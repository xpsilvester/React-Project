import React, {Component} from 'react';
import TestData from '../../component/Data/TestData';

export default class Blog extends Component {
    render() {
        return (
            <div>
                数据库测试：
                <TestData />
            </div>
        )
    }
}