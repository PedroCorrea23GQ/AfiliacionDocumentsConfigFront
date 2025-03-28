(function ($) {
    $.fn.searchTable = function (options) {
        const settings = $.extend({
            tableSelector: '',
            inputSelector: '',
        }, options);

        const searchInput = $(settings.inputSelector);

        if (searchInput.length === 0) {
            console.error('Input de búsqueda no encontrado.');
            return;
        }

        searchInput.on('input', function () {
            const searchTerm = $(this).val().toLowerCase();
            $(settings.tableSelector).find('tbody tr').each(function () {
                const row = $(this);
                let rowText = row.text().toLowerCase();
                if (rowText.indexOf(searchTerm) !== -1) {
                    row.show();
                } else {
                    row.hide();
                }
            });
        });

        return this;
    };
})(jQuery);