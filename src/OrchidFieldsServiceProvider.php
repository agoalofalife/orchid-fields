<?php

declare(strict_types=1);

namespace agoalofalife\Orchid;

use agoalofalife\Orchid\Layouts\TreeTable;
use Illuminate\Support\ServiceProvider;
use Orchid\Platform\Dashboard;
use Orchid\Screen\LayoutFactory;
use Orchid\Screen\Layouts\Table;

class OrchidFieldsServiceProvider extends ServiceProvider
{
    /**
     * Boot the application events.
     */
    public function boot(Dashboard $dashboard): void
    {
        $path = dirname(__DIR__, 1) . '/resources/views/';
        $this->loadViewsFrom($path, 'platform-fields');

        $dashboard->registerResource('scripts', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js');
        $dashboard->registerResource('scripts', asset('/vendor/orchid-fields/js/orchid_fields.js'));
        $dashboard->registerResource('scripts', 'https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/js/ion.rangeSlider.min.js');
        $dashboard->registerResource('stylesheets', 'https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/css/ion.rangeSlider.min.css');

        // tree table https://www.jqueryscript.net/table/simple-tree-table.html
        LayoutFactory::macro('treeTable', function (string $target, array $columns, string $nameId = 'id') {
            return new class($target, $columns, $nameId) extends TreeTable
            {
                /**
                 * @var array
                 */
                protected $columns;

                public function __construct(string $target, array $columns, string $nameId)
                {
                    $this->target = $target;
                    $this->columns = $columns;
                    $this->nameId = $nameId;
                }

                public function columns(): array
                {
                    return $this->columns;
                }
            };
        });
        $this->registerAssets();
    }

    /**
     * Register assets.
     *
     * @return $this
     */
    protected function registerAssets(): self
    {
        $sourcePath =  dirname(__DIR__, 1) . '/public/js/';
        $this->publishes([
            $sourcePath   => public_path('vendor/orchid-fields/js/')
        ], 'orchid-extra-fields');

        return $this;
    }
}
