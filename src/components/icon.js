import React from 'react';
import PropTypes from 'prop-types';
import icons from '../assets/icon-sprite.svg';

const Icon = ({ width, height, id, className, size }) => (
    <svg
      width={size ?? width}
      height={size ?? height}
      className={className}
    >
      <use xlinkHref={`${icons}#${id}`} />
    </svg>
)

Icon.propTypes = {
  id: PropTypes.string,
};

export default Icon;