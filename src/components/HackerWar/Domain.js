import React, { useState, useRef, useEffect } from 'react';

import { CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemTitle, CarouselMobileScrollNode } from './DomainStyles';
import { Section, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { DomainData } from '../../constants/constants';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from '../Rules/RulesStyles';
import { Hr } from '../Events/EventsStyles';

const TOTAL_CAROUSEL_COUNT = DomainData.length;

const Domain = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / DomainData.length));

      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * DomainData.length);

      setActiveItem(index);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (<>
    <Section id="domain">
      <SectionTitle>Domain & Problem Statement</SectionTitle>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {DomainData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}>
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}>
                <CarouselItemTitle>
                  {`${item.domain}`}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
    </Section>
    <Section id="tech">
      <List>
        <ListItem>
          <ListContainer>
            <ListTitle>Web Dev</ListTitle>
            <Hr />
            Over 23 million artisans work in the Indian handicraft and handloom industry. A cross-border e-commerce marketplace will bring customers and sellers together on a single business platform. It will aid in the expansion of their firm as well as the overall economy of our country.<br></br><br></br>
            To provide a unique e-commerce platform for craftsmen to market their wares. Demand forecasting for required products, automatic quality checks on the objects, and sentiment analysis with next recommended actions for the artist will be implemented.<br></br><br></br>
            To globalise the Indian handicraft industry? Providing a shared platform for the creation, marketing, and sale of high-quality handicrafts and items.
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <ListTitle>App Dev</ListTitle>
            <Hr />
            Tourism is a significant source of revenue for the state of Uttarakhand.<br></br><br></br>
            To further strengthen it, the government intends to develop a tourist-friendly application that would include information about all of the char dhams and other notable spots in the state.<br></br><br></br>
            The software should also assist tourists in acquiring local information on the availability of stay and housing at partner hotels, as well as connecting them to local trip guides above mentioned feature should be automated by tracking the balance in the app wallet. The purpose of this app is to provide information on well-known locations and Char Dham.
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <ListTitle>Automation/CLI</ListTitle>
            <Hr />
            A paperless electronic document used for ticketing is an e-ticket (electronic ticket). It can help museums and heritage sites manage crowds more effectively.<br></br><br></br>
            Create a QR-based ticketing system with the necessary hardware for a seamless tourist experience in museums and heritage sites. Furthermore, predicting the predicted audience size should be added as a feature.<br></br><br></br>
            It saves money on bookings by removing the need to print and mail paper paperwork. Can it aid in keeping a more accurate record of visitors? Can increase sales because visitors can book, purchase, and print their electronic tickets at any time of day or night."
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <ListTitle>Block Chain</ListTitle>
            <Hr />
            Every year, around 6 crore Indians graduate from varied origins and educational backgrounds. Almost the same amount of students enroll in institutions to pursue various degrees that will help them find work.<br></br><br></br>
            Due to the large number of students, it is also difficult to track them individually. AICTE and MHRD intend to track students and colleges in order to assist them in different operations such as student identification, AICTE certified college tracking, and provision of fellowships, awards, and training.<br></br><br></br>
            Because there is no single unique identification of students, the process takes time, as does obtaining letters from college presidents, which is likewise a time-consuming process. As a result, manually tracking such a large number is a difficult and time-consuming task.
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  </>
  );
};

export default Domain;
