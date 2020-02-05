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


Keuzes over het maken van zaken:

- De melding voorgenomen huwelijk behandelen we als zaak.
- Aanvraag BABS voor een dag, behandelen we als zaak.
- Aanvraag locatie voor een dag, behandelen we als zaak.
- De reservering zelf / het huwelijksdossier, is geen zaak.
- Echter: alle gemaakte zaken, worden wel gerelateerd aan het huwelijksdossier voor een integraal overzicht.




