<td class="text-{{$align}} @if(!$width) text-truncate @endif"
    @if($isFirst)
        data-column="tree-level"
    @else
        data-column="{{ $slug }}"
    @endif
    colspan="{{ $colspan }}"
    @empty(!$width)style="min-width:{{ is_numeric($width) ? $width . 'px' : $width }};"@endempty
>
    <div>
        @isset($render)
            {!! $value !!}
        @else
            {{ $value }}
        @endisset
    </div>
</td>
