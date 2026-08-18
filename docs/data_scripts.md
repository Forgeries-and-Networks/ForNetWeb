# Forgeries and Networks (data & scripts)

This is a quick guide to get started with the project's data. We also provide a
set of scripts to get you started with some of the dependencies and tools.

The data itself lives in a
[separate repository](https://github.com/Forgeries-and-Networks/data) and its
structured as a set of tripples best explored through the functionality and user
interface of the Neo4j Community Edition Server. The following section shows how
the software can be deployed easily on a workstation.

We also provide a number of alternative formats to get you started with other
software tools.


# Getting started

The workflow depends on [docker](https://www.docker.com). Make sure it is
installed for your platform of choice (Linux, Mac or Windows should all work).
[Docker Desktop](https://www.docker.com/products/docker-desktop/) should work as
well.

Download the scripts repository
[here](https://github.com/Forgeries-and-Networks/scripts/archive/refs/heads/master.zip)
and unpack it to a directory of your choice. Alternatively clone the repository
if you have git installed:

    git clone https://github.com/Forgeries-and-Networks/scripts.git

Then use a terminal (CMD on Windows should work) and navigate to the directory
you just unpacked:

    cd <path/to/directory>

Then also download data repository
[here](https://github.com/Forgeries-and-Networks/scripts/archive/refs/heads/master.zip)
to a directory `data/` or use git clone instead:

    git clone https://github.com/Forgeries-and-Networks/scripts.git ./data

Now start neo4j with the following command

    ./run.sh neo4j

This will take a couple of minutes after which you should be able to access
http://localhost:7474 with your browser. In the neo4j web UI, select 'No
authentication' and click "Connect".

Once you see the neo4j web interface, open a second terminal and import the
actual data

    ./run.sh import <dataset>

There are currently two datasets, "full" (fully annotated version) and
"raw" (the raw facts without annotations). This will take roughly a minute.
After it finished, you should see the data in the neo4j web interface at
http://localhost:7474


# Other formats

The neo4j gives you access to the data the same way as the research team was
working on it. For your convenience, this repository contains a number of
alternative formats and the code to produce them, see the `formats/` directory.
You'll find

* **.dump**: A binary graph dump format that allows importing into a
  neo4j-desktop instance
* **.cypher**: A text-based graph dump format that allows importing into a
  neo4j server community edition
* **.graphml**: A graph format used by some applications, most notably
[Gephi](https://gephi.org/)
* **.rdf.ttl** A RDF format supporting a number of software tools,
  such as [Apache Jena Fuseki](https://jena.apache.org/documentation/fuseki2/index.html),
  python's [rdflib](https://pypi.org/project/rdflib/) or
  ruby's [RDF]https://rubygems.org/gems/rdf gem. A JSON-LD variant as well as a
  XML variant are also included
* **.sigma.json**: A JSON-based format compatible with
  [sigma.js](https://www.sigmajs.org/), a JavaScript library capable of
  rendering the entire graph on a web page.
* **.cy.json**: A JSON-based format compatible with
  [cytoscape.js](https://js.cytoscape.org/), another JavaScript graph
  visualization library

To run a fuseki server, use `./run.sh fuseki`, then go to http://localhost:3030
with your browser and log in with username `admin` and password `1234`. You can
then upload the `.ttl` files into a dataset and query the data with SPARQL.


# Generating the formats

To generate the formats yourself, start neo4j and import the data (see above),
then install [uv](https://docs.astral.sh/uv/) on your machine and run

    ./run.sh formats <dataset>

Again, choose between datasets "raw" and "full", see above.
