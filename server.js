const express = require("express");
const cors = require("cors");


const app = express();
const PORT = 4000;
const productRouter = require("./routers/products");

app.use(cors());

app.use(express.json());
// app.get("/", (request, response, next) => {
//   try {
//     response.send("hello world");
//   } catch (e) {
//     console.log(e.message);
//     next(e);
//   }
// });
app.use("/products", productRouter);
app.listen(PORT, () => console.log(`Listining on port: ${PORT}`));
