const express = require('express');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const {sequelize} =require('./models')

const router = require('./router');
const devRouter =require('./router/devrouter');
const webSocket = require('./socket')

const app = express();
const http = require('http').createServer(app);
http.listen(8080, function () {
  console.log(`listening port 8080`);
});


// 세션을 사용해서 로그인
app.use(
  session({
    secret:'AnBang',
    resave: false,
    saveUninitialized: true,
    // cookie:{
    //   // domain: 'localhost',
    //   path:'/',
    //   maxAge: 24*6*60*10000,
    //   sameSite: 'NONE',
    //   httpOnly: false,
    //   secure: true
    // }
  })
)

//
sequelize
  .sync({force :false})
  .then((body)=>{
    console.log('connected')
  })
  .catch((err)=>{
    console.log('error')
  })

app.use(express.json());
// app.use(cors());

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, `../client/build`)));

// app.use('/', apiRouter);
app.use('/dev', devRouter);
app.use('/user', router.userRouter);
app.use('/estate', router.estateRouter);
app.use('/dm',router.dmRouter);


webSocket(http, app);
// console.log("1" + webSocket.toString())

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, `../client/build/index.html`));
// });
