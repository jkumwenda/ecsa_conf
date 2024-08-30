"use strict";(self["webpackChunkecsaconm_event"]=self["webpackChunkecsaconm_event"]||[]).push([[528],{1980:function(e,s,o){o.r(s),o.d(s,{default:function(){return D}});var l=o(641),t=o(33);const n={class:"flex flex-col space-y-4 flex-1"},a={class:"flex flex-col space-y-4"},r={class:"flex sm:flex-row flex-col sm:justify-between sm:items-center items-start"},i={key:1,class:"rounded-2xl border border-white-600 shadow-sm p-4 text-abbey-500"},d=(0,l.Lk)("div",{class:"flex sm:flex-row flex-col bg-shuttle-gray-300 p-2 text-sm font-bold"},[(0,l.Lk)("div",{class:"sm:w-4/12 w-full"},"Role"),(0,l.Lk)("div",{class:"sm:w-6/12 w-full"},"Description"),(0,l.Lk)("div",{class:"sm:w-2/12 w-full"},"Action")],-1),c={class:"sm:w-4/12 w-full"},h={class:"sm:w-6/12 w-full"},u={class:"flex space-x-2 sm:w-2/12 w-full"},g={key:2,class:"p-1 border border-flamingo-600 bg-flamingo-400 rounded-full"};function m(e,s,o,m,f,w){const p=(0,l.g2)("HeaderView"),b=(0,l.g2)("search-component"),v=(0,l.g2)("router-link"),x=(0,l.g2)("SpinnerComponent"),C=(0,l.g2)("EyeIcon"),k=(0,l.g2)("PencilSquareIcon"),L=(0,l.g2)("TrashIcon"),P=(0,l.g2)("pagination-component"),y=(0,l.g2)("delete-confirmation-modal");return(0,l.uX)(),(0,l.CE)("div",n,[(0,l.bF)(p,{headerTitle:f.headerTitle},null,8,["headerTitle"]),(0,l.Lk)("div",a,[(0,l.Lk)("div",r,[(0,l.bF)(b,{onSearch:w.handleSearch},null,8,["onSearch"]),m.permissions.includes("ADD_ROLE")?((0,l.uX)(),(0,l.Wv)(v,{key:0,to:{name:"AddRole"},class:"mt-2 px-4 py-2 text-white-200 bg-bondi-blue-500 hover:bg-bondi-blue-400 rounded-2xl"},{default:(0,l.k6)((()=>[(0,l.eW)(" Add Role")])),_:1})):(0,l.Q3)("",!0)]),f.isLoading?((0,l.uX)(),(0,l.Wv)(x,{key:0})):((0,l.uX)(),(0,l.CE)("div",i,[d,((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(f.roles,((e,s)=>((0,l.uX)(),(0,l.CE)("div",{class:(0,t.C4)(["flex sm:flex-row flex-col p-2 text-sm items-center",w.getRowClass(s)]),key:e.id},[(0,l.Lk)("div",c,(0,t.v_)(e.role),1),(0,l.Lk)("div",h,(0,t.v_)(e.description),1),(0,l.Lk)("div",u,[m.permissions.includes("VIEW_ROLE")?((0,l.uX)(),(0,l.Wv)(v,{key:0,class:"p-1 border border-st-tropaz-600 bg-st-tropaz-200 rounded-full",to:{name:"Role",params:{id:e.id}}},{default:(0,l.k6)((()=>[(0,l.bF)(C,{class:"w-5 h-5 text-st-tropaz-600"})])),_:2},1032,["to"])):(0,l.Q3)("",!0),m.permissions.includes("UPDATE_ROLE")?((0,l.uX)(),(0,l.Wv)(v,{key:1,class:"p-1 bg-mountain-meadow-300 border border-mountain-meadow-700 rounded-full",to:{name:"EditRole",params:{id:e.id}}},{default:(0,l.k6)((()=>[(0,l.bF)(k,{class:"w-5 h-5 text-mountain-meadow-900"})])),_:2},1032,["to"])):(0,l.Q3)("",!0),m.permissions.includes("DELETE_ROLE")?((0,l.uX)(),(0,l.CE)("div",g,[(0,l.bF)(L,{class:"w-5 h-5 text-flamingo-800",onClick:s=>w.showDeleteConfirmation(e.id)},null,8,["onClick"])])):(0,l.Q3)("",!0)])],2)))),128)),(0,l.bF)(P,{currentPage:f.currentPage,totalPages:f.totalPages,onPageChange:w.handlePageChange},null,8,["currentPage","totalPages","onPageChange"])]))]),(0,l.bF)(y,{show:f.showDeleteModal,onConfirmed:s[0]||(s[0]=s=>w.deleteRole(e.deleteRoleId)),onCanceled:w.cancelDelete},null,8,["show","onCanceled"])])}var f=o(9162),w=o(4056),p=o(7561),b=o(9235),v=o(6695),x=o(9288),C=o(133),k=o(2521),L=o(7023),P=o(6826),y={name:"RolesView",components:{EyeIcon:w.A,PencilSquareIcon:p.A,TrashIcon:b.A,PaginationComponent:v.A,SearchComponent:x.A,HeaderView:f.A,SpinnerComponent:k.A,DeleteConfirmationModal:L.A},data(){return{headerTitle:"Roles",roles:{},isLoading:!0,showDeleteModal:!1,deletePersonnelId:null,currentPage:1,totalPages:"",pageSize:"10",searchPhrase:""}},mounted(){this.getRoles()},setup(){const e=(0,P.n)(),s=e.permissions;return{permissions:s}},methods:{async getRoles(){try{const e=await(0,C.Fd)("roles",this.currentPage,this.pageSize,this.searchPhrase);this.roles=e.data,this.totalPages=e.pages,this.isLoading=!1}catch(e){console.error("Error fetching roles:",e),this.isLoading=!1}},async handleSearch(e){this.searchPhrase=e,this.getRoles()},async handlePageChange(e){this.currentPage=e,this.getRoles()},async deleteRole(e){this.isLoading=!0;try{await(0,C.LD)("roles",e);const s=this.roles.findIndex((s=>s.id===e));-1!==s&&this.roles.splice(s,1),this.showDeleteModal=!1,this.isLoading=!1}catch(s){console.error("Error fetching roles:",s),this.isLoading=!1,this.showDeleteModal=!1}},showDeleteConfirmation(e){this.deleteRoleId=e,this.showDeleteModal=!0},cancelDelete(){this.showDeleteModal=!1},getRowClass(e){return e%2===0?"bg-st-tropaz-100":"bg-shuttle-gray-50"}}},R=o(6262);const E=(0,R.A)(y,[["render",m]]);var D=E},4056:function(e,s,o){o.d(s,{A:function(){return t}});var l=o(641);function t(e,s){return(0,l.uX)(),(0,l.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,l.Lk)("path",{d:"M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}),(0,l.Lk)("path",{"fill-rule":"evenodd",d:"M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z","clip-rule":"evenodd"})])}}}]);
//# sourceMappingURL=528.de847e28.js.map