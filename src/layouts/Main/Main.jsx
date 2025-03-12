import './Main.css';

export const Main = ({children,style}) => {
  return (
    <main style={style}>
      {children}
    </main>
  )
}
