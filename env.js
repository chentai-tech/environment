var script_url = "https://script.google.com/macros/s/AKfycbxic0uEYtH1jgF3j88LjIxrz3Y_4eB2_igcOi3GY3N8Lgp4x61D8iqx8GNmt4u2QZX42w/exec";
$(document).ready(function ($) {
    $("#google-sheet").submit(function (event) {
		$('#name').prop("disabled", false);
        var name = $("#name").val();
		const user = $("#name").val();
		google.script.run.withSuccessHandler(displayMessage).processUserInput(user);
		
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