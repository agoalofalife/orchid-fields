import Zooming from 'zooming'
export default class extends window.Controller {
    connect() {
        const zooming = new Zooming({
            onBeforeOpen: function() {
                var table = document.querySelector('.table-responsive');
                var form = document.querySelector('#post-form');
                var itHasHappenedInTable = table !== null;
                var itHasHappenedInPostForm = form !== null;
                if (itHasHappenedInTable) {
                    document.querySelector('.table-responsive').style.overflowX = 'visible';
                }
                if (itHasHappenedInPostForm) {
                    form.classList.remove('overflow-hidden');
                }
            },
            onClose: function() {
                var table = document.querySelector('.table-responsive');
                var form = document.querySelector('#post-form');
                var itHasHappenedInTable = table !== null;
                var itHasHappenedInPostForm = form !== null;
                if (itHasHappenedInTable) {
                    document.querySelector('.table-responsive').style.overflowX = 'auto';
                }
                if (itHasHappenedInPostForm) {
                    form.classList.add('overflow-hidden');
                }
            },
            customSize: this.data.get('zoompercent') || 100 + '%'
        })

        zooming.listen(this.element.querySelector('.image-zoom'))
    }
}
