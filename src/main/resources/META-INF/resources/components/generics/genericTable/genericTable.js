(function($) {
    $.fn.gTable = function(options) {
        const settings = $.extend({
            columns: [],
            dataSource: [],
            isLoadingResults: false,
            noRecords: false,
            onEdit: null,
            onDelete: null
        }, options);

        const createTable = function() {
            const $table = $('<table class="table"></table>');
            const $thead = $('<thead></thead>');
            const $tbody = $('<tbody></tbody>');

            const $tr = $('<tr></tr>');
            settings.columns.forEach(function(col) {
                const $th = $('<th></th>').text(col);
                $tr.append($th);
            });
            $thead.append($tr);
            $table.append($thead);

            settings.dataSource.forEach(function(row) {
                const $tr = $('<tr></tr>');
                settings.columns.forEach(function(col) {
                    const $td = $('<td></td>').text(row[col] || '');
                    $tr.append($td);
                });

                const $actionTd = $('<td></td>');
                const $editButton = $('<button class="btn btn-primary btn-sm">Editar</button>');
                const $deleteButton = $('<button class="btn btn-danger btn-sm">Eliminar</button>');
                
                $editButton.on('click', function() {
                    if (settings.onEdit) {
                        settings.onEdit(row);
                    }
                });
                
                $deleteButton.on('click', function() {
                    if (settings.onDelete) {
                        settings.onDelete(row);
                    }
                });
                
                $actionTd.append($editButton, $deleteButton);
                $tr.append($actionTd);
                $tbody.append($tr);
            });

            if (settings.noRecords) {
                const $noRecordsRow = $('<tr><td colspan="' + (settings.columns.length + 1) + '" class="text-center">No hay registros</td></tr>');
                $tbody.append($noRecordsRow);
            }

            $table.append($tbody);
            return $table;
        };

        const renderTable = function() {
            const $container = $(this);
            $container.empty();

            if (settings.isLoadingResults) {
                $container.append('<div class="loading">Cargando...</div>');
            } else {
                $container.append(createTable());
            }
        };

        return this.each(function() {
            renderTable.call(this);
        });
    };
})(jQuery);