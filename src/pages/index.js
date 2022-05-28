import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import Hero from '../components/Hero/Hero';
import Hero_1 from '../components/Hero/Hero_1';
import Events from '../components/Events/Events';
import Timeline from '../components/TimeLine/TimeLine';
import Rules from '../components/Rules/Rules';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

import Head from 'next/head'
const Home = () => {
  return (
    <Layout>
      <Head> <title>Illuminate -By CODEX</title> </Head>
      <Section grid>
        <Hero_1 />
      </Section>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Events />
      <Rules />
      <Timeline />
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
