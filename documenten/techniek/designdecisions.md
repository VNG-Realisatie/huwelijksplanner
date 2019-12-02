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


On standards and standardization
-------
The common ground principles are leading in design choices, and within those principles international compliancy and technological invocation is deemed most important. **We do not want to make concessions to the current infrastructure.** As such the component might differ on [NL API Strategie](https://docs.geostandaarden.nl/api/API-Strategie), [NORA](https://www.noraonline.nl/wiki/Standaarden), [zaakgericht werken](https://zaakgerichtwerken.vng.cloud/themas/index) and or other standards if they are deemed incompatible or out of line with (inter)national standards and or good practices. 

Unfortunately (inter)national standards can be conflicting. We therefore prioritize standards on several grounds

- International is put before local
- Standards carried by a standard organization (like ISO, W3C etc) at put before floating standards (like RFC's) wichs are put before industry standards, good practices and so on. 

So if for instance a **local** standard is out of line with an **international** good practice we follow the international good practice.

### Commonground specific standards

This component was designed in line with the [NL API Strategie](https://docs.geostandaarden.nl/api/API-Strategie), [NORA](https://www.noraonline.nl/wiki/Standaarden), [vng.cloud](https://zaakgerichtwerken.vng.cloud/themas/index), [commonground principles](https://vng.nl/onderwerpenindex/bestuur/samen-organiseren-2019/common-ground). 
