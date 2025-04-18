import React from "react";
import Testimonials from "../Home/Testimonials";
import Banner from "./AboutBanner";
import MeetOurTeam from "./AboutMeetOurTeam";
import AboutOurBlog from "./AboutOurBlog";
import AboutServices from "./AboutServices";
import Unrestricted from "./AboutUnrestricted";

type AboutPageProps = {};

const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <>
      <Banner />
      <Unrestricted />
      <MeetOurTeam />
      <AboutServices />
      <AboutOurBlog />
      <Testimonials />
    </>
  );
};
export default AboutPage;
