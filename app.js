const koa = require('koa')
const koaRouter = require('koa-router')

const app = new koa()
const router = new koaRouter()
const  path = require('path')
const render = require('koa-ejs')
// const { title } = require('process')

const bodyParser= require('koa-bodyparser'

)
const numbers = ['11', '22', '33']
render(app, {
    root : path.join(__dirname, 'views'),
    layout : 'layout',
    viewExt: 'html',
    cache: false,
    debug : false
})

// Routes


router.get('/', index);
router.get('/add', showAdd);
router.post('/add',add)

async  function index(ctx){
    await ctx.render('index', {
        title: 'hakim',
        numbers: numbers
    });
}

async function showAdd(ctx) {
    await ctx.render('add');}
 
// BodyParser

app.use(bodyParser())


//Index

// router.get('/',async ctx=>{
//     await ctx.render('index',{
//         title: 'thing',
//         numbers: numbers
//     });
// })

//Middleware

// app.use(async ctx=>ctx.body='hello world')
// Adding thing
async function add(ctx) {
    const body = ctx.request.body;
    numbers.push(body.number)
    ctx.redirect('/')
}

//Router Middleware
router.get('/test', ctx => (ctx.body = 'hakim is working'))
router.get('/',ctx=>(ctx.body='hakim '))
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
