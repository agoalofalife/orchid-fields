// import ImageZoom from "js-image-zoom";
import Zooming from 'zooming'
export default class extends window.Controller {
    connect() {
        const zooming = new Zooming({
            onBeforeOpen: function () {
                document.querySelector('.table-responsive').style.overflowX = 'visible'
            },
            onClose: function () {
                document.querySelector('.table-responsive').style.overflowX = 'auto'
            },
            customSize: this.data.get('zoompercent') || 100 + '%'
        })

        zooming.listen(this.element.querySelector('.image-zoom'))
    }
}
