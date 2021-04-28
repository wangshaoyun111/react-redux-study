import React from 'react'
import Header from './Header.jsx'
import List from './List.jsx'
import Footer from './Footer.jsx'
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

class TodoApp extends React.Component {
  state = {
    currentType: 'all',
    todos: [
      {
        id: 1,
        etitle: '写代码',
        done: false,
        isEdit: false
      }, {
        id: 2,
        etitle: '去K歌',
        done: true,
        isEdit: false
      }
    ]
  }

  // 剩余的任务
  handleCount = () => {
    // 计算剩余的没有完成的任务数量
    let num = 0
    this.state.todos.forEach(item => {
      if (!item.done) {
        // 没有完成的任务
        num += 1
      }
    })
    return num
  }

  // 删除任务
  deleteTask = (id) => {
    // 删除任务
    let todos = [...this.state.todos]
    // 查找要删除的数据索引
    let index = todos.findIndex(item => {
      return item.id === id
    })
    // 根据索引删除数组的元素
    todos.splice(index, 1)
    this.setState({
      todos: todos
    })
  }

  // 全选与全不选功能
  toggleAll = (isAll) => {
    // 控制所有的列表的选中状态
    let todos = [...this.state.todos]
    todos.forEach(item => {
      item.done = isAll
    })
    this.setState({
      todos: todos
    })
  }

  // 控制单选
  toggleItem = (id) => {
    // 点击每个条目的时候，需要把数据中的done属性进行取反
    let todos = [...this.state.todos]
    todos.some(item => {
      if (item.id === id) {
        // 找到后把对应done状态取反
        item.done = !item.done
        // 终止继续遍历
        return true
      }
      return false
    })
    this.setState({
      todos: todos
    })
  }

  // 添加任务
  addTask = (etitle) => {
    // 添加任务: etitle 是从子组件Header中传递过来的
    let ids = this.state.todos.map(item => {
      return item.id
    })
    let maxId = Math.max.apply(null, ids) + 1
    let todo = {
      id: maxId,
      etitle: etitle,
      done: false
    }
    this.setState({
      todos: [...this.state.todos, todo],
    })
  }

  // 显示 input 输入框
  showEditInput = (id) => {
    // 双击进入编辑状态; 或者失去焦点是，取消编辑状态
    let todos = [...this.state.todos]
    todos.some(item => {
      if (item.id === id) {
        // 找到后把对应isEdit状态取反
        item.isEdit = !item.isEdit
        // 终止继续遍历
        return true
      }
      return false
    })
    this.setState({
      todos: todos
    })
  }

  // input 输入框输入内容
  editTask = (id, value) => {
    // 编辑任务
    let todos = [...this.state.todos]
    todos.some(item => {
      if (item.id === id) {
        // 把最新的输入内容进行更新
        item.etitle = value
        return true
      }
      return false
    })
    this.setState({
      todos: todos
    })
  }


  handleFilter = (currentType) => {
    // 从子组件将条件传递到父组件
    this.setState({
      currentType: currentType
    })
  }

  // 过滤列表数据
  filterList = (currentType) => {
    let { todos } = this.state
    return todos.filter(item => {
      if (currentType === 'all') {
        // 全部列表
        return true
      } else if (currentType === 'will' && !item.done) {
        // 未完成
        return true
      } else if (currentType === 'done' && item.done) {
        return true
      } else {
        return false
      }
    })
  }

  // 清除所有已完成任务
  clearAll = () => {
    let todos = this.state.todos.filter(item => {
      return !item.done
    })
    this.setState({
      todos: todos
    })
  }

  render() {
    let { todos, currentType } = this.state

    // 更加当前条件过来出列表数据
    todos = this.filterList(currentType)
    return (
      <div>
        <section className='todoapp'>
          <Header addTask={this.addTask} />
          <List
            todos={todos}
            editTask={this.editTask}
            showEditInput={this.showEditInput}
            toggleAll={this.toggleAll}
            toggleItem={this.toggleItem}
            deleteTask={this.deleteTask} />
          <Footer
            clearAll={this.clearAll}
            handleFilter={this.handleFilter}
            num={this.handleCount()} />
        </section>
      </div>
    )
  }
}

export default TodoApp