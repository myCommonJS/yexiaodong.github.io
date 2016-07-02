window.onload = function () {
    console.info(getAppCacheStatues());
}
function getAppCacheStatues(){
    var appCache = window.applicationCache;
    //status是一个整数，appCache上定义了一系列常量表示缓存状态
    switch(appCache.status){
        //UNCACHED === 0 ,未缓存状态，表示应用缓存对象还没有初始化完成
        case appCache.UNCACHED:
            return 'UNCACHED';
            break;
        //IDLE === 1 ,空闲状态，应用缓存此时未处于更新过程中
        case appCache.IDLE:
            return 'IDLE';
            break;
        //CHECKING === 2 ,检查状态，清单已经获取完毕并检查更新
        case appCache.CHECKING:
            return 'CHECKING';
            break;
        //DOWNLOADING === 3 ,下载资源并准备加入到缓存中，这是由于清单文件变化引起的
        case appCache.DOWNLOADING:
            return 'DOWNLOADING';
            break;
        //UPDATEREADY === 4 ,更新就绪状态，一个新版本的应用缓存可以使用，此时可以调用swapCache()方法
        //该状态有一个对应的事件 updateready ，当下载完毕一个更新，并且还未使用swapCache（）方法激活更新时，改事件触发，而不会是cache事件。
        case appCache.UPDATEREADY:
            return 'UPDATEREADY';
            break;
        //OBSOLETE === 5 ,废弃状态，应用缓存现在被放弃
        case appCache.OBSOLETE:
            return 'OBSOLETE';
            break;
        default:
            return 'UNNOWN CACHE STATUS';
            break;
    }

}