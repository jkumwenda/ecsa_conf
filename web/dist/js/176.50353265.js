"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[176],{5100:function(e,t,a){a.r(t),a.d(t,{default:function(){return C}});var s=a(6768),n=a(4232);const r={class:"flex flex-col space-y-6 flex-1 items-center"},i={key:1,class:"flex flex-col flex-1 space-y-2 text-white-400 justify-between w-11/12 p-4 rounded-3xl bg-great-blue-400 drop-shadow"},o={class:"flex flex-col space-y-0"},l={class:"text-xl font-roboto"},c={class:"flex text-sm space-x-4"},d=(0,s.Lk)("div",{class:"w-2/12 font-bold"},"Venue ",-1),v={class:"flex text-sm space-x-4"},g=(0,s.Lk)("div",{class:"w-2/12 font-bold"},"Organiser ",-1),u={class:"flex text-sm space-x-4"},h=(0,s.Lk)("div",{class:"w-2/12 font-bold"},"Location ",-1),f={class:"flex text-sm space-x-4"},p=(0,s.Lk)("div",{class:"w-2/12 font-bold"},"Event date ",-1),x={class:"flex text-sm space-x-4"},k=(0,s.Lk)("div",{class:"w-2/12 font-bold"},"Registration date ",-1),b=(0,s.Lk)("div",{class:"flex flex-row justify-between items-center w-11/12 rounded-3xl p-4 border border-solid border-great-blue-400 bg-great-blue-50 drop-shadow"},[(0,s.Lk)("p",{class:"italic"},"Program currently not available, please check again later")],-1);function L(e,t,a,L,m,w){const y=(0,s.g2)("router-link"),_=(0,s.g2)("SpinnerComponent"),E=(0,s.g2)("h");return(0,s.uX)(),(0,s.CE)("div",r,[(0,s.Lk)("div",null,[(0,s.bF)(y,{to:{name:"Login"},class:"font-bold"},{default:(0,s.k6)((()=>[(0,s.eW)("Login")])),_:1}),(0,s.eW)(" or create and account to "),(0,s.bF)(y,{to:{name:"Register"},class:"font-bold"},{default:(0,s.k6)((()=>[(0,s.eW)("Register")])),_:1}),(0,s.eW)(" for this event ")]),m.isLoading?((0,s.uX)(),(0,s.Wv)(_,{key:0})):((0,s.uX)(),(0,s.CE)("div",i,[(0,s.Lk)("div",o,[(0,s.Lk)("h1",l,(0,n.v_)(m.event.event),1)]),(0,s.Lk)("div",c,[d,(0,s.Lk)("div",null,": "+(0,n.v_)(m.event.location),1)]),(0,s.Lk)("div",v,[g,(0,s.Lk)("div",null,": "+(0,n.v_)(m.event.organiser),1)]),(0,s.Lk)("div",u,[h,(0,s.Lk)("div",null,": "+(0,n.v_)(m.event.country),1)]),(0,s.Lk)("div",f,[p,(0,s.Lk)("div",null,": "+(0,n.v_)(w.formatDate(m.event.start_date))+" - "+(0,n.v_)(w.formatDate(m.event.end_date)),1)]),(0,s.Lk)("div",x,[k,(0,s.Lk)("div",null,": "+(0,n.v_)(w.formatDate(m.event.registration_start_date))+" - "+(0,n.v_)(w.formatDate(m.event.registration_start_date)),1)])])),(0,s.bF)(E,{class:"font-bold text-xl text-bondi-blue-600 w-11/12"},{default:(0,s.k6)((()=>[(0,s.eW)("Event program")])),_:1}),b])}var m=a(133),w=a(2521),y=a(6826),_={name:"EventView",components:{SpinnerComponent:w.A},data(){return{headerTitle:"Event details",id:this.$route.params.id,isLoading:!0,event:{},participants:[],appUrl:"https://events.ecsahc.cloud",showParticipantModal:!1,currentPage:1,totalPages:"",pageSize:"10",searchPhrase:""}},mounted(){this.getEvent()},setup(){const e=(0,y.n)(),t=e.permissions;return{permissions:t}},methods:{async getEvent(){try{const e=await(0,m.Gk)("events",this.id,this.currentPage,this.pageSize,this.searchPhrase);this.event=e.event,this.participants=e.data,this.totalPages=e.pages,this.isLoading=!1}catch(e){console.error("Error fetching event:",e),this.isLoading=!1}},async handleSearch(e){this.searchPhrase=e,this.getEvent()},async handlePageChange(e){this.currentPage=e,this.getEvent()},getRowClass(e){return e%2===0?"bg-athens-gray-400":"bg-athens-gray-100"},formatDate(e){const t=new Date(e);return t.toLocaleString("en-UK",{day:"2-digit",month:"2-digit",year:"numeric"})}}},E=a(1241);const P=(0,E.A)(_,[["render",L]]);var C=P}}]);
//# sourceMappingURL=176.50353265.js.map