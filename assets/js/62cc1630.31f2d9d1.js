"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1661],{44978:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var n=t(74848),s=t(28453);const r={title:"UI Metadata"},i=void 0,l={id:"developer/package/metadata/metadata-ui",title:"UI Metadata",description:"Overview",source:"@site/docs/developer/package/metadata/metadata-ui.md",sourceDirName:"developer/package/metadata",slug:"/developer/package/metadata/metadata-ui",permalink:"/developer/package/metadata/metadata-ui",draft:!1,unlisted:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/developer/package/metadata/metadata-ui.md",tags:[],version:"current",frontMatter:{title:"UI Metadata"},sidebar:"developer",previous:{title:"Permission Metadata",permalink:"/developer/package/metadata/metadata-permissions"},next:{title:"Synchronize Metadata",permalink:"/developer/package/sync-metadata"}},c={},h=[{value:"Overview",id:"overview",level:2},{value:"Applications",id:"applications",level:2},{value:"Tabs",id:"tabs",level:2},{value:"List Views",id:"list-views",level:2},{value:"Page Layouts",id:"page-layouts",level:2},{value:"Custom Buttons",id:"custom-buttons",level:2}];function x(e){const d={br:"br",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(d.p,{children:"Define ui-related metadata"}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsx)(d.li,{children:"Applications"}),"\n",(0,n.jsx)(d.li,{children:"Tabs"}),"\n",(0,n.jsx)(d.li,{children:"List Views"}),"\n",(0,n.jsx)(d.li,{children:"Page Layouts"}),"\n",(0,n.jsx)(d.li,{children:"Custom Buttons"}),"\n"]}),"\n",(0,n.jsx)(d.h2,{id:"applications",children:"Applications"}),"\n",(0,n.jsxs)(d.p,{children:["Application.app.yml",(0,n.jsx)(d.br,{}),"\n","You can set the application's name, display name, application icon, and the objects and tabs displayed within the application."]}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-yaml",children:"name: Contract\ncode: contracts\ndescription: Manage contracts and payments.\nicon_slds: contract_line_item\nmobile: true\nmobile_objects:\n    - contracts\n    - finance_invoice\n    - finance_receive\n    - finance_receipt\n    - finance_payment\n    - contract_types\noauth2_enabled: false\noauth2_logout_enabled: false\nobjects:\n    - contracts\n    - finance_invoice\n    - finance_receive\n    - finance_receipt\n    - finance_payment\n    - contract_types\nsaml_enabled: false\nsaml_logout_enabled: false\nsort: 50\ntabs:\n    - contract_analysis\nvisible: true\n"})}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Property Name"}),(0,n.jsx)(d.th,{children:"Property Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"name"}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Name"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"code"}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"API Name"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"icon_slds"}),(0,n.jsx)(d.td,{children:"lookup"}),(0,n.jsx)(d.td,{children:"Icon"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"visible"}),(0,n.jsx)(d.td,{children:"boolean"}),(0,n.jsx)(d.td,{children:"Enable"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"description"}),(0,n.jsx)(d.td,{children:"textarea"}),(0,n.jsx)(d.td,{children:"Description"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"tabs"}),(0,n.jsx)(d.td,{children:"lookup"}),(0,n.jsx)(d.td,{children:"Tabs"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"objects"}),(0,n.jsx)(d.td,{children:"lookup"}),(0,n.jsx)(d.td,{children:"Desktop Main Menu"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"mobile_objects"}),(0,n.jsx)(d.td,{children:"lookup"}),(0,n.jsx)(d.td,{children:"Mobile Main Menu"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"is_creator"}),(0,n.jsx)(d.td,{children:"boolean"}),(0,n.jsx)(d.td,{children:"Display in desktop menu"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"mobile"}),(0,n.jsx)(d.td,{children:"boolean"}),(0,n.jsx)(d.td,{children:"Display in mobile menu"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"icon"}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Old Version Icon"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sort"}),(0,n.jsx)(d.td,{children:"number"}),(0,n.jsx)(d.td,{children:"Sort Order"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"url"}),(0,n.jsx)(d.td,{children:"url"}),(0,n.jsx)(d.td,{children:"External Link"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"is_use_ie"}),(0,n.jsx)(d.td,{children:"boolean"}),(0,n.jsx)(d.td,{children:"Open with IE (Requires Steedos Desktop Client)"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"is_use_iframe"}),(0,n.jsx)(d.td,{children:"boolean"}),(0,n.jsx)(d.td,{children:"Open in iframe"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"is_new_window"}),(0,n.jsx)(d.td,{children:"boolean"}),(0,n.jsx)(d.td,{children:"Open in New Window"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"on_click"}),(0,n.jsx)(d.td,{children:"textarea"}),(0,n.jsx)(d.td,{children:"Link Script"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"auth_name"}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Auth Domain"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"secret"}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"API Key"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"oauth2_enabled"}),(0,n.jsx)(d.td,{children:"boolean"}),(0,n.jsx)(d.td,{children:"Enable OAuth2"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"oauth2_callback_url"}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Callback URL"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"oauth2_scopes"}),(0,n.jsx)(d.td,{children:"select"}),(0,n.jsx)(d.td,{children:"Scopes"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"oauth2_logout_enabled"}),(0,n.jsx)(d.td,{children:"boolean"}),(0,n.jsx)(d.td,{children:"Enable Single Sign-out"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"oauth2_logout_url"}),(0,n.jsx)(d.td,{children:"url"}),(0,n.jsx)(d.td,{children:"Single Sign-out URL"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"oauth2_home_url"}),(0,n.jsx)(d.td,{children:"url"}),(0,n.jsx)(d.td,{children:"App Homepage"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"oauth2_logo"}),(0,n.jsx)(d.td,{children:"image"}),(0,n.jsx)(d.td,{children:"App Logo"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"oauth2_client_secret"}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"App Secret"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"saml_enabled"}),(0,n.jsx)(d.td,{children:"boolean"}),(0,n.jsx)(d.td,{children:"Enable SAML"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"saml_entity_id"}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Entity Id"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"saml_issuer"}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Issuer"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"saml_idp_cert"}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"IDP Cert"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"saml_acs_url"}),(0,n.jsx)(d.td,{children:"url"}),(0,n.jsx)(d.td,{children:"ACS Url"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"saml_name_id_format"}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Name"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"saml_logout_enabled"}),(0,n.jsx)(d.td,{children:"boolean"}),(0,n.jsx)(d.td,{children:"Enable Single Sign-out"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"saml_logout_url"}),(0,n.jsx)(d.td,{children:"url"}),(0,n.jsx)(d.td,{children:"Single Sign-out URL"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"saml_logout_block"}),(0,n.jsx)(d.td,{children:"select"}),(0,n.jsx)(d.td,{children:"Single Sign-out Binding"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"is_system"}),(0,n.jsx)(d.td,{children:"boolean"}),(0,n.jsx)(d.td,{children:"System"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"from_code_id"}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"from_code_id"})]})]})]}),"\n",(0,n.jsx)(d.h2,{id:"tabs",children:"Tabs"}),"\n",(0,n.jsxs)(d.p,{children:["Tab.tab.yml",(0,n.jsx)(d.br,{}),"\n","Tabs can be bound to an object or to a URL or a custom page."]}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-yaml",children:"name: contract_analysis\ndesktop: true\nicon: dashboard\nlabel: Contract Analysis\nmobile: true\npage: contract_analysis\ntype: page\n"})}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Property Name"}),(0,n.jsx)(d.th,{children:"Property Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"label"}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Display Name"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"name"}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"API Name"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"icon"}),(0,n.jsx)(d.td,{children:"lookup"}),(0,n.jsx)(d.td,{children:"Icon"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"parent"}),(0,n.jsx)(d.td,{children:"lookup"}),(0,n.jsx)(d.td,{children:"Parent Tab"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"type"}),(0,n.jsx)(d.td,{children:"select"}),(0,n.jsx)(d.td,{children:"Type"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"mobile"}),(0,n.jsx)(d.td,{children:"boolean"}),(0,n.jsx)(d.td,{children:"Display in mobile menu"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"desktop"}),(0,n.jsx)(d.td,{children:"boolean"}),(0,n.jsx)(d.td,{children:"Display in desktop menu"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"frame_height"}),(0,n.jsx)(d.td,{children:"number"}),(0,n.jsx)(d.td,{children:"Tab Frame Height"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"has_sidebar"}),(0,n.jsx)(d.td,{children:"boolean"}),(0,n.jsx)(d.td,{children:"Display Sidebar Panel"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"object"}),(0,n.jsx)(d.td,{children:"lookup"}),(0,n.jsx)(d.td,{children:"Object"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"url"}),(0,n.jsx)(d.td,{children:"url"}),(0,n.jsx)(d.td,{children:"External Link"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"is_new_window"}),(0,n.jsx)(d.td,{children:"boolean"}),(0,n.jsx)(d.td,{children:"Open in New Window"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"page"}),(0,n.jsx)(d.td,{children:"lookup"}),(0,n.jsx)(d.td,{children:"Page"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"action_overrides"}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Action Override List Assigned to Tab"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"description"}),(0,n.jsx)(d.td,{children:"textarea"}),(0,n.jsx)(d.td,{children:"Description"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"is_system"}),(0,n.jsx)(d.td,{children:"boolean"}),(0,n.jsx)(d.td,{children:"System"})]})]})]}),"\n",(0,n.jsx)(d.h2,{id:"list-views",children:"List Views"}),"\n",(0,n.jsxs)(d.p,{children:["Listview.listview.yml",(0,n.jsx)(d.br,{}),"\n","Defines the list display of an object, including: displayed columns, filter conditions, sort rules, default search fields."]}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-yaml",children:"name: all\nlabel: All Contracts\ncolumns:\n  - field: 'no'\n    width: '150'\n    wrap: true\n  - field: name\n    width: '220'\n    wrap: true\n  - field: contract_type\n    width: '150'\n    wrap: true\n  - field: amount\n    width: '150'\n    wrap: true\n  - field: signed_date\n    width: '150'\n    wrap: false\n  - field: owner\n    width: '150'\n    wrap: false\n  - field: created\n    width: '150'\n    wrap: false\nfilter_fields:\n  - contract_type\n  - signed_date\n  - othercompany\n  - instance_state\n  - owner\nfilter_scope: space\nfilters:\n  - is_default: true\n    field: instance_state\n    operation: <>\n    value:\n      - terminated\n    is_required: false\nshared: true\nshow_count: false\nsort:\n  - field_name: 'no'\n    order: desc\n"})}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Property Name"}),(0,n.jsx)(d.th,{children:"Property Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"label"}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Display Name"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"name"}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"API Name"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"object_name"}),(0,n.jsx)(d.td,{children:"master_detail"}),(0,n.jsx)(d.td,{children:"Object"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"filter_scope"}),(0,n.jsx)(d.td,{children:"lookup"}),(0,n.jsx)(d.td,{children:"Filter Scope"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"shared"}),(0,n.jsx)(d.td,{children:"boolean"}),(0,n.jsx)(d.td,{children:"Share View to Workspace"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"show_count"}),(0,n.jsx)(d.td,{children:"boolean"}),(0,n.jsx)(d.td,{children:"Display Entry Count"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"type"}),(0,n.jsx)(d.td,{children:"select"}),(0,n.jsx)(d.td,{children:"View Type"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"scrolling_mode"}),(0,n.jsx)(d.td,{children:"select"}),(0,n.jsx)(d.td,{children:"Scrollbar Style"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"columns"}),(0,n.jsx)(d.td,{children:"grid"}),(0,n.jsx)(d.td,{children:"Displayed Columns"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"columns.$"}),(0,n.jsx)(d.td,{children:"object"}),(0,n.jsx)(d.td,{children:"Displayed Column"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"columns.$.field"}),(0,n.jsx)(d.td,{children:"lookup"}),(0,n.jsx)(d.td,{children:"Field"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"columns.$.width"}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Width"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"filter_fields"}),(0,n.jsx)(d.td,{children:"lookup"}),(0,n.jsx)(d.td,{children:"Default Filter Fields"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sort"}),(0,n.jsx)(d.td,{children:"grid"}),(0,n.jsx)(d.td,{children:"Default Sort Rules"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sort.$"}),(0,n.jsx)(d.td,{children:"object"}),(0,n.jsx)(d.td,{children:"Order"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sort.$.field_name"}),(0,n.jsx)(d.td,{children:"lookup"}),(0,n.jsx)(d.td,{children:"Sort Field"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sort.$.order"}),(0,n.jsx)(d.td,{children:"select"}),(0,n.jsx)(d.td,{children:"Sort Order"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"filters"}),(0,n.jsx)(d.td,{children:"grid"}),(0,n.jsx)(d.td,{children:"Filters"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"filters.$"}),(0,n.jsx)(d.td,{children:"object"}),(0,n.jsx)(d.td,{children:"Filter"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"filters.$.field"}),(0,n.jsx)(d.td,{children:"lookup"}),(0,n.jsx)(d.td,{children:"Field"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"filters.$.operation"}),(0,n.jsx)(d.td,{children:"lookup"}),(0,n.jsx)(d.td,{children:"Operator"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"filters.$.value"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"Value"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"filter_logic"}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Filter Logic"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"mobile_columns"}),(0,n.jsx)(d.td,{children:"grid"}),(0,n.jsx)(d.td,{children:"Mobile Displayed Columns"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"mobile_columns.$"}),(0,n.jsx)(d.td,{children:"object"}),(0,n.jsx)(d.td,{children:"Mobile Displayed Column"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"mobile_columns.$.field"}),(0,n.jsx)(d.td,{children:"lookup"}),(0,n.jsx)(d.td,{children:"Field"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sort_no"}),(0,n.jsx)(d.td,{children:"number"}),(0,n.jsx)(d.td,{children:"Sort Number"})]})]})]}),"\n",(0,n.jsx)(d.h2,{id:"page-layouts",children:"Page Layouts"}),"\n",(0,n.jsxs)(d.p,{children:["ObjectName.PageLayout.layout.yml",(0,n.jsx)(d.br,{}),"\n","Defines the record display of an object, including: profile, action buttons, displayed fields, related subtables."]}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{children:"name: customer\nbuttons:\n  - button_name: standard_new\n  - button_name: standard_edit\n  - button_name: standard_delete\nsections:\n  - section_name: base_info\n    fields:\n      - field_name: name\n      - field_name: address\n      - field_name: contact\n      - field_name: telephone\n      - field_name: email\n  - section_name: contract_info\n    fields:\n      - field_name: contract_no\n      - field_name: contract_type\n      - field_name: contract_start_date\n      - field_name: contract_end_date\n"})}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Property Name"}),(0,n.jsx)(d.th,{children:"Property Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"label"}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Display Name"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"name"}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"API Name"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"object_name"}),(0,n.jsx)(d.td,{children:"master_detail"}),(0,n.jsx)(d.td,{children:"Object"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"buttons"}),(0,n.jsx)(d.td,{children:"lookup"}),(0,n.jsx)(d.td,{children:"Action Buttons"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"buttons.$"}),(0,n.jsx)(d.td,{children:"object"}),(0,n.jsx)(d.td,{children:"Button"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"buttons.$.button_name"}),(0,n.jsx)(d.td,{children:"lookup"}),(0,n.jsx)(d.td,{children:"Button"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sections"}),(0,n.jsx)(d.td,{children:"grid"}),(0,n.jsx)(d.td,{children:"Layout Sections"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sections.$"}),(0,n.jsx)(d.td,{children:"object"}),(0,n.jsx)(d.td,{children:"Section"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sections.$.section_name"}),(0,n.jsx)(d.td,{children:"lookup"}),(0,n.jsx)(d.td,{children:"Section Name"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sections.$.fields"}),(0,n.jsx)(d.td,{children:"grid"}),(0,n.jsx)(d.td,{children:"Displayed Fields"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sections.$.fields.$"}),(0,n.jsx)(d.td,{children:"object"}),(0,n.jsx)(d.td,{children:"Displayed Field"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sections.$.fields.$.field_name"}),(0,n.jsx)(d.td,{children:"lookup"}),(0,n.jsx)(d.td,{children:"Field"})]})]})]}),"\n",(0,n.jsx)(d.h2,{id:"custom-buttons",children:"Custom Buttons"}),"\n",(0,n.jsxs)(d.p,{children:["Button.button.yml",(0,n.jsx)(d.br,{}),"\n","Custom button definitions."]}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-yaml",children:"name: standard_new\nlabel: New\ntype: add\norder: 10\nicon: new_record\nvisible: true\n"})}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Property Name"}),(0,n.jsx)(d.th,{children:"Property Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"label"}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Display Name"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"name"}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"API Name"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"type"}),(0,n.jsx)(d.td,{children:"select"}),(0,n.jsx)(d.td,{children:"Button Type"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"order"}),(0,n.jsx)(d.td,{children:"number"}),(0,n.jsx)(d.td,{children:"Display Order"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"icon"}),(0,n.jsx)(d.td,{children:"lookup"}),(0,n.jsx)(d.td,{children:"Icon"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"visible"}),(0,n.jsx)(d.td,{children:"boolean"}),(0,n.jsx)(d.td,{children:"Display"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"action"}),(0,n.jsx)(d.td,{children:"textarea"}),(0,n.jsx)(d.td,{children:"Button Action"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"permission_set"}),(0,n.jsx)(d.td,{children:"lookup"}),(0,n.jsx)(d.td,{children:"Permission"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"related_list"}),(0,n.jsx)(d.td,{children:"lookup"}),(0,n.jsx)(d.td,{children:"Related List"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"description"}),(0,n.jsx)(d.td,{children:"textarea"}),(0,n.jsx)(d.td,{children:"Description"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"group"}),(0,n.jsx)(d.td,{children:"text"}),(0,n.jsx)(d.td,{children:"Button Group"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"is_system"}),(0,n.jsx)(d.td,{children:"boolean"}),(0,n.jsx)(d.td,{children:"System"})]})]})]}),"\n",(0,n.jsx)(d.hr,{})]})}function j(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},28453:(e,d,t)=>{t.d(d,{R:()=>i,x:()=>l});var n=t(96540);const s={},r=n.createContext(s);function i(e){const d=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:d},e.children)}}}]);