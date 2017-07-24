$(function(){
	//点赞
    var timerZhan = null;
   
    var setIntervaZhan = function(){
        var timeout=Math.round(Math.random()*1000+1000);
        clearTimeout(timerZhan);
        timerZhan=setTimeout(function timeoutFun(){
            $(".clickZhan").click();
            timeout=Math.round(Math.random()*1000);
            timerZhan=setTimeout(timeoutFun,timeout);
        },timeout);
    };
    setIntervaZhan();
    $(".clickZhan").click(function(event){
            if($(this).parent().find(".parentImg").length > 15){
                $(this).parent().find(".parentImg").eq(0).remove();
            }

            var n = Math.floor(Math.random()*10);
            var k = Math.floor(Math.random()*10);
            if(k == 0 || k == 1 ){
                var src = "img/apple.png"
            }else if(k == 2 || k == 3 ){
                var src = "img/heart.png"
            }else if(k == 4 || k == 5){
                var src = "img/star.png"
            }else if(k == 6 || k == 7){
                var src = "img/watermelon.png"
            }else if(k == 8 || k == 9){
                var src = "img/praise.png"
            }

            var str = '<span class="parentImg parentImg'+n+'"><img src="' + src + '"></span>';
            $(this).parent().append(str);

            var e = window.event || event;
            if ( e.stopPropagation ){ //如果提供了事件对象，则这是一个非IE浏览器
                e.stopPropagation();
            }else{
                window.event.cancelBubble = true;
            }
            return false;
        });

})
