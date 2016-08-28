"use strict";
const Floating = ({ className, children, style, float }) => (<div style={style} className={`floating ${className || ""} floating--${float}`}>
    {children}
  </div>);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Floating;
const FloatingItem = ({ className, children, style }) => (<div style={style} className={`floating__item ${className || ""}`}>
    {children}
  </div>);
exports.FloatingItem = FloatingItem;
//# sourceMappingURL=index.jsx.map