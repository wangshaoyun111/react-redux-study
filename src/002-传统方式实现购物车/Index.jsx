import React from 'react'

// 导入 Item 组件
import Item from './Item.jsx'
// 导入 Total 组件
import Total from './Total.jsx'

class Cart extends React.Component {
  render() {
    return (
      <div className="cart-container">
        <h4>购物车页面</h4>
        <hr />
        <Item />
        <Item />
        <Item />
        <Total />
      </div>
    )
  }
}

export default Cart
