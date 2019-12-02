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

Fields
-------
A part of the [haal centraal](https://raw.githubusercontent.com/VNG-Realisatie/Haal-Centraal-BRP-bevragen/master/api-specificatie/Bevraging-Ingeschreven-Persoon/openapi.yaml) the concept of field limitations has been introduced its general purpose being to allow an application to limit the returned fields to prevent the unnecessary transportation of (private) data. In the [NL API Strategie](https://github.com/VNG-Realisatie/Haal-Centraal-BRP-bevragen/blob/master/features/fields.feature) this has been implemented as a parameter consisting of comma separated values. However the normal web standard for optional lists (conform w3c form standards) is an array.
