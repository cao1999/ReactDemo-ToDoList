//导入react包
// 测试
import React from "react"
import ReactDOM from "react-dom"

//导入自己的父组件
import ItemWrap from "@/components/ItemWrap.jsx"

//创建虚拟DOM 不使用这种方式创建虚拟DOM 太麻烦了 使用JSX语法 需要安装babel
// let element = React.createElement("h1", null, "这只是一个实验");


//挂载渲染虚拟DOM 直接将父组件放到这里
ReactDOM.render(<div><ItemWrap></ItemWrap></div>, document.getElementById("app"));

