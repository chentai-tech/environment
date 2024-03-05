var script_url = "https://script.google.com/macros/s/AKfycbztxJjRAliKQvtIN5sRjvWyvO5MQyY3yKmbVZhHnicp-hQBECw03DZM4qjCSmPsw7Zc-Q/exec";
$(document).ready(function ($) {
    $("#google-sheet").submit(function (event) {
        //$('#date, #time, #name, #phone').prop("disabled", false);
		$('#name').prop("disabled", false);
        var name = $("#name").val();
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
		//alert("登錄完成!!");
        event.preventDefault();
    })
})