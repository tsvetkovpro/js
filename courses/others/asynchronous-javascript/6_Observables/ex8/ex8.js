$(document).ready(function() {
	var $btn = $("#btn"),
		$list = $("#list"),
		clicks = ASQ.react.of(),
		msgs = ASQ.react.of(),
		latest;

	$btn.click(function(evt) {
		clicks.push(evt);
	});

	setInterval(function() {
		if (latest) {
			msgs.push("Clicked!");
			latest = null;
		}
	}, 1000);

	clicks.val(function(evt) {
		latest = evt;
	});

	msgs.val(function(msg) {
		$list.append( $("<div>"+ msg +"</div>") );
	});
});
