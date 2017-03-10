/**
 * Created by hxsd on 2017/3/2.
 */
var detailCtrl={
    detailList:function(id,callback){
        $.ajax({
            url:"https://api.imjad.cn/cloudmusic/?type=playlist&id="+id,
            dataType:"json",
            success:function(data){
                callback(data.playlist)
            }
        })
    },
    musicList:function(id,callback){
        $.ajax({
            url:"https://musicapi.duapp.com/api.php?type=url&id="+id,
            dataType:"json",
            success:function(data){
                callback(data.data[0])
            }
        })
    },
    onloadDetail:function(id){
        var _this=this;
        this.detailList(id,function(data){
            $(".gedan_p").find("i").html(data.playCount);
            $(".d_content dt").html(data.name);
            $(".d_content dd").find("img").attr("src",data.creator.avatarUrl)
            $(".d_content dd").find("#span").html(data.creator.nickname)
            $(".d_bg").css({"background-image":data.creator.backgroundUrl})
            for(var j=0; j<plists.length; j++){
                if(plists[j].coverImgId==data.coverImgId){
                    $(".gedan_p").find("img").attr("src",plists[j].coverImgUrl);
                }
            }
            for(var i=0; i<data.tracks.length; i++){

                var det=$("#del_sho").html();
                var $det=$(det);
                $det.find("dt").html(i+1);
                $det.find(".dd1").html(data.tracks[i].name);
                $det.find(".dd2").html(data.tracks[i].ar[0].name);
                var a_data=data;

                //点击歌单名称,弹出歌曲地址
                $det.find("a").data("datat",data.tracks[i]).click(function(){
                    var dataM=$(this).data("datat")
                    var musicid=dataM.id;
                    console.log(dataM)
                    $(".pic_l h3").html(dataM.name);
                    $(".pic_l p").html(dataM.ar[0].name);
                    $(".pic_l i").find("img").attr("src",dataM.al.picUrl)
                    console.log($(this).data("datat"))
                    $("#bot").show();

                    _this.musicList(musicid,function(data){
                        musicLoad.plays(data);
                        //


                    })
                })

                $(".d_main").append($det);
            }
        })
    },
    tt:function(url){
        console.log(url)
        route(url);
    }
}

$(function(){
    detailCtrl.onloadDetail(datailId)
})













