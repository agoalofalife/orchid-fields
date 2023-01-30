<?php

use Illuminate\Support\Str;

return [
    'baseUrl' => 'https://agoalofalife.github.io/orchid-fields/',
    'path' => '{language}/{type}/{-title}',
    'collections' => [
        'posts-sl' => [
            'type' => 'blog',
            'language' => 'sl',
        ],

        'posts-en' => [
            'type' => 'blog',
            'language' => 'en',
        ],
    ],
    'production' => false,
    'siteName' => 'Extra Fields',
    'siteDescription' => 'Various fields for Laravel Orchid Admin',

    // Algolia DocSearch credentials
    'docsearchApiKey' => env('DOCSEARCH_KEY'),
    'docsearchIndexName' => env('DOCSEARCH_INDEX'),

    // navigation menu
    'navigation' => require_once('navigation.php'),

    // helpers
    'isActive' => function ($page, $path) {
        return Str::endsWith(trimPath($page->getPath()), trimPath($path));
    },
    'isActiveParent' => function ($page, $menuItem) {
        if (is_object($menuItem) && $menuItem->children) {
            return $menuItem->children->contains(function ($child) use ($page) {
                return trimPath($page->getPath()) == trimPath($child);
            });
        }
    },
    'url' => function ($page, $path) {
        return Str::startsWith($path, 'http') ? $path : '/' . trimPath($path);
    },
];
