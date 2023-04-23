const express = require("express");
const app = express();
const getConn = require("./connection/conn");
const port = 5000 || process.env.port;
const signup = require("./Routes/signup");
const signIn = require("./Routes/signIn");
const books = require("./Routes/books");
const cors = require("cors");
getConn();

app.use(cors());
app.use(express.json());
app.use(signup);
app.use(signIn);
app.use(books);

app.listen(port, () => console.log("server is running"));
