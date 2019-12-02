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

English
-------
The [NL API Standard](https://geonovum.github.io/KP-APIs/#api-04-define-interfaces-in-dutch-unless-there-is-an-official-english-glossary) describes that there is a preference for Dutch in API documentation.

> Define resources and the underlying entities, fields and so on (the information model ad the external interface) in Dutch. English is allowed in case there is an official English glossary.

We view this as a breach with good coding practice and international coding standards, all documentation and code is therefore supplied in English. We do however provide translation (or i18n) support. 

