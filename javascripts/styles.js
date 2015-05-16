
var menu_height = 45;

$(function() {

	$(".catalog .switch").click(function() {
		var e = $(this);
		$(this).parent().children(".list").slideToggle("fast", function() {
			if ($(this).is(":visible")) {
				e.text("[-]");
			} else {
				e.text("[+]");
			}
		});
	});

	$(".anchor").click(function() {
		var _id = "#" + $(this).parent().prop("class");
		var top = $(_id).offset().top - menu_height;
		//$("body").scrollTop($(_id).offset().top - menu_height);
		$("body").animate({scrollTop : top + "px"}, "slow");
	});

});