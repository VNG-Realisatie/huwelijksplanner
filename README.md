# Huwelijksplanner


# Product visie:
Met de huwelijksplanner realiseren we componenten (zowel registratiecomponenten als gebruikersinterface) waarmee gemeenten een goed werkend trouwproces kunnen inrichten. Daarmee voegen we waarde toe en ontzorgen de burger bij het plannen van een huwelijk. De huwelijkplanner wordt zo snel mogelijk gefaseerd in productie gebracht bij 1 of meerdere gemeenten. We ontwikkelen de huwelijksplanner conform de visie en principes van common ground en willen met de huwelijksplanner actief bijdragen aan samen organiseren. 

# Doel:
* Inwoners in staat stellen om snel en eenvoudig vanaf de bank hun huwelijk te regelen.
* Backoffice van gemeenten die bij het huwelijksproces betrokken zijn, te ontlasten 

# Te zetten stappen:
* Huidige resultaten Utrecht en Convenant gemeenten in kaart brengen, documenteren en checken of ze passen in de nieuwe product visie en dubbelingen identificeren
* BPMn trouwproces ontwikkelen
* Hergroeperen (wie gaat wat doen, hoe gaan we verder)
* (betere) aansluiting bij Common Ground

# Randvoorwaarden:
* Voldoende beschikbare mensen en middelen
* Gemeente die het trouwproces volgens de productvisie in productie wil nemen
* Actieve en betrokken stakeholders met gemeenschappelijke visie op het project

# Snelle links

**Referentie-implementaties van componenten**

| Component                        | Description | Production deployment | Repository |
| -------------------------------- | ----------- | --------------------- | ---------- |
| contactcatalogus                 | Het “contacten” component is bedoeld voor het opslaan van contactgegevens van personen en organisaties waarvoor nog geen BSN of KVK nummer bekend is (en dus geen bronverwijzing kan worden gedaan). | ![](https://github.com/ConductionNL/contactcatalogus/workflows/Docker%20Image%20CI/badge.svg) | [GitHub](https://github.com/ConductionNL/contactcatalogus)
| locatiecatalogus                 | Het component "Locaties" is ontwikkeld voor de gemeente Utrecht en beschrijft een geografische locatie met de daarbij horende kenmerken. Dit stelt je in staat om locaties te raadplegen en te beheren|![](https://github.com/ConductionNL/locatiecatalogus/workflows/Docker%20Image%20CI/badge.svg) | [GitHub](https://github.com/ConductionNL/locatiecatalogus)
| landelijketabellencatalogus      | Landelijke Tabellen GBA zijn coderingslijsten waarin gegevens zijn opgenomen die gebruikt worden voor het bijhouden van persoonsgegevens in het geautomatiseerde systeem van de GBA. Dit component maakt deze tabellen beschikbaar als REST API. | ![](https://github.com/ConductionNL/landelijketabellencatalogus/workflows/Docker%20Image%20CI/badge.svg) | [GitHub](https://github.com/ConductionNL/landelijketabellencatalogus)
| procestypecatalogus              | Dit Common Ground component bevat BPMN stijl processen om door andere applicaties te gebruiken. | ![](https://github.com/ConductionNL/procestypecatalogus/workflows/Docker%20Image%20CI/badge.svg) | [GitHub](https://github.com/ConductionNL/procestypecatalogus)
| productenendienstencatalogus     | openPDC implementatie op proto-component basis |![](https://github.com/ConductionNL/productenendienstencatalogus/workflows/Docker%20Image%20CI/badge.svg)| [GitHub](https://github.com/ConductionNL/productenendienstencatalogus)
| medewerkercatalogus             | Het "Ambtenaren" component is ontwikkeld voor de gemeente Utrecht en heeft als doel ambtenaren te koppelen aan objecten uit andere componenten. Dit stelt je in staat om aan deze objecten, ambtenaren te koppelen en hun activiteiten te kunnen beheren.|![](https://github.com/ConductionNL/medewerkercatalogus/workflows/Docker%20Image%20CI/badge.svg?branch)| [GitHub](https://github.com/ConductionNL/medewerkercatalogus)
| verzoektypecatalogus             | A component to catalogue various request types | ![](https://github.com/ConductionNL/verzoektypecatalogus/workflows/Docker%20Image%20CI/badge.svg) | [GitHub](https://github.com/ConductionNL/verzoektypecatalogus)
| webresourcecatalogus             | Het "Resources" component is ontwikkeld voor de gemeente Utrecht en heeft als doel het gebruik van multimedia bestanden te faciliteren. Het stelt je in staat om multimedia bestanden (waaronder plaatjes en filmpjes) en documenten te gebruiken.|![](https://github.com/ConductionNL/webresourcecatalogus/workflows/Docker%20Image%20CI/badge.svg) | [GitHub](https://github.com/ConductionNL/webresourcecatalogus)
| agendaservice                    | Het "agenda" component is ontwikkeld voor de gemeente Utrecht en heeft als doel een agenda te koppelen aan objecten uit andere componenten. Dit stelt je in staat om aan deze objecten, afspraken en beschikbaarheid te kunnen beheren. |![](https://github.com/ConductionNL/agendaservice/workflows/Docker%20Image%20CI/badge.svg) | [GitHub](https://github.com/ConductionNL/agendaservice)
| berichtservice                   | Het berichten component is ontwikkeld voor de gemeente Utrecht en heeft als doel het functionele berichten verkeer te faciliteren. Denk hier bij aan berichten via een email naar een klant waar een, mogelijk, sjabloon in gebruikt wordt|![](https://github.com/ConductionNL/berichtservice/workflows/Docker%20Image%20CI/badge.svg) | [GitHub](https://github.com/ConductionNL/berichtservice)
| betaalservice                    | Het "betalen" component is ontwikkeld voor de gemeente Utrecht en heeft als doel een betalingen te registreren en af te handelen voor objecten uit andere componenten. Dit stelt je in staat om voor deze objecten facturen aan te maken en te beheren.|![](https://github.com/ConductionNL/betaalservice/workflows/Docker%20Image%20CI/badge.svg) | [GitHub](https://github.com/ConductionNL/betaalservice)
| instemmingservice                | Het "Instemingservice" component is ontwikkeld voor de gemeente Utrecht en heeft als functie laten instemmen van burgers met namens hun ingediende handelingen|![](https://github.com/ConductionNL/instemmingservice/workflows/Docker%20Image%20CI/badge.svg) | [GitHub](https://github.com/ConductionNL/instemmingservice)
| stufservice                      | Het StUF Berichten component is bedoeld als communicatie richting de StUF standaard en wordt bijvoorbeeld gebruikt om “verzoeken” van het type melding voorgenomen huwelijk en verhuizing in te schieten op StUF koppelvlakken.|![](https://github.com/ConductionNL/stufservice/workflows/Docker%20Image%20CI/badge.svg) | [GitHub](https://github.com/ConductionNL/stufservice)
| trouwservice                     | Het "trouwen" component bevat alle functionaliteit die nodig is om een huwelijk of partnerschap te kunnen sluiten en is ontwikkeld voor de gemeente Utrecht. | ![](https://github.com/ConductionNL/trouwservice/workflows/Docker%20Image%20CI/badge.svg) | [GitHub](https://github.com/ConductionNL/trouwservice)
| contactregistratiecomponent      | Het "Contactregistraties" component is ontwikkeld voor de gemeente Utrecht en heeft als functie het versturen van SMS, E-Mail, Whatsapp berichten of reguliere post naar burgers, aan de hand van vooraf ingestelde sjablonen. Ook is het mogelijk om met de juiste credentials berichten in te zien. | ![](https://github.com/ConductionNL/contactregistratiecomponent/workflows/Docker%20Image%20CI/badge.svg) | [GitHub](https://github.com/ConductionNL/contactregistratiecomponent)
| huwelijksplanner-ui              | User Interface for the huwelijksplanner project | ![](https://github.com/ConductionNL/huwelijksplanner-ui/workflows/Docker%20Image%20CI/badge.svg) |[GitHub](https://github.com/ConductionNL/huwelijksplanner-ui)
| orderregistratiecomponent        | A component to handle orders | ![](https://github.com/ConductionNL/orderregistratiecomponent/workflows/Docker%20Image%20CI/badge.svg) |  [GitHub](https://github.com/ConductionNL/orerregistratiecomponent)
| procesregistratiecomponent       |  |  ![](https://github.com/ConductionNL/procesregistratiecomponent/workflows/Docker%20Image%20CI/badge.svg) | [GitHub](https://github.com/ConductionNL/procesregistratiecomponent)
| single-sign-on                   | This component provides a signle sign on server (curently only in mock version) | |[GitHub](https://github.com/ConductionNL/single-sign-on)
| trouwen-kubernetes               | This repository holds the kubernetes config for deploying the trouwen cluster | ![](https://github.com/ConductionNL/trouwen-kubernetes/workflows/Docker%20Image%20CI/badge.svg) | [GitHub](https://github.com/ConductionNL/trouwen-kubernetes)
| User-component                   | A component to handle users of an application | ![](https://github.com/ConductionNL/User-component/workflows/Docker%20Image%20CI/badge.svg) | [GitHub](https://github.com/ConductionNL/User-component)
| utrecht-trouwen                  | Trouwapplicatie voor de gemeente Utrecht | | [GitHub](https://github.com/ConductionNL/utrecht-trouwen)


## Licentie
Copyright &copy; VNG Realisatie 2018
Licensed under the [EUPL](https://github.com/VNG-Realisatie/huwelijksplanner/blob/master/LICENCE.md)
