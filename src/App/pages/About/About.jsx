import { Button, Toggle } from "../../components";
import Heading from "../../components/heading/Heading";
import "./about.scss";

function About() {
  return (
    <div className="about">
      <div className="desc">
        <Heading size="sm" styleProps="clr--primary u-mb">
          interaction design works
        </Heading>
        <hr className="bg--white hr--xl hr-w-80" />
        <Heading size="sm" styleProps="u-mt">
          graphic designs works
        </Heading>
      </div>
      <div className="heading-hello">
        <Heading size="bg">
          HELL
          <span className="circle circle--red" />,
        </Heading>
      </div>
      <div className="heading-im">
        <Heading size="md">I am slim</Heading>
      </div>
      <div className="btn-container">
        <Button styleProps="btn--primary">Hire me!</Button>
      </div>
    </div>
  );
}

export default About;
