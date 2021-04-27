import React from 'react'
import { connect } from 'react-redux'
class Item extends React.Component {
  render() {
    const { name, num } = this.props
    return (
      <div className="item-container">
        <span>【{name}】商品的购买数量是：【{num}】</span>
        <button>+</button>
        <button>-</button>
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
export default connect(mapStateToProps)(Item)
