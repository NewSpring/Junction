"use strict";
const Button = ({ className, children }) => (<button className={`btn ${className}`}>{children}</button>);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
exports.ButtonFilled = ({ className, children }) => (<button className={`btn--filled ${className}`}>{children}</button>);
exports.ButtonSmall = ({ className, children }) => (<button className={`btn--small ${className}`}>{children}</button>);
exports.ButtonGray = ({ className, children }) => (<button className={`btn--dark-tertiary ${className}`}>{children}</button>);
exports.ButtonDisabled = ({ className, children }) => (<button className={`btn--disabled ${className}`}>{children}</button>);
exports.ButtonCorners = ({ className, children }) => (<button className={`btn--corners ${className}`}>{children}</button>);
exports.ButtonLight = ({ className, children }) => (<button className={`btn--light ${className}`}>{children}</button>);
exports.ButtonDarkPrimary = ({ className, children }) => (<button className={`btn--dark-primary ${className}`}>{children}</button>);
exports.ButtonDarkSecondary = ({ className, children }) => (<button className={`btn--dark-secondary ${className}`}>{children}</button>);
exports.ButtonDarkTertiary = ({ className, children }) => (<button className={`btn--dark-tertiary ${className}`}>{children}</button>);
exports.ButtonAlert = ({ className, children }) => (<button className={`btn--alert ${className}`}>{children}</button>);
exports.ButtonIcon = ({ className, children }) => (<button className={`btn--icon ${className}`}>{children}</button>);
//# sourceMappingURL=index.jsx.map