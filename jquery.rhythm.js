// Fit images to vertical baseline rhythm without distortion.
// We find the height of every image and the nearest baseline.
// We replace the image with a <div/> whose background image is
// the original image, and whose height is rounded up or down to
// the nearest baseline.
//
// Inspired by Geoffrey Grosenbach[1] who in turn was apparently inspired
// by Andy Clarke[2].
//
// [1]: http://nubyonrails.com/articles/get-rhythm-in-your-baseline
// [2]: http://www.transcendingcss.com/
(function($) {
  $.fn.rhythm = function(options) {
    var body_font_size_px   = parseFloat($('body').css('font-size'));
    var body_line_height_px = parseFloat($('body').css('line-height'));
    var body_line_height_em = body_line_height_px / body_font_size_px;

    var opts = $.extend($.fn.rhythm.defaults, options);

    return this.each(function() {
      var img_src          = $(this).attr('src');
      var img_height       = $(this).height();  // px
      var img_width        = $(this).width();   // px
      var img_float        = $(this).css('float');
      var img_margin_right = $(this).css('margin-right');  // includes unit
      var img_margin_left  = $(this).css('margin-left');   // includes unit

      // Calculate height of image in ems.
      var height_em = img_height / body_font_size_px;
      // Fractional line-height image takes up.
      var fractional_line_height_em = height_em % body_line_height_em;
      // Round with the least disruption.
      if (fractional_line_height_em < (body_line_height_em / 2)) {
        height_em -= fractional_line_height_em;
      }
      else {
        height_em += (body_line_height_em - fractional_line_height_em);
      }

      var div = $('<div/>');
      div.css({'display': 'block',
        'float':         img_float,
        'width':         img_width + 'px',
        'height':        height_em + 'em',
        'margin-right':  img_margin_right,
        'margin-bottom': body_line_height_em + 'em',
        'margin-left':   img_margin_left,
        'background':    'transparent url(' + img_src + ') no-repeat center ' + opts['vertical_align']});
      $(this).replaceWith(div);
    });
  };

  $.fn.rhythm.defaults = {
    vertical_align: 'top'
  };
})(jQuery);
