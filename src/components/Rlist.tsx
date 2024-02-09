
// type CarData = typeof carList;



interface AutoCar {
    id: number,
    make: string,
    model: string,
    year: string,
    color: string
}

// import {carList} from "./CarData.json";

import carList from './CarData.json';

const carListStrong: AutoCar[] = carList;


const showTable = (headers: string[], data: AutoCar[]) => {

  console.log('headers', headers);
  return (
    <table style={{width: '80%', border: '1px solid white', margin: '0 auto'}}>
      <thead>
        <tr>
          {
            headers.map((row: string, hNdx: number) => {
              return <th key={hNdx}>{row}</th>
            })
          }
        </tr>
      </thead>
      <tbody>
          {
            data.map((row: object, rNdx: number) => {
              return <tr key={rNdx}>
                {
                  row.map((fld: any, fNdx: number) => {
                    return <td key={fNdx}>{fld}</td>
                  })
                }

              </tr>
            })
          }
      </tbody>
    </table>
  )

}

function Rlist() {

    // console.log('CarList', carList)
    console.log('carListStrong', carListStrong);
  return (
    <>
      <div>Rlist</div>

      { showTable( Object.keys(carListStrong[0]), []) }

      </>
  )
}

export default Rlist