const axios = require("axios").default;
const cheerio = require("cheerio");

axios
  .get("https://jamesclear.com/best-articles-2016")
  .then((response) => {
    const $ = cheerio.load(response.data);
    const pageHeader = $(".footer");
    console.log(pageHeader.find(".footer__logo").html());
  })
  .catch((err) => {
    console.log(err);
  });
