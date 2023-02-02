---
title: Audio
description: Audio Orchid Extra Fields
extends: _layouts.documentation
section: content
locale: en
---

# Audio {#Audio}
A very simple Field to play audio in your admin panel.

For example, you can use it in a table or form.

<img class="block m-auto" src="/assets/fields/audio/audio.gif" alt="audio preview" />


## Example code

```php

use agoalofalife\Orchid\Fields\Range;

// value - url to source

Audio::make('sound')
       ->value('url to sound')
```



