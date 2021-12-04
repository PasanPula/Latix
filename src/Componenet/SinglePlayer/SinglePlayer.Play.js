import React from 'react';
import Timer from '../Timer/Timer';
import Grid from '../Game grid/grid';

export default function SinglePlayerPlay({time,operator,numberRangeStart,numberRangeEnd,gridSize}) {

    console.log(time,operator ,numberRangeStart,numberRangeEnd,gridSize);
    return (
        <div>
              <Grid  gridSize ={gridSize} numberRangeStart={numberRangeStart} numberRangeEnd={numberRangeEnd} MathOperator={operator}/>
              <Timer initMinute={time} />
        </div>
    )
}
