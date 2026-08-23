import{r as e}from"./rolldown-runtime-Dw2cE7zH.js";import{s as t}from"./data-core-u1TPZzGK.js";import{m as n}from"./charts-Bnwx77Nk.js";import{t as r}from"./trpc-f87YPGMk.js";import{a as i,o as a}from"./react-core-DaLBU1SO.js";import{t as o}from"./useAuth-D_ZuRiHx.js";import{t as s}from"./button--382im4U.js";import{ft as c}from"./icons-dRIQAKyU.js";import{i as l}from"./nativePdf-DjByE9r5.js";import{t as u}from"./PatientPicker-D7JxMJT6.js";import{i as d,n as f,r as p,t as m}from"./sheetDesigner-BkKvtxSj.js";import{t as h}from"./FollowupTablesBody-DWjvILHE.js";var g=e(n(),1),_=t(),v=[`المتابعة الأولى`,`المتابعة الثانية`,`المتابعة الثالثة`,`المتابعة الرابعة`];function y(){let{user:e,isAuthenticated:t}=o(),[,n]=i(),[,y]=a(`/sheets/consultant/:id/followup`);typeof window<`u`&&new URLSearchParams(window.location.search).get(`original`);let b=y?.id?Number(y.id):void 0,[x,S]=(0,g.useState)(``),[C,w]=(0,g.useState)(``),[T,E]=(0,g.useState)(``),[D,O]=(0,g.useState)({right:!1,left:!1}),[k,A]=(0,g.useState)(m),[j,M]=(0,g.useState)(``),[N,P]=(0,g.useState)(``),[F,I]=(0,g.useState)({doctor:``}),L=(e,t,n,r)=>({id:e,date:``,type:t,right:n,left:r,odVa:``,osVa:``,odS:``,odC:``,odAxis:``,osS:``,osC:``,osAxis:``,odFlapEdges:``,odFlapBed:``,osFlapEdges:``,osFlapBed:``,odIop:``,osIop:``,treatment:``,notes:``}),[R,z]=(0,g.useState)([L(1,`المتابعة الأولى`,!0,!1),L(2,`المتابعة الثانية`,!1,!0),L(3,`المتابعة الثالثة`,!1,!1),L(4,`المتابعة الرابعة`,!0,!0)]),B=r.patient.getPatient.useQuery(b??0,{enabled:!!b,refetchOnWindowFocus:!1}),V=r.medical.getPatientPageState.useQuery({patientId:b??0,page:`examination`},{enabled:!!b,refetchOnWindowFocus:!1}),H=r.medical.getFollowupSheets.useQuery({patientId:b??0,sheetType:`consultant`},{enabled:!!b,refetchOnWindowFocus:!1}),U=r.medical.getSystemSetting.useQuery({key:`sheet_designer_config`},{enabled:t,refetchOnWindowFocus:!1});(0,g.useEffect)(()=>{t||n(`/`)},[t,n]),(0,g.useEffect)(()=>{A(p())},[]),(0,g.useEffect)(()=>{if(!U.data?.value)return;let e=f(U.data.value);A(e),d(e)},[U.data]),(0,g.useEffect)(()=>{z(e=>e.map((e,t)=>({...e,type:v[t%4]})))},[k.followupConsultant?.followupNames]),(0,g.useEffect)(()=>{if(!H.data)return;let e=H.data.slice().sort((e,t)=>e.version-t.version).flatMap(e=>(e.items??[]).slice().map(t=>({...t,sheetVersion:e.version}))).filter(e=>e.followupDate).sort((e,t)=>{let n=new Date(e.followupDate).getTime()-new Date(t.followupDate).getTime();if(n!==0)return n;let r=Number(e.sheetVersion)-Number(t.sheetVersion);return r===0?Number(e.tableIndex)-Number(t.tableIndex):r});if(e.length===0)return;let t=e=>{if(!e)return{s:``,c:``,axis:``};try{let t=typeof e==`string`?JSON.parse(e):e;return{s:t?.s??``,c:t?.c??``,axis:t?.axis??``}}catch{return{s:``,c:``,axis:``}}},n=e=>{if(!e)return{edges:``,bed:``};try{let t=typeof e==`string`?JSON.parse(e):e;return{edges:t?.edges??``,bed:t?.bed??``}}catch{return{edges:``,bed:``}}};z(e.map((e,r)=>{let i=v[r%4],a=e.followupDate?(typeof e.followupDate==`string`?e.followupDate:new Date(e.followupDate).toISOString()).split(`T`)[0]:``,o=t(e.refracOD),s=t(e.refracOS),c=n(e.flapOD),l=n(e.flapOS);return{id:e.id,date:a,type:i,right:!!e.rightEye,left:!!e.leftEye,odVa:e.vaOD??``,osVa:e.vaOS??``,odS:o.s,odC:o.c,odAxis:o.axis,osS:s.s,osC:s.c,osAxis:s.axis,odFlapEdges:c.edges,odFlapBed:c.bed,osFlapEdges:l.edges,osFlapBed:l.bed,odIop:e.iopOD??``,osIop:e.iopOS??``,treatment:e.treatment??``,notes:e.notes??``}}))},[H.data,k.followupConsultant?.followupNames]),(0,g.useEffect)(()=>{if(R.length===0)return;let e=R[R.length-1];if(R.length%4==0&&e.date&&!e.id?.toString().includes(`temp-`)){let e=R.length;if(!(R.length>4&&R.some((t,n)=>n>=e))){let e=Math.max(...R.map(e=>typeof e.id==`number`?e.id:0))+1,t=[];for(let n=0;n<4;n++){let r=R.length+n,i=v[r%4];t.push(L(e+n,i,r%2==0,r%2==1))}z([...R,...t])}}},[R,k.followupConsultant?.followupNames]),(0,g.useEffect)(()=>{let e=B.data;if(e?.fullName&&M(String(e.fullName)),e?.dateOfBirth){let t=new Date(e.dateOfBirth),n=String(t.getMonth()+1).padStart(2,`0`);P(`${String(t.getDate()).padStart(2,`0`)}/${n}/${t.getFullYear()}`)}},[B.data]),(0,g.useEffect)(()=>{let t=String(V.data?.data?.doctorName??``).trim(),n=String(e?.name??``).trim();I({doctor:t||n||``})},[V.data,e?.name]);let W=r.medical.saveFollowupSheet.useMutation(),G=async()=>{if(!b)return;let e=R.filter(e=>e.date);if(e.length===0){alert(`لا توجد بيانات لحفظها`);return}let t=e.map((e,t)=>({tableIndex:t%4,followupDate:e.date,followupName:e.type,rightEye:e.right??!1,leftEye:e.left??!1,vaOD:e.odVa,vaOS:e.osVa,refracOD:{s:e.odS,c:e.odC,axis:e.odAxis},refracOS:{s:e.osS,c:e.osC,axis:e.osAxis},flapOD:{edges:e.odFlapEdges,bed:e.odFlapBed},flapOS:{edges:e.osFlapEdges,bed:e.osFlapBed},iopOD:e.odIop,iopOS:e.osIop,treatment:e.treatment,notes:e.notes}));try{await W.mutateAsync({patientId:b,sheetType:`consultant`,followupItems:t}),alert(`تم حفظ البيانات بنجاح`)}catch(e){alert(`فشل حفظ البيانات`),console.error(e)}};if(!t)return null;let K=k.followupConsultant??m.followupConsultant;return(0,_.jsxs)(`div`,{className:`min-h-screen bg-[#dde1e7] text-foreground`,style:{fontFamily:`Inter, sans-serif`},dir:`rtl`,children:[(0,_.jsx)(`style`,{children:`
        .consultant-followup-page {
          background: #dde1e7;
        }
        .consultant-followup-toolbar {
          backdrop-filter: blur(8px);
        }
        .consultant-followup-shell {
          width: 210mm;
          max-width: calc(100vw - 32px);
          margin: 0 auto;
        }
        .consultant-followup-shell .sheet-followup-body {
          width: 210mm;
          min-height: 297mm;
          margin: 0 auto;
          border: 0;
          padding: 10mm;
          box-shadow: 0 18px 45px rgba(25, 28, 30, 0.12);
        }
        @media print {
          @page { size: A4 portrait; margin: 0; }
          .print\\:hidden,
          .consultant-followup-toolbar {
            display: none !important;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          html, body {
            width: 210mm !important;
            height: 297mm !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
            background: white !important;
          }
          .consultant-followup-page,
          .consultant-followup-page main {
            display: block !important;
            width: 210mm !important;
            height: 297mm !important;
            min-height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
          }
          .print-page-center-a4 {
            width: 210mm !important;
            height: 297mm !important;
            min-height: 0 !important;
            margin: 0 auto !important;
            padding: 0 !important;
            overflow: hidden !important;
            background: white !important;
          }
          .sheet-followup-body {
            width: 210mm !important;
            height: 297mm !important;
            max-height: 297mm !important;
            min-height: 0 !important;
            margin: 0 auto !important;
            box-sizing: border-box !important;
            overflow: hidden !important;
            box-shadow: none !important;
            border: 0 !important;
            padding: 8mm 10mm !important;
            background: white !important;
          }
          .sheet-followup-body .sheet-followup-content {
            height: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 2.8mm !important;
          }
          .sheet-followup-body, .sheet-followup-body * {
            box-sizing: border-box !important;
            font-size: 10px !important;
            line-height: 1.2 !important;
            font-weight: 400 !important;
            text-decoration: none !important;
          }
          .sheet-followup-body th { font-weight: 700 !important; }
          .sheet-followup-body .sheet-print-header {
            flex: 0 0 16mm !important;
            height: 16mm !important;
            min-height: 16mm !important;
            padding: 0 0 1.5mm !important;
            margin: 0 !important;
            align-items: center !important;
          }
          .sheet-followup-body .sheet-print-clinic-name {
            font-size: 14px !important;
            font-weight: 700 !important;
          }
          .sheet-followup-body .sheet-print-clinic-tagline {
            font-size: 8px !important;
          }
          .sheet-followup-body .sheet-print-type {
            font-size: 12px !important;
            font-weight: 700 !important;
          }
          .sheet-followup-body .sheet-print-logo {
            width: 10mm !important;
            height: 10mm !important;
          }
          .sheet-followup-body .followup-record-head {
            flex: 0 0 19mm !important;
            height: 19mm !important;
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
            border-radius: 0.8mm !important;
          }
          .sheet-followup-body .followup-record-head,
          .sheet-followup-body .followup-record-head * {
            font-size: 9.5px !important;
            line-height: 1.15 !important;
          }
          .sheet-followup-body .followup-record-head input,
          .sheet-followup-body .followup-record-head button {
            height: 4.5mm !important;
            min-height: 4.5mm !important;
            border-radius: 1mm !important;
          }
          .sheet-followup-body .followup-record-list {
            flex: 1 1 auto !important;
            min-height: 0 !important;
            gap: 2.2mm !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: flex-start !important;
          }
          .sheet-followup-body .followup-record-section {
            flex: 0 0 56mm !important;
            height: 56mm !important;
            min-height: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            overflow: hidden !important;
            border-radius: 0.8mm !important;
          }
          .sheet-followup-body .followup-record-title {
            flex: 0 0 8mm !important;
            height: 8mm !important;
            min-height: 8mm !important;
            padding: 0 !important;
            grid-template-columns: minmax(0, 1fr) 55mm 55mm !important;
            gap: 0 !important;
          }
          .sheet-followup-body .followup-record-title input {
            height: 6mm !important;
            min-height: 6mm !important;
            font-size: 10.5px !important;
            padding: 0 1mm !important;
          }
          .sheet-followup-body .followup-clinical-grid {
            flex: 0 0 21mm !important;
            height: 21mm !important;
            min-height: 0 !important;
            display: flex !important;
            overflow: hidden !important;
          }
          .sheet-followup-body .followup-record-table {
            flex: 1 1 auto !important;
            height: 42mm !important;
            min-height: 0 !important;
            table-layout: fixed !important;
            border-collapse: collapse !important;
          }
          .sheet-followup-body .followup-record-table th {
            height: auto !important;
            padding: 0.45mm 0.7mm !important;
            font-size: 8.5px !important;
            letter-spacing: 0 !important;
          }
          .sheet-followup-body .followup-record-table td {
            height: auto !important;
            min-height: 0 !important;
            padding: 0 !important;
          }
          .sheet-followup-body .followup-record-title .followup-date-label {
            font-size: 8.5px !important;
            line-height: 1 !important;
          }
          .sheet-followup-body .followup-record-table tr {
            height: auto !important;
          }
          .sheet-followup-body .followup-section-bottom {
            flex: 0 0 12mm !important;
            height: 12mm !important;
            min-height: 12mm !important;
            grid-template-columns: 1fr 48mm !important;
          }
          .sheet-followup-body .followup-section-bottom span,
          .sheet-followup-body .followup-section-bottom label {
            font-size: 7px !important;
            line-height: 1.05 !important;
          }
          .sheet-followup-body .followup-section-bottom textarea {
            height: 8mm !important;
            min-height: 8mm !important;
            padding: 0.7mm 1.2mm !important;
            font-size: 8px !important;
          }
          .sheet-followup-body .followup-section-bottom input[type="checkbox"] {
            width: 2.2mm !important;
            height: 2.2mm !important;
          }
          .sheet-followup-body .followup-signature-row {
            flex: 0 0 16mm !important;
            height: 16mm !important;
            gap: 4mm !important;
            padding-top: 4mm !important;
            font-size: 9.5px !important;
          }
          .sheet-followup-body section {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          .sheet-followup-body input,
          .sheet-followup-body textarea {
            font-size: 9px !important;
            min-height: 0 !important;
            box-shadow: none !important;
            outline: 0 !important;
          }
          .sheet-followup-body input[type="date"]::-webkit-calendar-picker-indicator {
            display: none !important;
          }
          .sheet-followup-body .followup-record-title label button,
          .sheet-followup-body .followup-record-head label button {
            display: none !important;
          }
          .sheet-followup-body .h-10 { height: 5mm !important; }
          .sheet-followup-body .h-8 { height: 5mm !important; }
          .sheet-followup-body .h-7 { height: 5mm !important; }
          .sheet-followup-body .p-6 { padding: 8mm 10mm !important; }
          .sheet-followup-body section { box-shadow: none !important; }
          .sheet-followup-body .sheet-watermark img {
            width: 120mm !important;
            height: 120mm !important;
            opacity: 0.055 !important;
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
          }
        }
      `}),(0,_.jsxs)(`header`,{className:`consultant-followup-toolbar print:hidden sticky top-0 z-50 flex justify-between items-center w-full px-5 py-2 bg-[#f8f9fb]/95 border-b border-[#c3c6d6]`,children:[(0,_.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,_.jsx)(s,{type:`button`,variant:`outline`,className:`border-[#737685] text-foreground text-xs font-bold px-4 py-2 rounded hover:bg-[#edeef0]`,onClick:()=>n(`/sheets/consultant/${b??``}`),children:`كشف الاستشاري`}),(0,_.jsx)(`div`,{className:`w-60`,children:(0,_.jsx)(u,{initialPatientId:b,onSelect:e=>{e?.id&&n(`/sheets/consultant/${e.id}/followup`)}})})]}),(0,_.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,_.jsx)(s,{type:`button`,className:`bg-[#003d9b] text-white text-xs font-bold px-4 py-2 rounded hover:opacity-80 active:scale-95 disabled:opacity-60`,onClick:G,disabled:W.isPending,children:W.isPending?`جاري الحفظ...`:`حفظ`}),(0,_.jsxs)(s,{type:`button`,variant:`outline`,className:`border-[#737685] text-foreground text-xs font-bold px-4 py-2 rounded hover:bg-[#edeef0]`,onClick:()=>void l(`consultant-followup-${b??`sheet`}.pdf`,{forceBrowserPrint:!0}),children:[(0,_.jsx)(c,{className:`h-3 w-3 ml-1`}),` طباعة`]})]})]}),(0,_.jsx)(`div`,{className:`consultant-followup-page flex min-h-screen`,children:(0,_.jsx)(`main`,{className:`py-6 px-4 flex-1 print:p-0`,children:(0,_.jsx)(`div`,{className:`consultant-followup-shell print-page-center-a4`,children:(0,_.jsx)(h,{titleEn:`Consultant Follow-up`,titleAr:`متابعة الاستشاري`,patientName:j,patientDOB:N,operationType:T,setOperationType:E,operationEyes:D,setOperationEyes:O,operationDateRight:C,setOperationDateRight:w,followups:R,setFollowups:z,followupLabels:K,signatures:F})})})})]})}export{y as default};