<?php

use TightenCo\Jigsaw\IterableObject;

return function ($page, $locale, $baseUrl) {
    if ($locale === 'ru') {
        return new IterableObject([
            'Введение' => new IterableObject([
                'url' => "{$baseUrl}/docs/{$locale}/getting-started",
                'children' => new IterableObject([
                    'Установка' => "{$baseUrl}/docs/{$locale}/install",
                    'Как написать свой' => "{$baseUrl}/docs/{$locale}/how-make-custom",
                ]),
            ]),
            'Список Fields' => new IterableObject([
                'children' => new IterableObject([
                    'Audio' => "{$baseUrl}/docs/{$locale}/fields/audio",
                    'Image Zoom' => "{$baseUrl}/docs/{$locale}/fields/image_zoom",
                    'Range' => "{$baseUrl}/docs/{$locale}/fields/range",
                    'Rate' => "{$baseUrl}/docs/{$locale}/fields/rate",
                ]),
            ]),
        ]);
    } else {
        return new IterableObject([
            'Introduction' => new IterableObject([
                'url' => "{$baseUrl}/docs/{$locale}/getting-started",
                'children' => new IterableObject([
                    'Installing' => "{$baseUrl}/docs/{$locale}/install",
                    'How to write your Field' => "{$baseUrl}/docs/{$locale}/how-make-custom",
                ]),
            ]),
            'List Fields' => new IterableObject([
                'children' => new IterableObject([
                    'Audio' => "{$baseUrl}/docs/{$locale}/fields/audio",
                    'Image Zoom' => "{$baseUrl}/docs/{$locale}/fields/image_zoom",
                    'Range' => "{$baseUrl}/docs/{$locale}/fields/range",
                    'Rate' => "{$baseUrl}/docs/{$locale}/fields/rate",
                ]),
            ]),
        ]);
    }
};
