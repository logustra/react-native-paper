/* @flow */

import * as React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {
  /**
   * Content of the `DialogContent`.
   */
  children: React.Node,
  style?: any,
};

/**
 * A component to show content in a Dialog.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Dialog, Paragraph } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   state = {
 *     visible: false,
 *   };
 *
 *   _hideDialog = () => this.setState({ visible: false });
 *
 *   render() {
 *     return (
 *       <Dialog
 *         visible={this.state.visible}
 *         onDismiss={this._hideDialog}>
 *         <Dialog.Content>
 *           <Paragraph>This is simple dialog</Paragraph>
 *         </Dialog.Content>
 *       </Dialog>
 *     );
 *   }
 * }
 * ```
 */
class DialogContent extends React.Component<Props> {
  static displayName = 'Dialog.Content';

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
    paddingHorizontal: 24,
  },
});

export default DialogContent;
