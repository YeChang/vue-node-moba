const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name: { type: String },
    parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },
})
//前端用的._id 就是 mongoose.SchemaTypes.ObjectId
//ref 是reference 关联 这里是我关联我自己实现子分类
module.exports = mongoose.model('Category', schema)