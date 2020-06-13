import React from 'react';
import Layout from '../components/layout';
import Banner from '../components/banner';
import AboutMe from '../components/aboutMe';
import Job from '../components/jobs';
import Footer from '../components/footer';
import ContactMe from '../components/contactMe';
import SEO from '../components/seo';
const About = () => (
  <>
    <SEO title="Pranav Patel" description="Learn | More About Pranav Patel" />
    <Layout>
      <Banner />
      <AboutMe />
      <Job />
      <ContactMe />
      <hr />
      <Footer />
    </Layout>
  </>
);

export default About;
