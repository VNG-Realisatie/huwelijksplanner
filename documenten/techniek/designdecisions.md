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

Ordering
-------
In the [zaak-api](https://zaken-api.vng.cloud/api/v1/schema/#operation/zaak_list) ordering is done in a single field parameter, we however prefer to be able to order on multiple fields in combination of ascending and descending orders. We therefore implement an order parameter as array where they key is the property on wish should be ordered and the value the type of ordering e.g. `?order[name]=desc&order[status]=asc`. The order in which the keys are added to the order array determines the order in which they are applied.    
