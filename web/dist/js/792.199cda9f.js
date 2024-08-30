"use strict";(self["webpackChunkecsaconm_event"]=self["webpackChunkecsaconm_event"]||[]).push([[792],{9162:function(e,t,n){n.d(t,{A:function(){return O}});var o=n(641),a=n(33);const l={class:"flex flex-row p-4 bg-catalina-blue rounded-2xl border-b-4 border-abbey-400"},s={class:"flex flex-row flex-1 justify-between space-x-2 items-center"},r={class:"flex flex-row items-center font-bold space-x-4"},i={class:"sm:text-xl text-md text-abbey-600"},c={class:"flex items-center space-x-4 justify-end"};function p(e,t,n,p,d,u){const f=(0,o.g2)("Bars3CenterLeftIcon"),x=(0,o.g2)("EnvelopeIcon"),m=(0,o.g2)("router-link"),b=(0,o.g2)("ProfileComponent");return(0,o.uX)(),(0,o.CE)("div",l,[(0,o.Lk)("div",s,[(0,o.Lk)("div",r,[(0,o.bF)(f,{class:"h-8 w-8 text-bondi-blue-500"}),(0,o.Lk)("span",i,(0,a.v_)(n.headerTitle),1)]),(0,o.Lk)("div",c,[(0,o.bF)(m,{to:{name:"Contacts"},class:"flex flex-row items-center"},{default:(0,o.k6)((()=>[(0,o.bF)(x,{class:"w-6 h-6 text-bondi-blue-500"})])),_:1}),(0,o.bF)(b,{label:`${e.firstname} ${e.lastname}`},null,8,["label"])])])])}var d=n(2690);function u(e,t){return(0,o.uX)(),(0,o.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,o.Lk)("path",{d:"M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"}),(0,o.Lk)("path",{d:"M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"})])}const f={class:"relative inline-block text-left"},x={class:"text-sm text-catskill-white-500"},m={key:0,class:"origin-top-right absolute right-0 mt-2 w-32 rounded-xl shadow-lg bg-bondi-blue-50"},b={class:"py-2 space-y-2",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"};function h(e,t,n,l,s,r){const i=(0,o.g2)("UserCircleIcon");return(0,o.uX)(),(0,o.CE)("div",f,[(0,o.Lk)("div",{onClick:t[0]||(t[0]=e=>s.isOpen=!s.isOpen),class:"flex flex-row items-center space-x-2 cursor-pointer"},[(0,o.bF)(i,{class:"w-8 h-8 text-bondi-blue-700"}),(0,o.Lk)("span",x,(0,a.v_)(l.loginUser.firstname)+" "+(0,a.v_)(l.loginUser.lastname),1)]),s.isOpen?((0,o.uX)(),(0,o.CE)("div",m,[(0,o.Lk)("div",b,[(0,o.Lk)("a",{onClick:t[1]||(t[1]=(...e)=>r.profile&&r.profile(...e)),class:"block px-4 cursor-pointer text-sm text-gray-700 hover:bg-gray-100",role:"menuitem"}," My profile "),(0,o.Lk)("a",{onClick:t[2]||(t[2]=(...e)=>r.logout&&r.logout(...e)),class:"block px-4 cursor-pointer text-sm text-gray-700 hover:bg-gray-100",role:"menuitem"}," Logout ")])])):(0,o.Q3)("",!0)])}n(4114);var v=n(4814);function g(e,t){return(0,o.uX)(),(0,o.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,o.Lk)("path",{"fill-rule":"evenodd",d:"M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z","clip-rule":"evenodd"})])}var k=n(6826),w={name:"ProfileComponent",components:{UserCircleIcon:g},props:{label:String},data(){return{isOpen:!1}},setup(){const e=(0,k.n)(),t=e.loginUser;return{loginUser:t}},methods:{async profile(){v.A.push("/my-profile/"+this.loginUser.id)},async logout(){localStorage.removeItem("authToken"),v.A.push("/")}}},C=n(6262);const y=(0,C.A)(w,[["render",h]]);var L=y,A={name:"HeaderView",components:{Bars3CenterLeftIcon:d.A,EnvelopeIcon:u,ProfileComponent:L},props:{headerTitle:String}};const E=(0,C.A)(A,[["render",p]]);var O=E},4068:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var o=n(641);const a={class:"flex flex-col space-y-4 flex-1"},l={key:1,class:"flex flex-col rounded-2xl bg-catskill-white-100 shadow-sm p-4 space-y-4"},s=(0,o.Fv)('<h1 class="font-bold text-bondi-blue-500 text-md">Contact Address</h1><div class="flex flex-col"><span><p>ECSACONM Main Office Location</p><p>Plot No.157, Oloirien Njiro Road</p><p>P.O. Box 1009</p><p>Arusha,Tanzania</p></span></div><h1 class="font-bold text-bondi-blue-500 text-md">Whatsapp</h1><span><p>+255 757 618 084</p></span><h1 class="font-bold text-bondi-blue-500 text-md">Email</h1><span><p><a class="text-dodger-blue" href="mailto:ecsaconmsouth@info.com ">ecsaconmsouth@info.com </a></p></span>',6),r=[s];function i(e,t,n,s,i,c){const p=(0,o.g2)("HeaderView"),d=(0,o.g2)("SpinnerComponent");return(0,o.uX)(),(0,o.CE)("div",a,[(0,o.bF)(p,{headerTitle:s.headerTitle},null,8,["headerTitle"]),e.isLoading?((0,o.uX)(),(0,o.Wv)(d,{key:0})):((0,o.uX)(),(0,o.CE)("div",l,r))])}var c=n(9162),p=n(2521),d={name:"ContactsView",components:{HeaderView:c.A,SpinnerComponent:p.A},setup(){return{headerTitle:"Contacts and Support"}}},u=n(6262);const f=(0,u.A)(d,[["render",i]]);var x=f}}]);
//# sourceMappingURL=792.199cda9f.js.map