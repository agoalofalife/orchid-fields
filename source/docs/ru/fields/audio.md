---
title: Audio
description: Audio Orchid Extra Fields
extends: _layouts.documentation
section: content
locale: ru
---

# Audio {#Audio}
Очень простой field для воспроизведения аудио в вашей админке.

Например, его можно использовать в таблице или форме.

<img class="block m-auto" src="/assets/fields/audio/audio.gif" alt="audio preview" />


## Пример

```php

use agoalofalife\Orchid\Fields\Range;

// value - url до исходника

Audio::make('sound')
       ->value('url to sound')
```



