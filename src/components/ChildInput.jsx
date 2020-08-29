//这里是输入框组件
import React from "react"

// 测试

//导入scss样式文件  需要安装loader来处理
import inputStyle from "@/css/childInput.scss"

//导入ant design UI 框架 使用按需导入 使用了插件后 不需要手动的引入UI的css文件了
import { Input, Row, Col, Button } from "antd"

//导入子组件
import ChildBOX from "@/components/ChildBox.jsx"

//导出这个组件
export default class ChildInput extends React.Component {
    constructor() {
        super();
        this.state = {
            //发布人
            name: "",
            //事件
            event: "",
            //开始时间
            startTime: "",
            //存放着所有的数据
            //data是用来存储数据的 这里的数据要从本地存储中获得
            //注意：每一组数据必须有key属性
            data: []
        }
    }

    render() {
        return <div className={ inputStyle["child-wrap"] }>
            <Row className={ inputStyle["input-wrap"] }>
                {/* 实现输入框与state的双向绑定 */}
                <Col lg={ {span: 14, offset: 5} }><Input value={ this.state.name } onChange={ (e) => this.getName(e) } placeholder="Please input your name"/></Col>
            </Row>
            <Row className={ inputStyle["input-wrap"] }>
                <Col lg={ {span:14, offset: 5} }><Input value={ this.state.event } onChange={ (e) => this.getEvent(e) } ref="event" placeholder="Please input the event you will do"/></Col>
            </Row>
            <Row className={ inputStyle["input-wrap"] }>
                <Col lg={ {span: 14, offset: 5} }><Input value={ this.state.startTime } onChange={ (e) => this.getStartTime(e) } ref="startTime" placeholder="Please input the start time"/></Col>
            </Row>
            <Row className={ inputStyle["input-wrap"] }>
                <Col lg={ {span: 10, offset: 7} }><Button onClick={ () => this.saveAll() } type="primary" block>submit</Button></Col>
            </Row>
            {/* 通过props给子组件传值 也可以传方法 */}
            <ChildBOX data={this.state.data} getAll={ this.getAll }></ChildBOX>
        </div>;
    }
    
    //获取用户名并保存到state中 
    getName = (e) => {
        //注意：这里使用ref的时候与使用事件对象的效果不用
        //获取输入框中的内容 并修改state
        this.setState({
            name: e.target.value
        })
    }

    //获取事件并修改state 
    getEvent = (e) => {
        this.setState({
            event: e.target.value
        })
    }

    //获取开始时间并修改state 
    getStartTime = (e) => {
        this.setState({
            startTime: e.target.value
        })
    }

    //获取所有信息并且存储到本地存储中
    saveAll = () => {
        //提交之前判断输入框是否有空的 有的话不能提交
        let judge = this.state.name === "" || this.state.event === "" || this.state.startTime === "";

        if(judge) {
            alert("输入内容不能为空！！！");
            return;
        }else {

         //获取本地存储的内容 有就取出来 没有就取个空数组 本地存储中的数据都是字符串类型的
        let storage = window.localStorage;

        let dataList = JSON.parse(storage.getItem("eventList") || "[]");

        //设置提交的数据 必须有key值
        let newData = {name: this.state.name, event: this.state.event, startTime: this.state.startTime};

        //将新的数据unshift到dataList数组中去 在将dataList存到本地存储中去 需要将数据转成字符串类型
        dataList.unshift(newData);

        //给每一条数据添加一个key属性
        dataList.forEach((item, index) => {
            item.key = index;
        })

        storage.setItem("eventList", JSON.stringify(dataList));

        //清空输入框 使用this.setState
        this.setState({
            name: "",
            event: "",
            startTime: ""
        });

        //点击提交按钮后 获取最新的本地存储数据 然后在显示在页面上
        this.getAll();

        }
    }

    //从本地库获取数据
    getAll = () => {
        let storage = window.localStorage;

        //获取本地存储中的数据
        let data = JSON.parse(storage.getItem("eventList") || "[]");

        //将本地存储赋值给state的data属性
        this.setState({
            data: data
        })

    }
}
