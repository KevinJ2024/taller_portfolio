import { TextBox } from "../../components/TextBox/TextBox"
import { Main } from "../../layouts/Main/Main"
import "./Studies.css"

export const Studies = () => {
  return (
    <Main>
      <TextBox>
        <div>
            <h2>• High School Graduate & Software Programming Technician</h2>
            <div className="logo-box">
              <h2>Ciudad Dorada Educational Institution</h2>
              <img className="logos" src="src\assets\images\logoCiudad.png" alt="logo-sena"></img>
            </div>
        </div>
        <div>
            <h2>• Currently studying for a Bachelor's degree in Physics</h2>
            <div className="logo-box">
              <h2>University of Quindío</h2>
              <img className="logos" src="src\assets\images\logoquindio.png" alt="logo-sena"></img>
            </div>
        </div>
        <div>
            <h2>• Currently studying a Technologist degree in Software Analysis and Development.</h2>
            <div className="logo-box">
              <h2>Sena Centro de comercio y Turismo</h2>
              <img className="logos" src="src\assets\images\logoSena.png" alt="logo-sena"></img>
            </div>
        </div>
      </TextBox>
    </Main>
  )
}