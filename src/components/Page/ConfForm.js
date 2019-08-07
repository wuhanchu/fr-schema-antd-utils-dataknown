import React, { PureComponent } from "react"
import { Button, Form } from "antd"
import InfoForm from "./InfoForm"
import { connect } from "dva"

const FormItem = Form.Item

@connect(({ weixinMember, user, loading }) => ({
    member: weixinMember.member,
    user: user.currentUser,
    loading: loading.models.weixinMember
}))
@Form.create()
class ConfForm extends PureComponent {
    componentDidMount() {
        const { dispatch, user } = this.props
        dispatch({
            type: "weixinMember/getCurrent"
        })
    }

    handleSubmit = e => {
        const { dispatch, form, member, addon } = this.props
        e.preventDefault()
        form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log("handleSubmit", values)
                // const value = JSON.stringify(values);
                member.addons[addon] = values
                dispatch({
                    type: "weixinMember/update",
                    payload: {
                        ...member,
                        addon_config: JSON.stringify(member.addons)
                    }
                })
            }
        })
    }

    render() {
        const { member, addon, resource, form, loading } = this.props
        if (!member) {
            return null
        }
        const data = addon && member && member.addons[addon]

        const submitFormLayout = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 10, offset: 7 }
            }
        }

        return (
            <Form onSubmit={this.handleSubmit} hideRequiredMark>
                <InfoForm
                    values={data}
                    form={form}
                    resource={resource || "weixinMember"}
                />
                <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        保存
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

export default ConfForm
