import React from 'react'
// 导入 connect() 方法
// connect 的作用：将 Store 中的数据映射到 组件中
import { connect } from 'react-redux'
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

// mapStateToProps方法从 state中读取数据
// 通过props 传递给组件内部，供给需要的位置进行渲染
// 参数 state 是State中所有数据
const mapStateToProps = (state) => {
  let allCount = 0
  for (let key in state) {
    allCount += state[key]
  }
  return {
    allCount
  }
}

export default connect(mapStateToProps)(Total)
