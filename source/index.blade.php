@extends('_layouts.master')

@section('body')
    <section class="container max-w-6xl mx-auto px-6 py-10 md:py-12">
        <div class="flex flex-col-reverse mb-10 lg:flex-row lg:mb-24">
            <div class="mt-40">
                <h1 id="intro-docs-template" class="text-white animate-pulse ">{{ $page->siteName }}</h1>

                <h2 id="intro-powered-by-jigsaw" class="font-light mt-4 text-white">Various Fields for the Orchid Admin Panel</h2>

                <p class="text-lg text-white">Immerse yourself in the magic of Orchid ✨ <br class="hidden sm:block">Use it for forms, tables and anywhere else you need it.</p>

                <div class="flex my-10">
                    <a href="/docs/getting-started" title="{{ $page->siteName }} getting started" class="bg-blue-500 hover:bg-blue-600 font-normal text-white hover:text-white rounded mr-4 py-2 px-6">Read</a>

                    {{--                <a href="https://jigsaw.tighten.co" title="Jigsaw by Tighten" class="bg-gray-400 hover:bg-gray-600 text-blue-900 font-normal hover:text-white rounded py-2 px-6">About Jigsaw</a>--}}
                </div>
            </div>

            <img src="https://raw.githubusercontent.com/orchidsoftware/orchid.software/master/public/img/next/feature3.svg" alt="{{ $page->siteName }} large logo" class="mx-auto mb-6 lg:mb-0 w-2/5 ">
        </div>

        {{--    <hr class="block my-8 border lg:hidden">--}}

        {{--    <div class="md:flex -mx-2 -mx-4">--}}
        {{--        <div class="mb-8 mx-3 px-2 md:w-1/3">--}}
        {{--            <img src="/assets/img/icon-window.svg" class="h-12 w-12" alt="window icon">--}}

        {{--            <h3 id="intro-laravel" class="text-2xl mb-0 text-white">Templating with <br>Laravel's Blade engine</h3>--}}

        {{--            <p class="text-white">Blade is a powerful, simple, and beautiful templating language, and now you can use it for your static sites, not just your Laravel-powered apps.</p>--}}
        {{--        </div>--}}

        {{--        <div class="mb-8 mx-3 px-2 md:w-1/3">--}}
        {{--            <img src="/assets/img/icon-terminal.svg" class="h-12 w-12" alt="terminal icon">--}}

        {{--            <h3 id="intro-markdown" class="text-2xl mb-0 text-white">Use Markdown for <br>content-driven pages</h3>--}}

        {{--            <p class="text-white">Markdown is the web’s leading format for writing articles, blog posts, documentation, and more. Jigsaw makes it painless to work with Markdown content.</p>--}}
        {{--        </div>--}}

        {{--        <div class="mx-3 px-2 md:w-1/3">--}}
        {{--            <img src="/assets/img/icon-stack.svg" class="h-12 w-12" alt="stack icon">--}}

        {{--            <h3 id="intro-mix" class="text-2xl mb-0 text-white">Создавайте свои <br> красивые поля сами.</h3>--}}

        {{--            <p class="text-white">В документации вы найдете подробное описание как создать собственный Field.</p>--}}
        {{--        </div>--}}
        {{--    </div>--}}
    </section>
@endsection
