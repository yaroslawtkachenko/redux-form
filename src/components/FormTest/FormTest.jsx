import React from 'react';
import { Field } from 'redux-form';
import CustomInput from '../CustomInput';

const FormTest = ({
    handleSubmit,
    submitting,
    pristine,
    reset,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <div>
                    <Field
                        component={CustomInput}
                        placeholder="First Name"
                        name="firstName"
                        label="name"
                        type="text"
                    />
                </div>
            </div>
            <div>
                <label>Last Name</label>
                <div>
                    <Field
                        component={CustomInput}
                        placeholder="Last Name"
                        label="last name"
                        name="lastName"
                        type="text"
                    />
                </div>
            </div>
            <div>
                <label>Email</label>
                <div>
                    <Field
                        component={CustomInput}
                        placeholder="Email"
                        label="email"
                        name="email"
                        type="email"
                    />
                </div>
            </div>
            <div>
                <label>Sex</label>
                <div>
                    <label>
                        <Field name="sex" component="input" type="radio" value="male" />{' '}
                        Male
                    </label>
                    <label>
                        <Field name="sex" component="input" type="radio" value="female" />{' '}
                        Female
                    </label>
                    <label>
                        <Field name="sex" component="input" type="radio" value="other" />{' '}
                        Other
                    </label>
                </div>
            </div>
            <div>
                <label>Favorite Color</label>
                <div>
                    <Field name="favoriteColor" component="select">
                        <option />
                        <option value="ff0000">Red</option>
                        <option value="00ff00">Green</option>
                        <option value="0000ff">Blue</option>
                    </Field>
                </div>
            </div>
            <div>
                <label htmlFor="employed">Employed</label>
                <div>
                    <Field
                        name="employed"
                        id="employed"
                        component="input"
                        type="checkbox"
                    />
                </div>
            </div>
            <div>
                <label>Notes</label>
                <div>
                    <Field name="notes" component="textarea" />
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
