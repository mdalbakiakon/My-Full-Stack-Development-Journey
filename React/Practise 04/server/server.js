import app from "./src/app.js";

app.post("/", (req, res) => {
  const { username, age } = req.body;
  console.log(username, age);
  res.json({ message: "Success" });
});

app.listen(3000, ()=>{
    console.log('server is live on port: 3000');
})