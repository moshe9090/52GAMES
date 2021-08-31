import React, { Fragment , Form, input,} from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import Particles from '../Particle';

import DashboardWrapper, { DashboardObject } from './dashboard.style';


import DashboardObject1 from 'common/assets/image/appModern/dashboard.png';
import ContactusWrapper from "../ContactUs/dashboard.style";
import {useForm, ValidationError} from "@formspree/react";
import {ContactFormWrapper} from "../Newsletter/newsletter.style";
import Input from "../../../common/components/Input";
import Newsletter from "../Newsletter";

// import NewsletterWrapper, { ContactFormWrapper } from './newsletter.style';

// const Newsletter = ({
//
// })const Newsletter = ({
//
// })

// import NewsletterWrapper, { ContactFormWrapper } from './newsletter.style';

// const Newsletter = ({
//   // sectionWrapper,
//   // textArea,
//   // buttonArea,
//   buttonStyle,
//   title,
//   description,
// })

const DashboardSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle,
sectionWrapper,
textArea,
buttonArea,
buttonStyle,
}) => {
  const [state, handleSubmit] = useForm("xnqlgbwa");
  const ButtonGroup = () => (
    <Fragment>
      <Button title="START PLAY" {...btnStyle} />
    </Fragment>


  );


  return (
    <DashboardWrapper id="ContactUs">
      <Particles />
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>

            <Heading className="subtitle" as="h5" content="52Games" />
            <FeatureBlock
              title={
                <Heading
                  content="GAMES ARE ART WE BRING ART TO LIFE."
                  {...title}
                />
              }

              description={
                <Text
                  content="We make the games we want to play a reality, and infuse them with innovation, hand-crafted detail, and creative passion.
 ."
                  {...description}
                />
              }
              button={<ButtonGroup />}


            />
          </Box>
        </Box>
      </Container>
      <DashboardObject>

        {/*<div  className="dashboardWrapper">*/}
        {/*  /!*<Image src={DashboardObject1} alt="DashboardObject1" />*!/*/}
        {/*  {state.succeeded ? (*/}
        {/*      <div>Form Sent</div>*/}
        {/*  ) : (*/}
        {/*      <form onSubmit={handleSubmit}>*/}
        {/*        {JSON.stringify(state.errors)}*/}
        {/*        <label htmlFor="email">*/}
        {/*          Contact us*/}
        {/*        </label>*/}
        {/*        <input*/}
        {/*            id="email"*/}
        {/*            type="text"*/}
        {/*            name="email"*/}



        {/*        />*/}
        {/*        <ValidationError*/}
        {/*            prefix="Email"*/}
        {/*            field="email"*/}
        {/*            errors={state.errors}*/}
        {/*        />*/}
        {/*        <textarea*/}
        {/*            type ="text"*/}
        {/*            id="message"*/}
        {/*            name="message"*/}
        {/*        />*/}
        {/*        <ValidationError*/}
        {/*            prefix="Message"*/}
        {/*            field="message"*/}
        {/*            errors={state.errors}*/}

        {/*        />*/}

        {/*        <button type="submit" disabled={state.submitting}>*/}
        {/*          Submit*/}
        {/*        </button>*/}
        {/*      </form>*/}

        {/*  )}*/}

        {/*</div>*/}

      </DashboardObject>
      <Newsletter showtext={false} />

    </DashboardWrapper>
  );
};




DashboardSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
};


DashboardSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, '70%', '50%', '45%'],
  },
  title: {
    fontSize: ['22px', '30px', '30px', '30px', '36px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '15px', '15px', '20px', '25px'],
    lineHeight: '1.3',
    maxWidth: ['100%', '400px'],
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.85',
    mb: '0',
  },
  btnStyle: {
    minWidth: ['120px', '120px', '120px', '156px'],
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'primaryWithBg',
  },
};


export default DashboardSection;
