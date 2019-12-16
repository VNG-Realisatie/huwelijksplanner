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


Arrays
-------
The NL API standard uses comma notation on array's in http requests. E.g. fields=id,name,description however common browsers(based on chromium e.g. chrome and edge) use bracket notation for query style array's e.g. fields[]=id&fields[]=name,&fields[]=description. The difference of course is obvious since comma notation doesn't allow you to index arrays. [Interestingly enough there isn't actually a rfc spec for this](https://stackoverflow.com/questions/15854017/what-rfc-defines-arrays-transmitted-over-http). 

It is perceivable that in future iterations we would like to use indexed array in situations where the index of the array can't be assumed on basis of url notation, when indexes arenï¿½t numerical, when we donï¿½t want an index to start at 0 or when indexes are purpusly missing (comma notation of id,name,description would always refert to the equivalent of fields: [
  0 => id,
  1 => name,
  2 => description
]

__solution__
We support both comma and bracket notation on array's, but only document bracket notation since it is preferred.
