import { TextBox } from "../../components/TextBox/TextBox"
import { Main } from "../../layouts/Main/Main"
import './Home.css'

export const Home = () => {
  return (
    <Main>
      <div id='image-container'>
        <img src="src\assets\images\ImageHome.png" alt="personal-image" id="personal-image"/>
      </div>
      <TextBox>
        <h2>My name is Kevin Julian Alvarez Ramirez</h2>
        <h2>I'm from Armenia,Quindio</h2>
        <div id="description">
        <h2>I'm a backend developer with 1 year of experience in javascript.
        I particularly like database management</h2>
        </div>
        <h2>My English level is B1</h2>
      </TextBox>
    </Main>
  )
}
