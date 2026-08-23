import{r as e}from"./rolldown-runtime-Dw2cE7zH.js";import{s as t}from"./data-core-u1TPZzGK.js";import{m as n}from"./charts-Bnwx77Nk.js";import{t as r}from"./trpc-f87YPGMk.js";import{a as i,o as a}from"./react-core-DaLBU1SO.js";import{r as o}from"./utils-Cnb6lgNC.js";import{i as s}from"./ui-misc-C67Xdctg.js";import{t as c}from"./useAuth-D_ZuRiHx.js";import{t as l}from"./button--382im4U.js";import{Y as ee,ft as te}from"./icons-dRIQAKyU.js";import{t as ne}from"./date-input-Da2a2JTk.js";import{i as re}from"./nativePdf-DjByE9r5.js";import{t as ie}from"./PatientPicker-D7JxMJT6.js";import{i as ae,n as oe,r as se,t as ce}from"./sheetDesigner-BkKvtxSj.js";import{t as le}from"./useAppNavigation-426vm028.js";import{n as ue,t as de}from"./PrintPreviewBanner-BYn_8kj1.js";import{n as fe,r as pe,t as me}from"./sheetDates-DiI1jePr.js";import{n as he,t as ge}from"./SheetWatermark-TeRURNLx.js";import{t as _e}from"./FollowupTablesBody-DWjvILHE.js";import{t as ve}from"./ws-D6N0sQFg.js";var u=e(n(),1),d=t();function ye(){let{user:e,isAuthenticated:t}=c(),[,n]=i(),{goBack:ye}=le(),[,be]=a(`/sheets/:type/:id`),f=typeof window<`u`?window.location.pathname:``,p=f.includes(`/sheets/consultant`)?`consultant`:f.includes(`/sheets/external`)||f.includes(`/sheets/operation`)?`external`:`lasik`,xe=p===`consultant`?`كشف`:p===`external`?`د.الصواف`:`تصحيح ابصار`,Se=(()=>{if(be?.id)return Number(be.id);if(typeof window>`u`)return;let e=window.location.pathname.match(/^\/(?:patient-hub\/)?sheets\/(?:lasik|consultant|external)\/(\d+)/);return e?.[1]?Number(e[1]):void 0})(),m=Number.isFinite(Se)?Se:void 0,Ce=ue({ready:!!m});typeof window<`u`&&new URLSearchParams(window.location.search).get(`original`);let we=typeof window<`u`&&new URLSearchParams(window.location.search).get(`includeFollowups`)===`1`,[h,Te]=(0,u.useState)(ce.followupLasik),[Ee,g]=(0,u.useState)([{id:1,date:``,type:`المتابعة الأولى`},{id:2,date:``,type:`المتابعة الثانية`},{id:3,date:``,type:`المتابعة الثالثة`},{id:4,date:``,type:`المتابعة الرابعة`}]),[_,v]=(0,u.useState)({}),[De,y]=(0,u.useState)(``),[Oe,ke]=(0,u.useState)(``),[b,x]=(0,u.useState)(``),[S,C]=(0,u.useState)(``),[w,T]=(0,u.useState)({right:!0,left:!1,both:!1}),[E,D]=(0,u.useState)({patientName:``,dateOfBirth:``,age:``,address:``,phone:``,alternatePhone:``,patientCode:``,job:``,examinationDate:new Date().toISOString().split(`T`)[0]}),[O,k]=(0,u.useState)({autorefraction:{od:{s:``,c:``,axis:``,va:``,iop:``,ucva:``,bcva:``},os:{s:``,c:``,axis:``,va:``,iop:``,ucva:``,bcva:``}},pentacam:{od:{k1:``,k2:``,ax1:``,ax2:``,thinnest:``,apex:``,residual:``,ttt:``,ablation:``},os:{k1:``,k2:``,ax1:``,ax2:``,thinnest:``,apex:``,residual:``,ttt:``,ablation:``}}}),[A,Ae]=(0,u.useState)({od:{s:``,c:``,axis:``},os:{s:``,c:``,axis:``}}),[j,M]=(0,u.useState)({reception:``,nurse:``,technician:``,doctor:p===`external`?`د. الصواف`:``}),[je,Me]=(0,u.useState)(``),[Ne,N]=(0,u.useState)(``),[Pe,P]=(0,u.useState)(``),[F,I]=(0,u.useState)({externalPtosis:!1,externalSquint:!1,externalOthers:!1,externalOthersNote:``,muscleNormal:!1,muscleAbnormal:!1,muscleAbnormalNote:``,otherAbnormalities:``,fundusNormal:!1,fundusAbnormal:!1,fundusAbnormalNote:``,complains:``}),[L,Fe]=(0,u.useState)(``),[Ie,R]=(0,u.useState)(!1),z=r.medical.getAllSymptoms.useQuery(void 0,{refetchOnWindowFocus:!1}),B=(e,t)=>{I(n=>({...n,[e]:t}))},[Le,Re]=(0,u.useState)(0),[ze,Be]=(0,u.useState)(0),[Ve,He]=(0,u.useState)(1),[Ue,We]=(0,u.useState)(``),[Ge,Ke]=(0,u.useState)(ce.templates.lasik),V=r.medical.getSystemSetting.useQuery({key:`sheet_designer_config`},{enabled:t,refetchOnWindowFocus:!1}),qe=r.medical.getSystemSetting.useQuery({key:`mobile_sheet_mode_v1`},{enabled:t,refetchOnWindowFocus:!1});if((0,u.useEffect)(()=>{t||n(`/`)},[t,n]),(0,u.useEffect)(()=>{let e=se();We(e.css.lasik||``),Ke(e.templates.lasik),Re(e.layout.lasik.offsetXmm),Be(e.layout.lasik.offsetYmm),He(e.layout.lasik.scale),Te(e.followupLasik)},[]),(0,u.useEffect)(()=>{if(!V.data?.value)return;let e=oe(V.data.value);We(e.css.lasik||``),Ke(e.templates.lasik),Re(e.layout.lasik.offsetXmm),Be(e.layout.lasik.offsetYmm),He(e.layout.lasik.scale),Te(e.followupLasik),ae(e)},[V.data]),(0,u.useEffect)(()=>{let e=h?.followupNames??[];g(t=>t.map((t,n)=>({...t,type:e[n]??t.type})))},[h?.followupNames]),!t)return null;let H=qe.data?.value;H&&typeof H==`object`&&H.enabled;let U=r.patient.getPatient.useQuery(m??0,{enabled:!!m,refetchOnWindowFocus:!1}),W=r.medical.getSheetEntry.useQuery({patientId:m??0,sheetType:p},{enabled:!!m,refetchOnWindowFocus:!1}),Je=p===`consultant`?`lasik`:p===`lasik`?`consultant`:null,G=r.medical.getSheetEntry.useQuery({patientId:m??0,sheetType:Je??`consultant`},{enabled:!!m&&we&&!!Je,refetchOnWindowFocus:!1}),Ye=r.medical.getPatientPageState.useQuery({patientId:m??0,page:`examination`},{enabled:!!m,refetchOnWindowFocus:!1}),K=r.medical.getExaminationsByPatient.useQuery({patientId:m??0},{enabled:!!m,refetchOnWindowFocus:!1}),q=r.medical.getGlassesRecordsByPatient.useQuery({patientId:m??0},{enabled:!!m,refetchOnWindowFocus:!1}),J=r.medical.getAutorefractometryByPatient.useQuery({patientId:m??0},{enabled:!!m,refetchOnWindowFocus:!1}),Xe=r.medical.getExaminationChecklistsByPatient.useQuery({patientId:m??0},{enabled:!!m,refetchOnWindowFocus:!1}),Y=r.medical.getVisitsByPatient.useQuery({patientId:m??0},{enabled:!!m,refetchOnWindowFocus:!1}),X=r.medical.getMedicalReportsByPatient.useQuery({patientId:m??0},{enabled:!!m,refetchOnWindowFocus:!1}),Ze=r.medical.getPrescriptionsByPatient.useQuery({patientId:m??0},{enabled:!!m,refetchOnWindowFocus:!1}),Qe=r.medical.getSurgeriesByPatient.useQuery({patientId:m??0},{enabled:!!m,refetchOnWindowFocus:!1}),$e=r.medical.getFollowupVisitsByPatient.useQuery({patientId:m??0},{enabled:!!m,refetchOnWindowFocus:!1}),Z=r.medical.getFollowupSheets.useQuery({patientId:m??0},{enabled:!!m&&(p===`consultant`||p===`lasik`),refetchOnWindowFocus:!1}),et=r.medical.getPentacamFilesByPatient.useQuery({patientId:m??0},{enabled:!!m,refetchOnWindowFocus:!1}),tt=r.medical.getTestRequestsByPatient.useQuery({patientId:m??0},{enabled:!!m,refetchOnWindowFocus:!1}),Q=r.medical.getMedicalHistoryByPatient.useQuery({patientId:m??0},{enabled:!!m,refetchOnWindowFocus:!1}),nt=r.medical.upsertMedicalHistory.useMutation();(0,u.useEffect)(()=>{if(!Z.data)return;let e=Z.data.slice().sort((e,t)=>e.version-t.version).flatMap(e=>(e.items??[]).slice().map(t=>({...t,sheetVersion:e.version}))).filter(e=>e.followupDate).sort((e,t)=>{let n=new Date(e.followupDate).getTime()-new Date(t.followupDate).getTime();if(n!==0)return n;let r=Number(e.sheetVersion)-Number(t.sheetVersion);return r===0?Number(e.tableIndex)-Number(t.tableIndex):r});if(e.length===0)return;let t=e=>{if(!e)return{};try{return typeof e==`string`?JSON.parse(e):e}catch{return{}}};g(e.slice(0,4).map((e,n)=>{let r=t(e.refracOD),i=t(e.refracOS),a=t(e.flapOD),o=t(e.flapOS);return{id:e.id,date:e.followupDate?new Date(e.followupDate).toISOString().split(`T`)[0]:``,type:h.followupNames?.[n]??Ee[n]?.type??``,odVa:e.vaOD??``,osVa:e.vaOS??``,odS:r.s??``,odC:r.c??``,odAxis:r.axis??``,osS:i.s??``,osC:i.c??``,osAxis:i.axis??``,odFlapEdges:a.edges??``,odFlapBed:a.bed??``,osFlapEdges:o.edges??``,osFlapBed:o.bed??``,odIop:e.iopOD??``,osIop:e.iopOS??``,treatment:e.treatment??``,notes:e.notes??``}}))},[Z.data,h.followupNames]),(0,u.useEffect)(()=>{if(Q.data&&Q.data.length>0){let e=Q.data[0];if(v({"سكر؟":e.diabetes?`yes`:`no`,"ضغط؟":e.hypertension?`yes`:`no`,"الغدة الدرقية؟":e.thyroid?`yes`:`no`,"أمراض مناعة؟":e.autoimmune?`yes`:`no`,"ماء زرقاء؟":e.glaucoma?`yes`:`no`,"قرنية مخروطية بالعائلة؟":e.familyKeratoconus?`yes`:`no`}),e.previousSurgeries||e.medications||e.familyHistory){let t=[e.previousSurgeries&&`عمليات سابقة: ${e.previousSurgeries}`,e.medications&&`أدوية: ${e.medications}`,e.familyHistory&&`تاريخ عائلي: ${e.familyHistory}`].filter(Boolean).join(` | `);t&&y(t)}}else v({"سكر؟":`no`,"ضغط؟":`no`,"الغدة الدرقية؟":`no`,"أمراض مناعة؟":`no`,"ماء زرقاء؟":`no`,"قرنية مخروطية بالعائلة؟":`no`})},[Q.data]),(0,u.useEffect)(()=>{if(!m)return;let e=ve({patientId:m,onUpdate:()=>{Promise.all([W.refetch(),G.refetch(),U.refetch(),K.refetch(),q.refetch(),J.refetch(),Xe.refetch(),Y.refetch(),X.refetch(),Ze.refetch(),Qe.refetch(),$e.refetch(),Z.refetch(),et.refetch(),tt.refetch()])}});return()=>e?.close()},[m,W,G,U,K,q,J,Xe,Y,X,Ze,Qe,$e,et,tt]);let rt=r.medical.saveSheetEntry.useMutation({onSuccess:()=>{s.success(`تم الحفظ`)}}),it=r.medical.saveRefractionToExamination.useMutation(),at=e=>{D(t=>({...t,patientName:e.fullName??``,phone:e.phone??``,alternatePhone:e.alternatePhone??``,age:e.age==null?``:String(e.age),dateOfBirth:pe(e),address:e.address??``,patientCode:e.patientCode??``,job:e.occupation??``})),e.id&&n(`${f.startsWith(`/patient-hub/`)?`/patient-hub`:``}/sheets/${p}/${e.id}`)};(0,u.useEffect)(()=>{if(!U.data)return;let e=U.data;D(t=>({...t,patientName:e.fullName??``,phone:e.phone??``,alternatePhone:e.alternatePhone??``,age:e.age==null?``:String(e.age),dateOfBirth:pe(e),address:e.address??``,patientCode:e.patientCode??``,job:e.occupation??``}))},[U.data]);let ot=W.data??G.data;(0,u.useEffect)(()=>{if(ot)try{let e=JSON.parse(ot);if(e.formData&&D(t=>({...t,...e.formData,patientName:t.patientName||e.formData.patientName,phone:t.phone||e.formData.phone,alternatePhone:t.alternatePhone||e.formData.alternatePhone||``,age:t.age||e.formData.age,dateOfBirth:t.dateOfBirth||fe(e.formData.dateOfBirth),address:t.address||e.formData.address})),e.examData&&k(t=>({autorefraction:{od:{...t.autorefraction.od,...e.examData.autorefraction?.od??{}},os:{...t.autorefraction.os,...e.examData.autorefraction?.os??{}}},pentacam:{od:{...t.pentacam.od,...e.examData.pentacam?.od??{}},os:{...t.pentacam.os,...e.examData.pentacam?.os??{}}}})),e.signatures&&M({reception:e.signatures.reception??``,nurse:e.signatures.nurse??``,technician:e.signatures.technician??``,doctor:e.signatures.doctor??``}),e.consultantExam&&I(t=>({...t,...e.consultantExam})),e.medicalHistory&&v(t=>({...e.medicalHistory,...t})),e.medicalHistoryOther&&y(e.medicalHistoryOther),e.operationDetails){x(e.operationDetails.type??``),C(e.operationDetails.date??``);let t=e.operationDetails.eyes??{},n=!!t.right,r=!!t.left,i=!!t.both||n&&r;T({right:i?!0:n,left:i?!0:r,both:i})}e.diagnosisText&&N(e.diagnosisText),e.finalDecisionText&&P(e.finalDecisionText)}catch{}},[ot]),(0,u.useEffect)(()=>{if(!K.data||K.data.length===0)return;let e=K.data[0];if(e.autorefraction){let t=e.autorefraction;k(e=>({autorefraction:{od:{...e.autorefraction.od,...t?.od??{}},os:{...e.autorefraction.os,...t?.os??{}}},pentacam:e.pentacam}))}if(e.pentacam){let t=e.pentacam;k(e=>({autorefraction:e.autorefraction,pentacam:{od:{...e.pentacam.od,...t?.od??{}},os:{...e.pentacam.os,...t?.os??{}}}}))}},[K.data]),(0,u.useEffect)(()=>{let e=(q.data??[])[0];e&&Ae({od:{s:String(e.sOD??``),c:String(e.cOD??``),axis:String(e.axisOD??``)},os:{s:String(e.sOS??``),c:String(e.cOS??``),axis:String(e.axisOS??``)}})},[q.data]),(0,u.useEffect)(()=>{let e=(J.data??[])[0];e&&k(t=>({...t,autorefraction:{od:{...t.autorefraction.od,s:String(e.sphereOD??``),c:String(e.cylinderOD??``),axis:String(e.axisOD??``),ucva:String(e.ucvaOD??``),bcva:String(e.bcvaOD??``),iop:String(e.iopOD??``)},os:{...t.autorefraction.os,s:String(e.sphereOS??``),c:String(e.cylinderOS??``),axis:String(e.axisOS??``),ucva:String(e.ucvaOS??``),bcva:String(e.bcvaOS??``),iop:String(e.iopOS??``)}}}))},[J.data]),(0,u.useEffect)(()=>{let e=(K.data??[])[0],t=(Y.data??[]).find(t=>Number(t.id)===Number(e?.visitId))??(Y.data??[])[0],n=String(t?.chiefComplaint??``).trim();n&&I(e=>({...e,complains:n}))},[K.data,W.data,Y.data]),(0,u.useEffect)(()=>{let e=(X.data??[])[0];N(String(e?.diagnosis??``)),P(String(e?.recommendations??e?.treatment??``))},[X.data]),(0,u.useEffect)(()=>{let e=Ye.data?.data;if(!e)return;let t=String(e.doctorName??``).trim()||String(e.signatures?.doctor??``).trim();t&&M(e=>({...e,doctor:t}))},[Ye.data]),(0,u.useEffect)(()=>{let t=String(e?.name??``).trim();if(!t)return;let n=String(e?.role??``).toLowerCase();M(e=>({...e,reception:n===`reception`?t:e.reception,nurse:n===`nurse`?t:e.nurse,technician:n===`technician`?t:e.technician,doctor:n===`doctor`?e.doctor||t:e.doctor}))},[e?.name,e?.role,W.data,Ye.data]);let st=async()=>{if(!m){s.error(`يرجى اختيار المريض أولاً`);return}try{let e=(()=>{try{return W.data?JSON.parse(W.data):{}}catch{return{}}})(),t=(e,t)=>e&&e.trim()?e:t,n={autorefraction:{od:{...e.examData?.autorefraction?.od??{},ucva:t(O.autorefraction.od.ucva,e.examData?.autorefraction?.od?.ucva),bcva:t(O.autorefraction.od.bcva,e.examData?.autorefraction?.od?.bcva),s:t(O.autorefraction.od.s,e.examData?.autorefraction?.od?.s),c:t(O.autorefraction.od.c,e.examData?.autorefraction?.od?.c),axis:t(O.autorefraction.od.axis,e.examData?.autorefraction?.od?.axis),iop:t(O.autorefraction.od.iop,e.examData?.autorefraction?.od?.iop)},os:{...e.examData?.autorefraction?.os??{},ucva:t(O.autorefraction.os.ucva,e.examData?.autorefraction?.os?.ucva),bcva:t(O.autorefraction.os.bcva,e.examData?.autorefraction?.os?.bcva),s:t(O.autorefraction.os.s,e.examData?.autorefraction?.os?.s),c:t(O.autorefraction.os.c,e.examData?.autorefraction?.os?.c),axis:t(O.autorefraction.os.axis,e.examData?.autorefraction?.os?.axis),iop:t(O.autorefraction.os.iop,e.examData?.autorefraction?.os?.iop)}},pentacam:{od:{...e.examData?.pentacam?.od??{},k1:t(O.pentacam.od.k1,e.examData?.pentacam?.od?.k1),k2:t(O.pentacam.od.k2,e.examData?.pentacam?.od?.k2),ax1:t(O.pentacam.od.ax1,e.examData?.pentacam?.od?.ax1),ax2:t(O.pentacam.od.ax2,e.examData?.pentacam?.od?.ax2),thinnest:t(O.pentacam.od.thinnest,e.examData?.pentacam?.od?.thinnest),apex:t(O.pentacam.od.apex,e.examData?.pentacam?.od?.apex),residual:t(O.pentacam.od.residual,e.examData?.pentacam?.od?.residual),ttt:t(O.pentacam.od.ttt,e.examData?.pentacam?.od?.ttt),ablation:t(O.pentacam.od.ablation,e.examData?.pentacam?.od?.ablation)},os:{...e.examData?.pentacam?.os??{},k1:t(O.pentacam.os.k1,e.examData?.pentacam?.os?.k1),k2:t(O.pentacam.os.k2,e.examData?.pentacam?.os?.k2),ax1:t(O.pentacam.os.ax1,e.examData?.pentacam?.os?.ax1),ax2:t(O.pentacam.os.ax2,e.examData?.pentacam?.os?.ax2),thinnest:t(O.pentacam.os.thinnest,e.examData?.pentacam?.os?.thinnest),apex:t(O.pentacam.os.apex,e.examData?.pentacam?.os?.apex),residual:t(O.pentacam.os.residual,e.examData?.pentacam?.os?.residual),ttt:t(O.pentacam.os.ttt,e.examData?.pentacam?.os?.ttt),ablation:t(O.pentacam.os.ablation,e.examData?.pentacam?.os?.ablation)}}};await rt.mutateAsync({patientId:m,sheetType:p,content:JSON.stringify({...e,formData:{...e.formData??{},...E},examData:n,consultantExam:F,medicalHistory:_,medicalHistoryOther:De,diagnosisText:Ne,finalDecisionText:Pe,operationDetails:{type:b,date:S,eyes:w}})}),await nt.mutateAsync({patientId:m,diabetes:_[`سكر؟`]===`yes`,hypertension:_[`ضغط؟`]===`yes`,thyroid:_[`الغدة الدرقية؟`]===`yes`,autoimmune:_[`أمراض مناعة؟`]===`yes`,glaucoma:_[`ماء زرقاء؟`]===`yes`,familyKeratoconus:_[`قرنية مخروطية بالعائلة؟`]===`yes`}),await it.mutateAsync({patientId:m,glassesData:{od:{s:A.od.s||void 0,c:A.od.c||void 0,axis:A.od.axis||void 0},os:{s:A.os.s||void 0,c:A.os.c||void 0,axis:A.os.axis||void 0}}})}catch(e){s.error(o(e,`حدث خطأ أثناء الحفظ`))}},ct=()=>{re(`${String(E.patientName||E.patientCode||m||`lasik-sheet`).trim()}.pdf`,{forceBrowserPrint:!0})},lt=(e=!1)=>{let t=parseFloat(O.pentacam.od.thinnest),n=parseFloat(O.pentacam.os.thinnest),r=parseFloat(O.autorefraction.od.iop),i=parseFloat(O.autorefraction.os.iop);new Date().toLocaleDateString(`en-GB`);let a=(e,t)=>n=>k(r=>({...r,autorefraction:{...r.autorefraction,[e]:{...r.autorefraction[e],[t]:n.target.value}}})),o=(e,t)=>n=>Ae(r=>({...r,[e]:{...r[e],[t]:n.target.value}})),s=(e,t)=>n=>k(r=>({...r,pentacam:{...r.pentacam,[e]:{...r.pentacam[e],[t]:n.target.value}}})),c=`w-full text-center bg-transparent border-0 border-b border-solid border-[#737685] focus:outline-none focus:border-[#003d9b] py-1 text-sm`,l=`p-1 border border-[#c3c6d6]`;return(0,d.jsxs)(`div`,{className:`lasik-sheet relative overflow-hidden bg-white text-[#191c1e] font-sans p-8 print:p-[10mm] print:border-0 print:shadow-none border border-[#c3c6d6] shadow-sm flex flex-col gap-5 w-[210mm] max-w-full mx-auto`,dir:`ltr`,children:[(0,d.jsx)(ge,{}),(0,d.jsx)(he,{sheetType:xe,bottomContent:p===`consultant`?void 0:(0,d.jsxs)(`div`,{className:`flex w-full items-center justify-between gap-5 text-[11px]`,dir:`rtl`,children:[(0,d.jsxs)(`div`,{className:`flex min-w-0 items-center gap-2 whitespace-nowrap`,children:[(0,d.jsx)(`span`,{className:`font-bold text-[#434654]`,children:`تاريخ العملية:`}),(0,d.jsx)(ne,{className:`h-7 w-40 shrink-0 rounded-none border-0 border-b border-[#c3c6d6] bg-transparent px-1 text-center text-[11px] font-normal`,inputClassName:`min-w-[7.5rem] w-[7.5rem] px-1 text-center tabular-nums`,value:S,onChange:e=>C(e.target.value)})]}),(0,d.jsx)(`div`,{className:`flex items-center justify-center gap-4 font-bold`,dir:`ltr`,children:[[`PRK`,`PRK`],[`LASIK`,`LASIK`],[`F.S`,`FS`],[`F.L`,`FL`],[`IOL`,`IOL`],[`ICL`,`ICL`]].map(([e,t])=>(0,d.jsxs)(`label`,{className:`inline-flex items-center gap-1`,children:[(0,d.jsx)(`input`,{type:`checkbox`,checked:b===t,onChange:()=>x(b===t?``:t)}),(0,d.jsx)(`span`,{children:e})]},t))}),(0,d.jsxs)(`div`,{className:`flex items-center gap-3 whitespace-nowrap`,dir:`ltr`,children:[(0,d.jsx)(`span`,{className:`font-bold text-[#434654]`,children:`Eye:`}),[[`OD`,`right`],[`OS`,`left`],[`OU`,`both`]].map(([e,t])=>(0,d.jsxs)(`label`,{className:`flex items-center gap-1 font-bold`,children:[(0,d.jsx)(`input`,{type:`checkbox`,checked:w[t],onChange:e=>{let n=e.target.checked;if(t===`both`){T({right:n,left:n,both:n});return}T(e=>{let r={...e,[t]:n};return{...r,both:r.right&&r.left}})}}),e]},t))]})]})}),(0,d.jsxs)(`section`,{className:`print-lasik-patient-grid p-4 bg-[#f3f4f6] rounded-xl border border-[#c3c6d6] flex flex-col gap-2 text-sm`,dir:`rtl`,children:[(0,d.jsxs)(`div`,{className:`patient-info-grid-3x3 grid grid-cols-3 gap-x-4 gap-y-2 text-xs`,children:[(0,d.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap font-bold`,children:[(0,d.jsx)(`span`,{className:`text-[#434654]`,children:`الاسم:`}),(0,d.jsx)(`input`,{size:(E.patientName||``).length||12,className:`patient-detail-emphasis text-[#003d9b] bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none text-right text-lg font-extrabold`,dir:`rtl`,value:E.patientName,onChange:e=>D(t=>({...t,patientName:e.target.value}))})]}),(0,d.jsxs)(`span`,{className:`inline-flex items-center gap-1 whitespace-nowrap font-bold`,children:[(0,d.jsx)(`span`,{className:`text-[#434654]`,children:`تاريخ الميلاد:`}),(0,d.jsx)(`span`,{className:`px-1 border-b border-[#c3c6d6] text-right`,children:me(E.dateOfBirth)})]}),(0,d.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap font-bold`,children:[(0,d.jsx)(`span`,{className:`text-[#434654]`,children:`السن:`}),(0,d.jsx)(`input`,{size:(E.age||``).length||3,className:`patient-detail-emphasis bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none text-right text-sm font-bold`,dir:`rtl`,value:E.age,onChange:e=>D(t=>({...t,age:e.target.value}))})]})]}),(0,d.jsxs)(`div`,{className:`grid grid-cols-[0.8fr_1.5fr_1fr_1fr] gap-x-4 gap-y-2 text-xs`,children:[(0,d.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap`,children:[(0,d.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`المهنة:`}),(0,d.jsx)(`input`,{size:(E.job||``).length||8,className:`patient-detail-emphasis bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none text-right text-sm font-bold`,dir:`rtl`,value:E.job,onChange:e=>D(t=>({...t,job:e.target.value}))})]}),(0,d.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,d.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`العنوان:`}),(0,d.jsx)(`input`,{size:(E.address||``).length||8,className:`min-w-0 font-normal text-xs bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none text-right`,dir:`rtl`,value:E.address,onChange:e=>D(t=>({...t,address:e.target.value}))})]}),(0,d.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,d.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`التليفون:`}),(0,d.jsx)(`input`,{size:(E.phone||``).length||8,className:`min-w-0 font-normal text-xs bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none text-right`,dir:`rtl`,value:E.phone,onChange:e=>D(t=>({...t,phone:e.target.value}))})]}),(0,d.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,d.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`موبايل:`}),(0,d.jsx)(`input`,{size:(E.alternatePhone||``).length||8,className:`min-w-0 font-normal text-xs bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none text-right`,dir:`rtl`,value:E.alternatePhone,onChange:e=>D(t=>({...t,alternatePhone:e.target.value}))})]})]}),(0,d.jsxs)(`div`,{className:`grid grid-cols-3 gap-x-4 gap-y-2 text-xs`,children:[(0,d.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,d.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`الطبيب:`}),(0,d.jsx)(`input`,{size:(j.doctor||``).length||10,className:`min-w-0 font-normal text-xs bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none text-right`,dir:`rtl`,value:j.doctor,onChange:e=>M(t=>({...t,doctor:e.target.value}))})]}),(0,d.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,d.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`الكود:`}),(0,d.jsx)(`input`,{size:(E.patientCode||``).length||6,className:`min-w-0 font-normal text-xs text-[#526069] bg-transparent border-0 border-b border-[#c3c6d6] focus:outline-none text-right`,dir:`rtl`,value:E.patientCode,onChange:e=>D(t=>({...t,patientCode:e.target.value}))})]}),(0,d.jsxs)(`label`,{className:`inline-flex items-center gap-1 whitespace-nowrap min-w-0 shrink`,children:[(0,d.jsx)(`span`,{className:`text-[#434654] shrink-0`,children:`تاريخ الفحص:`}),(0,d.jsx)(ne,{className:`h-6 font-normal text-xs bg-transparent border-0 border-b border-[#c3c6d6] rounded-none px-1 text-right`,value:E.examinationDate,onChange:e=>D(t=>({...t,examinationDate:e.target.value}))})]})]})]}),(0,d.jsxs)(`section`,{className:`print-lasik-history-visual-row flex flex-wrap items-stretch gap-3`,dir:`rtl`,children:[p===`external`?null:(0,d.jsx)(`div`,{className:`print-lasik-questions flex h-full w-full sm:w-[calc(75%-0.375rem)] min-w-0 flex-col`,children:(0,d.jsxs)(`table`,{className:`w-full h-full border-collapse border border-[#c3c6d6] rounded-lg overflow-hidden text-sm`,children:[(0,d.jsx)(`thead`,{className:`bg-[#e7e8ea]`,children:(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`th`,{className:`w-12 p-2 border border-[#c3c6d6]`,children:`لا`}),(0,d.jsx)(`th`,{className:`w-12 p-2 border border-[#c3c6d6]`,children:`نعم`}),(0,d.jsx)(`th`,{className:`p-2 border border-[#c3c6d6] text-right`,children:`التاريخ المرضي`}),(0,d.jsx)(`th`,{className:`w-12 p-2 border border-[#c3c6d6]`,children:`لا`}),(0,d.jsx)(`th`,{className:`w-12 p-2 border border-[#c3c6d6]`,children:`نعم`}),(0,d.jsx)(`th`,{className:`p-2 border border-[#c3c6d6] text-right`,children:`التاريخ المرضي`})]})}),(0,d.jsxs)(`tbody`,{children:[[[`قرنية مخروطية بالعائلة؟`,`الغدة الدرقية؟`],[`ماء زرقاء؟`,`أمراض مناعة؟`],[`ضغط؟`,`سكر؟`]].map((e,t)=>(0,d.jsx)(`tr`,{children:e.map((e,n)=>e?(0,d.jsxs)(u.Fragment,{children:[(0,d.jsx)(`td`,{className:`text-center border border-[#c3c6d6]`,children:(0,d.jsx)(`input`,{type:`checkbox`,className:`w-4 h-4 rounded text-[#003d9b]`,checked:_[e]===`no`,onChange:t=>{let n=t.target.checked?`no`:``;v(t=>{let r={...t,[e]:n};return m&&nt.mutate({patientId:m,diabetes:r[`سكر؟`]===`yes`,hypertension:r[`ضغط؟`]===`yes`,thyroid:r[`الغدة الدرقية؟`]===`yes`,autoimmune:r[`أمراض مناعة؟`]===`yes`,glaucoma:r[`ماء زرقاء؟`]===`yes`,familyKeratoconus:r[`قرنية مخروطية بالعائلة؟`]===`yes`}),r})}})}),(0,d.jsx)(`td`,{className:`text-center border border-[#c3c6d6]`,children:(0,d.jsx)(`input`,{type:`checkbox`,className:`w-4 h-4 rounded text-[#003d9b]`,checked:_[e]===`yes`,onChange:t=>{let n=t.target.checked?`yes`:``;v(t=>{let r={...t,[e]:n};return m&&nt.mutate({patientId:m,diabetes:r[`سكر؟`]===`yes`,hypertension:r[`ضغط؟`]===`yes`,thyroid:r[`الغدة الدرقية؟`]===`yes`,autoimmune:r[`أمراض مناعة؟`]===`yes`,glaucoma:r[`ماء زرقاء؟`]===`yes`,familyKeratoconus:r[`قرنية مخروطية بالعائلة؟`]===`yes`}),r})}})}),(0,d.jsx)(`td`,{className:`p-1.5 border border-[#c3c6d6] text-right`,children:(0,d.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,d.jsx)(`span`,{children:e}),e===`سكر؟`&&_[e]===`yes`?(0,d.jsxs)(`select`,{className:`text-xs border border-[#c3c6d6] rounded px-1.5 py-1 bg-white`,value:Oe,onChange:e=>ke(e.target.value),children:[(0,d.jsx)(`option`,{value:``,children:`مدة الإصابة`}),(0,d.jsx)(`option`,{value:`less than 5 years`,children:`أقل من 5 سنوات`}),(0,d.jsx)(`option`,{value:`5-10 years`,children:`من 5 إلى 10 سنوات`}),(0,d.jsx)(`option`,{value:`more than 10 years`,children:`أكثر من 10 سنوات`})]}):null]})})]},`${t}-${n}`):(0,d.jsxs)(u.Fragment,{children:[(0,d.jsx)(`td`,{className:`border border-[#c3c6d6] bg-[#f8f9fb]`}),(0,d.jsx)(`td`,{className:`border border-[#c3c6d6] bg-[#f8f9fb]`}),(0,d.jsx)(`td`,{className:`border border-[#c3c6d6] bg-[#f8f9fb]`})]},`${t}-${n}`))},t)),(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{className:`p-1.5 border border-[#c3c6d6] text-right bg-[#f3f4f6]`,colSpan:2,children:`أخرى؟`}),(0,d.jsx)(`td`,{className:`p-1.5 border border-[#c3c6d6]`,colSpan:4,children:(0,d.jsx)(`input`,{className:`w-full h-6 border-0 border-b border-[#c3c6d6] bg-transparent px-1 outline-none`,value:De,onChange:e=>y(e.target.value)})})]})]})]})}),p===`external`?(0,d.jsx)(`div`,{className:`print-external-vision-grid grid w-full grid-cols-3 gap-2`,dir:`ltr`,children:[{key:`iop`,label:`IOP`,unit:`mmHg`},{key:`ucva`,label:`UCVA`,unit:`Eye`},{key:`bcva`,label:`BCVA`,unit:`Eye`}].map(e=>(0,d.jsxs)(`table`,{className:`w-full text-center border-collapse`,children:[(0,d.jsx)(`thead`,{className:`bg-[#e7e8ea] text-xs font-bold uppercase`,children:(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`th`,{className:l,children:e.label}),(0,d.jsx)(`th`,{className:`${l} text-[#003d9b]`,children:`OD`}),(0,d.jsx)(`th`,{className:`${l} text-[#526069]`,children:`OS`})]})}),(0,d.jsx)(`tbody`,{children:(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{className:`${l} bg-[#f3f4f6] text-[#434654]`,children:e.unit}),(0,d.jsx)(`td`,{className:l,children:(0,d.jsx)(`input`,{className:`${c} ${e.key===`iop`&&!Number.isNaN(r)&&r>21?`text-red-600`:``}`,value:O.autorefraction.od[e.key],onChange:a(`od`,e.key)})}),(0,d.jsx)(`td`,{className:l,children:(0,d.jsx)(`input`,{className:`${c} ${e.key===`iop`&&!Number.isNaN(i)&&i>21?`text-red-600`:``}`,value:O.autorefraction.os[e.key],onChange:a(`os`,e.key)})})]})})]},e.key))}):(0,d.jsxs)(`div`,{className:`print-lasik-visual-grid flex h-full w-full sm:w-[calc(25%-0.375rem)] shrink-0 flex-col gap-2`,dir:`ltr`,children:[(0,d.jsxs)(`table`,{className:`w-full flex-1 text-center border-collapse`,children:[(0,d.jsx)(`thead`,{className:`bg-[#e7e8ea] text-xs font-bold uppercase`,children:(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`th`,{className:l,children:`IOP`}),(0,d.jsx)(`th`,{className:`${l} text-[#003d9b]`,children:`OD`}),(0,d.jsx)(`th`,{className:`${l} text-[#526069]`,children:`OS`})]})}),(0,d.jsx)(`tbody`,{children:(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{className:`${l} bg-[#f3f4f6] text-[#434654]`,children:`mmHg`}),(0,d.jsx)(`td`,{className:l,children:(0,d.jsx)(`input`,{className:`${c} ${!Number.isNaN(r)&&r>21?`text-red-600`:``}`,value:O.autorefraction.od.iop,onChange:a(`od`,`iop`)})}),(0,d.jsx)(`td`,{className:l,children:(0,d.jsx)(`input`,{className:`${c} ${!Number.isNaN(i)&&i>21?`text-red-600`:``}`,value:O.autorefraction.os.iop,onChange:a(`os`,`iop`)})})]})})]}),(0,d.jsxs)(`table`,{className:`w-full flex-1 text-center border-collapse`,children:[(0,d.jsx)(`thead`,{className:`bg-[#e7e8ea] text-xs font-bold uppercase`,children:(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`th`,{className:l,children:`Eye`}),(0,d.jsx)(`th`,{className:l,children:`UCVA`}),(0,d.jsx)(`th`,{className:l,children:`BCVA`})]})}),(0,d.jsxs)(`tbody`,{children:[(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{className:`${l} text-[#003d9b] bg-[#003d9b]/5`,children:`OD`}),(0,d.jsx)(`td`,{className:l,children:(0,d.jsx)(`input`,{className:c,value:O.autorefraction.od.ucva,onChange:a(`od`,`ucva`)})}),(0,d.jsx)(`td`,{className:l,children:(0,d.jsx)(`input`,{className:c,value:O.autorefraction.od.bcva,onChange:a(`od`,`bcva`)})})]}),(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{className:`${l} text-[#526069] bg-[#f3f4f6]`,children:`OS`}),(0,d.jsx)(`td`,{className:l,children:(0,d.jsx)(`input`,{className:c,value:O.autorefraction.os.ucva,onChange:a(`os`,`ucva`)})}),(0,d.jsx)(`td`,{className:l,children:(0,d.jsx)(`input`,{className:c,value:O.autorefraction.os.bcva,onChange:a(`os`,`bcva`)})})]})]})]})]})]}),(0,d.jsx)(`section`,{children:(0,d.jsxs)(`table`,{className:`w-full text-center border-collapse`,children:[(0,d.jsxs)(`thead`,{className:`bg-[#e7e8ea] text-xs uppercase font-bold`,children:[(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`th`,{className:`${l} w-48`,children:`Refraction`}),(0,d.jsx)(`th`,{className:`${l} text-[#003d9b]`,colSpan:3,children:`OD (Right)`}),(0,d.jsx)(`th`,{className:`${l} text-[#526069]`,colSpan:3,children:`OS (Left)`})]}),(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`th`,{className:l,children:`Distance`}),(0,d.jsx)(`th`,{className:l,children:`S`}),(0,d.jsx)(`th`,{className:l,children:`C`}),(0,d.jsx)(`th`,{className:l,children:`A`}),(0,d.jsx)(`th`,{className:l,children:`S`}),(0,d.jsx)(`th`,{className:l,children:`C`}),(0,d.jsx)(`th`,{className:l,children:`A`})]})]}),(0,d.jsxs)(`tbody`,{className:`font-mono`,children:[(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{className:`${l} bg-[#f3f4f6]`,children:`\xA0`}),(0,d.jsx)(`td`,{className:l,children:(0,d.jsx)(`input`,{className:c,value:A.od.s,onChange:o(`od`,`s`)})}),(0,d.jsx)(`td`,{className:l,children:(0,d.jsx)(`input`,{className:c,value:A.od.c,onChange:o(`od`,`c`)})}),(0,d.jsx)(`td`,{className:l,children:(0,d.jsx)(`input`,{className:c,value:A.od.axis,onChange:o(`od`,`axis`)})}),(0,d.jsx)(`td`,{className:l,children:(0,d.jsx)(`input`,{className:c,value:A.os.s,onChange:o(`os`,`s`)})}),(0,d.jsx)(`td`,{className:l,children:(0,d.jsx)(`input`,{className:c,value:A.os.c,onChange:o(`os`,`c`)})}),(0,d.jsx)(`td`,{className:l,children:(0,d.jsx)(`input`,{className:c,value:A.os.axis,onChange:o(`os`,`axis`)})})]}),(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{className:`${l} bg-[#f3f4f6] font-bold text-[#003d9b]`,children:`Reading`}),(0,d.jsx)(`td`,{className:l,colSpan:6,children:(0,d.jsxs)(`div`,{className:`flex items-center justify-center gap-2`,children:[(0,d.jsx)(`span`,{className:`whitespace-nowrap font-bold`,children:`Add +`}),(0,d.jsx)(`input`,{className:`${c} max-w-24`,value:je,onChange:e=>Me(e.target.value)})]})})]}),p===`consultant`?null:(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{className:`${l} text-left bg-[#f3f4f6]`,children:`Fundus`}),(0,d.jsx)(`td`,{className:l,colSpan:3,children:(0,d.jsx)(`input`,{className:c})}),(0,d.jsx)(`td`,{className:l,colSpan:3,children:(0,d.jsx)(`input`,{className:c})})]})]})]})}),p===`consultant`?(0,d.jsxs)(`section`,{className:`print-consultant-diagrams flex flex-wrap items-stretch gap-2 border border-[#c3c6d6] rounded-xl p-4 bg-white flex-1 min-h-[90mm]`,"data-purpose":`clinical-diagrams`,children:[(0,d.jsxs)(`div`,{className:`consultant-eyes-block flex w-full sm:w-1/4 flex-col items-center justify-center gap-4`,children:[(0,d.jsxs)(`div`,{className:`flex flex-col items-center justify-center gap-1`,children:[(0,d.jsxs)(`div`,{className:`w-28 h-28 rounded-full border-4 border-[#003d9b]/30 flex items-center justify-center relative bg-white`,children:[(0,d.jsxs)(`div`,{className:`absolute inset-0 flex items-center justify-center opacity-10`,children:[(0,d.jsx)(`div`,{className:`w-full border-t border-slate-900`}),(0,d.jsx)(`div`,{className:`h-full border-l border-slate-900 absolute top-0`})]}),(0,d.jsx)(`div`,{className:`absolute h-9 w-9 translate-x-3 -translate-y-1 rounded-full bg-[#f4c98a] border border-[#c98f4a]/60 flex items-center justify-center`,children:(0,d.jsx)(`div`,{className:`h-4 w-4 rounded-full bg-white border border-[#c98f4a]/50`})})]}),(0,d.jsx)(`span`,{className:`text-[#003d9b]/70 text-xs font-bold select-none`,children:`OD`})]}),(0,d.jsxs)(`div`,{className:`flex flex-col items-center justify-center gap-1`,children:[(0,d.jsxs)(`div`,{className:`w-28 h-28 rounded-full border-4 border-slate-300 flex items-center justify-center relative bg-white`,children:[(0,d.jsxs)(`div`,{className:`absolute inset-0 flex items-center justify-center opacity-10`,children:[(0,d.jsx)(`div`,{className:`w-full border-t border-slate-900`}),(0,d.jsx)(`div`,{className:`h-full border-l border-slate-900 absolute top-0`})]}),(0,d.jsx)(`div`,{className:`absolute h-9 w-9 -translate-x-3 -translate-y-1 rounded-full bg-[#f4c98a] border border-[#c98f4a]/60 flex items-center justify-center`,children:(0,d.jsx)(`div`,{className:`h-4 w-4 rounded-full bg-white border border-[#c98f4a]/50`})})]}),(0,d.jsx)(`span`,{className:`text-slate-500 text-xs font-bold select-none`,children:`OS`})]})]}),(0,d.jsxs)(`div`,{className:`consultant-right-column flex w-full sm:w-[calc(75%-0.5rem)] flex-col gap-2`,children:[(0,d.jsxs)(`div`,{className:`consultant-complains-block flex-[1] rounded-lg border border-[#c3c6d6] bg-[#f8f9fb] px-3 pb-3 pt-0 text-left text-[12px] text-[#1f2937]`,dir:`ltr`,children:[(0,d.jsx)(`p`,{className:`mb-2 text-[13px] font-bold text-[#003d9b]`,children:`Complains:`}),(0,d.jsx)(`textarea`,{className:`w-full min-h-[48px] rounded-md border border-[#c3c6d6] bg-white px-2 py-1 text-[12px] outline-none print:placeholder-transparent`,value:F.complains,onChange:e=>B(`complains`,e.target.value),placeholder:`اكتب الشكوى يدويًا أو ابحث من الأعراض بالأسفل...`}),(0,d.jsxs)(`div`,{className:`relative mt-2 print:hidden`,children:[(0,d.jsx)(ee,{className:`pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground`}),(0,d.jsx)(`input`,{className:`h-8 w-full rounded-md border border-[#c3c6d6] bg-white pl-7 pr-2 text-[12px] outline-none`,placeholder:`ابحث عن الأعراض...`,value:L,onChange:e=>Fe(e.target.value),onFocus:()=>R(!0),onBlur:()=>window.setTimeout(()=>R(!1),150)}),Ie&&L?(0,d.jsx)(`div`,{className:`absolute z-10 mt-1 max-h-[160px] w-full overflow-y-auto rounded-md border border-[#c3c6d6] bg-white p-1 shadow-md`,children:z.isLoading?(0,d.jsx)(`p`,{className:`px-2 py-1 text-[11px] text-muted-foreground`,children:`جاري التحميل...`}):(z.data??[]).filter(e=>String(e.name??``).toLowerCase().includes(L.toLowerCase())).length===0?(0,d.jsx)(`p`,{className:`px-2 py-1 text-[11px] text-muted-foreground`,children:`لا توجد نتائج`}):(z.data??[]).filter(e=>String(e.name??``).toLowerCase().includes(L.toLowerCase())).map(e=>(0,d.jsx)(`button`,{type:`button`,className:`block w-full rounded px-2 py-1 text-left text-[12px] hover:bg-muted/60`,onMouseDown:t=>{t.preventDefault(),B(`complains`,F.complains?`${F.complains}, ${e.name}`:e.name),Fe(``),R(!1)},children:e.name},e.id))}):null]})]}),(0,d.jsxs)(`div`,{className:`consultant-examination-block flex-[3] rounded-lg border border-[#c3c6d6] bg-[#f8f9fb] p-3 text-left text-[12px] text-[#1f2937]`,dir:`ltr`,children:[(0,d.jsx)(`p`,{className:`mb-2 text-[13px] font-bold text-[#003d9b]`,children:`Examination:`}),(0,d.jsxs)(`div`,{className:`space-y-2`,children:[(0,d.jsxs)(`div`,{className:`flex flex-wrap items-center gap-x-3 gap-y-1`,children:[(0,d.jsx)(`span`,{className:`font-semibold`,children:`1. External Apperance:`}),(0,d.jsxs)(`label`,{className:`inline-flex items-center gap-1.5`,children:[(0,d.jsx)(`input`,{type:`checkbox`,className:`h-3.5 w-3.5 accent-[#003d9b]`,checked:F.externalPtosis,onChange:e=>B(`externalPtosis`,e.target.checked)}),(0,d.jsx)(`span`,{children:`Ptosis`})]}),(0,d.jsxs)(`label`,{className:`inline-flex items-center gap-1.5`,children:[(0,d.jsx)(`input`,{type:`checkbox`,className:`h-3.5 w-3.5 accent-[#003d9b]`,checked:F.externalSquint,onChange:e=>B(`externalSquint`,e.target.checked)}),(0,d.jsx)(`span`,{children:`Squint`})]}),(0,d.jsxs)(`label`,{className:`inline-flex items-center gap-1.5`,children:[(0,d.jsx)(`input`,{type:`checkbox`,className:`h-3.5 w-3.5 accent-[#003d9b]`,checked:F.externalOthers,onChange:e=>B(`externalOthers`,e.target.checked)}),(0,d.jsx)(`span`,{children:`Others`})]}),(0,d.jsx)(`input`,{className:`h-6 min-w-[170px] flex-1 border-0 border-b border-[#c3c6d6] bg-transparent px-1 outline-none`,value:F.externalOthersNote,onChange:e=>B(`externalOthersNote`,e.target.value)})]}),(0,d.jsxs)(`div`,{className:`flex flex-wrap items-center gap-x-3 gap-y-1`,children:[(0,d.jsx)(`span`,{className:`font-semibold`,children:`2. Muscle action:`}),(0,d.jsxs)(`label`,{className:`inline-flex items-center gap-1.5`,children:[(0,d.jsx)(`input`,{type:`checkbox`,className:`h-3.5 w-3.5 accent-[#003d9b]`,checked:F.muscleNormal,onChange:e=>B(`muscleNormal`,e.target.checked)}),(0,d.jsx)(`span`,{children:`Normal`})]}),(0,d.jsxs)(`label`,{className:`inline-flex items-center gap-1.5`,children:[(0,d.jsx)(`input`,{type:`checkbox`,className:`h-3.5 w-3.5 accent-[#003d9b]`,checked:F.muscleAbnormal,onChange:e=>B(`muscleAbnormal`,e.target.checked)}),(0,d.jsx)(`span`,{children:`Abnormal`})]}),(0,d.jsx)(`input`,{className:`h-6 min-w-[190px] flex-1 border-0 border-b border-[#c3c6d6] bg-transparent px-1 outline-none`,value:F.muscleAbnormalNote,onChange:e=>B(`muscleAbnormalNote`,e.target.value)})]}),(0,d.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,d.jsx)(`span`,{className:`font-semibold`,children:`3. Other abnormalities:`}),(0,d.jsx)(`input`,{className:`h-6 flex-1 border-0 border-b border-[#c3c6d6] bg-transparent px-1 outline-none`,value:F.otherAbnormalities,onChange:e=>B(`otherAbnormalities`,e.target.value)})]}),(0,d.jsxs)(`div`,{className:`flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-[#d9dce8] pt-2`,children:[(0,d.jsx)(`span`,{className:`font-bold`,children:`Fundus:`}),(0,d.jsxs)(`label`,{className:`inline-flex items-center gap-1.5`,children:[(0,d.jsx)(`input`,{type:`checkbox`,className:`h-3.5 w-3.5 accent-[#003d9b]`,checked:F.fundusNormal,onChange:e=>B(`fundusNormal`,e.target.checked)}),(0,d.jsx)(`span`,{children:`Normal`})]}),(0,d.jsxs)(`label`,{className:`inline-flex items-center gap-1.5`,children:[(0,d.jsx)(`input`,{type:`checkbox`,className:`h-3.5 w-3.5 accent-[#003d9b]`,checked:F.fundusAbnormal,onChange:e=>B(`fundusAbnormal`,e.target.checked)}),(0,d.jsx)(`span`,{children:`Abnormal`})]}),(0,d.jsx)(`input`,{className:`h-6 min-w-[220px] flex-1 border-0 border-b border-[#c3c6d6] bg-transparent px-1 outline-none`,value:F.fundusAbnormalNote,onChange:e=>B(`fundusAbnormalNote`,e.target.value)})]})]})]})]})]}):(0,d.jsxs)(`section`,{className:`print-lasik-pentacam-right grid grid-cols-1 lg:grid-cols-[1fr_1.3fr_1.3fr] gap-4`,children:[(0,d.jsx)(`div`,{className:`hidden lg:block print:block`}),` `,[`od`,`os`].map(e=>{let r=e===`od`,i=r?t:n;return(0,d.jsxs)(`div`,{className:`${r?`od-bg border-[#003d9b]/20`:`os-bg border-[#c3c6d6]`} print-lasik-eye-card p-2 rounded-xl border`,children:[(0,d.jsx)(`div`,{className:`flex justify-between items-center mb-2`,children:(0,d.jsx)(`span`,{className:`text-[11px] font-bold uppercase px-2 py-1 bg-white rounded shadow-sm ${r?`text-[#003d9b]`:`text-[#526069]`}`,children:r?`Right Eye (RT)`:`Left Eye (LT)`})}),(0,d.jsx)(`table`,{className:`w-full border-collapse text-sm bg-white rounded-lg overflow-hidden`,children:(0,d.jsxs)(`tbody`,{children:[(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{className:`${l} bg-[#f3f4f6] w-1/3 text-right text-[11px]`,children:`K1 (Flat)`}),(0,d.jsx)(`td`,{className:l,children:(0,d.jsx)(`input`,{className:c,value:O.pentacam[e].k1,onChange:s(e,`k1`)})}),(0,d.jsx)(`td`,{className:`${l} bg-[#f3f4f6] text-center w-8 text-[11px]`,rowSpan:2,children:`AX`}),(0,d.jsx)(`td`,{className:l,rowSpan:2,children:(0,d.jsx)(`input`,{className:c,value:O.pentacam[e].ax1,onChange:s(e,`ax1`)})})]}),(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{className:`${l} bg-[#f3f4f6] text-right text-[11px]`,children:`K2 (Steep)`}),(0,d.jsx)(`td`,{className:l,children:(0,d.jsx)(`input`,{className:c,value:O.pentacam[e].k2,onChange:s(e,`k2`)})})]}),(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{className:`${l} bg-[#f3f4f6] text-right text-[11px]`,children:`Thinnest`}),(0,d.jsx)(`td`,{className:l,colSpan:3,children:(0,d.jsx)(`input`,{className:`${c} ${i<480?`text-red-600`:``}`,value:O.pentacam[e].thinnest,onChange:s(e,`thinnest`)})})]}),(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{className:`${l} bg-[#f3f4f6] text-right text-[11px]`,children:`Apex`}),(0,d.jsx)(`td`,{className:l,colSpan:3,children:(0,d.jsx)(`input`,{className:c,value:O.pentacam[e].apex,onChange:s(e,`apex`)})})]}),(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{className:`${l} bg-[#f3f4f6] text-[#003d9b] text-right text-[11px]`,children:`Residual`}),(0,d.jsx)(`td`,{className:`${l} bg-[#003d9b]/5`,colSpan:3,children:(0,d.jsx)(`input`,{className:`${c} text-[#003d9b]`,value:O.pentacam[e].residual,onChange:s(e,`residual`)})})]}),(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{className:`${l} bg-[#f3f4f6] text-right text-[11px]`,children:`Planned TTT`}),(0,d.jsx)(`td`,{className:l,colSpan:3,children:(0,d.jsx)(`input`,{className:c,value:O.pentacam[e].ttt,onChange:s(e,`ttt`)})})]}),(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{className:`${l} bg-[#f3f4f6] text-[#ba1a1a] text-right text-[11px]`,children:`Ablation`}),(0,d.jsx)(`td`,{className:l,colSpan:3,children:(0,d.jsx)(`input`,{className:`${c} text-[#ba1a1a]`,value:O.pentacam[e].ablation,onChange:s(e,`ablation`)})})]})]})})]},e)})]}),p===`consultant`?null:(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(`section`,{children:(0,d.jsxs)(`table`,{className:`w-full text-center border-collapse text-sm`,children:[(0,d.jsx)(`thead`,{className:`bg-[#e7e8ea] text-xs uppercase font-bold text-[#434654]`,children:(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`th`,{className:l,children:`Target Refraction`}),(0,d.jsx)(`th`,{className:l,children:`OD/OS`}),(0,d.jsx)(`th`,{className:l,children:`Before Flap`}),(0,d.jsx)(`th`,{className:l,children:`After Flap`}),(0,d.jsx)(`th`,{className:l,children:`After Treatment`}),(0,d.jsx)(`th`,{className:l,children:`Flap Reposition`}),(0,d.jsx)(`th`,{className:l,children:`Ciclo 3x`}),(0,d.jsx)(`th`,{className:l,children:`Note`})]})}),(0,d.jsx)(`tbody`,{children:[`OD`,`OS`].map(e=>(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{className:l,children:(0,d.jsx)(`input`,{className:c})}),(0,d.jsx)(`td`,{className:`${l} ${e===`OD`?`text-[#003d9b] bg-[#003d9b]/5`:`text-[#526069] bg-[#f3f4f6]`}`,children:e}),(0,d.jsx)(`td`,{className:l,children:(0,d.jsx)(`input`,{className:c})}),(0,d.jsx)(`td`,{className:l,children:(0,d.jsx)(`input`,{className:c})}),(0,d.jsx)(`td`,{className:l,children:(0,d.jsx)(`input`,{className:c})}),(0,d.jsx)(`td`,{className:l,children:(0,d.jsx)(`input`,{className:c})}),(0,d.jsx)(`td`,{className:l,children:(0,d.jsx)(`input`,{className:c})}),(0,d.jsx)(`td`,{className:l,children:(0,d.jsx)(`input`,{className:c})})]},e))})]})})}),(0,d.jsxs)(`footer`,{className:`pt-6 border-t-2 border-[#003d9b] space-y-6 ${p===`consultant`?``:`print-lasik-compact-footer`}`,children:[(0,d.jsxs)(`div`,{className:`print-lasik-footer-grid grid grid-cols-1 lg:grid-cols-12 gap-8`,children:[(0,d.jsxs)(`div`,{className:`lg:col-span-8 space-y-4`,children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`label`,{className:`font-bold text-[#003d9b] text-sm`,children:`Diagnosis / التشخيص:`}),(0,d.jsx)(`textarea`,{className:`mt-1 min-h-24 w-full resize-none border-0 border-b border-[#c3c6d6] bg-transparent p-1 outline-none`,value:Ne,onChange:e=>N(e.target.value)})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`label`,{className:`font-bold text-[#003d9b] text-sm`,children:`Final Decision / القرار النهائي:`}),(0,d.jsx)(`textarea`,{className:`mt-1 min-h-16 w-full resize-none border-0 border-b border-[#c3c6d6] bg-transparent p-1 outline-none`,value:Pe,onChange:e=>P(e.target.value)})]})]}),(0,d.jsxs)(`div`,{className:`lg:col-span-4 border-2 border-[#003d9b] rounded-xl p-4 bg-[#003d9b]/5`,children:[(0,d.jsx)(`div`,{className:`text-center font-bold text-[#003d9b] uppercase text-xs border-b border-[#003d9b]/20 pb-2 mb-3`,children:`Office Notes`}),(0,d.jsx)(`div`,{className:`border-b border-solid border-[#003d9b]/40 h-6 mb-2`}),(0,d.jsx)(`div`,{className:`border-b border-solid border-[#003d9b]/40 h-6 mb-2`}),(0,d.jsx)(`div`,{className:`border-b border-solid border-[#003d9b]/40 h-6`})]})]}),(0,d.jsx)(`div`,{className:`print-lasik-signatures grid grid-cols-2 md:grid-cols-4 gap-8 pt-4 border-t border-[#c3c6d6]`,children:[[`التمريض / Nursing`,j.nurse],[`الطبيب / Surgeon`,j.doctor],[`فني / Optometrist`,j.technician],[`الاستقبال / Reception`,j.reception]].map(([e,t],n)=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,d.jsx)(`span`,{className:`text-[11px] font-bold uppercase ${n===1?`text-[#003d9b]`:`text-[#434654]`}`,children:e}),(0,d.jsx)(`div`,{className:`border-b-2 h-9 flex items-end justify-center ${n===1?`border-[#003d9b]`:`border-[#191c1e]`}`,children:(0,d.jsx)(`span`,{className:`text-xs italic ${n===1?`text-[#003d9b] font-bold`:`text-[#737685]`}`,children:t||``})})]},n))})]})]})},$=p===`consultant`||p===`lasik`,ut=()=>(0,d.jsx)(_e,{titleEn:p===`consultant`?`Consultant Follow-up`:`LASIK Follow-up`,titleAr:p===`consultant`?`متابعة الاستشاري`:`متابعة الليزك`,patientName:E.patientName,patientDOB:me(E.dateOfBirth),operationType:b,setOperationType:x,operationEyes:w,setOperationEyes:T,operationDateRight:S,setOperationDateRight:C,followups:Ee,setFollowups:g,followupLabels:h,signatures:j,readOnly:!0});return(0,d.jsxs)(`div`,{className:`min-h-screen print:min-h-0 bg-[#dde1e7]`,dir:`ltr`,children:[(0,d.jsx)(`style`,{children:`
        ${Ue}
        .lasik-sheet, .lasik-sheet * {
          font-weight: 400 !important;
          text-decoration: none !important;
        }
        .lasik-sheet th { font-weight: 700 !important; }
        .patient-row-bold, .patient-row-bold * { font-weight: 700 !important; }
        .patient-row-normal, .patient-row-normal * { font-weight: 400 !important; }
        .lasik-sheet .border-b,
        .lasik-sheet .border-b-2 {
          border-bottom: none !important;
        }
        .lasik-sheet .sheet-print-header {
          display: grid !important;
          grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr) !important;
          align-items: center !important;
          border-bottom: 2px solid #003d9b !important;
          padding-bottom: 10px !important;
          margin-bottom: 10px !important;
        }
        .lasik-sheet .sheet-print-clinic-name {
          font-size: 24px !important;
          font-weight: 700 !important;
          line-height: 1.1 !important;
          color: #003d9b !important;
        }
        .lasik-sheet .sheet-print-clinic-tagline {
          font-size: 14px !important;
          font-weight: 400 !important;
          line-height: 1.2 !important;
          color: #434654 !important;
        }
        .lasik-sheet .sheet-print-logo {
          width: 64px !important;
          height: 64px !important;
        }
        .lasik-sheet .sheet-print-type {
          font-size: 20px !important;
          font-weight: 700 !important;
          line-height: 1.15 !important;
          color: #191c1e !important;
        }
        .lasik-sheet .sheet-watermark {
          opacity: 1 !important;
        }
        .attached-followup-screen {
          width: 210mm !important;
          max-width: calc(100vw - 32px) !important;
          margin-left: auto !important;
          margin-right: auto !important;
          padding: 0 !important;
          overflow: hidden;
        }
        .attached-followup-screen > .sheet-followup-body {
          width: 210mm !important;
          max-width: 100% !important;
          min-height: 297mm;
          box-sizing: border-box !important;
          padding: 10mm !important;
        }
        @media print {
          .print-page-break { page-break-before: always !important; break-before: page !important; }
          body:has(.attached-followup-page),
          body:has(.attached-followup-page) > #root,
          body .two-page-sheet-print,
          body .two-page-sheet-print > div {
            display: block !important;
            width: 210mm !important;
            min-height: 0 !important;
            margin: 0 auto !important;
            padding: 0 !important;
            align-items: initial !important;
            justify-content: initial !important;
          }
          body:has(.attached-followup-page) #root > div {
            min-height: 0 !important;
          }
          .print-page-center-a4 {
            width: 210mm !important;
            /* The shared print stylesheet reserves 5mm on each edge, so the
               printable A4 height is 287mm. Keep this box slightly inside it
               or Chromium moves the entire sheet to a new page. */
            height: 285mm !important;
            margin: 0 auto !important;
            position: relative !important;
            overflow: hidden !important;
            page-break-before: auto !important;
            break-before: auto !important;
            page-break-after: auto !important;
            break-after: auto !important;
          }
          .print-page-center-a4 > .lasik-sheet {
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
          }
          .two-page-sheet-print .print-page-center-a4 > .lasik-sheet {
            top: 0 !important;
            transform: translateX(-50%) !important;
          }
          .attached-followup-page {
            width: 210mm !important;
            height: 285mm !important;
            margin: 0 auto !important;
            overflow: hidden !important;
            page-break-before: always !important;
            break-before: page !important;
            page-break-after: avoid !important;
            break-after: avoid !important;
          }
          .attached-followup-page > .sheet-followup-body {
            width: 210mm !important;
            height: 285mm !important;
            box-sizing: border-box !important;
            border: 0 !important;
            padding: 7mm 9mm !important;
            box-shadow: none !important;
          }
          .attached-followup-page .sheet-followup-content {
            height: 100% !important;
            gap: 2.2mm !important;
          }
          .attached-followup-page .followup-record-head {
            flex: 0 0 19mm !important;
          }
          .attached-followup-page .followup-record-list {
            min-height: 0 !important;
            gap: 2.2mm !important;
          }
          .attached-followup-page .followup-record-section {
            min-height: 0 !important;
          }
          .attached-followup-page .followup-record-title {
            grid-template-columns: minmax(0, 1fr) 55mm 55mm !important;
          }
          .attached-followup-page .followup-comment-row {
            display: table-row !important;
            height: 8mm !important;
          }
          .attached-followup-page input,
          .attached-followup-page button {
            opacity: 1 !important;
          }
          @page { size: A4 portrait; margin: 0; }
          html, body {
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
          }
          .lasik-print-root {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            overflow: visible !important;
            max-height: none !important;
            page-break-inside: auto !important;
            break-inside: auto !important;
            page-break-after: auto !important;
            break-after: auto !important;
          }
          .lasik-sheet {
            width: 210mm !important;
            max-width: 210mm !important;
            height: auto !important;
            min-height: 0 !important;
            box-sizing: border-box !important;
            padding: 6mm !important;
            padding-top: 0 !important;
            gap: 10px !important;
            font-size: 104% !important;
            line-height: 1.15 !important;
          }
          .lasik-sheet section,
          .lasik-sheet footer,
          .lasik-sheet table,
          .lasik-sheet tr,
          .lasik-sheet td,
          .lasik-sheet th,
          .lasik-sheet label,
          .lasik-sheet input,
          .lasik-sheet select,
          .lasik-sheet span,
          .lasik-sheet div {
            page-break-inside: avoid !important;
          }
          .lasik-sheet table { font-size: 13px !important; }
          .lasik-sheet input,
          .lasik-sheet select {
            font-size: 13px !important;
            padding-top: 1px !important;
            padding-bottom: 1px !important;
          }
          .lasik-sheet input:not([type="checkbox"]):not([type="radio"]),
          .lasik-sheet textarea {
            border: 0 !important;
            border-bottom: 0 !important;
            box-shadow: none !important;
            outline: 0 !important;
            background: transparent !important;
            text-decoration: none !important;
            font-size: 12px !important;
            font-weight: 700 !important;
            line-height: 1.15 !important;
          }
          .patient-row-normal input:not([type="checkbox"]):not([type="radio"]) {
            font-weight: 400 !important;
          }
          .lasik-sheet .patient-detail-emphasis {
            font-size: 14px !important;
            font-weight: 700 !important;
          }
          .lasik-sheet .border-b,
          .lasik-sheet .border-b-2,
          .lasik-sheet .border-b-4,
          .lasik-sheet .border-b-8 {
            border-bottom: 0 !important;
          }
          .lasik-sheet .sheet-print-header {
            border-bottom: 2px solid #003d9b !important;
            padding-bottom: 2mm !important;
            margin-bottom: 2mm !important;
          }
          .lasik-sheet .sheet-print-clinic-name {
            font-size: 21px !important;
            font-weight: 700 !important;
          }
          .lasik-sheet .sheet-print-clinic-tagline {
            font-size: 12px !important;
            font-weight: 400 !important;
          }
          .lasik-sheet .sheet-print-logo {
            width: 15mm !important;
            height: 15mm !important;
          }
          .lasik-sheet .sheet-print-type {
            font-size: 18px !important;
            font-weight: 700 !important;
          }
          .lasik-sheet .sheet-watermark img {
            width: 120mm !important;
            height: 120mm !important;
            opacity: 0.055 !important;
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
          }
          .lasik-sheet .gap-8 { gap: 12px !important; }
          .lasik-sheet .gap-6 { gap: 10px !important; }
          .lasik-sheet .gap-5 { gap: 8px !important; }
          .lasik-sheet .gap-4 { gap: 6px !important; }
          .lasik-sheet .p-8 { padding: 0 !important; }
          .lasik-sheet .p-4 { padding: 8px !important; }
          .print-lasik-eye-card { padding-left: 10mm !important; }
          .lasik-sheet .pt-6 { padding-top: 10px !important; }
          .lasik-sheet .pt-4 { padding-top: 8px !important; }
          .lasik-sheet .pb-3 { padding-bottom: 6px !important; }
          .lasik-sheet .mb-3 { margin-bottom: 6px !important; }
          .lasik-sheet .mt-3 { margin-top: 6px !important; }
          .lasik-sheet .h-9 { height: 28px !important; }
          .lasik-sheet .h-8 { height: 22px !important; }
          .lasik-sheet .h-6 { height: 16px !important; }
          .print-lasik-patient-grid { display: flex !important; flex-wrap: wrap !important; column-gap: 6mm !important; row-gap: 1.5mm !important; }
          .print-lasik-pentacam-right { display: grid !important; grid-template-columns: 1fr 1.3fr 1.3fr !important; }
          .print-consultant-diagrams {
            display: flex !important;
            flex-wrap: wrap !important;
            align-items: stretch !important;
            justify-content: center !important;
            gap: 3mm !important;
            flex: 1 1 auto !important;
            min-height: 0 !important;
            padding: 6mm !important;
          }
          .print-consultant-diagrams .w-28 {
            width: 32mm !important;
            height: 32mm !important;
          }
          .print-consultant-diagrams [class*="f4c98a"] {
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
          }
          .print-consultant-diagrams .consultant-eyes-block {
            width: calc(25% - 1.5mm) !important;
          }
          .print-consultant-diagrams .consultant-right-column {
            width: calc(75% - 1.5mm) !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 2mm !important;
          }
          .print-consultant-diagrams .consultant-complains-block {
            flex: 1 !important;
          }
          .print-consultant-diagrams .consultant-examination-block {
            flex: 3 !important;
          }
          .print-consultant-diagrams p {
            margin-top: 2mm !important;
          }
          .print-consultant-diagrams .consultant-complains-block p {
            margin-top: 0 !important;
          }
          .print-lasik-history-visual-row {
            display: flex !important;
            align-items: stretch !important;
          }
          .print-lasik-questions {
            width: calc(75% - 3mm) !important;
          }
          .print-lasik-visual-grid {
            width: calc(25% - 3mm) !important;
          }
          .print-lasik-questions table {
            font-size: 10px !important;
          }
          .print-lasik-questions th {
            padding: 3px !important;
            line-height: 1.05 !important;
          }
          .print-lasik-questions td {
            padding: 2px 3px !important;
            line-height: 1.05 !important;
          }
          .print-lasik-questions input[type="checkbox"],
          .lasik-sheet input[type="checkbox"] {
            width: 12px !important;
            height: 12px !important;
            -webkit-appearance: none !important;
            appearance: none !important;
            border: 1.2px solid #191c1e !important;
            background-color: white !important;
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
            flex-shrink: 0 !important;
            position: relative !important;
          }
          .print-lasik-questions input[type="checkbox"]:checked,
          .lasik-sheet input[type="checkbox"]:checked {
            background-color: #191c1e !important;
          }
          .print-lasik-questions input[type="checkbox"]:checked::after,
          .lasik-sheet input[type="checkbox"]:checked::after {
            content: "" !important;
            position: absolute !important;
            left: 3px !important;
            top: 0px !important;
            width: 3px !important;
            height: 6px !important;
            border: solid white !important;
            border-width: 0 1.5px 1.5px 0 !important;
            transform: rotate(45deg) !important;
          }
          .lasik-sheet input[type="radio"] {
            -webkit-appearance: none !important;
            appearance: none !important;
            width: 12px !important;
            height: 12px !important;
            border: 1.2px solid #191c1e !important;
            border-radius: 50% !important;
            background-color: white !important;
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
          }
          .lasik-sheet input[type="radio"]:checked {
            background-color: #191c1e !important;
          }
          .print-lasik-footer-grid { display: grid !important; grid-template-columns: minmax(0, 8fr) minmax(0, 4fr) !important; }
          .print-lasik-signatures { display: grid !important; grid-template-columns: repeat(4, minmax(0, 1fr)) !important; }
          .print-lasik-compact-footer {
            padding-top: 3px !important;
          }
          .print-lasik-compact-footer > :not([hidden]) ~ :not([hidden]) {
            margin-top: 3px !important;
          }
          .print-lasik-compact-footer .space-y-4 > :not([hidden]) ~ :not([hidden]) {
            margin-top: 3px !important;
          }
          .print-lasik-compact-footer textarea {
            min-height: 32px !important;
            height: 32px !important;
          }
          .print-lasik-compact-footer .print-lasik-footer-grid > div:last-child {
            padding: 5px !important;
          }
          .print-lasik-compact-footer .print-lasik-footer-grid > div:last-child > div {
            margin-bottom: 3px !important;
            padding-bottom: 2px !important;
          }
          .print-lasik-compact-footer .print-lasik-footer-grid > div:last-child .h-6 {
            height: 14px !important;
            margin-bottom: 2px !important;
          }
          .print-lasik-compact-footer .print-lasik-signatures {
            padding-top: 3px !important;
            gap: 12px !important;
          }
          .print-lasik-compact-footer .print-lasik-signatures .h-9 {
            height: 22px !important;
          }

        }
      `}),(0,d.jsxs)(`header`,{className:`sticky top-0 z-50 print:hidden flex justify-between items-center px-6 py-2 bg-[#f8f9fb] border-b border-[#c3c6d6]`,style:{fontFamily:`Inter, sans-serif`},children:[m?(0,d.jsx)(`div`,{className:`flex items-center gap-1 text-sm`,children:[{key:`consultant`,label:`استشاري`},{key:`lasik`,label:`ليزك`},{key:`external`,label:`اشعه خارجي`},{key:`referral`,label:`خطاب تحويل`}].map(e=>{let t=f.startsWith(`/patient-hub/`)?`/patient-hub`:``,r=e.key===`referral`?`${t}/sheets/referral/${m}`:`${t}/sheets/${e.key}/${m}`;return(0,d.jsx)(`button`,{type:`button`,onClick:()=>n(r),className:`px-3 py-1.5 rounded font-bold ${e.key===p?`bg-[#003d9b] text-white`:`text-[#434654] hover:bg-[#003d9b]/10`}`,children:e.label},e.key)})}):(0,d.jsx)(`div`,{}),(0,d.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,d.jsx)(`div`,{className:`w-60`,children:(0,d.jsx)(ie,{initialPatientId:m,onSelect:at})}),(0,d.jsx)(l,{size:`sm`,className:`bg-[#003d9b] text-white font-bold px-4 py-2 rounded hover:opacity-90 active:scale-95`,onClick:st,disabled:rt.isPending,type:`button`,children:rt.isPending?`حفظ...`:`حفظ`}),(0,d.jsxs)(l,{size:`sm`,variant:`outline`,className:`border-[#003d9b] text-[#003d9b] font-bold px-4 py-2 rounded hover:bg-[#003d9b]/5`,onClick:ct,type:`button`,children:[(0,d.jsx)(te,{className:`h-4 w-4 mr-1`}),` Print`]})]})]}),Ce.printView&&(0,d.jsx)(de,{title:xe,subtitle:E.patientName||void 0,onPrint:ct}),(0,d.jsxs)(`div`,{className:`py-8 print:py-0`,children:[(0,d.jsxs)(`div`,{className:`print:hidden ${Ce.printView?`hidden`:``}`,children:[(0,d.jsx)(`div`,{className:`a4-page-card`,children:lt()}),$&&(0,d.jsx)(`div`,{className:`attached-followup-screen a4-page-card mt-8`,children:ut()})]}),(0,d.jsxs)(`div`,{className:`hidden print:block ${$?`two-page-sheet-print`:``}`,children:[(0,d.jsx)(`div`,{className:`print-page-center-a4`,children:lt(!0)}),$&&(0,d.jsx)(`div`,{className:`attached-followup-page`,children:ut()})]})]})]})}export{ye as t};