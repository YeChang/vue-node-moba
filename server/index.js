const express = require('express')
const app = express()

//应该放在环境变量里面
app.set('secret', '21asfd125af');

app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./routes/admin')(app)
require('./plugins/db')(app)
require('./routes/web')(app)



app.listen(3001, () => {
    console.log('http://localhost:3001/');
});