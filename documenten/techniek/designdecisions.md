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

Healthchecks
-------
From [issue 154](https://github.com/VNG-Realisatie/huwelijksplanner/issues/154)

For healthchecks we use the health-json principle (or json-health to stay in line with json-ld and json-hal). This means the any endpoint `should` be capable of providing health information concerning that endpoint and services behind it.

__solution__
The use of a `Content-Type: application/health+json` header returns an health json schema.
