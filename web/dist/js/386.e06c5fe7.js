"use strict";(self["webpackChunkecsaconm_event"]=self["webpackChunkecsaconm_event"]||[]).push([[386],{2146:function(e,s,t){t.r(s),t.d(s,{default:function(){return _}});var a=t(641),n=t(33);const l={class:"flex flex-col space-y-4 flex-1"},o={class:"flex flex-col space-y-4"},r={class:"flex sm:flex-row flex-col sm:justify-between sm:items-center items-start"},i={key:1,class:"rounded-2xl border border-white-600 shadow-sm p-4 text-abbey-500"},d=(0,a.Fv)('<div class="flex sm:flex-row flex-col bg-shuttle-gray-300 p-2 text-sm font-bold"><div class="sm:w-2/12 w-full">Firstname</div><div class="sm:w-3/12 w-full">Lastname</div><div class="sm:w-2/12 w-full">Phone</div><div class="sm:w-3/12 w-full">Email</div><div class="sm:w-1/12 w-full">Action</div></div>',1),c={class:"sm:w-2/12 w-full"},u={class:"uppercase"},h={class:"sm:w-3/12 w-full"},m={class:"sm:w-2/12 w-full"},g={class:"sm:w-3/12 w-full"},w={class:"flex space-x-2 sm:w-1/12 w-full"},f={key:2,class:"p-1 border border-flamingo-600 bg-flamingo-400 rounded-full"};function p(e,s,t,p,v,b){const x=(0,a.g2)("HeaderView"),C=(0,a.g2)("search-component"),k=(0,a.g2)("router-link"),P=(0,a.g2)("SpinnerComponent"),y=(0,a.g2)("EyeIcon"),E=(0,a.g2)("PencilSquareIcon"),L=(0,a.g2)("TrashIcon"),U=(0,a.g2)("pagination-component"),D=(0,a.g2)("delete-confirmation-modal");return(0,a.uX)(),(0,a.CE)("div",l,[(0,a.bF)(x,{headerTitle:v.headerTitle},null,8,["headerTitle"]),(0,a.Lk)("div",o,[(0,a.Lk)("div",r,[(0,a.bF)(C,{onSearch:b.handleSearch},null,8,["onSearch"]),p.permissions.includes("ADD_USER")?((0,a.uX)(),(0,a.Wv)(k,{key:0,to:{name:"AddUser"},class:"mt-2 px-4 py-2 text-white-200 bg-bondi-blue-500 hover:bg-bondi-blue-400 rounded-2xl"},{default:(0,a.k6)((()=>[(0,a.eW)(" Add User")])),_:1})):(0,a.Q3)("",!0)]),v.isLoading?((0,a.uX)(),(0,a.Wv)(P,{key:0})):((0,a.uX)(),(0,a.CE)("div",i,[d,((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(v.users,((e,s)=>((0,a.uX)(),(0,a.CE)("div",{class:(0,n.C4)(["flex sm:flex-row flex-col p-2 text-sm items-center",b.getRowClass(s)]),key:e.id},[(0,a.Lk)("div",c,[(0,a.Lk)("span",u,(0,n.v_)(e.firstname),1)]),(0,a.Lk)("div",h,(0,n.v_)(e.lastname),1),(0,a.Lk)("div",m,(0,n.v_)(e.phone),1),(0,a.Lk)("div",g,(0,n.v_)(e.email),1),(0,a.Lk)("div",w,[p.permissions.includes("VIEW_USER")?((0,a.uX)(),(0,a.Wv)(k,{key:0,class:"p-1 border border-st-tropaz-600 bg-st-tropaz-200 rounded-full",to:{name:"User",params:{id:e.id}}},{default:(0,a.k6)((()=>[(0,a.bF)(y,{class:"w-5 h-5 text-st-tropaz-600"})])),_:2},1032,["to"])):(0,a.Q3)("",!0),p.permissions.includes("UPDATE_USER")?((0,a.uX)(),(0,a.Wv)(k,{key:1,class:"p-1 bg-mountain-meadow-300 border border-mountain-meadow-700 rounded-full",to:{name:"EditUser",params:{id:e.id}}},{default:(0,a.k6)((()=>[(0,a.bF)(E,{class:"w-5 h-5 text-mountain-meadow-900"})])),_:2},1032,["to"])):(0,a.Q3)("",!0),p.permissions.includes("DELETE_USER")?((0,a.uX)(),(0,a.CE)("div",f,[(0,a.bF)(L,{class:"w-5 h-5 text-flamingo-800",onClick:s=>b.showDeleteConfirmation(e.id)},null,8,["onClick"])])):(0,a.Q3)("",!0)])],2)))),128)),(0,a.bF)(U,{currentPage:v.currentPage,totalPages:v.totalPages,onPageChange:b.handlePageChange},null,8,["currentPage","totalPages","onPageChange"])]))]),(0,a.bF)(D,{show:v.showDeleteModal,onConfirmed:s[0]||(s[0]=s=>b.deleteUser(e.deleteUserId)),onCanceled:b.cancelDelete},null,8,["show","onCanceled"])])}var v=t(9162),b=t(4056),x=t(7561),C=t(9235),k=t(6695),P=t(9288),y=t(133),E=t(2521),L=t(7023),U=t(6826),D={name:"UsersView",components:{EyeIcon:b.A,PencilSquareIcon:x.A,TrashIcon:C.A,PaginationComponent:k.A,SearchComponent:P.A,HeaderView:v.A,SpinnerComponent:E.A,DeleteConfirmationModal:L.A},data(){return{headerTitle:"System users",users:{},isLoading:!0,showDeleteModal:!1,deletePersonnelId:null,currentPage:1,totalPages:"",pageSize:"10",searchPhrase:""}},mounted(){this.getUsers()},setup(){const e=(0,U.n)(),s=e.permissions;return{permissions:s}},methods:{async getUsers(){try{const e=await(0,y.Fd)("users",this.currentPage,this.pageSize,this.searchPhrase);this.users=e.data,this.totalPages=e.pages,this.isLoading=!1}catch(e){console.error("Error fetching users:",e),this.isLoading=!1}},async handleSearch(e){this.searchPhrase=e,this.getUsers()},async handlePageChange(e){this.currentPage=e,this.getUsers()},async deleteUser(e){this.isLoading=!0;try{await(0,y.LD)("users",e);const s=this.users.findIndex((s=>s.id===e));-1!==s&&this.users.splice(s,1),this.showDeleteModal=!1,this.isLoading=!1}catch(s){console.error("Error fetching users:",s),this.isLoading=!1,this.showDeleteModal=!1}},showDeleteConfirmation(e){this.deleteUserId=e,this.showDeleteModal=!0},cancelDelete(){this.showDeleteModal=!1},getRowClass(e){return e%2===0?"bg-st-tropaz-100":"bg-shuttle-gray-50"}}},S=t(6262);const A=(0,S.A)(D,[["render",p]]);var _=A},4056:function(e,s,t){t.d(s,{A:function(){return n}});var a=t(641);function n(e,s){return(0,a.uX)(),(0,a.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,a.Lk)("path",{d:"M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}),(0,a.Lk)("path",{"fill-rule":"evenodd",d:"M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z","clip-rule":"evenodd"})])}}}]);
//# sourceMappingURL=386.e06c5fe7.js.map