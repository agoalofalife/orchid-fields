// import ImageZoom from "js-image-zoom";
import Zooming from 'zooming'
export default class extends window.Controller {
    connect() {
        const zooming = new Zooming({
            customSize: this.data.get('size') || 100 + '%'
        })

        zooming.listen(this.element.querySelector('.image-zoom'))
    }
}
