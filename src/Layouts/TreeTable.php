<?php

declare(strict_types=1);

namespace agoalofalife\Orchid\Layouts;
use Orchid\Screen\Layouts\Table;

class TreeTable extends Table
{
    /**
     * @var string
     */
    protected $template = 'platform-fields::layouts.tree-table';

    public function __construct(string $target, protected array $columns)
    {
        $this->target = $target;
    }

    protected function columns(): iterable
    {
        return $this->columns;
    }
}

