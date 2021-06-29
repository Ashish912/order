$(document).ready(function (){
    $("#c_plan").submit(function (e){
        e.preventDefault();
//        alert("aa");
        var data = $(this).serialize()+"&type=add";
        $.ajax({
            type: 'POST',
            url: "api/cr_plan",
            data: data,
            success: function (data) {
                if(data == "0"){
                    $("#suc_msg").fadeIn().html('<p class="alert alert-danger">Try again!</p>');
                        setTimeout(function(){
                        $("#suc_msg").fadeOut("slow");
                    },3000);
                }else if(data == "1"){
                    $("#suc_msg").fadeIn().html('<p class="alert alert-success">Data added successfully.</p>');
                        setTimeout(function(){
                        $("#suc_msg").fadeOut("slow");
                        $("#c_plan")[0].reset();
                    },3000);
                    get_da();
                }
            },
            complete:function(){
                $('body, html').animate({scrollTop:$('body').offset().top}, 'slow');
            }
        });
    });
});


function get_da(){
    var type = "get";
    var data = {"type":type};
    $.ajax({
        type: 'POST',
        data: data,
        url: "api/cr_plan",
        success: function (data) {
            $("#plan_data").html(data);
        }
    });
}

$(document).ready(function (){
    get_da();
});

$(document).ready(function (){
    $("#add_cate").submit(function (e){
        e.preventDefault();
        var data = $(this).serialize()+"&type=add";
        $.ajax({
            type: 'POST',
            url: "api/add_category",
            data: data,
            success: function (data) {
                if(data == "0"){
                    $("#cat_msg").fadeIn().html('<p class="alert alert-danger">Try again!</p>');
                        setTimeout(function(){
                        $("#cat_msg").fadeOut("slow");
                    },3000);
                }else if(data == "00"){
                    $("#cat_msg").fadeIn().html('<p class="alert alert-danger">Category is already exist.</p>');
                        setTimeout(function(){
                        $("#cat_msg").fadeOut("slow");
                    },3000);
                }else if(data == "1"){
                    $("#cat_msg").fadeIn().html('<p class="alert alert-success">Category added successfully.</p>');
                        setTimeout(function(){
                        $("#cat_msg").fadeOut("slow");
                    },3000);
                    $("#add_cate")[0].reset();
                    get_da1();
                }
            }
        });
    });
});

$(document).ready(function (){
    get_da1();
});
function get_da1(){
    var type = "get";
    var data = {"type":type};
    $.ajax({
        type: 'POST',
        data: data,
        url: "api/add_category",
        success: function (data) {
            $("#cat_data").html(data);
        }
    });
}

// get subcategory in add-assignment
$(document).ready(function(){
    $("#category").change(function(){
        var cat = $(this).val();
        $.ajax({
           type: 'POST',
           url: "api/get_subcategory",
           data: {"cat":cat},
           success: function (data) {
             $("#sub_category").html(data);         
          },
          error: function () {
          }
        });
    });  
});

//add-assignment form submit
$(document).ready(function(){ 
    $("#add_ass").submit(function(e){
        e.preventDefault();
        var input = document.getElementById('file_upload');
        if(input.files.length>10){
            alert("Upload max 10 files allowed");
        }
        else{
            var des = $("#summernoteEditor").summernote('code');
            var data = new FormData(this);
            data.append('con',des);
            $.ajax({
                type: 'POST',
                url: "api/add_assignment",
                data: data,
                contentType: false,
                cache: false,
                processData:false,
                beforeSend: function (data) {
                    // $.showLoading({name: 'circle-turn-scale',allowHide: false}); 
                    $('#submit').prop('value','Lodaing..');
                    $('#submit').attr('disabled','disabled'); 
                },
                success: function (data) {
                    // alert(data);
                    if(data == "0"){
                        $("#cat_msg").fadeIn().html("<div class='alert alert-danger alert-dismissible'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a> Only JPEG/JPG/PNG file acceptable.</div>");
                        setTimeout(function(){
                        $("#cat_msg").fadeOut("slow");
                        },4000);
                    }else if(data == "1"){
                        $("#cat_msg").fadeIn().html("<div class='alert alert-success alert-dismissible'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a> Assignment added successfully.</div>");
                        setTimeout(function(){
                        $("#cat_msg").fadeOut("slow");
                        },4000);
                        $('#summernoteEditor').summernote('code',''); 
                        $("#add_ass")[0].reset();
                        $(".ver").val("");
                    }
                },
                complete:function (){
                   setTimeout(function(){ 
                    $('#submit').prop('value','Submit');
                    $('#submit').removeAttr('disabled');
                    }, 3000);
                },
                error: function () {

                }
            });
        }
    }); 
});

//delete image in add-assignment during edit
function delimage(id){
        var chk = confirm("Are you sure you want to delete this?");
            if (chk == true) {
                
                var data = {id:id,type:"img_del"};
                $.ajax({
                    type: 'POST',
                    data: data,
                    url: "api/delete_assignment",
                    beforeSend: function (data) {
                        $.showLoading({name: 'circle-turn-scale',allowHide: false}); 
                    },
                    success: function (data) {
                        if(data == "1"){
                            alert("Image successfully deleted");
                            location.reload();
                        }
                    },
                    complete:function(){
                        $.hideLoading({name: 'circle-turn-scale',allowHide: false});
                    },
                });
            }else{
                return false;
            }
    }
