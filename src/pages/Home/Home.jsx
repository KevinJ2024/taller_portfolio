import { TextBox } from "../../components/TextBox/TextBox"
import { Main } from "../../layouts/Main/Main"
import './Home.css'
import handsome from "../../assets/images/handsome.PNG"

export const Home = () => {
  return (
    <Main>
      <div id='image-container'>
        <img src={handsome} alt="personal-image" id="personal-image"/>
      </div>
      <TextBox>
        <h2 id='name'> My name is Kevin Julian Alvarez Ramirez</h2>
        <h2 id="city">I'm from Armenia,Quindio</h2>
        <div id="description">
          <h3>I'm a backend developer with one year of experience specializing in JavaScript.
            I have a strong passion for building scalable and efficient server-side applications,
            with a particular focus on database management. 
            I enjoy working with technologies like Node.js, Express.js, and SQL databases to develop robust backend solutions.
          </h3>
        </div>
        <h2 id="english">My English level is B1 intermediate</h2>
      </TextBox>
    </Main>
  )
}
