

module.exports = options => {
    const assert = require('http-assert')
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../models/AdminUser')




    return async (req, res, next) => {
        // console.log(req.app.get('secret'));
        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token, 401, '请提供jwt token')

        const { _id } = jwt.verify(token, req.app.get('secret'))
        assert(_id, 401, '无效的jwt token')

        const user = await AdminUser.findById(_id)
        req.user = user
        assert(req.user, 401, '请先登录')

        await next()
    }
}