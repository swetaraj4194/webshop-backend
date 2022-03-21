const express = require("express");
const app = express();
const PORT = 4000;
const productRouter = require("./routers/products");
app.use(express.json());
// app.use(cors());
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
