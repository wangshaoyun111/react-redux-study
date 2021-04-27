import React from 'react'

class Item extends React.Component {
  render() {
    return (
      <div className="item-container">
        <span>【xxx】商品的购买数量是：【0】</span>
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
}

export default Item
