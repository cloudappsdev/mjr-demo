
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./Xclips.css"

import goSet from "./galway1.json";
import ClipSetInfo from './ClipSetInfo';

const goSetX: ClipData[] = goSet;



function Home() {

  console.log('goSet', goSetX);

/*   console.log('');
  console.log('typeof goSetX', typeof goSetX);


  console.log("typeof set1Ord: ", typeof set1Ord);
  console.log('');
  console.log('typeof set1Ord.clipInfo:', typeof set1Ord.clipInfo);
 */

  return (
    <>
    <div>my-header</div>
    <Tabs>
    <TabList style={{ width: "50%", margin: "0 auto" }}>
      <Tab style={{ width: "45%"}}>Acoustic</Tab>
      <Tab style={{ width: "45%"}}>Full-Band</Tab>
    </TabList>

    <TabPanel>
      <br/>
      <Tabs>
        <TabList style={{ width: "50%", margin: "0 auto" }}>
          <Tab style={{ width: "45%"}}>Set 1</Tab>
          <Tab style={{ width: "45%"}}>Set 2</Tab>
        </TabList>

        <TabPanel>
          
        </TabPanel>
        <TabPanel>
          
        </TabPanel>
      </Tabs>
      
    </TabPanel>
    <TabPanel>
      <br/>
      <Tabs className="cmg">
            <TabList style={{ width: "50%", margin: "0 auto" }}>
              <Tab style={{ width: "45%"}}>Set 1x</Tab>
              <Tab style={{ width: "45%"}}>Set 2</Tab>
            </TabList>

            <TabPanel>
              <ClipSetInfo clipInfo={goSetX} />
              
            </TabPanel>
            <TabPanel>
              
            </TabPanel>
      </Tabs>
      


    </TabPanel>
  </Tabs>
  </>
  )
  }


export default Home