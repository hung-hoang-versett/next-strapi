/*
 *
 * FormsPage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import getTrad from '../../utils/getTrad';
import { FormattedMessage } from 'react-intl';
import { useFormsList } from '../../hooks';
import { List, Header } from '@buffetjs/custom';
import {useIntl} from 'react-intl'
import {FormRow} from '../../components/Forms'
const FormsPage = () => {
  const { formatMessage } = useIntl();
  const { forms, getData, isLoading } = useFormsList(true);
  const items = forms ? forms.items : []
  return (
    <div>
      <h1><FormattedMessage id={getTrad('plugin.name')} /></h1>
      <List
            title={"Forms"}
            items={items}
            isLoading={isLoading}
            customRowComponent={form => (
              <FormRow form={form} />
            )}
          />
    </div>
  );
};

export default memo(FormsPage);
