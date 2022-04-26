//! 1.引入express
const { request, response } = require('express')
const express = require('express')

//! 2.创建应用对象
const app = express()

//! 3.创建路由规则
//! request是对请求报文的封装
//! response是对响应式报文的封装
app.get('/server', (require, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应体
    response.send('HELLO AJAX')
})
app.get('/json-server', (require, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    const data = {
        name:'小澈不会撤'
    }
    // 对对象进行字符串转换
    let str = JSON.stringify(data)
    //设置响应体
    response.send(str)
})
app.post('/server', (require, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应体
    response.send('HELLO AJAX')
})

//延时响应
app.get('/outTime',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*')
    setTimeout(()=>{
        response.send('延时响应')
    },3000)
})
//!4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动,8000端口监听中....");
})