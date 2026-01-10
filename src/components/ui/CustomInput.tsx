import { cn } from "@/lib/utils";
import { useState } from "react"


const styles={
	container:`rounded-md flex items-center h-12 overflow-hidden bg-white/10 border border-gray-400`,
	mainInput:`block  w-full h-full rounded-sm outline-none pl-2 text-black text-md placeholder-gray-400`,
	errorMsg:`text-xs text-keystoneError`,
	dangerBorder:`border-keystoneError`,
	blueBorder:`border-keystonePrimaryBlue`,
	labelStyle:`text-black text-sm mb-1 inline-block font-medium`,
}

// NB
// containerStyle: styles the entire body which also houses the label
// inputCaseStyle: styles just the area around the icon and the input
// inputStyle: styles the input itself

// Example
{/* <CustomInput
    labeltext={"NIP Transfer Limit"}
    labelstyle={`mb-0 text-gray-400`}
    containerstyle={`border-2 border-gray-200 p-2 py-0 mb-10`}
    inputcasestyle={`border-0 h-8`}
    inputstyle={`pl-0 text-md`}
    defaultValue="1,000,000"
/> */}

type CustomInputProps ={
	containerstyle?: string,
	labeltext?: string,
	labelrightcomp?: React.ReactElement,
	name?: string,
	labelstyle?: string,
	lefticon?: React.ReactElement,
	rightIcon?: React.ReactElement,
	inputcasestyle?: string,
	type?: React.HTMLInputTypeAttribute,
	inputstyle?: string,
	error?: string,
	compulsoryfield ?: boolean,
} & React.InputHTMLAttributes<HTMLInputElement>

const CustomInput =(props: CustomInputProps)=>{
	const {containerstyle, labeltext, labelrightcomp, labelstyle, 
		lefticon, rightIcon,inputcasestyle, inputstyle, error, compulsoryfield, type, name, ...rest } = props;
	const [onFocus, setOnFocus] = useState(false);

	const labelClasses = cn(styles.labelStyle, props.labelstyle);
	const inputContainerClasses = cn(styles.container, props.inputcasestyle, onFocus && styles.blueBorder, props.error && styles.dangerBorder );
	const inputClasses = cn(styles.mainInput, props.inputstyle);


	return(
		<div className={containerstyle}>
			<div className="flex justify-between">
				{
					labeltext && <label 
						htmlFor={name}
						className={labelClasses}
					>
						{labeltext}
						{compulsoryfield && <span className="text-red-400">*</span>}
					</label>
				}
				{labelrightcomp && labelrightcomp}
			</div>
			<div className={inputContainerClasses}> 
				{lefticon && lefticon}

				<input 
					{...rest}
					type={type ? type :'text'}
					name={name}
					id={name}
					className={inputClasses}
					onFocus={()=>setOnFocus(true)}
					onBlur={()=>setOnFocus(false)}
					data-testid="the-input"
				/>

				{rightIcon && rightIcon}
			</div>
			{error && <p className={styles.errorMsg} data-testid="input-error">{error}</p>}
		</div>
	)
}

export default CustomInput