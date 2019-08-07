import React, { PureComponent } from 'react'
import frSchema from "@/outter/fr-schema/src"
import { schemas } from '../../index'
import { createForm } from '../../utils/component'
import './InfoForm.less'

const { getInfoColumn } = frSchema

/**
 * values: null,
 * form: form,
 * schema: null, // option
 * resource: null, // schema or resource  two choose one
 * action: null,
 * style: null,
 * otherTabs: null,
 * extend: null,
 * colNum: null,
 */
class InfoForm extends PureComponent {
  constructor(props) {
    super(props)
    
    this.state = {
      data: props.values || {},
      updateFlag: !!props.values
    }
    
    // set column
    this.state.column = getInfoColumn(
      props.schema || schemas[props.resource],
      props.action
    )
  }
  
  renderContent(data) {
    const { column } = this.state
    const { form, action, style, otherTabs, extend, colNum } = this.props
    return createForm.bind(this)(
      column,
      data,
      form,
      action,
      style,
      otherTabs,
      extend,
      colNum
    )
  }
  
  render() {
    const { data } = this.state
    return this.renderContent(data)
  }
}

export default InfoForm
