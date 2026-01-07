import { cn } from "@/lib/utils";


type CustomTextAreaProps = {
  labelText?: string,
  labelstyle?: string,
  name?: string,
  error?: string,
  compulsoryfield?: boolean,
  maincontainerstyle ?: string,
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

const CustomTextArea = (props:CustomTextAreaProps)=> {
  const { name , value, labelText, labelstyle, error, compulsoryfield, maincontainerstyle, ...rest} = props;

  const mainContainerClass = cn("w-full mb-3", maincontainerstyle);
  const labelClasses = cn(" text-white text-sm mb-1 inline-block font-medium", labelstyle)

  return(
    <div className={mainContainerClass}>
      {
        labelText && <label
            htmlFor={name}
            className={labelClasses}
          >
            {labelText}
            {compulsoryfield && <span className="text-red-400">*</span>}
          </label>
      }
      <textarea
        {...rest}
        name={name}
        id={name}
        className="w-full border-2 border-white/20 rounded-md flex items-center h-20 text-white text-md bg-dark-background placeholder-white/50 p-1"
      />
      {error && <p className={"text-xs text-keystoneError"} data-testid="input-error">{error}</p>}
    </div>
  )
}

export default CustomTextArea