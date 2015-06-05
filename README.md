# Form-Ajaxifier

Form Ajaxifier is simple jQuery plugin to convert normal form into ajax form with minimal amount of code.

### Default Options

```
//self refers to the jQuery Form object
beforeSend: function (self) {

},
success: function (self, data, textStatus, jqXHR) {

},
error: function (self, jqXHR, textStatus, errorThrown) {

},
complete: function (self, jqXHR, textStatus) {

},
global: false
```

### Usage

```
$('form').FormAjaxifier();
```

### License

Form Ajaxifier is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)