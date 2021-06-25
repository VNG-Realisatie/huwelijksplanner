# [draft] Becomming a Demodam Organization

Software suppliers, manucipalities and other organizations can ask the Demodam technical workingroup to host there commonground components and/or application. This is done by posting an application demodam for as organization issue , please be aware that applications are always open and publicly comunicatied about. Please read the following guide before applying

## Naming conventions
Before applying for publisherschip take a moment to think about how you want your organization to be displayed on demodam. Names adhere to the following restrictions

-The should be unique

You are allowed to schoose your own name, but your keep in mind that it wil also be used in a technical name (by removing spaces and special chars and turning al charachters to lower case). You name will be used in the following ways:
-It will be published in the contributors.md with a link to your website
-It wil be used in the subdomain of your organization on demodam e.g. https://[technical-name].demodam.nl
-It wil be used as the name for your private namespace on the demodam haven environment

## Technical specification
Each organization is offer a subdomain on demodam, this must either be used to host the application that the organization want to showcase, or to host an overview page if the organization wants to showcase multiple application.

If the organizations want to host multiple applications it can use paths under it own subdomain, but must adhere to NL API Strategy naming conventions e.g open-zaak.demodam/zrc/v1/.

In order to install component’s or applications they should be compliant to the following guidelines or rules

- **may** have a publicly accessible codebase
- **should** be included in the componentencatalogus.commonground.nl
- **should** support generic haven component like Prometheus, Loki and NLX
- **must** consist of publicly accessible containers (docker hub is prefferd, other options are allowed)
- **must** have automated deployment routes (e.g. helm, ansible...)
- **must** follow commonground principles
- **must** adhere to nl api strategie
- **must** be compliant to forum standardization
- **must** support Kubernetes 1.19
- **must** work on the minimum setup provided by haven-compliant clusters

The subdomain will be referred to the demodam haven environment, any overview pages should therefore be hosted on the environment. It is not allowed to reroute the subdomain externally.

The technical steering group points out that al support is provides on an “best effort” basis without any guaranties, it also reserves the right to remove any organizations namespace, installations, subdomain or other resources without prior notification if it deems that said resources either form an security or operational threat to the demodam haven environment.

## Flow of application
- Submission of applications issue
- Checks and acceptance by technical action group
- Creation of subdomain and namespace
- Handover of subdomain and kubeconfig file to aplaying organization

## Criteria of acceptance by technical steering group
- Name should be unique
- Application should be an legal or functional representative of organization
