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
export const toggleTaskAction = (id) => {
    return {
        type: 'toggle_one_task',
        id
    }
}
export const toggleAllAction = (status) => {
    return {
        type: 'toggle_all',
        status
    }
}
export const deleteTaskDone = () => {
    return {
        type: 'delete_done'
    }
}