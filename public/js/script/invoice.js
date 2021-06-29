$(document).ready(function(){
    var i=1;
    $("#add_row").click(function(){b=i-1;
      	$('#addr'+i).html($('#addr'+b).html()).find('td:first-child').html(i+1);
      	$('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
      	i++; 
  	});
    $("#delete_row").click(function(){
    	if(i>1){
		$("#addr"+(i-1)).html('');
		i--;
		}
		calc();
	});
	
	$('#tab_logic tbody').on('keyup change',function(){
		calc();
	});
	$('#tax').on('keyup change',function(){
		calc_total();
	});
	

});

function calc()
{
	$('#tab_logic tbody tr').each(function(i, element) {
		var html = $(this).html();
		if(html!='')
		{
			var qty = $(this).find('.qty').val();
			var price = $(this).find('.price').val();
			$(this).find('.total').val(qty*price);
			
			calc_total();
		}
    });
}

function calc_total()
{
	total=0;
	$('.total').each(function() {
        total += parseInt($(this).val());
    });
	$('#sub_total').val(total.toFixed(2));
	tax_sum=total/100*$('#tax').val();
	$('#tax_amount').val(tax_sum.toFixed(2));
	$('#total_amount').val((tax_sum+total).toFixed(2));
}

$(document).ready(function (){
    $("#cre_invoic").submit(function (e){
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: "api/create-invoice",
            data: data,
            success: function (data) {
                if(data == '0'){
                    $("#inv_msg").fadeIn().html('<p class="alert alert-danger">Ty Again.</p>');
                    setTimeout(function(){
                    $("#inv_msg").fadeOut("slow");
                    },4000);
                }else if (data == '1') {
                    $("#inv_msg").fadeIn().html('<p class="alert alert-success">Invoice Successfully created.</p>');
                    setTimeout(function(){
                    $("#inv_msg").fadeOut("slow");
                    },4000);
                    $("#cre_invoic")[0].reset();
                }
            },
            complete:function(){
                $('body, html').animate({scrollTop:$('body').offset().top}, 'slow');
            }
        });
    });
});

function invo_del(id){
    var checkstr =  confirm('Are you sure you want to delete this?');
    if(checkstr == true){
    var type = "del";
    var data = {"id":id,"type":type};
    $.ajax({
        type: 'POST',
        url: "api/invoice_action",
        data: data,
        success: function (data) {
            $("#suc_msg").fadeIn().html(data);
                setTimeout(function(){
                $("#suc_msg").fadeOut("slow");
                location.reload();
            },3000);
        },
        complete:function(){
            $('body, html').animate({scrollTop:$('body').offset().top}, 'slow');
        }
    });
    }else{
    return false;
    }
}

function getinvoice(id){
    var type = "get";
   var data = {"id":id,"type":type};
   $.ajax({
       type: 'POST',
       data: data,
       url:"api/invoice_action",
       success: function (data) {
          jQuery('body').append(data);
          jQuery('#myModal').modal();
        },
//        error: function () {
//
//        }
   });
}


    