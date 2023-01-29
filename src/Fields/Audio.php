<?php

declare(strict_types=1);

namespace agoalofalife\Orchid\Fields;

use Orchid\Screen\Field;

/**
 * Class Audio
 *
 * @method Audio source($value)
 * @method Audio preload($value = true)
 * @method Audio playIcon($value = null)
 * @method Audio pauseIcon($value = null)
 */
class Audio extends Field
{
    /**
     * @var string
     */
    protected $view = 'platform-fields::fields.audio';
    /**
     * Default attributes value.
     *
     * @var array
     */
    protected $attributes = [
        'preload' => 'none',
        'playIcon' => 'control-play',
        'pauseIcon' => 'control-pause',
    ];

    /**
     * Attributes available for a particular tag.
     *
     * @var array
     */
    protected $inlineAttributes = [
        'source',
        'preload',
        'playIcon',
        'pauseIcon',
        'value',
    ];
}
