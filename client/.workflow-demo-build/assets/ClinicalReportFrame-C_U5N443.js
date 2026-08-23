import{s as e}from"./data-core-u1TPZzGK.js";import{t}from"./sheetDates-DiI1jePr.js";var n=e();function r({label:e,value:t,className:r=``}){return(0,n.jsxs)(`div`,{className:`min-w-0 ${r}`,children:[(0,n.jsx)(`p`,{className:`mb-1 text-xs font-bold uppercase text-[#434654]`,children:e}),(0,n.jsx)(`div`,{className:`min-w-0 truncate text-center text-base font-bold`,children:t||`—`})]})}function i({title:e}){let[t,r]=e.split(`|`).map(e=>e.trim());return(0,n.jsxs)(`h1`,{className:`flex items-center gap-2 text-xl font-extrabold uppercase tracking-tight text-[#191c1e]`,children:[(0,n.jsx)(`span`,{dir:`ltr`,children:t}),r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(`span`,{"aria-hidden":!0,children:`|`}),(0,n.jsx)(`span`,{dir:`rtl`,children:r})]}):null]})}function a({title:e,generatedDate:a=new Date().toISOString().split(`T`)[0],patient:o,sidePanel:s,children:c,signatureLabel:l=`توقيع الطبيب المعالج`,dir:u=`rtl`,className:d=``}){return(0,n.jsxs)(`main`,{className:`clinical-report-frame medical-report-page mx-auto max-w-[210mm] p-8 ${d}`,dir:u,children:[(0,n.jsx)(`style`,{children:`
        @media print {
          @page { size: A4 portrait; margin: 0; }
          html, body {
            min-height: 0 !important;
            height: auto !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: visible !important;
            background: white !important;
          }
          main.clinical-report-frame {
            box-sizing: border-box !important;
            display: block !important;
            width: 210mm !important;
            min-width: 210mm !important;
            max-width: 210mm !important;
            min-height: 0 !important;
            height: auto !important;
            margin: 0 auto !important;
            padding: 40mm 18mm 8mm !important;
            border: 0 !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }
          main.clinical-report-frame > div {
            position: static !important;
            box-sizing: border-box !important;
            width: 212.2mm !important;
            margin: 0 auto !important;
            padding: 0 !important;
            border: 0 !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            zoom: 0.82 !important;
            transform: none !important;
            transform-origin: top center !important;
          }
          main.clinical-report-frame > div > header {
            margin-bottom: 4mm !important;
            padding-bottom: 3mm !important;
          }
          main.clinical-report-frame > div > section {
            margin-bottom: 4mm !important;
            gap: 3mm !important;
          }
          main.clinical-report-frame .clinical-report-content {
            line-height: 1.35 !important;
          }
          main.clinical-report-frame .clinical-report-content > div {
            gap: 3mm !important;
          }
          main.clinical-report-frame .clinical-report-content section {
            margin-top: 0 !important;
            margin-bottom: 3mm !important;
            gap: 2mm !important;
          }
          main.clinical-report-frame .clinical-report-content section + section,
          main.clinical-report-frame .clinical-report-content > * + * {
            margin-top: 3mm !important;
          }
          main.clinical-report-frame .clinical-report-content table th,
          main.clinical-report-frame .clinical-report-content table td {
            padding-top: 1.2mm !important;
            padding-bottom: 1.2mm !important;
          }
          main.clinical-report-frame .clinical-report-content table th {
            font-size: 13px !important;
          }
          main.clinical-report-frame .clinical-report-content table td,
          main.clinical-report-frame .clinical-report-content table td input,
          main.clinical-report-frame .clinical-report-content table td select {
            font-size: 15px !important;
            font-weight: 700 !important;
          }
          main.clinical-report-frame .clinical-report-content textarea {
            min-height: 14mm !important;
          }
          main.clinical-report-frame input::placeholder,
          main.clinical-report-frame textarea::placeholder {
            color: transparent !important;
            opacity: 0 !important;
          }
          main.clinical-report-frame [data-placeholder] {
            color: transparent !important;
          }
          main.clinical-report-frame input[type="date"][value=""]::-webkit-datetime-edit,
          main.clinical-report-frame input[type="date"]:not([value])::-webkit-datetime-edit {
            color: transparent !important;
          }
          main.clinical-report-frame input[type="date"][value=""]::-webkit-calendar-picker-indicator,
          main.clinical-report-frame input[type="date"]:not([value])::-webkit-calendar-picker-indicator {
            visibility: hidden !important;
          }
          main.clinical-report-frame > div > footer {
            margin-top: 4mm !important;
            padding-top: 3mm !important;
          }
        }
      `}),(0,n.jsxs)(`div`,{className:`rounded-xl border border-[#c3c6d6] bg-white p-8 shadow-sm print:rounded-none print:border-0 print:p-0 print:shadow-none`,children:[(0,n.jsxs)(`header`,{className:`mb-6 flex items-start justify-between border-b-2 border-[#003d9b] pb-4`,children:[(0,n.jsx)(`div`,{}),(0,n.jsxs)(`div`,{className:`text-left`,dir:`ltr`,children:[(0,n.jsx)(i,{title:e}),(0,n.jsxs)(`p`,{className:`text-xs text-[#434654]`,children:[`Generated: `,t(a)]})]})]}),(0,n.jsxs)(`section`,{className:`mb-4 grid grid-cols-12 gap-3`,dir:`rtl`,children:[(0,n.jsxs)(`div`,{className:`${s?`col-span-8`:`col-span-12`} grid grid-cols-12 content-center gap-x-3 gap-y-2 rounded-lg border border-[#c3c6d6] bg-[#f3f4f6] px-3 py-2 text-center`,children:[(0,n.jsx)(r,{label:`اسم المريض:`,value:o.name,className:`col-span-6`}),(0,n.jsx)(r,{label:`الكود:`,value:o.code,className:`col-span-3`}),(0,n.jsx)(r,{label:`السن:`,value:o.age,className:`col-span-3`}),(0,n.jsx)(r,{label:`تاريخ الميلاد:`,value:o.birthDate?t(o.birthDate):`—`,className:`col-span-5`}),(0,n.jsx)(r,{label:`موبايل:`,value:o.phone,className:`col-span-4`}),(0,n.jsx)(r,{label:`الوظيفة:`,value:o.occupation,className:`col-span-3`})]}),s?(0,n.jsx)(`aside`,{className:`col-span-4 flex flex-col gap-2`,children:s}):null]}),(0,n.jsx)(`div`,{className:`clinical-report-content`,children:c}),(0,n.jsxs)(`footer`,{className:`mt-8 flex items-end justify-between border-t border-[#c3c6d6] pt-4`,children:[(0,n.jsx)(`div`,{}),(0,n.jsxs)(`div`,{className:`w-48 text-center`,children:[(0,n.jsx)(`div`,{className:`mb-1 h-10 border-b border-[#434654]`}),(0,n.jsx)(`p`,{className:`text-[10px] uppercase text-[#434654]`,children:l})]})]})]})]})}export{a as t};