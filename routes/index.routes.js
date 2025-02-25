const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("Todo bien");
});

const pistaRouter = require("./pista.routes.js")
router.use("/pista", pistaRouter);

const resultadoRouter = require("./resultado.routes.js")
router.use("/resultado", resultadoRouter);

const userRouter = require("./user.routes.js")
router.use("/user", userRouter);

module.exports = router;
