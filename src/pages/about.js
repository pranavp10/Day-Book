import React from 'react';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../components/banner';
import AboutMe from '../components/aboutMe';
import Job from '../components/jobs';
import Media from '../components/mediaLinks';
import ContactMe from '../components/contactMe';
const About = () => (
  <Layout>
    <Banner />
    <AboutMe />
    <Job />
    <ContactMe />
    <Media />
  </Layout>
);

export default About;
