module.exports = app => {
    const express = require('express')
    const assert = require('http-assert')
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../../models/AdminUser')

    const router = express.Router({
        mergeParams: true
    })


    // Category.db.dropCollection('')



    //增加
    router.post('/', async (req, res) => {
        // const Model = require(`../../models/${}`)
        const model = await req.Model.create(req.body)
        res.send(model)
    })


    //put 修改
    router.put('/:id', async (req, res) => {
        const item = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(item)
    })

    //delete 删除
    router.delete('/:id', async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id)
        res.send({
            success: true
        })
    })

    //查找 资源列表
    router.get('/', async (req, res) => {
        /*
        没有populate传回去的就是
        {
            {
                _id: "5dbbbf15ab4b122988542ad8", 
                name: "热点", 
                parent: "5dbbbf15ab4b122988542ad8"
                __v: 0
            }
        
        有populate传回去的是
        {
            _id: "5dbbc49a47dbbc301c10c5aa", 
            parent: {_id: "5dbbbf15ab4b122988542ad8", name: "news", __v: 0}
            name: "热点"
         */

        const queryOptions = {}
        if (req.Model.modelName) {
            queryOptions.populate = 'parent'
        }
        const items = await req.Model.find().setOptions(queryOptions)
        res.send(items)
    })

    //资源详情
    router.get('/:id', async (req, res) => {
        const item = await req.Model.findById(req.params.id)
        res.send(item)
    })

    //登录校验
    const authMiddleware = require('../../middleware/auth')

    const resourceMiddleware = require('../../middleware/resource')
    //中间件的概念 
    //验证token放在资源这里
    app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware() , router)




    const multer = require('multer')
    const upload = multer({ dest: __dirname + '/../../uploads' })
    app.post('/admin/api/upload', authMiddleware(), upload.single('file'), async (req, res) => {
        const file = req.file
        file.url = `http://test.kekerui.online/uploads/${file.filename}`
        res.send(file)
    })



    app.post('/admin/api/login', async (req, res) => {
        const { username, password } = req.body
        //找用户 根据用户名
        const user = await AdminUser.findOne({
            username: username
        }).select('+password')

        assert(user, 422, '用户不存在')

        const isValid = require('bcryptjs').compareSync(password, user.password)

        //校验密码
        assert(isValid, 422, '密码错误')

        const token = jwt.sign({ _id: user._id, }, app.get('secret'))
        res.send({ token })
    })


    //错误处理  buhuo
    app.use(async (err, req, res, next) => {
        console.log(err);
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })


}