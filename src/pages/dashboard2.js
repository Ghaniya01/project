import React from 'react'
import Dashboards from '../components/Dashboards'
import { dashboard2 } from '../components/Dashboards/data'
import ScrollToTop from '../components/ScrollToTop';

const Dashboard2 = () => {
  return (
    <>
    <Dashboards {...dashboard2}/>
    <ScrollToTop/>
    </>
  )
}

export default Dashboard2