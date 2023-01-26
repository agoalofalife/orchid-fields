import Zooming from 'zooming'
export default class extends window.Controller {
    connect() {
        const zooming = new Zooming({
            onBeforeOpen: function () {
                var table = document.querySelector('.table-responsive');
                var itHasHappenedInTable = table !== null;
                if (itHasHappenedInTable) {
                    document.querySelector('.table-responsive').style.overflowX = 'visible'
                }
            },
            onClose: function () {
                var table = document.querySelector('.table-responsive');
                var itHasHappenedInTable = table !== null;
                if (itHasHappenedInTable) {
                    document.querySelector('.table-responsive').style.overflowX = 'auto'
                }

            },
            customSize: this.data.get('zoompercent') || 100 + '%'
        })

        zooming.listen(this.element.querySelector('.image-zoom'))
    }
}
