$(document).ready(function(){
	/* menu */
	$(".menu").click(function(){
		var wHeight = $(window).height()
		$(".dim_layer").show();
		$(".dim_layer").css("height",$("body").height());

		$(".menu_layer").show().animate({left:0}, 300);

		var thisMenuLayer = parseInt($(".tab_menu_con").height() + $(".tab_click").height() + $(".menu_layer").find(".title").height() + 14);
		var winHeight = parseInt($(window).height());
		
		if (winHeight < thisMenuLayer + 50) {
			thisMenuLayer = winHeight - 50;
			$(".menu_layer").css("overflow-y","scroll");
		} else {
			$(".menu_layer").css("overflow-y","hidden");
		}
		
		$(".menu_layer").css("height",thisMenuLayer);
		
		$("body").css("overflow","hidden");
		
		$("body").css("position","fixed"); //2015.10.10 추가
		$("body").css("width","100%"); //2015.10.10 추가
		
		$(".dim_layer").bind('touchmove', function(e){e.preventDefault()}); //스크롤방지
	});

	$(".dim_layer").click(function(){
        var width_menu = $(".menu_layer").width();
		$(".dim_layer").hide();
		/*$(".menu_layer").animate({left:-179}, 300).delay(300).fadeOut(0).scrollTop(0);*/
        $(".menu_layer").animate({left:-width_menu}, 300).delay(300).fadeOut(0).scrollTop(0);
		$("body").css("overflow","");
		
		$("body").css("position",""); //2015.10.10 추가
		$("body").css("width",""); //2015.10.10 추가
	});
	
	

	/* menu tab */
	$(".tab_click li a").click(function(){
		var idx = $(this).parent().index();
		$(".tab_click li").removeClass("on");
		$(this).parent().addClass("on");
		$(".tab_menu_con").hide().eq(idx).show();
		//var thisMenuLayer = $(".tab_menu_con").eq(idx).height() + 158; // 58 = title + tab_click 높이
		
		var thisMenuLayer = parseInt($(".tab_menu_con").eq(idx).height() + $(".tab_click").height() + $(".menu_layer").find(".title").height() + 14);
		var winHeight = parseInt($(window).height());
		
		if (winHeight < thisMenuLayer + 50) {
			thisMenuLayer = winHeight - 50;
			$(".menu_layer").css("overflow-y","scroll");
		} else {
			$(".menu_layer").css("overflow-y","hidden");
		}
	
		$(".menu_layer").css("height",thisMenuLayer);
	
	});
	
	/* tab_con click */
	$(".tab_con li a").click(function(){
		$(".tab_con li").removeClass("on");
		$(this).parent().addClass("on");		
	});

	/* dl_down_menu */
	var downSpeed = 200;
	$(".dl_down_menu dt a").click(function(){
		if($(this).parent().next().is(":hidden")){
			$(this).parent().next().slideDown(downSpeed);
		}else{
			$(this).parent().next().slideUp(downSpeed);
		}		
	});

	/* 2015.10.13 추가 */	
	$(".btn_toggle a").click(function(){
		if($(this).attr("class") == "ico_down"){
			$(this).removeClass().addClass("ico_up");
			$(this).parent().next().slideDown();
		}else{
			$(this).removeClass().addClass("ico_down");
			$(this).parent().next().slideUp();
		}
	});

    $(".select_lang a").click(function(e){

        $(document).off("click");

        if($(this).parents(".slt_lang").find(".slt_box_list").is(":hidden")){
            $(this).removeClass("off").addClass("on");
            $(".slt_box_list").show(10, function(){
                $(document).on('click', function(){
                    $(".slt_box_list").hide();
                });
            });
        }else{
            $(this).removeClass("on").addClass("off");
            $(".slt_box_list").hide();
        }
        e.preventDefault();
    });


    //var link = document.location.href;
    //var linkTemp = link.split("#");
    //
    //if(link == (linkTemp[0] + "#en")){
    //    //alert("eng")
    //    $(".select_box > p").hide();
    //    $(".select_box").children().find(".eng").parent().show();
    //    $(".slt_box_list li").show();
    //    $(".slt_box_list").find(".eng").parent().hide();
    //}else if(link == (linkTemp[0] + "#ch")){
    //    //alert("chn")
    //    $(".select_box > p").hide();
    //    $(".select_box").children().find(".chn").parent().show();
    //    $(".slt_box_list li").show();
    //    $(".slt_box_list").find(".chn").parent().hide();
    //}else if(link == (linkTemp[0] + "#jp")){
    //    //alert("jpn")
    //    $(".select_box > p").hide();
    //    $(".select_box").children().find(".jpn").parent().show();
    //    $(".slt_box_list li").show();
    //    $(".slt_box_list").find(".jpn").parent().hide();
    //}

    var lang = $(".select_box").data("lang");
    if(lang == "en"){
        $(".select_box > p").hide();
        $(".select_box").children().find(".eng").parent().show();
        $(".slt_box_list li").show();
        $(".slt_box_list").find(".eng").parent().hide();
    }else if(lang == "ch"){
        //alert("chn")
        $(".select_box > p").hide();
        $(".select_box").children().find(".chn").parent().show();
        $(".slt_box_list li").show();
        $(".slt_box_list").find(".chn").parent().hide();
    }else if(lang == "jp"){
        //alert("jpn")
        $(".select_box > p").hide();
        $(".select_box").children().find(".jpn").parent().show();
        $(".slt_box_list li").show();
        $(".slt_box_list").find(".jpn").parent().hide();
    }
});
