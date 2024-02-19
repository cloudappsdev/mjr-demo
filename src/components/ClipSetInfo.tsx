import { useState } from "react";
import ClipList from "./ClipList";
import "./ClipSetInfo.css";

function ClipSetInfo(props: { smpl: string; clipInfo: ClipData[] }) {
  console.log("my-p", props);
  const { smpl, clipInfo } = props;

  const [displayType, setDisplayType] = useState(1);

  // console.log('data', clipData);
  return (
    <>
      <div style={{ paddingTop: "10px" }}>Three Ways to Watch</div>
      <div className="even-full">
        <div className="hdr-choice">
          <button className="ways-button" onClick={() => setDisplayType(0)}>
            Sampler
            <br />
            Shown by Default
          </button>
        </div>
        <div className="hdr-choice">
          <button className="ways-button" onClick={() => setDisplayType(1)}>
            Song-links
            <br />
            full-length songs
          </button>
        </div>
        <div className="hdr-choice">
          <button className="ways-button" onClick={() => setDisplayType(2)}>
            I'm Feeling Lucky
            <br /> (random top songs)
          </button>
        </div>
      </div>

      <br />
      {displayType == 0 && <div dangerouslySetInnerHTML={{ __html: smpl }} />}
      {displayType == 1 && <ClipList r={false} clipInfo={clipInfo} />}
      {displayType == 2 && <ClipList r={true} clipInfo={clipInfo} />}
    </>
  );
}

export default ClipSetInfo;
