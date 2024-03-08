var script_url = "https://script.google.com/macros/s/AKfycbyyuf0c0yU3aqogmu40b9mIWQZU2tWN_W3Tm8E8OgeD9R5CZN0BNAnWcejqYFs7IdTKlA/exec";
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