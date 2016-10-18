const Overlay = ({ className, children }) => (
  <div className={className || ""}>
    <div className="overlay__item">
      <h1>{children}</h1>
    </div>
  </div>
);

export default Overlay;
