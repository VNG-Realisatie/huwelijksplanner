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

Archivation
-------
There is a need (by law) for archivation, meaning that we should only keep resources for a fixed amount of time and delete them thereafter. In line with the extending and fields principle whereby we only want resource properties that we need when we needed, it is deemed good practice make a sub resource of the archivation properties. For the archivation properties the [zgw](https://zaken-api.vng.cloud/api/v1/schema/#operation/zaak_list) is followed and translated to englisch. 


```json
{
	"id": "e2984465-190a-4562-829e-a8cca81aa35d",
	"nomination": "destroy",
	"action_date": "2019-11-25T07:26:54Z",
	"status": "to_be_archived",
}
```

This gives us an interesting thought, according to [NL API Strategie](https://docs.geostandaarden.nl/api/API-Strategie/#api-10-implement-operations-that-do-not-fit-the-crud-model-as-sub-resources) sub resources should have their own endpoint. Therefore we could use a archive sub of a different resource for archivation rules e.g. /zaken/{uuid}/archivation for a verzoek. This in itself leads credence to the thought that archivation should have its own central crud api
