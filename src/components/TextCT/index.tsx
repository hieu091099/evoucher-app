import React from 'react';
import {Text} from 'react-native'
const FontSize = {
  H1: 30,
  H2: 24,
  H3: 20,
  H4: 16,
  Body: 14,
  Label: 12,
};

const LineHeight = {
  H1: 38,
  H2: 32,
  H3: 28,
  H4: 24,
  Body: 22,
  Label: 20,
};

// H1, H2, H3, H4, Body, Label
const TextCT = ({
  children,
  type,
  color,
  bold,
  fontSize,
  fontWeight,
  lineHeight,
  center,
  right,
  style,
  ucfirst,
  uppercase,
  lowercase,
  numberOfLines,
  testid,
  onClick,
}: any) => {
  let _fontWeight = 300;
  if (bold) {
    _fontWeight = 600;
  }

  if (fontWeight) {
    _fontWeight = fontWeight;
  }

  let _fontSize = FontSize[0];
  let _lineHeight = LineHeight[0];
  if (type) {
    _fontSize = FontSize[`${type}`];
    _lineHeight = LineHeight[`${type}`];
  }

  if (fontSize) {
    _fontSize = fontSize;
  }
  if (lineHeight) {
    _lineHeight = lineHeight;
  }

  let textAlign = 'left';
  if (center) {
    textAlign = 'center';
  }
  if (right) {
    textAlign = 'right';
  }

  let _children = null;
  if (typeof children === 'string') {
    if (ucfirst) {
      _children =
        children.charAt(0).toUpperCase() + children.slice(1).toLowerCase();
    } else if (uppercase) {
      _children = children.toUpperCase();
    } else if (lowercase) {
      _children = children.toLowerCase();
    }
  }


  return (
    <Text
      style={{
        color,
        fontSize: _fontSize,
        fontWeight: _fontWeight,
        lineHeight: _lineHeight,
        textAlign,
        ...style,
      }}
      onPress={onClick}
    >
      {_children || children}
    </Text>
  );
};

export default TextCT;
