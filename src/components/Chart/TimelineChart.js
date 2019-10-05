import StandardTable from "../StandardTable"
import {
    Button,
    Card,
    Col,
    Divider,
    message,
    Popconfirm,
    Row,
    Form,
    Spin
} from "antd"
import isEqual from "lodash.isequal"
import React, { Fragment, PureComponent } from "react"
import { createFilter, getListColumn } from "../../utils/component"
import Authorized from "../Authorized/Authorized"
import styles from "./DataList.less"
import InfoModal from "./InfoModal"
import frSchema from "@/outter/fr-schema/src"
import { exportData } from "../../utils/xlsx"
import moment from "moment"
