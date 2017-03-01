import React from 'react';
import CategoryBody from 'js/components/category-body';
import style from 'js/style';
import props from 'js/props';

export default class Category extends React.Component {
  render() {
    const {
      section,
      selected,
      data
    } = this.props;
    const {
      videos
    } = data.categories[ section ];
    const currentVideo = selected ? videos[ selected ] : null;

    return (
      <div
        style={ Object.assign({}, style.pages.category.container, {
          'background': `url(/img/${section}.jpg) no-repeat 50% calc(50% + 70px) / cover`
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

Category.propTypes = {
  data: React.PropTypes.shape({
    categories: React.PropTypes.objectOf( props.section ).isRequired
  }).isRequired,
  section: React.PropTypes.string.isRequired,
  selected: React.PropTypes.string
};
