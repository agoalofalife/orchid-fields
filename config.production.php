<?php

return [
    'baseUrl' => 'https://jigsaw-docs-template.tighten.co',
    'production' => true,
    'subDirectory' => env('SUB_DIRECTORY', '/orchid-fields'),
    // DocSearch credentials
    'docsearchApiKey' => env('DOCSEARCH_KEY'),
    'docsearchIndexName' => env('DOCSEARCH_INDEX'),
];
