// 1  导入 cerateStore 方法 用来创建仓库
import { createStore } from 'redux'

// 3 创建 初始化数据
const initValue = {
    apple: 1,
    orange:1,
    banana:0
}

// 4 声明 reducer 方法
// 接收两个方法
// 第一个参数：操作原数据
// 第二个参数：是 action 行为
const reducer = (state, action) => {
    // reducer内部不能对原数据进行修改
    // 如果想要修改，需要基于原数据创建新数据，进行修改
    // reducer 根据传入的action 行为对数据进行修改
    switch (action.type) {
        case 'add':
            // [action.name] -- 获取需要处理的键
            // state[action.name] + 1 --  从state中根据键找到对应的数值 + 1
            // const newState = {...state, [action.name]:state[action.name] + 1}
            return  {...state, [action.name]:state[action.name] + 1};
        
        case 'sub':
            // const newState = {...state, [action.name]:state[action.name] - 1}
            let maxNum = state[action.name]
            if(maxNum <= 0) return {...state}
            return  {...state, [action.name]:state[action.name] - 1};
        default:
            break;
    }
    return state
}

// 2 使用 cerateStore 创建仓库
// 需要接收两个参数
// 第一个参数：操作变更数据的方法 reducer
// 第二个参数：初始化的数据
const store = createStore(reducer,initValue)

export default store