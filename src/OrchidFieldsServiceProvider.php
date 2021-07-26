<?php

declare(strict_types=1);

namespace agoalofalife\Orchid;

use Illuminate\Support\ServiceProvider;
use Orchid\Platform\Dashboard;
use Orchid\Platform\Providers\FoundationServiceProvider;

class OrchidFieldsServiceProvider extends ServiceProvider
{
    /**
     * Boot the application events.
     */
    public function boot(Dashboard $dashboard): void
    {
        $path = dirname(__DIR__, 1) . '/resources/views/';
        $this->loadViewsFrom($path, 'platform-fields');

        $dashboard->registerResource('scripts', '/js/orchid_fields.js');
        $this->registerAssets();
    }

    /**
     * Register assets.
     *
     * @return $this
     */
    protected function registerAssets(): self
    {
        $fieldsPath =  dirname(__DIR__, 1) . '/public/js/';
        $this->publishes([
            $fieldsPath   => public_path('js/')
        ], 'orchid-extra-fields');

        return $this;
    }
}
