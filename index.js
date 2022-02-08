require('dotenv').config()
const express = require ('express')
const app = express()
const cors = require('cors')
const Routers = require('./router/index.js')
const cookieParser = require('cookie-parser')
const path = require('path')
const morgan = require ('morgan')

const port = process.env.PORT || 3000

let dir = path.join(__dirname, 'uploads')

app.use(morgan('dev'))

const allowedOrigins = [`http://localhost:3000`, 'http://sharafyabi.com','https://sharafyabi.com','http://admin.sharafyabi.com', 'https://admin.sharafyabi.com', 'http://141.136.44.174:7010','http://141.136.44.174:7015', 'http://141.136.44.174:7020', 
'http://141.136.44.174:7005','http://141.136.44.174:7013','http://192.168.31.8:3000', 'http://192.168.31.30:3001', 'http://localhost:3001','http://192.168.31.30:3001', 'http://192.168.31.240:3000', 'http://sharafyabi.com',]

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false); 
        }
        return callback(null, true);
        },
    credentials: true
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

app.use(express.json());
app.use(express.urlencoded({limit: '50mb', extended : true}));
app.use(express.static(path.join(__dirname, 'out')))

app.use('/api', Routers)

app.use('/uploads', express.static(dir))

app.get('auth/', function (req, res) {
    res.sendFile(path.join(__dirname, 'out/auth', 'login.html'));
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'out', 'index.html'));
});

app.use(cookieParser())


app.listen(port, ()=>{console.log(`Your server started and listening on port ${port}`)})