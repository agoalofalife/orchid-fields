<td class="text-{{$align}} @if(!$width) text-truncate @endif"
    colspan="{{ $colspan }}"
    style="
    @empty(!$width)
    min-width:{{ is_numeric($width) ? $width . 'px' : $width }};
    @endempty
    @if($isFirst)
    display:flex;
    @endif
    "
>
    <div style="padding-left: 2%">
        @isset($render)
            {!! $value !!}
        @else
            {{ $value }}
        @endisset
    </div>
</td>
