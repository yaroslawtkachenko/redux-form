import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const FieldArrayElement = ({
  label,
  renderComponent,
  inputProps,
  fields,
}) => {
  useEffect(() => {
    if (!fields.length) {
      fields.push();
    }
  });

  const getIcon = (index) => {
    const fieldValue = fields.get(index);
    if (fieldValue && index === fields.length - 1 && fields.length < 5) {
      return (
        <div
          onClick={() => fields.push()}
        >
          Add
        </div>
      );
    }
    if (index !== 0) {
      return (
        <div
          onClick={() => fields.remove(index)}
        >
          Remove
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <div>
        {fields.map((field, index) => (
          <div key={field}>
            <Field
              name={field}
              component={renderComponent}
              label={label}
              inputProps={inputProps}
            />
            {getIcon(index)}
          </div>
        ))}
      </div>
    </div>
  );
};

FieldArrayElement.propTypes = {
  label: PropTypes.string,
  renderComponent: PropTypes.node,
  inputProps: PropTypes.shape({}),
  fields: PropTypes.arrayOf(PropTypes.shape),
};

FieldArrayElement.defaultProps = {
  label: '',
  renderComponent: null,
  inputProps: {},
  fields: [],
};

export default FieldArrayElement;
