import "./ClipList.css";



const sortIt = (arr: number[]):number[] => {
    return arr.sort((a, b) => 0.5 - Math.random());
}

const getRandomlyOrderedPlayList = (cInfo: ClipData[]) => {

    console.log('in ClipList getROP: cInfo: ', cInfo);

    console.log('map.out', cInfo.map(x => x.index));

    const arrRS: number[] = sortIt(cInfo.map(x => x.index));

    const finalClipInfo: ClipData[] = [];

    arrRS.forEach(x => {
        finalClipInfo.push(cInfo.filter(entity => (entity.index==x))[0]);
        
    });   

    console.log('typeof finalClipInfo: ', typeof finalClipInfo);
    return finalClipInfo;

}

// function ClipList(r: boolean, clipInfo: ClipData[]);
const ClipList = (props: {r: boolean, clipInfo: ClipData[]}) => {

    // console.log('my-props: ', ...props);

    const {r, clipInfo} = props;

/* 
    console.log('my-props: ', props);
    const {r, clipInfo} = props;

 */    
    console.log('r: ', r);
    console.log('clipInfo: ', clipInfo);

    const clipInfoFinal: ClipData[] = (r==false) ? clipInfo : getRandomlyOrderedPlayList(clipInfo);
    
  return (
    <>
        <div>ClipList</div>
        <div>~~~~~~~~~~~~~~</div>
        <div className="link-wrapper">

            {
                clipInfoFinal.map((xyz: ClipData, ndx: number) => {
                    return (
                        <div key={ndx} className="linkd">
                            
                            <a href={'#' + xyz.label}><span className="link-span">{xyz.song}</span></a><br/>
                        </div>
                    )

                })
            }

        </div>
        <hr style={{ width: "90%" }} />
            
        <ul className="big-ul">
            { 
                clipInfoFinal.map((xyz: ClipData, ndx: number) => {
                    return (
                        <li key={ndx} className="spacer">
                            <div id={xyz.label} className="span-wrap"><span className="song-link">{xyz.song}</span></div>
                            <div dangerouslySetInnerHTML={{__html: xyz.ytifm}} />
                        </li>
                    )

                })
            
            }

        
        </ul>

    </>

  )
}

export default ClipList