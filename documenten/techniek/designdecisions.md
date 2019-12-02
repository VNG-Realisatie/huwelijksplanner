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

NLX 
-------
We implement the [NLX system](https://docs.nlx.io/understanding-the-basics/introduction/) as part of the basic commonground infrastructure, as such nlx headers are used in the internal logging.
The following X-NLX headers have been implemented for that reason `X-NLX-Logrecord-ID`,`X-NLX-Request-Process-Id`,`X-NLX-Request-Data-Elements` and `X-NLX-Request-Data-Subject`, these are tied to the internal audit trail (see audit trail for more information), and `X-Audit-Toelichting` (from the ZGW APIs) is implemented as `X-Audit-Clarification`. We do not use other NLX headers since they (conform to the [NLX schema](https://docs.nlx.io/reference-information/transaction-log-headers/)) wil not reach the provider. 

We strongly discourage the use of the `X-NLX-Request-Data-Subject` header as it might allow private data (such as BSNs) to show up in logging.

Please note that the use of nlx is optional. The component can be used without NLX. In that case set `X-NLX-Logrecord-ID` to false and provide (the normaly ignored)  fields `X-NLX-Requester-User-Id`, `X-NLX-Request-Application-Id`, `X-NLX-Request-Subject-Identifier`, `X-NLX-Requester-Claims` and `X-NLX-Request-User` as if you are making an NLX call. This provides the API with enough credentials to make an complete audit trail. It also provides an easy implementation route to NLX since the only thing that would need to be changed at a later time is making you call to an nlx outway instead of the API directly. 
