import View from './View';
import { compose, withProps } from 'recompose';
import { reduxForm } from 'redux-form'

export default compose(
  withProps(() => ({
    initialValues: {
      firstMeal: ['Meal 1', 'Meal 2'],
      secondMeal: ['Meal 1', 'Meal 2'],
    },
  })),

  reduxForm({
    form: 'fieldsArray'
  })
)(View);
