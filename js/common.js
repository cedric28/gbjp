(function($){

    /*==========================================================================*/
    /*  Spec      : input 숫자만 입력											*/
    /*==========================================================================*/
    $.fn.isOnlyNumber = function(config){
        this.config = jQuery.extend({
            // option
        }, config);

        var $this = $(this);

        $this.css('imeMode','disabled').keypress(function(event)
        {
            if(event.which && (event.which < 48 || event.which > 57) )
            {
                event.preventDefault();
            }
        }).keyup(function()
        {
            if( $(this).val() != null && $(this).val() != '' )
            {
                $(this).val( $(this).val().replace(/[^0-9]/g, '') );
            }
        }).blur(function(){
            if( $(this).val() != null && $(this).val() != '' )
            {
                $(this).val( $(this).val().replace(/[^0-9]/g, '') );
            }
        });
    }

})(jQuery);

$(function(){

    // 페이지 이동
    $(".btn_page").click(function(){
        var f = document.searchForm;
        var page = $(this).attr("data-page");

        f.page.value = page;

        f.method = "GET";
        f.submit();
    });

    $("[name=inpTuserid]").focus(function(){
        $(this).keyup(function(){
            if ($(this).val().length > 0) {
                $(this).removeClass("bg_id");
            } else {
                $(this).addClass("bg_id");
            }
        });
    });

    $("[name=inpTuserpwd]").focus(function(){
        $(this).keyup(function(){
            if ($(this).val().length > 0) {
                $(this).removeClass("bg_pwd");
            } else {
                $(this).addClass("bg_pwd");
            }
        });
    });

    $("[name=loginForm]").find("[name=inpTuserid], [name=inpTuserpwd]").keypress(function(){
        if (event.keyCode==13){
            $(this).closest("form").find("#btn_login").trigger("click");
        }
    });
    $("[name=popLoginForm]").find("[name=inpTuserid], [name=inpTuserpwd]").keypress(function(){
        if (event.keyCode==13){
            $(this).closest("form").find("#btn_login_pop").trigger("click");
        }
    });

    // login action
    $("#btn_login").click(goLogin);
    $("#btn_login_pop").click(goLogin);

    $(".game_box > .game > li").each(function(){

        if (!($(this).hasClass("other"))) {
            $img = $(this).find("a > img");
            $img.mouseenter(function(){
                var src = $(this).attr("src");
                var rsrc = src.replace(".png", "ov.png");
                $(this).attr("src", rsrc);
            }).mouseleave(function(){
                var src = $(this).attr("src");
                var rsrc = src.replace("ov.png", ".png");
                $(this).attr("src", rsrc);
            });
        }
    });

    $("#chat_div").load(function(){
        $(this).hide();
    });

    $(".isnumber").isOnlyNumber();

    var JUltimate ='1801160180';


    // set countUp options
    var options = {
        useEasing : true, // toggle easing
        useGrouping : true, // 1,000,000 vs 1000000
        separator : ',', // character to use as a separator
        decimal : '.' // character to use as a decimal
    }
    var useOnComplete = false;
    var useEasing = true;
    var useGrouping = true;

    var demo, code;
    //JPower

    var Deduction =0;
        Deduction = JUltimate * 0.02;
        JUltimate =JUltimate-Deduction;

    if ($("#JUltimate").length > 0) {
        var AJUltimate = new countUp('JUltimate',JUltimate, 100000000000, 2, 1000000000000, options);
        AJUltimate.start();
    }

    
    

});

function goLogin(e) {

    var frm = $(this).closest("form").get(0);

    if ($.trim(frm.inpTuserid.value) == "") { frm.inpTuserid.focus(); return; }
    if ($.trim(frm.inpTuserpwd.value) == "") { frm.inpTuserpwd.focus(); return; }

    frm.submit();

    e.preventDefault();
}

function infoReload(lang) {

    $.ajax({
        url: lang +"/comm/balanceReload",
        success: function (response) {
            if (response == "0") {
                location.reload();
            } else {
                $('#BalanceInfo').html(response);
            }
        }
    });
    $.ajax({
        url: lang +"/comm/userInfoReload",
        success: function (response) {
            if (response == "0") {
                location.reload();
            } else {
                $('#side_myinfo2').html(response);
            }
        }
    });

}



function openSwipeURL(urls) {
    //window.open("about:blank").location.href = urls;
    location.href = urls;
}