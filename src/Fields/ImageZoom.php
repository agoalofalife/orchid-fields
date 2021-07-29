<?php

declare(strict_types=1);

namespace agoalofalife\Orchid\Fields;

use Orchid\Screen\Field;

class ImageZoom extends Field
{
    /**
     * @var string
     */
    protected $view = 'platform-fields::fields.image-zoom';

    /**
     * Default attributes value
     *
     * @var array
     */
    protected $attributes = [
        'size' => 100,
        'widthPercent' => 70
    ];

    /**
     * Attributes available for particular tag
     *
     * @var string[]
     */
    protected $inlineAttributes = [
        'form',
        'title',
        'value',
        'name',
    ];
}
