
var stickyID = "";

$(document).ready(function() {
	
	$(".overlay").hide();
	
	var menuIDs = ["researchItem", "publicationsItem", "aboutItem", "positionsItem", "contactItem"];
	
	var hoverDict = {};
	
	$.each(menuIDs, function(index, value) {
		hoverDict[value] = "hover" + (index+1);
		$("#" + value).hover(onHoverOver, onHoverOut);
	});
	
	function onHoverOver(e) {	
		var id = hoverDict[e.currentTarget.id];
		
		if(e.currentTarget.id != stickyID) {
			$("#" + id).fadeIn("fast");
		}
	}
	
	function onHoverOut(e) {
		var id = hoverDict[e.currentTarget.id];
		
		if(e.currentTarget.id != stickyID) {
			$("#" + id).fadeOut("slow");
		}
	}
	
	if($("#" + hoverDict[stickyID]) != null)
		$("#" + hoverDict[stickyID]).show();
});
