/**
 * 
 * @param {*} store 根据action 对数据进行变更
 * @returns 
 */
function Reducer(state, action) {
    console.log(action);
    let newState = null
    switch (action.type) {
        case 'add_task':
            // 创建新数据修改
            // 因为数据是多层嵌套，想要生成新数据需要深拷贝
            // 展开运算符只能对一级进行拷贝
            // 深拷贝方案1 JSON.parse(JSON.stringify(state))
            newState = JSON.parse(JSON.stringify(state))
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
        case 'deleteTask':
            // 生成新对象
            // 使用新对象和传递的id值找到对应的索引值
            // 将新的对象根据索引值删除
            // 返回新对象
            newState = JSON.parse(JSON.stringify(state))
            const index = newState.todos.findIndex(item => {
                return item.id === action.id
            })
            newState.todos.splice(index, 1)
            return newState
        case 'toggle_one_task':
            newState = JSON.parse(JSON.stringify(state))
            newState.todos.some(item => {
                if (item.id === action.id) {
                    item.done = !item.done
                    return true
                }
                return false
            })
            return newState
        default:
            return state
    }
}

export default Reducer