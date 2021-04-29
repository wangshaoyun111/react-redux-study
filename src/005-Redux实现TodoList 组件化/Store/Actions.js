// 添加任务action
export const addTaskAction = (value) => {
    return {
        type: 'add_task',
        value
    }
}

export const deleteTaskAction = (id) => {
    return {
        type: 'deleteTask',
        id
    }
}