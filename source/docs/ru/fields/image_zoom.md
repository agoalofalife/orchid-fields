---
title: Image Zoom
description: Image Zoom Orchid Extra Fields
extends: _layouts.documentation
section: content
locale: ru
---

# Image Zoom {#ImageZoom}
Field позволяет увеличивать изображения на месте.

Часто бывает необходимо для более детального просмотре изображения на этой же странице - а исходная
картинка вставлена в таблицу.

<img class="block m-auto" src="/assets/fields/image_zoom/image_zoom.gif" alt="image_zoom preview" />


## Пример

```php

use agoalofalife\Orchid\Fields\ImageZoom;

// title - заголовок перед полем
// value - путь до изображения
// zoomPercent - увеличение изображения в процентах
// widthPercent - ширина картинки в процентах

 ImageZoom::make('image')
    ->value('https://orchid.software/img/next/unbox.svg')
    ->zoomPercent(100)
    ->widthPercent(20),
```



[Источник поля](https://github.com/kingdido999/zooming) 
