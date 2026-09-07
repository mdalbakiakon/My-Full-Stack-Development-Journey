import app from "./src/app.js";

app.post('/', async (req, res) => {
    try {

        const data = req.body;
        console.log(data.name);
        console.log(data.age);

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "something went wrong",
            error: error.message
        })
    }
})

app.listen(3000, () => {
    console.log('server is live on port: 3000')
})