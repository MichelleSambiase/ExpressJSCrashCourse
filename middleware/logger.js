const moment = require("moment");

//init middleware(intermediario)
const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
      //para ver la fecha (?)
    }: ${moment().format()}`
  );
  next();
};

module.exports = logger;
