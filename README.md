# jQuery Rhythm

Fit images to the vertical baseline rhythm without distortion.

We find the height of every image and the nearest baseline.
We replace the image with a `<div/>` whose background image is
the original image, and whose height is rounded up or down to
the nearest baseline.

Inspired by [Geoffrey Grosenbach][1] who in turn was apparently inspired
by [Andy Clarke][2].


## Usage

Here's the simplest example:

    $(window).load(function() {
      $('img').rhythm();
    });

The `window.load` event fires when all binary elements in the page, such as
images, have downloaded.  This is usually after `document.ready` fires.  We
need to wait until the images are fully downloaded before reading their
dimensions and setting them as background images, otherwise we can end up
with artefacts of partial images.


## Custom Options

You can use these options:

* **`verticalAlign`**: how to align the image when it is set as a background (defaults is 'top').

You can either pass these options on a case by case basis in each call to `rhythm`
or you can set the defaults once like this:

    $.fn.rhythm.defaults.verticalAlign = 'center';


## Requirements

* jQuery (only tested on 1.3.2 but probably works on earlier versions).


## Intellectual Property

Copyright 2009 Andrew Stewart, AirBlade Software Ltd.
Released under the MIT Licence.

Feedback welcome!

  [1]: http://nubyonrails.com/articles/get-rhythm-in-your-baseline
  [2]: http://www.transcendingcss.com/
