"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[890],{5858:function(e,a,t){t.r(a),t.d(a,{default:function(){return T}});var n=t(6768),i=t(4232);const s={class:"flex flex-col space-y-4 flex-1"},r={class:"flex flex-col space-y-4"},o={class:"flex justify-between items-center"},l={key:1,class:"rounded-2xl border border-white-600 shadow-sm p-4 text-abbey-500"},c=(0,n.Fv)('<div class="flex flex-row bg-shuttle-gray-300 p-2 text-sm font-bold"><div class="sm:w-4/12">Participant</div><div class="sm:w-2/12">Country</div><div class="sm:w-2/12">Phone</div><div class="sm:w-3/12">Email</div><div class="sm:w-2/12">Action</div></div>',1),d={class:"sm:w-4/12"},u={class:"sm:w-2/12"},h={class:"sm:w-2/12"},p={class:"sm:w-3/12"},g={class:"flex space-x-2 sm:w-2/12"},m={key:2,class:"p-1 border border-flamingo-600 bg-flamingo-400 rounded-full"};function v(e,a,t,v,w,f){const P=(0,n.g2)("HeaderView"),C=(0,n.g2)("search-component"),b=(0,n.g2)("router-link"),k=(0,n.g2)("SpinnerComponent"),x=(0,n.g2)("EyeIcon"),A=(0,n.g2)("PencilSquareIcon"),y=(0,n.g2)("TrashIcon"),L=(0,n.g2)("pagination-component"),I=(0,n.g2)("delete-confirmation-modal");return(0,n.uX)(),(0,n.CE)("div",s,[(0,n.bF)(P,{headerTitle:w.headerTitle},null,8,["headerTitle"]),(0,n.Lk)("div",r,[(0,n.Lk)("div",o,[(0,n.bF)(C,{onSearch:f.handleSearch},null,8,["onSearch"]),v.permissions.includes("ADD_PARTICIPANT")?((0,n.uX)(),(0,n.Wv)(b,{key:0,to:{name:"AddParticipant"},class:"mt-2 px-4 py-2 text-white-200 bg-bondi-blue-500 hover:bg-bondi-blue-400 rounded-2xl"},{default:(0,n.k6)((()=>[(0,n.eW)(" Add Participant")])),_:1})):(0,n.Q3)("",!0)]),w.isLoading?((0,n.uX)(),(0,n.Wv)(k,{key:0})):((0,n.uX)(),(0,n.CE)("div",l,[c,((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(w.participants,((e,a)=>((0,n.uX)(),(0,n.CE)("div",{class:(0,i.C4)(["flex flex-row p-2 text-sm items-center",f.getRowClass(a)]),key:e.id},[(0,n.Lk)("div",d,(0,i.v_)(e.title)+" "+(0,i.v_)(e.users.firstname)+" "+(0,i.v_)(e.users.lastname),1),(0,n.Lk)("div",u,(0,i.v_)(e.country.country),1),(0,n.Lk)("div",h,(0,i.v_)(e.users.phone),1),(0,n.Lk)("div",p,(0,i.v_)(e.users.email),1),(0,n.Lk)("div",g,[v.permissions.includes("VIEW_PARTICIPANT")?((0,n.uX)(),(0,n.Wv)(b,{key:0,class:"p-1 border border-st-tropaz-600 bg-st-tropaz-200 rounded-full",to:{name:"Participant",params:{id:e.id}}},{default:(0,n.k6)((()=>[(0,n.bF)(x,{class:"w-5 h-5 text-st-tropaz-600"})])),_:2},1032,["to"])):(0,n.Q3)("",!0),v.permissions.includes("UPDATE_PARTICIPANT")?((0,n.uX)(),(0,n.Wv)(b,{key:1,class:"p-1 bg-mountain-meadow-300 border border-mountain-meadow-700 rounded-full",to:{name:"EditParticipant",params:{id:e.id}}},{default:(0,n.k6)((()=>[(0,n.bF)(A,{class:"w-5 h-5 text-mountain-meadow-900"})])),_:2},1032,["to"])):(0,n.Q3)("",!0),v.permissions.includes("DELETE_PARTICIPANT")?((0,n.uX)(),(0,n.CE)("div",m,[(0,n.bF)(y,{class:"w-5 h-5 text-flamingo-800",onClick:a=>f.showDeleteConfirmation(e.id)},null,8,["onClick"])])):(0,n.Q3)("",!0)])],2)))),128)),(0,n.bF)(L,{currentPage:w.currentPage,totalPages:w.totalPages,onPageChange:f.handlePageChange},null,8,["currentPage","totalPages","onPageChange"])]))]),(0,n.bF)(I,{show:w.showDeleteModal,onConfirmed:a[0]||(a[0]=e=>f.deleteParticipant(w.deleteParticipantId)),onCanceled:f.cancelDelete},null,8,["show","onCanceled"])])}var w=t(3672),f=t(159),P=t(9336),C=t(7612),b=t(8776),k=t(2464),x=t(133),A=t(2521),y=t(7023),L=t(6826),I={name:"ParticipantsView",components:{EyeIcon:f.A,PencilSquareIcon:P.A,TrashIcon:C.A,PaginationComponent:b.A,SearchComponent:k.A,HeaderView:w.A,SpinnerComponent:A.A,DeleteConfirmationModal:y.A},data(){return{headerTitle:"Participants",participants:{},isLoading:!0,deleteParticipantId:null,showDeleteModal:!1,currentPage:1,totalPages:"",pageSize:"10",searchPhrase:""}},mounted(){this.getParticipants()},setup(){const e=(0,L.n)(),a=e.permissions;return{permissions:a}},methods:{async getParticipants(){try{const e=await(0,x.Fd)("participants",this.currentPage,this.pageSize,this.searchPhrase);this.participants=e.data,this.totalPages=e.pages,this.isLoading=!1}catch(e){console.error("Error fetching participants:",e),this.isLoading=!1}},async handleSearch(e){this.searchPhrase=e,this.getParticipants()},async handlePageChange(e){this.currentPage=e,this.getParticipants()},async deleteParticipant(e){this.isLoading=!0;try{await(0,x.LD)("participants",e);const a=this.participants.findIndex((a=>a.id===e));-1!==a&&this.participants.splice(a,1),this.showDeleteModal=!1,this.isLoading=!1}catch(a){console.error("Error fetching participants:",a),this.isLoading=!1,this.showDeleteModal=!1}},showDeleteConfirmation(e){this.deleteParticipantId=e,this.showDeleteModal=!0},cancelDelete(){this.showDeleteModal=!1},getRowClass(e){return e%2===0?"bg-st-tropaz-100":"bg-shuttle-gray-50"}}},E=t(1241);const D=(0,E.A)(I,[["render",v]]);var T=D},159:function(e,a,t){t.d(a,{A:function(){return i}});var n=t(6768);function i(e,a){return(0,n.uX)(),(0,n.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,n.Lk)("path",{d:"M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}),(0,n.Lk)("path",{"fill-rule":"evenodd",d:"M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z","clip-rule":"evenodd"})])}},9336:function(e,a,t){t.d(a,{A:function(){return i}});var n=t(6768);function i(e,a){return(0,n.uX)(),(0,n.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,n.Lk)("path",{d:"M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z"}),(0,n.Lk)("path",{d:"M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z"})])}},7612:function(e,a,t){t.d(a,{A:function(){return i}});var n=t(6768);function i(e,a){return(0,n.uX)(),(0,n.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,n.Lk)("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z","clip-rule":"evenodd"})])}}}]);
//# sourceMappingURL=890.c48f8a32.js.map