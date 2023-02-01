<?php

use TightenCo\Jigsaw\IterableObject;

return function ($page, $locale) {
    if ($locale === 'ru') {
        return new IterableObject([
            'Введение' => new IterableObject([
                'url' => "/docs/{$locale}/getting-started",
                'children' => new IterableObject([
                    'Установка' => "/docs/{$locale}/install",
                    'Как написать свой' => "/docs/{$locale}/how-make-custom",
                ]),
            ]),
            'Список Fields' => new IterableObject([
                'children' => new IterableObject([
                    'Audio' => "/docs/{$locale}/fields/audio",
                    'Image Zoom' => "/docs/{$locale}/fields/image_zoom",
                    'Range' => "/docs/{$locale}/fields/range",
                    'Rate' => "/docs/{$locale}/fields/rate",
                ]),
            ]),
        ]);
    } else {
        return new IterableObject([
            'Introduction' => new IterableObject([
                'url' => "/docs/{$locale}/getting-started",
                'children' => new IterableObject([
                    'Installing' => "/docs/{$locale}/install",
                    'How to write your Field' => "/docs/{$locale}/how-make-custom",
                ]),
            ]),
            'List Fields' => new IterableObject([
                'children' => new IterableObject([
                    'Audio' => "/docs/{$locale}/fields/audio",
                    'Image Zoom' => "/docs/{$locale}/fields/image_zoom",
                    'Range' => "/docs/{$locale}/fields/range",
                    'Rate' => "/docs/{$locale}/fields/rate",
                ]),
            ]),
        ]);
    }
};
