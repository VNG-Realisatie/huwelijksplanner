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

Timetravel
-------
A part of the [haal centraal](https://raw.githubusercontent.com/VNG-Realisatie/Haal-Centraal-BRP-bevragen/master/api-specificatie/Bevraging-Ingeschreven-Persoon/openapi.yaml) the concept of timetravel has been introduced, as in getting the version of an object as it was on a given date. For this the `geldigop` [see the docs](file:///C:/Users/ruben/Desktop/doc_gba_historie.html#operation/getBewoningen) header is used. In addition the `geldigvan` and `geldigtot` are introduced as collection filters. 

The commonground proto componant natively supports time traveling on all resources that are annotaded with the @Gedmo\Loggable, this is done by adding the ?validOn=[date] query to a request, date can either be a datetime or datedatime string. Any value supported by php's [strtotime()](https://www.php.net/manual/en/function.strtotime.php) funtion is supported. Keep in mind that this returns the entity a as it was valid on that time or better put, the last changed version BEFORE that moment. To get a complete list of all changes on an item the [/audittrail](#Audittrail
) endpoint can be used.

__solution__
In compliance with [schema.org](https://schema.org/validFrom) `geldigop`,`geldigvan` and `geldigtot` are implemented as `validOn`,`validFrom` and `validUntil`. And can be used a query parameters on collection operations.
Additionally `validOn` can be used on a single object get request to get the version of that object on a given date, a 404 is returned if no version of that object can be given for the given date 
