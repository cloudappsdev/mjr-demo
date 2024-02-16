
import "./Photos.css";
// const bmost = { width: "90%", height: "90%"}


function Photos() {


const styles = {
    bmost: { width: "100%", 
            height: "90%",
            minHeight: "800px",
            border: "2px red solid"
        }, 
    best: {
        border: "2px solid green"
    }
};

  return (
    <>
    <div>Photos</div>
    <div>
        <iframe style={styles.bmost} src="https://mysrv.info/MarJays/OsTap/TheMarJays_Chicago.html" />
    </div>
    <div className="best">why are you here</div>
    </>
  )
}

export default Photos