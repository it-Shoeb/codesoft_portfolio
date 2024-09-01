import "./header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="heading">
          <div className="logo">ASA</div>
          <ul className="nav-links">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Porject</a>
            </li>
            <li>
              <a href="">Skill</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="hero">
          <div className="hero-container">
            <div className="hero-image">
              <img src="https://picsum.photos/200/200" alt="" />
            </div>
            <h1>Shaikh Shoeb</h1>
            <h3>Reactjs Front End Developer</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
              veritatis sapiente, delectus adipisci possimus voluptas
              reprehenderit vitae alias neque molestias architecto, minus
              quisquam fuga, magnam voluptatibus. Voluptatum dicta voluptate
              veniam.
            </p>
          </div>
            <a className="download" href="../../assets/Shaikh Shoeb.pdf">Click To Collect My Resume</a>
        </div>
      </div>
    </>
  );
}
