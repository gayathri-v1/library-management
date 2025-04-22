const express = require("express")
const app = express()
const mysql = require("mysql")
require("dotenv").config()
const bcrypt = require("bcrypt")

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE
const DB_PORT = process.env.DB_PORT


const db = mysql.createPool({
connectionLimit :100,
host: DB_HOST,
user: DB_USER,
password:DB_PASSWORD,
database: DB_DATABASE,
port: DB_PORT
})
db.getConnection((err, connection) =>{
    if(err) throw (err)
    console.log("DB connected successful: "+ connection.threadId)
})

const port = process.env.PORT
app.listen(port, () =>{
    console.log (`server started on port ${port}`)
})

app.use(express.json())

//CREATE USER
app.post("/createUser",async (req,res) =>{
    const user = req.body.name;
    const hashedPassword = await bcrypt.hash(req.body.password,10);

    db.getConnection(async (err, connection) => {
        if(err) throw (err)
        
        const sqlSearch = "SELECT * FROM userTable WHERE user = ? "
        const search_query = mysql.format(sqlSearch, [user])
        const sqlInsert = "INSERT into userTable VALUES (0,?,?)"
        const insert_query = mysql.format(sqlInsert, [user , hashedPassword])
// ? will be replaced by values
 // ?? will be replaced by string
         connection.query (search_query, async (err, result) => {
            if(err)throw (err)
        console.log("----> search results")
        console.log(result.length)
            if(result.length!=0)
                {
                connection.release()
                console.log("---> user already exist")
                res.sendStatus(409);
            }
            else
            {
                 connection.query(insert_query,(err, result) =>{
                    if(err)throw(err)
                        console.log ("--------> Created new User")
                        console.log(result.insertId)
                        res.sendStatus(201)
                })
                
            }
        })
    })
})