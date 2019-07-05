const fs = require("fs");
const path = require("path");

const productsRoute = (request, response) => {
  const filePath = path.join(__dirname, "../../../", "assets", "1assorti.jpg");
  const image = fs.statSync(filePath);

  response.writeHead(200, {
    "Content-Type": "image/jpeg",
    "Content-Length": image.size
  });
  const readStream = fs.createReadStream(filePath);
  readStrean.pipe(response);
};

module.exports = productsRoute;
