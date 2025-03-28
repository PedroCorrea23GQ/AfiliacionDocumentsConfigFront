(function ($) {
    $.fn.gTable = function (options) {
        const settings = $.extend({
            columns: [],
            columnKeys: {},
            hiddenColumns: [],
            dataSource: [],
            isLoadingResults: false,
            noRecords: false,
            pageSize: 10,
            columnWidths: [],
            onEdit: null,
            onDelete: null
        }, options);

        let currentPage = 1;
        let totalPages = Math.ceil(settings.dataSource.length / settings.pageSize);

        const createTable = function () {
            const $table = $('<table class="table"></table>');
            const $thead = $('<thead></thead>');
            const $tbody = $('<tbody></tbody>');

            const $tr = $('<tr></tr>');
            settings.columns.forEach((col, index) => {
                if (!settings.hiddenColumns.includes(col)) {
                    const $th = $('<th class="header-cell"></th>').text(col);
                    if (settings.columnWidths[index]) {
                        $th.css('width', settings.columnWidths[index]);
                    }
                    $tr.append($th);
                }
            });
            $thead.append($tr);
            $table.append($thead);

            const startIndex = (currentPage - 1) * settings.pageSize;
            const endIndex = startIndex + settings.pageSize;
            const pageData = settings.dataSource.slice(startIndex, endIndex);

            pageData.forEach(row => {
                const $tr = $('<tr class="data-row"></tr>');

                settings.columns.forEach((col, index) => {
                    const columnKey = settings.columnKeys[col] || col;
                    if (!settings.hiddenColumns.includes(col)) {
                        const $td = $('<td class="data-cell"></td>');

                        if (col === 'Acciones') {
                            $td.addClass('text-center');
                            row.acciones.forEach(action => {
                                switch (action) {
                                    case 'Edit':
                                        const $editButton = $(`
                                            <button class="btn btn-primary btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar">
                                                <i class="fa-solid fa-file-pen"></i>
                                            </button>
                                        `);
                                        $editButton.on('click', () => settings.onEdit && settings.onEdit(row));
                                        $td.append($editButton);
                                        break;
                        
                                    case 'Delete':
                                        const $deleteButton = $(`
                                            <button class="btn btn-danger btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Eliminar">
                                                <i class="fa-solid fa-trash"></i>
                                            </button>
                                        `);
                                        $deleteButton.on('click', () => settings.onDelete && settings.onDelete(row));
                                        $td.append($deleteButton);
                                        break;
                                }
                            });

                            setTimeout(() => { $('[data-bs-toggle="tooltip"]').tooltip(); }, 100);
                        } else {
                            $td.text(row[columnKey] || '');
                        }

                        if (settings.columnWidths[index]) {
                            $td.css('width', settings.columnWidths[index]);
                        }
                        $tr.append($td);
                    }
                });

                $tbody.append($tr);
            });

            if (settings.noRecords && pageData.length === 0) {
                const $noRecordsRow = $('<tr><td colspan="' + settings.columns.length + '" class="text-center">No hay registros</td></tr>');
                $tbody.append($noRecordsRow);
            }

            $table.append($tbody);
            return $table;
        };

        const renderTable = function () {
            const $container = $(this);
            $container.empty();

            if (settings.isLoadingResults) {
                $container.append('<div class="loading">Cargando...</div>');
            } else {
                $container.append(createTable());
            }
        };

        return this.each(function () {
            renderTable.call(this);
        });
    };
})(jQuery);