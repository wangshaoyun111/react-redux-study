// 导入购物车案例
import Cart from './003-Redux方式实现购物车案例/Index.jsx'
import './index.css'

// 导入唯一数据源
import store from './003-Redux方式实现购物车案例/Store/Store.js'
// 导入 Provider 组件
import {Provider} from 'react-redux'
function App() {
  return (
    <div className="App">
      {/* 使用 Provider 组件 将 Cart 组件包裹 */}
      {/* 包裹以后 需要将 Provider  store 属性，属性值就是唯一数据源*/}
      {/* 配置好以后 Cart 组件下面的所有子组件都能够使用 store 中数据*/}
      <Provider store={store}>
        <Cart />
      </Provider>
    </div>
  );
}

export default App
