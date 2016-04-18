/**
 * Created by ly-yexiaodong on 2016/4/14.
 */
var names = new Array(); //文章名字等
var urls = new Array(); //文章地址
/* 站内搜索-单击搜索*/
$("#js_search").click(function(){
    $(".search-Model").css("display","block");
});
/* 站内搜索-单击关闭*/
$("#js_cross").click(function(){
    $(".search-Model").css("display","none");
});
/* 站内搜索-ctrl*/
document.onkeydown=function(event){
    var e=event||window.event||arguments.callee.caller.arguments[0];
    if(e && e.keyCode==0X11){
        var dis=$(".search-Model").css("display");
        if(dis=="none"){
            $(".search-Model").css("display","block");
        }
        else{
            $(".search-Model").css("display","none");
        }
    }
}
