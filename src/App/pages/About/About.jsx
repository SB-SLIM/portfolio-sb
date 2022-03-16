import { Button, Typography } from "../../components";

import "./about.scss";

function About() {
  return (
    <main className="grid about">
      <div className="desc">
        <Typography variant="h1" styleProps="clr--primary u-mb">
          interaction design works
        </Typography>
        <hr className="bg--white hr--xl hr-w-80" />
        <Typography size="h1" styleProps="u-mt">
          graphic designs works
        </Typography>
      </div>
      <div className="heading-hello">
        <Typography styleProps="fs-900">
          Hell
          <span className="clr--primary">o</span>,
        </Typography>
      </div>
      <div className="heading-im">
        <Typography styleProps="fs-800">I am slim</Typography>
      </div>
      <div className="btn-container">
        <Button styleProps="btn--primary">Hire me!</Button>
      </div>
    </main>
  );
}

export default About;
