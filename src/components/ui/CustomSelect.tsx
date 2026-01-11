import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { ChangeEvent } from "react";

const styles={
	mainInput:`w-full border border-gray-400 rounded-md flex items-center bg-white/10 backdrop-blur-sm h-12 invalid:text-gray-400 text-black text-md`,
}

interface CustomSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  containerstyle ?: string,
  options: { key: string; value: string | number }[]; 
  onSelectChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  placeholder?: string;
  labelText?: string;
  compulsoryField?: boolean;
  inputstyle?: string;
}


const CustomSelect = forwardRef<HTMLSelectElement, CustomSelectProps>((props, ref) => {
  const {
    options,
    onSelectChange,
    error,
    placeholder,
    labelText,
    compulsoryField,
    name,
    containerstyle,
    ...rest
  } = props;
  const inputClasses = cn(styles.mainInput, props.inputstyle);
 

  return (
    <div className={containerstyle}>
      <div className="flex justify-between">
        {
          labelText && (
            <label htmlFor={name} className="text-black text-sm mb-1 inline-block font-medium">
              {labelText}
              {compulsoryField && <span className="text-red-400">*</span>}
            </label>
          )
        }
      </div>
      
      <select
        {...rest}
        ref={ref}
        id={name}
        name={name}
        className={inputClasses}
      >
        
        <option value="" disabled selected hidden className="text-gray-500">
          {placeholder || "Select an option"}
        </option>

        {options.map((item: any, index: number) => {
          return (
            <option key={index} value={item.value} className="text-black">
              {item.key}
            </option>
          )
        })}
      </select>
      {error && <p className={"text-xs text-keystoneError"} data-testid="input-error">{error}</p>}
    </div>
  )
});

// Required for debugging in React DevTools
CustomSelect.displayName = "CustomSelect";

export default CustomSelect