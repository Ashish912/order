//subcate

$(document).ready(function (){
    $("#add_subcate").submit(function (e){
        e.preventDefault();
        var data = $(this).serialize()+"&type=add";
        $.ajax({
            type: 'POST',
            url: "api/add_subcategory",
            data: data,
            success: function (data) {
                if(data == "0"){
                    $("#cat_msg").fadeIn().html('<p class="alert alert-danger">Try again!</p>');
                        setTimeout(function(){
                        $("#cat_msg").fadeOut("slow");
                    },3000);
                }else if(data == "00"){
                    $("#cat_msg").fadeIn().html('<p class="alert alert-danger">Sub Category is already exist.</p>');
                        setTimeout(function(){
                        $("#cat_msg").fadeOut("slow");
                    },3000);
                }else if(data == "1"){
                    $("#cat_msg").fadeIn().html('<p class="alert alert-success">Sub Category added successfully.</p>');
                        setTimeout(function(){
                        $("#cat_msg").fadeOut("slow");
                    },3000);
                    $("#add_subcate")[0].reset();
                    get_da2();
                }
            }
        });
    });
});
$(document).ready(function (){
    get_da2();
});
function get_da2(){
    var type = "get";
    var data = {"type":type};
    $.ajax({
        type: 'POST',
        data: data,
        url: "api/add_subcategory",
        success: function (data) {
            $("#cat_data").html(data);
        }
    });
}