import { cn } from "@/lib/utils";


const styles={
  btnBody:`flex justify-center items-center bg-gray-400 w-full h-12 text-white rounded-md cursor-pointer`,
  btnBody2:`h-12 text-white flex justify-center items-center`,
  textStyle:`text-black text-lg font-bold`
}

type CustomButtonProps = {
  onClick ?: React.MouseEventHandler,
  containerStyle?: string,
  buttonText: string,
  type?: "submit" | "reset" | "button",
  textStyle?: string,
  disabled?: boolean,
  leftIcon?: React.ReactElement
}

const CustomButton=({onClick,containerStyle,buttonText,type, textStyle, disabled, leftIcon}: CustomButtonProps)=>{

  const buttonClasses = cn(styles.btnBody,containerStyle );
  const textClasses = cn(styles.textStyle, textStyle)

  return(
    <button
      className={buttonClasses}
      onClick={onClick}
      type={type ? type : "button"}
      disabled={disabled}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      <p className={textClasses}>{buttonText}</p>
    </button>
  )
}

export default CustomButton