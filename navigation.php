<?php

use TightenCo\Jigsaw\IterableObject;

return function ($page, $locale) {
    if ($locale === 'ru') {
        return new IterableObject([
            'Введение' => new IterableObject([
                'url' => "docs/{$locale}/getting-started",
                'children' => new IterableObject([
                    'Установка' => "docs/{$locale}/install",
                    'Как написать свой' => "docs/{$locale}/how-make-custom",
                ]),
            ]),
            'Список Fields' => new IterableObject([
//                'url' => "docs/{$locale}/getting-started",
                'children' => new IterableObject([
                    'Audio' => "docs/{$locale}/fields/audio",
                    'Image Zoom' => "docs/{$locale}/fields/image_zoom",
                    'Range' => "docs/{$locale}/fields/range",
                    'Rate' => "docs/{$locale}/fields/rate",
                ]),

            ]),
        ]);
    }
    return new IterableObject([
        'Getting Started' => new IterableObject([
            'url' => "docs/{$locale}/getting-started",
            'children' => new IterableObject([
                'Installation' => "docs/{$locale}/install",
                'Customizing Your Site' => "docs/{$locale}/customizing-your-site",
                'Navigation' => "docs/{$locale}/navigation",
                'Algolia DocSearch' => "docs/{$locale}/algolia-docsearch",
                'Custom 404 Page' => "docs/{$locale}/custom-404-page",
            ]),
        ]),
    ]);
};
