const { readFileSync, writeFileSync } = require('fs');
const parseCSV =  require('csv-parse/lib/sync');

const runwaysData = parseCSV(readFileSync('./data/runways.csv', 'utf-8'), {
  columns: true,
  skipEmptyLines: true,
});

let airports = {};

for (const runway of runwaysData) {
  if (runway.he_ident == 'high' || runway.le_ident == 'lower') continue;

  if (!Object.keys(airports).includes(runway.airport_ident)) {
    airports[runway.airport_ident] = {
      ident: runway.airport_ident,
      runways: {},
    };
  }

  airports[runway.airport_ident].runways[runway.he_ident] = {
    ident: runway.he_ident,
    heading: parseInt(runway.he_heading_degT),
    length: parseInt(runway.length_ft || '0'),
    displacedThresholdFt: parseInt(runway.he_displaced_threshold_ft || '0'),
    elevationFt: parseInt(runway.he_elevation_ft || '0'),
  };

  airports[runway.airport_ident].runways[runway.le_ident] = {
    ident: runway.le_ident,
    heading: parseInt(runway.le_heading_degT),
    length: parseInt(runway.length_ft || '0'),
    displacedThresholdFt: parseInt(runway.le_displaced_threshold_ft || '0'),
    elevationFt: parseInt(runway.le_elevation_ft || '0'),
  };
}

writeFileSync('./public/airports.json', JSON.stringify(airports));
