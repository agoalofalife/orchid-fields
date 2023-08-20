---
title: Avatar
description: Avatar Orchid Extra Fields
extends: _layouts.documentation
section: content
locale: en
---

# Avatar {#Avatar}
A very simple Field to render a image and title under a picture.

For example, you can use it like this.

<img class="block m-auto" src="/assets/fields/avatar/single.png" alt="sinlge avatar" />

Even, You may use it in the table

<img class="block m-auto" src="/assets/fields/avatar/table.png" alt="avatar in table" />
## Example code

```php

use agoalofalife\Orchid\Fields\Range;

// value - url to source
// heightByPercent - size avatar by percents
// nameAvatar - text under a avatar like a "title"
// sizeTitle - size a title
// left or right or center - position avatar on layout

Avatar::make('test')
        ->value("https://avatars.githubusercontent.com/u/15719824?v=4")
        ->heightByPercent(6)
        ->nameAvatar('Ilia Chubarov')
        ->sizeTitle(5)
        ->left(),
```



