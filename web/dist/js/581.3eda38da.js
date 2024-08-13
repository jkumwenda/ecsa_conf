"use strict";(self["webpackChunkecsaconm_event"]=self["webpackChunkecsaconm_event"]||[]).push([[581],{115:function(e,t,s){s.r(t),s.d(t,{default:function(){return z}});var a=s(6768),l=s(4232);const n={class:"flex flex-col space-y-6 flex-1 items-center"},r={class:"w-11/12 sm:text-left text-center"},o={key:1,class:"flex flex-col w-11/12 justify-center items-center space-y-4"},i={class:"flex flex-col space-y-4 w-full"},c={class:"flex flex-col sm:items-start items-center sm:text-start text-center space-y-1 w-full rounded-md p-4 border border-mercury-500"},d={class:"flex flex-col space-y-0"},f={class:"sm:text-3xl text-xl font-roboto-light"},m={class:"flex flex-col space-y-0"},v={class:"text-md font-roboto"},u={class:"flex sm:flex-row flex-col sm:items-start items-center w-full text-sm space-x-4"},x=(0,a.Lk)("div",{class:"sm:w-2/12 w-full font-bold"},"Venue ",-1),g={class:"sm:w-10/12 w-full sm:text-left text-center"},h={class:"flex sm:flex-row flex-col sm:items-start items-center w-full text-sm space-x-4"},p=(0,a.Lk)("div",{class:"sm:w-2/12 w-full font-bold"},"Organiser ",-1),w={class:"sm:w-10/12 w-full"},b={class:"flex sm:flex-row flex-col sm:items-start items-center w-full text-sm space-x-4"},k=(0,a.Lk)("div",{class:"sm:w-2/12 w-full font-bold"},"Country ",-1),L={class:"sm:w-10/12 w-full"},y={class:"flex sm:flex-row flex-col sm:items-start items-center w-full text-sm space-x-4"},_=(0,a.Lk)("div",{class:"sm:w-2/12 w-full font-bold"},"Event date ",-1),E={class:"sm:w-10/12 w-full"},P={class:"flex sm:flex-row flex-col sm:items-start items-center w-full text-sm space-x-4"},C=(0,a.Lk)("div",{class:"sm:w-2/12 w-full font-bold"},"Registration date ",-1),W={class:"sm:w-10/12 w-full"},S=(0,a.Lk)("div",{class:"flex flex-row justify-between items-center w-11/12 rounded-md p-4 border border-solid border-great-blue-400 bg-great-blue-50 drop-shadow"},[(0,a.Lk)("p",{class:"italic"},"Program currently not available, please check again later")],-1);function D(e,t,s,D,F,A){const R=(0,a.g2)("router-link"),U=(0,a.g2)("SpinnerComponent"),X=(0,a.g2)("h");return(0,a.uX)(),(0,a.CE)("div",n,[(0,a.Lk)("div",r,[(0,a.eW)(" Already have an accout? "),(0,a.bF)(R,{to:{name:"Login"},class:"font-bold text-bondi-blue-500"},{default:(0,a.k6)((()=>[(0,a.eW)("login")])),_:1}),(0,a.eW)(", or "),(0,a.bF)(R,{to:{name:"Register"},class:"font-bold text-bondi-blue-500"},{default:(0,a.k6)((()=>[(0,a.eW)("create")])),_:1}),(0,a.eW)(" an account to register for this event ")]),F.isLoading?((0,a.uX)(),(0,a.Wv)(U,{key:0})):((0,a.uX)(),(0,a.CE)("div",o,[(0,a.Lk)("div",i,[(0,a.Lk)("div",c,[(0,a.Lk)("div",d,[(0,a.Lk)("div",f,(0,l.v_)(F.event.event),1)]),(0,a.Lk)("div",m,[(0,a.Lk)("div",v,(0,l.v_)(F.event.description),1)]),(0,a.Lk)("div",u,[x,(0,a.Lk)("div",g,": "+(0,l.v_)(F.event.location),1)]),(0,a.Lk)("div",h,[p,(0,a.Lk)("div",w,": "+(0,l.v_)(F.event.organiser),1)]),(0,a.Lk)("div",b,[k,(0,a.Lk)("div",L,": "+(0,l.v_)(F.event.country),1)]),(0,a.Lk)("div",y,[_,(0,a.Lk)("div",E,": "+(0,l.v_)(A.formatDate(F.event.start_date))+" - "+(0,l.v_)(A.formatDate(F.event.end_date)),1)]),(0,a.Lk)("div",P,[C,(0,a.Lk)("div",W,": "+(0,l.v_)(A.formatDate(F.event.registration_start_date))+" - "+(0,l.v_)(A.formatDate(F.event.registration_start_date)),1)]),(0,a.bF)(R,{to:{name:"Login"},class:"sm:px-4 px-2 sm:py-2 py-1 rounded-md border-2 border-bondi-blue-500 text-stone-100 hover:bg-bondi-blue-600"},{default:(0,a.k6)((()=>[(0,a.eW)(" Login or Sign Up to register for this event ")])),_:1})])])])),(0,a.bF)(X,{class:"font-bold text-3xl font-roboto-thin text-abbey-500 w-11/12"},{default:(0,a.k6)((()=>[(0,a.eW)("Event program")])),_:1}),S])}var F=s(133),A=s(2521),R=s(6826),U={name:"EventView",components:{SpinnerComponent:A.A},data(){return{headerTitle:"Event details",id:this.$route.params.id,isLoading:!0,event:{},participants:[],appUrl:"https://events.ecsaconm.org",showParticipantModal:!1,currentPage:1,totalPages:"",pageSize:"10",searchPhrase:""}},mounted(){this.getEvent()},setup(){const e=(0,R.n)(),t=e.permissions;return{permissions:t}},methods:{async getEvent(){try{const e=await(0,F.Gk)("events",this.id,this.currentPage,this.pageSize,this.searchPhrase);this.event=e.event,this.participants=e.data,this.totalPages=e.pages,this.isLoading=!1}catch(e){console.error("Error fetching event:",e),this.isLoading=!1}},async handleSearch(e){this.searchPhrase=e,this.getEvent()},async handlePageChange(e){this.currentPage=e,this.getEvent()},getRowClass(e){return e%2===0?"bg-athens-gray-400":"bg-athens-gray-100"},formatDate(e){const t=new Date(e);return t.toLocaleString("en-UK",{day:"2-digit",month:"2-digit",year:"numeric"})}}},X=s(1241);const j=(0,X.A)(U,[["render",D]]);var z=j}}]);
//# sourceMappingURL=581.3eda38da.js.map