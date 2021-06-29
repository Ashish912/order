$(document).ready(function (){
    $("#admin_login").submit(function (e){
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: "api/admin_login.php",
            data: data,
            success: function (data) {
                if(data == '0'){
                    $("#lo_msg").fadeIn().html('<p class="alert alert-danger">Incorrect email id.</p>');
                    setTimeout(function(){
                    $("#lo_msg").fadeOut("slow");
                    },4000);
                }else if (data == '00') {
                    $("#lo_msg").fadeIn().html('<p class="alert alert-danger">Incorrect email id and password.</p>');
                    setTimeout(function(){
                    $("#lo_msg").fadeOut("slow");
                    },4000);
                }else if (data == '1') {
                    $("button").prop('disabled', true)
                    $("#lo_msg").fadeIn().html('<p class="alert alert-success">Successfully Logged.</p>');
                    setTimeout(function(){
                    $("#lo_msg").fadeOut("slow");
                    window.location.href = "index.php";
                    },2000);
                }

            }
        });
    });
});

$(document).ready(function (){
    $("#change_pass").submit(function (e){
        e.preventDefault();
        var data = $(this).serialize()+"&type=pass";
        $.ajax({
            type: 'POST',
            url: "api/profile-setting.php",
            data: data,
            success: function (data) {
                if(data == '0'){
                    $("#pass_msg").fadeIn().html('<p class="alert alert-danger">Incorrect old password.</p>');
                    setTimeout(function(){
                    $("#pass_msg").fadeOut("slow");
                    },4000);
                }else if(data == '1'){
                    $("#pass_msg").fadeIn().html('<p class="alert alert-success">Password successfully changed.</p>');
                    setTimeout(function(){
                    $("#pass_msg").fadeOut("slow");
                    },4000);
                }
            }
        });
    });
});

$(document).ready(function (){
    $("#update_profile").submit(function (e){
        e.preventDefault();
        var data = $(this).serialize()+"&type=pro";
        $.ajax({
            type: 'POST',
            url: "api/profile-setting.php",
            data: data,
            success: function (data) {
                if(data == '0'){
                    $("#pass_msg").fadeIn().html('<p class="alert alert-danger">Incorrect old password.</p>');
                    setTimeout(function(){
                    $("#pass_msg").fadeOut("slow");
                    },4000);
                }else if(data == '1'){
                    $("#pass_msg").fadeIn().html('<p class="alert alert-success">Profile updated successfully.</p>');
                    setTimeout(function(){
                    $("#pass_msg").fadeOut("slow");
                    },4000);
                }
            }
        });
    });
});

function edit_pro(id){
    var type = "pro";
    var data = {"id":id,"type":type};
    $.ajax({
        type: 'POST',
        data: data,
        url:"api/profile-setting.php",
        success: function (data) {
            jQuery('body').append(data);
            jQuery('#myModal').modal();
        },
    });
}

