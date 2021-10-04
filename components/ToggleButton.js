const ToggleButton = ({btnText,setIsOpen,isOpen,toggleBtnClass}) => {
  return (
<button className={`${toggleBtnClass}`} onClick={() => setIsOpen(!isOpen)}>{btnText}</button>
  )
}

export default ToggleButton
