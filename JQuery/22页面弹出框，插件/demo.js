;(function($){
    $.fn.dialog = function(option){
        var deft={
            ismove:true,
            w:500,
            h:300,
            bg:"#666",
            cont:"妈咪妈咪哄",
            L:20,
            T:300,
            id:"bb"
        }
        var set = $.extend({},deft,option);
        
        return this.each(function(){
            var that = $(this);
            that.on("click",function(){
                if($("#"+set.id).length>0){
                    $("#"+set.id).remove();
                }
                var div=$("<div id='"+set.id+"'>"+set.cont+"<span class='close'>&times;</span></div>");
                div.css({
                    "width":set.w,
                    "height":set.h,
                    "background":set.bg,
                    "position":"absolute",
                    "left":set.L,
                    "top":set.T
                });
                div.appendTo("body").hide().fadeIn(600);
                $(".close").on("click",function(){
                    $(this).parent("div").fadeOut(600).remove();
                })
                if(set.ismove){
                    div.on("mousedown",function(e){
                        var movL = e.pageX-$(this).offset().left;
                        var movT = e.pageY-$(this).offset().top;
                        var that = $(this);
                        that.css("cursor","move");
                        that.on("mousemove",function(e){
                            var ml=e.pageX-movL;
                            var mt=e.pageY-movT;
                            $(this).css({"left":ml,"top":mt});
                        });
                        that.on("mouseup",function(){
                            that.off("mousemove");
                        })
                    })
                }
            })
        })
    }
})(jQuery);