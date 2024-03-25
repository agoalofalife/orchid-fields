<?php

declare(strict_types=1);

namespace agoalofalife\Orchid\Layouts;
use Illuminate\Contracts\Pagination\CursorPaginator;
use Illuminate\Contracts\Pagination\Paginator;
use Orchid\Screen\Layouts\Table;
use Orchid\Screen\Repository;
use Orchid\Screen\TD;

class TreeTable extends Table
{
    /**
     * @var string
     */
    protected $template = 'platform-fields::layouts.tree-table';
    protected $nameId = 'id';

    protected function columns(): iterable
    {
        return [];
    }

    public function build(Repository $repository)
    {
        $this->query = $repository;

        if (! $this->isSee()) {
            return;
        }

        $columns = collect($this->columns())->filter(static fn (TD $column) => $column->isSee());

        $total = collect($this->total())->filter(static fn (TD $column) => $column->isSee());

        $content = $repository->getContent($this->target);

        $rows = is_a($content, Paginator::class) || is_a($content, CursorPaginator::class) ? $content : collect()->merge($content);

        return view($this->template, [
            'nameId'       => $this->nameId,
            'repository'   => $repository,
            'rows'         => $rows,
            'columns'      => $columns,
            'total'        => $total,
            'iconNotFound' => $this->iconNotFound(),
            'textNotFound' => $this->textNotFound(),
            'subNotFound'  => $this->subNotFound(),
            'striped'      => $this->striped(),
            'compact'      => $this->compact(),
            'bordered'     => $this->bordered(),
            'hoverable'    => $this->hoverable(),
            'slug'         => $this->getSlug(),
            'onEachSide'   => $this->onEachSide(),
            'showHeader'   => $this->hasHeader($columns, $rows),
            'title'        => $this->title,
        ]);
    }
}

