import React from 'react';
import PropTypes from 'prop-types';

export default class Google extends React.Component {
  componentDidMount() {
    if(window) (window.adsbygoogle = window.adsbygoogle || []).push({});
  };

  render() {
    return (
      <ins className="adsbygoogle" 
        style={this.props.style} 
        data-ad-client={this.props.client} 
        data-ad-slot={this.props.slot} 
        data-ad-format={this.props.format}
        data-ad-layout-key={this.props.layoutKey}
        ></ins>
    );
  }
};

Google.propTypes = {
  style: PropTypes.object, // eslint-disable-line
  client: PropTypes.string.isRequired,
  slot: PropTypes.string.isRequired,
  format: PropTypes.string,
  layoutKey: PropTypes.string,
};

Google.defaultProps = {
  style: {display: 'block'}, 
  format: 'auto',
};
