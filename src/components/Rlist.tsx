
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

const array = [1, 2, 3, 4];

// const shuffledArray = array.sort((a, b) => 0.5 - Math.random());

const sortIt = (arr: number[]):number[] => {
  return arr.sort((a, b) => 0.5 - Math.random());
}


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
            data.map((row, rNdx: number) => {
              return <tr key={rNdx}>
                {
                  Object.entries(row).map(([k,v], fNdx: number) => {
                    return <td key={fNdx}>{v}</td>
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

  let rsCars: AutoCar[] = [];

  const randNums = sortIt(array);

  randNums.forEach(x => {
    rsCars.push(carListStrong.filter(car => (car.id==x))[0]);
    
  });

  console.log('rsCars', rsCars);

  return (
    <>
      <div>Rlist</div>

      { showTable( Object.keys(carListStrong[0]), rsCars) }

      </>
  )
}

export default Rlist