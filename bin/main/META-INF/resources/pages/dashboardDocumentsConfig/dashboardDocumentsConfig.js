(function ($) {
    $(document).ready(function () {

        $('#searchContainer').searchTable({
            tableSelector: '#gTableContainer',
            inputSelector: '.table-search-input'
        });

        const tableData = [
            { id: 1, tipoDocumento: 'Formato de solicitud de Reporte de Crédito Especial (RCE) persona física firmado de manera autógrafa por el intereseado', acciones: ['Edit'] },
            { id: 2, tipoDocumento: 'Identificación Oficial Vigente por ambos lados del interesado (INE / Pasaporte / Tarjeta de Residencia Permanente)', acciones: ['Edit'] },
            { id: 3, tipoDocumento: 'Constancia Situación Fiscal (No mayor a 3 meses) *Para BBVA es del mes en que se realiza el proceso', acciones: ['Edit'] },
            { id: 4, tipoDocumento: 'Comprobante de domicilio Fiscal y/o Comercial (no mayor a 3 meses) *Para BBVA es del mes en que se realiza el proceso', acciones: ['Edit'] },
            { id: 4, tipoDocumento: 'Estados Financieros de los últimos 3 años (Con base General y Estaods de Resultados) firmados por el contador y/o representante legal', acciones: ['Edit'] },
            { id: 4, tipoDocumento: 'Opinión del cumplimiento de obligaciones Fiscales ante el SAT vigente, no mayor a 3 meses. *Para BBVA y Grupo Lala se solicita del mes que se realiza el proceso', acciones: ['Edit'] }
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