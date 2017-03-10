/**
 * Created by hxsd on 2017/3/2.
 */
var musicLoad={
    plays:function(data){
        var $audio=$("#audio");
        $audio.attr("src",data.url);
        $audio.get(0).play();
        console.log(data.url)
    }
}

var onOff=true;
$(".pic_r i:nth-child(2)").click(function(){
    var $audio=$("#audio");
    if(onOff){
        $audio.get(0).pause()
    }else{
        $audio.get(0).play()
    }
    onOff=!onOff
})