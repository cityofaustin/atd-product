import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

import Page from "../../components/shared/Page";

const TEAM_MEMBERS = [
  {
    name: "Peggy MacCallum",
    pronouns: "She/Her",
    title: "Division Manager",
    src: "assets/headshots/peggy_maccallum.jpeg",
  },
  {
    name: "Scott Reedy",
    pronouns: "He/Him",
    title: "Network Systems Administrator",
    src: "assets/headshots/scott_reedy.jpeg",
  },
  {
    name: "Diana Martin",
    title: "Lead Applications Architect",
    pronouns: "She/Her",
    src: "assets/headshots/diana_martin.jpg",
  },
  {
    name: "Tracy Linder",
    title: "Product Manager",
    pronouns: "She/Her",
    src: "assets/headshots/tracy_linder.jpg",
  },
  {
    name: "Alan De Anda",
    title: "Senior Geospatial Analyst",
    pronouns: "He/Him",
    src: "assets/headshots/alan_de_anda.jpeg",
  },
  {
    name: "Mateo Clarke",
    title: "Head of Software Engineering",
    pronouns: "He/Him",
    src: "assets/headshots/mateo_clarke.jpeg",
  },
  {
    name: "Amenity Applewhite",
    pronouns: "She/Her",
    title: "Head of Product",
    src: "assets/headshots/amenity_applewhite.jpeg",
  },
  {
    name: "Tilly Whitson",
    title: "Junior Software Developer",
    pronouns: "She/Her",
    src: "assets/headshots/tilly_whitson.jpeg",
  },
  {
    name: "Stephanie Moorer",
    title: "Product Manager",
    pronouns: "",
    src: "assets/headshots/stephanie_moorer.jpeg",
  },
  {
    name: "Nadin Nader",
    title: "Product Delivery Manager",
    pronouns: "He/Him",
    src: "assets/headshots/nadin_nader.jpeg",
  },
  {
    name: "Chrispin Pullen",
    title: "Senior Application Analyst",
    pronouns: "",
    src: "assets/headshots/chrispin_pullen.jpeg",
  },
  {
    name: "Andrew Shensky",
    title: "Senior Geospatial Analyst",
    pronouns: "He/Him",
    src: "assets/headshots/andrew_shensky.png",
  },
  {
    name: "Chia Berry",
    title: "Software Developer",
    pronouns: "She/Her",
    src: "assets/headshots/chia_berry.png",
  },
  {
    name: "Patrick McDonnell",
    title: "Senior Product Manager",
    pronouns: "He/Him",
    src: "assets/headshots/patrick_mcdonnell.jpg",
  },
  {
    name: "Frank Hereford",
    title: "Software Developer",
    pronouns: "He/Him",
    src: "assets/headshots/frank_hereford.jpeg",
  },
  {
    name: "Charlie Henry",
    title: "Data Scientist",
    pronouns: "He/Him",
    src: "assets/headshots/charlie_henry.jpg",
  },
  {
    name: "Karo Engstrom",
    title: "Application Architect",
    pronouns: "She/Her",
    src: "assets/headshots/karo_engstrom.jpg",
  },
  {
    name: "Mike Dilley",
    title: "Software Developer",
    pronouns: "He/Him",
    src: "assets/headshots/mike_dilley.jpeg",
  },
  {
    name: "Rebecca Brand",
    title: "UX/UI Design Fellow",
    pronouns: "She/Her",
    src: "assets/headshots/rebecca_brand.jpg",
  },
  {
    name: "Rose Eichelmann",
    title: "Software Engineering Fellow",
    pronouns: "She/They",
    src: "assets/headshots/rose_eichelmann.jpg",
  },
  {
    name: "Kate Lunceford",
    title: "Business Process Consultant",
    pronouns: "She/Her",
    src: "assets/headshots/kate_lunceford.jpg",
  },
];

const TEAM_MEMBER_ALUMNI = [
  {
    name: "Jace Deloney",
    title: "Product Manager",
    pronouns: "He/him",
    src: "assets/headshots/jace_deloney.jpeg",
  },
  {
    name: "Janet Chu",
    title: "Design Researcher",
    pronouns: "She/Her",
    src: "assets/headshots/janet_chu.jpg",
  },
  {
    name: "Annie Phan",
    title: "Data Science Intern",
    pronouns: "She/Her",
    src: "assets/headshots/annie_phan.jpeg",
  },
  {
    name: "Jorge Gabitto",
    title: "Software Developer Intern",
    pronouns: "",
    src: "assets/headshots/jorge_gabitto.jpg",
  },
  {
    name: "Surbhi Bakshi",
    title: "Senior Application Analyst",
    pronouns: "She/Her",
    src: "assets/headshots/surbhi_bakshi.jpeg",
  },
  {
    name: "Sergio Garcia",
    title: "Senior Data Engineer",
    pronouns: "He/Him",
    src: "assets/headshots/sergio_garcia.jpeg",
  },
  {
    name: "Jaime McKeown",
    pronouns: "She/Her",
    title: "Senior Geospatial Analyst",
    src: "assets/headshots/jaime_mckeown.jpeg",
  },
  {
    name: "John Clary",
    title: "Head of Technology",
    pronouns: "He/Him",
    src: "assets/headshots/john_clary.jpg",
  },
];

function TeamMember(props) {
  const { src, name, title, pronouns } = props;
  return (
    <Col xs={4} className="my-2 text-center text-primary">
      <Image width={125} roundedCircle src={src} />
      <h6 className="mt-2 mb-0">{name}</h6>
      <p className="text-muted  mb-0">{title}</p>
      {props.pronouns && <p className="text-muted ">{pronouns}</p>}
    </Col>
  );
}

function ValueItem(props) {
  const { src, title, content } = props;
  return (
    <Col xs={12} md={6} lg={4} className="pb-4">
      <Row>
        <Col xs="auto" className="pr-0">
          <span style={{ color: "#00bfa5" }}>
            <Image width={"45"} src={src} alt="Value Icon" />
          </span>
        </Col>
        <Col>
          <Row>
            <Col>
              <h4>{title}</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>{content}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}

export default function AboutView(props) {
  return (
    <Page footer nav title="About Us">
      <Row className="text-primary">
        <Col>
          <p>
            We leverage high quality data and modern tech to empower Austin
            Transportation staff to improve operations, make data-informed
            decisions, and deliver excellent mobility services to the Austin
            community. We solve real problems for real people.
          </p>
        </Col>
      </Row>
      <Row className="text-primary mt-5 mb-4">
        <Col>
          <h2>How we work</h2>
        </Col>
      </Row>
      <Row className="text-primary">
        <ValueItem
          title="Embrace change"
          content="Needs change; technologies evolve. We welcome new challenges, and improve by adapting to and embracing change. We are stubborn about our goals, but flexible in our methods."
          src="/assets/icons/change.jpg"
        />
        <ValueItem
          title="Users first and always"
          content="We build only what people really need, nothing more. User needs are the driver for all decisions. We build with our users, keeping them involved in our process through ideation, sprint reviews, demos, and usability testing."
          src="/assets/icons/users.jpg"
        />
        <ValueItem
          title="Empower great people"
          content="Our work empowers civil servants to discover and cultivate new skills. We aim to provide opportunities for personal and professional growth, and to empower the public to engage with their government through open information and collaboration.          "
          src="/assets/icons/astronaut.jpg"
        />
        <Col lg={2} className="d-none d-lg-block"></Col>
        <ValueItem
          title="Default to open"
          content="The residents of Austin are at the top of our org chart. We share everything we do so that we can collaborate with the public and receive critical feedback. Before we restrict access to a line of code, a dataset, a design brief, or an app, we ask, “Why?”"
          src="/assets/icons/unlock.jpg"
        />
        <ValueItem
          title="Nurture, include, and grow together"
          content="Delivering great tech cannot not come at the cost of our personal wellbeing. We commit to building a healthy and inclusive workplace by looking out for each other, listening to each other, and advocating for each other."
          src="/assets/icons/grow.jpg"
        />
        <Col md={2}></Col>
      </Row>
      <Row className="text-primary mt-5 mb-4">
        <Col>
          <h2>Our team</h2>
        </Col>
      </Row>
      <Row>
        {TEAM_MEMBERS.map((person) => {
          return <TeamMember key={person.name} {...person} />;
        })}
      </Row>
      <Row className="text-primary mt-5 mb-4">
        <Col>
          <h2>Team alumni</h2>
        </Col>
      </Row>
      <Row>
        {TEAM_MEMBER_ALUMNI.map((person) => {
          return <TeamMember key={person.name} {...person} />;
        })}
      </Row>
    </Page>
  );
}
