'use strict';

var React = require('react');

function Link(props) {
  var fill = props.fill || '#000';
  var width = props.width || '1rem';
  var height = props.height || '1rem';
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 16 16',
      enableBackground: 'new 0 0 16 16',
      width: width,
      height: height,
      className: 'icon'
    },
    React.createElement('path', {
      fill: fill
      // eslint-disable-next-line
      , d: 'M14.9,1.1C14.2,0.4,13.2,0,12.1,0c-1.1,0-2,0.4-2.8,1.1L7.7,2.8C7,3.5,6.5,4.5,6.5,5.6          c0,0.4,0.1,0.8,0.2,1.2C6.4,6.6,6,6.5,5.6,6.5c-1.1,0-2,0.4-2.8,1.1L1.1,9.4C0.4,10.1,0,11,0,12.1c0,1.1,0.4,2.1,1.1,2.8          C1.8,15.6,2.8,16,3.9,16c1.1,0,2-0.4,2.8-1.1l1.7-1.7c0.7-0.7,1.1-1.7,1.1-2.8c0-0.4-0.1-0.8-0.2-1.2c0.4,0.1,0.8,0.2,1.2,0.2          c1.1,0,2-0.4,2.8-1.1l1.7-1.7C15.6,5.9,16,5,16,3.9C16,2.8,15.6,1.8,14.9,1.1z M7.3,12.2l-1.7,1.7c-0.5,0.5-1.1,0.7-1.7,0.7          c-0.7,0-1.3-0.3-1.8-0.7c-0.4-0.4-0.7-1.1-0.7-1.8c0-0.7,0.3-1.3,0.7-1.7l1.7-1.7C4.3,8.3,4.9,8,5.6,8C6,8,6.3,8.1,6.7,8.3l-2.1,2.1          l1,1l2.1-2.1C7.9,9.7,8,10,8,10.4C8,11.1,7.7,11.7,7.3,12.2z M13.8,5.6l-1.7,1.7C11.7,7.7,11.1,8,10.4,8C10,8,9.6,7.9,9.3,7.7 l2.1-2.1l-1-1L8.3,6.7C8.1,6.4,8,6,8,5.6c0-0.7,0.3-1.3,0.7-1.7l1.7-1.7c0.5-0.5,1.1-0.7,1.7-0.7c0.7,0,1.3,0.3,1.7,0.7 s0.7,1.1,0.7,1.7C14.5,4.5,14.3,5.2,13.8,5.6z'
    })
  );
}

Link.propTypes = {
  fill: React.PropTypes.string,
  width: React.PropTypes.string,
  height: React.PropTypes.string
};

module.exports = Link;
//# sourceMappingURL=index.js.map