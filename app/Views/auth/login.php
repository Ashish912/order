
<!doctype html>
<html style="height:100%">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Administrator Login</title>
    <link rel="stylesheet" href="<?=base_url()?>/assets/icons/icomoon/icomoon.css">
    <link rel="stylesheet" href="<?=base_url()?>/css/bootstrap.css">
    <link rel="stylesheet" href="<?=base_url()?>/css/core.css">
    <link rel="stylesheet" href="<?=base_url()?>/css/bootstrap-extended.css">
    <link rel="stylesheet" href="<?=base_url()?>/css/plugins.css">
    <link rel="stylesheet" href="<?=base_url()?>/css/color-system.css">
    <!-- <link rel="stylesheet" href="<?=base_url()?>/plugins/fontawesome-free/css/all.min.css"> -->
    	
    <link href="assets/images/favicon-eitians.png" rel="icon" type="image/png">
    <!-- <link type="text/css" rel="stylesheet" href="assets/fonts/fonts.css">
    <link type="text/css" rel="stylesheet" href="assets/icons/icomoon/icomoon.css">    
    <link type="text/css" rel="stylesheet" href="css/bootstrap.css">   
    <link type="text/css" rel="stylesheet" href="css/core.css">
    <link type="text/css" rel="stylesheet" href="css/bootstrap-extended.css">	    		
    <link type="text/css" rel="stylesheet" href="css/plugins.css">	    		
    <link type="text/css" rel="stylesheet" href="css/color-system.css"> -->
</head>
<body style="height:100%; background:url('assets/images/assets/login_bg.jpg') no-repeat 0 0; background-size:cover;">
<div class="login-container">
    <div class="page-content">
    <form action="<?=base_url()?>/auth/login" method="post">			
            <div class="panel panel-body login-form border-left border-left-lg border-left-info">							
                <div class="text-center m-b-20">
                    <div class="icon-object bg-info"><i class="icon-user"></i></div>
                    <h5>Sign in to your account</h5>
                </div>
                <div id="lo_msg"></div>
                <div class="form-group has-feedback has-feedback-left">
                <input type="email" class="form-control" name="email" placeholder="Email">
                    <div class="form-control-feedback">
                        <i class="icon-user text-muted"></i>
                    </div>
                </div>

                <div class="form-group has-feedback has-feedback-left">
                <input type="password" class="form-control" name="password" placeholder="Password">
                    <div class="form-control-feedback">
                        <i class="icon-lock text-muted"></i>
                    </div>
                </div>


                <?php if (isset($validation)):?>
                    <div class="row">
                        <div class="form-group col-12">
                            <div class="alert alert-danger" role="alert">
                                <?= $validation->listErrors()?>
                            </div>
                        </div>
                    </div>
                <?php endif; ?>

                <div class="login-options">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="checkbox m-l-5">
<!--                                <label>
                                    <input type="checkbox" class="styled" checked="checked">
                                    Remember me
                                </label>-->
                            </div>
                        </div>
                        <div class="col-sm-6 text-right m-t-10">
                            <!--<a href="">Forgot password?</a>-->
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-info btn-labeled btn-labeled-right btn-block"><b><i class="icon-enter"></i></b> Sign in</button>								
                </div>
<!--                <div class="form-group">
                    <button type="button" class="btn btn-success btn-labeled btn-labeled-right btn-block"><b><i class="icon-user-plus"></i></b> Create an account</button>								
                </div>-->
            </div>
        </form>
        <div class="footer text-size-mini">
                © 2019 Bazaarhai. All Right Reseverd.
        </div>
    </div>
</div>
<!-- Global scripts -->
<script src="<?=base_url()?>/js/jquery.js"></script>
<script src="<?=base_url()?>/js/bootstrap.js"></script>
<script src="<?=base_url()?>/js/forms/uniform.min.js"></script>
<script src="<?=base_url()?>/js/script/form.js"></script>


<!-- <script type="text/javascript" src="js/jquery.js"></script>	
<script type="text/javascript" src="js/bootstrap.js"></script>
<script type="text/javascript" src="js/forms/uniform.min.js"></script>	
<script src="js/script/form.js" type="text/javascript"></script> -->
<script>
$(function() {
	$(".styled, .multiselect-container input").uniform({
		radioClass: 'choice'
	});
	$('input,textarea').focus(function(){
	   $(this).data('placeholder',$(this).attr('placeholder'))
			  .attr('placeholder','');
	}).blur(function(){
	   $(this).attr('placeholder',$(this).data('placeholder'));
	});
});
</script>
<?= $this->include('partials/flashmessage')?>
</body>
</html>