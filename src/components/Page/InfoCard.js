import React, { Fragment } from "react"
import { decorateItem } from "@/outter/fr-schema/src/schema"

import { Card, Typography } from "antd"

const { Text } = Typography

/**
 * @module schema信息卡片
 * @param {String} title 标题
 * @param {Object} value 数据对象
 * @param {Object} schema schema定义
 * @param {Object} contentStyle Card的样式
 */

const InfoCard = ({ title, value, schema, contentStyle = {} }) => {
    let showData = decorateItem(value, schema, true)

    return (
        <Card
            title={title}
            style={{
                overflow: "auto"
            }}
        >
            <div
                style={{
                    lineHeight: 2,
                    overflow: "auto",
                    ...contentStyle
                }}
            >
                {value &&
                    Object.keys(schema).map(key => {
                        const item = schema[key]
                        return (
                            <Fragment key={key}>
                                <Text>{`${item.title} : ${
                                    showData[key]
                                        ? showData[key].toString()
                                        : ""
                                }`}</Text>
                                <br />
                            </Fragment>
                        )
                    })}
            </div>
        </Card>
    )
}

export default React.memo(InfoCard)
