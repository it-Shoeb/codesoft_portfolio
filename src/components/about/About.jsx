import "./about.css";
import image from "../../assets/about.png";

export default function About() {
  return (
    <>
      <div className="about">
        <div className="about-container">
          <div className="about-lhs">
            <img className="about-image" src={image} alt="" />
          </div>
          <div className="about-rhs">
            <h3>What i do</h3>
            <p>
              Crazy ReactJS Front End Developer Who Want to Explore Most of
              Every Tech{" "}
            </p>
            <div className="icons">
              <i class="ri-html5-fill"></i>
              <i class="ri-css3-fill"></i>
              <i class="ri-javascript-fill"></i>
              <i class="ri-reactjs-fill"></i>
              <i class="ri-tailwind-css-fill"></i>
              <i class="ri-nodejs-fill"></i>
              <i class="ri-npmjs-fill"></i>
              <i class="ri-database-2-fill"></i>
              <i class="ri-github-fill"></i>
            </div>
            <ul>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, error quam!</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias voluptatibus nostrum eaque!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorem ullam impedit deserunt?</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatem voluptate modi totam id!</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
