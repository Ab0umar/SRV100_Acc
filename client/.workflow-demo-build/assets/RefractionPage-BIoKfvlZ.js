import{r as e}from"./rolldown-runtime-Dw2cE7zH.js";import{s as t}from"./data-core-u1TPZzGK.js";import{m as n}from"./charts-Bnwx77Nk.js";import{t as r}from"./trpc-f87YPGMk.js";import{a as i,o as a}from"./react-core-DaLBU1SO.js";import{r as o}from"./utils-Cnb6lgNC.js";import{i as s}from"./ui-misc-C67Xdctg.js";import{t as c}from"./button--382im4U.js";import{t as l}from"./input-Dyj6KgtD.js";import{a as u,i as d,n as f,r as p,t as m}from"./select-B4csBrGI.js";import{a as h,c as g,i as _,l as v}from"./refractionOptions-Ds5ra_6J.js";import{a as y,n as b,o as x,t as S}from"./card-D56TG7P5.js";import{i as C}from"./nativePdf-DjByE9r5.js";import{t as w}from"./PatientPicker-D7JxMJT6.js";import{t as ee}from"./useAppNavigation-426vm028.js";import{n as T,t as E}from"./PrintPreviewBanner-BYn_8kj1.js";var D=e(n(),1),O=t(),k={bcvaOD:``,bcvaOS:``,pdOD:``,pdOS:``,sOD:``,cOD:``,aOD:``,addOD:``,sOS:``,cOS:``,aOS:``,addOS:``},A=Array.from({length:25},(e,t)=>{let n=(t*.25).toFixed(2);return t===0?n:`+${n}`});function j({value:e,options:t,onChange:n,placeholder:r=``,defaultValue:i,allowEmpty:a=!0}){let o=String(e??``)||`__empty__`,s=t.includes(o);return(0,O.jsxs)(`select`,{value:o,onChange:e=>n(e.target.value),className:`flex h-8 w-full max-w-full rounded-md border border-input bg-background px-1 py-0.5 text-center text-xs shadow-xs sm:h-9 sm:px-2 sm:text-sm`,children:[(0,O.jsx)(`option`,{value:h,children:r}),!s&&o?(0,O.jsx)(`option`,{value:o,children:o}):null,t.map(e=>(0,O.jsx)(`option`,{value:e,children:e},e))]})}function M(){let[,e]=i(),{goBack:t}=ee(),[,n]=a(`/refraction/:id`),h=Number(n?.id??0),M=Number.isFinite(h)&&h>0,N=typeof window<`u`&&new URLSearchParams(window.location.search).get(`visitDate`)||``,P=/^\d{4}-\d{2}-\d{2}$/.test(N)?N:``,F=r.patient.getPatient.useQuery(h,{enabled:M,refetchOnWindowFocus:!1}),I=r.medical.getSheetEntry.useQuery({patientId:h,sheetType:`consultant`},{enabled:M,refetchOnWindowFocus:!1}),L=r.medical.getSheetEntry.useQuery({patientId:h,sheetType:`specialist`},{enabled:M,refetchOnWindowFocus:!1}),R=r.medical.getSheetEntry.useQuery({patientId:h,sheetType:`lasik`},{enabled:M,refetchOnWindowFocus:!1}),z=r.medical.getSheetEntry.useQuery({patientId:h,sheetType:`external`},{enabled:M,refetchOnWindowFocus:!1}),B=r.medical.getGlassesRecordsByPatient.useQuery({patientId:h},{enabled:M,refetchOnWindowFocus:!1}),V=!M||!F.isLoading&&!I.isLoading&&!L.isLoading&&!R.isLoading&&!z.isLoading&&!B.isLoading,H=T({ready:M&&V}),U=r.useUtils(),W=r.medical.saveSheetEntry.useMutation(),G=r.medical.saveRefractionToExamination.useMutation({onSuccess:()=>{U.medical.getExaminationsByPatient.invalidate()}}),[K,q]=(0,D.useState)(k),[J,Y]=(0,D.useState)(`all`);(0,D.useEffect)(()=>{if(!h)return;let e=B.data??[],t=P?e.find(e=>{let t=e.visitDate??e.createdAt;if(!t)return!1;let n=new Date(t);return!Number.isNaN(n.valueOf())&&n.toISOString().split(`T`)[0]===P}):e[0];if(!t){q(k);return}q({bcvaOD:String(t.bcvaOD??``),bcvaOS:String(t.bcvaOS??``),pdOD:String(t.pdOD??``),pdOS:String(t.pdOS??``),sOD:String(t.sOD??``),cOD:String(t.cOD??``),aOD:String(t.axisOD??``),addOD:String(t.addOD??``),sOS:String(t.sOS??``),cOS:String(t.cOS??``),aOS:String(t.axisOS??``),addOS:String(t.addOS??``)})},[h,B.data,P]);let X=(e,t)=>{let n=(()=>{if(!e)return{};try{return JSON.parse(e)}catch{return{}}})(),r={...n};return(t===`consultant`||t===`specialist`)&&(r.formData={...n.formData??{},bcvaOD:K.bcvaOD,bcvaOS:K.bcvaOS,pdOD:K.pdOD,pdOS:K.pdOS,refractionOD:{...n.formData?.refractionOD??{},s:K.sOD,c:K.cOD,a:K.aOD},refractionOS:{...n.formData?.refractionOS??{},s:K.sOS,c:K.cOS,a:K.aOS}}),JSON.stringify(r)},Z=async()=>{if(h)try{await Promise.all([W.mutateAsync({patientId:h,sheetType:`consultant`,content:X(I.data,`consultant`)}),W.mutateAsync({patientId:h,sheetType:`specialist`,content:X(L.data,`specialist`)}),W.mutateAsync({patientId:h,sheetType:`lasik`,content:X(R.data,`lasik`)}),W.mutateAsync({patientId:h,sheetType:`external`,content:X(z.data,`external`)})]);let e=(e=>{if(!e)return{};try{return JSON.parse(e)}catch{return{}}})(I.data)?.examData?.pentacam,t={od:{s:K.sOD||void 0,c:K.cOD||void 0,axis:K.aOD||void 0,pd:K.pdOD||void 0,add:K.addOD||void 0,bcva:K.bcvaOD||void 0},os:{s:K.sOS||void 0,c:K.cOS||void 0,axis:K.aOS||void 0,pd:K.pdOS||void 0,add:K.addOS||void 0,bcva:K.bcvaOS||void 0}};await G.mutateAsync({patientId:h,glassesData:t,pentacam:e}),s.success(`Refraction and measurements saved for all sheets and patient file`)}catch(e){s.error(o(e,`Failed to save refraction`))}},Q=()=>{typeof window>`u`||C(`${String(F.data?.fullName??h??`refraction`).trim()}.pdf`)},te=P||new Date().toISOString().split(`T`)[0],$=F.data??{},ne=String($.fullName??``),re=String($.patientCode??h??``);return(0,O.jsxs)(`div`,{"data-mobile-pdf-root":!0,className:`container mx-auto ${H.printView?`px-3 py-3`:`px-4 py-6`}`,children:[H.printView?(0,O.jsx)(E,{title:`روشتة المقاس`,subtitle:F.data?String(F.data.fullName??``):void 0,onPrint:Q}):null,(0,O.jsxs)(`div`,{className:`mb-4 refraction-no-print ${H.printView?`hidden`:``}`,children:[(0,O.jsx)(`div`,{className:`mb-2`,children:(0,O.jsxs)(m,{value:J,onValueChange:e=>Y(e),children:[(0,O.jsx)(d,{className:`h-9 rounded-lg text-sm`,children:(0,O.jsx)(u,{placeholder:`مكان الخدمة`})}),(0,O.jsxs)(f,{children:[(0,O.jsx)(p,{value:`all`,children:`الكل`}),(0,O.jsx)(p,{value:`center`,children:`مركز`}),(0,O.jsx)(p,{value:`external`,children:`خارجي`})]})]})}),(0,O.jsx)(w,{onSelect:t=>{let n=Number(t?.id??0);n&&e(`/refraction/${n}`)},locationType:J===`all`?void 0:J})]}),(0,O.jsx)(`style`,{children:`
        @media print {
          @page {
            size: A5 portrait;
            margin: 0;
          }
          html, body {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .container {
            max-width: none !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .refraction-no-print { display: none !important; }
          .refraction-page-card {
            visibility: hidden !important;
            border: 0 !important;
            box-shadow: none !important;
            background: transparent !important;
          }
          .refraction-page-content {
            padding: 0 !important;
            margin: 0 !important;
          }
          .refraction-print-wrapper {
            position: fixed !important;
            inset: auto auto auto auto !important;
            top: 53mm !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            display: block !important;
            width: 132mm !important;
            max-width: 132mm !important;
            visibility: visible !important;
          }
          .refraction-print-card {
            width: 132mm !important;
            max-width: 132mm !important;
            border: 0 !important;
            border-radius: 0 !important;
            padding: 0 !important;
            background: #fff !important;
          }
          .refraction-live-header-row,
          .refraction-live-summary-row,
          .refraction-live-eye-grid {
            border: 1px solid #e5e5e5 !important;
          }
          .refraction-live-header-row {
            grid-template-columns: 1.4fr 1fr 0.8fr !important;
            direction: rtl !important;
            padding: 2.4mm 2.8mm !important;
            margin-bottom: 3mm !important;
          }
          .refraction-live-summary-row {
            grid-template-columns: 1fr 1fr 1fr !important;
            direction: ltr !important;
            border-bottom: 0 !important;
            margin-bottom: 0 !important;
            padding: 2.3mm 3mm !important;
          }
          .refraction-live-eye-grid {
            display: grid !important;
            grid-template-columns: 66mm 66mm !important;
            gap: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            border-top: 0 !important;
          }
          .refraction-live-eye-column {
            display: block !important;
            width: 66mm !important;
            max-width: 66mm !important;
            min-width: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .refraction-live-eye-column table {
            width: 66mm !important;
            max-width: 66mm !important;
            table-layout: fixed !important;
            border-collapse: collapse !important;
            font-size: 9pt !important;
            line-height: 1.2 !important;
          }
          .refraction-live-eye-column > div {
            display: none !important;
          }
          .refraction-live-eye-table {
            display: table !important;
            width: 66mm !important;
            min-width: 66mm !important;
            max-width: 66mm !important;
          }
          .refraction-live-eye-title {
            font-weight: 800 !important;
            background: #fff !important;
            color: #000 !important;
          }
          .refraction-live-eye-column th,
          .refraction-live-eye-column td {
            border: 1px solid #000 !important;
            padding: 1.65mm 1mm !important;
            text-align: center !important;
            vertical-align: middle !important;
          }
        }
      `}),(0,O.jsxs)(S,{className:`refraction-page-card border-border/80 bg-background/95 shadow-sm`,children:[(0,O.jsx)(y,{className:`refraction-no-print`,children:(0,O.jsxs)(x,{children:[`Refraction`,F.data?` - ${String(F.data.fullName??``)}`:``]})}),(0,O.jsxs)(b,{className:`space-y-4 refraction-page-content`,children:[!Number.isFinite(h)||h<=0?(0,O.jsx)(`div`,{className:`space-y-3 refraction-no-print`,children:(0,O.jsx)(`div`,{className:`text-sm text-muted-foreground`,children:`Choose patient first`})}):null,(0,O.jsxs)(`div`,{className:`flex gap-2 refraction-no-print`,children:[(0,O.jsx)(c,{type:`button`,onClick:Z,disabled:W.isPending,children:`Save`}),(0,O.jsx)(c,{type:`button`,variant:`outline`,onClick:Q,children:`Print`}),(0,O.jsx)(c,{type:`button`,variant:`outline`,onClick:()=>t(),children:`Back`})]}),(0,O.jsx)(`div`,{className:`refraction-print-wrapper`,children:(0,O.jsxs)(`div`,{className:`refraction-print-card w-full max-w-full overflow-x-auto bg-background text-black print:overflow-visible`,dir:`ltr`,style:{border:`2px solid var(--primary)`,borderTop:`0`,borderRadius:14,padding:12,textAlign:`center`,background:`var(--background)`},children:[(0,O.jsxs)(`div`,{className:`refraction-live-header-row mb-2 grid grid-cols-1 gap-2 text-xs font-semibold sm:grid-cols-3 sm:gap-3 sm:text-sm`,children:[(0,O.jsx)(`div`,{className:`text-center sm:text-right`,dir:`rtl`,children:(0,O.jsxs)(`span`,{className:`break-words`,children:[`الاسم: `,ne]})}),(0,O.jsxs)(`div`,{className:`text-center`,children:[`التاريخ : `,te]}),(0,O.jsxs)(`div`,{className:`text-center sm:text-left`,children:[`الكود : `,re]})]}),(0,O.jsxs)(`div`,{className:`refraction-live-summary-row mb-3 grid grid-cols-1 gap-2 text-xs font-semibold sm:grid-cols-3 sm:gap-3 sm:text-sm`,children:[(0,O.jsxs)(`div`,{className:`min-w-0`,children:[(0,O.jsxs)(`span`,{className:`hidden print:inline`,children:[`V.A : `,K.bcvaOD||``,` / `,K.bcvaOS||``]}),(0,O.jsxs)(`span`,{className:`print:hidden flex flex-wrap items-center justify-center gap-1 sm:inline-flex sm:justify-center`,children:[(0,O.jsx)(`span`,{children:`V.A :`}),(0,O.jsx)(`div`,{className:`min-w-0 flex-1 sm:w-20 sm:flex-none`,children:(0,O.jsx)(j,{value:K.bcvaOD,options:v,onChange:e=>q(t=>({...t,bcvaOD:e}))})}),(0,O.jsx)(`span`,{children:`/`}),(0,O.jsx)(`div`,{className:`min-w-0 flex-1 sm:w-20 sm:flex-none`,children:(0,O.jsx)(j,{value:K.bcvaOS,options:v,onChange:e=>q(t=>({...t,bcvaOS:e}))})})]})]}),(0,O.jsxs)(`div`,{className:`text-center`,children:[(0,O.jsxs)(`span`,{className:`hidden print:inline`,children:[`PD : `,K.pdOS||``]}),(0,O.jsxs)(`span`,{className:`print:hidden inline-flex flex-wrap items-center justify-center gap-1`,children:[(0,O.jsx)(`span`,{children:`PD :`}),(0,O.jsx)(l,{value:K.pdOS,onChange:e=>q(t=>({...t,pdOS:e.target.value})),className:`h-8 w-full max-w-[6.5rem] text-center sm:w-24`})]})]}),(0,O.jsx)(`div`,{className:`text-center sm:text-right`,children:`Colour :`})]}),(0,O.jsxs)(`div`,{className:`refraction-live-eye-grid grid grid-cols-1 gap-4 md:grid-cols-2`,children:[(0,O.jsx)(`div`,{className:`refraction-live-eye-column`,children:(0,O.jsxs)(`table`,{className:`refraction-live-eye-table w-full border-collapse text-center text-sm`,style:{tableLayout:`fixed`},children:[(0,O.jsxs)(`thead`,{children:[(0,O.jsx)(`tr`,{className:`hidden print:table-row`,children:(0,O.jsx)(`th`,{colSpan:4,className:`refraction-live-eye-title`,style:{border:`2px solid var(--primary)`,padding:6},children:`RIGHT`})}),(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`th`,{style:{border:`2px solid var(--primary)`,padding:6}}),(0,O.jsx)(`th`,{style:{border:`2px solid var(--primary)`,padding:6},children:`Sph.`}),(0,O.jsx)(`th`,{style:{border:`2px solid var(--primary)`,padding:6},children:`Cyl.`}),(0,O.jsx)(`th`,{style:{border:`2px solid var(--primary)`,padding:6},children:`Axis`})]})]}),(0,O.jsxs)(`tbody`,{children:[(0,O.jsxs)(`tr`,{style:{height:58},children:[(0,O.jsx)(`td`,{style:{border:`2px solid var(--primary)`,fontWeight:700},children:`DIST`}),(0,O.jsxs)(`td`,{style:{border:`2px solid var(--primary)`},children:[(0,O.jsx)(`span`,{className:`hidden print:inline`,children:K.sOD}),(0,O.jsx)(`span`,{className:`print:hidden`,children:(0,O.jsx)(j,{value:K.sOD,options:g,onChange:e=>q(t=>({...t,sOD:e}))})})]}),(0,O.jsxs)(`td`,{style:{border:`2px solid var(--primary)`},children:[(0,O.jsx)(`span`,{className:`hidden print:inline`,children:K.cOD}),(0,O.jsx)(`span`,{className:`print:hidden`,children:(0,O.jsx)(j,{value:K.cOD,options:_,onChange:e=>q(t=>({...t,cOD:e}))})})]}),(0,O.jsxs)(`td`,{style:{border:`2px solid var(--primary)`},children:[(0,O.jsx)(`span`,{className:`hidden print:inline`,children:K.aOD}),(0,O.jsx)(`span`,{className:`print:hidden`,children:(0,O.jsx)(l,{value:K.aOD,onChange:e=>q(t=>({...t,aOD:e.target.value})),className:`border-0 text-center shadow-none`})})]})]}),(0,O.jsxs)(`tr`,{style:{height:58},children:[(0,O.jsx)(`td`,{style:{border:`2px solid var(--primary)`,fontWeight:700},children:`NEAR`}),(0,O.jsxs)(`td`,{colSpan:3,style:{border:`2px solid var(--primary)`},children:[(0,O.jsxs)(`span`,{className:`hidden print:inline`,children:[`Add `,K.addOD||``]}),(0,O.jsxs)(`span`,{className:`print:hidden flex w-full items-center gap-2 px-2`,children:[(0,O.jsx)(`span`,{className:`font-semibold`,children:`Add`}),(0,O.jsx)(`div`,{className:`flex-1`,children:(0,O.jsx)(j,{value:K.addOD,options:A,onChange:e=>q(t=>({...t,addOD:e}))})})]})]})]})]})]})}),(0,O.jsx)(`div`,{className:`refraction-live-eye-column`,children:(0,O.jsxs)(`table`,{className:`refraction-live-eye-table w-full border-collapse text-center text-sm`,style:{tableLayout:`fixed`},children:[(0,O.jsxs)(`thead`,{children:[(0,O.jsx)(`tr`,{className:`hidden print:table-row`,children:(0,O.jsx)(`th`,{colSpan:4,className:`refraction-live-eye-title`,style:{border:`2px solid var(--primary)`,padding:6},children:`LEFT`})}),(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`th`,{style:{border:`2px solid var(--primary)`,padding:6}}),(0,O.jsx)(`th`,{style:{border:`2px solid var(--primary)`,padding:6},children:`Sph.`}),(0,O.jsx)(`th`,{style:{border:`2px solid var(--primary)`,padding:6},children:`Cyl.`}),(0,O.jsx)(`th`,{style:{border:`2px solid var(--primary)`,padding:6},children:`Axis`})]})]}),(0,O.jsxs)(`tbody`,{children:[(0,O.jsxs)(`tr`,{style:{height:58},children:[(0,O.jsx)(`td`,{style:{border:`2px solid var(--primary)`,fontWeight:700},children:`DIST`}),(0,O.jsxs)(`td`,{style:{border:`2px solid var(--primary)`},children:[(0,O.jsx)(`span`,{className:`hidden print:inline`,children:K.sOS}),(0,O.jsx)(`span`,{className:`print:hidden`,children:(0,O.jsx)(j,{value:K.sOS,options:g,onChange:e=>q(t=>({...t,sOS:e}))})})]}),(0,O.jsxs)(`td`,{style:{border:`2px solid var(--primary)`},children:[(0,O.jsx)(`span`,{className:`hidden print:inline`,children:K.cOS}),(0,O.jsx)(`span`,{className:`print:hidden`,children:(0,O.jsx)(j,{value:K.cOS,options:_,onChange:e=>q(t=>({...t,cOS:e}))})})]}),(0,O.jsxs)(`td`,{style:{border:`2px solid var(--primary)`},children:[(0,O.jsx)(`span`,{className:`hidden print:inline`,children:K.aOS}),(0,O.jsx)(`span`,{className:`print:hidden`,children:(0,O.jsx)(l,{value:K.aOS,onChange:e=>q(t=>({...t,aOS:e.target.value})),className:`border-0 text-center shadow-none`})})]})]}),(0,O.jsxs)(`tr`,{style:{height:58},children:[(0,O.jsx)(`td`,{style:{border:`2px solid var(--primary)`,fontWeight:700},children:`NEAR`}),(0,O.jsxs)(`td`,{colSpan:3,style:{border:`2px solid var(--primary)`},children:[(0,O.jsxs)(`span`,{className:`hidden print:inline`,children:[`Add `,K.addOS||``]}),(0,O.jsxs)(`span`,{className:`print:hidden flex w-full items-center gap-2 px-2`,children:[(0,O.jsx)(`span`,{className:`font-semibold`,children:`Add`}),(0,O.jsx)(`div`,{className:`flex-1`,children:(0,O.jsx)(j,{value:K.addOS,options:A,onChange:e=>q(t=>({...t,addOS:e}))})})]})]})]})]})]})})]})]})})]})]})]})}export{M as default};