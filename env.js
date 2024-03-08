var script_url = "https://script.google.com/macros/s/AKfycbxrmcMsOIIhGhAhyBiFqIYL_mmMk1KqYfP25S4PqSCwgj18P-4knC3WuaVVxGmY8NkL/exec";
$(document).ready(function ($) {
    $("#google-sheet").submit(function (event) {
		$('#name').prop("disabled", false);
        var name = $("#name").val();
		google.script.run.withSuccessHandler(displayMessage).search(name);
		
		var url = script_url + "?callback=ctrlq&name=" + name + "&action=create";
        var request = $.ajax({
            url: url,
            type: "POST"
        });
        request.done(function (response, textStatus, jqXHR) {
            window.location.reload();
        });
        request.always(function () {
			$('#name').prop("disabled", true);
        });
        event.preventDefault();	// 防止預設的表單提交行為
    })
})

function displayMessage(message) {
	const outputDiv = $("#message");
	outputDiv.textContent = message;
}