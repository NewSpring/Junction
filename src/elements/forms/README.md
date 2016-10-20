# Social Buttons

### Classes
`button .*icon` - makes the icon inline and removes focus outline

### Elements
`<form>` `<fieldset>` `<legend>` `<button>`

### Description
Forms are styled mostly by element styles instead of classes. Form fieldsets have
their outline removed, and have bottom margin added. Forms also have a minimum width.

### Markup
```
<form>
  <fieldset>
    <legend>Form Title</legend>
    <input type="text" />
    <input type="text" />
  </fieldset>
  <button class="fa fa-arrow-right icon"></button>
</form>
```
