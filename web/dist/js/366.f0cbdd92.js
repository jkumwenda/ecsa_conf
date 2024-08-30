"use strict";(self["webpackChunkecsaconm_event"]=self["webpackChunkecsaconm_event"]||[]).push([[366],{9162:function(e,r,t){t.d(r,{A:function(){return E}});var o=t(641),n=t(33);const s={class:"flex flex-row p-4 bg-catalina-blue rounded-2xl border-b-4 border-abbey-400"},a={class:"flex flex-row flex-1 justify-between space-x-2 items-center"},l={class:"flex flex-row items-center font-bold space-x-4"},i={class:"sm:text-xl text-md text-abbey-600"},c={class:"flex items-center space-x-4 justify-end"};function d(e,r,t,d,u,p){const b=(0,o.g2)("Bars3CenterLeftIcon"),g=(0,o.g2)("EnvelopeIcon"),f=(0,o.g2)("router-link"),m=(0,o.g2)("ProfileComponent");return(0,o.uX)(),(0,o.CE)("div",s,[(0,o.Lk)("div",a,[(0,o.Lk)("div",l,[(0,o.bF)(b,{class:"h-8 w-8 text-bondi-blue-500"}),(0,o.Lk)("span",i,(0,n.v_)(t.headerTitle),1)]),(0,o.Lk)("div",c,[(0,o.bF)(f,{to:{name:"Contacts"},class:"flex flex-row items-center"},{default:(0,o.k6)((()=>[(0,o.bF)(g,{class:"w-6 h-6 text-bondi-blue-500"})])),_:1}),(0,o.bF)(m,{label:`${e.firstname} ${e.lastname}`},null,8,["label"])])])])}var u=t(2690);function p(e,r){return(0,o.uX)(),(0,o.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,o.Lk)("path",{d:"M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"}),(0,o.Lk)("path",{d:"M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"})])}const b={class:"relative inline-block text-left"},g={class:"text-sm text-catskill-white-500"},f={key:0,class:"origin-top-right absolute right-0 mt-2 w-32 rounded-xl shadow-lg bg-bondi-blue-50"},m={class:"py-2 space-y-2",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"};function x(e,r,t,s,a,l){const i=(0,o.g2)("UserCircleIcon");return(0,o.uX)(),(0,o.CE)("div",b,[(0,o.Lk)("div",{onClick:r[0]||(r[0]=e=>a.isOpen=!a.isOpen),class:"flex flex-row items-center space-x-2 cursor-pointer"},[(0,o.bF)(i,{class:"w-8 h-8 text-bondi-blue-700"}),(0,o.Lk)("span",g,(0,n.v_)(s.loginUser.firstname)+" "+(0,n.v_)(s.loginUser.lastname),1)]),a.isOpen?((0,o.uX)(),(0,o.CE)("div",f,[(0,o.Lk)("div",m,[(0,o.Lk)("a",{onClick:r[1]||(r[1]=(...e)=>l.profile&&l.profile(...e)),class:"block px-4 cursor-pointer text-sm text-gray-700 hover:bg-gray-100",role:"menuitem"}," My profile "),(0,o.Lk)("a",{onClick:r[2]||(r[2]=(...e)=>l.logout&&l.logout(...e)),class:"block px-4 cursor-pointer text-sm text-gray-700 hover:bg-gray-100",role:"menuitem"}," Logout ")])])):(0,o.Q3)("",!0)])}t(4114);var h=t(4814);function k(e,r){return(0,o.uX)(),(0,o.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,o.Lk)("path",{"fill-rule":"evenodd",d:"M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z","clip-rule":"evenodd"})])}var v=t(6826),w={name:"ProfileComponent",components:{UserCircleIcon:k},props:{label:String},data(){return{isOpen:!1}},setup(){const e=(0,v.n)(),r=e.loginUser;return{loginUser:r}},methods:{async profile(){h.A.push("/my-profile/"+this.loginUser.id)},async logout(){localStorage.removeItem("authToken"),h.A.push("/")}}},y=t(6262);const L=(0,y.A)(w,[["render",x]]);var C=L,A={name:"HeaderView",components:{Bars3CenterLeftIcon:u.A,EnvelopeIcon:p,ProfileComponent:C},props:{headerTitle:String}};const O=(0,y.A)(A,[["render",d]]);var E=O},4022:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var o=t(641),n=t(3751);const s={class:"flex flex-col space-y-4 flex-1"},a={key:1,class:"rounded-2xl bg-catskill-white-100 shadow-sm p-4"},l={class:"block"},i=(0,o.Lk)("span",{class:"after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"}," Organiser ",-1),c={class:"block"},d=(0,o.Lk)("span",{class:"after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"}," Description ",-1),u={class:"flex flex-row space-x-4"},p=(0,o.Lk)("button",{type:"submit",class:"mt-2 px-4 py-2 text-white-100 bg-bondi-blue hover:bg-bondi-blue-400 rounded-2xl"}," Add organiser ",-1);function b(e,r,t,b,g,f){const m=(0,o.g2)("HeaderView"),x=(0,o.g2)("SpinnerComponent"),h=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",s,[(0,o.bF)(m,{headerTitle:g.headerTitle},null,8,["headerTitle"]),g.isLoading?((0,o.uX)(),(0,o.Wv)(x,{key:0})):((0,o.uX)(),(0,o.CE)("div",a,[(0,o.Lk)("form",{class:"flex flex-col sm:w-5/12 w-full space-y-4",onSubmit:r[2]||(r[2]=(0,n.D$)(((...e)=>f.addOrganiser&&f.addOrganiser(...e)),["prevent"])),method:"POST"},[(0,o.Lk)("label",l,[i,(0,o.bo)((0,o.Lk)("input",{type:"input",name:"organiser","onUpdate:modelValue":r[0]||(r[0]=e=>g.organiserData.organiser=e),class:"mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-abbey-400 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-2xl sm:text-sm focus:ring-1",placeholder:"Organiser"},null,512),[[n.Jo,g.organiserData.organiser]])]),(0,o.Lk)("label",c,[d,(0,o.bo)((0,o.Lk)("textarea",{name:"description","onUpdate:modelValue":r[1]||(r[1]=e=>g.organiserData.description=e),class:"mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-abbey-400 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-2xl sm:text-sm focus:ring-1",placeholder:"Description",required:""},null,512),[[n.Jo,g.organiserData.description]])]),(0,o.Lk)("div",u,[p,(0,o.bF)(h,{to:{name:"Organisers"},class:"mt-2 px-4 py-2 boder border-2 border-abbey-400 hover:border-abbey-200 rounded-2xl"},{default:(0,o.k6)((()=>[(0,o.eW)("Cancel")])),_:1})])],32)]))])}t(4114);var g=t(133),f=t(9162),m=t(2521),x=t(4814),h={name:"AddOrganiserView",components:{HeaderView:f.A,SpinnerComponent:m.A},data(){return{headerTitle:"Add organisers",organiserData:{organiser:"",description:""},isLoading:!1}},methods:{async addOrganiser(){this.isLoading=!0;try{const e=await(0,g.wE)("organisers/",this.organiserData);this.organisers=e.data,this.isLoading=!1,x.A.push("/organisers")}catch(e){console.error("Error fetching organisers:",e),this.isLoading=!1}}}},k=t(6262);const v=(0,k.A)(h,[["render",b]]);var w=v}}]);
//# sourceMappingURL=366.f0cbdd92.js.map