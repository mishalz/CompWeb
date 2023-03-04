const fs = require("fs");
const PNG = require("pngjs").PNG;
const pixelmatch = require("pixelmatch");

const compareSites = (url1, url2) => {
  const img1 = PNG.sync.read(fs.readFileSync(url1));
  const img2 = PNG.sync.read(fs.readFileSync(url2));
  const { width, height } = img1;
  const diff = new PNG({ width, height });

  const result = pixelmatch(img1.data, img2.data, diff.data, width, height, {
    threshold: 0.1,
  });

  fs.writeFileSync("diff.png", PNG.sync.write(diff));
  console.log(`Different pixels: ${result}`);
};

module.exports = compareSites;
