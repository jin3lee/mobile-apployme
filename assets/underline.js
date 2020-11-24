import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function Underline() {
  const singleLineSvg = '<svg width="258" height="2" viewBox="0 0 258 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1H258" stroke="#9E9E9E" stroke-width="1.5"/></svg>';
  const Svg = () => <SvgXml xml={ singleLineSvg } width="258px" height="2px" />;

  return <Svg />;
}