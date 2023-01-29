export default class extends window.Controller {
    connect() {
        const audio = this.element.querySelector('audio')

        $(audio).on('ended', (event) => {
            const controlPlayBtn = $(this.element.querySelector('.control-play'))
            const controlPauseBtn = $(this.element.querySelector('.control-pause'))

            controlPlayBtn.removeClass('d-none')
            controlPauseBtn.addClass('d-none')
        })
    }

    audio_play_pause() {
        const audio = this.element.querySelector('audio')
        const button = $(this.element.querySelector('button'))
        const controlPlayBtn = button.find('.control-play')
        const controlPauseBtn = button.find('.control-pause')

        if (audio.paused) {
            controlPlayBtn.addClass('d-none')
            controlPauseBtn.removeClass('d-none')
            audio.play()
        } else if (audio.played) {
            controlPlayBtn.removeClass('d-none')
            controlPauseBtn.addClass('d-none')

            audio.pause()
        }
    }
}
