const express = require('express')
const axios = require('axios');
const cors = require('cors')
const app = express()

app.use(cors())
app.get('/api', async (req, res)=>{
    try {
        const resultApi = await axios.get('https://api.adviceslip.com/advice')
        //console.log(resultApi.data)
        res.status(200).json({msg: 'data ditemukan', data: resultApi.data})
    } catch (error) {
        res.status(500).json({msg: error, data: null})
    }
})

const port = process.env.PORT || 3000
app.listen(port, console.log('app run'))