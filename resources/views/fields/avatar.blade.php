@component($typeForm, get_defined_vars())
    <div style="display: flex;flex-direction: column;align-items: @if($left) flex-start @elseif($right) flex-end @else center @endif" >
        <img src="{{$value}}"  class="rounded-circle mb-3" style="width: {{$heightByPercent}}%;" alt="Avatar" />
        <div class="mb-2" style="align-self: @if($left) flex-start @elseif($right) flex-end @else center @endif">
        <strong style="font-size: {{$fontSizeByPx}}px">{{$nameAvatar}}</strong></div>
    </div>
@endcomponent
