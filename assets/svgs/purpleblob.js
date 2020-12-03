import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function PurpleBlob() {
  const singleLineSvg = '<svg width="710" height="614" viewBox="0 0 710 614" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M162.765 -8.88464C244.728 -16.6364 320.403 -109.36 394.724 -73.9851C466.405 -39.8669 458.878 65.4946 479.774 142.004C499.489 214.19 535.309 287.1 512.837 358.478C490.284 430.118 430.208 487.632 361.417 517.953C299.296 545.333 229.235 526.629 162.765 512.778C108.953 501.565 66.6451 468.358 16.411 446.062C-52.4969 415.477 -160.276 428.851 -185.901 358.022C-211.262 287.927 -111.696 234.101 -85.5285 164.302C-61.2275 99.4831 -96.1474 6.69652 -39.3304 -32.9339C17.685 -72.7026 93.5314 -2.33677 162.765 -8.88464Z" fill="#4A36A7"/><path fill-rule="evenodd" clip-rule="evenodd" d="M162.765 -8.88464C244.728 -16.6364 320.403 -109.36 394.724 -73.9851C466.405 -39.8669 458.878 65.4946 479.774 142.004C499.489 214.19 535.309 287.1 512.837 358.478C490.284 430.118 430.208 487.632 361.417 517.953C299.296 545.333 229.235 526.629 162.765 512.778C108.953 501.565 66.6451 468.358 16.411 446.062C-52.4969 415.477 -160.276 428.851 -185.901 358.022C-211.262 287.927 -111.696 234.101 -85.5285 164.302C-61.2275 99.4831 -96.1474 6.69652 -39.3304 -32.9339C17.685 -72.7026 93.5314 -2.33677 162.765 -8.88464Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="-190" y1="-82" x2="-57.1194" y2="638.445" gradientUnits="userSpaceOnUse"><stop stop-color="#4A36A7"/><stop offset="1" stop-color="#7560D2"/></linearGradient></defs></svg>';
  const Svg = () => <SvgXml xml={ singleLineSvg } width="710px" height="614px" />;

  return <Svg />;
}