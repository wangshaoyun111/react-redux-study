
import React from 'react'
import { connect } from 'react-redux'
import { deleteTaskAction } from './Store/Actions'
class List extends React.Component {

  state = {
    isAll: false
  }

  handleDelete = (id) => {
    // 控制删除操作
    this.props.deleteTask(id)
  }

  handleCheck = (id) => {
    // 控制单选
    this.props.toggleItem(id)
  }

  toggleAll = () => {
    // 顶部全选按钮
    this.setState({
      isAll: !this.state.isAll
    }, () => {
      // 控制所有的列表的选中状态
      this.props.toggleAll(this.state.isAll)
    })
  }

  handleDoubleClick = (id, e) => {
    // 双击之后进入编辑状态
    // 获取label元素的父元素的下一个兄弟元素 input
    let input = e.target.parentNode.nextSibling
    // 调用父组件函数修改任务编辑状态
    this.props.showEditInput(id)
    setTimeout(() => {
      // 页面已经显示input元素之后才控制获取焦点
      input && input.focus()
    }, 0)
  }

  handleEditEtile = (id, e) => {
    // 控制数组中对应标题的变化
    this.props.editTask(id, e.target.value)
  }

  render() {
    let { todos, deleteHandle } = this.props
    let { isAll } = this.state
    let todoTags = todos.map(item => (
      <li key={item.id} className={[item.done ? 'completed' : '', item.isEdit ? 'editing' : ''].join(' ')}>
        <div className="view" onDoubleClick={this.handleDoubleClick.bind(this, item.id)}>
          <input checked={item.done} onChange={this.handleCheck.bind(this, item.id)} className="toggle" type="checkbox" />
          <label>{item.etitle}</label>
          <button className="destroy" onClick={() => deleteHandle(item.id)}></button>
        </div>
        <input value={item.etitle} onChange={this.handleEditEtile.bind(this, item.id)} onBlur={this.handleDoubleClick.bind(this, item.id)} className="edit" />
      </li>
    ))
    return (
      <section className="main">
        <input defaultChecked={isAll} id="toggle-all" className="toggle-all" type="checkbox" />
        <label onClick={this.toggleAll} htmlFor="toggle-all">全部标记为完成</label>
        <ul className="todo-list">
          {todoTags}
        </ul>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}
const mapDispatchToProps = (dispatch) => {
  // 删除项目
  const deleteHandle = (id) => {
    // 写一个action
    // dispatch分发
    let action = deleteTaskAction(id)
    dispatch(action)

  }
  return {
    deleteHandle
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)
