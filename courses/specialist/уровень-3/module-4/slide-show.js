(function ($) {
    var viewUL = $('div.view')
        .css('overflow', 'hidden')
        .children('ul');

    var imgs = viewUL.find('img');
    var imgW = 400; // можно и лучше:  1- imgs[0].width()   2- imgs.first().width()
    var imgsLen = imgs.length;
    var totalImgsW = imgW * imgsLen, current = 1;

    $('#show').show()
        .find('button').on('click', function () {
        var direction = $(this).attr('id');
        var position = imgW;
        (direction === 'next') ? ++current : --current;
        if (current === 0) {
            current = imgsLen;
            direction = 'next';
            position = totalImgsW - imgW;
        } else if (current - 1 === imgsLen) {
            current = 1;
            position = 0;
        }
        doIt(viewUL, position, direction);
    });

    function doIt(container, position, direction) {
        var sign;  // -= +=
        if (direction && position !== 0) {
            sign = (direction === 'next') ? '-=' : '+=';
        }
        container.animate({'margin-left': sign ? (sign + position) : position});
    }

})(jQuery);