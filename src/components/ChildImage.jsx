//导入React包
import React from "react"

import imageStyle from "@/css/childImage.scss"

export default class ChildImage extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return <div className={ imageStyle["logo-wrap"] }>
            {/* 这里引入图片使用require来引入 并且要安装图片的loader */}
            <img className={ imageStyle.logo } src={ require("../image/react.jpg") } alt="这是一张react logo图"/>
        </div>
    }
}