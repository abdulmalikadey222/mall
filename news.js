var togger = $(".deski");
var dis= $(".bigcont");
var dav = $(".choose");
togger.click(function(){
	dis.toggle(1000);
	dav.css("background-color","white");
})