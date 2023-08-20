<?php

declare(strict_types=1);

namespace agoalofalife\Orchid\Fields;

use Orchid\Screen\Field;

/**
 * Class AvatarGroup
 *
 * @method Avatar sizeTitle(int $value)
 * @method Avatar heightByPercent(int $value)
 * @method Avatar nameAvatar(string $value)
 */
class Avatar extends Field
{
    /**
     * @var string
     */
    protected $view = 'platform-fields::fields.avatar';
    /**
     * Default attributes value.
     *
     * @var array
     */
    protected $attributes = [
        'sizeTitle' => 5,
        'heightByPercent' => 50,
        'nameAvatar' => 'name',
        'left' => true,
        'center' => false,
        'right' => false,
    ];

    /**
     * Attributes available for a particular tag.
     *
     * @var array
     */
    protected $inlineAttributes = [
        'form',
        'title',
        'value',
        'name',
    ];


    public function left(): self
    {
        $this->set('left', true);
        $this->set('right', false);
        $this->set('center', false);

        return $this;
    }

    public function center(): self
    {
        $this->set('center', true);
        $this->set('right', false);
        $this->set('left', false);

        return $this;
    }

    public function right(): self
    {
        $this->set('center', false);
        $this->set('right', true);
        $this->set('left', false);

        return $this;
    }
}
