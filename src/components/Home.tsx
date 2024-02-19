import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Xclips.css";

import ghfSet1 from "./galway1.json";
import ghfSet2 from "./galway2.json";
import ClipSetInfo from "./ClipSetInfo";

const ghfxSet1: ClipData[] = ghfSet1;
const ghfxSet2: ClipData[] = ghfSet2;

const ghfSmpl1 =
  '<iframe width="987" height="555" src="https://www.youtube.com/embed/5J9kETV83kw" title="The MarJays, Set1 music for Galway Farms" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

const ghfSmpl2 =
  '<iframe width="987" height="555" src="https://www.youtube.com/embed/AufcjqNJBZk" title="The MarJays, full-band, Set2 music for Galway Farms" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe';

function Home() {
  return (
    <>
      <div>my-header</div>
      <div>
        Our inept "set-it and forget-it" videographer, didn't always capture the
        whole stage or players, but we hope you enjoy the Music while you are
        here!
      </div>
      <Tabs>
        <TabList style={{ width: "50%", margin: "0 auto" }}>
          <Tab style={{ width: "45%" }}>Acoustic</Tab>
          <Tab style={{ width: "45%" }}>Full-Band</Tab>
        </TabList>

        <TabPanel>
          <br />
          <Tabs>
            <TabList style={{ width: "50%", margin: "0 auto" }}>
              <Tab style={{ width: "45%" }}>Set 1</Tab>
              <Tab style={{ width: "45%" }}>Set 2</Tab>
            </TabList>

            <TabPanel>
              <iframe
                width="987"
                height="555"
                src="https://www.youtube.com/embed/80m6ENmR45k"
                title="Mural Uno Mix Sampler"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </TabPanel>
            <TabPanel>
              <iframe
                width="987"
                height="555"
                src="https://www.youtube.com/embed/G60jnMDTBLI"
                title="Mix2 of Mural Art Fest, The MarJays"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <br />
          <Tabs className="cmg">
            <TabList style={{ width: "50%", margin: "0 auto" }}>
              <Tab style={{ width: "45%" }}>Set 1x</Tab>
              <Tab style={{ width: "45%" }}>Set 2</Tab>
            </TabList>

            <TabPanel>
              <ClipSetInfo smpl={ghfSmpl1} clipInfo={ghfxSet1} />
            </TabPanel>
            <TabPanel>
              <ClipSetInfo smpl={ghfSmpl2} clipInfo={ghfxSet2} />
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default Home;
