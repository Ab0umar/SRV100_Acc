import{r as e}from"./rolldown-runtime-Dw2cE7zH.js";import{s as t}from"./data-core-u1TPZzGK.js";import{m as n}from"./charts-Bnwx77Nk.js";import{t as r}from"./trpc-f87YPGMk.js";import{a as i,o as a}from"./react-core-DaLBU1SO.js";import{t as o}from"./useAuth-D_ZuRiHx.js";import{t as s}from"./button--382im4U.js";import{ft as c}from"./icons-dRIQAKyU.js";import{i as l}from"./nativePdf-DjByE9r5.js";import{t as u}from"./PatientPicker-D7JxMJT6.js";import{i as d,n as f,r as p,t as m}from"./sheetDesigner-BkKvtxSj.js";import{t as h}from"./FollowupTablesBody-DWjvILHE.js";var g=e(n(),1),_=t(),v=[`المتابعة الأولى`,`المتابعة الثانية`,`المتابعة الثالثة`,`المتابعة الرابعة`];function y(){let{user:e,isAuthenticated:t}=o(),[,n]=i(),[,y]=a(`/sheets/lasik/:id/followup`);typeof window<`u`&&new URLSearchParams(window.location.search).get(`original`);let b=y?.id?Number(y.id):void 0,[x,S]=(0,g.useState)(``),[C,w]=(0,g.useState)(``),[T,E]=(0,g.useState)(`ليزك`),[D,O]=(0,g.useState)({right:!0,left:!1}),[k,A]=(0,g.useState)(m),[j,M]=(0,g.useState)(``),[N,P]=(0,g.useState)(``),[F,I]=(0,g.useState)({doctor:``}),L=(e,t)=>({id:e,date:``,type:t,odVa:``,osVa:``,odS:``,odC:``,odAxis:``,osS:``,osC:``,osAxis:``,odFlapEdges:``,odFlapBed:``,osFlapEdges:``,osFlapBed:``,odIop:``,osIop:``,treatment:``,notes:``}),[R,z]=(0,g.useState)([L(1,`المتابعة الأولى`),L(2,`المتابعة الثانية`),L(3,`المتابعة الثالثة`),L(4,`المتابعة الرابعة`)]),B=r.patient.getPatient.useQuery(b??0,{enabled:!!b,refetchOnWindowFocus:!1}),V=r.medical.getPatientPageState.useQuery({patientId:b??0,page:`examination`},{enabled:!!b,refetchOnWindowFocus:!1}),H=r.medical.getFollowupSheets.useQuery({patientId:b??0,sheetType:`lasik`},{enabled:!!b,refetchOnWindowFocus:!1}),U=r.medical.getSystemSetting.useQuery({key:`sheet_designer_config`},{enabled:t,refetchOnWindowFocus:!1});(0,g.useEffect)(()=>{t||n(`/`)},[t,n]),(0,g.useEffect)(()=>{A(p())},[]),(0,g.useEffect)(()=>{if(!U.data?.value)return;let e=f(U.data.value);A(e),d(e)},[U.data]),(0,g.useEffect)(()=>{z(e=>e.map((e,t)=>({...e,type:v[t%4]})))},[k.followupLasik?.followupNames]),(0,g.useEffect)(()=>{if(!H.data)return;let e=H.data.slice().sort((e,t)=>e.version-t.version).flatMap(e=>(e.items??[]).slice().map(t=>({...t,sheetVersion:e.version}))).filter(e=>e.followupDate).sort((e,t)=>{let n=new Date(e.followupDate).getTime()-new Date(t.followupDate).getTime();if(n!==0)return n;let r=Number(e.sheetVersion)-Number(t.sheetVersion);return r===0?Number(e.tableIndex)-Number(t.tableIndex):r});if(e.length===0)return;let t=e=>{if(!e)return{s:``,c:``,axis:``};try{let t=typeof e==`string`?JSON.parse(e):e;return{s:t?.s??``,c:t?.c??``,axis:t?.axis??``}}catch{return{s:``,c:``,axis:``}}},n=e=>{if(!e)return{edges:``,bed:``};try{let t=typeof e==`string`?JSON.parse(e):e;return{edges:t?.edges??``,bed:t?.bed??``}}catch{return{edges:``,bed:``}}};z(e.map((e,r)=>{let i=v[r%4],a=e.followupDate?(typeof e.followupDate==`string`?e.followupDate:new Date(e.followupDate).toISOString()).split(`T`)[0]:``,o=t(e.refracOD),s=t(e.refracOS),c=n(e.flapOD),l=n(e.flapOS);return{id:e.id,date:a,type:i,odVa:e.vaOD??``,osVa:e.vaOS??``,odS:o.s,odC:o.c,odAxis:o.axis,osS:s.s,osC:s.c,osAxis:s.axis,odFlapEdges:c.edges,odFlapBed:c.bed,osFlapEdges:l.edges,osFlapBed:l.bed,odIop:e.iopOD??``,osIop:e.iopOS??``,treatment:e.treatment??``,notes:e.notes??``}}))},[H.data,k.followupLasik?.followupNames]),(0,g.useEffect)(()=>{if(R.length===0)return;let e=R[R.length-1];if(R.length%4==0&&e.date&&!e.id?.toString().includes(`temp-`)){let e=R.length;if(!(R.length>4&&R.some((t,n)=>n>=e))){let e=Math.max(...R.map(e=>typeof e.id==`number`?e.id:0))+1,t=[];for(let n=0;n<4;n++){let r=v[(R.length+n)%4];t.push(L(e+n,r))}z([...R,...t])}}},[R,k.followupLasik?.followupNames]),(0,g.useEffect)(()=>{let e=B.data;if(e?.fullName&&M(String(e.fullName)),e?.dateOfBirth){let t=new Date(e.dateOfBirth),n=String(t.getMonth()+1).padStart(2,`0`);P(`${String(t.getDate()).padStart(2,`0`)}/${n}/${t.getFullYear()}`)}},[B.data]),(0,g.useEffect)(()=>{let t=String(V.data?.data?.doctorName??``).trim(),n=String(e?.name??``).trim();I({doctor:t||n||``})},[V.data,e?.name]);let W=r.medical.saveFollowupSheet.useMutation(),G=async()=>{if(!b)return;let e=R.filter(e=>e.date);if(e.length===0){alert(`لا توجد بيانات لحفظها`);return}let t=e.map((e,t)=>({tableIndex:t%4,followupDate:e.date,followupName:e.type,vaOD:e.odVa,vaOS:e.osVa,refracOD:{s:e.odS,c:e.odC,axis:e.odAxis},refracOS:{s:e.osS,c:e.osC,axis:e.osAxis},flapOD:{edges:e.odFlapEdges,bed:e.odFlapBed},flapOS:{edges:e.osFlapEdges,bed:e.osFlapBed},iopOD:e.odIop,iopOS:e.osIop,treatment:e.treatment,notes:e.notes}));try{await W.mutateAsync({patientId:b,sheetType:`lasik`,followupItems:t}),alert(`تم حفظ البيانات بنجاح`)}catch(e){alert(`فشل حفظ البيانات`),console.error(e)}};if(!t)return null;let K=k.followupLasik??m.followupLasik;return(0,_.jsxs)(`div`,{className:`lasik-followup-page min-h-screen bg-[#dde1e7] text-foreground`,style:{fontFamily:`Inter, sans-serif`},children:[(0,_.jsx)(`style`,{children:`
        @media print {
          @page { size: A4 portrait; margin: 0; }
          .print\\:hidden { display: none !important; }
          html,
          body,
          #root,
          .lasik-followup-page,
          .lasik-followup-page main {
            width: 210mm !important;
            min-height: 297mm !important;
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
          }
          .print-page-center-a4 {
            width: 210mm !important;
            max-width: 210mm !important;
            min-height: 297mm !important;
            margin: 0 auto;
          }
          .sheet-followup-body {
            width: 210mm !important;
            min-height: 297mm !important;
            box-sizing: border-box !important;
            margin: 0 auto;
            padding: 10mm !important;
          }
          .sheet-followup-body section { page-break-inside: avoid !important; }
          .sheet-followup-body table { font-size: inherit !important; }
          .sheet-followup-body th,
          .sheet-followup-body td {
            padding: 0 !important;
            line-height: normal !important;
          }
          .sheet-followup-body input,
          .sheet-followup-body select,
          .sheet-followup-body textarea {
            line-height: normal !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          .sheet-followup-body .followup-record-table input {
            font-size: 12px !important;
          }
          .sheet-followup-body .followup-record-title > input {
            font-size: 13px !important;
          }
          .sheet-followup-body section { box-shadow: none !important; }
        }
        .print-page-center-a4 {
          width: 210mm;
          max-width: calc(100vw - 32px);
          margin: 0 auto;
        }
        .print-page-center-a4 .sheet-followup-body {
          width: 210mm;
          max-width: 100%;
          min-height: 297mm;
          box-sizing: border-box;
          padding: 10mm;
        }
        .a4-canvas {
            width: 210mm;
            min-height: 297mm;
            margin: 20px auto;
            background: white;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            padding: 15mm;
            position: relative;
        }
        .od-bg { background-color: rgba(0, 61, 155, 0.03); }
        .os-bg { background-color: transparent; }
        .table-input-cell {
            padding: 0 !important;
        }
        .table-input-cell input {
            height: 100%;
            border-radius: 0;
            text-align: center;
            background-color: transparent;
            border: 1px solid transparent;
            width: 100%;
            transition: all 0.2s;
        }
        .table-input-cell input:focus {
            border-color: #003d9b;
            background-color: #ffffff;
            outline: none;
            box-shadow: 0 0 0 2px rgba(0, 61, 155, 0.1);
        }
        .text-on-surface { color: #191c1e; }
        .text-primary { color: #003d9b; }
        .bg-primary { background-color: #003d9b; }
        .hover:bg-primary-container:hover { background-color: #0052cc; }
        .bg-primary-container { background-color: #0052cc; }
        .text-on-primary-container { color: #c4d2ff; }
        .text-on-surface-variant { color: #434654; }
        .text-outline { color: #737685; }
        .border-outline-variant { border-color: #c3c6d6; }
        .border-outline { border-color: #737685; }
        .bg-surface-container-lowest { background-color: #ffffff; }
        .bg-surface-container-low { background-color: #f3f4f6; }
        .bg-surface-container-high { background-color: #e7e8ea; }
        .bg-surface-container-highest { background-color: #e1e2e4; }
        .bg-tertiary-container { background-color: #006476; }
        .text-on-tertiary-container { color: #70e2ff; }
        .text-secondary { color: #526069; }
        .bg-surface-variant { background-color: #e1e2e4; }
        .bg-surface { background-color: #f8f9fb; }
        
        .mb-section-margin { margin-bottom: 32px; }
        .mt-section-margin { margin-top: 32px; }
        .gap-gutter { gap: 16px; }
        .pt-gutter { padding-top: 16px; }
        
        .font-body-md, .text-body-md { font-size: 14px; line-height: 20px; font-weight: 400; }
        .font-headline-md, .text-headline-md { font-size: 24px; line-height: 32px; font-weight: 600; }
        .font-headline-sm, .text-headline-sm { font-size: 20px; line-height: 28px; font-weight: 600; }
        .font-body-lg, .text-body-lg { font-size: 16px; line-height: 24px; font-weight: 400; }
        .font-display-lg, .text-display-lg { font-size: 32px; line-height: 40px; letter-spacing: -0.02em; font-weight: 700; }
        .font-data-mono { font-size: 14px; line-height: 20px; font-weight: 600; }
        .font-label-caps { font-size: 12px; line-height: 16px; letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; }
      `}),(0,_.jsxs)(`header`,{className:`print:hidden sticky top-0 z-50 flex justify-between items-center w-full px-6 py-2 bg-background border-b border-border/70`,children:[(0,_.jsx)(`span`,{className:`text-base font-bold text-primary`,children:`Ophthalmic Clinic Management`}),(0,_.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,_.jsx)(s,{type:`button`,variant:`outline`,className:`border-[#737685] text-foreground text-xs font-bold px-4 py-2 rounded uppercase tracking-wider hover:bg-[#edeef0]`,onClick:()=>n(`/sheets/lasik/${b??``}`),children:`← Lasik Sheet`}),(0,_.jsx)(`div`,{className:`w-60`,children:(0,_.jsx)(u,{initialPatientId:b,onSelect:e=>{e?.id&&n(`/sheets/lasik/${e.id}/followup`)}})}),(0,_.jsx)(s,{type:`button`,className:`bg-[#003d9b] text-white text-xs font-bold px-4 py-2 rounded uppercase tracking-wider hover:opacity-80 active:scale-95 disabled:opacity-60`,onClick:G,disabled:W.isPending,children:W.isPending?`Saving...`:`Save Sheet`}),(0,_.jsxs)(s,{type:`button`,variant:`outline`,className:`border-[#737685] text-foreground text-xs font-bold px-4 py-2 rounded uppercase tracking-wider hover:bg-[#edeef0]`,onClick:()=>void l(`lasik-followup-${b??`sheet`}.pdf`,{forceBrowserPrint:!0}),children:[(0,_.jsx)(c,{className:`h-3 w-3 mr-1`}),` Print PDF`]})]})]}),(0,_.jsx)(`div`,{className:`flex min-h-screen`,children:(0,_.jsx)(`main`,{className:`py-8 px-6 flex-1 print:p-0`,children:(0,_.jsx)(`div`,{className:`print-page-center-a4`,children:(0,_.jsx)(h,{titleEn:`Lasik Follow-up`,titleAr:`متابعة الليزك`,patientName:j,patientDOB:N,operationType:T,setOperationType:E,operationEyes:D,setOperationEyes:O,operationDateRight:C,setOperationDateRight:w,followups:R,setFollowups:z,followupLabels:K,signatures:F})})})})]})}export{y as default};