export default class extends window.Controller {
    connect() {
        let options = {
            max_value: this.data.get('count'),
            step_size: this.data.get('step'),
            readonly: this.data.get('readonly')
        }
        $(this.element.querySelector('div')).rate(options);
        $(this.element).on('change', (event, data) => {
            this.element.querySelector('input').value = data.to;
        })
    }
}
