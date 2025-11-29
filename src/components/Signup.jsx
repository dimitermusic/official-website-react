import { useState } from "react";
import { sections } from "../utils/constants";
import "../styles/GlobalStyles.css";
import "../styles/Signup.css";

export default function Signup() {
  const { elementId, title, subtitle } = sections.signup;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [robotInput, setRobotInput] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "FULLNAME") {
      setName(inputValue);
    } else if (inputType === "EMAIL") {
      setEmail(inputValue);
    } else if (inputType === "b_ea9416c85051a9c2c512c1604_e8695d45d2") {
      setRobotInput(inputValue);
    }
  };

  return (
    <section id={elementId} className="global-section">
      <div className="global-container">
        <header className="global-section-header">
          <h2 className="global-title">{title}</h2>
          <p className="global-subtitle">{subtitle}</p>
        </header>
        <div id="mc_embed_signup">
          <form
            action="https://dimitermusic.us14.list-manage.com/subscribe/post?u=ea9416c85051a9c2c512c1604&amp;id=e8695d45d2"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div id="mc_embed_signup_scroll">
              <div className="mc-field-group">
                <input
                  type="text"
                  value={name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  name="FULLNAME"
                  className="required"
                  id="mce-FULLNAME"
                />
              </div>
              <div className="mc-field-group">
                <input
                  type="email"
                  value={email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                />
              </div>
              <div id="mce-responses" className="clear foot">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                ></div>
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                ></div>
              </div>
              {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_ea9416c85051a9c2c512c1604_e8695d45d2"
                  tabIndex="-1"
                  value={robotInput}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <div className="clear foot">
                  <input
                    type="submit"
                    value="SUBSCRIBE"
                    readOnly
                    name="subscribe"
                    className="button btn subscribe"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
