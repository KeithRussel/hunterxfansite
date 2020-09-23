import React from 'react';
import { Row, Col, Button, Image, Carousel } from 'react-bootstrap';
import UseWindowSize from '../functions/UseWindowSize';

const Home = () => {
  const size = UseWindowSize();

  console.log(size.width);
  // console.log(typeof size);
  return (
    <>
      <Row>
        <Carousel fade>
          <Carousel.Item className={size.width <= 1010 ? '' : `d-flex`}>
            <Col md={7} sm={12}>
              <div className='charDetails'>
                <h1>Gon Freecss</h1>
                <p>
                  Gon Freecss (ゴン゠フリークス, Gon Furīkusu) is a Rookie
                  Hunter and the son of Ging Freecss. Finding his father is
                  Gon's motivation in becoming a Hunter.[4] He has been the main
                  protagonist for most of the series, having said role in the
                  Hunter Exam, Zoldyck Family, Heavens Arena, Greed Island, and
                  Chimera Ant arcs.
                </p>
                <Button variant='primary'>Learn more</Button>
              </div>
            </Col>
            <Col md={5} sm={12}>
              <div className='roundedImg1'></div>
            </Col>
          </Carousel.Item>
          <Carousel.Item className={size.width <= 1010 ? '' : `d-flex`}>
            <Col md={7} sm={12}>
              <div className='charDetails'>
                <h1>Killua Zoldyck</h1>
                <p>
                  Killua Zoldyck (キルア゠ゾルディック, Kirua Zorudikku) is the
                  third child of Silva and Kikyo Zoldyck and the heir of the
                  Zoldyck Family, until he runs away from home and becomes a
                  Rookie Hunter. He is the best friend of Gon Freecss, and is
                  currently traveling with Alluka Zoldyck. He mostly assumes a
                  supporting role whenever he is with Gon; although, due to
                  Gon's state after the events of the Chimera Ant arc, Killua
                  arguably takes the role of main protagonist in the 13th Hunter
                  Chairman Election arc.
                </p>
                <Button variant='primary'>Learn more</Button>
              </div>
            </Col>
            <Col md={5} sm={12}>
              <div className='roundedImg2'></div>
            </Col>
          </Carousel.Item>
          <Carousel.Item className={size.width <= 1010 ? '' : `d-flex`}>
            <Col md={7} sm={12}>
              <div className='charDetails'>
                <h1>Kurapika</h1>
                <p>
                  Kurapika (クラピカ, Kurapika) is the last survivor of the
                  Kurta Clan. He is a Blacklist Hunter and the current leader of
                  the organization founded by Light Nostrade. He is a member of
                  the Zodiacs with the codename "Rat" (子ね, Ne). His goal is to
                  avenge his clan and recover the remaining Scarlet Eyes. He
                  takes the role of main protagonist in the Yorknew City and
                  Succession Contest arcs.
                </p>
                <Button variant='primary'>Learn more</Button>
              </div>
            </Col>
            <Col md={5} sm={12}>
              <div className='roundedImg3'></div>
            </Col>
          </Carousel.Item>
          <Carousel.Item className={size.width <= 1010 ? '' : `d-flex`}>
            <Col md={7} sm={12}>
              <div className='charDetails'>
                <h1>Leorio Paradinight</h1>
                <p>
                  Leorio Paradinight (レオリオ゠パラディナｲﾄ, Reorio
                  Paradinaito) is a Rookie Hunter and a member of the Zodiacs
                  with the codename "Boar" (亥い, I). He is currently a medical
                  student, with a goal to become a doctor.
                </p>
                <Button variant='primary'>Learn more</Button>
              </div>
            </Col>
            <Col md={5} sm={12}>
              <div className='roundedImg4'></div>
            </Col>
          </Carousel.Item>
        </Carousel>
      </Row>

      <div className='usefulContent mt-3'>
        <h3 className='mb-3'>Other Sources</h3>
        <Row className='text-center'>
          <Col md={3} xs={6}>
            <a href='https://en.wikipedia.org/wiki/Hunter_%C3%97_Hunter'>
              <Image src='https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062016/untitled-1_302.png?itok=iJIvii1f' />
            </a>
          </Col>
          <Col md={3} xs={6}>
            <a href='https://hunterxhunter.fandom.com/wiki/Hunter_%C3%97_Hunter'>
              <Image src='https://www.mitchellake.com/wp-content/uploads/2020/01/Website-Logos_0028_Fandom-Wikia.jpg' />
            </a>
          </Col>
          <Col md={3} xs={6}>
            <a href='https://www.viz.com/hunter-x-hunter'>
              <Image src='https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/yhuba2ricrt3zgihfbwv' />
            </a>
          </Col>
          <Col md={3} xs={6}>
            <a href='https://www.netflix.com/ph/title/70300472'>
              <Image src='https://seeklogo.net/wp-content/uploads/2020/03/Netflix-logo-Symbol-512x512.png' />
            </a>
          </Col>
        </Row>
      </div>

      {/* <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://via.placeholder.com/800x400'
            alt='First slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://via.placeholder.com/800x400'
            alt='Third slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://via.placeholder.com/800x400'
            alt='Third slide'
          />
        </Carousel.Item>
      </Carousel> */}
    </>
  );
};

export default Home;
