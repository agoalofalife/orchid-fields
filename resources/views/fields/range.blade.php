@component($typeForm, get_defined_vars())
    <div data-controller="range" data-range-value="{{$value}}">
        <input type="text" class="js-range-slider"  {{$attributes}}
        data-type="double"
               data-min="{{$min}}"
               data-max="{{$max}}"
               data-from="{{$from}}"
               data-to="{{$to}}"
               data-grid="{{$hasGrid}}"
        />
    </div>
@endcomponent
