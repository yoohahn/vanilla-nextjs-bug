import { globalStyle, style } from '@vanilla-extract/css';

export const bodyStyle = style({
  height: '100vh',
  fontFamily: 'Poppins',
  color: '#061625',
});

export const debugTestStyle = style({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '80vw',
  overflow: 'auto',
});

globalStyle(`${bodyStyle} *`, {
  margin: 0,
  padding: 0,
});

globalStyle(`${bodyStyle} div`, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  flexDirection: 'column',
});
globalStyle(`${bodyStyle} h1`, {
  fontSize: 200,
  fontWeight: 700,
  lineHeight: 1,
  paddingTop: '.25em',
});
globalStyle(`${bodyStyle} h2`, {
  fontWeight: '100',
});
