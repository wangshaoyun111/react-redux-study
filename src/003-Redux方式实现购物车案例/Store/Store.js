// 1  导入 cerateStore 方法 用来创建仓库
import { createStore } from 'redux'
// 4 声明 reducer 方法
import reducer from './Reducer'
// 3 创建 初始化数据
const initValue = {
    apple: 1,
    orange:1,
    banana:0
}

// 2 使用 cerateStore 创建仓库
// 需要接收两个参数
// 第一个参数：操作变更数据的方法 reducer
// 第二个参数：初始化的数据
const store = createStore(reducer,initValue)

export default store