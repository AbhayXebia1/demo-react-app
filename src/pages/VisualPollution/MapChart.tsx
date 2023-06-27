import React, { memo } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const MapChart = ({ setTooltipContent }: { setTooltipContent: Function }) => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1100,
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#D6D6DA"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onMouseEnter={() => {
                setTooltipContent(`${geo.properties.name}`);
              }}
              onMouseLeave={() => {
                setTooltipContent('');
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default memo(MapChart);
