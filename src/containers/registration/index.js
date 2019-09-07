// @flow
import * as React from "react"
import { connect } from "react-redux"
import { View } from "native-base"
import InputField from "../../components/Input";
import AuthButton from "../../components/Button";

const RegistrationForm = props => {
  // const { handleSubmit, handleCustomSubmit } = props
  // const onSubmit = values => {
  //   handleCustomSubmit(values)
  // }
  return (
    <View>
      <InputField placeholder='Name' />
      <InputField placeholder='Email' />
      <InputField placeholder='Password' />
      <View>
        <AuthButton text='Register' />
      </View>
    </View>
  )
}

// connect(null, null)(RegistrationForm)
export default RegistrationForm;
