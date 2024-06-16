"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[269],{3787:function(e,s,t){t.r(s),t.d(s,{default:function(){return A}});var a=t(6768),n=t(4232);const o={class:"flex flex-col space-y-4 flex-1"},r={class:"flex flex-col space-y-4"},i={class:"flex justify-between items-center"},l={key:1,class:"rounded-2xl border border-white-600 shadow-sm p-4 text-abbey-500"},d=(0,a.Fv)('<div class="flex flex-row bg-shuttle-gray-300 p-2 text-sm font-bold"><div class="sm:w-2/12">Firstname</div><div class="sm:w-3/12">Lastname</div><div class="sm:w-2/12">Phone</div><div class="sm:w-3/12">Email</div><div class="sm:w-2/12">Action</div></div>',1),c={class:"sm:w-2/12"},u={class:"sm:w-3/12"},h={class:"sm:w-2/12"},g={class:"sm:w-3/12"},m={class:"flex space-x-2 sm:w-1/12"},w={key:2,class:"p-1 border border-flamingo-600 bg-flamingo-400 rounded-full"};function p(e,s,t,p,f,v){const b=(0,a.g2)("HeaderView"),C=(0,a.g2)("search-component"),k=(0,a.g2)("router-link"),x=(0,a.g2)("SpinnerComponent"),P=(0,a.g2)("EyeIcon"),y=(0,a.g2)("PencilSquareIcon"),E=(0,a.g2)("TrashIcon"),L=(0,a.g2)("pagination-component"),U=(0,a.g2)("delete-confirmation-modal");return(0,a.uX)(),(0,a.CE)("div",o,[(0,a.bF)(b,{headerTitle:f.headerTitle},null,8,["headerTitle"]),(0,a.Lk)("div",r,[(0,a.Lk)("div",i,[(0,a.bF)(C,{onSearch:v.handleSearch},null,8,["onSearch"]),p.permissions.includes("ADD_USER")?((0,a.uX)(),(0,a.Wv)(k,{key:0,to:{name:"AddUser"},class:"mt-2 px-4 py-2 text-white-200 bg-bondi-blue-500 hover:bg-bondi-blue-400 rounded-2xl"},{default:(0,a.k6)((()=>[(0,a.eW)(" Add User")])),_:1})):(0,a.Q3)("",!0)]),f.isLoading?((0,a.uX)(),(0,a.Wv)(x,{key:0})):((0,a.uX)(),(0,a.CE)("div",l,[d,((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(f.users,((e,s)=>((0,a.uX)(),(0,a.CE)("div",{class:(0,n.C4)(["flex flex-row p-2 text-sm items-center",v.getRowClass(s)]),key:e.id},[(0,a.Lk)("div",c,(0,n.v_)(e.firstname),1),(0,a.Lk)("div",u,(0,n.v_)(e.lastname),1),(0,a.Lk)("div",h,(0,n.v_)(e.phone),1),(0,a.Lk)("div",g,(0,n.v_)(e.email),1),(0,a.Lk)("div",m,[p.permissions.includes("VIEW_USER")?((0,a.uX)(),(0,a.Wv)(k,{key:0,class:"p-1 border border-st-tropaz-600 bg-st-tropaz-200 rounded-full",to:{name:"User",params:{id:e.id}}},{default:(0,a.k6)((()=>[(0,a.bF)(P,{class:"w-5 h-5 text-st-tropaz-600"})])),_:2},1032,["to"])):(0,a.Q3)("",!0),p.permissions.includes("UPDATE_USER")?((0,a.uX)(),(0,a.Wv)(k,{key:1,class:"p-1 bg-mountain-meadow-300 border border-mountain-meadow-700 rounded-full",to:{name:"EditUser",params:{id:e.id}}},{default:(0,a.k6)((()=>[(0,a.bF)(y,{class:"w-5 h-5 text-mountain-meadow-900"})])),_:2},1032,["to"])):(0,a.Q3)("",!0),p.permissions.includes("DELETE_USER")?((0,a.uX)(),(0,a.CE)("div",w,[(0,a.bF)(E,{class:"w-5 h-5 text-flamingo-800",onClick:s=>v.showDeleteConfirmation(e.id)},null,8,["onClick"])])):(0,a.Q3)("",!0)])],2)))),128)),(0,a.bF)(L,{currentPage:f.currentPage,totalPages:f.totalPages,onPageChange:v.handlePageChange},null,8,["currentPage","totalPages","onPageChange"])]))]),(0,a.bF)(U,{show:f.showDeleteModal,onConfirmed:s[0]||(s[0]=s=>v.deleteUser(e.deleteUserId)),onCanceled:v.cancelDelete},null,8,["show","onCanceled"])])}var f=t(3672),v=t(159),b=t(9336),C=t(7612),k=t(8776),x=t(2464),P=t(133),y=t(2521),E=t(7023),L=t(6826),U={name:"UsersView",components:{EyeIcon:v.A,PencilSquareIcon:b.A,TrashIcon:C.A,PaginationComponent:k.A,SearchComponent:x.A,HeaderView:f.A,SpinnerComponent:y.A,DeleteConfirmationModal:E.A},data(){return{headerTitle:"System users",users:{},isLoading:!0,showDeleteModal:!1,deletePersonnelId:null,currentPage:1,totalPages:"",pageSize:"10",searchPhrase:""}},mounted(){this.getUsers()},setup(){const e=(0,L.n)(),s=e.permissions;return{permissions:s}},methods:{async getUsers(){try{const e=await(0,P.Fd)("users",this.currentPage,this.pageSize,this.searchPhrase);this.users=e.data,this.totalPages=e.pages,this.isLoading=!1}catch(e){console.error("Error fetching users:",e),this.isLoading=!1}},async handleSearch(e){this.searchPhrase=e,this.getUsers()},async handlePageChange(e){this.currentPage=e,this.getUsers()},async deleteUser(e){this.isLoading=!0;try{await(0,P.LD)("users",e);const s=this.users.findIndex((s=>s.id===e));-1!==s&&this.users.splice(s,1),this.showDeleteModal=!1,this.isLoading=!1}catch(s){console.error("Error fetching users:",s),this.isLoading=!1,this.showDeleteModal=!1}},showDeleteConfirmation(e){this.deleteUserId=e,this.showDeleteModal=!0},cancelDelete(){this.showDeleteModal=!1},getRowClass(e){return e%2===0?"bg-st-tropaz-100":"bg-shuttle-gray-50"}}},D=t(1241);const S=(0,D.A)(U,[["render",p]]);var A=S},159:function(e,s,t){t.d(s,{A:function(){return n}});var a=t(6768);function n(e,s){return(0,a.uX)(),(0,a.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,a.Lk)("path",{d:"M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}),(0,a.Lk)("path",{"fill-rule":"evenodd",d:"M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z","clip-rule":"evenodd"})])}}}]);
//# sourceMappingURL=269.99408ac8.js.map