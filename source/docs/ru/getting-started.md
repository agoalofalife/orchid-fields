---
title: Введение
description: Getting started with Jigsaw's docs starter template is as easy as 1, 2, 3.
extends: _layouts.documentation
section: content
locale: ru
---

# Введение {#getting-started}

Это дополнительный репозиторий **(пакет)** - для кастомных полей **(Fields)** в экосистеме [Laravel Orchid Admin Panel](https://orchid.software)

Поля которые доступны из "коробки" в Orchid - вы можете посмотреть [здесь](https://orchid.software/ru/docs/field/).

Этот пакет позволяет расширить стандартную коллекцию и дополнить ее более нужными и востребованными полями в вашем интерфейсе.


[//]: # (## Как пользоваться {#getting-started-configuration})

[//]: # ()
[//]: # (As with all Jigsaw sites, configuration settings can be found in `config.php`; you can update the variables in that file with settings specific to your project. You can also add new configuration variables there to use across your site; take a look at the [Jigsaw documentation]&#40;http://jigsaw.tighten.co/docs/site-variables/&#41; to learn more.)

[//]: # ()
[//]: # (```php)

[//]: # (// config.php)

[//]: # (return [)

[//]: # (    'baseUrl' => 'https://my-awesome-jigsaw-site.com/',)

[//]: # (    'production' => false,)

[//]: # (    'siteName' => 'My Site',)

[//]: # (    'siteDescription' => 'Give your documentation a boost with Jigsaw.',)

[//]: # (    'docsearchApiKey' => '',)

[//]: # (    'docsearchIndexName' => '',)

[//]: # (    'navigation' => require_once&#40;'navigation.php'&#41;,)

[//]: # (];)

[//]: # (```)

[//]: # ()
[//]: # (> Tip: This configuration file is also where you’ll define any "collections" &#40;for example, a collection of the contributors to your site, or a collection of blog posts&#41;. Check out the official [Jigsaw documentation]&#40;https://jigsaw.tighten.co/docs/collections/&#41; to learn more.)

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (### Adding Content {#getting-started-adding-content})

[//]: # ()
[//]: # (You can write your content using a [variety of file types]&#40;http://jigsaw.tighten.co/docs/content-other-file-types/&#41;. By default, this starter template expects your content to be located in the `source/docs` folder. If you change this, be sure to update the URL references in [navigation.php]&#40;/docs/navigation.php&#41;.)

[//]: # ()
[//]: # ([Read more about navigation.]&#40;/docs/navigation&#41;)

[//]: # ()
[//]: # (The first section of each content page contains a YAML header that specifies how it should be rendered. The `title` attribute is used to dynamically generate HTML `title` and OpenGraph tags for each page. The `extends` attribute defines which parent Blade layout this content file will render with &#40;e.g. `_layouts.documentation` will render with `source/_layouts/documentation.blade.php`&#41;, and the `section` attribute defines the Blade "section" that expects this content to be placed into it.)

[//]: # ()
[//]: # (```yaml)

[//]: # (---)

[//]: # (title: Navigation)

[//]: # (description: Building a navigation menu for your site)

[//]: # (extends: _layouts.documentation)

[//]: # (section: content)

[//]: # (---)

[//]: # (```)

[//]: # ()
[//]: # ([Read more about Jigsaw layouts.]&#40;https://jigsaw.tighten.co/docs/content-blade/&#41;)

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (### Adding Assets {#getting-started-adding-assets})

[//]: # ()
[//]: # (Any assets that need to be compiled &#40;such as JavaScript, Less, or Sass files&#41; can be added to the `source/_assets/` directory, and Laravel Mix will process them when running `npm run dev` or `npm run prod`. The processed assets will be stored in `/source/assets/build/` &#40;note there is no underscore on this second `assets` directory&#41;.)

[//]: # ()
[//]: # (Then, when Jigsaw builds your site, the entire `/source/assets/` directory containing your built files &#40;and any other directories containing static assets, such as images or fonts, that you choose to store there&#41; will be copied to the destination build folders &#40;`build_local`, on your local machine&#41;.)

[//]: # ()
[//]: # (Files that don't require processing &#40;such as images and fonts&#41; can be added directly to `/source/assets/`.)

[//]: # ()
[//]: # ([Read more about compiling assets in Jigsaw using Laravel Mix.]&#40;http://jigsaw.tighten.co/docs/compiling-assets/&#41;)

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (## Building Your Site {#getting-started-building-your-site})

[//]: # ()
[//]: # (Now that you’ve edited your configuration variables and know how to customize your styles and content, let’s build the site.)
[//]: # ()
[//]: # ()
[//]: # (```bash)

[//]: # ()
[//]: # (# build static files with Jigsaw)

[//]: # ()
[//]: # (./vendor/bin/jigsaw build)

[//]: # ()
[//]: # ()
[//]: # (# compile assets with Laravel Mix)

[//]: # ()
[//]: # (# options: dev, prod)

[//]: # ()
[//]: # (npm run dev)

[//]: # ()
[//]: # (```)
