<?php

namespace agoalofalife\Orchid\Layouts;

use Illuminate\Contracts\View\Factory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\View\View;
use Orchid\Screen\Repository;
use Orchid\Screen\TD;

class TDTree extends TD
{
    /**
     * Builds content for the column.
     *
     * @param Repository|Model $repository
     *
     * @return Factory|View
     */
    public function buildTd($repository, ?object $loop = null, bool $isFirstColumn = false)
    {
        $value = $this->render ? $this->handler($repository, $loop) : $repository->getContent($this->name);

        return view('platform-fields::partials.layouts.td', [
            'isFirst' => $isFirstColumn,
            'align' => $this->align,
            'value' => $value,
            'render' => $this->render,
            'slug' => $this->sluggable(),
            'width' => $this->width,
            'colspan' => $this->colspan,
            'style'   => $this->style,
            'class'   => $this->class,
        ]);
    }
}
