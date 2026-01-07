<td class="text-{{$align}} @if(!$width) text-truncate @endif"
    {{--    data-column="{{ $slug }}"--}}
    colspan="{{ $colspan }}"
    @style([
    "min-width:$width;" => $width,
    "$style" => $style,
    ])
>
    @if($isFirst)
        <div style="display: flex;">
            @endif
            <div style="padding-left: 2%;"
            >
                @isset($render)
                    {!! $value !!}
                @else
                    {{ $value }}
                @endisset
            </div>
            @if($isFirst)
        </div>
    @endif
</td>
