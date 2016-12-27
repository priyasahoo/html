/**
 * Created by KS128 on 11/9/16.
 */

$(document).ready(function(){
    $('input:radio[name="login_radio"]').change(function(){
        if($("input[type='radio'].login_radio").is(':checked')) {
            var checked_val = $("input[type='radio'].login_radio:checked").val();
            if(checked_val== "Guest Login") {
                $(".registered_user_login").hide(200);
                $(".guest_login_div").show(200);
            }
            else if(checked_val== "Registered Login"){
                $(".guest_login_div").hide(200);
                $(".registered_user_login").show(200);
            }
        }
    });

    $(".test-selection.test1").click(function(){
        $(".test-selection").hide(200);
        $(".first-test").show(200);
    });
    $(".test-selection.test2").click(function(){
        $(".test-selection").hide(200);
        $(".first-test").show(200);
    });
    $(".test-selection.test3").click(function(){
        $(".test-selection").hide(200);
        $(".first-test").show(200);
    });
});