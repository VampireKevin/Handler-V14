const fs = require("node:fs");

module.exports = (client) => {
  fs.readdirSync("./Events").filter((file) => file.endsWith(".js")).forEach((e) => {
    require(`../Events/${e}`)
  })
}