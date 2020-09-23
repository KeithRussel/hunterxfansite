import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const Others = () => {
  return (
    <>
      <Row className='mb-5'>
        <Col xs={12} md={7} className='imgCenter'>
          {/* xs=12 md=8 */}
          <Image
            src='https://i2.wp.com/culturedvultures.com/wp-content/uploads/2016/07/456412.jpg?fit=1200%2C675&ssl=1'
            className='w-100'
          />
          {/* <div className='img1'>test</div> */}
        </Col>
        <Col xs={6} md={5} className='imgCenter'>
          {/* xs=6 md=4 */}
          <Image
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqvvdpvSRfK0GFcZr_F_olI8uTzvskKGq0ww&usqp=CAU'
            fluid
            className='w-100'
          />
        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row className='mb-5'>
        <Col xs={6} md={4} className='imgCenter'>
          <Image
            src='https://cdn.comicsverse.com/wp-content/uploads/sites/6/2017/04/custom-Custom_Size___Cute.jpg'
            fluid
            className='w-100'
          />
          {/* <div className='img3' /> */}
        </Col>
        <Col xs={6} md={4} className='imgCenter'>
          <Image
            src='https://i.kym-cdn.com/entries/icons/original/000/017/574/ss_(2015-03-19_at_08.34.40).jpg'
            fluid
            className='w-100'
          />
          {/* <div className='img4' /> */}
        </Col>
        <Col xs={6} md={4} className='imgCenter'>
          <Image
            src='https://i.pinimg.com/originals/0b/c1/18/0bc118104b76d5cfe6ea7db8f18df807.gif'
            fluid
            className='w-100'
          />
          {/* <div className='img5' /> */}
        </Col>
      </Row>

      <Row className='mb-5'>
        <Col xs={12} md={5} className='imgCenter'>
          {/* xs=12 md=8 */}
          <Image
            src='https://www.manga-sanctuary.com/IMAGES_NEWS/Image/genzai/hxh/hunter-x-hunter-2011-ep-75-vostfr-streaming-vod.jpg'
            className='w-100'
          />
          {/* <div className='img1'>test</div> */}
        </Col>
        <Col xs={6} md={7} className='imgCenter'>
          {/* xs=6 md=4 */}
          <Image
            src='https://media1.tenor.com/images/921791dd6f88357ce0f4577ea322b272/tenor.gif?itemid=11911264'
            fluid
            className='w-100'
          />
        </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
        <Col xs={6} className='imgCenter'>
          <Image
            src='https://www.animewp.com/wallpaper/2015/09/hunter-x-hunter-alluka-35-widescreen-wallpaper.jpg'
            fluid
            className='w-100'
          />
        </Col>
        <Col xs={6} className='imgCenter'>
          <Image
            src='https://miro.medium.com/max/640/0*5tq4gs5atELsKyyX.jpg'
            fluid
            className='w-100'
          />
        </Col>
      </Row>
    </>
  );
};

export default Others;
