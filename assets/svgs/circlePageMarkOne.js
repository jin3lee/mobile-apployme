import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function CirclePageMarkOne() {
  const singleLineSvg = '<svg width="70" height="10" viewBox="0 0 70 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="5" fill="white"/><circle cx="35" cy="5" r="5" fill="#6E5EB6"/><circle cx="65" cy="5" r="5" fill="#6E5EB6"/></svg>';
  const Svg = () => <SvgXml xml={ singleLineSvg } width="70px" height="10px" />;

  return <Svg />;
}