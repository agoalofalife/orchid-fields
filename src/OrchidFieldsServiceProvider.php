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
    public function boot(): void
    {
        $path = Dashboard::path('resources/views/fields');

        $this->loadViewsFrom($path, 'platform-fields');

        $this->publishes([
            $path => resource_path('views/vendor/platform/fields'),
        ], 'views');
    }
}
