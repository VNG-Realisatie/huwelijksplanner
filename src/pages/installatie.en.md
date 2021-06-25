  
# Installation
The wedding planner application consists of a number of components and one/several ui's built according to the [commonground five-layer model]. Underlying components can be shared between applications, so we recommend installing only new components and reusing existing components. If you want more insight into a component you can click on the title for the VNG components catalog or look in the github repository for more detailed descriptions and the source code files.  

All components are available as a docker container via github packages (due to the download maximum on dockerhub.io), the containers can therefore be found directly at the repositories. HELM installation files are also available for all components. You can find these in the component's repository (github) as well as in the official HELM hub ([artifacthub.io](https://artifacthub.io/)).
## Componenten
It is recommendend to install the components in the given order, additional installation information and configuration can be found in installation files of the various components (on [artifacthub.io](https://artifacthub.io/)).

| Component                        | Repo | HELM installation files |
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

## Configuration
The configuration of the various components takes place via the helm installation of that component, follow the manual supplied with the component. However, there is a general point for all components regarding making these components externally accessible:  

To open a component to the web, three steps are required:
1. The value ingress.enabled must be true
2. The value ingress.host must contain a hostname routed to the load balancer
3. The value path must be correct. For an application this can be /, but for components /api/v1/{component name} or /api/v1/{component code} is recommended

Before the components are functional, the database will have to be prepared. We do this using the following command:  
bin/console doctrine:schema:update -f  

## From components to application  
The wedding planner application consists of a series of components, in order for them to form an application together it is necessary to make them work together. For this it is necessary to give the central spider in the web (wedding planner service) access to the components so that she can set them up. The necessary configuration is included in the (helm) installation files and description of the wedding planner ui (which includes the wedding planner service). Therefore, install it last and read the installation manual and configuration description carefully before installing the component.

## Example data
After the configuration has been completed, prefaces can be chosen to load a move with sample data (for example for demo purposes). To load sample data, this data must be loaded on three components in sequence after the dependencies of the relevant component have been set:
- landelijketabellencatalogus
- brpservice
- trouw-service

The following command must be run on these components in the php container:  
bin/console doctrine:fixtures:load -n  
The Trouw Service will also send sample data to the other components. 