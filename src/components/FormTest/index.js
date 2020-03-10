import FormTest from './FormTest'
import { reduxForm } from 'redux-form'

export default reduxForm({
  form: 'test'
})(FormTest);
