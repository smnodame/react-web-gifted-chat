import React, {createRef} from 'react';

import {
  FlatList,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import shallowequal from 'shallowequal';
import md5 from 'md5';
import LoadEarlier from './LoadEarlier';
import Message from './Message';

export default class MessageContainer extends React.Component {

  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.renderLoadEarlier = this.renderLoadEarlier.bind(this);
    this.renderScrollComponent = this.renderScrollComponent.bind(this);
    this.flatListRef = createRef();
    

    const messagesData = this.prepareMessages(props.messages);
  }

  prepareMessages(messages) {
    return {
      keys: messages.map((m) => m.id),
      blob: messages.reduce((o, m, i) => {
        const previousMessage = messages[i + 1] || {};
        const nextMessage = messages[i - 1] || {};
        // add next and previous messages to hash to ensure updates
        const toHash = JSON.stringify(m) + previousMessage.id + nextMessage.id;
        o[m.id] = {
          ...m,
          previousMessage,
          nextMessage,
          hash: md5(toHash),
        };
        return o;
      }, {}),
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!shallowequal(this.props, nextProps)) {
      return true;
    }
    if (!shallowequal(this.state, nextState)) {
      return true;
    }
    return false;
  }

  renderFooter() {
    if (this.props.renderFooter) {
      const footerProps = {
        ...this.props,
      };
      return this.props.renderFooter(footerProps);
    }
    return null;
  }

  renderLoadEarlier() {
    if (this.props.loadEarlier === true) {
      const loadEarlierProps = {
        ...this.props,
      };
      if (this.props.renderLoadEarlier) {
        return this.props.renderLoadEarlier(loadEarlierProps);
      }
      return (
        <LoadEarlier {...loadEarlierProps} />
      );
    }
    return null;
  }

  scrollTo(options) {
    // this._invertibleScrollViewRef.scrollTo(options);
  }

  renderRow({ item, index }) {
    const message = item;
    if (!message.id && message.id !== 0) {
      console.warn('GiftedChat: `id` is missing for message', JSON.stringify(message));
    }
    if (!message.user) {
      console.warn('GiftedChat: `user` is missing for message', JSON.stringify(message));
      message.user = {};
    }

    const messageProps = {
      ...this.props,
      key: message.id,
      currentMessage: message,
      previousMessage: message.previousMessage,
      nextMessage: message.nextMessage,
      position: message.user.id === this.props.user.id ? 'right' : 'left',
    };

    if (this.props.renderMessage) {
      return this.props.renderMessage(messageProps);
    }
    return <Message {...messageProps} />;
  }

  renderScrollComponent(props) {
    const invertibleScrollViewProps = this.props.invertibleScrollViewProps;
    return (
      <ScrollView
        {...props}
        {...invertibleScrollViewProps}
      />
    );
  }


  render() {
    return (
      <View
        style={{ flex: 1 }}
        onLayout={() => {
          //this.flatListRef.current.scrollTo({x: 0, y: 0, animated: true});
        }
      }
      >
        <FlatList
          ref={this.flatListRef}
          keyExtractor={(item) => `${item.id}`}
          enableEmptySections
          automaticallyAdjustContentInsets={false}
          inverted={this.props.inverted}
          data={this.props.messages}
          style={styles.listStyle}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={this.renderRow}
          {...this.props.invertibleScrollViewProps}
          ListFooterComponent={this.renderHeaderWrapper}
          ListHeaderComponent={this.renderFooter}
          {...this.props.listViewProps}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    justifyContent: 'flex-end',
  },
  headerWrapper: {
    flex: 1,
  },
  listStyle: {
    flex: 1,
  },
});

MessageContainer.defaultProps = {
  messages: [],
  user: {},
  renderFooter: null,
  renderMessage: null,
  listViewProps: {},
  onLoadEarlier: () => {
  },
};

MessageContainer.propTypes = {
  messages: PropTypes.array,
  user: PropTypes.object,
  renderFooter: PropTypes.func,
  renderMessage: PropTypes.func,
  onLoadEarlier: PropTypes.func,
  listViewProps: PropTypes.object,
};
