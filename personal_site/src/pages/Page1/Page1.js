import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Timer from '../../component/Timer/Timer';
import Todo from '../../component/Todo/Todo';
import MarkdownEditor from '../../component/MarkdownEditor/MarkdownEditor';

export default class Page1 extends Component {
    render() {
        return (
            <div className="demoList">
                <Timer />
                <Todo />
                <MarkdownEditor />
            </div>
        )
    }
}