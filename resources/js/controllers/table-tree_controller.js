export default class extends window.Controller {
    /**
     *
     */
    initialize()
    {
        const hiddenColumns = JSON.parse(localStorage.getItem(this.slug));

        this.hiddenColumns = hiddenColumns || [];
    }

    /**
     *
     */
    connect()
    {
        this.allowDefaultHidden();
        this.renderColumn();

        // Reverse hide all elements
        var reverseHide = function (table, element) {
            var
                $element = $(element),
                id = $element.data('id'),
                children = table.find('tr[data-parent="' + id + '"]');

            if (children.length) {
                children.each(function (i, e) {
                    reverseHide(table, e);
                });

                $element
                    .find('.bi-caret-down-fill')
                    .removeClass('bi-caret-down-fill')
                    .addClass('bi-caret-right-fill');

                children.hide();
            }
        };

        if (this.element.querySelector('.dropdown-column-menu') !== null) {
            this.element.querySelector('.dropdown-column-menu')
                .addEventListener('click', (e) => {
                    e.stopPropagation();
                })
        }

        var $table = $('.tree-table'),
            rows = $table.find('tr');

        rows.each(function (index, row) {
            var
                $row = $(row),
                level = $row.data('level'),
                id = $row.data('id'),
                $columnName = $row.find('td[data-column="tree-level"]'),
                children = $table.find('tr[data-parent="' + id + '"]');

            if (children.length) {
                var expander = $columnName.children(":first").addClass('bi-caret-right-fill');
                // var expander = $columnName.prepend('' +
                //     '<span class="treegrid-expander bi-caret-right-fill"></span>' +
                //     '');

                children.hide();

                expander.on('click', function (e) {
                    var $target = $(e.target);
                    if ($target.hasClass('bi-caret-right-fill')) {
                        $target
                            .removeClass('bi-caret-right-fill')
                            .addClass('bi-caret-down-fill');

                        let paddingLeftByPx = parseInt(children.prev().children().eq(0).css('padding-left'));
                        let newPaddingSize = paddingLeftByPx + 10;
                        children.children(":first").attr('style', "padding-left:" + newPaddingSize + "px!important");

                        children.show();
                    } else {
                        $target
                            .removeClass('bi-caret-down-fill')
                            .addClass('bi-caret-right-fill');

                        reverseHide($table, $row);
                    }
                });
            }

            $columnName.prepend('' +
                '<span class="treegrid-indent" style="width:' + 15 * level + 'px"></span>' +
                '');
        });
    }

    /**
     * Sets default hidden columns
     */
    allowDefaultHidden()
    {
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
    toggleColumn(event)
    {

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
    showColumn(columnName)
    {
        this.hiddenColumns = this.hiddenColumns.filter((value) => {
            return value !== columnName;
        });
    }

    /**
     *
     * @param columnName
     */
    hideColumn(columnName)
    {
        this.hiddenColumns.push(columnName);
    }

    /**
     * Shows or hides columns
     */
    renderColumn()
    {
        this.element.querySelectorAll('td[data-column], th[data-column]')
            .forEach((column) => {
                column.style.display = '';
            });

        const showClass = this.hiddenColumns.map(
            column => `td[data - column = "${column}"],
            th[data - column = "${column}"]`,
        ).join();

        if (showClass.length < 1) {
            return;
        }

        this.element.querySelectorAll(showClass)
            .forEach((column) => {
                column.style.display = 'none';
            });

        const checkBoxEnable = this.hiddenColumns.map(
            column => `input[data - column = "${column}"]`,
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
    get slug()
    {
        return this.data.get('slug');
    }
}
