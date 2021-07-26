@component($typeForm, get_defined_vars())
    <div data-controller="rate" data-rate-count="{{$count}}" data-rate-step="{{$step}}" data-rate-readonly="{{$readonly}}">
        <div data-rate-value="{{$attributes['haveRated']}}">
            <input type="hidden" {{$attributes}}>
        </div>
    </div>
@endcomponent
