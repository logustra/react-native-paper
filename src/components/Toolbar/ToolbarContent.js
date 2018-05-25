/* @flow */

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import color from 'color';

import Text from '../Typography/Text';

import withTheme from '../../core/withTheme';
import { black } from '../../styles/colors';

import type { Theme } from '../../types';

type Props = {
  /**
   * CUstom color for the text.
   */
  color?: string,
  /**
   * Text for the title.
   */
  title: string | React.Node,
  /**
   * Style for the title.
   */
  titleStyle?: any,
  /**
   * Text for the subtitle.
   */
  subtitle?: string | React.Node,
  /**
   * Style for the subtitle.
   */
  subtitleStyle?: any,
  style?: any,
  /**
   * @optional
   */
  theme: Theme,
};

/**
 * A component used to display a title and optional subtitle in a toolbar.
 */
class ToolbarContent extends React.Component<Props> {
  static displayName = 'Toolbar.Content';

  render() {
    const {
      color: titleColor = black,
      subtitle,
      subtitleStyle,
      style,
      titleStyle,
      theme,
      title,
    } = this.props;
    const { fonts } = theme;

    const subtitleColor = color(titleColor)
      .alpha(0.7)
      .rgb()
      .string();

    return (
      <View style={[styles.container, style]}>
        <Text
          style={[
            { color: titleColor, fontFamily: fonts.medium },
            styles.title,
            titleStyle,
          ]}
          numberOfLines={1}
        >
          {title}
        </Text>
        {subtitle && (
          <Text
            style={[styles.subtitle, { color: subtitleColor }, subtitleStyle]}
            numberOfLines={1}
          >
            {subtitle}
          </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 14,
  },
});

export default withTheme(ToolbarContent);
