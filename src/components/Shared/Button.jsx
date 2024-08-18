

const Button = ({text,bgColor,textColor,handler}) => {
  return (
    <button onClick={handler} className={`${bgColor} ${textColor} rounded-full sm:px-8 sm:py-2 px-4 py-1 duration-300 cursor-pointer hover:scale-110 relative z-10`}>{text}</button>
  )
}

export default Button