import React from 'react';
import CategoryBody from 'js/components/category-body';
import style from 'js/style';
import props from 'js/props';

export default class QuickReplies extends React.Component {
  render() {
    const {
      data,
      selected
    } = this.props;
    const {
      videos
    } = data.r;
    const currentVideo = selected ? videos[ selected ] : null;

    return (
      <div
        style={ Object.assign({}, style.pages.quickReplies.container, {
          'background': `url(/img/${currentVideo && currentVideo.category || 'r'}.jpg) no-repeat 50% calc(50% + 70px) / cover`
        }) }
      >
        <CategoryBody
          { ...this.props }
          currentVideo={ currentVideo }
          videos={ videos }
        />
      </div>
    );
  }
}

QuickReplies.propTypes = {
  data: React.PropTypes.shape({
    r: props.section.isRequired
  }).isRequired,
  selected: React.PropTypes.string
};
