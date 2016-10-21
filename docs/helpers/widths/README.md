# Widths

### Classes
`.<width>`
`.<width>@<breakpoint>`

### Description
Junction defines widths in twelfths. For example, to make an item one half width of the parent,
use the `one-half` class. `three-sixths` would also work.

You can define widths in
- twelfths (`six-twelfths`)
- tenths (`five-tenths`)
- eighths (`four-eighths`)
- sixths (`three-sixths`)
- quarters (`two-quarters`)
- halfs (`one-half`)
- `one-whole`

### Namespacing
You can also specify a breakpoint to have the class applied using @. For example, to have
an object be one half width at the portable breakpoint, you would use `one-half@portable`

### Markup
```html
<div class="one-half">...</div>
<div class="one-whole one-half@lap-and-up">...</div>
```
