import React from 'react'

class Item extends React.Component {
  state = {
    count: 0
  }
  // 购买数量加1
  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  // 购买数量减1
  handleSub = () => {
    if (this.state.count <= 0) return
    this.setState({
      count: this.state.count - 1
    })
  }
  render() {
    const { count } = this.state
    const { name } = this.props
    return (
      <div className="item-container">
        <span>【{name}】商品的购买数量是：【{count}】</span>
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleSub}>-</button>
      </div>
    )
  }
}

export default Item
