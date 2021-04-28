// 商品添加逻辑方法
export const addShop = (state,action) => {
    // [action.name] -- 获取需要处理的键
    // state[action.name] + 1 --  从state中根据键找到对应的数值 + 1
    // const newState = {...state, [action.name]:state[action.name] + 1}
    return  {...state, [action.name]:state[action.name] + 1};
}
// 商品减少逻辑方法
export const subShop = (state, action) => {
    // const newState = {...state, [action.name]:state[action.name] - 1}
    let maxNum = state[action.name]
    if(maxNum <= 0) return {...state}
    return  {...state, [action.name]:state[action.name] - 1};
}