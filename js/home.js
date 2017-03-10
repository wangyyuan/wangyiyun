/**
 * Created by hxsd on 2017/3/2.
 */

var homeCtrl={
    getPlayList:function(comeback){
        $.ajax({
            url:"https://musicapi.duapp.com/api.php?type=topPlayList&cat=%E5%85%A8%E9%83%A8&offset=0&limit=6",
            dataType:"json",
            success:function(data){
                if(data.code===200){
                    comeback(data.playlists)
                }
                plists=data.playlists;
                console.log(plists)
            }
        })
    },
    onloadList:function(){
        this.getPlayList(function(data){
            for(var i=0; i<data.length; i++){

                var list=$(".list div").html();
                var $list=$(list);
                $list.find("img").attr("src",data[i].coverImgUrl);
                $list.find("i").html(data[i].playCount);
                $list.find("dd").html(data[i].name);

                $list.find("a").attr("href","#/detail?id="+data[i].id).data("id",data[i].id).click(function(){
                    console.log($(this).data("id"))
                    datailId=$(this).data("id");
                    route("detail",$("#content"))
                })

                $(".list").append($list)
            }
        })
    }
}

homeCtrl.onloadList()













