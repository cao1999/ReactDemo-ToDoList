//这是显示数据的子组件
import React from "react"

//导入该组件的样式文件
import boxStyle from "@/css/childBox.scss"

//导入react UI组件 按需导入
import { Table, Row, Col } from "antd"

//导出这个组件
export default class ChildBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            //columns是用来设置表格头部的
            columns: [
                {
                    title: "发布人",
                    dataIndex: "name",
                    key: "name"
                },

                {
                    title: "事件",
                    dataIndex: "event",
                    key: "event"
                },

                {
                    title: "开始时间",
                    dataIndex: "startTime",
                    key: "startTime"
                },

                //这一列是对数据进行操作
                {
                    title: "操作",
                    key: "删除",
                    render: (text, record) => (
                        <span>
                            <a href="javascript:;" onClick={ () => this.delete(record.key) }>删除</a>
                        </span>
                    )
                }
            ]
        }
    }

    //设置props的初始值 防止外界没有给子组件传值而导致出错
    //data是用来存储数据的 这里的数据要从本地存储中获得
    //注意：每一组数据必须有key属性
    static defaultProps = {
        data: [],
    }

    //将组件挂载到页面上执勤获取本地存储的数据相当于Vue中的created函数
    componentWillMount() {
        //在React中props可以传变量也可以传函数 不用区别对待
        this.props.getAll();
    }

    render() {

        return <div className={ boxStyle["child-wrap"] }>
           <Row>
               <Col lg={ {span: 18, offset: 3} }>
                    <Table columns={ this.state.columns } dataSource={ this.props.data }></Table>
               </Col>
           </Row>
        </div>;
    }

    //定义删除数据的函数
    delete = (index) => {
        let storage = window.localStorage;

        //获取本地存储中的数据
        let data = JSON.parse(storage.getItem("eventList") || "[]");

        //删除某一条数据 splice是数组的方法
        data.splice(index, 1);

        //删除之后要重新设置key值
        data.forEach((item, index) => {
            item.key = index;
        })

        //将最新的数据存储到本地存储
        storage.setItem("eventList", JSON.stringify(data));

        //修改完成后 再次获取新的数据 并显示到页面上
        this.props.getAll();
    }
}