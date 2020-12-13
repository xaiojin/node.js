var express = require('express')
var path = require('path')
var app = express()
var router = require('./router')
var session = require('express-session')
var bodyParser = require('body-parser')

app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

app.engine('html', require('express-art-template'))
app.set('views',path.join(__dirname,'./views/'))


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(session({
  // 配置加密字符串，它会在原有加密基础之上和这个字符串拼起来去加密
  // 目的是为了增加安全性，防止客户端恶意伪造
  secret: 'itcast',
  resave: false,
  saveUninitialized: false // 无论你是否使用 Session ，我都默认直接给你分配一把钥匙
}))


//原先的路由
// app.get('',function(req,res){
// 	// res.send('hello')
// 	res.render('index.html',{
// 		name:'张三'
// 	})
// })
app.use(router)

app.listen(8888,function(){
	console.log('running ...')
})


