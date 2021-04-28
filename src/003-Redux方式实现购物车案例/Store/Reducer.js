import * as ActionName from './ActionName'
import * as Service from './Service'
// 接收两个方法
// 第一个参数：操作原数据
// 第二个参数：是 action 行为
const reducer = (state, action) => {
    // reducer内部不能对原数据进行修改
    // 如果想要修改，需要基于原数据创建新数据，进行修改
    // reducer 根据传入的action 行为对数据进行修改
    switch (action.type) {
        case ActionName.ADD_ACTION:
            // 控制商品个数添加
            return Service.addShop(state,action)    
        
        case ActionName.SUB_ACTION:
            // 控制商品个数的减少
            return Service.subShop(state, action)
        
        default:
            return state  
    }
}
export default reducer