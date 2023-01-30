const express = require('express');
var cors = require('cors')

const app = express();

//Middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://seid:UmY5y2uQSRhvz6XX@cluster0.sywdtca.mongodb.net/Figma?retryWrites=true&w=majority')
.then(() => console.log('Connect Database...!'))
.then(() => {
    app.listen(3003)
})
.catch((err) => console.log(err))

//sagl












