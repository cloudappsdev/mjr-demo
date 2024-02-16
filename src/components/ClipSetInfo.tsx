import { useState } from "react";
import ClipList from "./ClipList";
import "./ClipSetInfo.css";


const styles = {
  a: "b"

};

function ClipSetInfo(props: {r: boolean, clipInfo: ClipData[]}) {

  console.log('my-p', props);
  const {r, clipInfo} = props;

  const [displayType, setDisplayType] = useState(1);

  const showSampler = () => {
    setDisplayType(0);
  }

  // console.log('data', clipData);
  return (
    <>
      <div>ClipSetInfo</div>
      <div className="even-full">
        <div className="hdr-choice">
          <a className="div-link" onClick={showSampler}>Sampler-shown</a>
        </div>
        <div className="hdr-choice">
        <a className="div-link">Song-links (Full)</a>
        </div>
        <div className="hdr-choice">
          <button >Feeling Lucky (random top songs)</button>
        </div>
      </div>

      <br/>
      {displayType==0 && "Fake iFrame Sampler here"}
      {displayType==1 && <ClipList r={false} clipInfo={clipInfo} />}
      {displayType==2 && <ClipList r={true} clipInfo={clipInfo} />}
    </>

  )
}

export default ClipSetInfo