export interface CheckboxProps {
  className?: string;
  name?: string;
  value?: string;
  checked?: any;
}

// const Checkbox = ({ className, name, value, checked }: CheckboxProps) => (
//     <input className={className} type="checkbox" name={name} value={value}/>
// );

const Checkbox = ({ className, name, value, checked }: CheckboxProps) => {
    if (checked) {
        return (<input className={className} type="checkbox" name={name} value={value} checked onChange={this.onChange}/>);
    } else {
        return (<input className={className} type="checkbox" name={name} value={value} onChange={this.onChange}/>);
    }
};

export default Checkbox;
