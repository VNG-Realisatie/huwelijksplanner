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

Audittrail
-------
For audittrail we use the base mechanism as provided by [vng.cloud](https://zaakgerichtwerken.vng.cloud/themas/achtergronddocumentatie/audit-trail), we do however diver on some key point,
- Personal data should never be part of a log, therefore only the user id with the client should be logged (instead of the name)
- Besides an endpoint per resource there should be a general enpoint to search all audit trials of a component
- [Time travel](#timetravel) in combination with objects versioning makes the return of complete objects unnecessary. But an audit rail endpoint should support the [extend](#extending) functionality to provide the option of obtaining complete objects.  


__solution__
In compliance with [vng.cloud](https://zaakgerichtwerken.vng.cloud/themas/achtergronddocumentatie/audit-trail) each individual object should support an /audittrail endpoint.
