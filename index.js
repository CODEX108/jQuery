
$("a").attr("href","https://www.gmail.com");
$("h1").addClass("big-title  margin-50");
$("h1").click(function (){
    $("h1").css("color" ,"orange");
});

$("button").click(function(){
    $("h1").css("color","purple");
});


 $("input").keypress(function(event){
  console.log(event.key); //tells which key was pressed
 });

$(document).keypress(function(event){
  
  $("h1").text(event.key);
});


//flexible way of adding event listener
$("h1").on("mouseover",function(){
    $("h1").css("color" ,"orange");
});

//animation in jquery
// $("button").on("click",function(){
//     $("h1").animate({opacity:0.5});
// });
//$("h1").show()

//animation chaining
$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});