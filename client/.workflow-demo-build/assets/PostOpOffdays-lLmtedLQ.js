import{r as e}from"./rolldown-runtime-Dw2cE7zH.js";import{s as t}from"./data-core-u1TPZzGK.js";import{m as n}from"./charts-Bnwx77Nk.js";import{t as r}from"./trpc-f87YPGMk.js";import{o as i}from"./react-core-DaLBU1SO.js";import{r as a}from"./utils-Cnb6lgNC.js";import{i as o}from"./ui-misc-C67Xdctg.js";import{t as s}from"./useAuth-D_ZuRiHx.js";import{t as c}from"./button--382im4U.js";import{Vn as l,ft as u,rt as d}from"./icons-dRIQAKyU.js";import{t as f}from"./input-Dyj6KgtD.js";import{t as p}from"./date-input-Da2a2JTk.js";import{t as m}from"./PatientPicker-D7JxMJT6.js";import{t as h}from"./ClinicalReportFrame-C_U5N443.js";var g=e(n(),1),_=t();function v({children:e}){return(0,_.jsx)(`span`,{className:`text-[11px] font-bold text-[#727780]`,children:e})}function y(e,t){if(!e||!t)return``;let n=new Date(e),r=new Date(t);if(Number.isNaN(n.getTime())||Number.isNaN(r.getTime()))return``;let i=r.getTime()-n.getTime();return i<0?``:String(Math.floor(i/864e5)+1)}function b(){let{isAuthenticated:e,user:t}=s(),[,n]=i(`/post-op-offdays/:id`),b=n?.id?Number(n.id):void 0,x=typeof window<`u`&&new URLSearchParams(window.location.search).get(`visitDate`)||``,[S,C]=(0,g.useState)(b),w=r.patient.getPatient.useQuery(S??0,{enabled:!!S,refetchOnWindowFocus:!1}),T=r.medical.getPostOpOffdaysByPatient.useQuery({patientId:S??0},{enabled:!!S,refetchOnWindowFocus:!1}),E=w.data,D=T.data??[],[O,k]=(0,g.useState)(),[A,j]=(0,g.useState)(``),[M,N]=(0,g.useState)(``),[P,F]=(0,g.useState)(``),[I,L]=(0,g.useState)(``),[R,z]=(0,g.useState)(``),[B,V]=(0,g.useState)(``),[H,U]=(0,g.useState)(``),[W,G]=(0,g.useState)(``),[K,q]=(0,g.useState)(``),[J,Y]=(0,g.useState)(``),[X,Z]=(0,g.useState)(``);(0,g.useEffect)(()=>{b&&C(b)},[b]),(0,g.useEffect)(()=>{let e=y(M,P);e&&L(e)},[M,P]),(0,g.useEffect)(()=>{let e=String(t?.name??``).trim();e&&!W&&G(e)},[W,t?.name]),(0,g.useEffect)(()=>{E&&(q(E.fullName||``),Y(E.patientCode||``),Z(E.dateOfBirth?String(E.dateOfBirth).split(`T`)[0]:``))},[E]),(0,g.useEffect)(()=>{let e=x?D.find(e=>String(e.createdAt??``).split(`T`)[0]===x):D[0];if(!e){k(void 0);return}k(Number(e.id)),j(e.operationDate?String(e.operationDate).split(`T`)[0]:``),z(e.method||``),V(e.vaOD||``),U(e.vaOS||``),N(e.leaveStart?String(e.leaveStart).split(`T`)[0]:``),F(e.returnDate?String(e.returnDate).split(`T`)[0]:``),e.durationDays&&L(String(e.durationDays)),e.doctorName&&G(e.doctorName),e.patientNameOverride&&q(e.patientNameOverride),e.patientCodeOverride&&Y(e.patientCodeOverride),e.patientDobOverride&&Z(String(e.patientDobOverride).split(`T`)[0])},[D,x]);let Q=r.medical.savePostOpOffdaysCertificate.useMutation();return e?(0,_.jsxs)(`div`,{className:`post-op-offdays-root medical-report-brand min-h-screen bg-[#eef5f7] text-[#161d1f]`,children:[(0,_.jsx)(`style`,{children:`
        .offdays-paper {
          width: 210mm;
          min-height: 297mm;
        }
        @media print {
          @page { size: A4 portrait; margin: 0; }
          html, body {
            width: 210mm !important;
            height: 297mm !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
            background: white !important;
          }
          .no-print { display: none !important; }
          .post-op-offdays-root {
            min-height: 0 !important;
            height: 297mm !important;
            background: white !important;
            overflow: hidden !important;
          }
          .offdays-print-shell {
            padding: 0 !important;
            height: 297mm !important;
            overflow: hidden !important;
          }
          .offdays-paper {
            width: 210mm !important;
            height: 297mm !important;
            min-height: 0 !important;
            max-height: 297mm !important;
            margin: 0 !important;
            border: 0 !important;
            box-shadow: none !important;
            padding: 30mm 18mm 12mm !important;
            overflow: hidden !important;
          }
          .offdays-paper header {
            margin-bottom: 6mm !important;
            padding-bottom: 4mm !important;
          }
          .offdays-paper section {
            margin-bottom: 5mm !important;
          }
          .offdays-recommendations {
            margin-bottom: 1mm !important;
          }
          .offdays-paper section:nth-of-type(1) {
            padding: 4mm !important;
          }
          .offdays-paper section:nth-of-type(1) h3 {
            margin-bottom: 2mm !important;
            font-size: 15px !important;
          }
          .offdays-paper p {
            line-height: 1.45 !important;
          }
          .offdays-paper table th,
          .offdays-paper table td {
            padding-top: 1.6mm !important;
            padding-bottom: 1.6mm !important;
          }
          .offdays-paper input {
            height: 7mm !important;
            min-height: 0 !important;
            font-size: 15px !important;
          }
          .offdays-status-table input {
            font-size: 16px !important;
          }
          .offdays-paper .h-20 {
            height: 14mm !important;
          }
          .offdays-paper footer {
            margin-top: 4mm !important;
            padding-top: 3mm !important;
            gap: 14mm !important;
          }
          .offdays-paper footer p {
            margin-bottom: 3mm !important;
          }
          input {
            box-shadow: none !important;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}),(0,_.jsx)(`header`,{className:`no-print sticky top-0 z-50 border-b border-[#c2c7d1] bg-white`,children:(0,_.jsxs)(`div`,{className:`mx-auto flex max-w-7xl items-center justify-between px-6 py-3`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`h1`,{className:`text-lg font-extrabold text-[#00355f]`,children:`Post-Op Offdays Certificate`}),(0,_.jsx)(`p`,{className:`text-xs font-semibold text-[#727780]`,children:`شهادة إجازة مرضية بعد العملية`})]}),(0,_.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,_.jsx)(`div`,{className:`w-72`,children:(0,_.jsx)(m,{initialPatientId:S,onSelect:e=>{e?.id&&C(Number(e.id))}})}),(0,_.jsxs)(c,{type:`button`,variant:`outline`,className:`border-[#00355f] text-[#00355f]`,onClick:async()=>{if(!S){o.error(`اختر مريضاً أولاً`);return}try{await Q.mutateAsync({id:O,patientId:S,operationDate:A||void 0,method:R||void 0,vaOD:B||void 0,vaOS:H||void 0,leaveStart:M||void 0,returnDate:P||void 0,durationDays:I?Number(I):void 0,doctorName:W||void 0,patientNameOverride:K||void 0,patientCodeOverride:J||void 0,patientDobOverride:X||void 0}),o.success(`تم حفظ الشهادة`),await T.refetch()}catch(e){o.error(a(e,`حدث خطأ أثناء الحفظ`))}},disabled:Q.isPending,children:[(0,_.jsx)(d,{className:`mr-2 h-4 w-4`}),Q.isPending?`جارٍ الحفظ...`:`Save`]}),(0,_.jsxs)(c,{type:`button`,className:`bg-[#00355f] text-white`,onClick:()=>window.print(),children:[(0,_.jsx)(u,{className:`mr-2 h-4 w-4`}),`Print`]}),(0,_.jsxs)(c,{type:`button`,variant:`outline`,className:`border-[#c2c7d1]`,onClick:()=>window.print(),children:[(0,_.jsx)(l,{className:`mr-2 h-4 w-4`}),`PDF`]})]})]})}),(0,_.jsx)(`div`,{className:`offdays-print-shell flex justify-center p-8`,dir:`rtl`,children:(0,_.jsx)(h,{title:`Post-Operative Leave Report | تقرير إجازة ما بعد العملية`,generatedDate:A,patient:{name:K,code:J,age:E?.age,birthDate:X,phone:E?.phone,occupation:E?.occupation},signatureLabel:`توقيع الطبيب المعالج`,children:(0,_.jsxs)(`div`,{className:`flex flex-col`,children:[(0,_.jsxs)(`section`,{className:`mb-8 border border-[#c2c7d1] bg-[#eef5f7] p-5`,children:[(0,_.jsx)(`h3`,{className:`mb-3 text-lg font-bold text-[#00355f]`,children:`إفادة`}),(0,_.jsxs)(`p`,{className:`text-[15px] leading-8 text-[#161d1f]`,children:[`يشهد المركز بأن المريض المذكور أدناه قد خضع لإجراء`,` `,(0,_.jsx)(f,{value:R,onChange:e=>z(e.target.value),className:`mx-1 inline-flex h-8 w-52 border-0 border-b border-dotted border-[#727780] bg-transparent px-2 text-center text-base font-bold shadow-none focus-visible:ring-0`}),` `,`، ويتطلب فترة راحة طبية لتقليل الإجهاد البصري وحماية العين أثناء مرحلة التعافي.`]})]}),(0,_.jsxs)(`section`,{className:`hidden`,children:[(0,_.jsxs)(`label`,{className:`flex items-center justify-between gap-2 border-b border-[#c2c7d1] py-2`,children:[(0,_.jsx)(v,{children:`الاسم الكامل:`}),(0,_.jsx)(f,{value:K,onChange:e=>q(e.target.value),className:`h-8 w-56 border-0 border-b border-dotted border-[#727780] bg-transparent text-right text-base font-bold shadow-none focus-visible:ring-0`})]}),(0,_.jsxs)(`label`,{className:`flex items-center justify-between gap-2 border-b border-[#c2c7d1] py-2`,children:[(0,_.jsx)(v,{children:`رقم المريض:`}),(0,_.jsx)(f,{value:J,onChange:e=>Y(e.target.value),className:`h-8 w-36 border-0 border-b border-dotted border-[#727780] bg-transparent text-center font-mono text-base font-semibold shadow-none focus-visible:ring-0`})]}),(0,_.jsxs)(`label`,{className:`flex items-center justify-between gap-2 border-b border-[#c2c7d1] py-2`,children:[(0,_.jsx)(v,{children:`تاريخ الميلاد:`}),(0,_.jsx)(p,{value:X,onChange:e=>Z(e.target.value),className:`h-8 w-36 border-[#c2c7d1] text-center font-mono text-base font-semibold`})]}),(0,_.jsxs)(`label`,{className:`flex items-center justify-between gap-4 border-b border-[#c2c7d1] py-2`,children:[(0,_.jsx)(v,{children:`تاريخ العملية:`}),(0,_.jsx)(p,{value:A,onChange:e=>j(e.target.value),className:`h-8 w-36 border-[#c2c7d1] text-center text-base`})]})]}),(0,_.jsxs)(`section`,{className:`mb-8 overflow-hidden border border-[#c2c7d1]`,dir:`ltr`,children:[(0,_.jsx)(`h3`,{className:`border-b border-[#c2c7d1] bg-[#00355f] px-4 py-2 text-center text-sm font-extrabold text-white`,children:`قياسات ما بعد العملية / Post-Op Status`}),(0,_.jsxs)(`table`,{className:`offdays-status-table w-full border-collapse text-center`,children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{className:`bg-[#e8eff1] text-[12px] font-bold text-[#42474f]`,children:[(0,_.jsx)(`th`,{className:`border border-[#c2c7d1] px-3 py-2`,children:`Eye`}),(0,_.jsx)(`th`,{className:`border border-[#c2c7d1] px-3 py-2`,children:`VA`}),(0,_.jsx)(`th`,{className:`border border-[#c2c7d1] px-3 py-2`,children:`Method`})]})}),(0,_.jsxs)(`tbody`,{children:[(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{className:`border border-[#c2c7d1] px-3 py-2 font-bold`,children:`OD`}),(0,_.jsx)(`td`,{className:`border border-[#c2c7d1] p-0`,children:(0,_.jsx)(f,{value:B,onChange:e=>V(e.target.value),className:`h-10 border-0 text-center text-lg font-bold`})}),(0,_.jsx)(`td`,{className:`border border-[#c2c7d1] p-0`,rowSpan:2,children:(0,_.jsx)(f,{value:R,onChange:e=>z(e.target.value),className:`h-20 border-0 text-center text-lg font-bold`,placeholder:`PRK / LASIK`})})]}),(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{className:`border border-[#c2c7d1] px-3 py-2 font-bold`,children:`OS`}),(0,_.jsx)(`td`,{className:`border border-[#c2c7d1] p-0`,children:(0,_.jsx)(f,{value:H,onChange:e=>U(e.target.value),className:`h-10 border-0 text-center text-lg font-bold`})})]})]})]})]}),(0,_.jsxs)(`section`,{className:`mb-8 grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.8fr)] gap-0 border-2 border-[#c2c7d1] p-5`,children:[(0,_.jsxs)(`label`,{className:`min-w-0 border-l border-[#c2c7d1] px-3 text-center`,children:[(0,_.jsx)(v,{children:`تاريخ البدء`}),(0,_.jsx)(p,{value:M,onChange:e=>N(e.target.value),className:`mt-2 h-9 w-full min-w-0 border-[#c2c7d1] px-2 text-center text-sm font-bold`,inputClassName:`min-w-0 flex-1 basis-0 px-1 text-sm`})]}),(0,_.jsxs)(`label`,{className:`min-w-0 border-l border-[#c2c7d1] px-3 text-center`,children:[(0,_.jsx)(v,{children:`تاريخ العودة`}),(0,_.jsx)(p,{value:P,onChange:e=>F(e.target.value),className:`mt-2 h-9 w-full min-w-0 border-[#c2c7d1] px-2 text-center text-sm font-bold`,inputClassName:`min-w-0 flex-1 basis-0 px-1 text-sm`})]}),(0,_.jsxs)(`label`,{className:`min-w-0 px-3 text-center`,children:[(0,_.jsx)(v,{children:`المدة`}),(0,_.jsxs)(`div`,{className:`mt-2 flex items-center justify-center gap-2`,children:[(0,_.jsx)(f,{value:I,onChange:e=>L(e.target.value),className:`h-9 w-20 border-[#c2c7d1] text-center text-xl font-bold text-[#00355f]`}),(0,_.jsx)(`span`,{className:`font-bold text-[#00355f]`,children:`يوماً`})]})]})]}),(0,_.jsxs)(`section`,{className:`offdays-recommendations mb-2`,children:[(0,_.jsx)(`h3`,{className:`mb-3 text-sm font-bold text-[#00355f]`,children:`وقد اوصى الطبيب`}),(0,_.jsx)(`div`,{className:`grid grid-cols-2 gap-3`,children:[`لا وقت للشاشة / No screen time`,`تجنب الإجهاد البدني / Avoid strain`,`الحماية من الضوء / Light protection`,`تجنب ملامسة الماء / Keep dry`].map(e=>(0,_.jsx)(`div`,{className:`border border-[#ba1a1a]/25 bg-[#ffdad6]/70 px-3 py-2 text-sm font-bold text-[#93000a]`,children:e},e))})]}),(0,_.jsx)(`footer`,{className:`hidden`,children:(0,_.jsxs)(`div`,{dir:`ltr`,className:`text-left`,children:[(0,_.jsx)(`p`,{dir:`ltr`,className:`mb-5 text-left font-bold`,children:`توقيع الطبيب المعالج:`}),(0,_.jsx)(`div`,{className:`mb-2 w-56 border-b border-[#42474f]`}),(0,_.jsx)(f,{value:W,onChange:e=>G(e.target.value),dir:`ltr`,className:`w-64 border-0 bg-transparent p-0 text-left font-bold shadow-none`}),(0,_.jsx)(`p`,{className:`text-xs text-[#727780]`,children:`استشاري جراحة العيون`})]})})]})})})]}):null}export{b as default};