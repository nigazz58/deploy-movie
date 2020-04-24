import styled from 'styled-components';

// Values
export const headerHeight = '56px';
export const headerWidthLaptop = '1200px';

// Colors
export const primaryColor = '#142850';
export const secondaryColor = '#f2f2f2';

// z-indexes
export const headerZindex = 7;
export const overlayZindex = 6;
export const footerZindex = 5;
export const homeIntroZindex = 3;

// Media query breakpoints
const size = {
  MobileLandscape: '480px',
  TabletPortrait: '768px',
  TabletLandscape: '992px',
  Laptops: '1200px',
};

export const device = {
  MobileLandscape: `(min-width: ${size.MobileLandscape})`,
  TabletPortrait: `(min-width: ${size.TabletPortrait})`,
  TabletLandscape: `(min-width: ${size.TabletLandscape})`,
  Laptops: `(min-width: ${size.Laptops})`,
};

// // Layout components
// export const Layout = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   main {
//     padding-top: ${headerHeight};
//     flex: 1;
//   }
// `;

// export const Wrapper = styled.div`
//   width: 90vw;
//   margin: 0 auto;
//   @media ${device.Laptops} {
//     width: ${headerWidthLaptop};
//   }
// `;

// Layout components
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Wrap = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;

  p {
    margin-top: 1rem;
  }
`;

export const DetailWrap = styled(Wrap)`
  padding-top: 264px;

  @media screen and (max-width: 600px) {
    padding-top: 200px;
    padding-bottom: 0px;
  }
`;

export const Inner = styled.div`
  position: relative;
  max-width: 1200px;
  width: 100vw;
  min-height: 400px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 1);
  box-shadow: 2px 2px 1px rgba(0, 0, 10px, 0.5);
  color: #000;
  padding: 30px;
  box-sizing: border-box;

  @media screen and (max-width: 480px) {
    padding: 15px;
  }
`;

/* title */
export const PageTitle = styled.h2`
  font-size: 2rem;

  @media screen and (max-width: 480px) {
    font-size: 1.25rem;
  }
`;
