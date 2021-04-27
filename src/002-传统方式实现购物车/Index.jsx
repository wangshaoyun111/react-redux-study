import React from 'react'

// 导入 Item 组件
import Item from './Item.jsx'
// 导入 Total 组件
import Total from './Total.jsx'

class Cart extends React.Component {
  state = {
    allCount: 0
  }
  // 用来计算 count 的总和
  totalHandle = (val) => {
    this.setState({
      allCount: this.state.allCount + val
    })
  }
  render() {
    return (
      <div className="cart-container">
        <h4>购物车页面</h4>
        <hr />
        <Item totalHandle={this.totalHandle} name='apple' />
        <Item totalHandle={this.totalHandle} name='orange' />
        <Item totalHandle={this.totalHandle} name='banana' />
        <Total allCount={this.state.allCount} />
      </div>
    )
  }
}

export default Cart
