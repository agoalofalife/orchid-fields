# Orchid Fields

Extra library which add different fields in Laravel Orchid Platform

## Installation

You may install into your project using the Composer package manager:

```bash
composer require agoalofalife/orchid-fields
```

Next, you should publish resources files using the `vendor:publish` Artisan command. 

```bash
 php artisan vendor:publish --provider="agoalofalife\\Orchid\\OrchidFieldsServiceProvider" 
```

# Fields

## Range

#### It's very elegant field, which can set min and max value.

<a href="https://raw.githubusercontent.com/agoalofalife/orchid-fields/main/.github/IMAGES/range.png">
  <img src="https://raw.githubusercontent.com/agoalofalife/orchid-fields/main/.github/IMAGES/range.png" alt="range" align="center" />
</a>

Example:

```php
use agoalofalife\Orchid\Fields\Range;

Range::make('age')
    ->title('Age')
    ->min(18)
    ->max(50)
    ->hasGrid(true);
```


## Rate

#### It's very elegant field, which can set min and max value.

<a href="https://raw.githubusercontent.com/agoalofalife/orchid-fields/main/.github/IMAGES/rate.png">
  <img src="https://raw.githubusercontent.com/agoalofalife/orchid-fields/main/.github/IMAGES/rate.png" alt="range" align="center" />
</a>

Example:

```php
use agoalofalife\Orchid\Fields\Rate;

Rate::make('rate')
    ->count(4)
    ->readonly(true)
    ->value(5);
```


## Image Zoom

#### You can watch full [documentation](https://github.com/kingdido999/zooming)


Example:

```php
use agoalofalife\Orchid\Fields\ImageZoom;

ImageZoom::make('image')
    ->value('https://host/picture.jpg')
    ->zoomPercent(100)
    ->widthPercent(70);
```

