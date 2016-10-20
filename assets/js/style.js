const sectionStyle = {
  'position': 'absolute',
  'height': '100%',
  'width': '100%'
};

export default {
  buttons: {
    'verticalAlign': 'middle',
    'display': 'inline-block'
  },
  autocomplete: {
    container: {
      'minWidth': '250px',
      'width': '40%',
      'margin': 'auto'
    }
  },
  container: {
    main: {
      'padding': 20,
      'textAlign': 'center',
      'display': 'block',
      'margin': 'auto'
    }
  },
  link: {
    main: {
      'fontFamily': 'monospace',
      'display': 'inline-block',
      'width': '80%',
      'whiteSpace': 'nowrap',
      'overflow': 'hidden',
      'textOverflow': 'ellipsis',
      'verticalAlign': 'middle'
    }
  },
  mediaCard: {
    container: {
      'position': 'absolute',
      'top': '25%',
      'marginTop': '200px',
      'left': '50%',
      'transform': 'translate3D(-50%,-50%,0)',
      'width': '80vmin'
    },
    subtitle: {
      'display': 'flex',
      'alignItems': 'center'
    }
  },
  nav: {
    button: {
      'padding': '5px 0',
      'minWidth': 'auto',
      'height': 'auto'
    },
    label: {
      'color': '#fff',
      'display': 'block',
      'fontSize': '70%',
      'lineHeight': 1.5
    }
  },
  submitDialog: {
    main: {
      'border': 0,
      'margin': 0,
      'padding': 0
    }
  },
  video: {
    container: {
      'position': 'relative',
      'paddingBottom': '56.25%',
      'paddingTop': '25px',
      'height': '0'
    },
    videoItem: {
      'border': '0',
      'position': 'absolute',
      'top': '0',
      'left': '0',
      'width': '100%',
      'height': '100%'
    }
  },
  pages: {
    home: {
      cardContainer:  {
        'position': 'absolute',
        'right': '1%',
        'left': '1%',
        'top': '1%',
        'marginTop': '70px',
        'bottom': '1%',
        'display': 'flex',
        'flexWrap': 'wrap',
        'flexDirection': 'row',
        'justifyContent': 'space-between'
      },
      card: {
        'position': 'relative',
        'marginBottom': '1%',
        'cursor': 'pointer',
        'height': '32%',
        'width': '49.50%'
      }
    },
    category: {
      container: sectionStyle
    },
    quickReplies: {
      container: sectionStyle
    }
  }
};
