/**
 * Created by ly-yexiaodong on 2016/4/14.
 */
var names = new Array(); //文章名字等
var urls = new Array(); //文章地址
var searchUrl;//需要跳转的url
/* 站内搜索-单击搜索*/
$("#js_search").click(function () {
    $(".search-Model").css("display", "block");
});
/* 站内搜索-单击关闭*/
$("#js_cross").click(function () {
    $(".search-Model").css("display", "none");
});
/* 站内搜索-ctrl*/
document.onkeydown = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e.keyCode == 18) {
        var dis = $(".search-Model").css("display");
        if (dis == "none") {
            $(".search-Model").css("display", "block");
        }
        else {
            $(".search-Model").css("display", "none");
        }
    }
    if(e.keyCode==0X1B){
        $(".search-Model").css("display", "none");
    }
}
/*
 站内搜索-获取数据
 getJSON:使用 AJAX 请求来获得 JSON 数据。
 done():返回成功时，执行。
 push():向数组末尾添加一个或多个元素
 */
function getSearchData() {
    $.getJSON("/search-data.json").done(function (data) {
        //alert("dd"+data.code);
        if (data.code == '0') {
            for (var index in data.data) {
                var item = data.data[index];
                names.push(item.title);
                urls.push(item.url);
            }
            /*
             初始化插件
             typeof 判断类型
             */
            typeof $.typeahead === 'function' && $.typeahead({
                input: ".js-typeahead-input",//输入的文本框
                minLength: 1,//最小的查询单位
                order: "asc", //排序
                //group: true,//搜索结果分组，默认不分
                maxItemPerGroup: 7,//每组最多显示数
                //hint: true,
                //dropdownFilter: "全部",//可分类查询，默认为false
                //href: "/{{aa}}",//查询结果跳转页面
                //template: "{{display}}, <small><em>{{group}}</em></small>",
                source: {
                    data: names
                },
                callback: {//选择后执行
                    onClickAfter: function (node, a, item, event) {
                        var myUrl="http://"+window.location.host+urls[names.indexOf(item.display)];
                        $("#js_search_from").attr("action",myUrl);
                    }
                },
                debug: true
            });
        }
    });
}

