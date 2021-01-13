const axios = require("axios").default;
const cheerio = require("cheerio");

const fs = require("fs");
const file = fs.createWriteStream("read.txt");

axios
  .get("https://jamesclear.com/best-articles-2016")
  .then((response) => {
    const $ = cheerio.load(response.data);
    $(".page__content p").each((i, el) => {
      file.write(`${$(el).text()} \n\n\n`);
    });
    console.log("scraping done");
  })
  .catch((err) => {
    console.log(err);
  });
