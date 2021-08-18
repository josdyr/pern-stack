const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//dynamic react templating, for loop dynamically create the table with respective rows

//routes
app.get("/objecttype", async(req, res) => {
  //await
  try {
    const { description } = req.body;
    const objecttype = await pool.query("SELECT * FROM supersystemframework.objecttype");
    res.json(objecttype.rows);
  } catch (err) {
    res.json(err);
    console.error(err.message);
  }
})

//routes
app.get("/objecttype", async(req, res) => {
  //await
  try {
    const { description } = req.body;
    const objecttype = await pool.query("SELECT * FROM supersystemframework.objecttype");
    res.json(objecttype.rows);
  } catch (err) {
    res.json(err);
    console.error(err.message);
  }
})

app.post("/todos", async(req, res) => {
  //await
  try {
    const { description } = req.body;
    const newTodo = await pool.query("INSERT INTO supersystemframework.todo (description) VALUES($1)", [description]);
  } catch (err) {

    res.json(newTodo);
    console.error(err.message);
  }
})

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
