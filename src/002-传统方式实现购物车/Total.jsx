import React from 'react'

class Total extends React.Component {
  render() {
    const { allCount } = this.props
    return (
      <div className="total-container">
        商品总数：【{allCount}】
      </div>
    )
  }
}

export default Total
