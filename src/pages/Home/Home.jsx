import { TextBox } from "../../components/TextBox/TextBox"
import { Main } from "../../layouts/Main/Main"
import './Home.css'

export const Home = () => {
  return (
    <Main>
      <div id='image-container'>
        <img src='../../assets/images/handsome.PNG' alt="personal-image" id="personal-image"/>
      </div>
      <TextBox>
        <h2>My name is Kevin Julian Alvarez Ramirez</h2>
        <h2>I'm from Armenia,Quindio</h2>
        <div id="description">
          <h2>I'm a backend developer with one year of experience specializing in JavaScript.
            I have a strong passion for building scalable and efficient server-side applications,
            with a particular focus on database management. 
            I enjoy working with technologies like Node.js, Express.js, and SQL databases to develop robust backend solutions.
          </h2>
        </div>
        <h2>My English level is B1 intermediate</h2>
      </TextBox>
    </Main>
  )
}
