$.fn.colorpicker = function () {
    var root = this,
        icon = $('<img />').attr('src', 'imgs/icon.jpg')
            .addClass('btn-logo')
            .appendTo(root),
        app = $('<div />').addClass('app-container')
            .addClass('hide')
            .appendTo(root);
    var btnClose = $('<img />').attr('src', 'imgs/close.png')
        .addClass('btn-close')
        .appendTo(app);
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');

    var img = document.createElement('img');
    img.src = 'imgs/color-picker.png';
    img.id = 'canvas-image-container';
    document.body.appendChild(img);


    canvas.width = 200;
    canvas.height = 210;
    app.append(canvas);
    canvas.setAttribute('id', 'the-canvas');


    var hexInput = $('<input />').attr('type', 'text')
        .attr('placeholder', 'HEX')
        .addClass('hex'),
        rgbInput = $('<input />').attr('type', 'text')
            .attr('placeholder', 'RGB')
            .addClass('rgb');

    var result = $('<ul />').addClass('results'),
        color = $('<li />').append(hexInput)
            .append(rgbInput)
            .appendTo(result),
        colorResult = $('<li />').html('<div class="show-color"></div>')
            .appendTo(result);


    function drawCanvas() {
        var imageData = ctx.drawImage(img, 0, 0, 200, 210);
    }

    function getColor(x, y) {
        var imgData = ctx.getImageData(x, y, 1, 1);
        console.log(x + '   ' + y);

        return imgData;
        
    }

    function findPos(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
}
    result.appendTo(app);
    root.on('click', '.btn-logo, .btn-close, #the-canvas', function (e) {
        if ($(this).attr('id') === 'the-canvas') {
            var pos = findPos(this),
                colorData = getColor(e.pageX - pos.x, e.pageY - pos.y),
            r = colorData.data[0],
            g = colorData.data[1],
            b = colorData.data[2];
            
            hexInput.val('#' + r.toString(16) + g.toString(16) + b.toString(16));
            rgbInput.val(r + ',' + g + ',' + b);
            $('.show-color').css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
        } else {
            app.toggleClass('hide');
            icon.toggleClass('hide');
            if (!app.hasClass('hide')) {
                drawCanvas();
            }
        }
    });


}