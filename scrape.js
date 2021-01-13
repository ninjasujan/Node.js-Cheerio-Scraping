const axios = require("axios").default;
const cheerio = require("cheerio");

axios
  .get("https://jamesclear.com/best-articles-2016")
  .then((response) => {
    const $ = cheerio.load(response.data);
    // const pageHeader = $(".footer");
    /* simple jquery stuff */
    // console.log(pageHeader.find(".footer__logo").html());
    // console.log(pageHeader.children("div.container").text());
    // console.log(pageHeader.children("div.container").parent().text());

    /* Looping  */
    $(".main .header .container div").each((i, el) => {
      //   console.log("class name");
      const text = $(el).text();
      const className = $(el).attr("class");
      console.log(className);
    });
  })
  .catch((err) => {
    console.log(err);
  });
