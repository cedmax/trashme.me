import React from 'react';
import Container from 'js/components/container';
import AutoComplete from 'js/components/autocomplete';
import MediaCard from 'js/components/mediacard';
import props from 'js/props';


export default class CategoryBody extends React.Component {
  render() {
    const {
      currentVideo,
      videos
    } = this.props;

    let mediaCard;
    if ( currentVideo ) {
      mediaCard = (
        <MediaCard
          { ...this.props }
          currentVideo={ currentVideo }
        />
      );
    }

    return (
      <Container>
        <AutoComplete
          { ...this.props }
          value={ currentVideo && currentVideo.title }
          options={ videos }
        />
        {mediaCard}
      </Container>
    );
  }
}

CategoryBody.propTypes = {
  videos: React.PropTypes.object.isRequired,
  currentVideo: props.video
};