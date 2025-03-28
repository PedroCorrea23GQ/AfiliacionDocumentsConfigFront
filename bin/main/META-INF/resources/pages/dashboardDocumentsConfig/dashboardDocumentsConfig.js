(function ($) {
    $(document).ready(function () {
        const tableData = [
            { id: 1, tipoDocumento: 'Factura', acciones: ['Edit'] },
            { id: 2, tipoDocumento: 'Recibo', acciones: ['Edit'] },
            { id: 3, tipoDocumento: 'Contrato', acciones: ['Edit'] },
            { id: 4, tipoDocumento: 'Contrato2', acciones: ['Edit'] }
        ];

        $('#gTableContainer').gTable({
            columns: ['ID', 'Tipo Documento', 'Acciones'],
            columnKeys: { 
                'ID': 'id', 
                'Tipo Documento': 'tipoDocumento', 
                'Acciones': 'acciones'
            },
            hiddenColumns: ['ID'],
            dataSource: tableData,
            isLoadingResults: false,
            noRecords: false,
            columnWidths: ['0%','90%', '10%'],
            onEdit: function (row) {
                alert('Editar: ' + row.tipoDocumento);
            },
            onDelete: function (row) {
                alert('Eliminar: ' + row.tipoDocumento);
            }
        });
    });
})(jQuery);