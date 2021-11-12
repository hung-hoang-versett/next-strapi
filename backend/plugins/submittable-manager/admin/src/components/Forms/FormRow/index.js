import React from 'react';
import PropTypes from 'prop-types';
import { CustomRow } from '@buffetjs/styles';
import { Text } from '@buffetjs/core';

const FormRow = ({ form }) => {
  return (
    <CustomRow>
      <td>
        <Text fontWeight="semiBold">{form.name}</Text>
      </td>
    </CustomRow>
  );
};

FormRow.defaultProps = {
};

FormRow.propTypes = {
  form: PropTypes.object.isRequired,
};

export default FormRow;
