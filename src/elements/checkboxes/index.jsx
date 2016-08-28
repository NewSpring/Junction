"use strict";
const Checkbox = ({ className, name, value, checked }) => {
    if (checked) {
        return <input className={className} type="checkbox" name={name} value={value} checked onChange={this.onChange}/>;
    }
    else {
        return <input className={className} type="checkbox" name={name} value={value} onChange={this.onChange}/>;
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Checkbox;
//# sourceMappingURL=index.jsx.map