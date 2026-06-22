export const PL400_QUESTIONS = [
        {
                "id": 1,
                "sourceLabel": "Practice Question #1",
                "type": "choice",
                "text": "You are developing a model-driven app using JavaScript. You need to configure the app to display a dialog box when a form is opened or when a grid on a form is sorted. What should you use?",
                "options": [
                        {
                                "text": "Grid OnSave",
                                "key": "A"
                        },
                        {
                                "text": "Grid OnRecordSelect",
                                "key": "B"
                        },
                        {
                                "text": "Grid OnChange",
                                "key": "C"
                        },
                        {
                                "text": "Subgrid OnLoad",
                                "key": "D"
                        }
                ],
                "answers": [
                        "D"
                ],
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 2,
                "sourceLabel": "Practice Question #2",
                "type": "choice",
                "text": "A company is testing a Microsoft Dataverse plug-in in an environment. The plug-in works in postoperation mode and performs the update of the Account entity. During testing, a user observes that the plug-in unintentionally triggers a synchronous third-party ISV plug-in. You need to modify the system design to avoid unwanted triggering of the third-party plug-in. What should you do?",
                "options": [
                        {
                                "text": "Disable the existing third-party plug-in by using the Plug-in Registration Tool.",
                                "key": "A"
                        },
                        {
                                "text": "Use UpdateRequest with the BypassCustomPluginExecution parameter and Execute method of the Organization service.",
                                "key": "B"
                        },
                        {
                                "text": "Update the code of the third-party ISV plug-in to ignore updates caused by the new plug-in.",
                                "key": "C"
                        },
                        {
                                "text": "Update the code of the new plug-in to use InputParameters of Plugin Execution Context.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "B"
                ],
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 3,
                "sourceLabel": "Practice Question #3",
                "type": "choice",
                "text": "You are creating a canvas app to retrieve user sign in information from Microsoft Entra ID when someone searches for information about an end user. You create an Azure Function to retrieve the required information by using JSON. You need to ensure that the application functions correctly. Which two actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
                "options": [
                        {
                                "text": "Use Azure Service Bus.",
                                "key": "A"
                        },
                        {
                                "text": "Use app designer in the Power Platform admin center.",
                                "key": "B"
                        },
                        {
                                "text": "Create a custom connector by using the Azure Function API.",
                                "key": "C"
                        },
                        {
                                "text": "Create a Power Automate flow to import data.",
                                "key": "D"
                        },
                        {
                                "text": "Create an API definition for the Azure Function.",
                                "key": "E"
                        }
                ],
                "answers": [
                        "C",
                        "E"
                ],
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 4,
                "sourceLabel": "Practice Question #4",
                "type": "choice",
                "text": "A company designs data integration with an external system by using virtual tables. You need to implement the virtual tables. Solution: Use a table that has a GUID as its primary key. Does the solution meet the goal?",
                "options": [
                        {
                                "text": "Yes",
                                "key": "A"
                        },
                        {
                                "text": "No",
                                "key": "B"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "If all entities in the external data source have an associated GUID primary key, virtual tables can be implemented.",
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 5,
                "sourceLabel": "Practice Question #5",
                "type": "choice",
                "text": "A company designs data integration with an external system by using virtual tables. You need to implement the virtual tables. Solution: Create a calculated column on the virtual table. Does the solution meet the goal?",
                "options": [
                        {
                                "text": "Yes",
                                "key": "A"
                        },
                        {
                                "text": "No",
                                "key": "B"
                        }
                ],
                "answers": [
                        "B"
                ],
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 6,
                "sourceLabel": "Practice Question #6",
                "type": "choice",
                "text": "A company designs data integration with an external system by using virtual tables. You need to implement the virtual tables. Solution: Implement an OData v4 provider as the data source. Does the solution meet the goal?",
                "options": [
                        {
                                "text": "Yes",
                                "key": "A"
                        },
                        {
                                "text": "No",
                                "key": "B"
                        }
                ],
                "answers": [
                        "B"
                ],
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 7,
                "sourceLabel": "Practice Question #7",
                "type": "choice",
                "text": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou are designing a one-way integration from Microsoft Dataverse to another system. You must use an Azure Function to update the other system. The integration must send only newly created records to the other system. The solution must support scenarios where a component of the integration is unavailable for more than a few seconds to avoid data loss. You need to design the integration solution.\n\nSolution: Register a webhook in the Dataverse instance that connects to the Azure Function. Register a step on the webhook which runs synchronously on the record's Create message and in the postoperation stage. Does the solution meet the goal?",
                "options": [
                        {
                                "text": "Yes",
                                "key": "A"
                        },
                        {
                                "text": "No",
                                "key": "B"
                        }
                ],
                "answers": [
                        "B"
                ],
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 8,
                "sourceLabel": "Practice Question #8",
                "type": "choice",
                "text": "You create a custom API. You define the API as a function. The custom API does not appear in the response received from https://[yourorg].api.crm.dynamics.com/api/data/v9.2/$metadata and returns an error when called. You need to identify why the custom API is not working. What should you do?",
                "options": [
                        {
                                "text": "Add a response property to the custom API.",
                                "key": "A"
                        },
                        {
                                "text": "Set the Is Private property of the custom API to False.",
                                "key": "B"
                        },
                        {
                                "text": "Add a request property to the custom API.",
                                "key": "C"
                        },
                        {
                                "text": "Set the Enabled for Workflow option of the custom API to True.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "B"
                ],
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 9,
                "sourceLabel": "Practice Question #9",
                "type": "choice",
                "text": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nA company requires custom validation when users save form records that use a synchronous plug-in. If validation fails, a message that explains how to resolve the issue must be displayed on the form to the user. You need to implement the custom validation.\n\nSolution: Include the message in the output parameters of the plug-in. Does the solution meet the goal?",
                "options": [
                        {
                                "text": "Yes",
                                "key": "A"
                        },
                        {
                                "text": "No",
                                "key": "B"
                        }
                ],
                "answers": [
                        "B"
                ],
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 10,
                "sourceLabel": "Practice Question #10",
                "type": "choice",
                "text": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nA company requires custom validation when users save form records that use a synchronous plug-in. If validation fails, a message that explains how to resolve the issue must be displayed on the form to the user. You need to implement the custom validation.\n\nSolution: Throw an InvalidPluginExecutionException with the message. Does the solution meet the goal?",
                "options": [
                        {
                                "text": "Yes",
                                "key": "A"
                        },
                        {
                                "text": "No",
                                "key": "B"
                        }
                ],
                "answers": [
                        "B"
                ],
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 11,
                "sourceLabel": "Practice Question #11",
                "type": "choice",
                "text": "Which permissions does a managed identity have on Microsoft Dataverse data?",
                "options": [
                        {
                                "text": "Permissions assigned to the corresponding application user.",
                                "key": "A"
                        },
                        {
                                "text": "Permissions assigned to the user triggering the Azure resource.",
                                "key": "B"
                        },
                        {
                                "text": "Permissions equivalent to the environment admin role.",
                                "key": "C"
                        },
                        {
                                "text": "Permissions equivalent to the system administrator role.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 12,
                "sourceLabel": "Practice Question #12",
                "type": "choice",
                "text": "You are configuring a custom connector for a web service. The web service is hosted in two different regions. The web service URL includes a common domain name and a unique sub-domain for each region. The custom connector must allow the region to be entered for additional regions when creating the connection. You need to create a policy template. Which template type should you use?",
                "options": [
                        {
                                "text": "Route request",
                                "key": "A"
                        },
                        {
                                "text": "Set query string parameter",
                                "key": "B"
                        },
                        {
                                "text": "Set host URL",
                                "key": "C"
                        },
                        {
                                "text": "Set HTTP header",
                                "key": "D"
                        }
                ],
                "answers": [
                        "C"
                ],
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 13,
                "sourceLabel": "Practice Question #13",
                "type": "choice",
                "text": "A company designs a solution that contains a new real-time workflow. The workflow populates a lookup column that has a default value. A managed solution is imported to the test environment. An error occurs when a test engineer attempts to create a record. The error message states, \"Record is not available.\" You need to resolve the error. What should you do?",
                "options": [
                        {
                                "text": "Add missing lookup table records to the solution.",
                                "key": "A"
                        },
                        {
                                "text": "Go to the test environment and manually create missing lookup table records.",
                                "key": "B"
                        },
                        {
                                "text": "Use the Configuration Migration Tool to extract the lookup table data from the development environment and import it to the test environment.",
                                "key": "C"
                        }
                ],
                "answers": [
                        "C"
                ],
                "topic": 2,
                "topicId": 2,
                "area": "Build Power Platform solutions"
        },
        {
                "id": 14,
                "sourceLabel": "Practice Question #14",
                "type": "choice",
                "text": "A company manages capital equipment for an electric utility company. The company has a SQL Server database that contains maintenance records for the equipment. Technicians who service the equipment use the Dynamics 365 Field Service mobile app on tablet devices to view scheduled assignments. Technicians use a canvas app to display the maintenance history for each piece of equipment and update the history. Managers use a Power BI dashboard that displays Dynamics 365 Field Service and real-time maintenance data. Due to increasing demand, managers must be able to work in the field as technicians. You need to design a solution that allows the managers to work from one single screen. What should you do?",
                "options": [
                        {
                                "text": "Add the maintenance history app to the Field Service Mobile app.",
                                "key": "A"
                        },
                        {
                                "text": "Add the manager Power BI dashboard to the Field Service mobile app.",
                                "key": "B"
                        },
                        {
                                "text": "Create a new maintenance canvas app from within the Power BI management dashboard.",
                                "key": "C"
                        },
                        {
                                "text": "Add the maintenance history app to the Power BI dashboard.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "D"
                ],
                "topic": 1,
                "topicId": 1,
                "area": "Create a technical design"
        },
        {
                "id": 15,
                "sourceLabel": "Practice Question #15",
                "badge": "Hotspot",
                "type": "matrix",
                "text": "You work for a staffing company that helps employees fill temporary jobs. Available temporary jobs are categorized and listed on a secure area of the company's website. The company wants to eliminate manual work that relates to job and candidate management. The company plans to invite employers with available jobs and job candidates to view jobs by sending personalized invitations. The company identifies several requirements. Which features should you implement? Select the appropriate option for each requirement.",
                "rows": [
                        {
                                "id": "portal",
                                "options": [
                                        "Custom self-service portal for employers and a custom page for job candidates",
                                        "Custom self-service portal for both employers and job candidates",
                                        "Portal for job candidates and a custom self-service portal for employers",
                                        "Portal from blank for job candidates and employers"
                                ],
                                "requirement": "Create the job listings portal.",
                                "label": "Feature",
                                "answer": "Custom self-service portal for both employers and job candidates"
                        },
                        {
                                "id": "positionsApp",
                                "options": [
                                        "Canvas app with push notifications",
                                        "Model-driven app with push notifications",
                                        "Portal app with push notifications"
                                ],
                                "requirement": "Create an app that lists available positions.",
                                "label": "Feature",
                                "answer": "Model-driven app with push notifications"
                        },
                        {
                                "id": "employerApp",
                                "options": [
                                        "Entity form defined on the job custom entity",
                                        "Webform with target set to the job custom entity",
                                        "Web page defined on the job custom entity",
                                        "Web step with target set to the job custom entity"
                                ],
                                "requirement": "Create the app for employers who are seeking temporary employees.",
                                "label": "Feature",
                                "answer": "Webform with target set to the job custom entity"
                        },
                        {
                                "id": "candidateInvite",
                                "options": [
                                        "Configure a value for the Assigned to Account option only.",
                                        "Configure a value for the Execute Workflow on Redeeming Contact option only.",
                                        "Configure values for Assigned to Account and Execute Workflow on Redeeming Contact.",
                                        "Leave both Assigned to Account and Execute Workflow on Redeeming Contact empty."
                                ],
                                "requirement": "Create invitation parameters for job candidates.",
                                "label": "Feature",
                                "answer": "Configure a value for the Execute Workflow on Redeeming Contact option only."
                        },
                        {
                                "id": "approvedInvite",
                                "options": [
                                        "Configure a value for the Assigned to Account option only.",
                                        "Configure a value for the Execute Workflow on Redeeming Contact option only.",
                                        "Configure values for Assigned to Account and Execute Workflow on Redeeming Contact.",
                                        "Leave both Assigned to Account and Execute Workflow on Redeeming Contact empty."
                                ],
                                "requirement": "Create invitation parameters for approved job candidates.",
                                "label": "Feature",
                                "answer": "Configure a value for the Assigned to Account option only."
                        }
                ],
                "uniqueSelection": true,
                "explanation": "This hotspot uses portals, a model-driven app with push notifications, webforms, and invitation settings for redeeming contacts.",
                "topic": 1,
                "topicId": 1,
                "area": "Create a technical design"
        },
        {
                "id": 16,
                "sourceLabel": "Practice Question #16",
                "badge": "Hotspot",
                "type": "matrix",
                "text": "You create a suite of Power Platform-based order management canvas apps for a bakery that has five retail stores. Each store uses a tablet device to manage inventory and process orders. You need to make changes to the original order tracking app and minimize custom code and configuration. What should you use? Select the appropriate implementation option for each requirement.",
                "rows": [
                        {
                                "id": "closestStore",
                                "options": [
                                        "Power Automate flow",
                                        "Plug-in",
                                        "Logic app"
                                ],
                                "requirement": "Determine which store is closest to the order destination.",
                                "label": "Implementation option",
                                "answer": "Power Automate flow"
                        },
                        {
                                "id": "estimateTime",
                                "options": [
                                        "New screen in an existing order canvas app",
                                        "New canvas app",
                                        "New logic app"
                                ],
                                "requirement": "Estimate the time required to prepare an order and notify the customer.",
                                "label": "Implementation option",
                                "answer": "New screen in an existing order canvas app"
                        },
                        {
                                "id": "newsletter",
                                "options": [
                                        "Power Automate flow triggered from an email button",
                                        "Power Automate flow triggered manually",
                                        "Power Automate UI flow triggered from an email button"
                                ],
                                "requirement": "Send the newsletter by email to customers.",
                                "label": "Implementation option",
                                "answer": "Power Automate flow triggered from an email button"
                        }
                ],
                "uniqueSelection": true,
                "explanation": "Use Power Automate for low-code automation, extend the existing canvas app for the order preparation step, and trigger the email process from a button.",
                "explanationImage": "/images/pl400/q3-explanation.png",
                "topic": 1,
                "topicId": 1,
                "area": "Create a technical design"
        },
        {
                "id": 17,
                "sourceLabel": "Practice Question #17",
                "type": "choice",
                "text": "A company has an application that provides API access. You plan to connect to the API from a canvas app by using a custom connector. You need to request information from the API developers so that you can create the custom connector. Which two types of files can you use? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.",
                "options": [
                        {
                                "text": "YAML",
                                "key": "A"
                        },
                        {
                                "text": "WSDL",
                                "key": "B"
                        },
                        {
                                "text": "OpenAPI definition",
                                "key": "C"
                        },
                        {
                                "text": "Postman collection",
                                "key": "D"
                        }
                ],
                "answers": [
                        "C",
                        "D"
                ],
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 18,
                "sourceLabel": "Practice Question #18",
                "type": "choice",
                "text": "You plan to create a canvas app to manage large sets of records. Users will filter and sort the data. You must implement delegation in the canvas app to mitigate potential performance issues. You need to recommend data sources for the app. Which two data sources should you recommend? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.",
                "options": [
                        {
                                "text": "SQL Server",
                                "key": "A"
                        },
                        {
                                "text": "Common Data Service",
                                "key": "B"
                        },
                        {
                                "text": "Azure Data Factory",
                                "key": "C"
                        },
                        {
                                "text": "Azure Table Storage",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A",
                        "B"
                ],
                "topic": 3,
                "topicId": 3,
                "area": "Implement Power Apps improvements"
        },
        {
                "id": 19,
                "sourceLabel": "Practice Question #19",
                "badge": "Hotspot",
                "type": "matrix",
                "text": "A client is deploying Dynamics 365 Finance without any third-party add-ons. You need to select the appropriate solutions for the client. Select the appropriate solution for each scenario.",
                "rows": [
                        {
                                "id": "barcode",
                                "options": [
                                        "Out-of-the-box",
                                        "Logic apps",
                                        "Power Automate",
                                        "Common Data Service"
                                ],
                                "requirement": "Warehouse employees can use mobile devices to scan barcodes by using Dynamics 365 Finance.",
                                "label": "Solution",
                                "answer": "Out-of-the-box"
                        },
                        {
                                "id": "technicianText",
                                "options": [
                                        "Common Data Service",
                                        "Workflow",
                                        "Power Automate"
                                ],
                                "requirement": "The location of field technicians can be communicated with a text message from Dynamics 365 Field Service.",
                                "label": "Solution",
                                "answer": "Power Automate"
                        }
                ],
                "uniqueSelection": true,
                "explanation": "Barcode scanning is supported out of the box, and Power Automate can be used for mobile processes such as alerts and notifications.",
                "topic": 1,
                "topicId": 1,
                "area": "Create a technical design"
        },
        {
                "id": 20,
                "sourceLabel": "Practice Question #20",
                "badge": "Drag and drop",
                "type": "matrix",
                "text": "A company uses Microsoft 365. You are developing a model-driven app. The app must use SharePoint Online for document storage and send emails by using Exchange Online. What should you configure? Select the correct configuration option for each requirement.",
                "rows": [
                        {
                                "id": "email",
                                "options": [
                                        "Server-side synchronization",
                                        "Server-based integration",
                                        "Dual-write",
                                        "System settings"
                                ],
                                "requirement": "Email",
                                "label": "Configuration option",
                                "answer": "Server-side synchronization"
                        },
                        {
                                "id": "documentStorage",
                                "options": [
                                        "Server-side synchronization",
                                        "Server-based integration",
                                        "Dual-write",
                                        "System settings"
                                ],
                                "requirement": "Document storage",
                                "label": "Configuration option",
                                "answer": "Server-based integration"
                        }
                ],
                "uniqueSelection": true,
                "explanation": "Exchange Online email processing uses server-side synchronization. SharePoint document management uses server-based SharePoint integration.",
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 21,
                "sourceLabel": "Practice Question #21",
                "type": "choice",
                "text": "A company plans to create an order processing app. When orders are created, the app will perform complex business logic and integrate with several external systems. Orders that have a large number of line items may take up to six minutes to complete. Processing for each order must be completed in one operation to avoid leaving records in an incomplete state. You need to recommend a solution for the company. What should you recommend?",
                "options": [
                        {
                                "text": "An asynchronous workflow that uses a custom workflow activity",
                                "key": "A"
                        },
                        {
                                "text": "A real-time workflow that uses a custom action",
                                "key": "B"
                        },
                        {
                                "text": "A webhook that connects to an Azure Function",
                                "key": "C"
                        },
                        {
                                "text": "An asynchronous plug-in",
                                "key": "D"
                        }
                ],
                "answers": [
                        "B"
                ],
                "explanation": "This was the only added question without an answer in the provided text. I set the answer to B based on the matching PL-400 question references I found.",
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 22,
                "sourceLabel": "Practice Question #22",
                "badge": "Hotspot",
                "type": "matrix",
                "text": "You work for a not-for-profit agency that manages business processes by using Power Platform custom entities. Volunteer registration and onboarding are manual processes that include multiple related entities. You need to implement a portal solution that replaces the manual processes. Which modules should you use? Select the appropriate module for each requirement.",
                "rows": [
                        {
                                "id": "portalTemplate",
                                "options": [
                                        "Starter portal",
                                        "Community portal",
                                        "Customer self-service portal"
                                ],
                                "requirement": "Create a portal by using a portal template.",
                                "label": "Module",
                                "answer": "Customer self-service portal"
                        },
                        {
                                "id": "volunteerRegistration",
                                "options": [
                                        "Entity form metadata",
                                        "Webform",
                                        "Webform step"
                                ],
                                "requirement": "Manage volunteer registration.",
                                "label": "Module",
                                "answer": "Webform"
                        }
                ],
                "uniqueSelection": true,
                "topic": 1,
                "topicId": 1,
                "area": "Create a technical design"
        },
        {
                "id": 23,
                "sourceLabel": "Practice Question #23",
                "type": "choice",
                "text": "You are implementing custom business logic in a Power Apps portal. You need to use Liquid templates to display dynamic content. To which three entities can you include Liquid code? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.",
                "options": [
                        {
                                "text": "Content snippet",
                                "key": "A"
                        },
                        {
                                "text": "Web page",
                                "key": "B"
                        },
                        {
                                "text": "Web template",
                                "key": "C"
                        },
                        {
                                "text": "Page template",
                                "key": "D"
                        },
                        {
                                "text": "Portal settings",
                                "key": "E"
                        }
                ],
                "answers": [
                        "A",
                        "B",
                        "C"
                ],
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 24,
                "sourceLabel": "Practice Question #24",
                "badge": "Drag and drop",
                "type": "matrix",
                "text": "Teachers in a school district use Azure skill bots to teach specific classes. Students sign into an online portal to submit completed homework to their teacher for review. Students use a Power Virtual Agents chatbot to request help from teachers. You need to incorporate the skill bot for each class into the homework bot. Which three actions should you perform in sequence?",
                "rows": [
                        {
                                "id": "step1",
                                "options": [
                                        "Create a manifest for the skill bot.",
                                        "Register the skill bot in Azure Active Directory.",
                                        "Register the homework bot in Power Virtual Agents.",
                                        "Register the homework bot in Azure Active Directory.",
                                        "Create a manifest for the homework bot.",
                                        "Register the skill bot in Power Virtual Agents."
                                ],
                                "requirement": "Step 1",
                                "label": "Action",
                                "answer": "Register the skill bot in Azure Active Directory."
                        },
                        {
                                "id": "step2",
                                "options": [
                                        "Create a manifest for the skill bot.",
                                        "Register the skill bot in Azure Active Directory.",
                                        "Register the homework bot in Power Virtual Agents.",
                                        "Register the homework bot in Azure Active Directory.",
                                        "Create a manifest for the homework bot.",
                                        "Register the skill bot in Power Virtual Agents."
                                ],
                                "requirement": "Step 2",
                                "label": "Action",
                                "answer": "Create a manifest for the skill bot."
                        },
                        {
                                "id": "step3",
                                "options": [
                                        "Create a manifest for the skill bot.",
                                        "Register the skill bot in Azure Active Directory.",
                                        "Register the homework bot in Power Virtual Agents.",
                                        "Register the homework bot in Azure Active Directory.",
                                        "Create a manifest for the homework bot.",
                                        "Register the skill bot in Power Virtual Agents."
                                ],
                                "requirement": "Step 3",
                                "label": "Action",
                                "answer": "Register the skill bot in Power Virtual Agents."
                        }
                ],
                "uniqueSelection": true,
                "explanation": "Register the skill bot in Azure AD, create the skill manifest, and then register the skill with Power Virtual Agents so the homework bot can call it.",
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 25,
                "sourceLabel": "Practice Question #25",
                "type": "choice",
                "text": "A company is migrating from an on-premises Dynamics 365 installation to a Power Platform solution. You are creating plug-ins for the new solution. You need to register the plug-ins. Which isolation mode should you use?",
                "options": [
                        {
                                "text": "None",
                                "key": "A"
                        },
                        {
                                "text": "Global Assembly Cache (GAC)",
                                "key": "B"
                        },
                        {
                                "text": "Sandbox",
                                "key": "C"
                        },
                        {
                                "text": "Disk",
                                "key": "D"
                        }
                ],
                "answers": [
                        "C"
                ],
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 26,
                "sourceLabel": "Practice Question #26",
                "type": "choice",
                "text": "An organization uses a public-facing Power Apps portal. You need to change the layout of a specific web page. What are two possible ways to achieve the goal? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.",
                "options": [
                        {
                                "text": "Select the Portal Management app and then select Edit.",
                                "key": "A"
                        },
                        {
                                "text": "Select the Portal Management app and then select Play.",
                                "key": "B"
                        },
                        {
                                "text": "Select the portal app and then select Manage.",
                                "key": "C"
                        },
                        {
                                "text": "Select the portal app and then select Edit.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "B",
                        "D"
                ],
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 27,
                "sourceLabel": "Practice Question #27",
                "type": "choice",
                "text": "You are building a custom application in Azure to process resumes for the HR department. The app will monitor submissions of resumes and parse the resumes. You need to parse the resumes and save contact and skills information into Microsoft Dataverse. Which mechanism should you use?",
                "options": [
                        {
                                "text": "Power Automate",
                                "key": "A"
                        },
                        {
                                "text": "Dataverse plug-in",
                                "key": "B"
                        },
                        {
                                "text": "Web API",
                                "key": "C"
                        },
                        {
                                "text": "Custom workflow activity",
                                "key": "D"
                        }
                ],
                "answers": [
                        "C"
                ],
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 28,
                "sourceLabel": "Practice Question #28",
                "badge": "Drag and drop",
                "type": "matrix",
                "text": "You are researching integrations with several external systems. Each integration has different requirements. You need to determine which data sources to use to meet each requirement. What should you use?",
                "rows": [
                        {
                                "id": "integerKey",
                                "options": [
                                        "Virtual entity",
                                        "Custom connector"
                                ],
                                "requirement": "Support records that use an integer as a primary key.",
                                "label": "Object",
                                "answer": "Custom connector"
                        },
                        {
                                "id": "readUpdate",
                                "options": [
                                        "Virtual entity",
                                        "Custom connector"
                                ],
                                "requirement": "Ensure that data can be read and updated.",
                                "label": "Object",
                                "answer": "Custom connector"
                        },
                        {
                                "id": "dataverseClients",
                                "options": [
                                        "Virtual entity",
                                        "Custom connector"
                                ],
                                "requirement": "Ensure that data is available to all Microsoft Dataverse clients.",
                                "label": "Object",
                                "answer": "Virtual entity"
                        }
                ],
                "explanation": "Use a custom connector for data sources that need non-GUID keys or read/write operations through an API. Use a virtual table when the data must appear as Dataverse data to Dataverse clients.",
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 29,
                "sourceLabel": "Practice Question #29",
                "type": "choice",
                "text": "A Power Platform solution includes the following Web API call. You need to explain what this line of code is doing. What does the code do?",
                "code": "GET http://contoso.crm.dynamics.com/api/data/v9.1/RelationshipDefinitions?$select=SchemaName",
                "options": [
                        {
                                "text": "Retrieve the list of relationships between tables.",
                                "key": "A"
                        },
                        {
                                "text": "Retrieve a list of tables that are related to each other.",
                                "key": "B"
                        },
                        {
                                "text": "Retrieve a list of one-to-many relationships with other tables.",
                                "key": "C"
                        },
                        {
                                "text": "Retrieve a list of tables that have more than one relationship.",
                                "key": "D"
                        },
                        {
                                "text": "Retrieve a list of many-to-many relationships with other tables.",
                                "key": "E"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "RelationshipDefinitions is the entity set used to query relationship metadata, including SchemaName.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 30,
                "sourceLabel": "Practice Question #30",
                "badge": "Hotspot",
                "type": "matrix",
                "text": "You create a Power Automate flow that retrieves data from the Microsoft Dataverse Account table. The flow uses only a subset of Account table data. How should you configure the Dataverse List Rows action? Select the appropriate method for each data point.",
                "rows": [
                        {
                                "id": "primaryContactName",
                                "options": [
                                        "Expand Query = primarycontactid($select=fullname)",
                                        "Select columns = fullname",
                                        "Select columns = primarycontactid, fullname",
                                        "Expand Query = /primarycontactid?$select=fullname"
                                ],
                                "requirement": "Full name of the primary contact",
                                "label": "Method",
                                "answer": "Expand Query = primarycontactid($select=fullname)"
                        },
                        {
                                "id": "highestCreditLimit",
                                "options": [
                                        "Row count = 1 and Sort By = creditlimit desc",
                                        "Row count = 1 and Sort By = creditlimit asc",
                                        "Expand Query = expand=account($top=1;$select=creditlimit)"
                                ],
                                "requirement": "Account with the highest credit limit",
                                "label": "Method",
                                "answer": "Row count = 1 and Sort By = creditlimit desc"
                        }
                ],
                "uniqueSelection": true,
                "explanation": "Use Expand Query to retrieve related primary contact data, and sort credit limit descending with a row count of 1 to return the highest value.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 31,
                "sourceLabel": "Practice Question #31",
                "badge": "Drag and drop",
                "type": "matrix",
                "text": "A company is configuring Microsoft Power Virtual Agents and Power Automate flows that use model-driven apps. The company has a website that uses Power Pages. You create Power Virtual Agents bot topics. You must configure the website to use a bot, create Bot Framework skills, and create a support request from the bot without human interaction. Which application should you use for each requirement?",
                "rows": [
                        {
                                "id": "botWebsite",
                                "options": [
                                        "Power Virtual Agents",
                                        "Power Automate",
                                        "Power Pages",
                                        "Power App"
                                ],
                                "requirement": "Use a bot on the website.",
                                "label": "Application",
                                "answer": "Power Pages"
                        },
                        {
                                "id": "botSkills",
                                "options": [
                                        "Power Virtual Agents",
                                        "Power Automate",
                                        "Power Pages",
                                        "Power App"
                                ],
                                "requirement": "Create Bot Framework skills.",
                                "label": "Application",
                                "answer": "Power Virtual Agents"
                        },
                        {
                                "id": "supportRequest",
                                "options": [
                                        "Power Virtual Agents",
                                        "Power Automate",
                                        "Power Pages",
                                        "Power App"
                                ],
                                "requirement": "Create support request from the bot.",
                                "label": "Application",
                                "answer": "Power Automate"
                        }
                ],
                "uniqueSelection": true,
                "topic": 1,
                "topicId": 1,
                "area": "Create a technical design"
        },
        {
                "id": 32,
                "sourceLabel": "Practice Question #32",
                "type": "choice",
                "text": "A company implements Dynamics 365 Customer Service. The company deploys synchronous plug-ins for the PreOperation and PostOperation stages on create and for the PostOperation stage on update for processing different case types. Users experience errors when updating cases. Trace logs show that the PostOperation plug-in update of case times out after two minutes. Testing shows the plug-in is triggered on every case update and retrieves all columns for the updated case record. You need to reduce errors with the least amount of changes. Solution: In the Plug-in Registration Tool, update the plug-in step and increase the Execution Order. Does the solution meet the goal?",
                "options": [
                        {
                                "text": "No",
                                "key": "A"
                        },
                        {
                                "text": "Yes",
                                "key": "B"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Changing execution order does not reduce unnecessary triggering or all-column retrieval. Filtering attributes and optimizing the retrieved columns would be more relevant.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 33,
                "sourceLabel": "Practice Question #33",
                "type": "choice",
                "text": "A company develops a new custom connector for a Microsoft Entra ID-protected Azure Function that was created as a single-tenant app. The custom connector must be moved to a production environment. The connector must be visible and accessible only to users in the tenant. Solution: Add the custom connector to a managed solution, export the managed solution, and then import the managed solution into the production environment. Does the solution meet the goal?",
                "options": [
                        {
                                "text": "No",
                                "key": "A"
                        },
                        {
                                "text": "Yes",
                                "key": "B"
                        }
                ],
                "answers": [
                        "A"
                ],
                "topic": 2,
                "topicId": 2,
                "area": "Build Power Platform solutions"
        },
        {
                "id": 34,
                "sourceLabel": "Practice Question #34",
                "type": "choice",
                "text": "You are troubleshooting a new canvas app. Users report that the app loads slowly. You use the Monitor tool to view various events being performed in the app. Events performed in the app do not have formula details. You need to enable formulas to be included with Monitor tool events. What should you do?",
                "options": [
                        {
                                "text": "Add the Microsoft Azure Application Insights data source to the canvas app.",
                                "key": "A"
                        },
                        {
                                "text": "Validate that the Application Insights instrumentation key has been populated in the app object's properties within the canvas app.",
                                "key": "B"
                        },
                        {
                                "text": "After each event, implement the Trace function within the canvas app.",
                                "key": "C"
                        },
                        {
                                "text": "Turn on the Debug published app setting in the canvas app.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "D"
                ],
                "topic": 3,
                "topicId": 3,
                "area": "Implement Power Apps improvements"
        },
        {
                "id": 35,
                "sourceLabel": "Practice Question #35",
                "badge": "Hotspot",
                "type": "matrix",
                "text": "You are examining code written by another developer that is not functioning correctly. There are no other JavaScript or business rules in use on the form. This code is registered to the OnChange event of the telephone1 field on an account entity form. The primary contact field is a lookup. For each statement, select Yes if the statement is true. Otherwise, select No.",
                "code": "01 function UpdatePrimaryContact(executionContext) {\n02   var formContext = executionContext.getFormContext();\n03   var formType = formContext.ui.getFormType();\n04   if (formType !== 2) {\n05     return;\n06   }\n07   var data =\n08   {\n09     \"telephone1\": formContext.getAttribute(\"telephone1\").getValue()\n10   }\n11   var primaryContact = formContext.getAttribute(\"primarycontactid\").getValue();\n12   Xrm.WebApi.updateRecord(\"contact\", primaryContact[0].id, data).then(\n13     function success() {\n14       ...\n15       Xrm.Navigation.openAlertDialog({ text: \"Updated\" });\n16     },\n17     function fail() {\n18       Xrm.Navigation.openErrorDialog({ message: \"Error\" });\n19     }\n20   );\n21   Xrm.Navigation.openAlertDialog({ text: \"Done\" });\n22 }",
                "rows": [
                        {
                                "id": "updateMode",
                                "options": [
                                        "Yes",
                                        "No"
                                ],
                                "requirement": "Updating the primary contact record will only happen when the form is in update mode.",
                                "label": "Answer",
                                "answer": "Yes"
                        },
                        {
                                "id": "missingPrimaryContact",
                                "options": [
                                        "Yes",
                                        "No"
                                ],
                                "requirement": "If the primary contact field on the account does not have a value, the error dialog on line 18 is displayed.",
                                "label": "Answer",
                                "answer": "Yes"
                        },
                        {
                                "id": "doneAfterUpdated",
                                "options": [
                                        "Yes",
                                        "No"
                                ],
                                "requirement": "The alert dialog on line 21 will always be shown after the update completes and the alert dialog on line 15 is shown.",
                                "label": "Answer",
                                "answer": "No"
                        }
                ],
                "explanation": "The provided answer key for this item is Yes, Yes, No. Line 21 is outside the promise success callback, so it is not guaranteed to run after the update-complete alert.",
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 36,
                "sourceLabel": "Practice Question #36",
                "type": "choice",
                "text": "A client requires that the system send an email from a button on their customer contact form. You need to call the action from JavaScript. Which two functions achieve this result? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.",
                "options": [
                        {
                                "text": "Xrm.WebApi.online.createRecord()",
                                "key": "A"
                        },
                        {
                                "text": "Xrm.WebApi.online.updateRecord()",
                                "key": "B"
                        },
                        {
                                "text": "Xrm.WebApi.online.execute()",
                                "key": "C"
                        },
                        {
                                "text": "Xrm.WebApi.online.executeMultiple()",
                                "key": "D"
                        }
                ],
                "answers": [
                        "C",
                        "D"
                ],
                "explanation": "Use Xrm.WebApi.online.execute for a single action/function/CRUD operation, or executeMultiple for a collection. The uploaded source listed A,D, but its own explanation references execute and executeMultiple.",
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 37,
                "sourceLabel": "Practice Question #37",
                "badge": "Drag and drop",
                "type": "matrix",
                "text": "A company is creating a new system based on Microsoft Dataverse. You need to select the Dataverse features that meet the company's requirements. Which features should you select?",
                "rows": [
                        {
                                "id": "deleteReferentialRecords",
                                "options": [
                                        "Cascade User Owned",
                                        "Referential, Restrict Delete",
                                        "Referential",
                                        "Parental"
                                ],
                                "requirement": "When a primary record is deleted, the associated referential records must also be deleted.",
                                "label": "Feature",
                                "answer": "Referential"
                        },
                        {
                                "id": "assignReferencingRecords",
                                "options": [
                                        "Cascade User Owned",
                                        "Referential, Restrict Delete",
                                        "Referential",
                                        "Parental"
                                ],
                                "requirement": "When a record is assigned to a user, all referencing records must also be assigned to that user.",
                                "label": "Feature",
                                "answer": "Cascade User Owned"
                        },
                        {
                                "id": "doNotDeleteAssociated",
                                "options": [
                                        "Cascade User Owned",
                                        "Referential, Restrict Delete",
                                        "Referential",
                                        "Parental"
                                ],
                                "requirement": "When a primary record is deleted, the associated record must not be deleted.",
                                "label": "Feature",
                                "answer": "Referential, Restrict Delete"
                        }
                ],
                "uniqueSelection": true,
                "topic": 1,
                "topicId": 1,
                "area": "Create a technical design"
        },
        {
                "id": 38,
                "sourceLabel": "Practice Question #38",
                "badge": "Hotspot",
                "type": "matrix",
                "text": "You are designing an integration between Dataverse and an external application. The external application processes thousands of records per day. Processing volumes vary throughout the day and may exceed Dataverse service protection API limits. You need to implement each service protection limit that is enforced. Which implementation should you use for each limit?",
                "rows": [
                        {
                                "id": "numberOfRequests",
                                "options": [
                                        "Number per user over a sliding window of time",
                                        "Number per environment over a sliding window of time",
                                        "Number per user per 24-hour period",
                                        "Number per environment per 24-hour period"
                                ],
                                "requirement": "Number of requests",
                                "label": "Implementation",
                                "answer": "Number per user over a sliding window of time"
                        },
                        {
                                "id": "combinedExecution",
                                "options": [
                                        "Combined time per user over a sliding window of time",
                                        "Combined time per user over a fixed window of time",
                                        "Combined time per environment over a sliding window of time",
                                        "Combined time per environment over a fixed window of time"
                                ],
                                "requirement": "Combined execution time",
                                "label": "Implementation",
                                "answer": "Combined time per user over a sliding window of time"
                        },
                        {
                                "id": "concurrentRequests",
                                "options": [
                                        "Fixed number per user",
                                        "Fixed number per tenant",
                                        "Fixed number per application",
                                        "Fixed number per environment"
                                ],
                                "requirement": "Concurrent requests",
                                "label": "Implementation",
                                "answer": "Fixed number per user"
                        }
                ],
                "uniqueSelection": true,
                "explanation": "Dataverse service protection API limits are based on user request count, combined execution time, and concurrent requests.",
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 39,
                "sourceLabel": "Practice Question #39",
                "type": "choice",
                "text": "Customers report that the response time from the information email listed on the Adventure Works Cycles website is greater than five days. Microsoft Teams is used for all collaboration. You need to reduce response time for the information email on the website. What should you create?",
                "options": [
                        {
                                "text": "A flow that creates a notification in Microsoft Teams",
                                "key": "A"
                        },
                        {
                                "text": "A Power Apps app that displays the number of emails received in a dashboard",
                                "key": "B"
                        },
                        {
                                "text": "A flow that creates a SharePoint item for each email response",
                                "key": "C"
                        },
                        {
                                "text": "A Logic App that moves all emails received to Azure Blob storage",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "topic": 2,
                "topicId": 2,
                "area": "Build Power Platform solutions"
        },
        {
                "id": 40,
                "sourceLabel": "Practice Question #40",
                "badge": "Hotspot",
                "type": "matrix",
                "text": "You need to correct the JavaScript code that communicates with the address verification API. For each statement, select Yes if the statement is true. Otherwise, select No.",
                "rows": [
                        {
                                "id": "actionName",
                                "options": [
                                        "Yes",
                                        "No"
                                ],
                                "requirement": "You must replace ACTIONNAME in line AV22 with northwind_ValidateAddress.",
                                "label": "Answer",
                                "answer": "Yes"
                        },
                        {
                                "id": "lineAv28",
                                "options": [
                                        "Yes",
                                        "No"
                                ],
                                "requirement": "You can add code at line AV28 to display an error message returned by the address validation API.",
                                "label": "Answer",
                                "answer": "Yes"
                        },
                        {
                                "id": "eliminatesError",
                                "options": [
                                        "Yes",
                                        "No"
                                ],
                                "requirement": "Calling the address validation API from the custom action eliminates the error reported by users.",
                                "label": "Answer",
                                "answer": "No"
                        }
                ],
                "explanation": "The provided answer key for this item is Yes, Yes, No.",
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 41,
                "sourceLabel": "Practice Question #41",
                "type": "choice",
                "text": "A bank uses a Dataverse solution to manage clients. Bank representatives perform client credit checks while the client is present. Credit checks may take up to five minutes to complete. Bank policy dictates that the bank representative's app must stay blocked until credit checks are complete. You need to display a message in a model-driven app while credit checks run to ask the bank representative and client to wait for the credit check to complete. Which function should you use?",
                "options": [
                        {
                                "text": "Xrm.Navigation.openWebResource(\"prefix.myPoliteMessage.html\")",
                                "key": "A"
                        },
                        {
                                "text": "Xrm.Navigation.openAlertDialog(myPoliteMessage)",
                                "key": "B"
                        },
                        {
                                "text": "Xrm.Utility.openWebResource(\"prefix_myPoliteMessage.html\")",
                                "key": "C"
                        },
                        {
                                "text": "Xrm.Utility.showProgressIndicator(myPoliteMessage)",
                                "key": "D"
                        }
                ],
                "answers": [
                        "D"
                ],
                "explanation": "showProgressIndicator displays a blocking progress dialog until it is closed with closeProgressIndicator.",
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 42,
                "sourceLabel": "Practice Question #42",
                "type": "choice",
                "text": "You create a Power Automate flow that retrieves data from a proprietary database. You need to ensure that the flow works for other users. Which two actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
                "options": [
                        {
                                "text": "Share a view with users.",
                                "key": "A"
                        },
                        {
                                "text": "Share the custom connector with users.",
                                "key": "B"
                        },
                        {
                                "text": "Share the flow with users.",
                                "key": "C"
                        },
                        {
                                "text": "Share the environment by giving permissions to the users.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "B",
                        "C"
                ],
                "explanation": "A flow that depends on a custom connector must be shared together with the custom connector so other users can run it.",
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 43,
                "sourceLabel": "Practice Question #43",
                "type": "choice",
                "text": "A company has a new implementation that will use Dynamics 365 Field Service. A developer adds two custom tables to the solution in a development environment. The custom tables have lookup columns to Field Service tables. The developer creates a new test environment and imports the solution. The developer receives an error that states dependencies are missing. You need to recommend a solution for the missing dependencies issue. What should you recommend?",
                "options": [
                        {
                                "text": "Install the Field Service application in test.",
                                "key": "A"
                        },
                        {
                                "text": "Export the solution as unmanaged.",
                                "key": "B"
                        },
                        {
                                "text": "Add the custom tables to the solution.",
                                "key": "C"
                        },
                        {
                                "text": "Add the Field Service tables to the solution.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "topic": 2,
                "topicId": 2,
                "area": "Build Power Platform solutions"
        },
        {
                "id": 44,
                "sourceLabel": "Practice Question #44",
                "type": "choice",
                "text": "You create and deploy a Power Platform solution that includes synchronous plug-ins. Users report performance issues with the solution. You need to determine whether a plug-in is the cause of the performance issues. Which two tools can you use? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
                "options": [
                        {
                                "text": "Microsoft Dataverse Analytics",
                                "key": "A"
                        },
                        {
                                "text": "Solution checker",
                                "key": "B"
                        },
                        {
                                "text": "Tracing",
                                "key": "C"
                        },
                        {
                                "text": "ISV Studio",
                                "key": "D"
                        },
                        {
                                "text": "Data policies",
                                "key": "E"
                        }
                ],
                "answers": [
                        "B",
                        "C"
                ],
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 45,
                "sourceLabel": "Practice Question #45",
                "badge": "Hotspot",
                "type": "matrix",
                "text": "You need to configure the address verification API. Which values should you use? Select the appropriate value for each property.",
                "rows": [
                        {
                                "id": "message",
                                "options": [
                                        "Update",
                                        "Execute",
                                        "northwind_ValidateAddress"
                                ],
                                "requirement": "Address validation message",
                                "label": "Value",
                                "answer": "northwind_ValidateAddress"
                        },
                        {
                                "id": "executionMode",
                                "options": [
                                        "Synchronous",
                                        "Asynchronous",
                                        "Post-Operation"
                                ],
                                "requirement": "Execution mode",
                                "label": "Value",
                                "answer": "Synchronous"
                        }
                ],
                "uniqueSelection": true,
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 46,
                "sourceLabel": "Practice Question #46",
                "badge": "Sequence",
                "type": "matrix",
                "text": "An organization has a Dynamics 365 Sales environment. In the development environment, you create a business rule named BusinessRule1 on the Account table. You deploy BusinessRule1 to production as part of a managed solution. You need to remove BusinessRule1 from the production environment. Which three actions should you perform in sequence?",
                "rows": [
                        {
                                "id": "step1",
                                "options": [
                                        "In the development environment, navigate to Solutions.",
                                        "Create a new managed solution in the production environment.",
                                        "Export the solution as managed and import it in the production environment.",
                                        "In the production environment, add a new business rule.",
                                        "Select the solution that has BusinessRule1, navigate to the appropriate table, and delete the rule."
                                ],
                                "requirement": "Step 1",
                                "label": "Action",
                                "answer": "In the development environment, navigate to Solutions."
                        },
                        {
                                "id": "step2",
                                "options": [
                                        "In the development environment, navigate to Solutions.",
                                        "Create a new managed solution in the production environment.",
                                        "Export the solution as managed and import it in the production environment.",
                                        "In the production environment, add a new business rule.",
                                        "Select the solution that has BusinessRule1, navigate to the appropriate table, and delete the rule."
                                ],
                                "requirement": "Step 2",
                                "label": "Action",
                                "answer": "Export the solution as managed and import it in the production environment."
                        },
                        {
                                "id": "step3",
                                "options": [
                                        "In the development environment, navigate to Solutions.",
                                        "Create a new managed solution in the production environment.",
                                        "Export the solution as managed and import it in the production environment.",
                                        "In the production environment, add a new business rule.",
                                        "Select the solution that has BusinessRule1, navigate to the appropriate table, and delete the rule."
                                ],
                                "requirement": "Step 3",
                                "label": "Action",
                                "answer": "Select the solution that has BusinessRule1, navigate to the appropriate table, and delete the rule."
                        }
                ],
                "uniqueSelection": true,
                "topic": 2,
                "topicId": 2,
                "area": "Build Power Platform solutions"
        },
        {
                "id": 47,
                "sourceLabel": "Practice Question #47",
                "badge": "Sequence",
                "type": "matrix",
                "text": "You are developing a Power Platform solution. You are modifying a business process flow. You created a new radial knob for the Total amount value and added the radial knob to the form. The Total amount value must be entered at initiation before moving to the next step. You need to configure the business process flow. Which four actions should you perform in sequence?",
                "rows": [
                        {
                                "id": "step1",
                                "options": [
                                        "Create a new solution and add the business process flow and export the solution. Delete the solution after export.",
                                        "Open the business process in the Business Process Flow designer and select Activate/Update.",
                                        "Add another step to the business process flow.",
                                        "Import the solution into Dataverse.",
                                        "Delete the business process flow.",
                                        "Copy custom control configurations to the business process flow FormXML for the related table form."
                                ],
                                "requirement": "Step 1",
                                "label": "Action",
                                "answer": "Create a new solution and add the business process flow and export the solution. Delete the solution after export."
                        },
                        {
                                "id": "step2",
                                "options": [
                                        "Create a new solution and add the business process flow and export the solution. Delete the solution after export.",
                                        "Open the business process in the Business Process Flow designer and select Activate/Update.",
                                        "Add another step to the business process flow.",
                                        "Import the solution into Dataverse.",
                                        "Delete the business process flow.",
                                        "Copy custom control configurations to the business process flow FormXML for the related table form."
                                ],
                                "requirement": "Step 2",
                                "label": "Action",
                                "answer": "Copy custom control configurations to the business process flow FormXML for the related table form."
                        },
                        {
                                "id": "step3",
                                "options": [
                                        "Create a new solution and add the business process flow and export the solution. Delete the solution after export.",
                                        "Open the business process in the Business Process Flow designer and select Activate/Update.",
                                        "Add another step to the business process flow.",
                                        "Import the solution into Dataverse.",
                                        "Delete the business process flow.",
                                        "Copy custom control configurations to the business process flow FormXML for the related table form."
                                ],
                                "requirement": "Step 3",
                                "label": "Action",
                                "answer": "Import the solution into Dataverse."
                        },
                        {
                                "id": "step4",
                                "options": [
                                        "Create a new solution and add the business process flow and export the solution. Delete the solution after export.",
                                        "Open the business process in the Business Process Flow designer and select Activate/Update.",
                                        "Add another step to the business process flow.",
                                        "Import the solution into Dataverse.",
                                        "Delete the business process flow.",
                                        "Copy custom control configurations to the business process flow FormXML for the related table form."
                                ],
                                "requirement": "Step 4",
                                "label": "Action",
                                "answer": "Open the business process in the Business Process Flow designer and select Activate/Update."
                        }
                ],
                "uniqueSelection": true,
                "topic": 3,
                "topicId": 3,
                "area": "Implement Power Apps improvements"
        },
        {
                "id": 48,
                "sourceLabel": "Practice Question #48",
                "badge": "Hotspot",
                "type": "matrix",
                "text": "A company uses Dynamics 365 Sales and the Microsoft Online Services portal. The multi-select OptionSet field data type is not supported in the portal. You need to copy the selected field value to a text field. How should you configure the Organization service request?",
                "rows": [
                        {
                                "id": "retrieveAsIfPublished",
                                "options": [
                                        "true",
                                        "false"
                                ],
                                "requirement": "RetrieveAsIfPublished",
                                "label": "Value",
                                "answer": "true"
                        },
                        {
                                "id": "metadataType",
                                "options": [
                                        "AttributeMetadata",
                                        "AttributeResponse",
                                        "OptionMetadataCollection",
                                        "MultiSelectPicklistAttributeMetadata"
                                ],
                                "requirement": "Metadata type returned by RetrieveAttributeResponse",
                                "label": "Value",
                                "answer": "AttributeMetadata"
                        }
                ],
                "uniqueSelection": true,
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 49,
                "sourceLabel": "Practice Question #49",
                "type": "choice",
                "text": "A travel company has a Dataverse environment. The company requires custom tables that track which regions clients have traveled to and the dates their clients traveled to these regions. You need to create the tables and relationships to meet the requirements. Which three actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
                "options": [
                        {
                                "text": "Create an N:N relationship from Contact to the Region table.",
                                "key": "A"
                        },
                        {
                                "text": "Create a 1:N relationship from the ContactRegion intersect table and Region.",
                                "key": "B"
                        },
                        {
                                "text": "Create an intersect table named ContactRegion and create 1:N relationships to Contact and Region.",
                                "key": "C"
                        },
                        {
                                "text": "On the main form for ContactRegion, add lookup columns for Contact and Region, and a date column for the visit date.",
                                "key": "D"
                        },
                        {
                                "text": "Create a 1:N relationship from Contact to the Region table.",
                                "key": "E"
                        },
                        {
                                "text": "Create the Region table.",
                                "key": "F"
                        }
                ],
                "answers": [
                        "C",
                        "D",
                        "F"
                ],
                "topic": 1,
                "topicId": 1,
                "area": "Create a technical design"
        },
        {
                "id": 50,
                "sourceLabel": "Practice Question #50",
                "type": "choice",
                "text": "You are developing custom pages for a model-driven app. The app must display a timer control within a menu and include a mixture of buttons and icons. If a change is made to any of these elements, then the changes must cascade out automatically to all custom pages. You need to implement a solution. What should you implement?",
                "options": [
                        {
                                "text": "PCF control",
                                "key": "A"
                        },
                        {
                                "text": "Timer control",
                                "key": "B"
                        },
                        {
                                "text": "Canvas component",
                                "key": "C"
                        },
                        {
                                "text": "Web resource",
                                "key": "D"
                        }
                ],
                "answers": [
                        "C"
                ],
                "topic": 1,
                "topicId": 1,
                "area": "Create a technical design"
        },
        {
                "id": 51,
                "sourceLabel": "Practice Question #51",
                "badge": "Yes/No",
                "type": "matrix",
                "text": "A delivery service uses a canvas app to track and deliver packages. The app uses SQL Server as a data store. Review the Power Fx code and determine whether each statement is true.",
                "code": "ClearCollect(\n    Result,\n    Patch(\n        Receivers,\n        Defaults(Receivers),\n        {\n            SignedByFN: txtInFirstName.Text,\n            SignedByID: txtInID.Text\n        }\n    )\n);\nPatch(\n    Packages,\n    Defaults(Packages),\n    {\n        SBsqlid: First(Result).SBsqlid,\n        TrackingNo: lblPackage.Text\n    }\n);",
                "rows": [
                        {
                                "id": "identity",
                                "options": [
                                        "Yes",
                                        "No"
                                ],
                                "requirement": "The Patch statement populates the identity column when a record is created.",
                                "label": "Answer",
                                "answer": "Yes"
                        },
                        {
                                "id": "reference",
                                "options": [
                                        "Yes",
                                        "No"
                                ],
                                "requirement": "The Patch statement at line 03 creates a reference to the customer who received a specific package.",
                                "label": "Answer",
                                "answer": "No"
                        },
                        {
                                "id": "lookup",
                                "options": [
                                        "Yes",
                                        "No"
                                ],
                                "requirement": "You must add a lookup function to ensure that the code correctly creates a reference to the customer who receives a package.",
                                "label": "Answer",
                                "answer": "Yes"
                        },
                        {
                                "id": "merge",
                                "options": [
                                        "Yes",
                                        "No"
                                ],
                                "requirement": "The Patch statement at line 12 merges records.",
                                "label": "Answer",
                                "answer": "Yes"
                        }
                ],
                "topic": 3,
                "topicId": 3,
                "area": "Implement Power Apps improvements"
        },
        {
                "id": 52,
                "sourceLabel": "Practice Question #52",
                "type": "choice",
                "text": "You are creating an integration between Microsoft Dataverse and an external system. Messages from Dataverse must be sent to Microsoft Azure Service Bus. An Azure Function will process the messages. Events must be published directly to the ServiceEndpoint for Azure Service Bus. You need to create code for the messages. Which class should you use?",
                "options": [
                        {
                                "text": "IExecutionContext",
                                "key": "A"
                        },
                        {
                                "text": "IPluginExecutionContext",
                                "key": "B"
                        },
                        {
                                "text": "RemoteExecutionContext",
                                "key": "C"
                        },
                        {
                                "text": "WorkflowContext",
                                "key": "D"
                        }
                ],
                "answers": [
                        "C"
                ],
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 53,
                "sourceLabel": "Practice Question #53",
                "badge": "Hotspot",
                "type": "matrix",
                "text": "You need to develop a set of Web APIs for a company. What should you implement for each requirement?",
                "rows": [
                        {
                                "id": "noSideEffects",
                                "options": [
                                        "Functions",
                                        "Actions",
                                        "Entities"
                                ],
                                "requirement": "Implement operations that do not have side effects and may support further composition.",
                                "label": "Operation",
                                "answer": "Functions"
                        },
                        {
                                "id": "sideEffects",
                                "options": [
                                        "Functions",
                                        "Actions",
                                        "Entities"
                                ],
                                "requirement": "Implement operations that allow side effects, such as data modification.",
                                "label": "Operation",
                                "answer": "Actions"
                        },
                        {
                                "id": "keylessTypes",
                                "options": [
                                        "Complex types",
                                        "Entity types",
                                        "Enumeration types"
                                ],
                                "requirement": "Implement keyless named structure types that consist of a set of properties.",
                                "label": "Operation",
                                "answer": "Complex types"
                        }
                ],
                "uniqueSelection": true,
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 54,
                "sourceLabel": "Practice Question #54",
                "badge": "Drag and drop",
                "type": "matrix",
                "text": "You need to determine how to implement rules for players who register for a soccer tournament. Which business rule actions should you use for each field?",
                "rows": [
                        {
                                "id": "weight",
                                "options": [
                                        "Set visibility action to No.",
                                        "Set Lock/Unlock action to Lock.",
                                        "Set Field Value action to No.",
                                        "Set Business Required action to Business Required."
                                ],
                                "requirement": "Weight: the weight field must not display.",
                                "label": "Business rule action",
                                "answer": "Set visibility action to No."
                        },
                        {
                                "id": "age",
                                "options": [
                                        "Set visibility action to No.",
                                        "Set Lock/Unlock action to Lock.",
                                        "Set Field Value action to No.",
                                        "Set Business Required action to Business Required."
                                ],
                                "requirement": "Age: the age of the player must be captured.",
                                "label": "Business rule action",
                                "answer": "Set Business Required action to Business Required."
                        },
                        {
                                "id": "height",
                                "options": [
                                        "Set visibility action to No.",
                                        "Set Lock/Unlock action to Lock.",
                                        "Set Field Value action to No.",
                                        "Set Business Required action to Business Required."
                                ],
                                "requirement": "Height: the height field must not display.",
                                "label": "Business rule action",
                                "answer": "Set visibility action to No."
                        }
                ],
                "topic": 3,
                "topicId": 3,
                "area": "Implement Power Apps improvements"
        },
        {
                "id": 55,
                "sourceLabel": "Practice Question #55",
                "type": "choice",
                "text": "A company plans to replicate a Dynamics 365 Sales database into an Azure SQL Database instance for reporting purposes. The Data Export Service solution has been installed. You need to configure the Data service. Which three actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
                "options": [
                        {
                                "text": "Enable auditing for all tables that must be replicated to Azure SQL Database.",
                                "key": "A"
                        },
                        {
                                "text": "Create an export profile that specifies all the tables that must be replicated.",
                                "key": "B"
                        },
                        {
                                "text": "Set up server-based integration.",
                                "key": "C"
                        },
                        {
                                "text": "Enable change tracking for all tables that must be replicated to Azure SQL Database.",
                                "key": "D"
                        },
                        {
                                "text": "Create an Azure SQL Database service in the same tenant as the Dynamics 365 Sales environment.",
                                "key": "E"
                        }
                ],
                "answers": [
                        "B",
                        "D",
                        "E"
                ],
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 56,
                "sourceLabel": "Practice Question #56",
                "badge": "Drag and drop",
                "type": "matrix",
                "text": "You are designing new functionality for an existing model-driven app. A field must display multiple selections to the user, enabling the user to select a value. Which column type should you use for each scenario?",
                "rows": [
                        {
                                "id": "removeSelection",
                                "options": [
                                        "Global choice",
                                        "Lookup",
                                        "Global choice and Lookup"
                                ],
                                "requirement": "Remove a selection from being available without modifying existing records.",
                                "label": "Column type",
                                "answer": "Lookup"
                        },
                        {
                                "id": "solutionDeployment",
                                "options": [
                                        "Global choice",
                                        "Lookup",
                                        "Global choice and Lookup"
                                ],
                                "requirement": "Must be completely deployed by using a solution.",
                                "label": "Column type",
                                "answer": "Global choice and Lookup"
                        },
                        {
                                "id": "reuseSelections",
                                "options": [
                                        "Global choice",
                                        "Lookup",
                                        "Global choice and Lookup"
                                ],
                                "requirement": "Same set of selections can be used on multiple tables.",
                                "label": "Column type",
                                "answer": "Global choice"
                        }
                ],
                "uniqueSelection": true,
                "topic": 1,
                "topicId": 1,
                "area": "Create a technical design"
        },
        {
                "id": 57,
                "sourceLabel": "Practice Question #57",
                "type": "choice",
                "text": "A company requires custom validation when users save form records that use a synchronous plug-in. If validation fails, a message that explains how to resolve the issue must be displayed on the form to the user. You need to implement the custom validation. Solution: Use the tracing service to log the message. Does the solution meet the goal?",
                "options": [
                        {
                                "text": "Yes",
                                "key": "A"
                        },
                        {
                                "text": "No",
                                "key": "B"
                        }
                ],
                "answers": [
                        "B"
                ],
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 58,
                "sourceLabel": "Practice Question #58",
                "type": "choice",
                "text": "You are deploying a Power Apps app that uses the custom connector for ServiceNow. The app loads very slowly for some users. You determine that all records from ServiceNow are being retrieved for every user. The app must load only incidents that are assigned to each user. You need to limit the number of records that the connector returns. What should you do?",
                "options": [
                        {
                                "text": "Apply a Lifecycle Services asset scope.",
                                "key": "A"
                        },
                        {
                                "text": "Apply a business process flow.",
                                "key": "B"
                        },
                        {
                                "text": "Apply the Azure APIM parameter.",
                                "key": "C"
                        },
                        {
                                "text": "Apply a connector policy template.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "D"
                ],
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 59,
                "sourceLabel": "Practice Question #59",
                "badge": "Drag and drop",
                "type": "matrix",
                "text": "Power Automate flows must connect securely to external systems. You need to create custom connectors to access the external systems. Which type of security should you use for each connector?",
                "rows": [
                        {
                                "id": "accountsReceivable",
                                "options": [
                                        "OAuth 2.0",
                                        "Basic authentication",
                                        "API key",
                                        "No authentication"
                                ],
                                "requirement": "Accounts receivable",
                                "label": "Security type",
                                "answer": "OAuth 2.0"
                        },
                        {
                                "id": "bingMaps",
                                "options": [
                                        "OAuth 2.0",
                                        "Basic authentication",
                                        "API key",
                                        "No authentication"
                                ],
                                "requirement": "Bing maps",
                                "label": "Security type",
                                "answer": "API key"
                        }
                ],
                "uniqueSelection": true,
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 60,
                "sourceLabel": "Practice Question #60",
                "type": "choice",
                "text": "A company is developing multiple plug-ins. One of the plug-ins keeps failing. You need to debug the plug-in. Which three actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
                "options": [
                        {
                                "text": "Highlight the plug-in step and select Debug in the Plug-in Registration tool.",
                                "key": "A"
                        },
                        {
                                "text": "Copy the pdb file into the server/bin/assembly folder.",
                                "key": "B"
                        },
                        {
                                "text": "Select Start Profiling in the Plug-in Registration tool.",
                                "key": "C"
                        },
                        {
                                "text": "Attach the debugger to the w3wp.exe process.",
                                "key": "D"
                        },
                        {
                                "text": "Install the plug-in profiler.",
                                "key": "E"
                        }
                ],
                "answers": [
                        "A",
                        "C",
                        "E"
                ],
                "explanation": "Use the Plug-in Profiler to capture execution, start profiling on the plug-in step, and then replay/debug locally.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 61,
                "sourceLabel": "Practice Question #61",
                "type": "choice",
                "text": "A company uses Dataverse rollup fields to calculate insurance exposure and risk profiles for customers. Users report that the system does not update values for the rollup fields when new insurance policies are written. You need to recalculate the value of the rollup fields immediately after a policy is created. What should you do?",
                "options": [
                        {
                                "text": "Create new fields on the customer table for insurance exposure and risk. Write a workflow process that is triggered when a new policy record is created to calculate the sum of values from policy records.",
                                "key": "A"
                        },
                        {
                                "text": "Update the Mass Calculate Rollup Field job to trigger when a new policy record is created.",
                                "key": "B"
                        },
                        {
                                "text": "Create a business rule that forces the refresh of the rollup field when the customer record is updated.",
                                "key": "C"
                        },
                        {
                                "text": "Create new fields on the customer table for insurance exposure and risk. Write a plug-in that is triggered whenever a new policy record is created.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "D"
                ],
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 62,
                "sourceLabel": "Practice Question #62",
                "type": "choice",
                "text": "A multinational company requires that all phone numbers be standardized as country code + area code + phone number. The application design team decides that a custom Power Apps component framework control should be used to prompt users for an area code and correctly format the phone number. You need to get the list of valid area codes when a contact record is opened and before the user enters a new phone number. In which function should you call webAPI.retrieveMultipleRecords?",
                "options": [
                        {
                                "text": "notifyOutputChanged",
                                "key": "A"
                        },
                        {
                                "text": "init",
                                "key": "B"
                        },
                        {
                                "text": "getOutputs",
                                "key": "C"
                        },
                        {
                                "text": "updateView",
                                "key": "D"
                        }
                ],
                "answers": [
                        "D"
                ],
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 63,
                "sourceLabel": "Practice Question #63",
                "badge": "Drag and drop",
                "type": "matrix",
                "text": "You are creating a business process flow for an organization’s Request for Quote process. You need to ensure that the business process flow meets the company’s requirements. Which component should you use for each requirement?",
                "rows": [
                        {
                                "id": "receipt",
                                "options": [
                                        "Step",
                                        "Stage",
                                        "Custom control",
                                        "Branching condition"
                                ],
                                "requirement": "The process starts with the receipt of the request for quote.",
                                "label": "Component",
                                "answer": "Step"
                        },
                        {
                                "id": "creditChecks",
                                "options": [
                                        "Step",
                                        "Stage",
                                        "Custom control",
                                        "Branching condition"
                                ],
                                "requirement": "Ensure that credit checks are performed for new users only.",
                                "label": "Component",
                                "answer": "Branching condition"
                        },
                        {
                                "id": "mergePaths",
                                "options": [
                                        "Step",
                                        "Stage",
                                        "Custom control",
                                        "Branching condition"
                                ],
                                "requirement": "Merge all process paths into the main flow.",
                                "label": "Component",
                                "answer": "Stage"
                        }
                ],
                "uniqueSelection": true,
                "topic": 1,
                "topicId": 1,
                "area": "Create a technical design"
        },
        {
                "id": 64,
                "sourceLabel": "Practice Question #64",
                "badge": "Sequence",
                "type": "matrix",
                "text": "A company creates a custom connector to use in a flow named Search Company. When this custom connector is used, requests must be redirected to a different endpoint at runtime. You need to apply a policy to the custom connector to route calls to a different endpoint. Which three actions should you perform in sequence?",
                "rows": [
                        {
                                "id": "step1",
                                "options": [
                                        "Select the Search Company custom connector under Custom connectors and select Edit.",
                                        "Select the Definition tab.",
                                        "Select New Policy.",
                                        "Select the Security tab.",
                                        "Create a new connection reference."
                                ],
                                "requirement": "Step 1",
                                "label": "Action",
                                "answer": "Select the Search Company custom connector under Custom connectors and select Edit."
                        },
                        {
                                "id": "step2",
                                "options": [
                                        "Select the Search Company custom connector under Custom connectors and select Edit.",
                                        "Select the Definition tab.",
                                        "Select New Policy.",
                                        "Select the Security tab.",
                                        "Create a new connection reference."
                                ],
                                "requirement": "Step 2",
                                "label": "Action",
                                "answer": "Select the Definition tab."
                        },
                        {
                                "id": "step3",
                                "options": [
                                        "Select the Search Company custom connector under Custom connectors and select Edit.",
                                        "Select the Definition tab.",
                                        "Select New Policy.",
                                        "Select the Security tab.",
                                        "Create a new connection reference."
                                ],
                                "requirement": "Step 3",
                                "label": "Action",
                                "answer": "Select New Policy."
                        }
                ],
                "uniqueSelection": true,
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 65,
                "sourceLabel": "Practice Question #65",
                "type": "choice",
                "text": "A company has a model-driven app form. Many users use the form. Users state that the form takes too long to fully load. You need to evaluate the form design to improve loading performance. Which three control types can you use? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.",
                "options": [
                        {
                                "text": "Timeline",
                                "key": "A"
                        },
                        {
                                "text": "Quick view form",
                                "key": "B"
                        },
                        {
                                "text": "iFrame",
                                "key": "C"
                        },
                        {
                                "text": "Lookup",
                                "key": "D"
                        },
                        {
                                "text": "Subgrid",
                                "key": "E"
                        }
                ],
                "answers": [
                        "B",
                        "C",
                        "D"
                ],
                "topic": 3,
                "topicId": 3,
                "area": "Implement Power Apps improvements"
        },
        {
                "id": 66,
                "sourceLabel": "Practice Question #66",
                "type": "choice",
                "text": "You are creating a Power Apps app. The app must retrieve data from an API that requires two-factor authentication. You need to configure authentication. Which type of authentication should you implement?",
                "options": [
                        {
                                "text": "Server-to-server",
                                "key": "A"
                        },
                        {
                                "text": "Basic",
                                "key": "B"
                        },
                        {
                                "text": "API key-based",
                                "key": "C"
                        },
                        {
                                "text": "OAuth",
                                "key": "D"
                        }
                ],
                "answers": [
                        "D"
                ],
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 67,
                "sourceLabel": "Practice Question #67",
                "type": "choice",
                "text": "An organization uses Dynamics 365 Sales. The organization has accounting and customer service departments. You must restrict users in customer service from being able to change the value of the Balance field on Contact records. The accounting team must be the only team able to edit this field. You need to create the appropriate solution without any customizations. What should you do first?",
                "options": [
                        {
                                "text": "Enable field security for the Balance field and grant the customer service team read and update permissions.",
                                "key": "A"
                        },
                        {
                                "text": "Create a customer service form and role and make the Balance field read-only.",
                                "key": "B"
                        },
                        {
                                "text": "Enable field security for the Balance field and grant the accounting team read permissions.",
                                "key": "C"
                        },
                        {
                                "text": "Enable field security for the Balance field and grant the customer service team read permissions.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "C"
                ],
                "explanation": "Use field-level security to restrict access to high-impact fields for specific users or teams.",
                "topic": 2,
                "topicId": 2,
                "area": "Build Power Platform solutions"
        },
        {
                "id": 68,
                "sourceLabel": "Practice Question #68",
                "badge": "Cleaned sequence",
                "type": "choice",
                "text": "You create solutions in a development environment and export the solution for testing by various departments. Power users in each department control the testing environments. You must display department-specific wording at the beginning of custom notifications in testing environments. You need to package the solution so power users can customize the notification content. Which sequence should you use?",
                "options": [
                        {
                                "text": "Create an empty environment variable for the custom text, create a function that retrieves and displays the value in the notification, and then export the solution.",
                                "key": "A"
                        },
                        {
                                "text": "Hard-code the department text in JavaScript, add the web resource to the solution, and export the solution as managed.",
                                "key": "B"
                        },
                        {
                                "text": "Create a separate notification web resource for each department, add all web resources to the solution, and ask each department to delete the unused ones.",
                                "key": "C"
                        },
                        {
                                "text": "Create a business rule for each department, activate all rules in development, and export the solution.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Use an environment variable for environment-specific text so the value can be changed after deployment without changing the solution components that consume it.",
                "topic": 2,
                "topicId": 2,
                "area": "Build Power Platform solutions"
        },
        {
                "id": 69,
                "sourceLabel": "Practice Question #69",
                "type": "choice",
                "text": "You need to create a model-driven app for accounts designated as referrals. Extra fields must appear if the referral customer box is selected. If the box is not selected, the extra fields must not appear. What should you add to the app?",
                "options": [
                        {
                                "text": "Workflow",
                                "key": "A"
                        },
                        {
                                "text": "Subgrid",
                                "key": "B"
                        },
                        {
                                "text": "Business rule",
                                "key": "C"
                        },
                        {
                                "text": "Flow",
                                "key": "D"
                        },
                        {
                                "text": "Chart",
                                "key": "E"
                        }
                ],
                "answers": [
                        "C"
                ],
                "explanation": "A business rule can set visibility, clear or set column values, set requirement levels, and validate data based on conditions on a model-driven form.",
                "topic": 3,
                "topicId": 3,
                "area": "Implement Power Apps improvements"
        },
        {
                "id": 70,
                "sourceLabel": "Practice Question #70",
                "badge": "Cleaned sequence",
                "type": "choice",
                "text": "You create a Power Apps Component Framework (PCF) control and need to create a solution package for deployment to a model-driven app. Which command sequence should you run?",
                "options": [
                        {
                                "text": "pac solution init --publisher-name <publisher> --publisher-prefix <prefix>; pac solution add-reference --path <control-path>; msbuild /t:build /restore",
                                "key": "A"
                        },
                        {
                                "text": "pac pcf init; npm install; pac pcf push --publisher-prefix <prefix>",
                                "key": "B"
                        },
                        {
                                "text": "msbuild /t:build /restore; pac solution init --publisher-name <publisher>; pac solution add-reference --path <control-path>",
                                "key": "C"
                        },
                        {
                                "text": "pac auth create; pac solution export; pac solution unpack",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Initialize the solution project, add a reference to the PCF control, and then build the solution package.",
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 71,
                "sourceLabel": "Practice Question #71",
                "badge": "Cleaned sequence",
                "type": "choice",
                "text": "A company implements Dynamics 365 Sales. Only sales managers must be able to approve moving high-value sales opportunities through the opportunity qualification process. A new field must be created to capture the approval. Which sequence should you use to create and secure the field?",
                "options": [
                        {
                                "text": "Create the approval field, enable field security for the field, create or update a field security profile for sales managers, and grant the required field permissions.",
                                "key": "A"
                        },
                        {
                                "text": "Create the approval field, hide it on the form for non-managers, and rely on the form visibility setting for security.",
                                "key": "B"
                        },
                        {
                                "text": "Create the approval field, add it to a business rule, and make the field business required for all users.",
                                "key": "C"
                        },
                        {
                                "text": "Create the approval field, add it to the opportunity view, and remove the opportunity table from all non-manager security roles.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Field-level security is the correct mechanism when only a specific group should be able to read or update a sensitive column.",
                "topic": 2,
                "topicId": 2,
                "area": "Build Power Platform solutions"
        },
        {
                "id": 72,
                "sourceLabel": "Practice Question #72",
                "badge": "Original scenario",
                "type": "choice",
                "text": "A model-driven app calls an external credit service. The service can take several minutes to return a result. Users must be able to continue working, and the result can be written back to Dataverse when processing completes. Which design should you recommend?",
                "options": [
                        {
                                "text": "Call the service synchronously from a form OnSave script and block the save until it returns.",
                                "key": "A"
                        },
                        {
                                "text": "Queue the request and process it asynchronously by using an Azure Function or Power Automate flow, then update Dataverse when complete.",
                                "key": "B"
                        },
                        {
                                "text": "Run the call inside a synchronous pre-operation plug-in and increase the plug-in timeout.",
                                "key": "C"
                        },
                        {
                                "text": "Use a business rule to call the external service directly from the form.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "B"
                ],
                "explanation": "Long-running external work should not block the model-driven app or a synchronous Dataverse transaction. Use an asynchronous integration pattern and update Dataverse when the workload completes.",
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 73,
                "sourceLabel": "Practice Question #73",
                "badge": "Original scenario",
                "type": "choice",
                "text": "An Azure Function must write records to Dataverse without storing a client secret in application settings. The function runs in Azure and the organization wants to use least privilege. What should you configure?",
                "options": [
                        {
                                "text": "A delegated user connection using the environment administrator account.",
                                "key": "A"
                        },
                        {
                                "text": "A managed identity, a corresponding Dataverse application user, and security roles with only the required privileges.",
                                "key": "B"
                        },
                        {
                                "text": "A Dataverse connection reference owned by every user who runs the function.",
                                "key": "C"
                        },
                        {
                                "text": "A system administrator security role assigned to all users of the app.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "B"
                ],
                "explanation": "A managed identity can authenticate the Azure resource, while the Dataverse application user and security roles control the actual data permissions.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 74,
                "sourceLabel": "Practice Question #74",
                "badge": "Original scenario",
                "type": "choice",
                "text": "A company allows Dataverse and SharePoint connectors in production flows but must prevent makers from combining Dataverse with a personal email connector in the same flow. What should you configure?",
                "options": [
                        {
                                "text": "A Dataverse business rule.",
                                "key": "A"
                        },
                        {
                                "text": "A data loss prevention policy that places connectors into appropriate data groups.",
                                "key": "B"
                        },
                        {
                                "text": "A model-driven app security role.",
                                "key": "C"
                        },
                        {
                                "text": "A field security profile for all email columns.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "B"
                ],
                "explanation": "DLP policies govern which connectors can be used together in Power Platform environments.",
                "topic": 1,
                "topicId": 1,
                "area": "Create a technical design"
        },
        {
                "id": 75,
                "sourceLabel": "Practice Question #75",
                "badge": "Original scenario",
                "type": "choice",
                "text": "You are building a custom connector for a REST API. The API uses OAuth 2.0 and requires users to sign in so that calls run under each user's identity. Which authentication type should you configure in the connector?",
                "options": [
                        {
                                "text": "No authentication",
                                "key": "A"
                        },
                        {
                                "text": "API key",
                                "key": "B"
                        },
                        {
                                "text": "Basic authentication",
                                "key": "C"
                        },
                        {
                                "text": "OAuth 2.0",
                                "key": "D"
                        }
                ],
                "answers": [
                        "D"
                ],
                "explanation": "OAuth 2.0 is the appropriate authentication pattern when the external service requires user sign-in and token-based access.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 76,
                "sourceLabel": "Practice Question #76",
                "badge": "Original scenario",
                "type": "choice",
                "text": "A custom connector must add a fixed header named x-client-source to every request sent to the backend API. Which connector feature should you use?",
                "options": [
                        {
                                "text": "A policy template that sets an HTTP header.",
                                "key": "A"
                        },
                        {
                                "text": "A Dataverse business rule.",
                                "key": "B"
                        },
                        {
                                "text": "A plug-in step registered on Create.",
                                "key": "C"
                        },
                        {
                                "text": "A Power Apps component framework manifest property.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Custom connector policies can modify requests at runtime, including setting headers, query parameters, or routing information.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 77,
                "sourceLabel": "Practice Question #77",
                "badge": "Original scenario",
                "type": "choice",
                "text": "You need to expose a Dataverse operation through the Web API. The operation changes data and may start additional business logic. Which type of custom API should you create?",
                "options": [
                        {
                                "text": "Function",
                                "key": "A"
                        },
                        {
                                "text": "Action",
                                "key": "B"
                        },
                        {
                                "text": "Calculated column",
                                "key": "C"
                        },
                        {
                                "text": "View",
                                "key": "D"
                        }
                ],
                "answers": [
                        "B"
                ],
                "explanation": "Use an action for operations that have side effects, such as changing data or triggering additional processing.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 78,
                "sourceLabel": "Practice Question #78",
                "badge": "Original scenario",
                "type": "choice",
                "text": "A synchronous plug-in must validate a record before the main Dataverse operation starts its database transaction. If validation fails, the save must be stopped. Which stage should you use?",
                "options": [
                        {
                                "text": "PreValidation",
                                "key": "A"
                        },
                        {
                                "text": "PreOperation",
                                "key": "B"
                        },
                        {
                                "text": "PostOperation",
                                "key": "C"
                        },
                        {
                                "text": "AsyncOperation",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "PreValidation runs before the main operation transaction. It is appropriate when early validation should stop the operation before transactional work begins.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 79,
                "sourceLabel": "Practice Question #79",
                "badge": "Original scenario",
                "type": "choice",
                "text": "A plug-in registered on Update must compare the previous credit limit with the new credit limit without making an extra Retrieve call. What should you configure?",
                "options": [
                        {
                                "text": "A post image only",
                                "key": "A"
                        },
                        {
                                "text": "A pre image that includes the credit limit column",
                                "key": "B"
                        },
                        {
                                "text": "A calculated column",
                                "key": "C"
                        },
                        {
                                "text": "A canvas app collection",
                                "key": "D"
                        }
                ],
                "answers": [
                        "B"
                ],
                "explanation": "A pre image gives the plug-in access to selected column values before the update, avoiding an additional Retrieve call.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 80,
                "sourceLabel": "Practice Question #80",
                "badge": "Original scenario",
                "type": "choice",
                "text": "A plug-in updates the same row that triggered it. During testing, the plug-in repeatedly triggers itself. Which check should you add first to reduce the risk of recursion?",
                "options": [
                        {
                                "text": "Check the execution context Depth and stop processing when the depth is greater than the expected value.",
                                "key": "A"
                        },
                        {
                                "text": "Register the plug-in on every table so the platform can deduplicate events.",
                                "key": "B"
                        },
                        {
                                "text": "Move the plug-in assembly to isolation mode None.",
                                "key": "C"
                        },
                        {
                                "text": "Disable tracing for the plug-in step.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Depth is commonly used to detect recursive plug-in execution. Filtering attributes and careful update payloads should also be used.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 81,
                "sourceLabel": "Practice Question #81",
                "badge": "Original scenario",
                "type": "choice",
                "text": "A plug-in step registered on Update for the Account table should run only when the creditlimit column changes. What should you configure on the step?",
                "options": [
                        {
                                "text": "Filtering attributes",
                                "key": "A"
                        },
                        {
                                "text": "Secure configuration only",
                                "key": "B"
                        },
                        {
                                "text": "An image named Target",
                                "key": "C"
                        },
                        {
                                "text": "The isolation mode",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Filtering attributes limit Update step execution to changes that include specific columns.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 82,
                "sourceLabel": "Practice Question #82",
                "badge": "Original scenario",
                "type": "choice",
                "text": "A team wants to store Dataverse solution components in source control so changes can be reviewed in pull requests. Which approach should they use?",
                "options": [
                        {
                                "text": "Export the solution and commit only the compressed .zip file.",
                                "key": "A"
                        },
                        {
                                "text": "Unpack the solution into source-control friendly files and commit the unpacked folder.",
                                "key": "B"
                        },
                        {
                                "text": "Copy the components manually from the maker portal into a Word document.",
                                "key": "C"
                        },
                        {
                                "text": "Store only screenshots of the solution layers.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "B"
                ],
                "explanation": "Unpacking a solution creates files that can be reviewed, merged, and tracked in a source control system.",
                "topic": 2,
                "topicId": 2,
                "area": "Build Power Platform solutions"
        },
        {
                "id": 83,
                "sourceLabel": "Practice Question #83",
                "badge": "Original scenario",
                "type": "choice",
                "text": "A cloud flow is included in a managed solution and uses a connector that needs a connection in each target environment. What should you configure to make deployment manageable across environments?",
                "options": [
                        {
                                "text": "A connection reference that can be bound to the correct connection during deployment.",
                                "key": "A"
                        },
                        {
                                "text": "A hard-coded user password inside the flow definition.",
                                "key": "B"
                        },
                        {
                                "text": "A calculated column on every Dataverse table.",
                                "key": "C"
                        },
                        {
                                "text": "A business process flow stage for each connector.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Connection references separate solution components from environment-specific connector connections.",
                "topic": 2,
                "topicId": 2,
                "area": "Build Power Platform solutions"
        },
        {
                "id": 84,
                "sourceLabel": "Practice Question #84",
                "badge": "Original scenario",
                "type": "choice",
                "text": "After importing a managed solution update, a form does not display the expected version of a component. You need to identify which solution layer is currently active for the component. What should you inspect?",
                "options": [
                        {
                                "text": "Solution layers for the component",
                                "key": "A"
                        },
                        {
                                "text": "Only the environment URL",
                                "key": "B"
                        },
                        {
                                "text": "The user's browser cache size",
                                "key": "C"
                        },
                        {
                                "text": "The Power BI workspace refresh history",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Solution layers show which managed or unmanaged layer is controlling a component in the environment.",
                "topic": 2,
                "topicId": 2,
                "area": "Build Power Platform solutions"
        },
        {
                "id": 85,
                "sourceLabel": "Practice Question #85",
                "badge": "Original scenario",
                "type": "choice",
                "text": "A PCF control must refresh its rendering when an input property changes on the host form. Which lifecycle method is called when the framework provides updated context to the control?",
                "options": [
                        {
                                "text": "init",
                                "key": "A"
                        },
                        {
                                "text": "updateView",
                                "key": "B"
                        },
                        {
                                "text": "destroy",
                                "key": "C"
                        },
                        {
                                "text": "getOutputs",
                                "key": "D"
                        }
                ],
                "answers": [
                        "B"
                ],
                "explanation": "updateView is called when the framework provides updated context, such as changed input properties or container size changes.",
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 86,
                "sourceLabel": "Practice Question #86",
                "badge": "Original scenario",
                "type": "choice",
                "text": "You are creating a PCF control that must work with a view and display multiple rows from a table. Which manifest capability should you use?",
                "options": [
                        {
                                "text": "A dataset element",
                                "key": "A"
                        },
                        {
                                "text": "A single line of text column only",
                                "key": "B"
                        },
                        {
                                "text": "A business rule scope",
                                "key": "C"
                        },
                        {
                                "text": "An environment variable secret",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Dataset PCF components are used when the control needs access to a collection of rows, such as a view or subgrid.",
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 87,
                "sourceLabel": "Practice Question #87",
                "badge": "Original scenario",
                "type": "choice",
                "text": "A command button in a model-driven app must open a custom page as a side pane. Which client API method is the best fit?",
                "options": [
                        {
                                "text": "Xrm.Navigation.navigateTo",
                                "key": "A"
                        },
                        {
                                "text": "Xrm.Utility.closeProgressIndicator",
                                "key": "B"
                        },
                        {
                                "text": "Xrm.WebApi.deleteRecord",
                                "key": "C"
                        },
                        {
                                "text": "formContext.data.entity.save",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Xrm.Navigation.navigateTo can be used to navigate to custom pages and control the navigation target such as dialog or side pane.",
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 88,
                "sourceLabel": "Practice Question #88",
                "badge": "Original scenario",
                "type": "choice",
                "text": "A maker adds a modern command to a model-driven app. The command must be visible only when the selected row has Status Reason equal to Active. What should you configure?",
                "options": [
                        {
                                "text": "The command visibility formula",
                                "key": "A"
                        },
                        {
                                "text": "A Dataverse duplicate detection rule",
                                "key": "B"
                        },
                        {
                                "text": "A Power BI row-level security role",
                                "key": "C"
                        },
                        {
                                "text": "A portal web role",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Modern commands can use Power Fx formulas to control visibility based on row data and app context.",
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 89,
                "sourceLabel": "Practice Question #89",
                "badge": "Original scenario",
                "type": "choice",
                "text": "A Dataverse Web API integration must create an account and two related tasks in a single HTTP request. If one create operation fails, none of the records should be created. What should you use?",
                "options": [
                        {
                                "text": "A batch request with a changeset",
                                "key": "A"
                        },
                        {
                                "text": "Three unrelated GET requests",
                                "key": "B"
                        },
                        {
                                "text": "A business rule",
                                "key": "C"
                        },
                        {
                                "text": "A personal view",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "A changeset groups write operations transactionally inside an OData batch request.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 90,
                "sourceLabel": "Practice Question #90",
                "badge": "Original scenario",
                "type": "choice",
                "text": "You need to troubleshoot why a canvas app screen loads slowly and which connector calls are taking the most time. Which tool should you use first?",
                "options": [
                        {
                                "text": "Monitor",
                                "key": "A"
                        },
                        {
                                "text": "Solution layers",
                                "key": "B"
                        },
                        {
                                "text": "Field security profiles",
                                "key": "C"
                        },
                        {
                                "text": "Business process flow designer",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Monitor helps troubleshoot canvas and model-driven app behavior, including data calls and performance issues.",
                "topic": 3,
                "topicId": 3,
                "area": "Implement Power Apps improvements"
        },
        {
                "id": 91,
                "sourceLabel": "Practice Question #91",
                "badge": "Original scenario",
                "type": "choice",
                "text": "A canvas app must filter a large Dataverse table by Account Name while avoiding delegation warnings. Which approach should you prefer?",
                "options": [
                        {
                                "text": "Use delegable functions and columns supported by the Dataverse connector, such as StartsWith for searchable text scenarios.",
                                "key": "A"
                        },
                        {
                                "text": "Load all rows into a local collection and filter locally.",
                                "key": "B"
                        },
                        {
                                "text": "Disable delegation warnings in app settings and publish.",
                                "key": "C"
                        },
                        {
                                "text": "Convert the Dataverse table to an Excel file stored on the user's device.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Delegable queries allow Power Apps to push filtering to the data source and avoid incomplete local results with large tables.",
                "topic": 3,
                "topicId": 3,
                "area": "Implement Power Apps improvements"
        },
        {
                "id": 92,
                "sourceLabel": "Practice Question #92",
                "badge": "Original scenario",
                "type": "choice",
                "text": "A canvas app start screen needs data from three independent connectors. You want to reduce the waiting time before the screen is usable. Which Power Fx function can run independent formulas at the same time?",
                "options": [
                        {
                                "text": "Concurrent",
                                "key": "A"
                        },
                        {
                                "text": "Patch",
                                "key": "B"
                        },
                        {
                                "text": "Collect",
                                "key": "C"
                        },
                        {
                                "text": "ResetForm",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Concurrent can evaluate independent formulas at the same time, which can reduce perceived loading time when calls do not depend on each other.",
                "topic": 3,
                "topicId": 3,
                "area": "Implement Power Apps improvements"
        },
        {
                "id": 93,
                "sourceLabel": "Practice Question #93",
                "badge": "Original scenario",
                "type": "choice",
                "text": "An external system must be notified when a Dataverse business event occurs. You want subscribers to consume a formal event contract rather than polling Dataverse. What should you configure?",
                "options": [
                        {
                                "text": "A Dataverse business event",
                                "key": "A"
                        },
                        {
                                "text": "A personal chart",
                                "key": "B"
                        },
                        {
                                "text": "A classic theme",
                                "key": "C"
                        },
                        {
                                "text": "A duplicate detection job",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Dataverse business events allow external subscribers to react to events without polling for changes.",
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 94,
                "sourceLabel": "Practice Question #94",
                "badge": "Original scenario",
                "type": "choice",
                "text": "A model-driven app needs to show external product records inside Dataverse forms and views without copying the product records into Dataverse. Which table type should you consider?",
                "options": [
                        {
                                "text": "Virtual table",
                                "key": "A"
                        },
                        {
                                "text": "Activity table only",
                                "key": "B"
                        },
                        {
                                "text": "Calculated table",
                                "key": "C"
                        },
                        {
                                "text": "System user table",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Virtual tables surface external data in Dataverse experiences without storing a full copy of the data in Dataverse.",
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 95,
                "sourceLabel": "Practice Question #95",
                "badge": "Original scenario",
                "type": "choice",
                "text": "A solution must store very high-volume IoT readings in Dataverse. The data is partitioned, queried by time, and retained only for a defined period. Which Dataverse table capability is most appropriate?",
                "options": [
                        {
                                "text": "Elastic table",
                                "key": "A"
                        },
                        {
                                "text": "Choice column",
                                "key": "B"
                        },
                        {
                                "text": "Business process flow table",
                                "key": "C"
                        },
                        {
                                "text": "Currency table",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Elastic tables are intended for high-volume, horizontally scalable scenarios with capabilities such as partitioning and time-to-live.",
                "topic": 1,
                "topicId": 1,
                "area": "Create a technical design"
        },
        {
                "id": 96,
                "sourceLabel": "Practice Question #96",
                "badge": "Original scenario",
                "type": "choice",
                "text": "A plug-in needs configuration values that differ between development, test, and production. The values are not secrets and should move with the solution while allowing per-environment changes. What should you use?",
                "options": [
                        {
                                "text": "Environment variables",
                                "key": "A"
                        },
                        {
                                "text": "Hard-coded constants in the plug-in assembly",
                                "key": "B"
                        },
                        {
                                "text": "A hidden unmanaged form field",
                                "key": "C"
                        },
                        {
                                "text": "A browser cookie",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Environment variables support environment-specific configuration values for solution components.",
                "topic": 2,
                "topicId": 2,
                "area": "Build Power Platform solutions"
        },
        {
                "id": 97,
                "sourceLabel": "Practice Question #97",
                "badge": "Original scenario",
                "type": "choice",
                "text": "A deployment pipeline must import a managed solution to test and production without manual interaction. Which Microsoft tooling is designed for automating Power Platform ALM tasks in Azure DevOps or GitHub workflows?",
                "options": [
                        {
                                "text": "Power Platform Build Tools or Power Platform CLI",
                                "key": "A"
                        },
                        {
                                "text": "Only the classic form designer",
                                "key": "B"
                        },
                        {
                                "text": "Power BI bookmarks",
                                "key": "C"
                        },
                        {
                                "text": "A local browser extension installed by each tester",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Power Platform Build Tools and the Power Platform CLI support automated solution export, import, pack, unpack, and other ALM tasks.",
                "topic": 2,
                "topicId": 2,
                "area": "Build Power Platform solutions"
        },
        {
                "id": 98,
                "sourceLabel": "Practice Question #98",
                "badge": "Original scenario",
                "type": "choice",
                "text": "A model-driven app form contains JavaScript web resources. Users report that an error occurs only in production. You need to debug the client-side script with browser tools and inspect network calls. Which approach should you use?",
                "options": [
                        {
                                "text": "Use browser developer tools and the model-driven app Monitor session to inspect script errors and network activity.",
                                "key": "A"
                        },
                        {
                                "text": "Export all Dataverse rows to Excel and search for the JavaScript error.",
                                "key": "B"
                        },
                        {
                                "text": "Disable all security roles for the environment.",
                                "key": "C"
                        },
                        {
                                "text": "Convert the model-driven app into a canvas app.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Client-side issues in model-driven apps are typically investigated with browser developer tools and Monitor.",
                "topic": 3,
                "topicId": 3,
                "area": "Implement Power Apps improvements"
        },
        {
                "id": 99,
                "sourceLabel": "Practice Question #99",
                "badge": "Original scenario",
                "type": "choice",
                "text": "Several cloud flows need to reuse the same Dataverse validation logic. The reusable flow must be transported with the solution and called by parent flows. What should you create?",
                "options": [
                        {
                                "text": "A child flow inside a solution",
                                "key": "A"
                        },
                        {
                                "text": "A personal desktop shortcut",
                                "key": "B"
                        },
                        {
                                "text": "A canvas app collection",
                                "key": "C"
                        },
                        {
                                "text": "A Power BI calculated table",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Child flows in solutions allow reusable flow logic that can be called by parent flows and deployed through ALM.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 100,
                "sourceLabel": "Practice Question #100",
                "badge": "Original scenario",
                "type": "choice",
                "text": "A company wants to add AI-assisted classification to a Power Platform solution so incoming support requests can be categorized before routing. The requirement is low-code and should run inside a cloud flow. Which capability should you consider first?",
                "options": [
                        {
                                "text": "AI Builder or an AI model action in Power Automate",
                                "key": "A"
                        },
                        {
                                "text": "A manually refreshed Excel pivot table",
                                "key": "B"
                        },
                        {
                                "text": "A field security profile",
                                "key": "C"
                        },
                        {
                                "text": "A model-driven app theme",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "AI capabilities can be incorporated into solution logic through Power Platform and Power Automate when low-code classification is required.",
                "topic": 2,
                "topicId": 2,
                "area": "Build Power Platform solutions"
        },
        {
                "id": 101,
                "sourceLabel": "Practice Question #101",
                "type": "choice",
                "text": "A model-driven app must validate a row before it is committed. If the validation fails, the save operation must be cancelled and the user must receive an error message. The validation must run in the Dataverse transaction. What should you implement?",
                "options": [
                        {
                                "text": "A cloud flow triggered after the row is added or modified",
                                "key": "A"
                        },
                        {
                                "text": "A synchronous PreOperation plug-in that throws an InvalidPluginExecutionException",
                                "key": "B"
                        },
                        {
                                "text": "A canvas app formula that patches the row and then checks the result",
                                "key": "C"
                        },
                        {
                                "text": "An asynchronous PostOperation plug-in that writes a validation record",
                                "key": "D"
                        }
                ],
                "answers": [
                        "B"
                ],
                "explanation": "Use a synchronous PreOperation plug-in when validation must participate in the Dataverse transaction and cancel the operation before the row is committed.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 102,
                "sourceLabel": "Practice Question #102",
                "type": "choice",
                "text": "A solution must display external product catalog data inside model-driven apps without copying the data into Dataverse. Users only need to view the latest data from the external system. Which component should you recommend?",
                "options": [
                        {
                                "text": "Virtual table",
                                "key": "A"
                        },
                        {
                                "text": "Elastic table",
                                "key": "B"
                        },
                        {
                                "text": "Calculated column",
                                "key": "C"
                        },
                        {
                                "text": "Dataflow into a standard table",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Virtual tables are used to represent external data in Dataverse without storing that data in Dataverse tables.",
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 103,
                "sourceLabel": "Practice Question #103",
                "type": "choice",
                "text": "A company must prevent makers from building flows that move business data from Dataverse to consumer social media connectors. What should an administrator configure?",
                "options": [
                        {
                                "text": "A data loss prevention policy that separates business and non-business connector groups",
                                "key": "A"
                        },
                        {
                                "text": "A field security profile on all Dataverse tables",
                                "key": "B"
                        },
                        {
                                "text": "A managed solution layer that hides the social media connectors",
                                "key": "C"
                        },
                        {
                                "text": "A model-driven app security role with no append privileges",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "DLP policies control how connectors can be combined by grouping connectors into business, non-business, and blocked categories.",
                "topic": 1,
                "topicId": 1,
                "area": "Create a technical design"
        },
        {
                "id": 104,
                "sourceLabel": "Practice Question #104",
                "type": "choice",
                "text": "A managed solution contains a cloud flow and a custom connector. The connector needs an API secret that is different in development, test, and production. The secret must not be stored directly in the flow definition. What should you use?",
                "options": [
                        {
                                "text": "A text environment variable with the secret value typed into the solution",
                                "key": "A"
                        },
                        {
                                "text": "An environment variable that references an Azure Key Vault secret",
                                "key": "B"
                        },
                        {
                                "text": "A JavaScript web resource that stores the secret in a global variable",
                                "key": "C"
                        },
                        {
                                "text": "A business rule that sets the connector password at runtime",
                                "key": "D"
                        }
                ],
                "answers": [
                        "B"
                ],
                "explanation": "Azure Key Vault secret references let environment-specific secrets be used by flows and custom connectors without storing the actual secret in the solution.",
                "topic": 2,
                "topicId": 2,
                "area": "Build Power Platform solutions"
        },
        {
                "id": 105,
                "sourceLabel": "Practice Question #105",
                "type": "choice",
                "text": "A development team stores unpacked Power Platform solution files in source control and wants an Azure DevOps pipeline to import the solution into test environments. Which toolset should the team use in the pipeline?",
                "options": [
                        {
                                "text": "Power Platform Build Tools",
                                "key": "A"
                        },
                        {
                                "text": "Power BI Desktop deployment wizard",
                                "key": "B"
                        },
                        {
                                "text": "Portal Management app",
                                "key": "C"
                        },
                        {
                                "text": "Dataverse classic advanced find",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Power Platform Build Tools support CI/CD tasks such as packing, importing, exporting, and checking Power Platform solutions from Azure DevOps.",
                "topic": 2,
                "topicId": 2,
                "area": "Build Power Platform solutions"
        },
        {
                "id": 106,
                "sourceLabel": "Practice Question #106",
                "type": "choice",
                "text": "A developer wants to keep a Dataverse solution in source control as readable files, then recreate the solution zip during a build. Which command-line capability should be used?",
                "options": [
                        {
                                "text": "pac solution unpack and pac solution pack",
                                "key": "A"
                        },
                        {
                                "text": "pac pcf push only",
                                "key": "B"
                        },
                        {
                                "text": "Plugin Registration Tool profile and replay",
                                "key": "C"
                        },
                        {
                                "text": "Configuration Migration Tool export and import",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "The Power Platform CLI can unpack solution zip files into source-control-friendly files and pack them again for deployment.",
                "topic": 2,
                "topicId": 2,
                "area": "Build Power Platform solutions"
        },
        {
                "id": 107,
                "sourceLabel": "Practice Question #107",
                "type": "choice",
                "text": "A canvas app becomes slow when users open a screen that loads thousands of Dataverse rows into a collection. You need to diagnose network calls, formula execution, and connector behavior while the app runs. Which tool should you use?",
                "options": [
                        {
                                "text": "Power Apps Monitor",
                                "key": "A"
                        },
                        {
                                "text": "Solution checker only",
                                "key": "B"
                        },
                        {
                                "text": "Plug-in Profiler",
                                "key": "C"
                        },
                        {
                                "text": "Power BI Performance Analyzer",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Power Apps Monitor helps troubleshoot app behavior by showing runtime events, data calls, errors, and performance-related details.",
                "topic": 3,
                "topicId": 3,
                "area": "Implement Power Apps improvements"
        },
        {
                "id": 108,
                "sourceLabel": "Practice Question #108",
                "type": "choice",
                "text": "A canvas app must search a large Dataverse table. Users report incomplete results because the formula uses a nondelegable expression. What should you do?",
                "options": [
                        {
                                "text": "Increase the data row limit to the maximum and keep the same formula",
                                "key": "A"
                        },
                        {
                                "text": "Rewrite the formula to use delegable operations supported by the data source",
                                "key": "B"
                        },
                        {
                                "text": "Store all Dataverse rows in a collection on app start",
                                "key": "C"
                        },
                        {
                                "text": "Convert the table into a Power BI dataset",
                                "key": "D"
                        }
                ],
                "answers": [
                        "B"
                ],
                "explanation": "Delegable formulas let Dataverse perform filtering and searching server-side, avoiding incomplete client-side results on large datasets.",
                "topic": 3,
                "topicId": 3,
                "area": "Implement Power Apps improvements"
        },
        {
                "id": 109,
                "sourceLabel": "Practice Question #109",
                "type": "choice",
                "text": "You register a JavaScript function for the OnSave event of a model-driven app form. The function must access the current form context without using the deprecated Xrm.Page object. What should the function use?",
                "options": [
                        {
                                "text": "executionContext.getFormContext()",
                                "key": "A"
                        },
                        {
                                "text": "Xrm.Utility.getGlobalContext().getFormContext()",
                                "key": "B"
                        },
                        {
                                "text": "Xrm.Page.data.entity",
                                "key": "C"
                        },
                        {
                                "text": "window.parent.document.forms[0]",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "When the execution context is passed to a client script, getFormContext returns the form context for the current form or editable grid.",
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 110,
                "sourceLabel": "Practice Question #110",
                "type": "choice",
                "text": "A command bar button in a model-driven app must only be visible when a row meets a simple Dataverse condition. You want to avoid a JavaScript web resource if possible. What should you use?",
                "options": [
                        {
                                "text": "Modern command designer with Power Fx visibility logic",
                                "key": "A"
                        },
                        {
                                "text": "A synchronous plug-in registered on RetrieveMultiple",
                                "key": "B"
                        },
                        {
                                "text": "A calculated column that returns HTML",
                                "key": "C"
                        },
                        {
                                "text": "A business process flow branch only",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Modern commanding can use Power Fx for command behavior and visibility without requiring JavaScript for simple logic.",
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 111,
                "sourceLabel": "Practice Question #111",
                "type": "choice",
                "text": "A PCF code component must refresh its UI when a bound column value, container width, or component metadata changes. Which lifecycle method is called by the framework for these changes?",
                "options": [
                        {
                                "text": "init",
                                "key": "A"
                        },
                        {
                                "text": "updateView",
                                "key": "B"
                        },
                        {
                                "text": "getOutputs",
                                "key": "C"
                        },
                        {
                                "text": "destroy",
                                "key": "D"
                        }
                ],
                "answers": [
                        "B"
                ],
                "explanation": "updateView is called when values in the property bag change, including data, layout, metadata, and other framework-provided values.",
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 112,
                "sourceLabel": "Practice Question #112",
                "type": "choice",
                "text": "A PCF field component lets users edit a value. After the value changes, the framework must receive the updated bound value. Which method returns the output object defined by the manifest?",
                "options": [
                        {
                                "text": "destroy",
                                "key": "A"
                        },
                        {
                                "text": "getOutputs",
                                "key": "B"
                        },
                        {
                                "text": "init",
                                "key": "C"
                        },
                        {
                                "text": "addOnChange",
                                "key": "D"
                        }
                ],
                "answers": [
                        "B"
                ],
                "explanation": "getOutputs returns the updated values for bound properties after the component notifies the framework that outputs changed.",
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 113,
                "sourceLabel": "Practice Question #113",
                "type": "choice",
                "text": "A Dataverse plug-in must compare the previous value of a column with the value submitted in an update message. The plug-in should avoid making an additional retrieve call. What should you configure?",
                "options": [
                        {
                                "text": "A Pre Image on the plug-in step",
                                "key": "A"
                        },
                        {
                                "text": "A connection reference",
                                "key": "B"
                        },
                        {
                                "text": "A calculated column",
                                "key": "C"
                        },
                        {
                                "text": "A custom connector policy",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "A Pre Image captures selected column values before the operation and makes them available in the plug-in execution context.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 114,
                "sourceLabel": "Practice Question #114",
                "type": "choice",
                "text": "A plug-in step runs on update of the Account table. The plug-in should only run when the Credit Limit column changes. What should you configure on the step?",
                "options": [
                        {
                                "text": "Filtering attributes that include only the Credit Limit column",
                                "key": "A"
                        },
                        {
                                "text": "A Post Image with all columns",
                                "key": "B"
                        },
                        {
                                "text": "Execution order set to 1",
                                "key": "C"
                        },
                        {
                                "text": "Run in the sandbox isolation mode",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Filtering attributes reduce unnecessary plug-in execution by causing the step to run only when relevant columns are included in the update.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 115,
                "sourceLabel": "Practice Question #115",
                "type": "choice",
                "text": "A custom API must represent an operation that may change Dataverse data and call server-side business logic. Which custom API type should you choose?",
                "options": [
                        {
                                "text": "Function",
                                "key": "A"
                        },
                        {
                                "text": "Action",
                                "key": "B"
                        },
                        {
                                "text": "Complex type",
                                "key": "C"
                        },
                        {
                                "text": "Entity type",
                                "key": "D"
                        }
                ],
                "answers": [
                        "B"
                ],
                "explanation": "Actions are appropriate for operations with side effects, such as creating, updating, or otherwise changing data.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 116,
                "sourceLabel": "Practice Question #116",
                "type": "choice",
                "text": "A custom API should operate on a specific Account row and appear as a bound operation in the Dataverse Web API. What should you configure?",
                "options": [
                        {
                                "text": "Set the binding type to entity and specify Account as the bound table",
                                "key": "A"
                        },
                        {
                                "text": "Set Is Private to True and omit all request parameters",
                                "key": "B"
                        },
                        {
                                "text": "Create an N:N relationship between Account and Custom API",
                                "key": "C"
                        },
                        {
                                "text": "Create a virtual table that points to the Custom API",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "A bound custom API is associated with a specific table so it can be called in the context of a row from that table.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 117,
                "sourceLabel": "Practice Question #117",
                "type": "choice",
                "text": "A Dataverse client application receives service protection limit errors while performing high-volume API calls. What should the application do?",
                "options": [
                        {
                                "text": "Immediately retry all failed requests in parallel",
                                "key": "A"
                        },
                        {
                                "text": "Use the Retry-After duration returned by the service before sending more requests",
                                "key": "B"
                        },
                        {
                                "text": "Disable plug-ins in the target environment",
                                "key": "C"
                        },
                        {
                                "text": "Switch from OAuth to basic authentication",
                                "key": "D"
                        }
                ],
                "answers": [
                        "B"
                ],
                "explanation": "When service protection limits are hit, the response provides a Retry-After value that clients should respect before retrying.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 118,
                "sourceLabel": "Practice Question #118",
                "type": "choice",
                "text": "A Dataverse plug-in needs to call an Azure resource without storing client secrets in configuration. The organization wants to use identity-based authentication for the plug-in package. What should you configure?",
                "options": [
                        {
                                "text": "Power Platform managed identity for the plug-in or plug-in package",
                                "key": "A"
                        },
                        {
                                "text": "A secure configuration string that contains the client secret",
                                "key": "B"
                        },
                        {
                                "text": "A client-side JavaScript environment variable",
                                "key": "C"
                        },
                        {
                                "text": "A business rule with a hidden password column",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Power Platform managed identity lets Dataverse plug-ins or plug-in packages connect to Azure resources without managing credentials in code or configuration.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 119,
                "sourceLabel": "Practice Question #119",
                "type": "choice",
                "text": "A cloud flow writes sensitive customer identifiers to several actions. The values must not appear in the flow run history. What should you configure?",
                "options": [
                        {
                                "text": "Secure inputs and secure outputs on the actions that handle sensitive values",
                                "key": "A"
                        },
                        {
                                "text": "A delay action before each sensitive step",
                                "key": "B"
                        },
                        {
                                "text": "A parallel branch for the sensitive actions",
                                "key": "C"
                        },
                        {
                                "text": "A Power BI dashboard for the flow run history",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Secure inputs and outputs prevent sensitive action data from being exposed in flow run logs.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 120,
                "sourceLabel": "Practice Question #120",
                "type": "choice",
                "text": "Dataverse must publish row events to Azure Service Bus so that an Azure Function can process them asynchronously. What should you register?",
                "options": [
                        {
                                "text": "A service endpoint for Azure Service Bus and an asynchronous plug-in step",
                                "key": "A"
                        },
                        {
                                "text": "A calculated column with a service bus connection string",
                                "key": "B"
                        },
                        {
                                "text": "A client-side OnLoad event handler",
                                "key": "C"
                        },
                        {
                                "text": "A Power BI refresh schedule",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Dataverse events can be published to service endpoints such as Azure Service Bus, typically using asynchronous processing for reliable integration.",
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 121,
                "sourceLabel": "Practice Question #121",
                "type": "choice",
                "text": "An external system synchronizes customer records with Dataverse. The external system stores its own customer identifier but does not store Dataverse GUID values. What should you configure to support reliable synchronization?",
                "options": [
                        {
                                "text": "An alternate key based on the external customer identifier",
                                "key": "A"
                        },
                        {
                                "text": "A calculated column that concatenates all customer fields",
                                "key": "B"
                        },
                        {
                                "text": "A business process flow with all customer stages",
                                "key": "C"
                        },
                        {
                                "text": "A chart on the customer table",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Alternate keys allow external systems to identify Dataverse rows by unique business values rather than Dataverse primary key GUIDs.",
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 122,
                "sourceLabel": "Practice Question #122",
                "type": "choice",
                "text": "An integration receives records from an external system. If the row already exists in Dataverse, it must be updated; otherwise, it must be created. The integration identifies rows by an alternate key. Which message should the integration use?",
                "options": [
                        {
                                "text": "UpsertRequest",
                                "key": "A"
                        },
                        {
                                "text": "DeleteRequest",
                                "key": "B"
                        },
                        {
                                "text": "AssociateRequest",
                                "key": "C"
                        },
                        {
                                "text": "RetrieveMultipleRequest",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "UpsertRequest can insert or update a row and is commonly used with alternate keys for synchronization scenarios.",
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 123,
                "sourceLabel": "Practice Question #123",
                "type": "choice",
                "text": "A downstream data warehouse should receive only Dataverse rows that changed since the last successful synchronization. What should you enable on the table?",
                "options": [
                        {
                                "text": "Change tracking",
                                "key": "A"
                        },
                        {
                                "text": "Duplicate detection only",
                                "key": "B"
                        },
                        {
                                "text": "Business process flow stages",
                                "key": "C"
                        },
                        {
                                "text": "A personal view",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Change tracking supports synchronization patterns by identifying changes since a previous token or synchronization point.",
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 124,
                "sourceLabel": "Practice Question #124",
                "badge": "Custom connector policies",
                "type": "matrix",
                "text": "A company creates custom connectors for several APIs. Match each runtime requirement to the most appropriate connector policy template.",
                "rows": [
                        {
                                "id": "differentHost",
                                "options": [
                                        "Set Host URL",
                                        "Route request",
                                        "Set HTTP header",
                                        "Set query string parameter"
                                ],
                                "requirement": "Allow the connector host to be changed dynamically when a connection is created.",
                                "label": "Policy template",
                                "answer": "Set Host URL"
                        },
                        {
                                "id": "sameServiceEndpoint",
                                "options": [
                                        "Set Host URL",
                                        "Route request",
                                        "Set HTTP header",
                                        "Set query string parameter"
                                ],
                                "requirement": "Route an operation to a different endpoint on the same service without changing the connector host.",
                                "label": "Policy template",
                                "answer": "Route request"
                        },
                        {
                                "id": "trackingHeader",
                                "options": [
                                        "Set Host URL",
                                        "Route request",
                                        "Set HTTP header",
                                        "Set query string parameter"
                                ],
                                "requirement": "Add a required correlation identifier to every outbound request header.",
                                "label": "Policy template",
                                "answer": "Set HTTP header"
                        }
                ],
                "uniqueSelection": true,
                "explanation": "Connector policies can modify runtime behavior such as host URLs, routes, headers, and query string parameters.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 125,
                "sourceLabel": "Practice Question #125",
                "badge": "Integration pattern",
                "type": "matrix",
                "text": "A solution exchanges data between Dataverse and external systems. Match each requirement to the best Dataverse integration capability.",
                "rows": [
                        {
                                "id": "externalIds",
                                "options": [
                                        "Alternate keys",
                                        "Change tracking",
                                        "Upsert",
                                        "Virtual table"
                                ],
                                "requirement": "Reference Dataverse rows by an external system identifier instead of a Dataverse GUID.",
                                "label": "Capability",
                                "answer": "Alternate keys"
                        },
                        {
                                "id": "deltaSync",
                                "options": [
                                        "Alternate keys",
                                        "Change tracking",
                                        "Upsert",
                                        "Virtual table"
                                ],
                                "requirement": "Identify rows that changed since the last synchronization run.",
                                "label": "Capability",
                                "answer": "Change tracking"
                        },
                        {
                                "id": "insertOrUpdate",
                                "options": [
                                        "Alternate keys",
                                        "Change tracking",
                                        "Upsert",
                                        "Virtual table"
                                ],
                                "requirement": "Create the row if it does not exist or update it if it already exists.",
                                "label": "Capability",
                                "answer": "Upsert"
                        }
                ],
                "uniqueSelection": true,
                "explanation": "Alternate keys identify rows, change tracking supports delta synchronization, and upsert creates or updates records in a single pattern.",
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 126,
                "sourceLabel": "Practice Question #126",
                "badge": "Text-converted drag/drop",
                "type": "matrix",
                "text": "A solution architect is choosing Dataverse and Power Platform components for several requirements. Match each requirement to the most appropriate implementation option.",
                "rows": [
                        {
                                "id": "req1",
                                "options": [
                                        "Standard table",
                                        "Virtual table",
                                        "Elastic table",
                                        "Custom connector"
                                ],
                                "requirement": "Expose external ERP rows inside model-driven app forms and views without copying the rows into Dataverse.",
                                "label": "Component",
                                "answer": "Virtual table"
                        },
                        {
                                "id": "req2",
                                "options": [
                                        "Standard table",
                                        "Virtual table",
                                        "Elastic table",
                                        "Custom connector"
                                ],
                                "requirement": "Store high-volume operational records that require partitioning and large-scale writes.",
                                "label": "Component",
                                "answer": "Elastic table"
                        },
                        {
                                "id": "req3",
                                "options": [
                                        "Standard table",
                                        "Virtual table",
                                        "Elastic table",
                                        "Custom connector"
                                ],
                                "requirement": "Call a REST API directly from canvas apps and cloud flows without surfacing the API data as Dataverse rows.",
                                "label": "Component",
                                "answer": "Custom connector"
                        },
                        {
                                "id": "req4",
                                "options": [
                                        "Standard table",
                                        "Virtual table",
                                        "Elastic table",
                                        "Custom connector"
                                ],
                                "requirement": "Store core business records that require Dataverse security, forms, views, relationships, and full platform behavior.",
                                "label": "Component",
                                "answer": "Standard table"
                        }
                ],
                "uniqueSelection": true,
                "explanation": "This converts the drag/drop style into text. Each implementation option is used once and selected options are removed from the remaining rows.",
                "topic": 1,
                "topicId": 1,
                "area": "Create a technical design"
        },
        {
                "id": 127,
                "sourceLabel": "Practice Question #127",
                "badge": "Text-converted drag/drop",
                "type": "matrix",
                "text": "You need to decide where to implement business logic for a Power Platform solution. Match each requirement to the best implementation location.",
                "rows": [
                        {
                                "id": "req1",
                                "options": [
                                        "Business rule",
                                        "Client-side JavaScript",
                                        "Synchronous plug-in",
                                        "Cloud flow"
                                ],
                                "requirement": "Show or hide a field immediately on a model-driven form based on another field value.",
                                "label": "Implementation",
                                "answer": "Business rule"
                        },
                        {
                                "id": "req2",
                                "options": [
                                        "Business rule",
                                        "Client-side JavaScript",
                                        "Synchronous plug-in",
                                        "Cloud flow"
                                ],
                                "requirement": "Run validation for all clients, including imports, APIs, model-driven apps, and canvas apps.",
                                "label": "Implementation",
                                "answer": "Synchronous plug-in"
                        },
                        {
                                "id": "req3",
                                "options": [
                                        "Business rule",
                                        "Client-side JavaScript",
                                        "Synchronous plug-in",
                                        "Cloud flow"
                                ],
                                "requirement": "Open a custom dialog and guide the user through a model-driven form experience.",
                                "label": "Implementation",
                                "answer": "Client-side JavaScript"
                        },
                        {
                                "id": "req4",
                                "options": [
                                        "Business rule",
                                        "Client-side JavaScript",
                                        "Synchronous plug-in",
                                        "Cloud flow"
                                ],
                                "requirement": "Send an approval request after a row is created and continue outside the user save transaction.",
                                "label": "Implementation",
                                "answer": "Cloud flow"
                        }
                ],
                "uniqueSelection": true,
                "explanation": "Business rules and JavaScript are useful for user experience logic. Plug-ins enforce logic across all clients. Cloud flows are better for post-transaction process automation.",
                "topic": 1,
                "topicId": 1,
                "area": "Create a technical design"
        },
        {
                "id": 128,
                "sourceLabel": "Practice Question #128",
                "badge": "Text-converted drag/drop",
                "type": "matrix",
                "text": "A team is standardizing ALM for Power Platform. Match each requirement to the correct ALM feature.",
                "rows": [
                        {
                                "id": "req1",
                                "options": [
                                        "Connection reference",
                                        "Environment variable",
                                        "Solution checker",
                                        "Power Platform pipeline"
                                ],
                                "requirement": "Move a cloud flow between environments while binding it to a connection in each target environment.",
                                "label": "Feature",
                                "answer": "Connection reference"
                        },
                        {
                                "id": "req2",
                                "options": [
                                        "Connection reference",
                                        "Environment variable",
                                        "Solution checker",
                                        "Power Platform pipeline"
                                ],
                                "requirement": "Store a value such as an API URL that changes between development, test, and production.",
                                "label": "Feature",
                                "answer": "Environment variable"
                        },
                        {
                                "id": "req3",
                                "options": [
                                        "Connection reference",
                                        "Environment variable",
                                        "Solution checker",
                                        "Power Platform pipeline"
                                ],
                                "requirement": "Analyze a solution for patterns that may create reliability, performance, or maintainability issues.",
                                "label": "Feature",
                                "answer": "Solution checker"
                        },
                        {
                                "id": "req4",
                                "options": [
                                        "Connection reference",
                                        "Environment variable",
                                        "Solution checker",
                                        "Power Platform pipeline"
                                ],
                                "requirement": "Allow makers to deploy from one environment to another using a controlled deployment path.",
                                "label": "Feature",
                                "answer": "Power Platform pipeline"
                        }
                ],
                "uniqueSelection": true,
                "explanation": "Connection references, environment variables, checker, and pipelines solve different ALM problems and should not be treated as interchangeable.",
                "topic": 2,
                "topicId": 2,
                "area": "Build Power Platform solutions"
        },
        {
                "id": 129,
                "sourceLabel": "Practice Question #129",
                "badge": "Text-converted drag/drop",
                "type": "matrix",
                "text": "You are implementing client-side behavior in a model-driven app. Match each requirement to the appropriate client API approach.",
                "rows": [
                        {
                                "id": "req1",
                                "options": [
                                        "Xrm.Navigation.navigateTo",
                                        "formContext.ui.setFormNotification",
                                        "eventArgs.preventDefault",
                                        "Xrm.WebApi.retrieveMultipleRecords"
                                ],
                                "requirement": "Open a custom page as a dialog from a command bar button.",
                                "label": "API",
                                "answer": "Xrm.Navigation.navigateTo"
                        },
                        {
                                "id": "req2",
                                "options": [
                                        "Xrm.Navigation.navigateTo",
                                        "formContext.ui.setFormNotification",
                                        "eventArgs.preventDefault",
                                        "Xrm.WebApi.retrieveMultipleRecords"
                                ],
                                "requirement": "Display a non-blocking message at the top of the form.",
                                "label": "API",
                                "answer": "formContext.ui.setFormNotification"
                        },
                        {
                                "id": "req3",
                                "options": [
                                        "Xrm.Navigation.navigateTo",
                                        "formContext.ui.setFormNotification",
                                        "eventArgs.preventDefault",
                                        "Xrm.WebApi.retrieveMultipleRecords"
                                ],
                                "requirement": "Stop a form save from an OnSave event when client-side validation fails.",
                                "label": "API",
                                "answer": "eventArgs.preventDefault"
                        },
                        {
                                "id": "req4",
                                "options": [
                                        "Xrm.Navigation.navigateTo",
                                        "formContext.ui.setFormNotification",
                                        "eventArgs.preventDefault",
                                        "Xrm.WebApi.retrieveMultipleRecords"
                                ],
                                "requirement": "Query Dataverse rows from JavaScript in the model-driven app client.",
                                "label": "API",
                                "answer": "Xrm.WebApi.retrieveMultipleRecords"
                        }
                ],
                "uniqueSelection": true,
                "explanation": "This is a text alternative to a drag/drop interaction. Each client API method is used once.",
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 130,
                "sourceLabel": "Practice Question #130",
                "badge": "Text-converted drag/drop",
                "type": "matrix",
                "text": "You are configuring a Power Pages site backed by Dataverse. Match each requirement to the correct Power Pages component.",
                "rows": [
                        {
                                "id": "req1",
                                "options": [
                                        "Table permission",
                                        "Web role",
                                        "Web template",
                                        "Site setting"
                                ],
                                "requirement": "Control which Dataverse rows a portal user can read, create, update, or delete.",
                                "label": "Component",
                                "answer": "Table permission"
                        },
                        {
                                "id": "req2",
                                "options": [
                                        "Table permission",
                                        "Web role",
                                        "Web template",
                                        "Site setting"
                                ],
                                "requirement": "Group portal users so permissions can be assigned based on their role.",
                                "label": "Component",
                                "answer": "Web role"
                        },
                        {
                                "id": "req3",
                                "options": [
                                        "Table permission",
                                        "Web role",
                                        "Web template",
                                        "Site setting"
                                ],
                                "requirement": "Render reusable Liquid markup for pages on the site.",
                                "label": "Component",
                                "answer": "Web template"
                        },
                        {
                                "id": "req4",
                                "options": [
                                        "Table permission",
                                        "Web role",
                                        "Web template",
                                        "Site setting"
                                ],
                                "requirement": "Store a named configuration value that controls site behavior.",
                                "label": "Component",
                                "answer": "Site setting"
                        }
                ],
                "uniqueSelection": true,
                "explanation": "Power Pages separates identity grouping, Dataverse access rules, rendering templates, and configuration settings.",
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 131,
                "sourceLabel": "Practice Question #131",
                "badge": "Plug-ins",
                "type": "choice",
                "text": "A synchronous plug-in is intermittently failing in production. You need to capture diagnostic details from the plug-in execution without showing those details to end users. What should you use in the plug-in code?",
                "options": [
                        {
                                "text": "ITracingService",
                                "key": "A"
                        },
                        {
                                "text": "formContext.ui.setFormNotification",
                                "key": "B"
                        },
                        {
                                "text": "A business rule recommendation",
                                "key": "C"
                        },
                        {
                                "text": "A calculated column",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "ITracingService writes diagnostic information that can be captured in the Plug-in Trace Log.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 132,
                "sourceLabel": "Practice Question #132",
                "badge": "Plug-ins",
                "type": "choice",
                "text": "A plug-in registered in an early stage calculates a value that a later plug-in step in the same pipeline execution must reuse. You want to avoid writing the intermediate value to Dataverse. What should you use?",
                "options": [
                        {
                                "text": "SharedVariables on the execution context",
                                "key": "A"
                        },
                        {
                                "text": "A rollup column",
                                "key": "B"
                        },
                        {
                                "text": "A canvas app collection",
                                "key": "C"
                        },
                        {
                                "text": "A Power BI measure",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "SharedVariables allow plug-ins in the same pipeline execution to pass temporary values without persisting them to the database.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 133,
                "sourceLabel": "Practice Question #133",
                "badge": "Plug-ins",
                "type": "choice",
                "text": "A plug-in must set a default value on a row before the row is saved to Dataverse. You want the value to be part of the same database operation and avoid an additional update call. Which stage should you use?",
                "options": [
                        {
                                "text": "PreOperation",
                                "key": "A"
                        },
                        {
                                "text": "PostOperation asynchronous",
                                "key": "B"
                        },
                        {
                                "text": "Delete",
                                "key": "C"
                        },
                        {
                                "text": "Export",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "PreOperation can modify the Target before the main platform operation is committed.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 134,
                "sourceLabel": "Practice Question #134",
                "badge": "Plug-ins",
                "type": "choice",
                "text": "A plug-in needs to run as a specific Dataverse user so that record operations follow that user’s privileges rather than the calling user’s privileges. What should the plug-in use?",
                "options": [
                        {
                                "text": "IOrganizationServiceFactory.CreateOrganizationService with the desired user ID",
                                "key": "A"
                        },
                        {
                                "text": "window.localStorage",
                                "key": "B"
                        },
                        {
                                "text": "Xrm.Navigation.openAlertDialog",
                                "key": "C"
                        },
                        {
                                "text": "Power BI row-level security",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "The organization service factory can create an organization service that executes as a specific user ID.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 135,
                "sourceLabel": "Practice Question #135",
                "badge": "Web API",
                "type": "choice",
                "text": "A Dataverse Web API client updates records that may also be updated by other users. The client must avoid overwriting changes when the record has changed since it was retrieved. What should the client use?",
                "options": [
                        {
                                "text": "Optimistic concurrency with ETags and If-Match",
                                "key": "A"
                        },
                        {
                                "text": "A calculated column",
                                "key": "B"
                        },
                        {
                                "text": "A static HTML web resource only",
                                "key": "C"
                        },
                        {
                                "text": "A Power BI bookmark",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "ETags and If-Match allow a client to update only when the row version matches the version previously retrieved.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 136,
                "sourceLabel": "Practice Question #136",
                "badge": "Web API",
                "type": "choice",
                "text": "A JavaScript client retrieves Dataverse choice and lookup values through the Web API. The app must display the formatted labels returned by Dataverse, not only the raw numeric or GUID values. What should the request include?",
                "options": [
                        {
                                "text": "The Prefer header with OData formatted value annotations",
                                "key": "A"
                        },
                        {
                                "text": "The Content-Length header set to zero",
                                "key": "B"
                        },
                        {
                                "text": "A PATCH request with no body",
                                "key": "C"
                        },
                        {
                                "text": "A Power Automate approval",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "The OData include-annotations Prefer header can request formatted values such as labels for choices and lookup display names.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 137,
                "sourceLabel": "Practice Question #137",
                "badge": "FetchXML",
                "type": "choice",
                "text": "A FetchXML query must return rows from a primary table and filter them based on columns from a related table. Which element should you use to join to the related table?",
                "options": [
                        {
                                "text": "link-entity",
                                "key": "A"
                        },
                        {
                                "text": "order",
                                "key": "B"
                        },
                        {
                                "text": "all-attributes",
                                "key": "C"
                        },
                        {
                                "text": "page",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "The link-entity element joins related tables in FetchXML, allowing attributes and filters from the related table.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 138,
                "sourceLabel": "Practice Question #138",
                "badge": "Power Automate",
                "type": "choice",
                "text": "A Dataverse List rows action in a cloud flow retrieves many columns that are never used. The flow is slow and consumes unnecessary payload. What should you configure?",
                "options": [
                        {
                                "text": "Select columns to return only the needed Dataverse columns.",
                                "key": "A"
                        },
                        {
                                "text": "Disable the Dataverse connector.",
                                "key": "B"
                        },
                        {
                                "text": "Move all columns into a canvas collection.",
                                "key": "C"
                        },
                        {
                                "text": "Use an Excel file instead of Dataverse.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "The Select columns option limits the returned payload to the columns the flow needs.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 139,
                "sourceLabel": "Practice Question #139",
                "badge": "Power Automate",
                "type": "choice",
                "text": "A Dataverse-triggered cloud flow should run only when Account rows are active and the credit limit is greater than zero. You need to reduce unnecessary flow runs. What should you configure on the trigger?",
                "options": [
                        {
                                "text": "Filter rows using an OData filter expression.",
                                "key": "A"
                        },
                        {
                                "text": "A Power BI visual interaction.",
                                "key": "B"
                        },
                        {
                                "text": "A model-driven app sitemap area.",
                                "key": "C"
                        },
                        {
                                "text": "A field security profile for every column.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "A trigger-level row filter prevents the flow from starting for rows that do not meet the criteria.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 140,
                "sourceLabel": "Practice Question #140",
                "badge": "Custom connector",
                "type": "choice",
                "text": "A custom connector parameter should show a dropdown list of valid project IDs retrieved from an operation in the same connector. What should you configure in the connector definition?",
                "options": [
                        {
                                "text": "Dynamic values for the parameter",
                                "key": "A"
                        },
                        {
                                "text": "A Dataverse rollup column",
                                "key": "B"
                        },
                        {
                                "text": "A business process flow stage",
                                "key": "C"
                        },
                        {
                                "text": "A Power BI slicer",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Dynamic values populate a connector parameter dropdown from another operation, making the connector easier to use in apps and flows.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 141,
                "sourceLabel": "Practice Question #141",
                "badge": "Custom connector",
                "type": "choice",
                "text": "A REST API returns paged results and includes a nextLink value in each response. A custom connector should automatically retrieve additional pages when used in Power Automate. What should the connector definition include?",
                "options": [
                        {
                                "text": "Pagination metadata such as x-ms-pageable",
                                "key": "A"
                        },
                        {
                                "text": "A model-driven app form library",
                                "key": "B"
                        },
                        {
                                "text": "A Dataverse duplicate detection rule",
                                "key": "C"
                        },
                        {
                                "text": "A Power Pages web role",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Connector definitions can describe pageable operations so clients can follow continuation links.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 142,
                "sourceLabel": "Practice Question #142",
                "badge": "Power Pages",
                "type": "choice",
                "text": "A Power Pages site displays Dataverse case records. Authenticated users must see only cases related to their own account. What should you configure?",
                "options": [
                        {
                                "text": "Table permissions scoped through the user’s relationship to the account.",
                                "key": "A"
                        },
                        {
                                "text": "A client-side JavaScript alert only.",
                                "key": "B"
                        },
                        {
                                "text": "A Power BI report filter only.",
                                "key": "C"
                        },
                        {
                                "text": "A hidden field on the webpage.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Power Pages table permissions control Dataverse row access for portal users and should enforce access server-side.",
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 143,
                "sourceLabel": "Practice Question #143",
                "badge": "Power Pages",
                "type": "choice",
                "text": "A Power Pages page must render dynamic Dataverse-backed content using reusable markup. Which component should you use for the reusable Liquid markup?",
                "options": [
                        {
                                "text": "Web template",
                                "key": "A"
                        },
                        {
                                "text": "Security role",
                                "key": "B"
                        },
                        {
                                "text": "Connection reference",
                                "key": "C"
                        },
                        {
                                "text": "Solution checker",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Web templates can contain Liquid and reusable markup used by Power Pages pages and page templates.",
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 144,
                "sourceLabel": "Practice Question #144",
                "badge": "Model-driven apps",
                "type": "choice",
                "text": "A model-driven app form should display read-only details from a related account on a contact form without copying the fields to the contact row. What should you add to the form?",
                "options": [
                        {
                                "text": "A quick view form based on the related account lookup.",
                                "key": "A"
                        },
                        {
                                "text": "A duplicate detection rule.",
                                "key": "B"
                        },
                        {
                                "text": "A Power BI gateway.",
                                "key": "C"
                        },
                        {
                                "text": "A custom connector policy.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "A quick view form displays read-only fields from a related row through a lookup relationship.",
                "topic": 1,
                "topicId": 1,
                "area": "Create a technical design"
        },
        {
                "id": 145,
                "sourceLabel": "Practice Question #145",
                "badge": "Model-driven apps",
                "type": "choice",
                "text": "A model-driven app form should guide users through stages and required steps in a sales qualification process. Users must complete required data before moving to the next stage. What should you configure?",
                "options": [
                        {
                                "text": "A business process flow with required steps.",
                                "key": "A"
                        },
                        {
                                "text": "A Power BI bookmark.",
                                "key": "B"
                        },
                        {
                                "text": "A canvas app collection.",
                                "key": "C"
                        },
                        {
                                "text": "A static site setting.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Business process flows guide users through stages and can make steps required before stage progression.",
                "topic": 1,
                "topicId": 1,
                "area": "Create a technical design"
        },
        {
                "id": 146,
                "sourceLabel": "Practice Question #146",
                "badge": "PCF",
                "type": "choice",
                "text": "A PCF control must display and interact with multiple rows from a view or dataset rather than a single field value. What type of PCF component should you build?",
                "options": [
                        {
                                "text": "Dataset component",
                                "key": "A"
                        },
                        {
                                "text": "Field component",
                                "key": "B"
                        },
                        {
                                "text": "Business rule",
                                "key": "C"
                        },
                        {
                                "text": "Power Pages site setting",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Dataset PCF components work with tabular data such as rows from a view or subgrid.",
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 147,
                "sourceLabel": "Practice Question #147",
                "badge": "PCF",
                "type": "choice",
                "text": "A PCF control must use the Dataverse Web API from inside the component. Which manifest capability should be declared so the control can request Web API access?",
                "options": [
                        {
                                "text": "The WebAPI feature in the component manifest.",
                                "key": "A"
                        },
                        {
                                "text": "A Power BI dataset refresh schedule.",
                                "key": "B"
                        },
                        {
                                "text": "A canvas app timer control.",
                                "key": "C"
                        },
                        {
                                "text": "A portal invitation attribute.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "PCF components declare required platform features, such as WebAPI access, in the manifest.",
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 148,
                "sourceLabel": "Practice Question #148",
                "badge": "Security",
                "type": "choice",
                "text": "A Dataverse column contains confidential approval comments. Users without a specific permission must not read or update the column even if they can access the row. What should you configure?",
                "options": [
                        {
                                "text": "Field security on the column and a field security profile.",
                                "key": "A"
                        },
                        {
                                "text": "A hidden section on one form only.",
                                "key": "B"
                        },
                        {
                                "text": "A Power BI visual-level filter.",
                                "key": "C"
                        },
                        {
                                "text": "A JavaScript alert.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Field-level security is enforced by Dataverse and is not just a form visibility setting.",
                "topic": 2,
                "topicId": 2,
                "area": "Build Power Platform solutions"
        },
        {
                "id": 149,
                "sourceLabel": "Practice Question #149",
                "badge": "Security",
                "type": "choice",
                "text": "A Power Platform solution contains a plug-in that needs a sensitive value at runtime. The value should not be visible as plain text to makers in normal solution configuration. What should you use?",
                "options": [
                        {
                                "text": "Secure plug-in configuration or a secure secret reference pattern.",
                                "key": "A"
                        },
                        {
                                "text": "A public web resource containing the value.",
                                "key": "B"
                        },
                        {
                                "text": "A calculated column formula.",
                                "key": "C"
                        },
                        {
                                "text": "A Power BI title.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Sensitive runtime configuration should not be hardcoded or stored in public client-side assets.",
                "topic": 2,
                "topicId": 2,
                "area": "Build Power Platform solutions"
        },
        {
                "id": 150,
                "sourceLabel": "Practice Question #150",
                "badge": "Testing and troubleshooting",
                "type": "choice",
                "text": "A maker needs to understand which connector calls, formulas, and network requests are slowing down a canvas app. Which tool should the maker use?",
                "options": [
                        {
                                "text": "Monitor",
                                "key": "A"
                        },
                        {
                                "text": "Solution layers",
                                "key": "B"
                        },
                        {
                                "text": "Table permissions",
                                "key": "C"
                        },
                        {
                                "text": "Business process flow designer",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Monitor helps troubleshoot canvas app behavior, connector calls, formula execution, and performance issues.",
                "topic": 3,
                "topicId": 3,
                "area": "Implement Power Apps improvements"
        },
        {
                "id": 151,
                "sourceLabel": "Official-aligned Question #151",
                "type": "choice",
                "text": "A custom connector must support different backend hosts for different regions, selected when the connection is created. Which policy template is the best fit?",
                "options": [
                        {
                                "text": "Set host URL",
                                "key": "A"
                        },
                        {
                                "text": "Set query string parameter",
                                "key": "B"
                        },
                        {
                                "text": "Set HTTP header",
                                "key": "C"
                        },
                        {
                                "text": "Convert JSON to XML",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "The Set host URL policy template is used when the connector host must be set dynamically, such as by region.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 152,
                "sourceLabel": "Official-aligned Question #152",
                "type": "choice",
                "text": "A custom connector must append api-version=2.0 to every request sent to the backend API. Which policy template should you use?",
                "options": [
                        {
                                "text": "Set query string parameter",
                                "key": "A"
                        },
                        {
                                "text": "Set host URL",
                                "key": "B"
                        },
                        {
                                "text": "Set property visibility",
                                "key": "C"
                        },
                        {
                                "text": "Set retry policy in Dataverse",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "Use Set query string parameter to add or modify query string values on connector requests.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 153,
                "sourceLabel": "Official-aligned Question #153",
                "type": "choice",
                "text": "A custom connector must add a bearer token that is supplied by an external token provider at runtime. Which authentication type is generally appropriate for user sign-in through Microsoft identity platform?",
                "options": [
                        {
                                "text": "OAuth 2.0",
                                "key": "A"
                        },
                        {
                                "text": "No authentication",
                                "key": "B"
                        },
                        {
                                "text": "Anonymous table permission",
                                "key": "C"
                        },
                        {
                                "text": "Canvas app SaveData only",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "OAuth 2.0 is the correct pattern for delegated user sign-in to protected APIs.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 154,
                "sourceLabel": "Official-aligned Question #154",
                "type": "matrix",
                "text": "A team is designing Power Platform implementation options. Match each requirement to the most appropriate implementation approach.",
                "rows": [
                        {
                                "id": "server_logic",
                                "options": [
                                        "Synchronous Dataverse plug-in",
                                        "Canvas app control formula",
                                        "Power BI calculated column"
                                ],
                                "label": "Implementation",
                                "requirement": "Run transactional server-side validation for all clients before Dataverse commits the operation.",
                                "answer": "Synchronous Dataverse plug-in"
                        },
                        {
                                "id": "client_feedback",
                                "options": [
                                        "Synchronous Dataverse plug-in",
                                        "Canvas app control formula",
                                        "Model-driven app client scripting"
                                ],
                                "label": "Implementation",
                                "requirement": "Hide or show model-driven app form elements while the user edits the form.",
                                "answer": "Model-driven app client scripting"
                        },
                        {
                                "id": "analytics",
                                "options": [
                                        "Power BI DAX measure",
                                        "Synchronous Dataverse plug-in",
                                        "Model-driven app client scripting"
                                ],
                                "label": "Implementation",
                                "requirement": "Create analytical measures for reporting over historical business data.",
                                "answer": "Power BI DAX measure"
                        }
                ],
                "uniqueSelection": true,
                "explanation": "Server-side validation belongs in Dataverse business logic, form behavior belongs in the client experience, and analytical measures belong in the reporting layer.",
                "topic": 1,
                "topicId": 1,
                "area": "Create a technical design"
        },
        {
                "id": 155,
                "sourceLabel": "Official-aligned Question #155",
                "type": "matrix",
                "text": "A developer is using PCF controls. Match each PCF method to its purpose.",
                "rows": [
                        {
                                "id": "init",
                                "options": [
                                        "init",
                                        "updateView",
                                        "getOutputs",
                                        "destroy"
                                ],
                                "label": "Method",
                                "requirement": "Initialize the component and store framework helpers such as notifyOutputChanged.",
                                "answer": "init"
                        },
                        {
                                "id": "update_view",
                                "options": [
                                        "init",
                                        "updateView",
                                        "getOutputs",
                                        "destroy"
                                ],
                                "label": "Method",
                                "requirement": "React when input properties, dataset data, or container size changes.",
                                "answer": "updateView"
                        },
                        {
                                "id": "outputs",
                                "options": [
                                        "init",
                                        "updateView",
                                        "getOutputs",
                                        "destroy"
                                ],
                                "label": "Method",
                                "requirement": "Return changed bound values back to the framework.",
                                "answer": "getOutputs"
                        },
                        {
                                "id": "cleanup",
                                "options": [
                                        "init",
                                        "updateView",
                                        "getOutputs",
                                        "destroy"
                                ],
                                "label": "Method",
                                "requirement": "Clean up resources when the component is removed.",
                                "answer": "destroy"
                        }
                ],
                "uniqueSelection": true,
                "explanation": "These are the core PCF lifecycle methods used to initialize, update, return outputs, and clean up a code component.",
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 156,
                "sourceLabel": "Image-converted Question #156",
                "badge": "Image converted",
                "type": "matrix",
                "text": "A company is creating a new system based on Dataverse. Match each relationship requirement to the correct Dataverse feature.",
                "rows": [
                        {
                                "id": "hierarchy",
                                "options": [
                                        "Self-referential relationship",
                                        "Connection",
                                        "One-to-many relationship",
                                        "Many-to-many relationship"
                                ],
                                "requirement": "Visualize records as a hierarchy in a model-driven app.",
                                "label": "Feature",
                                "answer": "Self-referential relationship"
                        },
                        {
                                "id": "connection",
                                "options": [
                                        "Self-referential relationship",
                                        "Connection",
                                        "One-to-many relationship",
                                        "Many-to-many relationship"
                                ],
                                "requirement": "Associate a record with other records in multiple tables without creating formal table relationships for every scenario.",
                                "label": "Feature",
                                "answer": "Connection"
                        },
                        {
                                "id": "single",
                                "options": [
                                        "Self-referential relationship",
                                        "Connection",
                                        "One-to-many relationship",
                                        "Many-to-many relationship"
                                ],
                                "requirement": "Records in one table must be able to reference only one record in another table.",
                                "label": "Feature",
                                "answer": "One-to-many relationship"
                        },
                        {
                                "id": "many",
                                "options": [
                                        "Self-referential relationship",
                                        "Connection",
                                        "One-to-many relationship",
                                        "Many-to-many relationship"
                                ],
                                "requirement": "Any record in one table must be able to be referenced by any record in another table.",
                                "label": "Feature",
                                "answer": "Many-to-many relationship"
                        }
                ],
                "uniqueSelection": true,
                "explanation": "Converted from an image-based drag-and-drop answer area. The original options were connection, one-to-many relationship, many-to-many relationship, and self-referential relationship.",
                "topic": 1,
                "topicId": 1,
                "area": "Create a technical design"
        },
        {
                "id": 157,
                "sourceLabel": "Image-converted Question #157",
                "badge": "Image converted",
                "type": "matrix",
                "text": "A Power Automate flow must return User1 if the user input type is High. Otherwise, it must return User2. Complete the expression.",
                "rows": [
                        {
                                "id": "comparison",
                                "options": [
                                        "equals",
                                        "greaterOrEquals",
                                        "empty",
                                        "item"
                                ],
                                "requirement": "Function used to compare the user input with High.",
                                "label": "Expression part",
                                "answer": "equals"
                        },
                        {
                                "id": "trueResult",
                                "options": [
                                        "User1",
                                        "User2",
                                        "True",
                                        "False"
                                ],
                                "requirement": "Value returned when the comparison is true.",
                                "label": "Expression part",
                                "answer": "User1"
                        },
                        {
                                "id": "falseResult",
                                "options": [
                                        "User1",
                                        "User2",
                                        "True",
                                        "False"
                                ],
                                "requirement": "Value returned when the comparison is false.",
                                "label": "Expression part",
                                "answer": "User2"
                        }
                ],
                "explanation": "The image answer completes the expression as if(equals(..., 'High'), 'User1', 'User2').",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 158,
                "sourceLabel": "Image-converted Question #158",
                "badge": "Image converted",
                "type": "matrix",
                "text": "A model-driven app uses JavaScript to evaluate the class type associated with a class record. The code must hide the School Schedule tab if no Class Type value is entered. Complete the logic.",
                "rows": [
                        {
                                "id": "value",
                                "options": [
                                        "getValue()",
                                        "getVisible()",
                                        "getObject()",
                                        "getName()"
                                ],
                                "requirement": "Retrieve the current value from the Class Type attribute.",
                                "label": "Code selection",
                                "answer": "getValue()"
                        },
                        {
                                "id": "empty",
                                "options": [
                                        "false",
                                        "empty string",
                                        "null",
                                        "zero"
                                ],
                                "requirement": "Value to compare against when no Class Type is entered.",
                                "label": "Code selection",
                                "answer": "null"
                        },
                        {
                                "id": "hide",
                                "options": [
                                        "setVisible(false)",
                                        "setVisible(true)",
                                        "setDisabled(false)",
                                        "setDisabled(true)"
                                ],
                                "requirement": "Hide the School Schedule tab.",
                                "label": "Code selection",
                                "answer": "setVisible(false)"
                        }
                ],
                "explanation": "The image answer uses getValue(), compares the result with null, and calls setVisible(false) to hide the tab.",
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 159,
                "sourceLabel": "Image-converted Question #159",
                "badge": "Image converted",
                "type": "matrix",
                "text": "User1 and User2 use the same account form. A business rule makes Main Phone mandatory for Reseller accounts, but User2 must sometimes create Reseller accounts without a phone number. Which actions should be performed in sequence?",
                "rows": [
                        {
                                "id": "one",
                                "options": [
                                        "Copy security role SR1 as SR2, assign SR2 to User2, and remove SR1 from User2.",
                                        "Open form F1 and save it as a form named F2.",
                                        "Remove the business rule from form F2.",
                                        "Set SR1 as the only role for form F1 and SR2 as the only role for form F2.",
                                        "Create a business rule for form F2 to make the phone number optional for resellers."
                                ],
                                "requirement": "Step 1",
                                "label": "Action",
                                "answer": "Open form F1 and save it as a form named F2."
                        },
                        {
                                "id": "two",
                                "options": [
                                        "Copy security role SR1 as SR2, assign SR2 to User2, and remove SR1 from User2.",
                                        "Open form F1 and save it as a form named F2.",
                                        "Remove the business rule from form F2.",
                                        "Set SR1 as the only role for form F1 and SR2 as the only role for form F2.",
                                        "Create a business rule for form F2 to make the phone number optional for resellers."
                                ],
                                "requirement": "Step 2",
                                "label": "Action",
                                "answer": "Remove the business rule from form F2."
                        },
                        {
                                "id": "three",
                                "options": [
                                        "Copy security role SR1 as SR2, assign SR2 to User2, and remove SR1 from User2.",
                                        "Open form F1 and save it as a form named F2.",
                                        "Remove the business rule from form F2.",
                                        "Set SR1 as the only role for form F1 and SR2 as the only role for form F2.",
                                        "Create a business rule for form F2 to make the phone number optional for resellers."
                                ],
                                "requirement": "Step 3",
                                "label": "Action",
                                "answer": "Create a business rule for form F2 to make the phone number optional for resellers."
                        }
                ],
                "uniqueSelection": true,
                "explanation": "Converted from the answer image: create a separate form, remove the blocking business rule, then add the exception logic on the new form.",
                "topic": 3,
                "topicId": 3,
                "area": "Implement Power Apps improvements"
        },
        {
                "id": 160,
                "sourceLabel": "Image-converted Question #160",
                "badge": "Image converted",
                "type": "matrix",
                "text": "A workflow assigns an Account row with related custom child rows and fails with a missing privilege error. Determine whether each proposed change prevents the error from recurring.",
                "rows": [
                        {
                                "id": "appendTo",
                                "options": [
                                        "Yes",
                                        "No"
                                ],
                                "requirement": "Changing the Append To privilege on the Account table to Organization prevents the error from recurring.",
                                "label": "Answer",
                                "answer": "No"
                        },
                        {
                                "id": "maker",
                                "options": [
                                        "Yes",
                                        "No"
                                ],
                                "requirement": "Adding the Environment Maker role to the user prevents the error from recurring.",
                                "label": "Answer",
                                "answer": "No"
                        },
                        {
                                "id": "customizer",
                                "options": [
                                        "Yes",
                                        "No"
                                ],
                                "requirement": "Adding the System Customizer role to the user prevents the error from recurring.",
                                "label": "Answer",
                                "answer": "Yes"
                        },
                        {
                                "id": "building",
                                "options": [
                                        "Yes",
                                        "No"
                                ],
                                "requirement": "Setting all privileges for the Building table to User prevents the error from recurring.",
                                "label": "Answer",
                                "answer": "Yes"
                        }
                ],
                "explanation": "Converted from a screenshot containing the missing-privilege error, user roles, table privileges, and Yes/No answer area.",
                "topic": 2,
                "topicId": 2,
                "area": "Build Power Platform solutions"
        },
        {
                "id": 161,
                "sourceLabel": "Image-converted Question #161",
                "badge": "Image converted",
                "type": "matrix",
                "text": "A canvas app returns contact data. It must show all contacts by default, filter by last name when text is entered, add a Full Salutation column, and sort by surname. Complete the Power Fx formula structure.",
                "rows": [
                        {
                                "id": "sort",
                                "options": [
                                        "Sort",
                                        "SortByColumns",
                                        "Filter",
                                        "ShowColumns"
                                ],
                                "requirement": "Outer function that sorts by named columns.",
                                "label": "Formula part",
                                "answer": "SortByColumns"
                        },
                        {
                                "id": "add",
                                "options": [
                                        "AddColumns",
                                        "ShowColumns",
                                        "Filter",
                                        "Search"
                                ],
                                "requirement": "Function that creates the Full Salutation column.",
                                "label": "Formula part",
                                "answer": "AddColumns"
                        },
                        {
                                "id": "filter",
                                "options": [
                                        "Filter",
                                        "Search",
                                        "Sort",
                                        "ShowColumns"
                                ],
                                "requirement": "Function that filters contacts by TextInput1.Text and Last Name.",
                                "label": "Formula part",
                                "answer": "Filter"
                        },
                        {
                                "id": "concat",
                                "options": [
                                        "Concatenate",
                                        "Concat",
                                        "Coalesce",
                                        "Select"
                                ],
                                "requirement": "Function that combines Salutation and Full Name.",
                                "label": "Formula part",
                                "answer": "Concatenate"
                        },
                        {
                                "id": "column",
                                "options": [
                                        "firstname",
                                        "lastname",
                                        "fullname",
                                        "Last Name"
                                ],
                                "requirement": "Primary column used for alphabetical sort.",
                                "label": "Formula part",
                                "answer": "Last Name"
                        }
                ],
                "explanation": "Converted from the formula screenshot: SortByColumns(AddColumns(Filter(...), 'Full Salutation', Concatenate(...)), 'Last Name', SortOrder.Ascending, ...).",
                "topic": 3,
                "topicId": 3,
                "area": "Implement Power Apps improvements"
        },
        {
                "id": 162,
                "sourceLabel": "Image-converted Question #162",
                "badge": "Image converted",
                "type": "matrix",
                "text": "Review the UpsertRequest code and determine whether each statement is true.",
                "code": "var account = new Entity(\"account\", \"accountnumber\", \"CO-555\");\naccount[\"name\"] = \"Contoso\";\naccount[\"creditlimit\"] = new Money(100000);\nvar request = new UpsertRequest() { Target = account };\nvar response = (UpsertResponse)serviceProxy.Execute(request);",
                "rows": [
                        {
                                "id": "field",
                                "options": [
                                        "Yes",
                                        "No"
                                ],
                                "requirement": "Creating a new field to store the record identifier from the database resolves the error that the specified key attributes are not a defined key for the Account table.",
                                "label": "Answer",
                                "answer": "No"
                        },
                        {
                                "id": "key",
                                "options": [
                                        "Yes",
                                        "No"
                                ],
                                "requirement": "Creating an alternate key that uses the accountnumber field resolves the key-not-defined error.",
                                "label": "Answer",
                                "answer": "Yes"
                        },
                        {
                                "id": "newRow",
                                "options": [
                                        "Yes",
                                        "No"
                                ],
                                "requirement": "If an Account exists with only account name Contoso and all other fields empty, a new Account row is created.",
                                "label": "Answer",
                                "answer": "Yes"
                        },
                        {
                                "id": "existingKey",
                                "options": [
                                        "Yes",
                                        "No"
                                ],
                                "requirement": "If an Account exists that uses account number CO-555, a new Account row is created.",
                                "label": "Answer",
                                "answer": "No"
                        }
                ],
                "explanation": "The upsert uses accountnumber as the key. A row with the same alternate key is updated; otherwise a new row is created.",
                "topic": 6,
                "topicId": 6,
                "area": "Develop integrations"
        },
        {
                "id": 163,
                "sourceLabel": "Image-converted Question #163",
                "badge": "Image converted",
                "type": "matrix",
                "text": "You configure command button rules on a form. Match each condition to the correct rule type.",
                "rows": [
                        {
                                "id": "page",
                                "options": [
                                        "PageRule",
                                        "ValueRule",
                                        "EntityRule",
                                        "CustomRule",
                                        "SelectionCountRule"
                                ],
                                "requirement": "Website link to the current form.",
                                "label": "Rule type",
                                "answer": "PageRule"
                        },
                        {
                                "id": "value",
                                "options": [
                                        "PageRule",
                                        "ValueRule",
                                        "EntityRule",
                                        "CustomRule",
                                        "SelectionCountRule"
                                ],
                                "requirement": "Sum of two form fields.",
                                "label": "Rule type",
                                "answer": "ValueRule"
                        }
                ],
                "explanation": "The image answer selected PageRule for current-form context and ValueRule for checking form values.",
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 164,
                "sourceLabel": "Image-converted Question #164",
                "badge": "Image converted",
                "type": "matrix",
                "text": "You need a reusable solution to encapsulate parameterized Dataverse queries. Which actions should you perform in sequence?",
                "rows": [
                        {
                                "id": "step1",
                                "options": [
                                        "Define the input parameters for the Dataverse queries.",
                                        "Create a custom process action that uses a custom workflow activity to perform the Dataverse queries.",
                                        "Create a real-time workflow that uses a custom workflow activity to perform the Dataverse queries.",
                                        "Run the real-time workflow by using the Dataverse connector.",
                                        "Run the custom process action by using the Dataverse connector."
                                ],
                                "requirement": "Step 1",
                                "label": "Action",
                                "answer": "Define the input parameters for the Dataverse queries."
                        },
                        {
                                "id": "step2",
                                "options": [
                                        "Define the input parameters for the Dataverse queries.",
                                        "Create a custom process action that uses a custom workflow activity to perform the Dataverse queries.",
                                        "Create a real-time workflow that uses a custom workflow activity to perform the Dataverse queries.",
                                        "Run the real-time workflow by using the Dataverse connector.",
                                        "Run the custom process action by using the Dataverse connector."
                                ],
                                "requirement": "Step 2",
                                "label": "Action",
                                "answer": "Create a custom process action that uses a custom workflow activity to perform the Dataverse queries."
                        },
                        {
                                "id": "step3",
                                "options": [
                                        "Define the input parameters for the Dataverse queries.",
                                        "Create a custom process action that uses a custom workflow activity to perform the Dataverse queries.",
                                        "Create a real-time workflow that uses a custom workflow activity to perform the Dataverse queries.",
                                        "Run the real-time workflow by using the Dataverse connector.",
                                        "Run the custom process action by using the Dataverse connector."
                                ],
                                "requirement": "Step 3",
                                "label": "Action",
                                "answer": "Run the custom process action by using the Dataverse connector."
                        }
                ],
                "uniqueSelection": true,
                "explanation": "Converted from the answer image: define input parameters, create the custom process action using the custom workflow activity, then run the action through the Dataverse connector.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 165,
                "sourceLabel": "Image-converted Question #165",
                "badge": "Image converted",
                "type": "matrix",
                "text": "You need to package and deploy a Power Apps code component to an environment. Match each action to the correct command.",
                "rows": [
                        {
                                "id": "package",
                                "options": [
                                        "pac solution init --publisher-name Contoso --publisher-prefix cto",
                                        "pac auth create --url https://contoso.crm.dynamics.com",
                                        "pac pcf push --publisher-prefix",
                                        "pac solution add-reference --path c:\\downloads\\mysamplecomponent"
                                ],
                                "requirement": "Package",
                                "label": "Command",
                                "answer": "pac solution init --publisher-name Contoso --publisher-prefix cto"
                        },
                        {
                                "id": "connect",
                                "options": [
                                        "pac solution init --publisher-name Contoso --publisher-prefix cto",
                                        "pac auth create --url https://contoso.crm.dynamics.com",
                                        "pac pcf push --publisher-prefix",
                                        "pac solution add-reference --path c:\\downloads\\mysamplecomponent"
                                ],
                                "requirement": "Connect",
                                "label": "Command",
                                "answer": "pac auth create --url https://contoso.crm.dynamics.com"
                        },
                        {
                                "id": "deploy",
                                "options": [
                                        "pac solution init --publisher-name Contoso --publisher-prefix cto",
                                        "pac auth create --url https://contoso.crm.dynamics.com",
                                        "pac pcf push --publisher-prefix",
                                        "pac solution add-reference --path c:\\downloads\\mysamplecomponent"
                                ],
                                "requirement": "Deploy",
                                "label": "Command",
                                "answer": "pac pcf push --publisher-prefix"
                        }
                ],
                "uniqueSelection": true,
                "explanation": "The image answer maps package to pac solution init, connect to pac auth create, and deploy to pac pcf push.",
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 166,
                "sourceLabel": "PDF Question #34",
                "badge": "Cleaned PDF item",
                "type": "choice",
                "text": "You need to configure a PCF control to display team members for interview scheduling. Which two inputs should you use? Each correct answer presents part of the solution.",
                "options": [
                        {
                                "text": "Identifier for the job candidate",
                                "key": "A"
                        },
                        {
                                "text": "Identifier for the job posting",
                                "key": "B"
                        },
                        {
                                "text": "Time-zone offset for the hiring manager",
                                "key": "C"
                        },
                        {
                                "text": "Time-zone offset for the job candidate",
                                "key": "D"
                        },
                        {
                                "text": "Identifier for the hiring manager",
                                "key": "E"
                        }
                ],
                "answers": [
                        "A",
                        "D"
                ],
                "explanation": "This cleaned item uses the candidate identifier and candidate time-zone offset.",
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        },
        {
                "id": 167,
                "sourceLabel": "PDF Question #54",
                "badge": "Cleaned PDF item",
                "type": "choice",
                "text": "A company plans to create an order processing app. When orders are created, the app performs complex business logic and integrates with several external systems. Orders with many line items may take up to six minutes to complete. Processing for each order must be completed in one operation to avoid incomplete records. What should you recommend?",
                "options": [
                        {
                                "text": "An asynchronous workflow that uses a custom workflow activity",
                                "key": "A"
                        },
                        {
                                "text": "A real-time workflow that uses a custom action",
                                "key": "B"
                        },
                        {
                                "text": "A webhook that connects to an Azure Function",
                                "key": "C"
                        },
                        {
                                "text": "An asynchronous plug-in",
                                "key": "D"
                        }
                ],
                "answers": [
                        "B"
                ],
                "explanation": "The supplied answer identifies a real-time workflow with a custom action because the workflow must roll back changes if the operation fails.",
                "topic": 5,
                "topicId": 5,
                "area": "Extend the platform"
        },
        {
                "id": 168,
                "sourceLabel": "PDF Question #55",
                "badge": "Cleaned PDF item",
                "type": "choice",
                "text": "A solution contains a real-time workflow that populates a lookup column with a default value. After a managed solution is imported into test, creating a record fails with 'Record is not available.' What should you do?",
                "options": [
                        {
                                "text": "Add missing lookup table records to the solution.",
                                "key": "A"
                        },
                        {
                                "text": "Manually create the missing lookup records in the test environment.",
                                "key": "B"
                        },
                        {
                                "text": "Use the Configuration Migration Tool to extract lookup table data from development and import it to test.",
                                "key": "C"
                        }
                ],
                "answers": [
                        "C"
                ],
                "explanation": "Reference data used by solution logic should be migrated to the target environment using configuration migration tooling.",
                "topic": 2,
                "topicId": 2,
                "area": "Build Power Platform solutions"
        },
        {
                "id": 169,
                "sourceLabel": "PDF Question #56",
                "badge": "Cleaned PDF item",
                "type": "choice",
                "text": "Users report that a canvas app loads slowly. You use Monitor, but the events do not include formula details. What should you do to include formula details in Monitor events?",
                "options": [
                        {
                                "text": "Turn on the Debug published app setting in the canvas app.",
                                "key": "A"
                        },
                        {
                                "text": "After each event, implement the Trace function within the canvas app.",
                                "key": "B"
                        },
                        {
                                "text": "Add the Azure Application Insights data source to the canvas app.",
                                "key": "C"
                        },
                        {
                                "text": "Validate that the Application Insights instrumentation key is populated in the app object properties.",
                                "key": "D"
                        }
                ],
                "answers": [
                        "A"
                ],
                "explanation": "The PDF answer identifies Debug published app as the setting that includes formula details in Monitor output.",
                "topic": 3,
                "topicId": 3,
                "area": "Implement Power Apps improvements"
        },
        {
                "id": 170,
                "sourceLabel": "Image-converted Question #170",
                "badge": "Image converted",
                "type": "matrix",
                "text": "You created a PCF control and need to package it as a solution for deployment to a model-driven app. Which commands should you run in sequence?",
                "rows": [
                        {
                                "id": "one",
                                "options": [
                                        "npm run build",
                                        "pac solution init --publisher-name <publisher> --publisher-prefix <prefix>",
                                        "msbuild /t:build /restore",
                                        "npm start",
                                        "pac pcf init --namespace <namespace> --name <control name> --template field",
                                        "pac solution add-reference --path <control path>",
                                        "npm install"
                                ],
                                "requirement": "Step 1",
                                "label": "Command",
                                "answer": "pac solution init --publisher-name <publisher> --publisher-prefix <prefix>"
                        },
                        {
                                "id": "two",
                                "options": [
                                        "npm run build",
                                        "pac solution init --publisher-name <publisher> --publisher-prefix <prefix>",
                                        "msbuild /t:build /restore",
                                        "npm start",
                                        "pac pcf init --namespace <namespace> --name <control name> --template field",
                                        "pac solution add-reference --path <control path>",
                                        "npm install"
                                ],
                                "requirement": "Step 2",
                                "label": "Command",
                                "answer": "pac solution add-reference --path <control path>"
                        },
                        {
                                "id": "three",
                                "options": [
                                        "npm run build",
                                        "pac solution init --publisher-name <publisher> --publisher-prefix <prefix>",
                                        "msbuild /t:build /restore",
                                        "npm start",
                                        "pac pcf init --namespace <namespace> --name <control name> --template field",
                                        "pac solution add-reference --path <control path>",
                                        "npm install"
                                ],
                                "requirement": "Step 3",
                                "label": "Command",
                                "answer": "msbuild /t:build /restore"
                        }
                ],
                "uniqueSelection": true,
                "explanation": "Converted from a PCF packaging sequence image: initialize the solution, add the PCF reference, and build with MSBuild.",
                "topic": 4,
                "topicId": 4,
                "area": "Extend the user experience"
        }
];
