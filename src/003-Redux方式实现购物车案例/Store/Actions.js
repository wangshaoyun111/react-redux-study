/**
 * 
 * @param {*} params 
 * @returns 始终是一个对象 必须返回对象
 */
import * as ActionName from './ActionName'
// 抽取添加商品的 action
export const addAction = (params) => {
    return {
        type: ActionName.ADD_ACTION,
        name: params.name
      }
}
// 抽取减少商品的action
export const subAction = (params) => {
    return {
        type: ActionName.SUB_ACTION,
        name: params.name
      }
}