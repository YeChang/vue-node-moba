const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name: { type: String },
    parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },
})
//前端用的._id 就是 mongoose.SchemaTypes.ObjectId
//ref 是reference 关联 这里是我关联我自己实现子分类

schema.virtual('children', {
    localField: '_id',
    foreignField: 'parent',
    justOne: false,
    ref: 'Category'
})

schema.virtual('newsList', {
    localField: '_id',
    foreignField: 'categories',
    justOne: false,
    ref: 'Article'
})

module.exports = mongoose.model('Category', schema)