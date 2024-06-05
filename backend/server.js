const express = require('express')

const app = express()
const userRouter = require('./routes/userRoutes')


app.use(express.json());
app.use('/',userRouter);
app.listen(444,()=>{
    console.log('listening on port 444')
})

