import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function Avatar() {
  const singleLineSvg = '<svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="4" r="4" fill="#9E9E9E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.16149e-06 14.9091C4.16149e-06 14.9944 0.00177338 15.0794 0.00527635 15.1638C0.00177391 15.23 0 15.2966 0 15.3636C0 17.3719 1.59187 19 3.55554 19H12.4444L12.4444 19C14.4081 19 16 17.3719 16 15.3636C16 15.2966 15.9982 15.23 15.9947 15.1639C15.9982 15.0794 16 14.9945 16 14.9091C16 11.7985 13.65 9.24932 10.6667 9.01722V9H10.2222H5.77778H5.33333V9.01722C2.35002 9.24933 4.16149e-06 11.7985 4.16149e-06 14.9091Z" fill="#9E9E9E"/></svg>';
  const Svg = () => <SvgXml xml={ singleLineSvg } width="16px" height="19px" />;

  return <Svg />;
}