---
title: Range
description: Range Orchid Extra Fields
extends: _layouts.documentation
section: content
locale: en
---

# Range {#Range}
This is a very elegant field - which allows you to set a maximum and minimum value.

The field is used in form to send a range of values.

<img class="block m-auto" src="/assets/fields/range/range.gif" alt="range preview" />


## Example

```php

use agoalofalife\Orchid\Fields\Range;

// title - title before the field
// min - minimum value
// max - maximal value
// hasGrid - show marking along the line
// skin - style

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


[Field Source](https://github.com/IonDen/ion.rangeSlider) 
