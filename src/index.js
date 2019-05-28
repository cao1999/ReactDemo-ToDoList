//导入react包
import React from "react"
import ReactDOM from "react-dom"

//创建虚拟DOM 不使用这种方式创建虚拟DOM 太麻烦了 使用JSX语法 需要安装babel
// let element = React.createElement("h1", null, "这只是一个实验");


//挂载渲染虚拟DOM
ReactDOM.render(<Practice></Practice>, document.getElementById("app"));

