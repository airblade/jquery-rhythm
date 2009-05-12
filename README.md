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

    $(document).ready(function() {
      $('img').rhythm();
    });

Webkit sometimes fires `document.ready` before all elements in the page have
their properties set, even if all stylesheets are defined before all javascripts.
See the discussions [here][3] and [here][4] for more information.

I therefore recommend using `window.load` instead on Webkit:

    if (!jQuery.browser.safari) {
      $(document).ready(function() {
        $('img').rhythm();
      };
    else {
      $(window).load(function() {
        $('img').rhythm();
      };
    }

jQuery 1.3 deprecated browser detection in favour of feature detection.  However
at the moment there is no feature which tells us whether all elements in the page
have their properties set.  So we use browser detection.


## Custom Options

You can use these options:

* **`vertical_align`**: How to align the image when it is set as a background.


## Requirements

* jQuery (only tested on 1.3.2 but probably works on earlier versions).


## Intellectual Property

Copyright 2009 Andrew Stewart, AirBlade Software Ltd.
Released under the MIT Licence.

Feedback welcome!

  [1]: http://nubyonrails.com/articles/get-rhythm-in-your-baseline
  [2]: http://www.transcendingcss.com/
  [3]: http://groups.google.com/group/jquery-en/browse_thread/thread/978ef0b2877dac77
  [4]: http://groups.google.com/group/jquery-dev/browse_thread/thread/77be7025a17eed3b
