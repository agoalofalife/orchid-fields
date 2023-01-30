---
title: Rate
description: Rate Orchid Extra Fields
extends: _layouts.documentation
section: content
locale: en
---

# Rate {#Rate}
Pretty popular Field - which allows you to give a star rating.

It's much nicer than a numerical value.

It can be rating by review, comment - it all depends on your needs!

You can watch a detailed video on creating and using this field from [video tutorial](https://youtu.be/Gkfswuh0gDg) on orchid.

The field is used in the form to send a numeric value.

<img class="block m-auto" src="/assets/fields/rate/rate.gif" alt="rate preview" />


## Example

```php

use agoalofalife\Orchid\Fields\Rate;

// title - title before the field
// count - number of stars
// readonly - read only
// step - step by which the stars are filled
// value - how many already filled

  Rate::make('rate')
    ->title('Rate')
    ->count(10)
    ->readonly(false)
    ->step(1)
    ->value(5),
```

[Field Source](https://github.com/auxiliary/rater) 
