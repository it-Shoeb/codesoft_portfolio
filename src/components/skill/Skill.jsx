import "./skill.css";
import skill from "../../assets/skill.png";

export default function Skill() {
  return (
    <>
      <div className="skill">
        <div className="skill-container">
          <div className="skill-lhs">
            <h1>Proficiency</h1>
            <div className="skill-content">
              <label htmlFor="">
                Frontend
                <progress value={0.8}></progress>
              </label>
              <label htmlFor="">
                Backend
                <progress value={0.8}></progress>
              </label>
              <label htmlFor="">
                Design
                <progress value={0.8}></progress>
              </label>
            </div>
          </div>
          <div className="skill-rhs">
            <img src={skill} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
