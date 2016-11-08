/**
 * Created by Seaton on 2016/10/18.
 */
(function ($) {
    /**
     *固定表格列宽
     * column：固定的列号
     * width：列宽
     * tableWidth：表宽
     */
    $.fn.tableFixWidth = function(options){
        var defaults = {//默认参数
            'column':'1',
            'width':'50%',
            'tableWidth':'100%'
        }
        var settings = $.extend({},defaults,options);//将一个空对象作为第一个参数，目的是保护默认参数,原因所有值合并到空对象中
        //表设置
        this.attr("style","table-layout:fixed;width:" + settings.tableWidth);
        //表体设置
        var i = "1";
        this.find("td").each(function () {
            if(i == settings.column) {
                $(this).attr("style", "white-space:nowrap;overflow:hidden;text-overflow:ellipsis;").attr("title", $(this).html());
            }
        });
        //表头设置
        var tr = this.first();
        i = "1";
        tr.find("th").each(function () {
            if(i == settings.column){
                $(this).attr("style","width:" + settings.width);
            }
            i ++;
        });
    }
})(jQuery);
