"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[971],{2521:function(e,t,n){n.d(t,{A:function(){return v}});var a=n(6768);const s=e=>((0,a.Qi)("data-v-218fa1a2"),e=e(),(0,a.jt)(),e),r={class:"spinner"},o=s((()=>(0,a.Lk)("div",{class:"w-16 h-16 border-t-4 border-bondi-blue-500 border-solid rounded-full animate-spin"},null,-1))),i=[o];function l(e,t,n,s,o,l){return(0,a.uX)(),(0,a.CE)("div",r,i)}var c={name:"SpinnerComponent"},d=n(1241);const u=(0,d.A)(c,[["render",l],["__scopeId","data-v-218fa1a2"]]);var v=u},6971:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(6768),s=n(4232);const r={class:"flex flex-col space-y-6 flex-1 items-center"},o=(0,a.Lk)("div",{class:"s:w-12/12 w-12/12 sm:font-archivo font-roboto text-abbey-500 sm:text-3xl"},"Discover the Latest Events at ECSA-HC ",-1),i=(0,a.Lk)("div",{class:"text-md"},[(0,a.eW)("Click on the event "),(0,a.Lk)("span",{class:"font-bold"},"title"),(0,a.eW)(" to register or confirm your participation")],-1),l={key:1,class:"flex flex-col w-10/12 justify-center items-center space-y-4"},c={class:"flex flex-col border w-full rounded-3xl p-4 border-solid border-great-blue-400 bg-great-blue-50 drop-shadow"},d={class:"flex"},u={class:"flex"};function v(e,t,n,v,f,p){const h=(0,a.g2)("SpinnerComponent"),g=(0,a.g2)("router-link"),b=(0,a.g2)("CalendarDaysIcon"),m=(0,a.g2)("MapPinIcon");return(0,a.uX)(),(0,a.CE)("div",r,[o,i,f.isLoading?((0,a.uX)(),(0,a.Wv)(h,{key:0})):((0,a.uX)(),(0,a.CE)("div",l,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(f.events,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"flex flex-col w-full items-center"},[(0,a.Lk)("div",c,[(0,a.bF)(g,{to:{name:"WebEvent",params:{id:e.id}},class:"font-archivo text-md text-bondi-blue-600"},{default:(0,a.k6)((()=>[(0,a.eW)((0,s.v_)(e.event),1)])),_:2},1032,["to"]),(0,a.Lk)("div",d,[(0,a.Lk)("span",null,[(0,a.bF)(b,{class:"w-5 h-5 text-neon-carrot-700"})]),(0,a.Lk)("span",null,": "+(0,s.v_)(e.start_date)+" - "+(0,s.v_)(e.start_date),1)]),(0,a.Lk)("div",u,[(0,a.Lk)("span",null,[(0,a.bF)(m,{class:"w-5 h-5 text-neon-carrot-700"})]),(0,a.Lk)("span",null,": "+(0,s.v_)(e.location),1)])])])))),128))]))])}var f=n(133),p=n(1663),h=n(1839),g=n(2521),b={name:"HomeView",components:{MapPinIcon:p.A,CalendarDaysIcon:h.A,SpinnerComponent:g.A},data(){return{events:{},currentPage:1,totalPages:"",pageSize:"10",searchPhrase:"",isLoading:!0}},mounted(){this.getActiveEvents()},methods:{async getActiveEvents(){try{const e=await(0,f.Fd)("events/active/",this.currentPage,this.pageSize,this.searchPhrase);this.events=e.data,this.totalPages=e.pages,this.isLoading=!1}catch(e){console.error("Error fetching events:",e),this.isLoading=!1}},formatDate(e){const t=new Date(e),n=t.toLocaleString("en-UK",{day:"2-digit",month:"2-digit",year:"numeric"});return n}}},m=n(1241);const k=(0,m.A)(b,[["render",v]]);var x=k},1663:function(e,t,n){n.d(t,{A:function(){return s}});var a=n(6768);function s(e,t){return(0,a.uX)(),(0,a.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,a.Lk)("path",{"fill-rule":"evenodd",d:"m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z","clip-rule":"evenodd"})])}}}]);
//# sourceMappingURL=971.3588ec73.js.map