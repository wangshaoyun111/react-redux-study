import React from 'react'
import { connect } from 'react-redux'
// 导入封装action
import { addAction, subAction } from './Store/Actions'
class Item extends React.Component {
  render() {
    const { name, num, addHandle, subHandle } = this.props
    return (
      <div className="item-container">
        <span>【{name}】商品的购买数量是：【{num}】</span>
        <button onClick={addHandle}>+</button>
        <button onClick={subHandle}>-</button>
      </div>
    )
  }
}
// mapStateToProps 还有第二个参数
// 第一个参数 state 数据源
// 第二个参数 ownProps 组件本身的Props
const mapStateToProps = (state, ownProps) => {

  // 从组件本身的props 获取传递的值
  const { name } = ownProps

  // 获取到state中对应商品的数量
  let num = state[name]

  return {
    name,
    num
  }
}
// 创建映射方法事件处理程序的方法
// 第一个参数 dispatch 用来分发action
// 第二个参数 ownProps 组件本身props
const mapDispatchToProps = (dispatch, ownProps) => {

  const addHandle = () => {
    // action 实际就是一个对象，这个对象描述执行的动作，行为
    // action 必须有一个type字段，这个字段必须是string类型
    // let action = addAction(ownProps)
    dispatch(addAction(ownProps))
  }

  const subHandle = () => {
    // let action = subAction(ownProps)
    dispatch(subAction(ownProps))
  }

  return {
    addHandle,
    subHandle
  }
}
// mapDispatchToProps 方法传递到 connect 的第二个参数
export default connect(mapStateToProps, mapDispatchToProps)(Item)
