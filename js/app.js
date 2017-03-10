/**
 * Created by hxsd on 2017/3/2.
 */

var datailId;
//playlists
var plists;


//加载html
function route(mode,obox){
    if(obox==undefined){
        obox=$('.scorll')
    }
    $.ajax({
        url:"view/"+mode+".html",
        success:function(data){
            obox.html(data);
            loadmodeJs(mode)
        }
    })
}
//加载js
function loadmodeJs(mode){
    $.ajax({
        url:"js/"+mode+".js",
        dataType:"script"
    })
}

$(function(){
    route("home");
    route("music",$("#bot"));

    $(".nav li").each(function(){
        $(this).click(function(){
            $(this).addClass("ac").siblings().removeClass("ac");
            var attr=$(this).attr("data_click");
            console.log(attr);
            route(attr)
        })
    })

})










