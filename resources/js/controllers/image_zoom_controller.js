import Zooming from 'zooming'
export default class extends window.Controller {
    connect() {
        const zooming = new Zooming({
            onBeforeOpen: function() {
                var tableResponsive = document.querySelector('.table-responsive');
                var table = document.querySelector('.table');
                var form = document.querySelector('#post-form');
                var itHasHappenedInResponsiveTable = tableResponsive !== null;
                var itHasHappenedInTable = table !== null;
                var itHasHappenedInPostForm = form !== null;
                if (itHasHappenedInResponsiveTable) {
                    document.querySelector('.table-responsive').style.overflowX = 'visible';
                }
                if (itHasHappenedInTable) {
                    table.style.overflow = 'visible';
                }
                if (itHasHappenedInPostForm) {
                    form.classList.remove('overflow-hidden');
                }
            },
            onClose: function() {
                var tableResponsive = document.querySelector('.table-responsive');
                var table = document.querySelector('.table');
                var form = document.querySelector('#post-form');
                var itHasHappenedInResponsiveTable = tableResponsive !== null;
                var itHasHappenedInTable = table !== null;
                var itHasHappenedInPostForm = form !== null;
                if (itHasHappenedInResponsiveTable) {
                    document.querySelector('.table-responsive').style.overflowX = 'auto';
                }
                if (itHasHappenedInTable) {
                    table.style.overflow = 'hidden';
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
