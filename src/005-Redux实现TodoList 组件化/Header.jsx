
import React from 'react'
// 导入 connect 方法
import { connect } from 'react-redux'
// 导入action 
import * as Action from './Store/Actions'
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      etitle: ''
    }
  }

  handleEtitle = (e) => {
    this.setState({
      etitle: e.target.value
    })
  }

  handleKeyup = (e) => {
    // 回车键的数字标识是13
    if (e.keyCode === 13) {
      // 按了回车键,添加任务,把任务名称传递到父组件即可
      this.props.addTask(this.state.etitle)
      // 清空表单
      this.setState({
        etitle: ''
      })
    }
  }

  render() {
    const { addTaskHandle } = this.props
    return (
      <div>
        <header className="header">
          <h1>Todo List</h1>
          <input onKeyUp={addTaskHandle} value={this.state.etitle} onChange={this.handleEtitle} className="new-todo" placeholder="你想做什么?" />
        </header>
      </div>
    )
  }
}
// 创建 mapDispatchToProps 方法
// 将事件处理程序映射到 props 传递到组件
const mapDispatchToProps = (dispatch) => {
  // 添加任务方法
  const addTaskHandle = (e) => {
    // 创建action使用 dispatch 分发
    if (e.keyCode === 13) {
      let action = Action.addTaskAction(e.target.value)
      dispatch(action)
      e.target.value = ''
    }
  }
  return {
    addTaskHandle
  }
}
export default connect(null, mapDispatchToProps)(Header)