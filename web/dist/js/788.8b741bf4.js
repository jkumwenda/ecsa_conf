"use strict";(self["webpackChunkecsaconm_event"]=self["webpackChunkecsaconm_event"]||[]).push([[788],{9162:function(e,r,t){t.d(r,{A:function(){return O}});var o=t(641),s=t(33);const n={class:"flex flex-row p-4 bg-catalina-blue rounded-2xl border-b-4 border-abbey-400"},a={class:"flex flex-row flex-1 justify-between space-x-2 items-center"},i={class:"flex flex-row items-center font-bold space-x-4"},l={class:"sm:text-xl text-md text-abbey-600"},c={class:"flex items-center space-x-4 justify-end"};function d(e,r,t,d,u,g){const p=(0,o.g2)("Bars3CenterLeftIcon"),b=(0,o.g2)("EnvelopeIcon"),m=(0,o.g2)("router-link"),f=(0,o.g2)("ProfileComponent");return(0,o.uX)(),(0,o.CE)("div",n,[(0,o.Lk)("div",a,[(0,o.Lk)("div",i,[(0,o.bF)(p,{class:"h-8 w-8 text-bondi-blue-500"}),(0,o.Lk)("span",l,(0,s.v_)(t.headerTitle),1)]),(0,o.Lk)("div",c,[(0,o.bF)(m,{to:{name:"Contacts"},class:"flex flex-row items-center"},{default:(0,o.k6)((()=>[(0,o.bF)(b,{class:"w-6 h-6 text-bondi-blue-500"})])),_:1}),(0,o.bF)(f,{label:`${e.firstname} ${e.lastname}`},null,8,["label"])])])])}var u=t(2690);function g(e,r){return(0,o.uX)(),(0,o.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,o.Lk)("path",{d:"M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"}),(0,o.Lk)("path",{d:"M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"})])}const p={class:"relative inline-block text-left"},b={class:"text-sm text-catskill-white-500"},m={key:0,class:"origin-top-right absolute right-0 mt-2 w-32 rounded-xl shadow-lg bg-bondi-blue-50"},f={class:"py-2 space-y-2",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"};function x(e,r,t,n,a,i){const l=(0,o.g2)("UserCircleIcon");return(0,o.uX)(),(0,o.CE)("div",p,[(0,o.Lk)("div",{onClick:r[0]||(r[0]=e=>a.isOpen=!a.isOpen),class:"flex flex-row items-center space-x-2 cursor-pointer"},[(0,o.bF)(l,{class:"w-8 h-8 text-bondi-blue-700"}),(0,o.Lk)("span",b,(0,s.v_)(n.loginUser.firstname)+" "+(0,s.v_)(n.loginUser.lastname),1)]),a.isOpen?((0,o.uX)(),(0,o.CE)("div",m,[(0,o.Lk)("div",f,[(0,o.Lk)("a",{onClick:r[1]||(r[1]=(...e)=>i.profile&&i.profile(...e)),class:"block px-4 cursor-pointer text-sm text-gray-700 hover:bg-gray-100",role:"menuitem"}," My profile "),(0,o.Lk)("a",{onClick:r[2]||(r[2]=(...e)=>i.logout&&i.logout(...e)),class:"block px-4 cursor-pointer text-sm text-gray-700 hover:bg-gray-100",role:"menuitem"}," Logout ")])])):(0,o.Q3)("",!0)])}t(4114);var h=t(4326);function k(e,r){return(0,o.uX)(),(0,o.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,o.Lk)("path",{"fill-rule":"evenodd",d:"M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z","clip-rule":"evenodd"})])}var v=t(6826),w={name:"ProfileComponent",components:{UserCircleIcon:k},props:{label:String},data(){return{isOpen:!1}},setup(){const e=(0,v.n)(),r=e.loginUser;return{loginUser:r}},methods:{async profile(){h.A.push("/my-profile/"+this.loginUser.id)},async logout(){localStorage.removeItem("authToken"),h.A.push("/")}}},y=t(6262);const L=(0,y.A)(w,[["render",x]]);var C=L,A={name:"HeaderView",components:{Bars3CenterLeftIcon:u.A,EnvelopeIcon:g,ProfileComponent:C},props:{headerTitle:String}};const E=(0,y.A)(A,[["render",d]]);var O=E},9032:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var o=t(641),s=t(3751);const n={class:"flex flex-col space-y-4 flex-1"},a={key:1,class:"rounded-2xl bg-catskill-white-100 shadow-sm p-4"},i={class:"block"},l=(0,o.Lk)("span",{class:"after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"}," Organiser ",-1),c={class:"block"},d=(0,o.Lk)("span",{class:"after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"}," Description ",-1),u={class:"flex flex-row space-x-4"},g=(0,o.Lk)("button",{type:"submit",class:"mt-2 px-4 py-2 text-white-100 bg-bondi-blue hover:bg-bondi-blue-400 rounded-2xl"}," Edit organiser ",-1);function p(e,r,t,p,b,m){const f=(0,o.g2)("HeaderView"),x=(0,o.g2)("SpinnerComponent"),h=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",n,[(0,o.bF)(f,{headerTitle:b.headerTitle},null,8,["headerTitle"]),b.isLoading?((0,o.uX)(),(0,o.Wv)(x,{key:0})):((0,o.uX)(),(0,o.CE)("div",a,[(0,o.Lk)("form",{class:"flex flex-col w-5/12 space-y-4",onSubmit:r[2]||(r[2]=(0,s.D$)(((...e)=>m.editOrganiser&&m.editOrganiser(...e)),["prevent"])),method:"POST"},[(0,o.Lk)("label",i,[l,(0,o.bo)((0,o.Lk)("input",{type:"input",name:"organiser","onUpdate:modelValue":r[0]||(r[0]=e=>b.organiserData.organiser=e),class:"mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1",placeholder:"Organiser",required:""},null,512),[[s.Jo,b.organiserData.organiser]])]),(0,o.Lk)("label",c,[d,(0,o.bo)((0,o.Lk)("textarea",{name:"description","onUpdate:modelValue":r[1]||(r[1]=e=>b.organiserData.description=e),class:"mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1",placeholder:"Description",required:""},null,512),[[s.Jo,b.organiserData.description]])]),(0,o.Lk)("div",u,[g,(0,o.bF)(h,{to:{name:"Organisers"},class:"mt-2 px-4 py-2 boder border-2 border-abbey-400 hover:border-abbey-200 rounded-2xl"},{default:(0,o.k6)((()=>[(0,o.eW)("Cancel")])),_:1})])],32)]))])}t(4114);var b=t(133),m=t(9162),f=t(2521),x=t(4326),h={name:"EditOrganiserView",components:{HeaderView:m.A,SpinnerComponent:f.A},data(){return{headerTitle:"Edit organiser",id:this.$route.params.id,organiserData:{organiser:"",description:""},isLoading:!1,organiser:{}}},mounted(){this.getOrganiser()},methods:{async editOrganiser(){this.isLoading=!0;try{const e=await(0,b.fk)("organisers",this.id,this.organiserData);this.organiser=e.data,this.isLoading=!1,x.A.push("/organisers")}catch(e){console.error("Error adding organiser:",e),this.isLoading=!1}},async getOrganiser(){try{const e=await(0,b.Gk)("organisers",this.id);console.log(e),this.organiserData.organiser=e.organiser.organiser,this.organiserData.description=e.organiser.description,this.isLoading=!1}catch(e){console.error("Error fetching organiser:",e),this.isLoading=!1}}}},k=t(6262);const v=(0,k.A)(h,[["render",p]]);var w=v}}]);
//# sourceMappingURL=788.8b741bf4.js.map