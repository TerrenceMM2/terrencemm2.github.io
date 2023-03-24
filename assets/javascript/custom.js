$(document).ready(function () {
  let isExpanded = false

  $("#aboutLink").on("click", function () {
    $("#about").show();
    $("#portfolio").hide();
    $("#publications").hide();
    $("#contact").hide();
    $("#skills").hide();
    $("#resume").hide();
  });

  $("#portfolioLink").on("click", function () {
    $("#portfolio").show();
    $("#publications").hide();
    $("#about").hide();
    $("#contact").hide();
    $("#skills").hide();
    $("#resume").hide();
  });

  $("#publicationsLink").on("click", function () {
    $("#publications").show();
    $("#about").hide();
    $("#portfolio").hide();
    $("#contact").hide();
    $("#skills").hide();
    $("#resume").hide();
  });

  $("#skillsLink").on("click", function () {
    $("#skills").show();
    $("#publications").hide();
    $("#contact").hide();
    $("#portfolio").hide();
    $("#about").hide();
    $("#resume").hide();
  });

  $("#resumeLink").on("click", function () {
    $("#resume").show();
    $("#publications").hide();
    $("#contact").hide();
    $("#portfolio").hide();
    $("#about").hide();
    $("#skills").hide();
  });

  $("#contactLink").on("click", function () {
    $("#contact").show();
    $("#publications").hide();
    $("#portfolio").hide();
    $("#about").hide();
    $("#skills").hide();
    $("#resume").hide();
  });

  $("#logo").on("click", function () {
    $("#about").show();
    $("#publications").hide();
    $("#portfolio").hide();
    $("#contact").hide();
    $("#skills").hide();
    $("#resume").hide();
  });

  $("#logo-name").on("click", function () {
    $("#about").show();
    $("#publications").hide();
    $("#portfolio").hide();
    $("#contact").hide();
    $("#skills").hide();
    $("#resume").hide();
  });

  $("pre[rel=popover]").popover({
    html: true,
    trigger: "hover",
    placement: "right",
    content: function () {
      return '<img id="bio-pic" src="' + $(this).data("img") + '" />';
    },
  });

  $("#expand-collapse").on("click", function () {
    if (isExpanded) {
      $("#expand-collapse").text("Expand All")
      $("#accordion .collapse").collapse("hide");
      isExpanded = false
    } else {
      $("#expand-collapse").text("Collapse All")
      $("#accordion .collapse").collapse("show");
      isExpanded = true
    }
  });

  $(function () {
    $('[data-toggle="popover"]').popover();
  });

  var currentYear = new Date().getFullYear();
  $(".copy-date").text(currentYear);

  $.get(
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40TerrenceMM2"
  )
    .then((response) => {
      response.items.forEach((item) => {
        $("#pubContainer").append(
          `<a href="${
            item.link
          }" target="_blank"><div class="row pub-container"><img class="thumbnail col-12 col-md-3" src="${
            item.thumbnail.includes("https://medium.com/_/")
              ? "./assets/images/icons/medium.png"
              : item.thumbnail
          }" alt="Article Thumbnail"/><div class="col-12 col-md-9"><h4 class="pub-title">${
            item.title
          }</h4><p class="pub-body">Published: ${moment(item.pubDate).format(
            "dddd, MMMM Do YYYY, h:mm:ss A"
          )}</p><p class="pub-body">Tags: ${item.categories
            .map((cat) => cat + " ")
            .join("")}</p></div></div></a>`
        );
      });
    })
    .catch((error) => {
      console.log(error);
      $("#pubContainer").append(
        "Whoops ... there was an error. Please try again later."
      );
    });

  $("#age").text(moment().diff("1988-06-02", "years"));
  $("#marriage").text(moment().diff("2007-07-27", "years"));
  $("#it").text(moment().diff("2013-09-14", "years"));
  $("#ev").text(moment().diff("2014-09-07", "years"));
  $("#alfie").text(moment().diff("2012-07-01", "years"));
  $("#hunter").text(moment().diff("2015-03-01", "years"));
  $("#ki").text(moment().diff("2018-07-01", "years"));
});
