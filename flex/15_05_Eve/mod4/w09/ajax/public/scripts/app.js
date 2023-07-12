/* global $ document */
const createDragonArticle = (data) => {
  const article = $("<article>");

  article.append(`<h2>Age: ${data.age}</h2>
  <h2> Breath: ${data.breath}</h2>
  <h2> Favourite Food: ${data.favouriteFood}</h2>
  <h2> Kind: ${data.kind}</h2>
  <h2> Name: ${data.name}</h2>
  <h2> Wing Span: ${data.wingSpan}</h2>`);

  return article;
};

const renderDragonData = (dragonData) => {
  $(".dragon-container").empty();
  dragonData.forEach((dragon) => {
    const dragonArticle = createDragonArticle(dragon);
    console.log(dragonArticle);
    $(".dragon-container").prepend(dragonArticle);
  });
};

const getDragonData = () => {
  $.ajax({
    url: "/dragonData",
    type: "GET",
    dataType: "json",
    success: (result) => {
      console.log(result);
      renderDragonData(result);
    },
    error: (error) => {
      console.error("An error occured, ", error);
    },
  });
};

const postDragonData = () => {
  const data = $(".dragon-form").serialize();
  console.log(data);
  $.post("/dragonData", data).then((result) => {
    console.log(result);
    getDragonData();
  });
};

$(document).ready(() => {
  getDragonData();
  $(".dragon-form").on("submit", (event) => {
    event.preventDefault();
    console.log("Here");
    postDragonData();
  });
});
