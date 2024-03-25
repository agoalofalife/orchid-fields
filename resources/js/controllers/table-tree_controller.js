import tree from '@kanety/jquery-simple-tree-table';

export default class extends window.Controller {

    /**
     *
     */
    initialize() {
        const hiddenColumns = JSON.parse(localStorage.getItem(this.slug));

        this.hiddenColumns = hiddenColumns || [];

        // remove preloader
        document.getElementById('table-tree-loader').classList.add('d-none');
        document.getElementById('table-tree').classList.remove('d-none');

    }

    /**
     *
     */
    connect() {

        this.allowDefaultHidden();
        this.renderColumn();


        if (this.element.querySelector('.dropdown-column-menu') !== null) {
            this.element.querySelector('.dropdown-column-menu')
                .addEventListener('click', (e) => {
                    e.stopPropagation();
                })
        }

        $(this.element).simpleTreeTable({
            opened:'close',
        });
    }

    /**
     * Sets default hidden columns
     */
    allowDefaultHidden() {
        if (localStorage.getItem(this.slug) !== null) {
            return;
        }

        this.element.querySelectorAll('input[data-default-hidden="true"]')
            .forEach((checkbox) => {
                this.hideColumn(checkbox.dataset.column);
            });
    }

    /**
     *
     * @param event
     */
    toggleColumn(event) {

        const columnName = event.target.dataset.column;

        this.hiddenColumns.includes(columnName)
            ? this.showColumn(columnName)
            : this.hideColumn(columnName);

        const columns = JSON.stringify(this.hiddenColumns);
        this.renderColumn();
        localStorage.setItem(this.slug, columns);
    }

    /**
     *
     * @param columnName
     */
    showColumn(columnName) {
        this.hiddenColumns = this.hiddenColumns.filter((value) => {
            return value !== columnName;
        });
    }

    /**
     *
     * @param columnName
     */
    hideColumn(columnName) {
        this.hiddenColumns.push(columnName);
    }

    /**
     * Shows or hides columns
     */
    renderColumn() {
        this.element.querySelectorAll('td[data-column], th[data-column]')
            .forEach((column) => {
                column.style.display = '';
            });

        const showClass = this.hiddenColumns.map(
            column => `td[data-column="${column}"], th[data-column="${column}"]`,
        ).join();

        if (showClass.length < 1){
            return;
        }

        this.element.querySelectorAll(showClass)
            .forEach((column) => {
                column.style.display = 'none';
            });

        const checkBoxEnable = this.hiddenColumns.map(
            column => `input[data-column="${column}"]`,
        ).join();

        this.element.querySelectorAll(checkBoxEnable)
            .forEach((checkbox) => {
                checkbox.checked = false;
            });
    }

    /**
     *
     * @returns {string}
     */
    get slug() {
        return this.data.get('slug');
    }
}
