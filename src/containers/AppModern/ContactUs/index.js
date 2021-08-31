import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import Particles from '../Particle';
import DashboardWrapper, {ContactusObject, DashboardObject} from './dashboard.style';
import DashboardObject1 from 'common/assets/image/appModern/dashboard.png';
import ContactusWrapper from "./dashboard.style";
import ScrollSpyMenu from "../../../common/components/ScrollSpyMenu";
import {useForm, ValidationError} from "@formspree/react";

const ContactusSection = ({
                              row,
                              col,
                              title,
                              btnStyle,
                              description,
                              discountText,
                              discountAmount,
                              outlineBtnStyle,
                          }) => {
    const [state, handleSubmit] = useForm("xnqlgbwa");
    const ButtonGroup = () => (
        <Fragment>
            <Button title="START PLAY" {...btnStyle} />
        </Fragment>

    );

    return (
        <ContactusWrapper id="contactus">
            <Particles/>
            <Container>
                <Box className="row" {...row}>
                    <Box className="col" {...col}>
                        <Heading className="subtitle" as="h5" content="52Games"/>
                        <FeatureBlock
                            title={
                                <Heading
                                    content="Best collection of mobile games."
                                    {...title}
                                />
                            }
                            description={
                                <Text
                                    content="We want to give our players the best experience when they download our amazing games.
 ."
                                    {...description}
                                />
                            }
                            button={<ButtonGroup/>}
                        />
                    </Box>
                </Box>
            </Container>
            < ContactusObject>
                <div className="dashboardWrapper">
                    test
                    {/*<Image src={DashboardObject1} alt="DashboardObject1" />*/}
                    {state.succeeded ? (<p>Thanks for joining!</p>) : (
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="Email">
                                Contact us
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <textarea
                                id="message"
                                name="message"
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />

                            <button type="submit" disabled={state.submitting}>
                                Submit
                            </button>


                        </form>
                    )}

                </div>
            </ ContactusObject>
        </ ContactusWrapper>

    );
};


ContactusSection.propTypes = {
    title: PropTypes.object,
    btnStyle: PropTypes.object,
    description: PropTypes.object,
    contentStyle: PropTypes.object,
};


ContactusSection.defaultProps = {
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


export default ContactusSection;
