import './TextBox.css'

export const TextBox = ({children,style}) => {
    return (
        <div className='TextBox' style={style}>
            {children}
        </div>
    )
  }