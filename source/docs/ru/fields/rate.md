---
title: Rate
description: Rate Orchid Extra Fields
extends: _layouts.documentation
section: content
locale: ru
---

# Rate {#Rate}
Довольно популярный Field - который позволяет выставлять рейтинг звезд.

Он намного приятнее чем числовое значение.

Это может быть рейтинг по отзыву, комментарию - все зависит от ваших потребностей!

Вы можете посмотреть подробное видео о создании и использовании этого fields из [видеоурока](https://youtu.be/Gkfswuh0gDg) по orchid.

Поле используется в form для отправки числового значения.

<img class="block m-auto" src="/assets/fields/rate/rate.gif" alt="rate preview" />


## Пример

```php

use agoalofalife\Orchid\Fields\Rate;

// title - заголовок перед полем
// count - кол-во звезд
// readonly - только для чтения
// step - шаг с которым заполняются звезды
// value - сколько уже заполнено

  Rate::make('rate')
    ->title('Rate')
    ->count(10)
    ->readonly(false)
    ->step(1)
    ->value(5),
```

[Источник Field](https://github.com/auxiliary/rater) 
