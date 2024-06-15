"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[105],{6105:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var s=a(6768),n=a(4232);const l={class:"flex flex-col space-y-6 flex-1 items-center"},o={class:"flex flex-col flex-1 space-y-2 text-white-400 justify-between w-11/12 p-4 rounded-3xl bg-great-blue-400 drop-shadow"},i={class:"flex flex-col space-y-0"},r={class:"text-xl font-roboto"},d={class:"flex text-sm space-x-4"},c=(0,s.Lk)("div",{class:"w-2/12 font-bold"},"Venue ",-1),v={class:"flex text-sm space-x-4"},f=(0,s.Lk)("div",{class:"w-2/12 font-bold"},"Organiser ",-1),u={class:"flex text-sm space-x-4"},x=(0,s.Lk)("div",{class:"w-2/12 font-bold"},"Location ",-1),k={class:"flex text-sm space-x-4"},b=(0,s.Lk)("div",{class:"w-2/12 font-bold"},"Event date ",-1),g={class:"flex text-sm space-x-4"},L=(0,s.Lk)("div",{class:"w-2/12 font-bold"},"Registration date ",-1),p=(0,s.Lk)("div",{class:"flex flex-row justify-between items-center w-11/12 rounded-3xl p-4 border border-solid border-great-blue-400 bg-great-blue-50 drop-shadow"},[(0,s.Lk)("p",{class:"italic"},"Program currently not available, please check again later")],-1);function m(e,t,a,m,h,w){const _=(0,s.g2)("router-link"),y=(0,s.g2)("h");return(0,s.uX)(),(0,s.CE)("div",l,[(0,s.Lk)("div",null,[(0,s.bF)(_,{to:{name:"Login"},class:"font-bold"},{default:(0,s.k6)((()=>[(0,s.eW)("Login")])),_:1}),(0,s.eW)(" or create and account to "),(0,s.bF)(_,{to:{name:"Register"},class:"font-bold"},{default:(0,s.k6)((()=>[(0,s.eW)("Register")])),_:1}),(0,s.eW)(" for this event ")]),(0,s.Lk)("div",o,[(0,s.Lk)("div",i,[(0,s.Lk)("h1",r,(0,n.v_)(h.event.event),1)]),(0,s.Lk)("div",d,[c,(0,s.Lk)("div",null,": "+(0,n.v_)(h.event.location),1)]),(0,s.Lk)("div",v,[f,(0,s.Lk)("div",null,": "+(0,n.v_)(h.event.organiser),1)]),(0,s.Lk)("div",u,[x,(0,s.Lk)("div",null,": "+(0,n.v_)(h.event.country),1)]),(0,s.Lk)("div",k,[b,(0,s.Lk)("div",null,": "+(0,n.v_)(w.formatDate(h.event.start_date))+" - "+(0,n.v_)(w.formatDate(h.event.end_date)),1)]),(0,s.Lk)("div",g,[L,(0,s.Lk)("div",null,": "+(0,n.v_)(w.formatDate(h.event.registration_start_date))+" - "+(0,n.v_)(w.formatDate(h.event.registration_start_date)),1)])]),(0,s.bF)(y,{class:"font-bold text-xl text-bondi-blue-600 w-11/12"},{default:(0,s.k6)((()=>[(0,s.eW)("Event program")])),_:1}),p])}var h=a(133),w={name:"WebEventView",data(){return{id:this.$route.params.id,isLoading:!0,event:{}}},mounted(){this.getEvent()},methods:{async getEvent(){try{const e=await(0,h.Gk)("events",this.id);this.event=e.event,this.participants=e.participants,this.isLoading=!1}catch(e){console.error("Error fetching events:",e),this.isLoading=!1}},formatDate(e){const t=new Date(e),a=t.toLocaleString("en-UK",{day:"2-digit",month:"2-digit",year:"numeric"});return a}}},_=a(1241);const y=(0,_.A)(w,[["render",m]]);var E=y}}]);
//# sourceMappingURL=105.18758c20.js.map