// 导入 TodoApp 组件
import TodoApp from './005-Redux实现TodoList 组件化/TodoApp'
// 导入 Provider 组件，用来向组件传递数据
import { Provider } from 'react-redux'
// 导入唯一数据源
import store from './005-Redux实现TodoList 组件化/Store/Store'
function App() {
  return (
    <div className='app'>
      {/* 使用Provider将组建包裹 ，添加store属性*/}
      <Provider store={store}>
        <TodoApp></TodoApp>
      </Provider>
    </div>
  )
}
export default App





// // 导入购物车案例
// import Cart from './003-Redux方式实现购物车案例/Index.jsx'
// import './index.css'

// // 导入唯一数据源
// import store from './003-Redux方式实现购物车案例/Store/Store.js'
// // 导入 Provider 组件
// import {Provider} from 'react-redux'
// function App() {
//   return (
//     <div className="App">
//       {/* 使用 Provider 组件 将 Cart 组件包裹 */}
//       {/* 包裹以后 需要将 Provider  store 属性，属性值就是唯一数据源*/}
//       {/* 配置好以后 Cart 组件下面的所有子组件都能够使用 store 中数据*/}
//       <Provider store={store}>
//         <Cart />
//       </Provider>
//     </div>
//   );
// }

// export default App
