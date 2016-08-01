//对象
function Editor(selector) {
    this.$editor = $(selector);//把整个editor对象缓存下来，jQuery对象的前面加上$符号是个好习惯
    this.bindEvents_();//私有的函数加上下划线，JavaScript普遍被遵守的约定
}
Editor.prototype.bindEvents_ = function () {
    //真实的编辑器可能有数十个按钮，使用事件代理可以大大提高代码的执行效率
    this.$editor.on('click','button',function (e) {
        switch (e.currentTarget.id){
            case 'bold':
                document.execCommand('bold');
                console.info('bold');
                break;
            case 'italic':
                document.execCommand('italic');
                console.info('italic');
                break;
            case 'underline':
                document.execCommand('underline');
                console.info('underline');
                break;
        }
    })
}