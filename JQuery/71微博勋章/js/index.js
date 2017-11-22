$(function () {

    //下面Li的点击事件
    $('ul[node-type="medalOfHidden"]').on('click', 'li', function () {
        var th = $(this),
            html = th.html();
        $('ul[node-type="medalOfShow"]>.empty:eq(0)').removeClass('empty').html(html);
        th.remove();
    });
    //拖拽事件
    .
    on('mousedown', 'li', function (e) {
        var e = e || window.event,
            start = {
                x: e.pageX - $(this).position().left,
                y: e.pageY - $(this).position().top
            };
        var _th = $(this);
        $(document).on('mousemove', function (e) {
            var e = e || window.event,
                now = {
                    x: e.pageX - start.x,
                    y: e.pageY - start.y
                };
            _th.css({
                'position': 'absolute',
                'left': now.x,
                'top': now.y
            })
        })
    });
    //上面li的点击事件
    $('ul[node-type="medalOfShow"]').on('click', 'a', function () {
        var th = $(this).parents('li'),
            html = th.html();
        $('<li>' + html + '</li>').appendTo($('ul[node-type="medalOfHidden"]'))
        th.addClass('empty').empty().appendTo($('ul[node-type="medalOfShow"]'));
    })


});