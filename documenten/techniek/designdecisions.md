Nog te doen:
- Uitwerken Kubernetes omgeving met beschrijving
- 

We hanteren een 5 lagen architectuur
We ontwikkelen de huwelijksplanner kanaal & interface kanaalonafhankelijk. Ook laag 4 & 5 zijn van elkaar gescheiden. Dit is onderdeel van de MVP

We realiseren api's in principe op CRUD basis. Conveniance api's waar nodig voor performance.

Ook de interface is modulair 

We gebruiken NLX voor elke call waarbij vertrouwelijke gegevens worden opgevraagd / waarover verantwoording afgelegd moet kunnen worden. In overige situaties gebruiken we NLX waar dit handig is.

We hanteren semantic versioning. 
We hanteren https://docs.geostandaarden.nl/api/API-Strategie/#versioning  als uitgangspunt voor versiebeheer

Search
-------
As part of [api-32](https://docs.geostandaarden.nl/api/API-Strategie/#api-32) a `zoeken` query has been introduced that can handle wildcards. This breaks best practice, first of allest practice is a `search` query parameter (see also the nodes on [English](#english)). Secondly wildcards are a sql concept, not a webconcept, they are also a rather old concept severely limiting the search options provided. Instead the [regular expression standard](https://en.wikipedia.org/wiki/Regular_expression) should be used. 

__solution__
We implement a `search` query parameter on resource collections, that filters with regex. 
