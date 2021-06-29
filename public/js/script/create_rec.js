$(document).ready(function (){
    $("#cre_rec").submit(function (e){
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: "api/create_recuiter",
            data: data,
            success: function (data) {
                if(data == "1"){
                   $("#rec_msg").fadeIn().html('<p class="alert alert-success">Invoice Successfully created.</p>');
                    setTimeout(function(){
                    $("#rec_msg").fadeOut("slow");
                    },4000);
                    $("#cre_rec")[0].reset();
                }else{
                    $("#rec_msg").fadeIn().html('<p class="alert alert-danger">Try Again.</p>');
                    setTimeout(function(){
                    $("#rec_msg").fadeOut("slow");
                    },4000);
                }
            }
        });
    });
});

