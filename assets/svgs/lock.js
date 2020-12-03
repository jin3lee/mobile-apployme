import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function Lock() {
  const singleLineSvg = '<svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.1786 8.3125H14.2679V5.64062C14.2679 2.53086 11.6799 0 8.5 0C5.32009 0 2.73214 2.53086 2.73214 5.64062V8.3125H1.82143C0.815848 8.3125 0 9.11035 0 10.0938V17.2188C0 18.2021 0.815848 19 1.82143 19H15.1786C16.1842 19 17 18.2021 17 17.2188V10.0938C17 9.11035 16.1842 8.3125 15.1786 8.3125ZM11.2321 8.3125H5.76786V5.64062C5.76786 4.16738 6.99353 2.96875 8.5 2.96875C10.0065 2.96875 11.2321 4.16738 11.2321 5.64062V8.3125Z" fill="#9E9E9E"/></svg>';
  const Svg = () => <SvgXml xml={ singleLineSvg } width="17px" height="19px" />;

  return <Svg />;
}