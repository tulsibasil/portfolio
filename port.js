
function openwords(){
	window.open("research.html")
}

function openweb(){
	window.open("web.html")
}

function openart(){
	window.open("design.html")
}

function openme(){
	window.open("about.html")
}

function openselect(){
	window.open("select.html")
}



// when the mouse enters the button, hide all circle text and show correct circle text
$("#div1").mouseenter(function(){
	$(".circtext").hide();
	$("#circtext6").show();
})

$("#div1").mouseleave(function(){
	$(".circtext").hide();
	$("#circtext1").show();
})
// -------------------------------------------------
$("#div2").mouseenter(function(){
	$(".circtext").hide();
	$("#circtext3").show();
})

$("#div2").mouseleave(function(){
	$(".circtext").hide();
	$("#circtext1").show();
})
// -------------------------------------------------

$("#div3").mouseenter(function(){
	$(".circtext").hide();
	$("#circtext4").show();
})

$("#div3").mouseleave(function(){
	$(".circtext").hide();
	$("#circtext1").show();
})
// -------------------------------------------------

$("#div4").mouseenter(function(){
	$(".circtext").hide();
	$("#circtext5").show();
})

$("#div4").mouseleave(function(){
	$(".circtext").hide();
	$("#circtext1").show();
})
// -------------------------------------------------

$("#profilepic").mouseenter(function(){
	$(".circtext").hide();
	$("#circtext2").show();
})

$("#profilepic").mouseleave(function(){
	$(".circtext").hide();
	$("#circtext1").show();
})


 $("document").ready( function () {
        alert("Open in FULL SCREEN. Hover on circles to see what they lead you to. :)");
    }); 





