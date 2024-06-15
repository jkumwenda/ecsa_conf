"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[779],{2341:function(e,t,n){n.r(t),n.d(t,{default:function(){return X}});var s=n(6768),a=n(4232);const o={class:"flex flex-col space-y-4 flex-1"},l={class:"flex flex-col space-y-4"},i={class:"flex justify-between items-center"},r={key:1,class:"rounded-2xl border border-white-600 shadow-sm text-abbey-500"},d={class:"flex"},c={class:"flex flex-col flex-1 m-4 text-sm rounded-2xl border-2 border-bondi-blue-500"},u={class:"bg-bondi-blue-500 rounded-b-xl"},h={class:"flex flex-col space-y-2 text-white font-roboto-thin border-b border-bondi-blue-400 p-3"},g={class:"flex flex-row items-center space-x-3",title:"Event date"},v={class:"flex flex-row items-center space-x-3",title:"Location"},p={class:"flex flex-row items-center space-x-3",title:"Organiser"},b={class:"flex space-x-2 px-4 p-1 font-semibold font-roboto-thin sm:w-2/12"},f=["onClick"],m={class:"px-4"};function x(e,t,n,x,w,E){const k=(0,s.g2)("HeaderView"),C=(0,s.g2)("search-component"),L=(0,s.g2)("router-link"),P=(0,s.g2)("SpinnerComponent"),y=(0,s.g2)("CalendarDaysIcon"),D=(0,s.g2)("MapPinIcon"),A=(0,s.g2)("UserIcon"),M=(0,s.g2)("pagination-component"),I=(0,s.g2)("delete-confirmation-modal");return(0,s.uX)(),(0,s.CE)("div",o,[(0,s.bF)(k,{headerTitle:w.headerTitle},null,8,["headerTitle"]),(0,s.Lk)("div",l,[(0,s.Lk)("div",i,[(0,s.bF)(C,{onSearch:E.handleSearch},null,8,["onSearch"]),x.permissions.includes("ADD_EVENT")?((0,s.uX)(),(0,s.Wv)(L,{key:0,to:{name:"AddEvent"},class:"mt-2 px-4 py-2 text-white-200 bg-bondi-blue-500 hover:bg-bondi-blue-400 rounded-2xl"},{default:(0,s.k6)((()=>[(0,s.eW)(" Add Event")])),_:1})):(0,s.Q3)("",!0)]),w.isLoading?((0,s.uX)(),(0,s.Wv)(P,{key:0})):((0,s.uX)(),(0,s.CE)("div",r,[(0,s.Lk)("div",d,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(w.events,(e=>((0,s.uX)(),(0,s.CE)("div",{class:"sm:w-4/12",key:e.id},[(0,s.Lk)("div",c,[(0,s.bF)(L,{to:{name:"Event",params:{id:e.id}},class:"p-3",title:"Event"},{default:(0,s.k6)((()=>[(0,s.Lk)("div",null,(0,a.v_)(e.event),1)])),_:2},1032,["to"]),(0,s.Lk)("div",u,[(0,s.Lk)("div",h,[(0,s.Lk)("div",g,[(0,s.bF)(y,{class:"w-5 h-5 text-bondi-blue-50"}),(0,s.Lk)("span",null,(0,a.v_)(e.start_date),1)]),(0,s.Lk)("div",v,[(0,s.bF)(D,{class:"w-5 h-5 text-bondi-blue-50"}),(0,s.Lk)("span",null,(0,a.v_)(e.location),1)]),(0,s.Lk)("div",p,[(0,s.bF)(A,{class:"w-5 h-5 text-bondi-blue-50"}),(0,s.Lk)("span",null,(0,a.v_)(e.organiser.organiser),1)])]),(0,s.Lk)("div",b,[x.permissions.includes("UPDATE_EVENT")?((0,s.uX)(),(0,s.Wv)(L,{key:0,title:"Edit",class:"p-1 px-3 text-mountain-meadow-900 bg-mountain-meadow-300 border border-mountain-meadow-800 rounded-xl",to:{name:"EditEvent",params:{id:e.id}}},{default:(0,s.k6)((()=>[(0,s.eW)("Edit ")])),_:2},1032,["to"])):(0,s.Q3)("",!0),x.permissions.includes("DELETE_EVENT")?((0,s.uX)(),(0,s.CE)("div",{key:1,title:"Delete",onClick:t=>E.showDeleteConfirmation(e.id),class:"p-1 px-3 border text-flamingo-900 border-flamingo-700 bg-flamingo-400 rounded-xl cursor-pointer"}," Delete ",8,f)):(0,s.Q3)("",!0)])])])])))),128))]),(0,s.Lk)("div",m,[(0,s.bF)(M,{currentPage:w.currentPage,totalPages:w.totalPages,onPageChange:E.handlePageChange},null,8,["currentPage","totalPages","onPageChange"])])]))]),(0,s.bF)(I,{show:w.showDeleteModal,onConfirmed:t[0]||(t[0]=e=>E.deleteEvent(w.deleteEventId)),onCanceled:E.cancelDelete},null,8,["show","onCanceled"])])}var w=n(3672),E=n(1663),k=n(1839);function C(e,t){return(0,s.uX)(),(0,s.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,s.Lk)("path",{"fill-rule":"evenodd",d:"M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z","clip-rule":"evenodd"})])}var L=n(8776),P=n(2464),y=n(133),D=n(2521),A=n(7023),M=n(6826),I={name:"EventsView",components:{MapPinIcon:E.A,CalendarDaysIcon:k.A,UserIcon:C,PaginationComponent:L.A,SearchComponent:P.A,HeaderView:w.A,SpinnerComponent:D.A,DeleteConfirmationModal:A.A},data(){return{headerTitle:"Events",events:{},isLoading:!0,showDeleteModal:!1,deleteEventId:null,currentPage:1,totalPages:"",pageSize:"10",searchPhrase:""}},mounted(){this.getEvents()},setup(){const e=(0,M.n)(),t=e.permissions;return{permissions:t}},methods:{async getEvents(){try{const e=await(0,y.Fd)("events",this.currentPage,this.pageSize,this.searchPhrase);this.events=e.data,this.totalPages=e.pages,this.isLoading=!1}catch(e){console.error("Error fetching events:",e),this.isLoading=!1}},async handleSearch(e){this.searchPhrase=e,this.getEvents()},async handlePageChange(e){this.currentPage=e,this.getEvents()},async deleteEvent(e){this.isLoading=!0;try{await(0,y.LD)("events",e);const t=this.events.findIndex((t=>t.id===e));-1!==t&&this.events.splice(t,1),this.showDeleteModal=!1,this.isLoading=!1}catch(t){console.error("Error fetching events:",t),this.isLoading=!1,this.showDeleteModal=!1}},showDeleteConfirmation(e){this.deleteEventId=e,this.showDeleteModal=!0},cancelDelete(){this.showDeleteModal=!1},getRowClass(e){return e%2===0?"bg-st-tropaz-100":"bg-shuttle-gray-50"}}},_=n(1241);const F=(0,_.A)(I,[["render",x]]);var X=F},1663:function(e,t,n){n.d(t,{A:function(){return a}});var s=n(6768);function a(e,t){return(0,s.uX)(),(0,s.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,s.Lk)("path",{"fill-rule":"evenodd",d:"m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z","clip-rule":"evenodd"})])}}}]);
//# sourceMappingURL=779.08c34a4f.js.map