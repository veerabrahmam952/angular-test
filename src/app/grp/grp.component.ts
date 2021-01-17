import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grp',
  templateUrl: './grp.component.html',
  styleUrls: ['./grp.component.scss']
})
export class GrpComponent implements OnInit {

  pageSetSchema: any;
  constructor() { }
 
  clickLeftMenuBtn: any = function onClick(e) {
    alert('Hi');
  }
  ngOnInit(): void {
    this.PreviousPage()
  }
  PreviousPage() {
    this.pageSetSchema = {
      "PageSetName": "XYZ",
      "CurrentPageIndex": 0,
      "Pages": [
        this.Pages(),
        this.groupInsranceCensusUpload()
      ]
    }
  }
  Pages(){
    return {
      "PageName": "Dash Board",
      "PageIntegrations": [{
        "IntegrationPath": "https://s3-ap-southeast-1.amazonaws.com/",
        "IntegrationName": "Get Details",
        "IntegrationPort": "",
        "IntegrationRelativeURL": "/he-public-data/bets7747a43.json",
        "IntegrationType": "Get",
        "RequestIntegrationScript": undefined,
        "ResponseIntegrationScript": function (pageSet, currentPageIndex, response) {
          debugger;
          let column_arr = [
            { title: "Player Name", dataProperty: "PlayerName", sortable: true, filterable: true, editable: false },
            { title: "Level", dataProperty: "Level", sortable: true, filterable: true, editable: false },
            { title: "Bet", dataProperty: "Bet", sortable: true, filterable: true, editable: false },
            { title: "Wins", dataProperty: "Wins", sortable: true, filterable: true, editable: false },
            { title: "Lost", dataProperty: "Lost", sortable: true, filterable: true, editable: false },
            { title: "Price", dataProperty: "Price", sortable: true, filterable: true, editable: false }
          ]
          let pageOrganism = pageSet.Pages.filter((page) => page.PageName == "Dash Board")[0].PageElements.PageOrganisms.filter((porg) => porg.OrganismName == "dynamicChooseQueryBYId")[0];
          pageOrganism.OrganismMolecules[2].MoleculeAtoms[0].AtomValue.headers.columns = column_arr;
          let row_arr = [];
          let other_properties = [];
          response.forEach((res, i)=>{
            row_arr.push({
              PlayerName: res.Name,
              Level: i,
              Bet: res.Bet,
              Wins: 2,
              Lost: i,
              Price: res.Price,
              imagepath: res['Profile Image'],
              imageclass: "imgstyle"
            });
          })
          other_properties.push({
            title: "Select",
            buttonType: "checkbox",
            methodName: "",
            buttonName: "",
            buttonIcon: ""
          },{
            title: "Avatar",
            buttonType: "image",
            methodName: "",
            buttonName: "",
            buttonIcon: ""
          });
          pageOrganism.OrganismMolecules[2].MoleculeAtoms[0].AtomValue.data.rows = row_arr;
          pageOrganism.OrganismMolecules[2].MoleculeAtoms[0].AtomOtherProperties = other_properties;
          // pageOrganism.OrganismMolecules[0].MoleculeAtoms[0].AtomOtherProperties[0].Others[0].Value[0].Value = 'Select Playing 9';
          return pageSet;
        },
        "IntegrationLoadType": "PageLoad"
      }],
      "PageProperties": {
        "PageLayout": {
          "LayoutContent": true,
          "LayoutHeader": true,
          "LayoutFooter": false,
          "LayoutSidebar": false
        },
        "PageTitle": "",
        "PageFaviconPath": "",
        "PageCssClass": {
          "HeaderPositionClass": "offset-md-2 groupprimary-color",
          "FooterPositionClass": "",
          "ContentPositionClass": "offset-md-0 p-5",
          "SidebarPositionClass": "",
          "BackgroundPositionClass": "dashboard-groupInsurance"
        }
      },
      "PageElements": {
        "EnableOrganismsGeneration": true,
        "PageOrganisms": [
          {
            "OrganismName": "dynamicChooseQueryBYId",
            "OrganismType": "form",
            "OrganismPositionClass": "dynamicreportcard",
            "OrganismTriggerPageNavigation": false,
            "OrganismNewPageIndex": 1,
            "OrganismSubmitPageIndex": 1,
            "OrganismMolecules": [
              {
                "Properties": {
                  "MoleculeType": "formcontrol",
                  "MoleculeIsDisplay": true,
                  "MoleculePositionClass": "",
                  "MoleculeLabelClass": "",
                  "MoleculeIsColumnDisplay": true,
                  "MoleculeControlPositionClass": "",
                  "MoleculeTooltip": "Submit",
                  "MoleculeHelpText": "Click to Submit",
                  "MoleculeLabelText": "",
                  "MoleculeValidations": false
                },
                "MoleculeAtoms": [{
                  "AtomName": "GLStaticMsg",
                  "AtomType": "dynamiccontent",
                  "AtomTabIndex": 2,
                  "AtomIsDisabled": false,
                  "AtomMaxLength": 10,
                  "AtomMinLength": 5,
                  "AtomPlaceHolder": "Application Name",
                  "AtomIsReadOnly": false,
                  "AtomIsRequired": true,
                  "AtomIsAutoComplete": false,
                  "AtomId": "static_content",
                  "AtomValue": `
                    <div id='table_name' class='tablename'>
                    
                    </div>
                  `,
                  "AtomValueType": "",
                  "AtomOtherProperties": [
                    {
                      "Others": [{
                        "Key": "DynamicData",
                        "Value": [
                          {
                            "Key": "table_name",
                            "Value": `Select Playing 9<input type='text' placeholder='Search Players' name='search' class='offset-md-3'>
                            <button type='submit'><i class='fa fa-search'></i></button>`
                          }
                        ]
                      }
                      ]
                    }
                  ],
                  "AtomPositionClass": "",
                }]
              },
              {
                "Properties": {
                  "MoleculeType": "formcontrol",
                  "MoleculeIsDisplay": true,
                  "MoleculePositionClass": "offset-md-11",
                  "MoleculeLabelClass": "col-md-8",
                  "MoleculeIsColumnDisplay": true,
                  "MoleculeControlPositionClass": "",
                  "MoleculeTooltip": "Submit",
                  "MoleculeHelpText": "Click to Submit",
                  "MoleculeLabelText": "",
                  "MoleculeValidations": false
                },
                "MoleculeAtoms": [
                  {
                    "AtomName": "GLBack",
                    "AtomType": "submit",
                    "AtomTabIndex": 1,
                    "AtomIsDisabled": false,
                    "AtomMaxLength": 10,
                    "AtomMinLength": 5,
                    "AtomPlaceHolder": "Next",
                    "AtomIsReadOnly": false,
                    "AtomIsRequired": true,
                    "AtomIsAutoComplete": false,
                    "AtomId": "btn_next",
                    "AtomValue": "Next",
                    "AtomValueType": "",
                    "AtomOtherProperties": [],
                    "AtomOptions": [],
                    "AtomMethods": [],
                    "AtomRules": [],
                    "AtomIntegartions": [],
                    "AtomPositionClass": "",
                    "AtomLabelClass": "btn btnprimary ml-4"
                  }
                ]
              },
              {
              "Properties": {
                "MoleculeType": "formcontrol",
                "MoleculeIsDisplay": true,
                "MoleculePositionClass": "p-2 text-center",
                "MoleculeLabelClass": "col-md-8",
                "MoleculeIsColumnDisplay": true,
                "MoleculeControlPositionClass": "",
                "MoleculeTooltip": "",
                "MoleculeHelpText": "",
                "MoleculeLabelText": "",
                "MoleculeValidations": false
              },
              "MoleculeAtoms": [
                {
                  "AtomName": "Datatable",
                  "AtomType": "datatable",
                  "AtomTabIndex": 2,
                  "AtomIsDisabled": false,
                  "AtomMaxLength": 10,
                  "AtomMinLength": 5,
                  "AtomPlaceHolder": "Datatable",
                  "AtomIsReadOnly": false,
                  "AtomIsRequired": true,
                  "AtomIsAutoComplete": false,
                  "AtomId": "datatable_content",
                  "AtomValue": {
                    headers: {
                      columns: []
                    },
                    data: {
                      rows: []
                    }
                  },
                  "AtomValueType": "",
                  "AtomOtherProperties": [
                    
                  ],
                  "AtomOptions": [],
                  "AtomPositionClass": ""
                }
              ]
            }
          ],
          "OrganismIsDisplay": true,
          "OrganismDisplayRule": []
        }
        ]
      },
      "PageDisplay": true,
      "PageDisplayRule": []
    }
  }
  groupInsranceCensusUpload() {
    return {
      "PageName": "Players List",
      "PageIntegrations": [],
      "PageProperties": {
        "PageLayout": {
          "LayoutContent": true,
          "LayoutHeader": true,
          "LayoutFooter": false,
          "LayoutSidebar": false
        },
        "PageTitle": "",
        "PageFaviconPath": "",
        "PageCssClass": {
          "HeaderPositionClass": "offset-md-2 groupprimary-color",
          "FooterPositionClass": "",
          "ContentPositionClass": "",
          "SidebarPositionClass": "",
          "BackgroundPositionClass": ""
        }
      },
      "PageElements": {
        "EnableOrganismsGeneration": true,
        "PageOrganisms": [{
          "OrganismName": "WinnerCards",
          "OrganismType": "form",
          "OrganismPositionClass": "offset-md-0 p-5 col-md-12",
          "OrganismTriggerPageNavigation": false,
          "OrganismNewPageIndex": 1,
          "OrganismClass": "mt-0 mb-2",
          "OrganismMolecules": [{
            "Properties": {
              "MoleculeType": "formcontrol",
              "MoleculeIsDisplay": true,
              "MoleculePositionClass": "",
              "MoleculeLabelClass": "",
              "MoleculeIsColumnDisplay": true,
              "MoleculeTooltip": "",
              "MoleculeHelpText": "",
              "MoleculeLabelText": "",
              "MoleculeValidations": false,
              "MoleculeErrorMessage": ""
            },
            "MoleculeAtoms": [{
              "AtomName": "winnercard1",
              "AtomType": "staticcontent",
              "AtomTabIndex": 1,
              "AtomIsDisabled": false,
              "AtomMaxLength": 0,
              "AtomMinLength": 0,
              "AtomPlaceHolder": "NA",
              "AtomIsReadOnly": false,
              "AtomIsRequired": true,
              "AtomIsAutoComplete": false,
              "AtomId": "dynamic_content",
              "AtomValue": `
              <div class="card-deck" style='width: 30 rem;'>
                <div class="card" style='border-color: #dc3535;'>
                  <img class="card-img-top" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/richarde8624aa.jpg" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">Richard</h5>
                    <p class="card-text">Level 5</p>
                    <p class="card-text fa fa-money" style='color: #ffc107;'>80</p>
                    <p class="card-text fa fa-shield" style='color: #ffc107;'>30</p>
                    <p class="card-text fa fa-trophy" style='color: #ffc107;'>3</p>
                  </div>
                </div>
                <div class="card" style='border-color: #dc3535;'>
                  <img class="card-img-top" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/gregory032c4c3.jpg" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">Gregory</h5>
                    <p class="card-text">Level 5</p>
                    <p class="card-text fa fa-money" style='color: #ffc107;'>800</p>
                    <p class="card-text fa fa-shield" style='color: #ffc107;'>5</p>
                    <p class="card-text fa fa-trophy" style='color: #ffc107;'>4</p>
                  </div>
                </div>
                <div class="card" style='border-color: #dc3535;'>
                  <img class="card-img-top" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/rodrick14c9291.jpg" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">Rodrick</h5>
                    <p class="card-text">Level 5</p>
                    <p class="card-text fa fa-money" style='color: #ffc107;'>120</p>
                    <p class="card-text fa fa-shield" style='color: #ffc107;'>4</p>
                    <p class="card-text fa fa-trophy" style='color: #ffc107;'>8</p>
                  </div>
                </div>
                <div class="card" style='border-color: #dc3535;'>
                  <img class="card-img-top" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/chuck35c8d61.jpg" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">Pod</h5>
                    <p class="card-text">Level 5</p>
                    <p class="card-text fa fa-money" style='color: #ffc107;'>315</p>
                    <p class="card-text fa fa-shield" style='color: #ffc107;'>6</p>
                    <p class="card-text fa fa-trophy" style='color: #ffc107;'>9</p>
                  </div>
                </div>
                <div class="card" style='border-color: #dc3535;'>
                  <img class="card-img-top" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/ravi42884a0.jpg" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">Chuck</h5>
                    <p class="card-text">Level 5</p>
                    <p class="card-text fa fa-money" style='color: #ffc107;'>12</p>
                    <p class="card-text fa fa-shield" style='color: #ffc107;'>8</p>
                    <p class="card-text fa fa-trophy" style='color: #ffc107;'>6</p>
                  </div>
                </div>
              </div>
              <hr />
              <div class="card-deck" style='width: 30 rem;'>
                <div class="card" style='border-color: #dc3535;'>
                  <img class="card-img-top" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/george826c2d1.jpg" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">Ravi</h5>
                    <p class="card-text">Level 5</p>
                    <p class="card-text fa fa-money" style='color: #ffc107;'>1200</p>
                    <p class="card-text fa fa-shield" style='color: #ffc107;'>9</p>
                    <p class="card-text fa fa-trophy" style='color: #ffc107;'>5</p>
                  </div>
                </div>
                <div class="card" style='border-color: #dc3535;'>
                  <img class="card-img-top" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/faizan7534fdb.jpg" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">Soshal Distan Singh</h5>
                    <p class="card-text">Level 5</p>
                    <p class="card-text fa fa-money" style='color: #ffc107;'>317</p>
                    <p class="card-text fa fa-shield" style='color: #ffc107;'>7</p>
                    <p class="card-text fa fa-trophy" style='color: #ffc107;'>2</p>
                  </div>
                </div>
                <div class="card" style='border-color: #dc3535;'>
                  <img class="card-img-top" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/disha642f320.jpg" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">Disha Patahai</h5>
                    <p class="card-text">Level 5</p>
                    <p class="card-text fa fa-money" style='color: #ffc107;'>1200</p>
                    <p class="card-text fa fa-shield" style='color: #ffc107;'>2</p>
                    <p class="card-text fa fa-trophy" style='color: #ffc107;'>1</p>
                  </div>
                </div>
                <div class="card" style='border-color: #28a745;'>
                  <img class="card-img-top" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/soshal53167ca.jpg" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">Faizan</h5>
                    <p class="card-text">Level 5</p>
                    <p class="card-text fa fa-money" style='color: #ffc107;'>500</p>
                    <p class="card-text fa fa-shield" style='color: #ffc107;'>1</p>
                    <p class="card-text fa fa-trophy" style='color: #ffc107;'>7</p>
                  </div>
                </div>
              </div>
              `,
              "AtomValueType": "string",
              "AtomOtherProperties": [],
              "AtomOptions": [],
              "AtomMethods": [],
              "AtomRules": [],
              "AtomIntegartions": []
            }]
          },{
            "Properties": {
              "MoleculeType": "formcontrol",
              "MoleculeIsDisplay": true,
              "MoleculePositionClass": "offset-md-11",
              "MoleculeLabelClass": "col-md-8",
              "MoleculeIsColumnDisplay": true,
              "MoleculeControlPositionClass": "",
              "MoleculeTooltip": "Submit",
              "MoleculeHelpText": "Click to Submit",
              "MoleculeLabelText": "",
              "MoleculeValidations": false
            },
            "MoleculeAtoms": [
              {
                "AtomName": "grp_back",
                "AtomType": "button",
                "AtomTabIndex": 1,
                "AtomIsDisabled": false,
                "AtomMaxLength": 10,
                "AtomMinLength": 5,
                "AtomPlaceHolder": "back",
                "AtomIsReadOnly": false,
                "AtomIsRequired": true,
                "AtomIsAutoComplete": false,
                "AtomId": "btn_back",
                "AtomValue": "Back",
                "AtomValueType": "",
                "AtomOtherProperties": [],
                "AtomOptions": [],
                "AtomMethods": [],
                "AtomRules": [],
                "AtomIntegartions": [],
                "AtomTriggerPageNavigation": false,
                "AtomNewPageIndex": 0,
                "AtomPositionClass": "",
                "AtomLabelClass": "btn btnprimary ml-4"
              }
            ]
          }],
          "OrganismIsDisplay": true,
          "OrganismDisplayRule": [],
          "OrganismOtherProperties": {
            "OrganismClass": "w-100 mr-2 ml-5"
          },
          "OrganismOtherClass": "col-sm-4 col-md-4 col-xs-4"
        }]
      },
      "PageDisplay": true,
      "PageDisplayRule": []
    }
  }

}
