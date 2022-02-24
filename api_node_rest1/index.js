// const express = require("express");
// const router = express.Router();

// const app = express();

// const cors = require("cors");
// const corsOptions = {
//     origin: ["http://localhost:3000"]
// };
// app.use(cors(corsOptions));

// app.use(express.json());

// app.use(router);

// router.route("/")
// .get((req, res) => {
//     res.send((req.method + req.path));
// })
// .post((req,res) =>{
//     res.send((req.method + req.path));
// })

// router.route("/test").get((req,res) => {
//     res.send((req.method + req.path));
// })

// router.route("/contact").post((req,res) => {
//     console.log(req.body);
//     res.json({message:"Envoyé !"})
// })

// const PORT = 5000;
// app.listen(PORT, () => {
//     console.log(`Seveur is running on port ${PORT}.`);
// });

const express = require("express");
const routers = require('./api/routers');
console.log(routers)

const app = express();

const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:3000"]
};
app.use(cors(corsOptions));

app.use(express.json());

for(const route in routers){
  app.use(`/${route}`, new routers[route]().router);
}

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});