import React from 'react';
import Nav from 'js/components/nav';
import HomePage from 'js/pages/home';
import Category from 'js/pages/category';
import QuickReplies from 'js/pages/quick-replies';
import props from 'js/props';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

export default class App extends React.Component {
  getChildContext() {
    const config = {};
    if (this.props.userAgent){
      config.userAgent = this.props.userAgent;
    }
    return { muiTheme: getMuiTheme(baseTheme, config) };
  }

  render() {
    let {
      section,
      data
    } = this.props;
    let sectionTitle, content;

    if ( data[ section ] ) {
      this.videos = data[ section ].videos;
      sectionTitle = data[ section ].title;
      content = (
        <QuickReplies
          { ...this.props }
        />
      );
    } else if ( section ) {
      this.videos = data.categories[ section ].videos;
      sectionTitle = data.categories[ section ].title;
      content = (
        <Category
          { ...this.props }
        />
      );
    } else {
      content = (
        <HomePage
          { ...this.props }
        />
      );
    }

    return (
      <div>
        <Nav
          title={ sectionTitle || 'Trash Meme' }
          { ...this.props }
        />
        { content }
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

App.propTypes = {
  data: React.PropTypes.shape({
    categories: React.PropTypes.objectOf( props.section ).isRequired
  }).isRequired,
  navigateTo: React.PropTypes.func.isRequired,
  section: React.PropTypes.string
};
