import React, { memo, useState } from 'react';
import _ from 'lodash';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';

const MapChart = ({ setContent }: { setContent: Function }) => {
  const [markerCoordinates, setMarkerCoordinates] = useState<
    [number, number] | undefined
  >();

  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        center: [44, 24],
        scale: 1200,
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
              onClick={() => {
                console.log(geo);
                setContent(_.get(geo, 'properties.name'));

                const coordinates: [number, number] | undefined = _.get(
                  geo,
                  'geometry.coordinates[0][0][0]'
                );

                if (Array.isArray(coordinates) && coordinates.length === 2) {
                  setMarkerCoordinates(coordinates);
                }

                alert(`You clicked on ${_.get(geo, 'properties.name')}!`);
              }}
              style={{
                default: {
                  fill: '#D6D6DA',
                },
              }}
            />
          ))
        }
      </Geographies>
      {!!_.size(markerCoordinates) && (
        <Marker coordinates={markerCoordinates}>
          <circle r={8} fill="#F53" />
        </Marker>
      )}
    </ComposableMap>
  );
};

export default memo(MapChart);
