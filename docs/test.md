# Widget Test Page

## Meta-Graph: Neo4j SVG Export + zoompan.js

<InteractiveSvg
  url="images/raw.meta.svg"
  start-x="-100"
  start-y="-180"
  start-scale="0.6"
/>

## Meta-Graph: Neo4j JSON Export + sigma.js

<SigmaGraph
  url="raw.meta.json"
/>

## Meta-Graph: Neo4j JSON Export + cytoscape.js

<CytoscapeGraph
  url="raw.meta.json"
/>

## Node Properties

<PropertyList
  url="raw.props.json"
  scope="nodes"
/>

## Relationship Properties

<PropertyList
  url="raw.props.json"
  scope="relationships"
/>
