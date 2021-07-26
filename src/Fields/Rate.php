<?php

declare(strict_types=1);

namespace agoalofalife\Orchid\Fields;

use Orchid\Screen\Field;

class Rate extends Field
{
    /**
     * @var string
     */
    protected $view = 'platform-fields::fields.rate';

    /**
     * Default attributes value
     *
     * @var array
     */
    protected $attributes = [
        'count' => 5,
        'step'  => 1,
        'readonly' => false
    ];

    /**
     * Attributes available for particular tag
     *
     * @var string[]
     */
    protected $inlineAttributes = [
      'title',
      'name',
      'haveRated'
    ];
}
