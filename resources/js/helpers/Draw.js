import React from 'react';
import Seed from '../components/game/Seed'
import Path from '../components/game/Path'
import House from '../components/game/House'
import CenterLudo from '../components/game/CenterLudo'

const seeder = (num, color, refNo, parent) => {
  let seeds = []
  let no = refNo
  for (let i = 0; i < num; i++) {
    seeds[i] = <Seed onRef={ ref => (parent.seedRefs[no++] = ref)} color={color} />
  }
  return seeds
}

let pHouse = (seeds, color) => (
  <div className="c">
    <House seeds={seeds} color={color} />
  </div>
)

let printPaths = (col, row, pathMeta) => {
  let cols = []
  let key = 0
  for (let i = 0; i < row; i++) {
    let row = []
    for (let ii = 0; ii < col; ii++) {
      row[ii] = <Path seed={[]} key={key++}
      color={ ((pathMeta) => {
          if (pathMeta.position === 'left' && ((i === 0 && ii === 1) || (i === 1 && ii > 0)) ) return 'primary'

          if (pathMeta.position === 'right' && ((i === 2 && ii === 4) || (i === 1 && ii >= 0 && ii < 5))) return 'success'

          if (pathMeta.position === 'top' && ((i === 1 && ii === 2) || (i > 0 && ii === 1)) ) return 'warning'

          if (pathMeta.position === 'buttom' && ((i === 4 && ii === 0) || (ii === 1 && i >= 0 && i < 5)) ) return 'danger'

          return 'light'
        })(pathMeta)
      }
      />
    }
    cols[i] = row
  }

    cols = cols.map((r, i) => (
      <div className="r" key={i}>
        {r}
      </div>
    ))
  return cols
}


export let Side = (props) => (
  <div className="c-5">
    <div className="r">
      {pHouse(props.meta.seeds[0], props.meta.colorTop)}
    </div>
    <div className="r">
      {printPaths(6, 3, {position: props.meta.position, color: props.meta.colorTop} )}
    </div>
    <div className="r">
      {pHouse(props.meta.seeds[1], props.meta.colorButtom)}
    </div>
  </div>
)

export let Middle = (props) => (
  <div className="c-2">
    <div className="r">
      {printPaths(3, 6, {position: 'top', color: 'success'})}
    </div>
    <div className="r">
      <CenterLudo rolled={props.meta.currentRoll} gameState={props.meta.gameState} roll={props.meta.roll} />
    </div>
    <div className="r">
      {printPaths(3, 6, {position: 'buttom', color: 'danger'})}
    </div>
  </div>
)

export const generateSeeds = (parent) => {
  return {
    side1: [seeder(4, 'primary', 1, parent),seeder(4, 'danger', 5, parent)],
    side2: [seeder(4, 'warning', 9, parent),seeder(4, 'success', 13, parent)],
  }
}
