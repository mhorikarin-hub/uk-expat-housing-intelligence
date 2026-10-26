// definitions/sources/declarations.js
const rawTables = [
  "dim_postcodes_w3_w5",
  "raw_met_crimes",
  "raw_ealing_epc",
  "raw_osm_supermarkets",
  "raw_tfl_ptal",
  "raw_japanese_pois",
  "raw_station_commute" 
];

rawTables.forEach((table) => {
  declare({
    database: "project-f9b55fc0-cc37-44aa-bca",
    schema: "uk_housing_acton",
    name: table
  });
});