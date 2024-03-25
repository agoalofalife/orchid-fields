<td class="text-{{$align}} @if(!$width) text-truncate @endif"
{{--    data-column="{{ $slug }}"--}}
    colspan="{{ $colspan }}"
        @style([
        "min-width:$width;" => $width,
        "$style" => $style,
         "display:flex" => $isFirst
        ])
>
    <div style="padding-left: 2%">
        @isset($render)
            {!! $value !!}
        @else
            {{ $value }}
        @endisset
    </div>
</td>
