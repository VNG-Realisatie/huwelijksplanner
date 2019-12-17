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

Api Versioning
-------
As per [landelijke API-strategie.](https://docs.geostandaarden.nl/api/API-Strategie/#versioning) we provide/ask major versions in the endpoint and minor versions in header, for this the `API-Version` is used (instead of the `api-version` header used in haal centraal). The major version gets a new increment when breaking changes are applied. Non breaking, minor changes will lead to a minor version increments.


