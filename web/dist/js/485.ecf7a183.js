"use strict";(self["webpackChunkecsaconm_event"]=self["webpackChunkecsaconm_event"]||[]).push([[485],{9162:function(e,o,t){t.d(o,{A:function(){return D}});var r=t(641),l=t(33);const n={class:"flex flex-row p-4 bg-catalina-blue rounded-2xl border-b-4 border-abbey-400"},s={class:"flex flex-row flex-1 justify-between space-x-2 items-center"},a={class:"flex flex-row items-center font-bold space-x-4"},i={class:"sm:text-xl text-md text-abbey-600"},c={class:"flex items-center space-x-4 justify-end"};function d(e,o,t,d,u,p){const b=(0,r.g2)("Bars3CenterLeftIcon"),f=(0,r.g2)("EnvelopeIcon"),m=(0,r.g2)("router-link"),x=(0,r.g2)("ProfileComponent");return(0,r.uX)(),(0,r.CE)("div",n,[(0,r.Lk)("div",s,[(0,r.Lk)("div",a,[(0,r.bF)(b,{class:"h-8 w-8 text-bondi-blue-500"}),(0,r.Lk)("span",i,(0,l.v_)(t.headerTitle),1)]),(0,r.Lk)("div",c,[(0,r.bF)(m,{to:{name:"Contacts"},class:"flex flex-row items-center"},{default:(0,r.k6)((()=>[(0,r.bF)(f,{class:"w-6 h-6 text-bondi-blue-500"})])),_:1}),(0,r.bF)(x,{label:`${e.firstname} ${e.lastname}`},null,8,["label"])])])])}var u=t(2690);function p(e,o){return(0,r.uX)(),(0,r.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,r.Lk)("path",{d:"M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"}),(0,r.Lk)("path",{d:"M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"})])}const b={class:"relative inline-block text-left"},f={class:"text-sm text-catskill-white-500"},m={key:0,class:"origin-top-right absolute right-0 mt-2 w-32 rounded-xl shadow-lg bg-bondi-blue-50"},x={class:"py-2 space-y-2",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"};function h(e,o,t,n,s,a){const i=(0,r.g2)("UserCircleIcon");return(0,r.uX)(),(0,r.CE)("div",b,[(0,r.Lk)("div",{onClick:o[0]||(o[0]=e=>s.isOpen=!s.isOpen),class:"flex flex-row items-center space-x-2 cursor-pointer"},[(0,r.bF)(i,{class:"w-8 h-8 text-bondi-blue-700"}),(0,r.Lk)("span",f,(0,l.v_)(n.loginUser.firstname)+" "+(0,l.v_)(n.loginUser.lastname),1)]),s.isOpen?((0,r.uX)(),(0,r.CE)("div",m,[(0,r.Lk)("div",x,[(0,r.Lk)("a",{onClick:o[1]||(o[1]=(...e)=>a.profile&&a.profile(...e)),class:"block px-4 cursor-pointer text-sm text-gray-700 hover:bg-gray-100",role:"menuitem"}," My profile "),(0,r.Lk)("a",{onClick:o[2]||(o[2]=(...e)=>a.logout&&a.logout(...e)),class:"block px-4 cursor-pointer text-sm text-gray-700 hover:bg-gray-100",role:"menuitem"}," Logout ")])])):(0,r.Q3)("",!0)])}t(4114);var g=t(4814);function k(e,o){return(0,r.uX)(),(0,r.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,r.Lk)("path",{"fill-rule":"evenodd",d:"M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z","clip-rule":"evenodd"})])}var v=t(6826),w={name:"ProfileComponent",components:{UserCircleIcon:k},props:{label:String},data(){return{isOpen:!1}},setup(){const e=(0,v.n)(),o=e.loginUser;return{loginUser:o}},methods:{async profile(){g.A.push("/my-profile/"+this.loginUser.id)},async logout(){localStorage.removeItem("authToken"),g.A.push("/")}}},y=t(6262);const L=(0,y.A)(w,[["render",h]]);var C=L,A={name:"HeaderView",components:{Bars3CenterLeftIcon:u.A,EnvelopeIcon:p,ProfileComponent:C},props:{headerTitle:String}};const E=(0,y.A)(A,[["render",d]]);var D=E},5019:function(e,o,t){t.r(o),t.d(o,{default:function(){return w}});var r=t(641),l=t(3751);const n={class:"flex flex-col space-y-4 flex-1"},s={key:1,class:"rounded-2xl bg-catskill-white-100 shadow-sm p-4"},a={class:"block"},i=(0,r.Lk)("span",{class:"after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"}," Role ",-1),c={class:"block"},d=(0,r.Lk)("span",{class:"after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"}," Description ",-1),u={class:"flex flex-row space-x-4"},p=(0,r.Lk)("button",{type:"submit",class:"mt-2 px-4 py-2 text-white-100 bg-bondi-blue hover:bg-bondi-blue-400 rounded-2xl"}," Add role ",-1);function b(e,o,t,b,f,m){const x=(0,r.g2)("HeaderView"),h=(0,r.g2)("SpinnerComponent"),g=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",n,[(0,r.bF)(x,{headerTitle:f.headerTitle},null,8,["headerTitle"]),f.isLoading?((0,r.uX)(),(0,r.Wv)(h,{key:0})):((0,r.uX)(),(0,r.CE)("div",s,[(0,r.Lk)("form",{class:"flex flex-col sm:w-5/12 w-full space-y-4",onSubmit:o[2]||(o[2]=(0,l.D$)(((...e)=>m.addRole&&m.addRole(...e)),["prevent"])),method:"POST"},[(0,r.Lk)("label",a,[i,(0,r.bo)((0,r.Lk)("input",{type:"input",name:"role","onUpdate:modelValue":o[0]||(o[0]=e=>f.roleData.role=e),class:"mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-abbey-400 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-2xl sm:text-sm focus:ring-1",placeholder:"Role"},null,512),[[l.Jo,f.roleData.role]])]),(0,r.Lk)("label",c,[d,(0,r.bo)((0,r.Lk)("textarea",{name:"description","onUpdate:modelValue":o[1]||(o[1]=e=>f.roleData.description=e),class:"mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-abbey-400 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-2xl sm:text-sm focus:ring-1",placeholder:"Description",required:""},null,512),[[l.Jo,f.roleData.description]])]),(0,r.Lk)("div",u,[p,(0,r.bF)(g,{to:{name:"Roles"},class:"mt-2 px-4 py-2 boder border-2 border-abbey-400 hover:border-abbey-200 rounded-2xl"},{default:(0,r.k6)((()=>[(0,r.eW)("Cancel")])),_:1})])],32)]))])}t(4114);var f=t(133),m=t(9162),x=t(2521),h=t(4814),g={name:"AddRoleView",components:{HeaderView:m.A,SpinnerComponent:x.A},data(){return{headerTitle:"Add roles",roleData:{role:"",description:""},isLoading:!1}},methods:{async addRole(){this.isLoading=!0;try{const e=await(0,f.wE)("roles/",this.roleData);this.roles=e.data,this.isLoading=!1,h.A.push("/roles")}catch(e){console.error("Error fetching roles:",e),this.isLoading=!1}}}},k=t(6262);const v=(0,k.A)(g,[["render",b]]);var w=v}}]);
//# sourceMappingURL=485.ecf7a183.js.map