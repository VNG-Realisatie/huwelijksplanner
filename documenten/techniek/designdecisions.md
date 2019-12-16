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

Queries
-------
In several examples of the nl api strategie we see query parameters being attached to post requests. This is unusual in the sence that sending query strings along with a post is considered bad practice (because query parameters end up as part of an url and are therefore logged by servers). But it is technically possible folowing RFC 3986. The real pain is that in the NL api-stratgie the POST requests seems to be used to search, or in other words GET data. This is where compliance with HTTP (1.1) breaks.  
   
__solution__
We do not implement a query endpoint on post requests.
