export default class extends window.Controller {
    connect() {
        let value = this.data.get('value');

        let input = this.element.querySelector(".js-range-slider");

        $(input).ionRangeSlider({
            onFinish: function (data) {
                input.dispatchEvent(new Event('change'));
            },
        });

        let range = $(input).data("ionRangeSlider");

        if (value !== null) {
            let [from, to] = value.split(';');
            range.update({
                from,to
            });
        }
    }
}
