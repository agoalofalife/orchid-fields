---
title: Range
description: Range Orchid Extra Fields
extends: _layouts.documentation
section: content
locale: ru
---

# Range {#Range}
Это очень элегантное поле - которое позволяет установить максимальное и минимальное значение.

Поле используется в form для отправки диапазона значений.

<img class="block m-auto" src="/assets/fields/range/range.gif" alt="range preview" />


## Пример

```php

use agoalofalife\Orchid\Fields\Range;

// title - заголовок перед полем
// min - минимальное значение
// max - максимальное значение
// hasGrid - показывать разметку вдоль линии
// skin - стиль

Range::make('age')
    ->title('Age')
    ->type('double') // double, single
    ->min(18)
    ->max(50)
    ->skin('flat') // flat, big, modern, round, sharp, square
    ->hasGrid(true);
```

### Flat skin

<img class="block m-auto" src="/assets/fields/range/flat.png" alt="flat" />

### Big skin

<img class="block m-auto" src="/assets/fields/range/big.png" alt="big" />


### Modern skin

<img class="block m-auto" src="/assets/fields/range/modern.png" alt="modern" />

### Round skin

<img class="block m-auto" src="/assets/fields/range/round.png" alt="round" />

### Sharp skin

<img class="block m-auto" src="/assets/fields/range/sharp.png" alt="sharp" />

### Square skin

<img class="block m-auto" src="/assets/fields/range/square.png" alt="square" />


[Источник поля](https://github.com/IonDen/ion.rangeSlider) 
