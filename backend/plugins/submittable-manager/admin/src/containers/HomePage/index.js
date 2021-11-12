/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import getTrad from '../../utils/getTrad';
import { FormattedMessage } from 'react-intl';
import {Link} from 'react-router-dom'
const HomePage = () => {
  return (
    <div>
      <h1><FormattedMessage id={getTrad('plugin.name')} /></h1>
      <Link to={`/plugins/${pluginId}/forms`}>Forms</Link>
    </div>
  );
};

export default memo(HomePage);
