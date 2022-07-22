import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import Hero from '../components/Hero/Hero';
import Hero_1 from '../components/Hero/Hero_1';
import Events from '../components/Events/Events';
import Timeline from '../components/TimeLine/TimeLine';
import Rules from '../components/Rules/Rules';
import Organizers from '../components/Organizers/Organizers';
import Sponsors from '../components/Sponsor/Sponsor'
import HackerWar from '../components/HackerWar/Domain'
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';


const Home = () => {
  return (
    <>
      <Layout>
        <Section grid>
          <Hero_1 />
        </Section>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Events />
        <HackerWar />
        <Rules />
        <Timeline />
        <Sponsors />
        <Organizers />
        <Acomplishments />
      </Layout>
    </>
  );
};

export default Home;
