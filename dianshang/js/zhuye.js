// 简易幻灯片
$(function(){
	var imgs = $(".lunbo img");
    var a=0;
	function count1(){
		$(imgs[a]).fadeOut(2000);
		
		switch(a){
			case 0:
			a=1;
			break;
			case 1:
			a=2;
			break;
			default:
			a=0;
			break;
		}
		
		$(imgs[a]).fadeIn(3000);
	}
   setInterval(count1,3000);
//导航
/*	
	var nav=$(".navList")[0],
	    detail=$(".navDetail")[0];
    navlist(nav,detail);
    var nav1=$(".navList")[1],
	   detail1=$(".navDetail")[1];
    navlist(nav1,detail1);
    var nav2=$(".navList")[2],
	    detail2=$(".navDetail")[2];
    navlist(nav2,detail2);
    var nav3=$(".navList")[3],
	    detail3=$(".navDetail")[3];
    navlist(nav3,detail3);
    var nav4=$(".navList")[4],
	    detail4=$(".navDetail")[4];
    navlist(nav4,detail4);
	function navlist(nav,detail){
		var nav=$(nav);
		var detail=$(detail);
		nav.hover(function(){
	  		detail.show();
	  		nav.addClass("change");
	  		detail.hover(function(){
	  				detail.show();
	  	    		nav.addClass("change");
	  			},function(){
	  				detail.hide();
	  				nav.removeClass("change");
	  			});
	 	 },function(){
	  		detail.hide();
	  		nav.removeClass("change");
	  });
	}
  */

$(".navList").each(function(i,v){
	var detail = $($(".navDetail")[i]);
	var v=$(v);
	var add = function(){
		detail.show();
		v.addClass("change");
	};
	var rev = function(){
		detail.hide();
		v.removeClass("change");
	};
	v.hover(add,rev);
	detail.hover(add,rev);
});

});