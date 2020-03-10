import React from 'react';
import { FieldArray } from 'redux-form';
import CustomInput from '../CustomInput';
import FieldArrayElement from '../FieldArrayElement';

const FormTest = ({
  handleSubmit,
  submitting,
  pristine,
  reset,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
          <div>
              <FieldArray
                name="firstMeal"
                component={props => (
                  <FieldArrayElement
                      label="First Meal"
                      renderComponent={CustomInput}
                      {...props}
                  />
                )}
              />
          </div>
      </div>
      <div>
          <div>
              <FieldArray
                name="secondMeal"
                component={props => (
                    <FieldArrayElement
                        label="Second Meal"
                        renderComponent={CustomInput}
                        {...props}
                    />
                )}
              />
          </div>
      </div>
      <div>
          <button type="submit" disabled={pristine || submitting}>
              Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
              Clear Values
          </button>
      </div>
    </form>
  )
};

export default FormTest;
