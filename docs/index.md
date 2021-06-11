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

* **Component**: De naam van het component en link naar een voorbeeld implementatie
* **Description**: Korte beschrijving van wat het component doet
* **CI/CD**: Resultaat van de Continues Integration en Continues Delivery (Dev) straat, controleerd o.a. op werkenheid van de codebase, draaid test senarios en controleerd op known vulnerabilities
* **Style**: Resultaat van code check, zowel optimalisatie als leesbaarheid
* **Issue**: Discusie issue over dit component
* **Repository**: Locatie van de code van het component

| Component                        | Description | CI/CD Straat | StyleCI | Repository | Issue | 
| -------------------------------- | ----------- | ------| ------- | ---------- | ----- |
| [Huwelijksplanner UI](https://huwelijksplanner.online) | User Interface for the huwelijksplanner project | ![](https://github.com/ConductionNL/huwelijksplanner-ui/workflows/Docker%20Image%20CI/badge.svg) |[![StyleCI](https://github.styleci.io/repos/225294897/shield?branch=master)](https://github.styleci.io/repos/225294897)|[GitHub](https://github.com/ConductionNL/huwelijksplanner-ui) |  |
| [Contactcatalogus](https://cc.huwelijksplanner.online) | Het “contacten” component is bedoeld voor het opslaan van contactgegevens van personen en organisaties waarvoor nog geen BSN of KVK nummer bekend is (en dus geen bronverwijzing kan worden gedaan). | ![](https://github.com/ConductionNL/contactcatalogus/workflows/Docker%20Image%20CI/badge.svg) | [![StyleCI](https://github.styleci.io/repos/206145398/shield?branch=master)](https://github.styleci.io/repos/206145398) | [GitHub](https://github.com/ConductionNL/contactcatalogus) | [#236](https://github.com/VNG-Realisatie/huwelijksplanner/issues/236) |
| [Locatiecatalogus](https://lc.huwelijksplanner.online) | Het component "Locaties" is ontwikkeld voor de gemeente Utrecht en beschrijft een geografische locatie met de daarbij horende kenmerken. Dit stelt je in staat om locaties te raadplegen en te beheren|![](https://github.com/ConductionNL/locatiecatalogus/workflows/Docker%20Image%20CI/badge.svg) | [![StyleCI](https://github.styleci.io/repos/206144429/shield?branch=master)](https://github.styleci.io/repos/206144429) | [GitHub](https://github.com/ConductionNL/locatiecatalogus) | [#238](https://github.com/VNG-Realisatie/huwelijksplanner/issues/238) |
| [Productenendienstencatalogus](https://pdc.huwelijksplanner.online) | openPDC implementatie op proto-component basis |![](https://github.com/ConductionNL/productenendienstencatalogus/workflows/Docker%20Image%20CI/badge.svg) | [![StyleCI](https://github.styleci.io/repos/210809809/shield?branch=master)](https://github.styleci.io/repos/210809809) | [GitHub](https://github.com/ConductionNL/productenendienstencatalogus) |  |
| [Medewerkercatalogus](https://mrc.huwelijksplanner.online) | Het "Ambtenaren" component is ontwikkeld voor de gemeente Utrecht en heeft als doel ambtenaren te koppelen aan objecten uit andere componenten. Dit stelt je in staat om aan deze objecten, ambtenaren te koppelen en hun activiteiten te kunnen beheren.|![](https://github.com/ConductionNL/medewerkercatalogus/workflows/Docker%20Image%20CI/badge.svg) |  [![StyleCI](https://github.styleci.io/repos/206144408/shield?branch=master)](https://github.styleci.io/repos/206144408) | [GitHub](https://github.com/ConductionNL/medewerkercatalogus) | [#239](https://github.com/VNG-Realisatie/huwelijksplanner/issues/239) |
| [Verzoektypecatalogus](https://vtc.huwelijksplanner.online) | A component to catalogue various request types | ![](https://github.com/ConductionNL/verzoektypecatalogus/workflows/Docker%20Image%20CI/badge.svg) | [![StyleCI](https://github.styleci.io/repos/206144408/shield?branch=master)](https://github.styleci.io/repos/206144408) | [GitHub](https://github.com/ConductionNL/verzoektypecatalogus) |  |
| [Webresourcecatalogus](https://wrc.huwelijksplanner.online)              | Het "Resources" component is ontwikkeld voor de gemeente Utrecht en heeft als doel het gebruik van multimedia bestanden te faciliteren. Het stelt je in staat om multimedia bestanden (waaronder plaatjes en filmpjes) en documenten te gebruiken.|![](https://github.com/ConductionNL/webresourcecatalogus/workflows/Docker%20Image%20CI/badge.svg) | [![StyleCI](https://github.styleci.io/repos/206145646/shield?branch=master)](https://github.styleci.io/repos/206145646) | [GitHub](https://github.com/ConductionNL/webresourcecatalogus) |  |
| [Agendaregistratiecomponent](https://ac.huwelijksplanner.online) | Het "agenda" component is ontwikkeld voor de gemeente Utrecht en heeft als doel een agenda te koppelen aan objecten uit andere componenten. Dit stelt je in staat om aan deze objecten, afspraken en beschikbaarheid te kunnen beheren. |![](https://github.com/ConductionNL/agendaservice/workflows/Docker%20Image%20CI/badge.svg) | [![StyleCI](https://github.styleci.io/repos/206144508/shield?branch=master)](https://github.styleci.io/repos/206144508) | [GitHub](https://github.com/ConductionNL/agendaservice) | [#218](https://github.com/VNG-Realisatie/huwelijksplanner/issues/218) |
| [berichtservice](https://bs.huwelijksplanner.online) | Het berichten component is ontwikkeld voor de gemeente Utrecht en heeft als doel het functionele berichten verkeer te faciliteren. Denk hier bij aan berichten via een email naar een klant waar een, mogelijk, sjabloon in gebruikt wordt| ![](https://github.com/ConductionNL/berichtservice/workflows/Docker%20Image%20CI/badge.svg) | [![StyleCI](https://github.styleci.io/repos/206144502/shield?branch=master)](https://github.styleci.io/repos/206144502) | [GitHub](https://github.com/ConductionNL/berichtservice) |  |
| [betaalservice](https://bc.huwelijksplanner.online) | Het "betalen" component is ontwikkeld voor de gemeente Utrecht en heeft als doel een betalingen te registreren en af te handelen voor objecten uit andere componenten. Dit stelt je in staat om voor deze objecten facturen aan te maken en te beheren.| ![](https://github.com/ConductionNL/betaalservice/workflows/Docker%20Image%20CI/badge.svg) | [![StyleCI](https://github.styleci.io/repos/206145303/shield?branch=master)](https://github.styleci.io/repos/206145303) | [GitHub](https://github.com/ConductionNL/betaalservice) | [#240](https://github.com/VNG-Realisatie/huwelijksplanner/issues/240) |
| [brpservice](https://brp.huwelijksplanner.online) | Het "betalen" component is ontwikkeld voor de gemeente Utrecht en heeft als doel een betalingen te registreren en af te handelen voor objecten uit andere componenten. Dit stelt je in staat om voor deze objecten facturen aan te maken en te beheren.|![](https://github.com/ConductionNL/brpservice/workflows/Docker%20Image%20CI/badge.svg) | [![StyleCI](https://github.styleci.io/repos/204954539/shield?branch=master)](https://github.styleci.io/repos/204954539) | [GitHub](https://github.com/ConductionNL/brpservice) |  |
| [instemmingservice](https://irc.huwelijksplanner.online) | Het "Instemingservice" component is ontwikkeld voor de gemeente Utrecht en heeft als functie laten instemmen van burgers met namens hun ingediende handelingen|![](https://github.com/ConductionNL/instemmingservice/workflows/Docker%20Image%20CI/badge.svg) | [![StyleCI](https://github.styleci.io/repos/210753780/shield?branch=master)](https://github.styleci.io/repos/210753780) | [GitHub](https://github.com/ConductionNL/instemmingservice) | [#235](https://github.com/VNG-Realisatie/huwelijksplanner/issues/235) |
| stufservice                      | Het StUF Berichten component is bedoeld als communicatie richting de StUF standaard en wordt bijvoorbeeld gebruikt om “verzoeken” van het type melding voorgenomen huwelijk en verhuizing in te schieten op StUF koppelvlakken.|![](https://github.com/ConductionNL/stufservice/workflows/Docker%20Image%20CI/badge.svg) |  | [GitHub](https://github.com/ConductionNL/stufservice) |  |
| trouwservice                     | Het "trouwen" component bevat alle functionaliteit die nodig is om een huwelijk of partnerschap te kunnen sluiten en is ontwikkeld voor de gemeente Utrecht. | ![](https://github.com/ConductionNL/trouwservice/workflows/Docker%20Image%20CI/badge.svg) |  | [GitHub](https://github.com/ConductionNL/trouwservice) |  |
| [orderregistratiecomponent](https://orc.huwelijksplanner.online) | A component to handle orders | ![](https://github.com/ConductionNL/orderregistratiecomponent/workflows/Docker%20Image%20CI/badge.svg) | [![StyleCI](https://github.styleci.io/repos/206144416/shield?branch=master)](https://github.styleci.io/repos/206144416) |  [GitHub](https://github.com/ConductionNL/orderregistratiecomponent) | [#256](https://github.com/VNG-Realisatie/huwelijksplanner/issues/256) |
| single-sign-on | This component provides a single sign on server (curently only in mock version) | | |[GitHub](https://github.com/ConductionNL/single-sign-on) ||
| trouwen-kubernetes | This repository holds the kubernetes config for deploying the trouwen cluster | ![](https://github.com/ConductionNL/trouwen-kubernetes/workflows/Docker%20Image%20CI/badge.svg) |  | [GitHub](https://github.com/ConductionNL/trouwen-kubernetes) ||
| [user-component](https://uc.huwelijksplanner.online) | A component to handle users of an application | ![](https://github.com/ConductionNL/User-component/workflows/Docker%20Image%20CI/badge.svg) | [![StyleCI](https://github.styleci.io/repos/222616116/shield?branch=master)](https://github.styleci.io/repos/222616116) | [GitHub](https://github.com/ConductionNL/User-component)
| utrecht-trouwen | Trouwapplicatie voor de gemeente Utrecht | | | [GitHub](https://github.com/ConductionNL/utrecht-trouwen) |
| [digispoof](https://digispoof.huwelijksplanner.online) | Trouwapplicatie voor de gemeente Utrecht | | | [GitHub](https://github.com/ConductionNL/digispoof)|

## Licentie
Copyright &copy; VNG Realisatie 2020
Licensed under the [EUPL](https://github.com/VNG-Realisatie/huwelijksplanner/blob/master/LICENCE.md)
