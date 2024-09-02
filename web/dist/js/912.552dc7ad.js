"use strict";(self["webpackChunkecsaconm_event"]=self["webpackChunkecsaconm_event"]||[]).push([[912],{1508:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var s=n(641),o=n(33),a=n(3751);const r={class:"flex flex-col space-y-6 flex-1 items-center"},d={key:1,class:"flex flex-col w-11/12 justify-center items-center space-y-4"},i={class:"flex flex-row sm:w-10/12 w-full border-2 border-abbey-500 rounded-xl text-center py-2"},c={class:"flex flex-col w-full space-y-2"},l={class:"font-roboto-light text-bondi-blue-500 text-xl p-4"},u={class:"font-roboto-light text-md"},m={class:"font-roboto-light text-md"},f=(0,s.Lk)("span",{class:"font-bold"},"Reg date:",-1),v=(0,s.Lk)("h1",{class:"px-4 py-2 bg-abbey-500 font-bold text-white-100"},"Confirm Attendance",-1),b={class:"flex flex-col"},g={class:"flex flex-col px-4 items-center justify-center"},h={key:0,class:"p-1 px-4 rounded-md text-sm bg-bondi-blue-200 border border-bondi-blue-400 text-bondi-blue-800"},p={key:1,class:"p-1 px-4 rounded-md text-sm bg-mountain-meadow-100 border border-mountain-meadow-400 text-mountain-meadow-800"},x=(0,s.Lk)("span",{class:"font-roboto-light text-sm"},"Enter ID # to confirm attendance",-1),y=(0,s.Lk)("button",{type:"submit",class:"mt-2 px-4 py-2 text-sm text-white-100 bg-abbey-600 hover:bg-abbey-400 rounded-md"}," Confirm Attendance ",-1),k=(0,s.Lk)("div",null,null,-1);function w(e,t,n,w,L,_){const C=(0,s.g2)("SpinnerComponent");return(0,s.uX)(),(0,s.CE)("div",r,[L.isLoading?((0,s.uX)(),(0,s.Wv)(C,{key:0})):((0,s.uX)(),(0,s.CE)("div",d,[(0,s.Lk)("div",i,[(0,s.Lk)("div",c,[(0,s.Lk)("div",l,(0,o.v_)(L.event.event),1),(0,s.Lk)("div",u,(0,o.v_)(_.formatDate(L.event.start_date))+" - "+(0,o.v_)(_.formatDate(L.event.end_date)),1),(0,s.Lk)("div",m,[f,(0,s.eW)(" "+(0,o.v_)(_.formattedDate),1)]),v,(0,s.Lk)("div",b,[(0,s.Lk)("div",g,[L.errorMsg?((0,s.uX)(),(0,s.CE)("div",h,(0,o.v_)(L.errorMsg),1)):(0,s.Q3)("",!0),L.successMsg?((0,s.uX)(),(0,s.CE)("div",p,(0,o.v_)(L.successMsg),1)):(0,s.Q3)("",!0),(0,s.Lk)("form",{onSubmit:t[1]||(t[1]=(0,a.D$)(((...e)=>_.confirmAttendance&&_.confirmAttendance(...e)),["prevent"])),method:"POST",class:"sm:w-12/12 bg-ghost-300 p-2 px-6 rounded-xl my-4"},[x,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>L.attendanceConfirmData.user_id=e),class:"mt-2 px-4 py-2 bg-white border border-1 shadow-sm border-abbey-400 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1",placeholder:"Identification Number"},null,512),[[a.Jo,L.attendanceConfirmData.user_id]]),y],32)])])])]),k]))])}var L=n(133),_=n(2521),C={name:"AttendanceView",components:{SpinnerComponent:_.A},data(){return{headerTitle:"Event Attendance Register",eventId:this.$route.params.eventId,event:{},appUrl:"https://events.ecsaconm.org",apiUrl:"https://185.135.137.170:8080",isLoading:!0,today:new Date,attendanceConfirmData:{event_id:"",user_id:""},errorMsg:null,successMsg:null}},computed:{formattedDate(){return this.today.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}},mounted(){this.getEventAttendance()},methods:{async getEventAttendance(){try{const e=await(0,L.Gk)("events/event",this.eventId);this.event=e.event,this.isLoading=!1}catch(e){console.error("Error fetching event:",e),this.isLoading=!1}},async confirmAttendance(){this.attendanceConfirmData.event_id=this.eventId,this.isLoading=!0;try{const e=await(0,L.wE)("events/confirm_event_attendance/",this.attendanceConfirmData);this.events=e.data,this.isLoading=!1,this.errorMsg=null,this.successMsg="Succefully confirmed attendance for today",this.getEventAttendance()}catch(e){this.successMsg=null,this.errorMsg=e.response.data.detail,this.isLoading=!1}},formatDate(e){const t=new Date(e);return t.toLocaleString("en-UK",{day:"2-digit",month:"2-digit",year:"numeric"})}}},D=n(6262);const A=(0,D.A)(C,[["render",w]]);var E=A}}]);
//# sourceMappingURL=912.552dc7ad.js.map