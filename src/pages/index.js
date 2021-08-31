import React  from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { ResetCSS } from 'common/assets/css/style';

import {theme} from "../common/theme/appModern";
import GlobalStyle, {AppWrapper, ContentWrapper} from "../containers/AppModern/appModern.style";
import Navbar from "../containers/AppModern/Navbar";
import Banner from "../containers/AppModern/Banner";
import Features from "../containers/AppModern/Features";
import AppSlider from "../containers/AppModern/AppSlider";
import DashboardFeatures from "../containers/AppModern/Dashboard";
import Testimonial from "../containers/AppModern/Testimonial";
import ProductSlide from "../containers/AppModern/ProductSlide";
import DesignedAndBuilt from "../containers/AppModern/DesignedAndBuilt";
import PricingPolicy from "../containers/AppModern/PricingPolicy";
import TeamPortfolio from "../containers/AppModern/TeamPortfoilo";
import Newsletter from "../containers/AppModern/Newsletter";
import Footer from "../containers/AppModern/Footer";
import ContactusWrapper from "../containers/AppModern/ContactUs/dashboard.style";
import ContactusSection from "../containers/AppModern/ContactUs";

const Main = () => {
  return (
      <ThemeProvider theme={theme}>
        <>
          <Head>
            <title>52Games</title>
            <meta name="Description" content="52 GANES" />
            <meta name="theme-color" content="#2563FF" />
            <meta
                name="keywords"
                content="React, React js, Next, Next js, Super fast next js landing, Modren landing, Next js landing"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Heebo:300,400,500,700&display=swap"
                rel="stylesheet"
            />
          </Head>
          {/* end of head */}

          <ResetCSS />
          <GlobalStyle />
          {/* end of global and reset style */}

           {/*start app classic landing */}
          <AppWrapper>
            <Sticky top={0} innerZ={9999} activeClass="sticky-active">
              <Navbar />
            </Sticky>
            <ContentWrapper>
              <Banner />
              {/*<AppSlider />*/}
              <DashboardFeatures />
              {/*<ContactusWrapper/>*/}
              {/*<ContactusSection/>*/}
              {/*<Testimonial />*/}
              {/*/!*<ProductSlide />*!/*/}
              {/*<DesignedAndBuilt />*/}
              {/*<PricingPolicy />*/}
              {/*<TeamPortfolio />*/}
              {/*<Newsletter />*/}
            </ContentWrapper>
            <Footer />
          </AppWrapper>
          {/* end of app classic landing */}
        </>
      </ThemeProvider>
  );
};
export default Main;
