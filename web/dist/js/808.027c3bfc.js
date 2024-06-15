"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[808],{7023:function(e,t,n){n.d(t,{A:function(){return h}});var r=n(6768),o=n(4232);const a={key:0,class:"fixed inset-0 flex items-center justify-center z-50"},l={class:"flex flex-col justify-center items-center border border-abbey-500 border-t-4 bg-white-50 rounded-2xl shadow-lg p-4 w-96 z-50 text-abbey-500"},s={class:"text-lg font-light mb-4"},i=(0,r.Lk)("p",{class:"text-2xl font-semibold mb-4"},"Are you sure?",-1),c={class:"mb-4"},u={class:"flex justify-end"};function d(e,t,n,d,b,p){const f=(0,r.g2)("XCircleIcon");return n.show?((0,r.uX)(),(0,r.CE)("div",a,[(0,r.Lk)("div",l,[(0,r.Lk)("p",s,[(0,r.bF)(f,{class:"h-12 w-12 text-flamingo-900"})]),i,(0,r.Lk)("p",c,(0,o.v_)(n.message),1),(0,r.Lk)("div",u,[(0,r.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>p.cancel&&p.cancel(...e)),class:"bg-abbey-50 hover:bg-abbey-100 text-abbey-600 py-1 px-4 rounded-2xl mr-2"}," Cancel "),(0,r.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>p.confirm&&p.confirm(...e)),class:"bg-flamingo-800 text-white hover:bg-flamingo-600 py-1 px-4 rounded-2xl"}," Delete ")])])])):(0,r.Q3)("",!0)}var b=n(5246),p={components:{XCircleIcon:b.A},props:{show:{type:Boolean,required:!0},message:{type:String,default:"Are you sure you want to delete this item?"}},methods:{confirm(){this.$emit("confirmed")},cancel(){this.$emit("canceled")}}},f=n(1241);const g=(0,f.A)(p,[["render",d]]);var h=g},8776:function(e,t,n){n.d(t,{A:function(){return p}});var r=n(6768),o=n(4232);const a={class:"flex flex-row space-x-4 bg-athens-gray-100 py-4 text-sm items-center"},l=["disabled"],s={class:"font-bold"},i=["disabled"];function c(e,t,n,c,u,d){return(0,r.uX)(),(0,r.CE)("div",a,[(0,r.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>d.prevPage&&d.prevPage(...e)),disabled:1===n.currentPage,class:"px-3 rounded-xl text-white-200 bg-bondi-blue-500 hover:bg-bondi-blue-400 p-1"},"Previous",8,l),(0,r.Lk)("div",s,"Page "+(0,o.v_)(n.currentPage)+" of "+(0,o.v_)(n.totalPages),1),(0,r.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>d.nextPage&&d.nextPage(...e)),disabled:n.currentPage===n.totalPages,class:"px-3 rounded-xl text-white-200 bg-bondi-blue-500 hover:bg-bondi-blue-400 p-1"},"Next",8,i)])}var u={name:"PaginationComponent",props:{currentPage:Number,totalPages:Number},methods:{prevPage(){console.log("Here"),this.currentPage>1&&this.$emit("page-change",this.currentPage-1)},nextPage(){this.currentPage<this.totalPages&&this.$emit("page-change",this.currentPage+1)}}},d=n(1241);const b=(0,d.A)(u,[["render",c]]);var p=b},2464:function(e,t,n){n.d(t,{A:function(){return c}});var r=n(6768),o=n(5130);function a(e,t,n,a,l,s){return(0,r.uX)(),(0,r.CE)("form",{onSubmit:t[2]||(t[2]=(0,o.D$)(((...t)=>e.addRole&&e.addRole(...t)),["prevent"])),class:"sm:w-4/12 w-12/12 flex flex-row space-x-2"},[(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.searchQuery=e),class:"mt-2 px-4 p-2 bg-white border shadow-sm border-ghost-600 placeholder-slate-400 focus:outline-none focus:border-athens-gray-500 focus:border-athens-gray-500 block w-full rounded-2xl sm:text-sm focus:ring-1",placeholder:"Search..."},null,512),[[o.Jo,l.searchQuery]]),(0,r.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>s.search&&s.search(...e)),class:"mt-2 px-4 py-2 text-white-400 bg-bondi-blue-500 hover:bg-bondi-blue-400 rounded-2xl"}," Search")],32)}var l={name:"SearchComponent",data(){return{searchQuery:""}},methods:{search(){this.$emit("search",this.searchQuery)}}},s=n(1241);const i=(0,s.A)(l,[["render",a]]);var c=i},2521:function(e,t,n){n.d(t,{A:function(){return b}});var r=n(6768);const o=e=>((0,r.Qi)("data-v-218fa1a2"),e=e(),(0,r.jt)(),e),a={class:"spinner"},l=o((()=>(0,r.Lk)("div",{class:"w-16 h-16 border-t-4 border-bondi-blue-500 border-solid rounded-full animate-spin"},null,-1))),s=[l];function i(e,t,n,o,l,i){return(0,r.uX)(),(0,r.CE)("div",a,s)}var c={name:"SpinnerComponent"},u=n(1241);const d=(0,u.A)(c,[["render",i],["__scopeId","data-v-218fa1a2"]]);var b=d},3672:function(e,t,n){n.d(t,{A:function(){return Z}});var r=n(6768),o=n(4232);const a={class:"flex flex-row p-4 bg-catalina-blue rounded-2xl border-b-4 border-abbey-400"},l={class:"flex flex-row flex-1 justify-between space-x-2 items-center"},s={class:"flex flex-row items-center font-bold space-x-4"},i={class:"text-xl text-abbey-600"},c={class:"flex items-center space-x-4 justify-end"},u={class:"flex flex-row items-center"},d={class:"flex flex-row items-center"};function b(e,t,n,b,p,f){const g=(0,r.g2)("Bars3CenterLeftIcon"),h=(0,r.g2)("BellIcon"),m=(0,r.g2)("EnvelopeIcon"),v=(0,r.g2)("ProfileComponent");return(0,r.uX)(),(0,r.CE)("div",a,[(0,r.Lk)("div",l,[(0,r.Lk)("div",s,[(0,r.bF)(g,{class:"h-8 w-8 text-bondi-blue-500"}),(0,r.Lk)("span",i,(0,o.v_)(n.headerTitle),1)]),(0,r.Lk)("div",c,[(0,r.Lk)("div",u,[(0,r.bF)(h,{class:"w-6 h-6 text-bondi-blue-500"})]),(0,r.Lk)("div",d,[(0,r.bF)(m,{class:"w-6 h-6 text-bondi-blue-500"})]),(0,r.bF)(v,{label:`${e.firstname} ${e.lastname}`},null,8,["label"])])])])}function p(e,t){return(0,r.uX)(),(0,r.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,r.Lk)("path",{"fill-rule":"evenodd",d:"M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z","clip-rule":"evenodd"})])}function f(e,t){return(0,r.uX)(),(0,r.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,r.Lk)("path",{"fill-rule":"evenodd",d:"M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z","clip-rule":"evenodd"})])}function g(e,t){return(0,r.uX)(),(0,r.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,r.Lk)("path",{d:"M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"}),(0,r.Lk)("path",{d:"M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"})])}const h={class:"relative inline-block text-left"},m={class:"text-sm text-catskill-white-500"},v={key:0,class:"origin-top-right absolute right-0 mt-2 w-32 rounded-xl shadow-lg bg-bondi-blue-50"},x={class:"py-2 space-y-2",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"};function w(e,t,n,a,l,s){const i=(0,r.g2)("UserCircleIcon");return(0,r.uX)(),(0,r.CE)("div",h,[(0,r.Lk)("div",{onClick:t[0]||(t[0]=e=>l.isOpen=!l.isOpen),class:"flex flex-row items-center space-x-2 cursor-pointer"},[(0,r.bF)(i,{class:"w-8 h-8 text-bondi-blue-700"}),(0,r.Lk)("span",m,(0,o.v_)(a.loginUser.firstname)+" "+(0,o.v_)(a.loginUser.lastname),1)]),l.isOpen?((0,r.uX)(),(0,r.CE)("div",v,[(0,r.Lk)("div",x,[(0,r.Lk)("a",{onClick:t[1]||(t[1]=(...e)=>s.profile&&s.profile(...e)),class:"block px-4 cursor-pointer text-sm text-gray-700 hover:bg-gray-100",role:"menuitem"}," My profile "),(0,r.Lk)("a",{onClick:t[2]||(t[2]=(...e)=>s.logout&&s.logout(...e)),class:"block px-4 cursor-pointer text-sm text-gray-700 hover:bg-gray-100",role:"menuitem"}," Logout ")])])):(0,r.Q3)("",!0)])}n(4114);var k=n(4571);function y(e,t){return(0,r.uX)(),(0,r.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,r.Lk)("path",{"fill-rule":"evenodd",d:"M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z","clip-rule":"evenodd"})])}var C=n(6826),L={name:"ProfileComponent",components:{UserCircleIcon:y},props:{label:String},data(){return{isOpen:!1}},setup(){const e=(0,C.n)(),t=e.loginUser;return{loginUser:t}},methods:{async profile(){k.A.push("/my-profile/"+this.loginUser.id)},async logout(){localStorage.removeItem("authToken"),k.A.push("/")}}},A=n(1241);const P=(0,A.A)(L,[["render",w]]);var E=P,X={name:"HeaderView",components:{Bars3CenterLeftIcon:p,BellIcon:f,EnvelopeIcon:g,ProfileComponent:E},props:{headerTitle:String}};const I=(0,A.A)(X,[["render",b]]);var Z=I},5246:function(e,t,n){n.d(t,{A:function(){return o}});var r=n(6768);function o(e,t){return(0,r.uX)(),(0,r.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,r.Lk)("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z","clip-rule":"evenodd"})])}}}]);
//# sourceMappingURL=808.027c3bfc.js.map