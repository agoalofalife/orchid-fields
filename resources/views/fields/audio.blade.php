@component($typeForm, get_defined_vars())
    <div data-controller="audio">
        @if($attributes['value'])
            <div class="form-group mb-0">
                <audio src='{{$attributes['value']}}' preload='{{$attributes['preload']}}'></audio>
                <button type="button" class='btn btn-default' data-action="click->audio#audio_play_pause">
                    <x-orchid-icon path="{{$attributes['playIcon']}}" class="{{$attributes['playIcon']}}"/>
                    <x-orchid-icon path="{{$attributes['pauseIcon']}}" class="{{$attributes['pauseIcon']}} d-none"/>
                </button>
            </div>
        @endif
    </div>
@endcomponent
