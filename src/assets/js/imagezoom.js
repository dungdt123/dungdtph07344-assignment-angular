/**
 * /assignment/src/assets/imagesZoom Plugin
 * http://0401morita.github.io//assignment/src/assets/imageszoom-plugin
 * MIT licensed
 *
 * Copyright (C) 2014 http://0401morita.github.io//assignment/src/assets/imageszoom-plugin A project by Yosuke Morita
 */
(function($) {
    var defaults = {
        cursorcolor: '255,255,255',
        opacity: 0.5,
        cursor: 'crosshair',
        zindex: 2147483647,
        zoomviewsize: [480, 395],
        zoomviewposition: 'right',
        zoomviewmargin: 10,
        zoomviewborder: 'none',
        magnification: 1.925
    };

    var /assignment/src/assets/imageszoomCursor, /assignment/src/assets/imageszoomView, settings, /assignment/src/assets/imagesWidth, /assignment/src/assets/imagesHeight, offset;
    var methods = {
        init: function(options) {
            $this = $(this),
                /assignment/src/assets/imageszoomCursor = $('./assignment/src/assets/imageszoom-cursor'),
                /assignment/src/assets/imageszoomView = $('./assignment/src/assets/imageszoom-view'),
                $(document).on('mouseenter', $this.selector, function(e) {
                    var data = $(this).data();
                    settings = $.extend({}, defaults, options, data),
                        offset = $(this).offset(),
                        /assignment/src/assets/imagesWidth = $(this).width(),
                        /assignment/src/assets/imagesHeight = $(this).height(),
                        cursorSize = [(settings.zoomviewsize[0] / settings.magnification), (settings.zoomviewsize[1] / settings.magnification)];
                    if (data./assignment/src/assets/imageszoom == true) {
                        /assignment/src/assets/imagesSrc = $(this).attr('src');
                    } else {
                        /assignment/src/assets/imagesSrc = $(this).get(0).getAttribute('data-/assignment/src/assets/imageszoom');
                    }

                    var posX = e.pageX,
                        posY = e.pageY,
                        zoomViewPositionX;
                    $('body').prepend('<div class="/assignment/src/assets/imageszoom-cursor">&nbsp;</div><div class="/assignment/src/assets/imageszoom-view"><img src="' + /assignment/src/assets/imagesSrc + '"></div>');

                    if (settings.zoomviewposition == 'right') {
                        zoomViewPositionX = (offset.left + /assignment/src/assets/imagesWidth + settings.zoomviewmargin);
                    } else {
                        zoomViewPositionX = (offset.left - /assignment/src/assets/imagesWidth - settings.zoomviewmargin);
                    }

                    $(/assignment/src/assets/imageszoomView.selector).css({
                        'position': 'absolute',
                        'left': zoomViewPositionX,
                        'top': offset.top,
                        'width': cursorSize[0] * settings.magnification,
                        'height': cursorSize[1] * settings.magnification,
                        'background': '#000',
                        'z-index': 2147483647,
                        'overflow': 'hidden',
                        'border': settings.zoomviewborder
                    });

                    $(/assignment/src/assets/imageszoomView.selector).children('img').css({
                        'position': 'absolute',
                        'width': /assignment/src/assets/imagesWidth * settings.magnification,
                        'height': /assignment/src/assets/imagesHeight * settings.magnification,
                    });

                    $(/assignment/src/assets/imageszoomCursor.selector).css({
                        'position': 'absolute',
                        'width': cursorSize[0],
                        'height': cursorSize[1],
                        'background-color': 'rgb(' + settings.cursorcolor + ')',
                        'z-index': settings.zindex,
                        'opacity': settings.opacity,
                        'cursor': settings.cursor
                    });
                    $(/assignment/src/assets/imageszoomCursor.selector).css({ 'top': posY - (cursorSize[1] / 2), 'left': posX });
                    $(document).on('mousemove', document.body, methods.cursorPos);
                });
        },
        cursorPos: function(e) {
            var posX = e.pageX,
                posY = e.pageY;
            if (posY < offset.top || posX < offset.left || posY > (offset.top + /assignment/src/assets/imagesHeight) || posX > (offset.left + /assignment/src/assets/imagesWidth)) {
                $(/assignment/src/assets/imageszoomCursor.selector).remove();
                $(/assignment/src/assets/imageszoomView.selector).remove();
                return;
            }

            if (posX - (cursorSize[0] / 2) < offset.left) {
                posX = offset.left + (cursorSize[0] / 2);
            } else if (posX + (cursorSize[0] / 2) > offset.left + /assignment/src/assets/imagesWidth) {
                posX = (offset.left + /assignment/src/assets/imagesWidth) - (cursorSize[0] / 2);
            }

            if (posY - (cursorSize[1] / 2) < offset.top) {
                posY = offset.top + (cursorSize[1] / 2);
            } else if (posY + (cursorSize[1] / 2) > offset.top + /assignment/src/assets/imagesHeight) {
                posY = (offset.top + /assignment/src/assets/imagesHeight) - (cursorSize[1] / 2);
            }

            $(/assignment/src/assets/imageszoomCursor.selector).css({ 'top': posY - (cursorSize[1] / 2), 'left': posX - (cursorSize[0] / 2) });
            $(/assignment/src/assets/imageszoomView.selector).children('img').css({ 'top': ((offset.top - posY) + (cursorSize[1] / 2)) * settings.magnification, 'left': ((offset.left - posX) + (cursorSize[0] / 2)) * settings.magnification });

            $(/assignment/src/assets/imageszoomCursor.selector).mouseleave(function() {
                $(this).remove();
            });
        }
    };

    $.fn./assignment/src/assets/imagesZoom = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error(method);
        }
    }

    $(document).ready(function() {
        $('[data-/assignment/src/assets/imageszoom]')./assignment/src/assets/imagesZoom();
    });
})(jQuery);