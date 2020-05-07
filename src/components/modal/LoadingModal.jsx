import React, { Fragment } from "react"
import { Spin, Modal, Spoin, Row, Col, Typography } from "antd";

const LoadingModal = function(props) {
    const { width = 120, tip } = props
    return (
        <Modal
            visible={true}
            centered={true}
            closable={false}
            mask={false}
            footer={null}
            width={width}
        >
            <Spin tip={tip}>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        margin: 12
                    }}
                ></div>
            </Spin>
        </Modal>
    )
}

export default React.memo(LoadingModal)
