import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import {
  IoIosRocket,
  IoIosPeople,
  IoIosHeart,
  IoMdUnlock,
} from "react-icons/io";
import { RiPlantFill } from "react-icons/ri";

import Page from "../../components/shared/Page";

const TEAM_MEMBERS = [
  {
    name: "Peggy MacCallum",
    pronouns: "She/Her",
    title: "Division Manager",
    src: "assets/headshots/peggy_maccallum.jpg",
  },
  {
    name: "Scott Reedy",
    pronouns: "He/Him",
    title: "Network Systems Administrator",
    src: "assets/headshots/scott_reedy.jpeg",
  },
  {
    name: "Diana Martin",
    title: "Head of Solutions",
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
    name: "Amenity Applewhite",
    pronouns: "She/Her",
    title: "Head of Product",
    src: "assets/headshots/amenity_applewhite.jpeg",
  },
  {
    name: "Tilly Whitson",
    title: "Junior Software Developer",
    pronouns: "She/They",
    src: "assets/headshots/tilly_whitson.jpeg",
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
    pronouns: null,
    src: "assets/headshots/chrispin_pullen.jpg",
  },
  {
    name: "Andrew Shensky",
    title: "Head of Geospatial Analysis",
    pronouns: "He/Him",
    src: "assets/headshots/andrew_shensky.png",
  },
  {
    name: "Chia Berry",
    title: "Head of Software Engineering",
    pronouns: "She/Her",
    src: "assets/headshots/chia_berry.jpg",
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
    src: "assets/headshots/frank_hereford.jpg",
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
    name: "Rose Eichelmann",
    title: "Junior Software Developer",
    pronouns: "She/They",
    src: "assets/headshots/rose_eichelmann.jpg",
  },
  {
    name: "Kate Lunceford",
    title: "Business Process Consultant",
    pronouns: "She/Her",
    src: "assets/headshots/kate_lunceford.jpg",
  },
  {
    name: "Zach Berry",
    title: "IT Geospatial Analyst Sr.",
    pronouns: "He/Him",
    src: "assets/headshots/zach_berry.jpeg",
  },
  {
    name: "Josh Coleman",
    title: "GIS Technician",
    pronouns: "He/Him",
    src: "assets/headshots/josh_coleman.jpg",
  },
  {
    name: "Daniel Stover",
    title: "GIS Technician",
    pronouns: "He/Him",
    src: "assets/headshots/daniel_stover.jpg",
  },
  {
    name: "Christina Tremel",
    title: "Product Manager",
    pronouns: "She/Her",
    src: "assets/headshots/christina_tremel.png",
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
    title: "Design Research Fellow",
    pronouns: "She/Her",
    src: "assets/headshots/janet_chu.jpg",
  },
  {
    name: "Annie Phan",
    title: "Data Science Fellow",
    pronouns: "She/Her",
    src: "assets/headshots/annie_phan.jpeg",
  },
  {
    name: "Jorge Gabitto",
    title: "Software Developer Fellow",
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
  {
    name: "Rebecca Brand",
    title: "UX/UI Design Fellow",
    pronouns: "She/Her",
    src: "assets/headshots/rebecca_brand.jpg",
  },
  {
    name: "Mateo Clarke",
    title: "Head of Software Engineering",
    pronouns: "He/Him",
    src: "assets/headshots/mateo_clarke.jpeg",
  },
  {
    name: "Alan De Anda",
    title: "Senior Geospatial Analyst",
    pronouns: "He/Him",
    src: "assets/headshots/alan_de_anda.jpeg",
  },
  {
    name: "Stephanie Moorer",
    title: "Product Manager",
    pronouns: "",
    src: "assets/headshots/stephanie_moorer.jpeg",
  },
];

function TeamMember(props) {
  const { src, name, title, pronouns } = props;
  return (
    <Col xs={6} md={4} lg={3} className="my-2 text-center text-primary">
      <Image width={125} roundedCircle src={src} alt="headshot image" />
      <h6 className="mt-2 mb-0">{name}</h6>
      <p className="mb-0">{title}</p>
      {props.pronouns && <p>{pronouns}</p>}
    </Col>
  );
}

function ValueItem(props) {
  const { icon, title, content } = props;
  return (
    <Col xs={12} md={6} lg={4} className="px-5 pb-4 m-auto">
      <Row>
        <h1>{icon}</h1>
      </Row>
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
  );
}

export default function AboutView(props) {
  return (
    <Page nav title="About">
      <Row className="text-black">
        <Col>
          <p>
            We leverage high quality data and modern tech to empower Austin
            Transportation staff to improve operations, make data-informed
            decisions, and deliver excellent mobility services to the Austin
            community. We solve real problems for real people.
          </p>
        </Col>
      </Row>
      <hr className="mt-2" />
      <Row className="text-primary text-center mt-5 mb-5">
        <Col>
          <a alt="anchor tag for Our team" href="#work">
            <h2>How we work</h2>
          </a>
        </Col>
      </Row>
      <Row className="text-primary text-center">
        <ValueItem
          title="Embrace change"
          content="Needs change; technologies evolve. We welcome new challenges, and improve by adapting to and embracing change. We are stubborn about our goals, but flexible in our methods."
          icon={<IoIosRocket />}
        />
        <ValueItem
          title="Users first and always"
          content="We build only what people really need, nothing more. User needs are the driver for all decisions. We build with our users, keeping them involved in our process through ideation, sprint reviews, demos, and usability testing."
          icon={<IoIosHeart />}
        />
        <ValueItem
          title="Empower great people"
          content="Our work empowers civil servants to discover and cultivate new skills. We aim to provide opportunities for personal and professional growth, and to empower the public to engage with their government through open information and collaboration.          "
          icon={<IoIosPeople style={{ fontSize: "3rem" }} />}
        />
        <Col lg={2} className="d-none d-lg-block"></Col>
        <ValueItem
          title="Default to open"
          content="The residents of Austin are at the top of our org chart. We share everything we do so that we can collaborate with the public and receive critical feedback. Before we restrict access to a line of code, a dataset, a design brief, or an app, we ask, “Why?”"
          icon={<IoMdUnlock />}
        />
        <ValueItem
          title="Nurture, include, and grow together"
          content="Delivering great tech cannot not come at the cost of our personal wellbeing. We commit to building a healthy and inclusive workplace by looking out for each other, listening to each other, and advocating for each other."
          icon={<RiPlantFill />}
        />
        <Col lg={2}></Col>
      </Row>
      <hr className="mt-2" />
      <Row className="text-primary text-center mt-5 mb-4">
        <Col>
          <a alt="anchor tag for Our team" href="#team">
            <h2 id="team">Meet the team</h2>
          </a>
        </Col>
      </Row>
      <Row>
        {TEAM_MEMBERS.map((person) => {
          return <TeamMember key={person.name} {...person} />;
        })}
      </Row>
      <hr className="mt-2" />
      <Row className="text-primary text-center mt-5 mb-4">
        <Col>
          <a alt="anchor tag for Our team" href="#alumni">
            <h2 id="alumni">Alumni</h2>
          </a>
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
