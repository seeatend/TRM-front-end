/**
 * @module React, PureComponent
 */
import React, { PureComponent } from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 * @module Input
 */
import Input from 'components/input/Input'

/**
 * @module Checkbox
 */
import Checkbox from 'components/input/Checkbox'

/**
 *  @module Form, Field
 */
import { Form, Field, Submit } from 'components/forms/BaseForm'

/**
 * @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

/**
 *  @module Link
 */
import { Link } from 'react-router-dom'

import {
  FIRSTNAME_PLACEHOLDER,
  SURNAME_PLACEHOLDER,
  EMAIL_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
  AGE_CHECK_PLACEHOLDER
} from 'texts/forms'

/**
 * @name RegisterForm
 * @extends {PureComponent}
 * @param { Object } props
 * @property {Object} [values]
 * @property {Function} [validators]
 * @return { React.Component }
 */
class RegisterForm extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const { submitForm, values, canProgress } = this.props

    return (
      <div className='register-form'>
        <Form
          handleSubmit={() => { submitForm(values) }}
          {...this.props}
          className='register-form__form'>

          <div className='form__group'>
            <h4 className='register-form__section-label semi-bold'>Name</h4>
          </div>

          <div className='form__group'>
            <Field
              component={Input}
              placeholder={FIRSTNAME_PLACEHOLDER}
              validate={['firstname']}
              name='firstname' />
          </div>
          <div className='form__group'>
            <Field
              component={Input}
              placeholder={SURNAME_PLACEHOLDER}
              validate={['surname']}
              name='surname' />
          </div>
          <div className='form__group'>
            <h4 className='register-form__section-label register-form__section-label--title-margin'>Email</h4>
          </div>

          <div className='form__group'>
            <Field
              component={Input}
              placeholder={EMAIL_PLACEHOLDER}
              validate={['email']}
              name='email' />
          </div>

          <div className='form__group'>
            <h4 className='register-form__section-label register-form__section-label--title-margin'>Password</h4>
          </div>
          <div className='form__group'>
            <Field
              component={Input}
              placeholder={PASSWORD_PLACEHOLDER}
              validate={['password']}
              type='password'
              name='password' />
          </div>
          <div className='form__group'>
            <div className='register-form__checkboxes'>
              <Field
                component={Checkbox}
                label={AGE_CHECK_PLACEHOLDER}
                validate={['overEighteen']}
                name='overEighteen' />
              <Field
                component={Checkbox}
                label={<span>Do you agree to <Link to="/terms-and-conditions">terms and conditions</Link>?</span>}
                validate={['termsAndConditions']}
                name='termsAndConditions' />
            </div>
          </div>
          <Link to='/browse-horses'>
            <Submit component={(props) => TextButton({
              ...props,
              text: 'Create my account',
              className: 'register-form__submit',
              isDisabled: !canProgress
            })} />
          </Link>
        </Form>
      </div>
    )
  }
}

/**
 *  propTypes
 *  @type {Object}
 */
RegisterForm.propTypes = {
  submitForm: PropTypes.func,
  values: PropTypes.object
}

/**
 *  @module ManagerRegistration
 */
export default RegisterForm
