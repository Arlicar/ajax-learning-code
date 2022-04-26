//! 1.引入express
const {
    request,
    response
} = require('express')
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
        name: '小澈不会撤'
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
app.get('/outTime', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    setTimeout(() => {
        response.send('延时响应')
    }, 3000)
})

//jQuery服务
// app.get('/jquery-server', (request, response) => {
//     response.setHeader('Access-Control-Allow-Origin', '*')
//     response.send('Hello jQuery AJAX')
// })
// app.post('/jquery-server', (request, response) => {
//     response.setHeader('Access-Control-Allow-Origin', '*')
//     response.send('Hello jQuery AJAX')
// })
app.all('/jquery-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    const data = {name: '小澈不会撤'}

    response.send(JSON.stringify(data))  
})
//axios服务
app.all('/axios-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    const data = {
        name: '小澈不会撤'
    }

    response.send(JSON.stringify(data))
})

//fetch服务
app.all('/fetch-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    const data = {
        name: '小澈不会撤'
    }

    response.send(JSON.stringify(data))
})
//用户名检测是否存在
app.all('/check-username', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    }
    
    //将数据转换为字符串
    let str = JSON.stringify(data)
    // 返回结果
    response.end(`handle(${str})`)
})
//!4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动,8000端口监听中....");
})