@component($typeForm, get_defined_vars())
    <div data-controller="image-zoom"
         data-image-zoom-zoompercent="{{$zoomPercent}}">
            <img src="{{$value}}"  {{$attributes}} style="width: {{$widthPercent}}%" class="image-zoom"/>
    </div>
@endcomponent
