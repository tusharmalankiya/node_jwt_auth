const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { checkUser } = require("./middleware/authMiddleware");
require("dotenv").config();

const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

//view engine
app.set("view engine", "ejs");

//database connection
mongoose.connect(process.env.MONGO_URI).then((result) => {
  app.listen(process.env.PORT, () => {
    console.log(`connected to db and listing on ${process.env.PORT}....`);
  });
});

//routes
app.get("*", checkUser);
app.use(require("./routes/commonRoutes"));
app.use(require("./routes/authRoutes"));

// app.get('/set-cookies', (req, res)=>{
//     res.cookie('newUser', false);
//     res.cookie('isEmployee', true, { maxAge: 1000*60*60*24, httpOnly: true  });

//     // res.setHeader('Set-Cookie', 'newUser=true');
//     res.send('cookie has set')
// });

// app.get('/get-cookies', (req, res)=>{
//     const cookies = req.cookies;
//     console.log(cookies);
//     res.json(cookies);
// } )
