'use strict';

// 原生js语法
// React.createElement(
//   type,
//   [props],
//   [...children]
// )
// 第一个参数是必填，传入的是似HTML标签名称，eg: ul, li
// 第二个参数是选填，表示的是属性，eg: className
// 第三个参数是选填, 子节点，eg: 要显示的文本内容
// 返回一个react元素
// {
//   // 增加一个属性，用来标识这个对象是一个 ReactElement '对象'
//   $$typeof: REACT_ELEMENT_TYPE,

//   // Built-in properties that belong on the element
//   type: type,
//   key: key,
//   ref: ref,
//   props: props,

//   // Record the component responsible for creating this element.
//   _owner: owner
// };


const e = React.createElement;


class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked comment number ' + this.props.commentID;
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
    // jsx语法可写成
    // return (
    //   <button onClick={() => this.setState({ liked: true })}>
    //     Like
    //   </button>
    // );
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.like_button_container')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    //在提供的 domContainer 里渲染一个 React 元素，并返回对该组件的引用（或者针对无状态组件返回 null）。
    ReactDOM.render(
      e(LikeButton, { commentID: commentID }),
      domContainer
    );
  });
