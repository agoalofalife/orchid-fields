<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="description" content="{{ $page->description ?? $page->siteDescription }}">

        <meta property="og:site_name" content="{{ $page->siteName }}"/>
        <meta property="og:title" content="{{ $page->title ?  $page->title . ' | ' : '' }}{{ $page->siteName }}"/>
        <meta property="og:description" content="{{ $page->description ?? $page->siteDescription }}"/>
        <meta property="og:url" content="{{ $page->getUrl() }}"/>
        <meta property="og:image" content="/assets/img/logo.png"/>
        <meta property="og:type" content="website"/>

        <meta name="twitter:image:alt" content="{{ $page->siteName }}">
        <meta name="twitter:card" content="summary_large_image">

        @if ($page->docsearchApiKey && $page->docsearchIndexName)
            <meta name="generator" content="tighten_jigsaw_doc">
        @endif

        <title>{{ $page->siteName }}{{ $page->title ? ' | ' . $page->title : '' }}</title>

        <link rel="home" href="{{ $page->baseUrl }}">
        <link rel="icon" href="/favicon.ico">

        @stack('meta')

        @if ($page->production)
            <!-- Insert analytics code here -->
        @endif

        <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,300i,400,400i,700,700i,800,800i" rel="stylesheet">
        <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">

        @if ($page->docsearchApiKey && $page->docsearchIndexName)
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css" />
        @endif
    </head>

    <body class="flex flex-col justify-between min-h-screen bg-purple text-gray-800 leading-normal font-sans">
        <header class="flex items-center shadow bg-purple  h-24 mb-8 py-4" role="banner">
            <div class="container flex items-center max-w-8xl mx-auto px-4 lg:px-8">
                <div class="flex items-center p-3 p-5 text-center">
                    <a href="/" title="{{ $page->siteName }} home" class="inline-flex items-center">
                        <img class="h-8 md:h-5 mr-3" src="https://orchid.software/img/next/logo-full.svg" alt="{{ $page->siteName }} logo" />
                        <h1 class="text-lg md:text-2xl text-white font-semibold  my-0 pr-4">{{ $page->siteName }}</h1>
                    </a>
                </div>
                <div class="flex flex-1 justify-end items-center text-right md:pl-10">
                    <a href="https://github.com/agoalofalife/orchid-fields" class="nav-link">
                        <svg width="2.5em" height="2.5em" viewBox="0 0 30 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.1367 23.0703C10.1367 22.9531 10.0195 22.8359 9.84375 22.8359C9.66797 22.8359 9.55078 22.9531 9.55078 23.0703C9.55078 23.1875 9.66797 23.3047 9.84375 23.2461C10.0195 23.2461 10.1367 23.1875 10.1367 23.0703ZM8.32031 22.7773C8.32031 22.8945 8.4375 23.0703 8.61328 23.0703C8.73047 23.1289 8.90625 23.0703 8.96484 22.9531C8.96484 22.8359 8.90625 22.7188 8.73047 22.6602C8.55469 22.6016 8.37891 22.6602 8.32031 22.7773ZM10.957 22.7188C10.7812 22.7188 10.6641 22.8359 10.6641 23.0117C10.6641 23.1289 10.8398 23.1875 11.0156 23.1289C11.1914 23.0703 11.3086 23.0117 11.25 22.8945C11.25 22.7773 11.0742 22.6602 10.957 22.7188ZM14.7656 0.21875C6.67969 0.21875 0.46875 6.42969 0.46875 14.5156C0.46875 21.0195 4.51172 26.5859 10.3711 28.5781C11.1328 28.6953 11.3672 28.2266 11.3672 27.875C11.3672 27.4648 11.3672 25.4727 11.3672 24.2422C11.3672 24.2422 7.26562 25.1211 6.38672 22.4844C6.38672 22.4844 5.74219 20.7852 4.80469 20.375C4.80469 20.375 3.45703 19.4375 4.86328 19.4375C4.86328 19.4375 6.32812 19.5547 7.14844 20.9609C8.4375 23.2461 10.5469 22.6016 11.4258 22.1914C11.543 21.2539 11.8945 20.6094 12.3633 20.1992C9.08203 19.8477 5.74219 19.3789 5.74219 13.7539C5.74219 12.1133 6.21094 11.3516 7.14844 10.2969C6.97266 9.88672 6.50391 8.36328 7.32422 6.3125C8.49609 5.96094 11.3672 7.89453 11.3672 7.89453C12.5391 7.54297 13.7695 7.42578 15 7.42578C16.2891 7.42578 17.5195 7.54297 18.6914 7.89453C18.6914 7.89453 21.5039 5.90234 22.7344 6.3125C23.5547 8.36328 23.0273 9.88672 22.9102 10.2969C23.8477 11.3516 24.4336 12.1133 24.4336 13.7539C24.4336 19.3789 20.9766 19.8477 17.6953 20.1992C18.2227 20.668 18.6914 21.5469 18.6914 22.9531C18.6914 24.8867 18.6328 27.3477 18.6328 27.8164C18.6328 28.2266 18.9258 28.6953 19.6875 28.5195C25.5469 26.5859 29.5312 21.0195 29.5312 14.5156C29.5312 6.42969 22.9102 0.21875 14.7656 0.21875ZM6.15234 20.4336C6.03516 20.4922 6.09375 20.668 6.15234 20.7852C6.26953 20.8438 6.38672 20.9023 6.50391 20.8438C6.5625 20.7852 6.5625 20.6094 6.44531 20.4922C6.32812 20.4336 6.21094 20.375 6.15234 20.4336ZM5.50781 19.9648C5.44922 20.082 5.50781 20.1406 5.625 20.1992C5.74219 20.2578 5.85938 20.2578 5.91797 20.1406C5.91797 20.082 5.85938 20.0234 5.74219 19.9648C5.625 19.9062 5.56641 19.9062 5.50781 19.9648ZM7.38281 22.0742C7.32422 22.1328 7.32422 22.3086 7.5 22.4258C7.61719 22.543 7.79297 22.6016 7.85156 22.4844C7.91016 22.4258 7.91016 22.25 7.79297 22.1328C7.67578 22.0156 7.5 21.957 7.38281 22.0742ZM6.73828 21.1953C6.62109 21.2539 6.62109 21.4297 6.73828 21.5469C6.85547 21.6641 6.97266 21.7227 7.08984 21.6641C7.14844 21.6055 7.14844 21.4297 7.08984 21.3125C6.97266 21.1953 6.85547 21.1367 6.73828 21.1953Z"></path>
                        </svg>
                    </a>
                </div>
{{--                <div class="flex flex-1 justify-end items-center text-right md:pl-10">--}}
{{--                    @if ($page->docsearchApiKey && $page->docsearchIndexName)--}}
{{--                        @include('_nav.search-input')--}}
{{--                    @endif--}}
{{--                </div>--}}
            </div>

            @yield('nav-toggle')
        </header>

        <main role="main" class="w-full flex-auto">
            @yield('body')
        </main>

        <script src="{{ mix('js/main.js', 'assets/build') }}"></script>

        @stack('scripts')

        <footer class="bg-purple text-center text-sm mt-12 py-4" role="contentinfo">
            <ul class="flex flex-col md:flex-row justify-center">
                <li class="md:mr-2 text-white">
                    &copy; <a href="https://github.com/agoalofalife" title="agoalofalife website">agoalofalife</a> {{ date('Y') }}.
                </li>
            </ul>
        </footer>
    </body>
</html>
