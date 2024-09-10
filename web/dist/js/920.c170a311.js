"use strict";(self["webpackChunkecsaconm_event"]=self["webpackChunkecsaconm_event"]||[]).push([[920],{1980:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var s=a(641),i=a(33);const n={class:"flex flex-col space-y-4 flex-1"},r={class:"flex flex-col space-y-4"},l={class:"flex sm:flex-row flex-col sm:justify-between sm:items-center items-start"},o={key:1,class:"rounded-2xl border border-white-600 shadow-sm p-4 text-abbey-500"},c=(0,s.Fv)('<div class="flex sm:flex-row flex-col bg-shuttle-gray-300 p-2 text-sm font-bold"><div class="sm:w-4/12 w-full">Participant</div><div class="sm:w-2/12 w-full">Country</div><div class="sm:w-2/12 w-full">Paid Status</div><div class="sm:w-3/12 w-full">Email</div><div class="sm:w-2/12 w-full">Action</div></div>',1),d={class:"sm:w-4/12 w-full"},p={class:"uppercase"},u={class:"sm:w-2/12 w-full"},h={class:"sm:w-2/12 w-full"},g={class:"sm:w-3/12 w-full"},m={class:"flex space-x-2 sm:w-2/12 w-full"},f={key:2,class:"p-1 border border-flamingo-600 bg-flamingo-400 rounded-full"};function w(e,t,a,w,P,v){const C=(0,s.g2)("HeaderView"),b=(0,s.g2)("search-component"),x=(0,s.g2)("router-link"),k=(0,s.g2)("SpinnerComponent"),y=(0,s.g2)("EyeIcon"),A=(0,s.g2)("PencilSquareIcon"),L=(0,s.g2)("TrashIcon"),I=(0,s.g2)("pagination-component"),E=(0,s.g2)("delete-confirmation-modal");return(0,s.uX)(),(0,s.CE)("div",n,[(0,s.bF)(C,{headerTitle:P.headerTitle},null,8,["headerTitle"]),(0,s.Lk)("div",r,[(0,s.Lk)("div",l,[(0,s.bF)(b,{onSearch:v.handleSearch},null,8,["onSearch"]),w.permissions.includes("ADD_PARTICIPANT")?((0,s.uX)(),(0,s.Wv)(x,{key:0,to:{name:"AddParticipant"},class:"mt-2 px-4 py-2 text-white-200 bg-bondi-blue-500 hover:bg-bondi-blue-400 rounded-2xl"},{default:(0,s.k6)((()=>[(0,s.eW)(" Add Participant")])),_:1})):(0,s.Q3)("",!0)]),P.isLoading?((0,s.uX)(),(0,s.Wv)(k,{key:0})):((0,s.uX)(),(0,s.CE)("div",o,[c,((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(P.participants,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{class:(0,i.C4)(["flex sm:flex-row flex-col p-2 text-sm items-center",v.getRowClass(t)]),key:e.id},[(0,s.Lk)("div",d,[(0,s.eW)((0,i.v_)(e.title)+" ",1),(0,s.Lk)("span",p,(0,i.v_)(e.users.firstname),1),(0,s.eW)(" "+(0,i.v_)(e.users.lastname),1)]),(0,s.Lk)("div",u,(0,i.v_)(e.country.country),1),(0,s.Lk)("div",h,(0,i.v_)(e.users.phone),1),(0,s.Lk)("div",g,(0,i.v_)(e.users.email),1),(0,s.Lk)("div",m,[w.permissions.includes("VIEW_PARTICIPANT")?((0,s.uX)(),(0,s.Wv)(x,{key:0,class:"p-1 border border-st-tropaz-600 bg-st-tropaz-200 rounded-full",to:{name:"Participant",params:{id:e.id}}},{default:(0,s.k6)((()=>[(0,s.bF)(y,{class:"w-5 h-5 text-st-tropaz-600"})])),_:2},1032,["to"])):(0,s.Q3)("",!0),w.permissions.includes("UPDATE_PARTICIPANT")?((0,s.uX)(),(0,s.Wv)(x,{key:1,class:"p-1 bg-mountain-meadow-300 border border-mountain-meadow-700 rounded-full",to:{name:"EditParticipant",params:{id:e.id}}},{default:(0,s.k6)((()=>[(0,s.bF)(A,{class:"w-5 h-5 text-mountain-meadow-900"})])),_:2},1032,["to"])):(0,s.Q3)("",!0),w.permissions.includes("DELETE_PARTICIPANT")?((0,s.uX)(),(0,s.CE)("div",f,[(0,s.bF)(L,{class:"w-5 h-5 text-flamingo-800",onClick:t=>v.showDeleteConfirmation(e.id)},null,8,["onClick"])])):(0,s.Q3)("",!0)])],2)))),128)),(0,s.bF)(I,{currentPage:P.currentPage,totalPages:P.totalPages,onPageChange:v.handlePageChange},null,8,["currentPage","totalPages","onPageChange"])]))]),(0,s.bF)(E,{show:P.showDeleteModal,onConfirmed:t[0]||(t[0]=e=>v.deleteParticipant(P.deleteParticipantId)),onCanceled:v.cancelDelete},null,8,["show","onCanceled"])])}a(4114);var P=a(9162),v=a(4056),C=a(7561),b=a(9235),x=a(6695),k=a(9288),y=a(133),A=a(2521),L=a(7023),I=a(6826),E=a(7040),D={name:"ParticipantsView",components:{EyeIcon:v.A,PencilSquareIcon:C.A,TrashIcon:b.A,PaginationComponent:x.A,SearchComponent:k.A,HeaderView:P.A,SpinnerComponent:A.A,DeleteConfirmationModal:L.A},data(){return{headerTitle:"Participants",participants:{},isLoading:!0,deleteParticipantId:null,showDeleteModal:!1,currentPage:1,totalPages:"",pageSize:"10",searchPhrase:""}},mounted(){this.getParticipants()},setup(){const e=(0,I.n)(),t=e.permissions;return{permissions:t}},methods:{async getParticipants(){this.isLoading=!0;try{const e=await(0,y.Fd)("participants",this.currentPage,this.pageSize,this.searchPhrase);this.participants=e.data,this.totalPages=e.pages,this.isLoading=!1}catch(e){console.error("Error fetching participants:",e),this.isLoading=!1}},async handleSearch(e){this.searchPhrase=e,this.getParticipants()},async handlePageChange(e){this.currentPage=e,this.getParticipants()},async deleteParticipant(e){this.isLoading=!0;try{await(0,y.LD)("participants",e);const t=this.participants.findIndex((t=>t.id===e));-1!==t&&this.participants.splice(t,1),this.showDeleteModal=!1,this.isLoading=!1}catch(t){console.error("Error fetching participants:",t),this.isLoading=!1,this.showDeleteModal=!1}},showDeleteConfirmation(e){this.deleteParticipantId=e,this.showDeleteModal=!0},cancelDelete(){this.showDeleteModal=!1},getRowClass(e){return e%2===0?"bg-st-tropaz-100":"bg-shuttle-gray-50"},async confirmPaid(e){this.isLoading=!0;try{const t=await(0,y.fk)("participants/paid",e);this.participant=t.data,this.isLoading=!1,E.A.push("/participants")}catch(t){console.error("Error fetching participants:",t),this.isLoading=!1}}}},T=a(6262);const _=(0,T.A)(D,[["render",w]]);var S=_},4056:function(e,t,a){a.d(t,{A:function(){return i}});var s=a(641);function i(e,t){return(0,s.uX)(),(0,s.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,s.Lk)("path",{d:"M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}),(0,s.Lk)("path",{"fill-rule":"evenodd",d:"M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z","clip-rule":"evenodd"})])}}}]);
//# sourceMappingURL=920.c170a311.js.map