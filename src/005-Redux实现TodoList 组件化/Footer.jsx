
import React from 'react'
import { connect } from 'react-redux'
import { deleteTaskDone } from './Store/Actions'
class Footer extends React.Component {
  state = {
    currentType: 'all',
  }

  handleFilter = (e) => {
    // 更新当前的筛选条件
    let id = e.target.dataset.id
    if (!id) {
      // 没有id，什么都不做
      return
    }
    this.setState({
      currentType: id
    })
    // 对列表数据进行过滤
    this.props.handleFilter(id)
  }

  // 清除所有的已完成任务
  handleClearAll = () => {
    this.props.clearAll()
  }

  render() {
    let { num, handleClearAll } = this.props
    let { currentType } = this.state
    return (
      <footer className="footer">
        <span className="todo-count">剩余<strong>{num}</strong>个任务</span>
        <ul onClick={this.handleFilter} className="filters">
          <li>
            <a data-id='all' className={currentType === 'all' ? 'selected' : ''} href="#/">全选</a>
          </li>
          <li>
            <a data-id='will' className={currentType === 'will' ? 'selected' : ''} href="#/active">未完成</a>
          </li>
          <li>
            <a data-id='done' className={currentType === 'done' ? 'selected' : ''} href="#/completed">已完成</a>
          </li>
        </ul>
        <button onClick={() => handleClearAll()} className="clear-completed">清除所有已完成任务</button>
      </footer>
    )
  }
}
const mapStateToProps = (state) => {
  let num = 0
  state.todos.forEach(item => {
    if (!item.done) {
      // 没有完成的任务
      num += 1
    }
  })
  return {
    todos: state.todos,
    num
  }
}
const mapDispatchToProps = (dispatch) => {
  const handleClearAll = () => {
    let action = deleteTaskDone()
    dispatch(action)
  }
  return {
    handleClearAll
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer)