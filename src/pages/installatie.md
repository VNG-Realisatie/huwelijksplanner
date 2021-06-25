  
# Installatie
De huwelijksplanner applicatie bestaat uit een aantal componenten en een/meerdere ui’s opgebouwd volgens het [commonground vijflagen model]. Hierbij kunnen onderliggende componenten worden gedeeld tussen applicaties, we raden daarom aan om alleen nieuwe componenten te installeren en reeds bestaande componenten te hergebruiken.  Als u meer inzicht van een component wilt kunt u op de titel klikken voor de VNG componenten catalogus of in de github repository kijken voor uitgebreidere beschrijvingen en  de broncode bestanden.  

Alle componenten zijn als docker container beschikbaar via github packages (in verband met het download maximum op dockerhub.io), de containers vind u derhalve rechtstreeks bij de repositories. Voor alle componenten zijn tevens HELM installatie bestanden beschikbaar. Deze kunt u zowel in de repositorie van het component terug vinden (github) als in de officieel HELM  hub [artifacthub.io](https://artifacthub.io/).
## Componenten
Het verdient een aanbeveling om de componenten in de hier weergegeven volgorde te installeren, aanvullende installatie informatie en configuratie vind u bij installatie bestanden van de verschillende componenten (op [artifacthub.io](https://artifacthub.io/)).

| Component                        | Repo | HELM installatie bestanden |
| -------------------------------- | ---------- | ---------- |
| [Contactcatalogus](https://componentencatalogus.commonground.nl/producten/74/componenten/26)| [GitHub](https://github.com/ConductionNL/contactcatalogus) | [![Artifacthub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/contactcatalogus)](https://artifacthub.io/packages/helm/contact-catalogus/contactcatalogus) |
| [Locatiecatalogus](https://componentencatalogus.commonground.nl/producten/74/componenten/27)| [GitHub](https://github.com/ConductionNL/locatiecatalogus) | [![Artifacthub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/locatiecatalogus)](https://artifacthub.io/packages/helm/ocatiecatalogus/ocatiecatalogus) |
| [Productenendienstencatalogus](https://componentencatalogus.commonground.nl/producten/74/componenten/124)| [GitHub](https://github.com/ConductionNL/productenendienstencatalogus) | [![Artifacthub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/productenendienstencatalogus)](https://artifacthub.io/packages/helm/productenendienstencatalogus/productenendienstencatalogus) |  
| [Medewerkercatalogus](https://componentencatalogus.commonground.nl/producten/74/componenten/21) | [GitHub](https://github.com/ConductionNL/medewerkercatalogus) | [![Artifacthub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/medewerkercatalogus)](https://artifacthub.io/packages/helm/medewerkercatalogus/medewerkercatalogus) | 
| [Verzoektypecatalogus](https://componentencatalogus.commonground.nl/producten/74/componenten/15) | [GitHub](https://github.com/ConductionNL/verzoektypecatalogus) | [![Artifacthub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/verzoektypecatalogus)](https://artifacthub.io/packages/helm/verzoektypecatalogus/verzoektypecatalogus) |  
| [Webresourcecatalogus](https://componentencatalogus.commonground.nl/producten/74/componenten/12)      | [GitHub](https://github.com/ConductionNL/webresourcecatalogus) | [![Artifacthub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/webresourcecatalogus)](https://artifacthub.io/packages/helm/webresourcecatalogus/webresourcecatalogus) |  
| [Agendaregistratiecomponent](https://componentencatalogus.commonground.nl/producten/74/componenten/20) | [GitHub](https://github.com/ConductionNL/agendaservice) | [![Artifacthub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/agendaservice)](https://artifacthub.io/packages/helm/agendaservice/agendaservice) | 
| [Verzoekregistratiecomponent](https://componentencatalogus.commonground.nl/producten/74/componenten/17) | [GitHub](https://github.com/ConductionNL/verzoekregistratiecomponent) | [![Artifacthub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/verzoektypecatalogus)](https://artifacthub.io/packages/helm/verzoektypecatalogus/verzoektypecatalogus) |
| [berichtservice](https://componentencatalogus.commonground.nl/producten/74/componenten/30) | [GitHub](https://github.com/ConductionNL/berichtservice) | [![Artifacthub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/berichtservice)](https://artifacthub.io/packages/helm/berichtservice/berichtservice) |  
| [betaalservice](https://componentencatalogus.commonground.nl/producten/74/componenten/29) | [GitHub](https://github.com/ConductionNL/betaalservice) | [![Artifacthub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/betaalservice)](https://artifacthub.io/packages/helm/betaalservice/betaalservice) | 
| [brpservice](https://componentencatalogus.commonground.nl/producten/74/componenten/128)  | [GitHub](https://github.com/ConductionNL/brpservice) | [![Artifacthub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/brpservice)](https://artifacthub.io/packages/helm/brpservice/brpservice) |  
| [instemmingservice](https://componentencatalogus.commonground.nl/producten/74/componenten/22) | [GitHub](https://github.com/ConductionNL/instemmingservice) | [![Artifacthub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/instemmingservice)](https://artifacthub.io/packages/helm/instemmingservice/instemmingservice) | 
| [orderregistratiecomponent](https://componentencatalogus.commonground.nl/producten/74/componenten/11) |  [GitHub](https://github.com/ConductionNL/orderregistratiecomponent) | [![Artifacthub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/orderregistratiecomponent)](https://artifacthub.io/packages/helm/orderregistratiecomponent/orderregistratiecomponent) |
| [user-component](https://componentencatalogus.commonground.nl/componenten/32) | [GitHub](https://github.com/ConductionNL/user-component) | [![Artifacthub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/user-component)](https://artifacthub.io/packages/helm/user-component/user-component) |
| [memocomponent](https://componentencatalogus.commonground.nl/producten/74/componenten/122) | [GitHub](https://github.com/ConductionNL/memo-component) | [![Artifacthub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/memo-component)](https://artifacthub.io/packages/helm/memo-component/memo-component) |
| [procestypecatalogus](https://componentencatalogus.commonground.nl/producten/74/componenten/125) | [GitHub](https://github.com/ConductionNL/procestypecatalogus) | [![Artifacthub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/procestypecatalogus)](https://artifacthub.io/packages/helm/procestypecatalogus/procestypecatalogus) |
| [landelijketabellencatalogus](https://componentencatalogus.commonground.nl/producten/74/componenten/14) | [GitHub](https://github.com/ConductionNL/landelijketabellencatalogus) | [![Artifacthub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/landelijketabellencatalogus)](https://artifacthub.io/packages/helm/landelijketabellencatalogus/landelijketabellencatalogus) |
| instemmingsregistratiecomponent | [GitHub](https://github.com/ConductionNL/instemming-registratie-component) | [![Artifacthub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/instemming-registratie-component)](https://artifacthub.io/packages/helm/instemming-registratie-component/irc) |
| [trouwservice](https://componentencatalogus.commonground.nl/producten/74/componenten/195) | [GitHub](https://github.com/ConductionNL/trouw-service) | [![Artifacthub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/trouwservice)](https://artifacthub.io/packages/helm/trouw-service/trouw-service) |
| [digispoof](https://componentencatalogus.commonground.nl/producten/74/componenten/171) | [GitHub](https://github.com/ConductionNL/digispoof)| [![Artifacthub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/digispoof)](https://artifacthub.io/packages/helm/digispoof-interface/digispoof-interface) |
| [Huwelijksplanner UI](https://componentencatalogus.commonground.nl/producten/74/componenten/36) |[GitHub](https://github.com/ConductionNL/huwelijksplanner-ui) |  [![Artifacthub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/huwelijksplanner)](https://artifacthub.io/packages/helm/huwelijksplanner/huwelijksplanner) |

## Configuratie
De configuratie van de verschillende componenten vind plaats via de helm installatie van dat component, volg hiervoor de bij het component aangeleverde handleiding. Echter is er een algemeen punt voor alle componenten wat betreft het extern bereikbaar maken van deze componenten:

Om een component naar buiten open te zetten zijn er drie stappen nodig:
1. De value ingress.enabled moet op true staan
2. De value ingress.host moet een hostname bevatten die geroute is naar de loadbalancer
3. De value path moet correct staan. Voor een applicatie kan dit / zijn, maar voor componenten is /api/v1/{componentnaam} of /api/v1/{componentcode} aan te bevelen

Voordat de componenten werkbaar zijn zal de database moeten worden voorbereid. Dit doen we met behulp van het volgende commando:  
bin/console doctrine:schema:update -f  

## Van componenten naar applicatie  
De huwelijksplanner applicatie bestaat uit een reeks van componenten, om ze gezamenlijk een applicatie te laten vormen is het noodzakelijk om ze te laten samenwerken. Hiervoor is het nodig om de centrale spin in het web (huwelijksplanner service) toegang te geven tot de componenten zodat zij deze kan inrichten. De daarvoor benodigde configuratie is opgenomen in de (helm) installatiebestanden en beschrijving van de huwelijksplanner ui (waar de huwelijksplanner service bij in zit). Installeer deze daarom als laatste en leest de installatiehandleiding en configuratie beschrijving zorgvuldig voordat u het component installeert.  

## Voorbeeld data
Nadat de configuratie is afgehandeld kan er voorwoorden gekozen om een zet met voorbeeld gegevens in te laden (voor bijvoorbeeld demo doeleinden). Om voorbeelddata in te laden moet deze data op drie componenten op volgorde worden ingeladen nadat de dependencies van het betreffende component zijn ingesteld:  
- landelijketabellencatalogus  
- brpservice  
- trouw-service  
  
Op deze componenten moet in de php container het volgende commando worden uitgevoerd:  
bin/console doctrine:fixtures:load -n  
De Trouw Service zal ook voorbeelddata inschieten naar de overige componenten.
