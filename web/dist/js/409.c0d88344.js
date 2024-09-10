"use strict";(self["webpackChunkecsaconm_event"]=self["webpackChunkecsaconm_event"]||[]).push([[409],{8375:function(e,t,a){a.r(t),a.d(t,{default:function(){return Y}});var s=a(641),o=a(3751),r=a(33);const n={class:"flex flex-col space-y-4 flex-1"},l={key:1,class:"rounded-2xl bg-catskill-white-100 shadow-sm p-4"},d={class:"block"},i=(0,s.Lk)("span",{class:"after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"}," Event title ",-1),c={class:"flex space-x-2"},u={class:"flex-1"},b=(0,s.Lk)("span",{class:"after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"}," Event Type ",-1),p=(0,s.Lk)("option",{value:"",disabled:"",selected:""},"--Select event type--",-1),f=["value"],m={class:"flex-1"},x=(0,s.Lk)("span",{class:"after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"}," Organiser ",-1),k=(0,s.Lk)("option",{value:"",disabled:"",selected:""},"--Select organisers--",-1),h=["value"],g={class:"flex space-x-2"},y={class:"flex-1"},v=(0,s.Lk)("span",{class:"after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"}," Capacity ",-1),L={class:"flex-1"},_=(0,s.Lk)("span",{class:"after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"}," Country ",-1),w=(0,s.Lk)("option",{value:"",disabled:"",selected:""},"--Select country--",-1),D=["value"],E={class:"flex space-x-2"},V={class:"flex-1"},C=(0,s.Lk)("span",{class:"after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"}," Location ",-1),S={class:"block"},F=(0,s.Lk)("span",{class:"after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"}," Description ",-1),P={class:"flex space-x-2"},T={class:"flex-1"},U=(0,s.Lk)("span",{class:"after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"}," Start date ",-1),X={class:"flex-1"},A=(0,s.Lk)("span",{class:"after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"}," End date ",-1),q={class:"flex space-x-2"},z={class:"flex-1"},J=(0,s.Lk)("span",{class:"after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"}," Registration start date ",-1),O={class:"flex-1"},R=(0,s.Lk)("span",{class:"after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"}," Registration end date ",-1),I={class:"flex flex-row space-x-4"},K=(0,s.Lk)("button",{type:"submit",class:"mt-2 px-4 py-2 text-white-100 bg-bondi-blue hover:bg-bondi-blue-400 rounded-2xl"}," Add event ",-1);function H(e,t,a,H,W,$){const j=(0,s.g2)("HeaderView"),B=(0,s.g2)("SpinnerComponent"),G=(0,s.g2)("flat-pickr"),M=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",n,[(0,s.bF)(j,{headerTitle:W.headerTitle},null,8,["headerTitle"]),W.isLoading?((0,s.uX)(),(0,s.Wv)(B,{key:0})):((0,s.uX)(),(0,s.CE)("div",l,[(0,s.Lk)("form",{class:"flex flex-col w-7/12 space-y-4",onSubmit:t[11]||(t[11]=(0,o.D$)(((...e)=>$.addEvent&&$.addEvent(...e)),["prevent"])),method:"POST"},[(0,s.Lk)("label",d,[i,(0,s.bo)((0,s.Lk)("input",{type:"input",name:"event","onUpdate:modelValue":t[0]||(t[0]=e=>W.eventData.event=e),class:"mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-abbey-400 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-2xl sm:text-sm focus:ring-1",placeholder:"Event"},null,512),[[o.Jo,W.eventData.event]])]),(0,s.Lk)("label",c,[(0,s.Lk)("div",u,[b,(0,s.bo)((0,s.Lk)("select",{name:"event_type",class:"mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-abbey-400 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-2xl sm:text-sm focus:ring-1","onUpdate:modelValue":t[1]||(t[1]=e=>W.eventData.event_type_id=e)},[p,((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(W.eventTypes,(e=>((0,s.uX)(),(0,s.CE)("option",{key:e.id,value:e.id},(0,r.v_)(e.event_type),9,f)))),128))],512),[[o.u1,W.eventData.event_type_id]])]),(0,s.Lk)("div",m,[x,(0,s.bo)((0,s.Lk)("select",{name:"event_type",class:"mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-abbey-400 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-2xl sm:text-sm focus:ring-1","onUpdate:modelValue":t[2]||(t[2]=e=>W.eventData.organiser_id=e)},[k,((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(W.organisers,(e=>((0,s.uX)(),(0,s.CE)("option",{key:e.id,value:e.id},(0,r.v_)(e.organiser),9,h)))),128))],512),[[o.u1,W.eventData.organiser_id]])])]),(0,s.Lk)("label",g,[(0,s.Lk)("div",y,[v,(0,s.bo)((0,s.Lk)("input",{type:"number",name:"capacity","onUpdate:modelValue":t[3]||(t[3]=e=>W.eventData.capacity=e),class:"mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-abbey-400 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-2xl sm:text-sm focus:ring-1",placeholder:"Capacity",required:""},null,512),[[o.Jo,W.eventData.capacity]])]),(0,s.Lk)("div",L,[_,(0,s.bo)((0,s.Lk)("select",{name:"country",class:"mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-abbey-400 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-2xl sm:text-sm focus:ring-1","onUpdate:modelValue":t[4]||(t[4]=e=>W.eventData.country_id=e)},[w,((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(W.countries,(e=>((0,s.uX)(),(0,s.CE)("option",{key:e.id,value:e.id},(0,r.v_)(e.country),9,D)))),128))],512),[[o.u1,W.eventData.country_id]])])]),(0,s.Lk)("label",E,[(0,s.Lk)("div",V,[C,(0,s.bo)((0,s.Lk)("input",{type:"text",name:"location","onUpdate:modelValue":t[5]||(t[5]=e=>W.eventData.location=e),class:"mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-abbey-400 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-2xl sm:text-sm focus:ring-1",placeholder:"Location"},null,512),[[o.Jo,W.eventData.location]])])]),(0,s.Lk)("label",S,[F,(0,s.bo)((0,s.Lk)("textarea",{name:"description","onUpdate:modelValue":t[6]||(t[6]=e=>W.eventData.description=e),class:"mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-abbey-400 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-2xl sm:text-sm focus:ring-1",placeholder:"Description"},null,512),[[o.Jo,W.eventData.description]])]),(0,s.Lk)("label",P,[(0,s.Lk)("div",T,[U,(0,s.bF)(G,{class:"mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-abbey-400 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-2xl sm:text-sm focus:ring-1",modelValue:W.eventData.start_date,"onUpdate:modelValue":t[7]||(t[7]=e=>W.eventData.start_date=e),title:"start_date",placeholder:"Start_date",required:""},null,8,["modelValue"])]),(0,s.Lk)("div",X,[A,(0,s.bF)(G,{class:"mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-abbey-400 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-2xl sm:text-sm focus:ring-1",modelValue:W.eventData.end_date,"onUpdate:modelValue":t[8]||(t[8]=e=>W.eventData.end_date=e),title:"end_date",placeholder:"End date",required:""},null,8,["modelValue"])])]),(0,s.Lk)("label",q,[(0,s.Lk)("div",z,[J,(0,s.bF)(G,{name:"registration_start_date",class:"mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-abbey-400 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-2xl sm:text-sm focus:ring-1",modelValue:W.eventData.registration_start_date,"onUpdate:modelValue":t[9]||(t[9]=e=>W.eventData.registration_start_date=e),title:"registration_start_date",placeholder:"Registration start date",required:""},null,8,["modelValue"])]),(0,s.Lk)("div",O,[R,(0,s.bF)(G,{name:"registration_end_date",class:"mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-abbey-400 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-2xl sm:text-sm focus:ring-1",modelValue:W.eventData.registration_end_date,"onUpdate:modelValue":t[10]||(t[10]=e=>W.eventData.registration_end_date=e),title:"registration_end_date",placeholder:"Registration end date",required:""},null,8,["modelValue"])])]),(0,s.Lk)("div",I,[K,(0,s.bF)(M,{to:{name:"Events"},class:"mt-2 px-4 py-2 boder border-2 border-abbey-400 hover:border-abbey-200 rounded-2xl"},{default:(0,s.k6)((()=>[(0,s.eW)("Cancel")])),_:1})])],32)]))])}a(4114);var W=a(133),$=a(9162),j=a(2521),B=a(7040),G=a(105),M={name:"AddEventView",components:{HeaderView:$.A,SpinnerComponent:j.A,flatPickr:G.A},data(){return{headerTitle:"Add event",eventData:{event:"",event_type_id:"",country_id:"",organiser_id:"",location:"",capacity:"",description:"",start_date:"",end_date:"",registration_start_date:"",registration_end_date:""},isLoading:!1,countries:{},eventTypes:{},organisers:{},currentPage:1,totalPages:"",pageSize:1e3,searchPhrase:"",date:null}},mounted(){this.getCountries(),this.getEventTypes(),this.getOrganisers()},methods:{async addEvent(){this.isLoading=!0;try{const e=await(0,W.wE)("events/",this.eventData);this.events=e.data,this.isLoading=!1,B.A.push("/events")}catch(e){console.error("Error fetching events:",e),this.isLoading=!1}},async getCountries(){try{const e=await(0,W.Fd)("countries",this.currentPage,this.pageSize,this.searchPhrase);this.countries=e.data,this.isLoading=!1}catch(e){console.error("Error fetching countries:",e),this.isLoading=!1}},async getEventTypes(){try{const e=await(0,W.Fd)("event_types",this.currentPage,this.pageSize,this.searchPhrase);this.eventTypes=e.data,this.isLoading=!1}catch(e){console.error("Error fetching event types:",e),this.isLoading=!1}},async getOrganisers(){try{const e=await(0,W.Fd)("organisers",this.currentPage,this.pageSize,this.searchPhrase);this.organisers=e.data,this.isLoading=!1}catch(e){console.error("Error fetching organisers:",e),this.isLoading=!1}}}},N=a(6262);const Q=(0,N.A)(M,[["render",H]]);var Y=Q}}]);
//# sourceMappingURL=409.c0d88344.js.map