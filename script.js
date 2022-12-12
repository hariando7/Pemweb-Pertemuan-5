$(document).ready(function () {
    $("#prodi").change(function () {
        var value = $(this).val();
        $.ajax({
            url: "tampil.php",
            type: "POST",
            data: "request=" + value,
            success: function (data) {
                $("#tampil_data").html(data);
            }
        })
    });
});