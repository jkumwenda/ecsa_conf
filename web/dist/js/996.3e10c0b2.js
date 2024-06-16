"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[996],{6440:function(e,a,t){t.r(a),t.d(a,{default:function(){return S}});var i=t(6768),s=t(4232);const n={class:"flex flex-col space-y-4 flex-1"},r={class:"flex flex-col space-y-4"},o={class:"flex justify-between items-center"},l={key:1,class:"rounded-2xl border border-white-600 shadow-sm p-4 text-abbey-500"},c=(0,i.Fv)('<div class="flex flex-row bg-shuttle-gray-300 p-2 text-sm font-bold"><div class="sm:w-4/12">Participant</div><div class="sm:w-2/12">Country</div><div class="sm:w-2/12">Paid Status</div><div class="sm:w-3/12">Email</div><div class="sm:w-2/12">Action</div></div>',1),d={class:"sm:w-4/12"},u={class:"sm:w-2/12"},p={class:"sm:w-2/12"},h={class:"sm:w-3/12"},g={class:"flex space-x-2 sm:w-2/12"},m={key:0,class:"p-1 border border-mountain-meadow-600 bg-flamingo-400 rounded-full"},w={key:3,class:"p-1 border border-flamingo-600 bg-flamingo-400 rounded-full"};function v(e,a,t,v,f,P){const C=(0,i.g2)("HeaderView"),b=(0,i.g2)("search-component"),k=(0,i.g2)("router-link"),y=(0,i.g2)("SpinnerComponent"),x=(0,i.g2)("CurrencyDollarIcon"),A=(0,i.g2)("EyeIcon"),I=(0,i.g2)("PencilSquareIcon"),L=(0,i.g2)("TrashIcon"),E=(0,i.g2)("pagination-component"),D=(0,i.g2)("delete-confirmation-modal");return(0,i.uX)(),(0,i.CE)("div",n,[(0,i.bF)(C,{headerTitle:f.headerTitle},null,8,["headerTitle"]),(0,i.Lk)("div",r,[(0,i.Lk)("div",o,[(0,i.bF)(b,{onSearch:P.handleSearch},null,8,["onSearch"]),v.permissions.includes("ADD_PARTICIPANT")?((0,i.uX)(),(0,i.Wv)(k,{key:0,to:{name:"AddParticipant"},class:"mt-2 px-4 py-2 text-white-200 bg-bondi-blue-500 hover:bg-bondi-blue-400 rounded-2xl"},{default:(0,i.k6)((()=>[(0,i.eW)(" Add Participant")])),_:1})):(0,i.Q3)("",!0)]),f.isLoading?((0,i.uX)(),(0,i.Wv)(y,{key:0})):((0,i.uX)(),(0,i.CE)("div",l,[c,((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(f.participants,((e,a)=>((0,i.uX)(),(0,i.CE)("div",{class:(0,s.C4)(["flex flex-row p-2 text-sm items-center",P.getRowClass(a)]),key:e.id},[(0,i.Lk)("div",d,(0,s.v_)(e.title)+" "+(0,s.v_)(e.users.firstname)+" "+(0,s.v_)(e.users.lastname),1),(0,i.Lk)("div",u,(0,s.v_)(e.country.country),1),(0,i.Lk)("div",p,(0,s.v_)(e.users.phone),1),(0,i.Lk)("div",h,(0,s.v_)(e.users.email),1),(0,i.Lk)("div",g,[v.permissions.includes("DELETE_PARTICIPANT")?((0,i.uX)(),(0,i.CE)("div",m,[(0,i.bF)(x,{class:"w-5 h-5 text-mountain-meadow-800 cursor-pointer",onClick:a=>P.confirmPaid(e.id)},null,8,["onClick"])])):(0,i.Q3)("",!0),v.permissions.includes("VIEW_PARTICIPANT")?((0,i.uX)(),(0,i.Wv)(k,{key:1,class:"p-1 border border-st-tropaz-600 bg-st-tropaz-200 rounded-full",to:{name:"Participant",params:{id:e.id}}},{default:(0,i.k6)((()=>[(0,i.bF)(A,{class:"w-5 h-5 text-st-tropaz-600"})])),_:2},1032,["to"])):(0,i.Q3)("",!0),v.permissions.includes("UPDATE_PARTICIPANT")?((0,i.uX)(),(0,i.Wv)(k,{key:2,class:"p-1 bg-mountain-meadow-300 border border-mountain-meadow-700 rounded-full",to:{name:"EditParticipant",params:{id:e.id}}},{default:(0,i.k6)((()=>[(0,i.bF)(I,{class:"w-5 h-5 text-mountain-meadow-900"})])),_:2},1032,["to"])):(0,i.Q3)("",!0),v.permissions.includes("DELETE_PARTICIPANT")?((0,i.uX)(),(0,i.CE)("div",w,[(0,i.bF)(L,{class:"w-5 h-5 text-flamingo-800",onClick:a=>P.showDeleteConfirmation(e.id)},null,8,["onClick"])])):(0,i.Q3)("",!0)])],2)))),128)),(0,i.bF)(E,{currentPage:f.currentPage,totalPages:f.totalPages,onPageChange:P.handlePageChange},null,8,["currentPage","totalPages","onPageChange"])]))]),(0,i.bF)(D,{show:f.showDeleteModal,onConfirmed:a[0]||(a[0]=e=>P.deleteParticipant(f.deleteParticipantId)),onCanceled:P.cancelDelete},null,8,["show","onCanceled"])])}t(4114);var f=t(3672),P=t(159),C=t(9336),b=t(7612);function k(e,a){return(0,i.uX)(),(0,i.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,i.Lk)("path",{d:"M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z"}),(0,i.Lk)("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z","clip-rule":"evenodd"})])}var y=t(8776),x=t(2464),A=t(133),I=t(2521),L=t(7023),E=t(6826),D=t(1617),T={name:"ParticipantsView",components:{EyeIcon:P.A,PencilSquareIcon:C.A,TrashIcon:b.A,PaginationComponent:y.A,SearchComponent:x.A,HeaderView:f.A,SpinnerComponent:I.A,DeleteConfirmationModal:L.A,CurrencyDollarIcon:k},data(){return{headerTitle:"Participants",participants:{},isLoading:!0,deleteParticipantId:null,showDeleteModal:!1,currentPage:1,totalPages:"",pageSize:"10",searchPhrase:""}},mounted(){this.getParticipants()},setup(){const e=(0,E.n)(),a=e.permissions;return{permissions:a}},methods:{async getParticipants(){try{const e=await(0,A.Fd)("participants",this.currentPage,this.pageSize,this.searchPhrase);this.participants=e.data,this.totalPages=e.pages,this.isLoading=!1}catch(e){console.error("Error fetching participants:",e),this.isLoading=!1}},async handleSearch(e){this.searchPhrase=e,this.getParticipants()},async handlePageChange(e){this.currentPage=e,this.getParticipants()},async deleteParticipant(e){this.isLoading=!0;try{await(0,A.LD)("participants",e);const a=this.participants.findIndex((a=>a.id===e));-1!==a&&this.participants.splice(a,1),this.showDeleteModal=!1,this.isLoading=!1}catch(a){console.error("Error fetching participants:",a),this.isLoading=!1,this.showDeleteModal=!1}},showDeleteConfirmation(e){this.deleteParticipantId=e,this.showDeleteModal=!0},cancelDelete(){this.showDeleteModal=!1},getRowClass(e){return e%2===0?"bg-st-tropaz-100":"bg-shuttle-gray-50"},async confirmPaid(e){this.isLoading=!0;try{const a=await(0,A.fk)("participants/paid",e);this.participant=a.data,this.isLoading=!1,D.A.push("/participants")}catch(a){console.error("Error fetching participants:",a),this.isLoading=!1}}}},M=t(1241);const _=(0,M.A)(T,[["render",v]]);var S=_},159:function(e,a,t){t.d(a,{A:function(){return s}});var i=t(6768);function s(e,a){return(0,i.uX)(),(0,i.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,i.Lk)("path",{d:"M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}),(0,i.Lk)("path",{"fill-rule":"evenodd",d:"M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z","clip-rule":"evenodd"})])}}}]);
//# sourceMappingURL=996.3e10c0b2.js.map