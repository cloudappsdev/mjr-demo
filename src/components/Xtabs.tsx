import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./Xtabs.css"

function Xtabs() {
  return (
    <>
    <div>Xtabs</div>
    <Tabs>
    <TabList style={{ width: "50%", margin: "0 auto" }}>
      <Tab style={{ width: "45%"}}>Acoustic</Tab>
      <Tab style={{ width: "45%"}}>Full-Band</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Full-Band</h2>

      <iframe width="749" height="421" src="https://www.youtube.com/embed/5J9kETV83kw" title="The MarJays, Set1 music for Galway Farms" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </TabPanel>
  </Tabs>
  </>



  )
}

export default Xtabs