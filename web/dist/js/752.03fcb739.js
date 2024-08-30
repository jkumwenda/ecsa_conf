"use strict";(self["webpackChunkecsaconm_event"]=self["webpackChunkecsaconm_event"]||[]).push([[752],{9162:function(e,t,s){s.d(t,{A:function(){return E}});var a=s(641),r=s(33);const o={class:"flex flex-row p-4 bg-catalina-blue rounded-2xl border-b-4 border-abbey-400"},l={class:"flex flex-row flex-1 justify-between space-x-2 items-center"},n={class:"flex flex-row items-center font-bold space-x-4"},i={class:"sm:text-xl text-md text-abbey-600"},d={class:"flex items-center space-x-4 justify-end"};function c(e,t,s,c,u,m){const p=(0,a.g2)("Bars3CenterLeftIcon"),b=(0,a.g2)("EnvelopeIcon"),f=(0,a.g2)("router-link"),x=(0,a.g2)("ProfileComponent");return(0,a.uX)(),(0,a.CE)("div",o,[(0,a.Lk)("div",l,[(0,a.Lk)("div",n,[(0,a.bF)(p,{class:"h-8 w-8 text-bondi-blue-500"}),(0,a.Lk)("span",i,(0,r.v_)(s.headerTitle),1)]),(0,a.Lk)("div",d,[(0,a.bF)(f,{to:{name:"Contacts"},class:"flex flex-row items-center"},{default:(0,a.k6)((()=>[(0,a.bF)(b,{class:"w-6 h-6 text-bondi-blue-500"})])),_:1}),(0,a.bF)(x,{label:`${e.firstname} ${e.lastname}`},null,8,["label"])])])])}var u=s(2690);function m(e,t){return(0,a.uX)(),(0,a.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,a.Lk)("path",{d:"M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"}),(0,a.Lk)("path",{d:"M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"})])}const p={class:"relative inline-block text-left"},b={class:"text-sm text-catskill-white-500"},f={key:0,class:"origin-top-right absolute right-0 mt-2 w-32 rounded-xl shadow-lg bg-bondi-blue-50"},x={class:"py-2 space-y-2",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"};function h(e,t,s,o,l,n){const i=(0,a.g2)("UserCircleIcon");return(0,a.uX)(),(0,a.CE)("div",p,[(0,a.Lk)("div",{onClick:t[0]||(t[0]=e=>l.isOpen=!l.isOpen),class:"flex flex-row items-center space-x-2 cursor-pointer"},[(0,a.bF)(i,{class:"w-8 h-8 text-bondi-blue-700"}),(0,a.Lk)("span",b,(0,r.v_)(o.loginUser.firstname)+" "+(0,r.v_)(o.loginUser.lastname),1)]),l.isOpen?((0,a.uX)(),(0,a.CE)("div",f,[(0,a.Lk)("div",x,[(0,a.Lk)("a",{onClick:t[1]||(t[1]=(...e)=>n.profile&&n.profile(...e)),class:"block px-4 cursor-pointer text-sm text-gray-700 hover:bg-gray-100",role:"menuitem"}," My profile "),(0,a.Lk)("a",{onClick:t[2]||(t[2]=(...e)=>n.logout&&n.logout(...e)),class:"block px-4 cursor-pointer text-sm text-gray-700 hover:bg-gray-100",role:"menuitem"}," Logout ")])])):(0,a.Q3)("",!0)])}s(4114);var g=s(4814);function k(e,t){return(0,a.uX)(),(0,a.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,a.Lk)("path",{"fill-rule":"evenodd",d:"M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z","clip-rule":"evenodd"})])}var y=s(6826),v={name:"ProfileComponent",components:{UserCircleIcon:k},props:{label:String},data(){return{isOpen:!1}},setup(){const e=(0,y.n)(),t=e.loginUser;return{loginUser:t}},methods:{async profile(){g.A.push("/my-profile/"+this.loginUser.id)},async logout(){localStorage.removeItem("authToken"),g.A.push("/")}}},w=s(6262);const L=(0,w.A)(v,[["render",h]]);var C=L,A={name:"HeaderView",components:{Bars3CenterLeftIcon:u.A,EnvelopeIcon:m,ProfileComponent:C},props:{headerTitle:String}};const U=(0,w.A)(A,[["render",c]]);var E=U},8588:function(e,t,s){s.r(t),s.d(t,{default:function(){return E}});var a=s(641),r=s(33),o=s(3751);const l={class:"flex flex-col space-y-4 flex-1"},n={key:1,class:"rounded-2xl bg-catskill-white-100 shadow-sm p-4"},i={key:0,class:"p-4 mb-4 rounded-xl py-2 text bg-buttercup-300"},d={class:"block"},c=(0,a.Lk)("span",{class:"after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"}," Firtsname ",-1),u={class:"block"},m=(0,a.Lk)("span",{class:"after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"}," Lastname ",-1),p={class:"block"},b=(0,a.Lk)("span",{class:"after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"}," Email address ",-1),f={class:"block"},x=(0,a.Lk)("span",{class:"after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"}," Phone ",-1),h={class:"flex flex-row space-x-4"},g=(0,a.Lk)("button",{type:"submit",class:"mt-2 px-4 py-2 text-white-100 bg-bondi-blue hover:bg-bondi-blue-400 rounded-2xl"}," Add user ",-1);function k(e,t,s,k,y,v){const w=(0,a.g2)("HeaderView"),L=(0,a.g2)("SpinnerComponent"),C=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",l,[(0,a.bF)(w,{headerTitle:y.headerTitle},null,8,["headerTitle"]),y.isLoading?((0,a.uX)(),(0,a.Wv)(L,{key:0})):((0,a.uX)(),(0,a.CE)("div",n,[y.message?((0,a.uX)(),(0,a.CE)("div",i,(0,r.v_)(y.message),1)):(0,a.Q3)("",!0),(0,a.Lk)("form",{class:"flex flex-col sm:w-5/12 w-full space-y-4",onSubmit:t[4]||(t[4]=(0,o.D$)(((...e)=>v.addUser&&v.addUser(...e)),["prevent"])),method:"POST"},[(0,a.Lk)("label",d,[c,(0,a.bo)((0,a.Lk)("input",{type:"input",name:"firstname","onUpdate:modelValue":t[0]||(t[0]=e=>y.userData.firstname=e),class:"mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1",placeholder:"Firstname"},null,512),[[o.Jo,y.userData.firstname]])]),(0,a.Lk)("label",u,[m,(0,a.bo)((0,a.Lk)("input",{type:"input",name:"lastname","onUpdate:modelValue":t[1]||(t[1]=e=>y.userData.lastname=e),class:"mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1",placeholder:"Lastname"},null,512),[[o.Jo,y.userData.lastname]])]),(0,a.Lk)("label",p,[b,(0,a.bo)((0,a.Lk)("input",{type:"email",name:"email","onUpdate:modelValue":t[2]||(t[2]=e=>y.userData.email=e),class:"mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1",placeholder:"you@example.com"},null,512),[[o.Jo,y.userData.email]])]),(0,a.Lk)("label",f,[x,(0,a.bo)((0,a.Lk)("input",{type:"text",name:"phone","onUpdate:modelValue":t[3]||(t[3]=e=>y.userData.phone=e),class:"mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1",title:"Please enter a valid 10-digit phone number",placeholder:"Phone number",required:""},null,512),[[o.Jo,y.userData.phone]])]),(0,a.Lk)("div",h,[g,(0,a.bF)(C,{to:{name:"Users"},class:"mt-2 px-4 py-2 boder border-2 border-abbey-400 hover:border-abbey-200 rounded-2xl"},{default:(0,a.k6)((()=>[(0,a.eW)("Cancel")])),_:1})])],32)]))])}s(4114);var y=s(133),v=s(9162),w=s(2521),L=s(4814),C={name:"AddUserView",components:{HeaderView:v.A,SpinnerComponent:w.A},data(){return{headerTitle:"Add users",userData:{firstname:"",lastname:"",email:"",phone:"",password:""},message:"",isLoading:!1}},methods:{async addUser(){this.isLoading=!0;try{const e=await(0,y.wE)("users/",this.userData);this.users=e.data,this.isLoading=!1,L.A.push("/users")}catch(e){console.error("Error fetching users:",e.response.data.detail),this.message=e.response.data.detail,this.isLoading=!1}}}},A=s(6262);const U=(0,A.A)(C,[["render",k]]);var E=U}}]);
//# sourceMappingURL=752.03fcb739.js.map