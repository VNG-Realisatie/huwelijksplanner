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

## NL API Strategie

The [NL API Strategie](https://docs.geostandaarden.nl/api/API-Strategie) takes a special place in this component, it is designed as a set of guidelines for API's for the Dutch landscape. As such we follow it as close as possible. It dos however contains inconsistencies with both international standards and good practices. On those items we do not follow the norm but consider it our duty to try to change the norm. 

**We implement **

api-01, api-02, api-03, api-05, api-06, api-10, api-11, api-12, api-13,api-14, api-16, api-18, api-19, api-20, api-21, api-22, api-23, api-24, api-25, api-26, api-27, api-28, api-29, api-30, api-33, api-34, api-35, api-42

** We want to implement **
- [api-14](https://docs.geostandaarden.nl/api/API-Strategie/#api-14) Use OAuth 2.0 for authorization

**We do not implement **

- [api-04](https://docs.geostandaarden.nl/api/API-Strategie/#api-04) Define interfaces in Dutch unless there is an official English glossary (see [english](#english))
- [api-09](https://docs.geostandaarden.nl/api/API-Strategie/#api-09) Implement custom representation if supported (see [fields](#fields))
- [api-17](https://docs.geostandaarden.nl/api/API-Strategie/#api-17) Publish documentation in Dutch unless there is existing documentation in English or there is an official English glossary (see [english](#english))
- [api-31](https://docs.geostandaarden.nl/api/API-Strategie/#api-31) Use the query parameter sorteer to sort (see [ordering](#ordering))
- [api-32](https://docs.geostandaarden.nl/api/API-Strategie/#api-32) Use the query parameter zoek for full-text search (see [search](#search))
- [api-36](https://docs.geostandaarden.nl/api/API-Strategie/#api-36) Provide a POST endpoint for GEO queries (see [queries](#queries))
- [api-37](https://docs.geostandaarden.nl/api/API-Strategie/#api-37) Support mixed queries at POST endpoints available (see [queries](#queries))
- [api-38](https://docs.geostandaarden.nl/api/API-Strategie/#api-38) Put results of a global spatial query in the relevant geometric context (see [queries](#queries))


**We doubt or haven’t made a choice yet about**

- [api-15](https://docs.geostandaarden.nl/api/API-Strategie/#api-15) Use PKI overheid certificates for access-restricted or purpose-limited API authentication
- [api-39](https://docs.geostandaarden.nl/api/API-Strategie/#api-39) Use ETRS89 as the preferred coordinate reference system (CRS)
- [api-40](https://docs.geostandaarden.nl/api/API-Strategie/#api-40) Pass the coordinate reference system (CRS) of the request and the response in the headers
- [api-41](https://docs.geostandaarden.nl/api/API-Strategie/#api-41) Use content negotiation to serve different CRS
