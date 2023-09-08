import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const HeadTabs = ({ tabs }: any) => {
  return (
    <Tabs>
      <TabList>
        {
          tabs?.map((item: any, index: number) => {
            return (
              <Tab key={index} >{item?.title}</Tab>
            )
          })
        }
      </TabList>
      {
        tabs?.map((item: any, index: number) => {
          return (
            <TabPanel key={index}>
              <div className=" mt-4">{item?.content}</div>
            </TabPanel>
          )
        })
      }
    </Tabs>
  )
}

export default HeadTabs