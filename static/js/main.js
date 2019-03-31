/* Convert all md links */
var links = document.querySelectorAll(".article-body a");
for (var i = 0, linksLength = links.length; i < linksLength; i++) {
   if (links[i].hostname != window.location.hostname) {
       links[i].target = '_blank';
   } 
}

/* Back to top */
$(document).scroll(function () {
  if($(document).scrollTop() >= 800) {
    $("#back-to-top").css({ opacity: 0.5 })
  } else {
    $("#back-to-top").css({ opacity: 0 })
  }
})
$("#back-to-top").click( function () {
  $("html,body").animate({ scrollTop: 0 }, "fast")
})

/* get copyright year */
document.getElementById('year').innerHTML = new Date().getFullYear()

/* toggle article table of contents */
$(".toggle-toc").click( function () {
  $(".toc-list").slideToggle()
})