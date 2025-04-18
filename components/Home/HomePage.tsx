import React from "react";
import AdvanceSearch from "../shared/AdvanceSearch";
import Banner from "./Banner";
import Clients from "./Clients";
import ExploreCities from "./ExploreCities";
import FeaturedSlider from "./FeaturedSlider";
import FinestProperties from "./FinestProperties";
import MeetOurAgents from "./MeetOurAgents";
import RealEstateInquiryForm from "./RealEstateInquiryForm";
import Residential from "./Residential";
import Testimonials from "./Testimonials";

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <Banner />
      <FeaturedSlider />
      <Residential />
      <RealEstateInquiryForm />
      <FinestProperties />
      <ExploreCities />
      <MeetOurAgents />
      <Testimonials />
      <Clients />
    </>
  );
};
export default HomePage;
