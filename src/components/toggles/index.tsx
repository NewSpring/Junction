export interface ToggleProps {
  className?: string;
}

const Toggle = ({ className }: ToggleProps) => (
  <div className="one-whole push-bottom">
    <div className="toggle grid">
      <div className={ className + " text-center" || "" }>
        Toggle Text
      </div>
    </div>
  </div>
)

export default Toggle;