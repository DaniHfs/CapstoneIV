let likeCounter = 0;

$("#pagelikebutton").click(function () {
  // On click, add 1 to 'likeCOunter' and display it
  likeCounter++;

  $("#pagelikescounter").html("" + likeCounter);
});

$("#hideshowtable").click(function () {
  // Toggles hding / showing the table
  $(".table").toggle();
});

$("#tableanim").click(function () {
  // Bounces the table up and down on click
  $(".table").slideUp(500).slideDown(500);
});

let savedItems = [];

$(".saveforlater").click(function () {
  // Saves selected item to the 'Saved page'
  let parent = this.parentNode;
  let savedHTML = $(parent).prop("outerHTML");
  sessionStorage.setItem("storedHTML", savedHTML);

  savedItems.push(savedHTML);
  sessionStorage.setItem("storedItems", savedItems);

  savedAlert(savedItems);
});

function savedAlert(i) {
  let alerts = 0;
  for (item in i) {
    alerts++;
  }

  alert(`You have ${alerts} saved items`);
}

// This function handles comments
$(function () {
  $(".addcomment").on("click", function () {
    $(".commentbox").hide();
    var commentboxId = $(this).attr("data-commentbox");
    $("#" + commentboxId).toggle();
  });

  $(".cancelbutton").on("click", function () {
    $(".commentbox").hide();
  });

  $(".textarea").keypress(function (e) {
    var keycode = e.keyCode ? e.keyCode : e.which;
    if (keycode == "13") {
      var comment = $(".textarea").val();

      let commentItem = document.createElement("li");

      commentItem.textContent = comment;
      $("#commentslist").append(commentItem);
    }
  });
});
