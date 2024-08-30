
export const TaskCompletion = (taskId) => {
    return{
        type: 'TASK_COMPLETION',
        payload: taskId
    }
}