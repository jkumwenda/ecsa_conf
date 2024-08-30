"use strict";(self["webpackChunkecsaconm_event"]=self["webpackChunkecsaconm_event"]||[]).push([[237],{9162:function(e,s,t){t.d(s,{A:function(){return A}});var o=t(641),a=t(33);const r={class:"flex flex-row p-4 bg-catalina-blue rounded-2xl border-b-4 border-abbey-400"},n={class:"flex flex-row flex-1 justify-between space-x-2 items-center"},i={class:"flex flex-row items-center font-bold space-x-4"},l={class:"sm:text-xl text-md text-abbey-600"},d={class:"flex items-center space-x-4 justify-end"};function c(e,s,t,c,p,u){const b=(0,o.g2)("Bars3CenterLeftIcon"),f=(0,o.g2)("EnvelopeIcon"),m=(0,o.g2)("router-link"),w=(0,o.g2)("ProfileComponent");return(0,o.uX)(),(0,o.CE)("div",r,[(0,o.Lk)("div",n,[(0,o.Lk)("div",i,[(0,o.bF)(b,{class:"h-8 w-8 text-bondi-blue-500"}),(0,o.Lk)("span",l,(0,a.v_)(t.headerTitle),1)]),(0,o.Lk)("div",d,[(0,o.bF)(m,{to:{name:"Contacts"},class:"flex flex-row items-center"},{default:(0,o.k6)((()=>[(0,o.bF)(f,{class:"w-6 h-6 text-bondi-blue-500"})])),_:1}),(0,o.bF)(w,{label:`${e.firstname} ${e.lastname}`},null,8,["label"])])])])}var p=t(2690);function u(e,s){return(0,o.uX)(),(0,o.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,o.Lk)("path",{d:"M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"}),(0,o.Lk)("path",{d:"M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"})])}const b={class:"relative inline-block text-left"},f={class:"text-sm text-catskill-white-500"},m={key:0,class:"origin-top-right absolute right-0 mt-2 w-32 rounded-xl shadow-lg bg-bondi-blue-50"},w={class:"py-2 space-y-2",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"};function x(e,s,t,r,n,i){const l=(0,o.g2)("UserCircleIcon");return(0,o.uX)(),(0,o.CE)("div",b,[(0,o.Lk)("div",{onClick:s[0]||(s[0]=e=>n.isOpen=!n.isOpen),class:"flex flex-row items-center space-x-2 cursor-pointer"},[(0,o.bF)(l,{class:"w-8 h-8 text-bondi-blue-700"}),(0,o.Lk)("span",f,(0,a.v_)(r.loginUser.firstname)+" "+(0,a.v_)(r.loginUser.lastname),1)]),n.isOpen?((0,o.uX)(),(0,o.CE)("div",m,[(0,o.Lk)("div",w,[(0,o.Lk)("a",{onClick:s[1]||(s[1]=(...e)=>i.profile&&i.profile(...e)),class:"block px-4 cursor-pointer text-sm text-gray-700 hover:bg-gray-100",role:"menuitem"}," My profile "),(0,o.Lk)("a",{onClick:s[2]||(s[2]=(...e)=>i.logout&&i.logout(...e)),class:"block px-4 cursor-pointer text-sm text-gray-700 hover:bg-gray-100",role:"menuitem"}," Logout ")])])):(0,o.Q3)("",!0)])}t(4114);var h=t(4814);function v(e,s){return(0,o.uX)(),(0,o.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,o.Lk)("path",{"fill-rule":"evenodd",d:"M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z","clip-rule":"evenodd"})])}var g=t(6826),k={name:"ProfileComponent",components:{UserCircleIcon:v},props:{label:String},data(){return{isOpen:!1}},setup(){const e=(0,g.n)(),s=e.loginUser;return{loginUser:s}},methods:{async profile(){h.A.push("/my-profile/"+this.loginUser.id)},async logout(){localStorage.removeItem("authToken"),h.A.push("/")}}},y=t(6262);const L=(0,y.A)(k,[["render",x]]);var C=L,P={name:"HeaderView",components:{Bars3CenterLeftIcon:p.A,EnvelopeIcon:u,ProfileComponent:C},props:{headerTitle:String}};const _=(0,y.A)(P,[["render",c]]);var A=_},6219:function(e,s,t){t.r(s),t.d(s,{default:function(){return B}});var o=t(641),a=t(33);const r={class:"flex flex-col space-y-4 flex-1"},n={class:"flex flex-col space-y-4"},i={class:"flex flex-row space-x-4"},l={class:"flex flex-col space-y-4 sm:w-12/12 w-full space-x-4 border border-abbey-100 p-4 px-4 rounded-2xl shadow-sm"},d={class:"flex flex-col space-y-4"},c={class:"text-xl font-semibold"},p=["href"],u={class:""},b={class:"flex sm:flex-row space-x-2"},f={key:0,class:"p-4 m-6 rounded-xl text-abbey-100 py-2 text-sm bg-mountain-meadow-500"};function m(e,s,t,m,w,x){const h=(0,o.g2)("HeaderView"),v=(0,o.g2)("SpinnerComponent"),g=(0,o.g2)("router-link"),k=(0,o.g2)("password-modal");return(0,o.uX)(),(0,o.CE)("div",r,[(0,o.bF)(h,{headerTitle:w.headerTitle},null,8,["headerTitle"]),w.isLoading?((0,o.uX)(),(0,o.Wv)(v,{key:0})):(0,o.Q3)("",!0),(0,o.Lk)("div",n,[(0,o.Lk)("div",i,[(0,o.Lk)("div",l,[(0,o.Lk)("div",d,[(0,o.Lk)("p",c,(0,a.v_)(w.participant.title)+" "+(0,a.v_)(w.participant.firstname)+" "+(0,a.v_)(w.participant.lastname),1),(0,o.Lk)("p",null,(0,a.v_)(w.participant.institution),1),(0,o.Lk)("p",null,(0,a.v_)(w.participant.country),1),(0,o.Lk)("a",{href:"mailto:"+w.participant.email,class:"text-blue-500 hover:underline text-bondi-blue-500"},(0,a.v_)(w.participant.email),9,p),(0,o.Lk)("p",u,(0,a.v_)(w.participant.phone),1),(0,o.Lk)("div",b,[(0,o.bF)(g,{to:{name:"EditProfile",params:{id:w.participant.id}},class:"bg-flamingo-700 text-white-50 hover:bg-flamingo-800 rounded-xl px-4 py-1 text-sm"},{default:(0,o.k6)((()=>[(0,o.eW)(" Update profile ")])),_:1},8,["to"]),(0,o.Lk)("button",{onClick:s[0]||(s[0]=e=>x.showPassword()),class:"bg-abbey-500 text-abbey-50 hover:bg-abbey-800 rounded-xl px-4 py-1 text-sm"}," Reset Password ")]),e.message?((0,o.uX)(),(0,o.CE)("div",f,(0,a.v_)(e.message),1)):(0,o.Q3)("",!0)])])])]),(0,o.bF)(k,{show:w.showPasswordModal,onConfirmed:x.confirmPassword,onClosed:x.cancelPassword,user_id:e.user_id},null,8,["show","onConfirmed","onClosed","user_id"])])}var w=t(9162),x=t(133),h=t(2521),v=t(6826),g=t(3751);const k={key:0,class:"fixed inset-0 flex items-center justify-center z-50 overflow-auto"},y={class:"flex flex-col border-2 border-bondi-blue-500 border-t-8 bg-white-100 rounded-xl shadow-lg sm:w-5/12 w-11/12 max-h-[90vh] overflow-y-auto z-50"},L={class:"flex flex-row items-center justify-between font-bold text-lg text-abbey-500 border-b-2 p-4 px-6 border-bondi-blue-500"},C=(0,o.Lk)("div",null,"New Password",-1),P={title:"Cancel Registration",class:"p-1 border border-abbey-600 rounded-full cursor-pointer"},_={key:0,class:"p-4 m-6 m-y-4 rounded-xl text-mountain-meadow-800 py-2 text bg-spray-600"},A={class:"block"},E=(0,o.Lk)("span",{class:"after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"}," New password ",-1),M=(0,o.Lk)("div",{class:"flex flex-row space-x-4"},[(0,o.Lk)("button",{type:"submit",class:"mt-2 px-4 py-2 text-white-100 bg-bondi-blue hover:bg-bondi-blue-400 rounded-2xl"}," Save ")],-1);function X(e,s,t,r,n,i){const l=(0,o.g2)("XCircleIcon"),d=(0,o.g2)("SpinnerComponent");return t.show?((0,o.uX)(),(0,o.CE)("div",k,[(0,o.Lk)("div",y,[(0,o.Lk)("div",L,[C,(0,o.Lk)("span",P,[(0,o.bF)(l,{class:"w-5 h-5 text-abbey-800",onClick:i.close},null,8,["onClick"])])]),n.message?((0,o.uX)(),(0,o.CE)("div",_,(0,a.v_)(n.message),1)):(0,o.Q3)("",!0),(0,o.Lk)("form",{class:"flex flex-col space-y-4 p-4 px-6",onSubmit:s[1]||(s[1]=(0,g.D$)(((...e)=>i.updatePassword&&i.updatePassword(...e)),["prevent"])),method:"POST"},[n.isLoading?((0,o.uX)(),(0,o.Wv)(d,{key:0})):(0,o.Q3)("",!0),(0,o.Lk)("label",A,[E,(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=e=>n.passwordData.password=e),class:"mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-abbey-400 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-2xl sm:text-sm focus:ring-1",placeholder:"New password",required:""},null,512),[[g.Jo,n.passwordData.password]])]),M],32)])])):(0,o.Q3)("",!0)}var S=t(1709),F={components:{SpinnerComponent:h.A,XCircleIcon:S.A},data(){return{passwordData:{password:""},isLoading:!1,message:""}},props:{show:{type:Boolean,required:!0},user_id:{type:Number,required:!0}},methods:{async updatePassword(){this.isLoading=!0;try{const e=await(0,x.fk)("users/reset_password",this.user_id,this.passwordData);this.user_data=e.data,this.isLoading=!1,this.$emit("password-set"),this.message="Password updated successfully"}catch(e){this.isLoading=!1}},close(){this.$emit("closed")},watch:{show(e){document.body.style.overflow=e?"hidden":""}}}},I=t(6262);const U=(0,I.A)(F,[["render",X]]);var T=U,V={name:"MyProfileView",components:{SpinnerComponent:h.A,HeaderView:w.A,PasswordModal:T},data(){return{headerTitle:"My profile",id:this.$route.params.id,isLoading:!0,participant:{},showPasswordModal:!1}},mounted(){this.getParticipant()},setup(){const e=(0,v.n)(),s=e.permissions;return{permissions:s}},methods:{async getParticipant(){try{const e=await(0,x.Gk)("participants",this.id);this.participant=e.participant,this.isLoading=!1}catch(e){console.error("Error fetching participants:",e),this.isLoading=!1}},showPassword(){this.user_id=this.id,this.showPasswordModal=!0},confirmPassword(){this.getParticipant(),this.showPasswordModal=!1},cancelPassword(){this.showPasswordModal=!1}}};const Z=(0,I.A)(V,[["render",m]]);var B=Z},1709:function(e,s,t){t.d(s,{A:function(){return a}});var o=t(641);function a(e,s){return(0,o.uX)(),(0,o.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,o.Lk)("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z","clip-rule":"evenodd"})])}}}]);
//# sourceMappingURL=237.0e9bc611.js.map