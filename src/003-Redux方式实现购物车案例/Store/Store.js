// 1  导入 cerateStore 方法 用来创建仓库
import { cerateStore } from 'redux'

// 3 创建 初始化数据
const initValue = {
    apple: 0,
    orange: 0,
    banana:0
}

// 4 声明 reducer 方法
// 接收两个方法
// 第一个参数：操作原数据
// 第二个参数：是 action 行为
const reducer = (state, action) => {
    return state
}

// 2 使用 cerateStore 创建仓库
// 需要接收两个参数
// 第一个参数：操作变更数据的方法 reducer
// 第二个参数：初始化的数据
const store = cerateStore(reducer,initValue)

export default store