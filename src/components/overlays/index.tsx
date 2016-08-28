
export interface OverlayProps {
  className?: string;
  children?: any;
}

const Overlay = ({ className, children }: OverlayProps) => (
  <div className={className || ""}>
    <div className="overlay__item">
      <h1>{children}</h1>
    </div>
  </div>
);

export default Overlay;
