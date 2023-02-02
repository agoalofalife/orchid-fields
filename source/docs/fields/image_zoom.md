---
title: Image Zoom
description: Image Zoom Orchid Extra Fields
extends: _layouts.documentation
section: content
locale: en
---

# Image Zoom {#ImageZoom}
Field allows you to magnify images on the spot.

It is often necessary to view the image in more detail on the same page - and the original image is pasted into a table.

<img class="block m-auto" src="/assets/fields/image_zoom/image_zoom.gif" alt="image_zoom preview" />


## Example

```php

use agoalofalife\Orchid\Fields\ImageZoom;

// title - title before the field
// value - path to the image
// zoomPercent - zoom of the image in percents
// widthPercent - width of the image in percent

 ImageZoom::make('image')
    ->value('https://orchid.software/img/next/unbox.svg')
    ->zoomPercent(100)
    ->widthPercent(20),
```



[Field Source](https://github.com/kingdido999/zooming) 
