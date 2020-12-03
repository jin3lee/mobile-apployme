import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function UnderlineGreenShort() {
  const singleLineSvg = '<svg width="143" height="2" viewBox="0 0 143 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1H143" stroke="#339F2A" stroke-width="1.5"/></svg>';
  const Svg = () => <SvgXml xml={ singleLineSvg } width="143px" height="2px" />;

  return <Svg />;
}