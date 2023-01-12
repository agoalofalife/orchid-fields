<?php

declare(strict_types=1);

namespace agoalofalife\Orchid;

use Illuminate\Support\ServiceProvider;
use Orchid\Platform\Dashboard;

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
        $dashboard->registerResource('scripts', '/vendor/orchid-fields/js/orchid_fields.js');
        $dashboard->registerResource('scripts', 'https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/js/ion.rangeSlider.min.js');
        $dashboard->registerResource('stylesheets', 'https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/css/ion.rangeSlider.min.css');
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
