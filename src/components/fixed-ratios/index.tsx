export interface RatioProps {
  className?: string;
  ratioClass?: string;
  styles?: any;
}

const FixedRatio = ({ className, ratioClass, styles }: RatioProps) => (
  <div className={ className || "one-whole" }>
    <div className={ratioClass + " background--fill"} style={styles || ""}>
      <div className="raio__item" />
    </div>
  </div>
);

export default FixedRatio;
