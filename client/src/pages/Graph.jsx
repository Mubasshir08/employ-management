import React from 'react'
import {Gauge, gaugeClasses} from '@mui/x-charts/Gauge'
function Graph() {
  return (
    <section>
        <h3 className='text-lg text-center mt-6'>Performance</h3>
        <Gauge
                value={75}
                startAngle={0}
                endAngle={360}
                innerRadius="80%"
                outerRadius="100%"
                width={100} height={100}
                sx={(theme) => ({
                    [`& .${gaugeClasses.valueArc}`]: {
                      fill: '#EE7579',
                    }
                  })}
        />
    </section>
  )
}

export default Graph