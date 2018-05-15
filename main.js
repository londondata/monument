$("submit").on('click', function(e) {
	var preventReload = e.preventDefault();
	console.log("ham?")
});


// or is it $("submit").on('click', function(event){ event.preventDefault();});

