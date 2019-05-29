//这里是父组件 最外围的元素
//每个组件都要导入react包
import React from "react"

//导入自己的子组件
import ChildInput from "@/components/ChildInput.jsx"
import ChildImage from "@/components/ChildImage.jsx"

//导出这个组件
export default class ItemWrap extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    render() {
        return <div>
            <ChildImage></ChildImage>
            <ChildInput></ChildInput>
        </div>;
    }
}