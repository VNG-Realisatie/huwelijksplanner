
**We hanteren een 5 lagen architectuur**

We ontwikkelen de huwelijksplanner kanaal & interface onafhankelijk. Ook laag 4 & 5 zijn van elkaar gescheiden. Het scheiden van laag 4 & 5 is echter nog geen onderdeel van de MVP.
Ook de interface is modulair 
We realiseren api's in principe op CRUD basis. Conveniance api's waar nodig voor performance.


**NLX**

We gebruiken NLX voor elke call waarbij vertrouwelijke gegevens worden opgevraagd / waarover verantwoording afgelegd moet kunnen worden. In overige situaties gebruiken we NLX waar dit handig is.

**Versioning**

We hanteren semantic versioning. 
We hanteren https://docs.geostandaarden.nl/api/API-Strategie/#versioning  als uitgangspunt voor versiebeheer


**Keuzes over het maken van zaken**

- De melding voorgenomen huwelijk behandelen we als zaak.
- Aanvraag naamgebruik behandelen we als een zaak.
- Aanvraag BABS voor een dag, behandelen we als zaak.
- Aanvraag locatie voor een dag, behandelen we als zaak.
- De reservering zelf / het huwelijksdossier, is geen zaak.
- Echter: alle gemaakte zaken, worden wel gerelateerd aan het huwelijksdossier voor een integraal overzicht.

Implementatie keuze zaken:
- We sluiten aan op de nieuwe ZGW standaard / openzaak.
- Indien openzaak nog niet in productie beschikbaar is, maken we geen zaken aan.

Welke koppelingen worden vanuit de Huwelijksplanner:
- Zaken c.a. op basis van ZGW API
	- Zaak Melding voorgenomen huwelijk
	- Aanvraag Babs voor 1 dag
	- Aanvraag locatie voor een dag
	- Aanvraag naamgebruik
- Betalen
	- Financieel systeem
	- Betaaldienst
- Reserveren
	- Locatie -> locaties + beschikbaarheid worden in het locatie & agenda component van de huwelijksplanner bijgehouden
	- Babs -> babs'en + beschikbaarheid worden in medewerkers component + pdc + agenda component van de huwelijksplanner bijgehouden
	- Huwelijksdatum -> wordt bijgehouden in de huwelijksplanner
- Personen
	- Haal Centraal BRP bevragen op moment dat de API door de RVIG beschikbaar wordt gesteld
	- Conduction vertalen Haal centraal <-> StUF  API wordt gebruikt voor de MVP waarbij op een gemeentelijk datadistributie systeem wordt aangesloten.
- Toetsen wettelijke vereisten (verklaring vragen en handmatige toets):
	- Curatele
	- Bloedverwantschap
	- 18+  -> kan al op basis van Haal Centraal
	- Vraag of je al in een ander land getrouwd bent
- Huwelijksdossier
	-Koppeling met burgerzaken applicatie

