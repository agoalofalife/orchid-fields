export default class extends window.Controller {
    connect() {
        let value = this.data.get('value');
        $(this.element.querySelector(".js-range-slider")).ionRangeSlider();
        let range = $(".js-range-slider").data("ionRangeSlider");

        if (value !== null) {
            let [from, to] = value.split(';');
            range.update({
                from,to
            });
        }
    }
}
