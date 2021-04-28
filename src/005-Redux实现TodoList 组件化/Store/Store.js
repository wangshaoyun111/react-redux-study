// 1导入 createStore
import { createStore } from 'redux'
// 4创建 reducer
import reducer from './Reducer'
// 3初始化数据

let initData = {
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
// 2使用 createStore 创建仓库

const store = createStore(reducer, initData)

export default store