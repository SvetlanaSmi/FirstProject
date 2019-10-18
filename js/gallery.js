$(".gallery-item").click(function() {
  var src = $(this)
    .find("img")
    .data("full");

  $(".img-view-item img").attr("src", src);

  var title = $(this)
    .find(".gallery-item-title")
    .text();
  $(".img-view-item p").text(title);

  $(".img-view").css("display", "flex");
});

$(".img-view").click(function() {
  $(".img-view").css("display", "none");
});
