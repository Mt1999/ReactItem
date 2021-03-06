import React, { Component, createRef } from 'react'
import {
  Card,
  Row,
  Col
} from 'antd'

import echarts from 'echarts'

import { getArticleAmount } from '../../requests'

import './dashboard.less'


export default class Dashboard extends Component {
  constructor() {
    super()
    this.articleAmount = createRef()
  }
  initArticleChart = () => {
    this.articleChart = echarts.init(this.articleAmount.current)
    getArticleAmount()
      .then(resp => {
        const option = {
          xAxis: {
              type: 'category',
              data: resp.amount.map(item => item.month)
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: resp.amount.map(item => item.value),
              type: 'line',
              smooth: true
          }]
      }
        this.articleChart.setOption(option)
      })
  }
  componentDidMount() {
    this.initArticleChart()
  }
  render() {
    return (
      <>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
          </Col>
        </Row>
        <Card
          title="最近浏览量"
          bordered={false}
        >
          <div ref={this.articleAmount} style={{height: '400px'}} />
        </Card>
      </>
    )
  }
}
