(function($) {
    $(document).ready(function() {
        const tableData = [
            { position: 1, nombreDocumento: 'Documento 1' },
            { position: 2, nombreDocumento: 'Documento 2' },
            { position: 3, nombreDocumento: 'Documento 3' }
        ];

        $('#gTableContainer').gTable({
            columns: ['position', 'nombreDocumento'],
            dataSource: tableData,
            isLoadingResults: false,
            noRecords: false,
            onEdit: function(row) {
                alert('Editar: ' + row.nombreDocumento);
            },
            onDelete: function(row) {
                alert('Eliminar: ' + row.nombreDocumento);
            }
        });
    });
})(jQuery);