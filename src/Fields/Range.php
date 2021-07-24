<?php

declare(strict_types=1);

namespace agoalofalife\Orchid\Fields;

use Orchid\Screen\Field;

class Range extends Field
{
    /**
     * @var string
     */
    protected $view = 'platform-fields::fields.range';

    /**
     * Default attributes value
     *
     * @var array
     */
    protected $attributes = [
        'min' => 0,
        'max' => 1000,
        'from' => 0,
        'to' => 1000,
        'hasGrid' => false
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
