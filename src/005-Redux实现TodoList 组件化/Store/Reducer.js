/**
 * 
 * @param {*} store 根据action 对数据进行变更
 * @returns 
 */
function Reducer(state, action) {
    switch (action.type) {
        case 'add_task':
            // 创建新数据修改
            // 因为数据是多层嵌套，想要生成新数据需要深拷贝
            // 展开运算符只能对一级进行拷贝
            // 深拷贝方案1 JSON.parse(JSON.stringify(state))
            let newState = JSON.parse(JSON.stringify(state))
            // 将数据处理成数据添加到 state中
            // 处理id问题 Math.max数组最大值
            let ids = newState.todos.map(item => {
                return item.id
            })
            let maxID = Math.max.apply(null, ids) + 1
            let newTask = {
                id: maxID,
                etitle: action.value,
                done: false,
                isEdit:false
            }
            newState.todos.push(newTask)
            return newState
    
        default:
            return state
    }
}

export default Reducer