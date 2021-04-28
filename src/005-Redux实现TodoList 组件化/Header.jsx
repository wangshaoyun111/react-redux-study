
import React from 'react'

class Header extends React.Component {
  constructor (props) {
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
  
  render () {
    return (
      <div>
        <header className="header">
          <h1>Todo List</h1>
          <input onKeyUp={this.handleKeyup} value={this.state.etitle} onChange={this.handleEtitle} className="new-todo" placeholder="你想做什么?" />
        </header>
      </div>
    )
  }
}

export default Header