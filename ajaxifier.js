/*
    FormAjaxifier
    @author Jeevan@blacklizard
*/

(function ($) {

    $.fn.FormAjaxifier = function (options) {

        var settings = $.extend({
            beforeSend: function (self) {},
            success: function (self, data, textStatus, jqXHR) {},
            error: function (self, jqXHR, textStatus, errorThrown) {},
            complete: function (self, jqXHR, textStatus) {},
            global: false
        }, options);

        return this.each(function () {

            if (!$(this).hasClass('no-ajax')) {
                return $(this).submit(function (event) {
                    var self = $(this);
                    $.ajax({
                        method: self.attr('method'),
                        url: self.attr('action'),
                        data: self.serialize(),
                        global: settings.global,
                        beforeSend: function () {
                            settings.beforeSend(self);
                        },
                        success: function (data, textStatus, jqXHR) {
                            settings.success(self, data, textStatus, jqXHR);
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            settings.error(self, jqXHR, textStatus, errorThrown);
                        },
                        complete: function (jqXHR, textStatus) {
                            settings.complete(self, jqXHR, textStatus);
                        }
                    });
                    event.preventDefault();
                    event.stopImmediatePropagation();
                });
            }
        });
    }

}(jQuery));
