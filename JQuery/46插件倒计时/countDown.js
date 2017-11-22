;(function($){
    // 定义倒计时插件
    var countDown = function(options){
        var defaults={
            year:2018,
            month:10,
            day:1,
            hour:0,
            minutes:0
        },timer = null;

        // 合并参数
        var settings = $.extend({},defaults,options);
//        console.log(settings)
        var year = settings.year,
            month = settings.month,
            day = settings.day,
            hour = settings.hour,
            minutes = settings.minutes;
        var ohtml = '<div class="djs"> \
                    <P><span class="day">0</span>天</P>\
                    <P><span class="hour">0</span>小时</P>\
                    <P><span class="minute">0</span>分</P>\
                    <P><span class="second">0</span>秒</P>\
                 </div>';
        this.$dom = $(ohtml);
        settings.render.append(this.$dom);
        this.$day = this.$dom.find('.day');
        this.$hour = this.$dom.find('.hour');
        this.$minute = this.$dom.find('.minute');
        this.$second = this.$dom.find('.second');
        
        var _this = this;
        timer = setInterval(function(){
            updateTime(year,month,day,hour,minutes);
        },1000);
        
        function updateTime(year,month,day,hour,minute){
           var nowDate=new Date();
           var targetDate = new Date();
           targetDate.setFullYear(year);
           targetDate.setMonth(month);
           targetDate.setDate(day);
           targetDate.setHours(hour);
           targetDate.setMinutes(minute);
           targetDate.setSeconds(0);
           
           var dis = (targetDate.getTime()-nowDate.getTime())/1000;
           if(dis<0){
               clearInterval(timer);
               dis = 0;
           }else{
               // 换算成天、小时、分、秒
               var tian = parseInt(dis/86400);
               dis%=86400;
               
               var xiaoshi = parseInt(dis/3600);
               dis=dis%3600;
               
               var fenzhong = parseInt(dis/60);
               dis=dis%60;
               
               var miao = dis;
               
               _this.$day.text(tian);
               _this.$hour.text(xiaoshi);
               _this.$minute.text(fenzhong);
               _this.$second.text(miao);
           }
        }
    }
    $.countDown = function(options){
        return new countDown(options);
    }
})(jQuery);