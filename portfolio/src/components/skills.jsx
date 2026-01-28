import "../styles/skills.css";
export default function Skills() {
  return (
    <div className="skills">
      <div className="h1">
        <h1> Skills</h1>
      </div>
      <div className="simulations">
        <div className="left-one">
          <div className="line1"></div>

          <div className="conta">
            <h1>Web Developer</h1>
            <h3>Front-end</h3>
            <h5>
              React.js
              <br /> Tailwind css
            </h5>
            <h3>Backend</h3>
            <h5>
              node.js <br />
              express.js <br />
              Mongosdb
            </h5>
          </div>
        </div>
        <div className="right-one">
          <div className="line1"> </div>
          <div className="two-container">
            <div className="programing">
              <div className="line2"></div>
              <div className="paragraphhe">
                <h1> Programming</h1>
                <h3>have experience with C , pyhton , pascal , language .</h3>
              </div>
            </div>
            <div className="linux">
              <div className="line2"></div>
              <div className="paragraphhe">
                <h1>Linux user</h1>
                <h3>
                  Efficient with terminal commands,
                  <br />
                  file systems,and development <br />
                  environments.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
