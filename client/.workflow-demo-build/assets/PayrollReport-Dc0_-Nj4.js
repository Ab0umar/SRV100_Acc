import{r as e}from"./rolldown-runtime-Dw2cE7zH.js";import{s as t}from"./data-core-u1TPZzGK.js";import{m as n}from"./charts-Bnwx77Nk.js";import{t as r}from"./trpc-f87YPGMk.js";import{i}from"./ui-misc-C67Xdctg.js";import{t as a}from"./button--382im4U.js";import{Y as o,ct as s,ft as c,ir as l,sr as u,ur as d}from"./icons-dRIQAKyU.js";import{n as f,o as p,r as m,t as h}from"./dropdown-menu-B-YWDeks.js";import{n as ee,t as te}from"./nativePrint-CDl9nff-.js";var g=e(n(),1),_=t(),v=new Date,y=[`يناير`,`فبراير`,`مارس`,`أبريل`,`مايو`,`يونيو`,`يوليو`,`أغسطس`,`سبتمبر`,`أكتوبر`,`نوفمبر`,`ديسمبر`];function b(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}`}var ne=`${b(new Date(v.getFullYear(),v.getMonth()-1,26))}-26`,re=`${b(v)}-25`;function x(e){return Number(e).toLocaleString(`ar-EG`,{minimumFractionDigits:0,maximumFractionDigits:0})}function S(e){return(Number(e)*100).toFixed(1)+`%`}function C(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}var ie=[`مركز`,`عيادة`];function w(){let[e,t]=(0,g.useState)(ne),[n,v]=(0,g.useState)(re),[w,ae]=(0,g.useState)(`مركز`),[T,E]=(0,g.useState)(`salaries`),[D,oe]=(0,g.useState)(``),[O,se]=(0,g.useState)({}),[k,ce]=(0,g.useState)({}),A=e=>{ce(t=>({...t,[e]:!t[e]}))},[j,M]=n.split(`-`).map(Number),N=new Date(e+`T00:00:00`),P=new Date(n+`T00:00:00`),F=`${N.toLocaleDateString(`ar-EG`)} — ${P.toLocaleDateString(`ar-EG`)}`,le=`${N.getDate().toLocaleString(`ar-EG`)}/${(N.getMonth()+1).toLocaleString(`ar-EG`)}/${N.getFullYear().toLocaleString(`ar-EG`,{useGrouping:!1})}`,ue=`${P.getDate().toLocaleString(`ar-EG`)}/${(P.getMonth()+1).toLocaleString(`ar-EG`)}/${P.getFullYear().toLocaleString(`ar-EG`,{useGrouping:!1})}`,I=(e,n)=>{t(`${b(new Date(e,n-2,26))}-26`),v(`${e}-${String(n).padStart(2,`0`)}-25`)},L=r.salary.getPayroll.useQuery({year:j,month:M,section:`مركز`,fromDate:e,toDate:n}),R=r.salary.getPayroll.useQuery({year:j,month:M,section:`عيادة`,fromDate:e,toDate:n}),de=r.salary.getSupervisionBonuses.useQuery({year:j,month:M,section:w}),fe=(de.data??[]).reduce((e,t)=>(e[t.empCd]=String(t.amount??`0`),e),{}),pe=r.salary.setSupervisionBonus.useMutation({onSuccess:()=>{de.refetch(),i.success(`تم الحفظ`)},onError:e=>i.error(`خطأ: `+e.message)}),me=(r.salary.listBasics.useQuery().data??[]).reduce((e,t)=>((!e[t.empCd]||String(t.effectiveFrom)>String(e[t.empCd].effectiveFrom))&&(e[t.empCd]=t),e),{}),he=r.salary.listShiftStaff.useQuery(),ge=r.salary.getShiftSchedule.useQuery({year:j,month:M}),_e=r.salary.computeShiftPayroll.useQuery({year:j,month:M,fromDate:e,toDate:n}),z=he.data??[];ge.data?.attendance;let ve=_e.data??[],B=(w===`مركز`?L:R).data??[],V=e=>({cola:Number(e.costOfLivingAllowance??0),travel:Number(e.transportAllowance??0)}),H=e=>{let t=Number(e.lateDeduction??0)+Number(e.earlyLeaveDeduction??0),n=Number(e.absentDeduction??0),r=Number(e.penaltyDeduction??0),i=Number(e.advancesDeduction??0),a=Number(e.insuranceDeduction??0),o=Number(e.totalDeductions??0);return{late:t,absent:n,penalty:r,missingCheckout:Math.max(0,o-t-n-r-i-a),advances:i,insurance:a,total:o}},U=e=>{let t=V(e);return Number(e.attendanceCommission)+Number(e.examCommission)+Number(e.pentacamCommission)+t.cola+t.travel},W=B.filter(e=>!String(e.empCd).startsWith(`shift_`)),G=B.filter(e=>String(e.empCd).startsWith(`shift_`)),K=z.map(e=>{let t=ve.find(t=>Number(t.id)===Number(e.id)),n=B.find(t=>t.empCd===`shift_${e.id}`),r=Number(e.ratePerShift??0),i=Number(e.rateSmallShift??0)||r,a=Number(t?.bigScheduled??0),o=Number(t?.bigAttended??0),s=Number(t?.bigTotal??a*r),c=Number(t?.smallScheduled??0),l=Number(t?.smallAttended??0),u=Number(t?.smallTotal??c*i),d=Math.max(0,a-o),f=Math.max(0,c-l),p=Number(t?.basicSalary??s+u),m=Number(t?Number(t.absentDeduction??0)+Number(t.punchDeduction??0):n?.totalDeductions??0),h=Number(t?.totalPay??n?.netBasic??p-m);return{id:e.id,fullName:e.name,type:e.type,shiftDayCount:a,shiftDayAttended:o,shiftDayAbsent:d,shiftDayRate:r,shiftDayTotal:s,shiftNightCount:c,shiftNightAttended:l,shiftNightAbsent:f,shiftNightRate:i,shiftNightTotal:u,hourlyBasicSalary:p,totalDeductions:m,leaveMultiplier:n?.leaveMultiplier==null?1:Number(n.leaveMultiplier),netBasic:h,attendanceCommission:Number(n?.attendanceCommission??0),attendanceCommissionRaw:Number(n?.attendanceCommissionRaw??n?.attendanceCommission??0),examCommission:Number(n?.examCommission??0),examCommissionRaw:Number(n?.examCommissionRaw??n?.examCommission??0),pentacamCommission:Number(n?.pentacamCommission??0),pentacamCommissionRaw:Number(n?.pentacamCommissionRaw??n?.pentacamCommission??0),costOfLivingAllowance:Number(n?.costOfLivingAllowance??0),transportAllowance:Number(n?.transportAllowance??0),overtimeMinutes:Number(n?.overtimeMinutes??0),overtimePay:Number(n?.overtimePay??0),totalCommission:Number(n?.totalCommission??0)}}),q=[...(L.data??[]).map(e=>({...e,_section:`مركز`})),...(R.data??[]).map(e=>({...e,_section:`عيادة`}))].filter(e=>!String(e.empCd).startsWith(`shift_`)),ye=()=>{L.refetch(),R.refetch()},J=r.salary.computePayroll.useMutation({onSuccess:e=>{ye(),i.success(`تم احتساب ${e.saved} موظف`)},onError:e=>i.error(`خطأ: `+e.message)}),be=r.salary.finalizePayroll.useMutation({onSuccess:()=>{ye(),i.success(`تم اعتماد كشف الرواتب`)},onError:e=>i.error(`خطأ: `+e.message)});q.reduce((e,t)=>({basic:e.basic+Number(t.basicSalary),deductions:e.deductions+Number(t.totalDeductions),netBasic:e.netBasic+Number(t.netBasic),commission:e.commission+U(t),overtime:e.overtime+Number(t.overtimePay??0),totalPay:e.totalPay+Number(t.totalPay)}),{basic:0,deductions:0,netBasic:0,commission:0,overtime:0,totalPay:0});let xe=e=>q.filter(t=>t._section===e).reduce((e,t)=>({basic:e.basic+Number(t.basicSalary),deductions:e.deductions+Number(t.totalDeductions),netBasic:e.netBasic+Number(t.netBasic),commission:e.commission+U(t),overtime:e.overtime+Number(t.overtimePay??0),totalPay:e.totalPay+Number(t.totalPay)}),{basic:0,deductions:0,netBasic:0,commission:0,overtime:0,totalPay:0}),Se=B.length>0&&B.every(e=>e.payrollStatus===`final`),Y=`
    @page { size: A4 landscape; margin: 7mm; }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      direction: rtl;
      background: oklch(99% 0.004 248);
      color: oklch(22% 0.035 248);
      font-family: "Segoe UI", Tahoma, Arial, sans-serif;
      font-size: 8px;
      line-height: 1.35;
    }
    .payroll-sheet {
      min-height: 190mm;
      padding: 7mm;
      border: 1px solid oklch(86% 0.016 248);
      border-radius: 14px;
      background: oklch(99.5% 0.004 248);
    }
    .sheet-header {
      display: grid;
      grid-template-columns: 1fr 1.45fr 1fr;
      align-items: start;
      gap: 10px;
      padding-bottom: 8px;
      border-bottom: 1px solid oklch(87% 0.02 248);
    }
    .top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 5px;
      color: oklch(46% 0.025 248);
      font-size: 9px;
      font-weight: 800;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 7px;
      font-weight: 800;
      color: oklch(29% 0.055 248);
    }
    .brand-mark {
      display: grid;
      width: 28px;
      height: 28px;
      place-items: center;
      border-radius: 999px;
      background: oklch(92% 0.052 248);
      color: oklch(38% 0.105 248);
      font-size: 12px;
      font-weight: 900;
    }
    .muted { color: oklch(48% 0.025 248); font-size: 7.5px; font-weight: 600; }
    .report-title { text-align: center; }
    h1 {
      color: oklch(25% 0.045 248);
      font-size: 15px;
      font-weight: 900;
      letter-spacing: -0.02em;
    }
    .period {
      display: inline-flex;
      margin-top: 4px;
      padding: 3px 10px;
      border-radius: 999px;
      background: oklch(96% 0.018 248);
      color: oklch(39% 0.055 248);
      font-size: 8px;
      font-weight: 800;
    }
    .dept {
      display: inline-flex;
      margin-top: 4px;
      min-width: 92px;
      padding: 6px 10px;
      border: 1px solid oklch(88% 0.035 56);
      border-radius: 12px;
      background: oklch(98% 0.02 56);
      color: oklch(41% 0.095 56);
      text-align: center;
      justify-content: center;
      font-size: 11px;
      font-weight: 900;
    }
    .summary-strip {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 5px;
      margin: 7px 0;
    }
    .summary-pill {
      min-height: 31px;
      padding: 4px 7px;
      border: 1px solid oklch(88% 0.018 248);
      border-radius: 10px;
      background: oklch(98.5% 0.006 248);
    }
    .summary-label {
      display: block;
      color: oklch(50% 0.025 248);
      font-size: 6.8px;
      font-weight: 700;
    }
    .summary-value {
      display: block;
      margin-top: 1px;
      color: oklch(28% 0.045 248);
      font-size: 9.5px;
      font-weight: 900;
    }
    .table-wrap {
      overflow: hidden;
      border: 1px solid oklch(84% 0.017 248);
      border-radius: 12px;
    }
    table { width: 100%; border-collapse: separate; border-spacing: 0; }
    thead th {
      background: oklch(93.5% 0.025 248);
      color: oklch(31% 0.047 248);
      font-size: 7.4px;
      font-weight: 900;
      padding: 4px 3px;
      border-inline-start: 1px solid oklch(83% 0.017 248);
      border-bottom: 1px solid oklch(80% 0.02 248);
      text-align: center;
      white-space: nowrap;
    }
    tbody td {
      background: oklch(99.5% 0.003 248);
      color: oklch(25% 0.03 248);
      font-size: 7.4px;
      font-weight: 700;
      padding: 3px 3px;
      border-inline-start: 1px solid oklch(88% 0.012 248);
      border-bottom: 1px solid oklch(88% 0.012 248);
      text-align: center;
      white-space: nowrap;
    }
    tbody tr:nth-child(even) td { background: oklch(98% 0.006 248); }
    tbody tr:last-child td { border-bottom: 0; }
    .emp-col {
      min-width: 115px;
      text-align: right !important;
      font-size: 8px;
      font-weight: 900;
      color: oklch(25% 0.045 248);
    }
    .money-strong {
      color: oklch(38% 0.105 248);
      font-size: 8px;
      font-weight: 900;
    }
    .total-row td {
      background: oklch(96% 0.035 56) !important;
      color: oklch(31% 0.055 56);
      font-size: 8px;
      font-weight: 900;
      border-top: 1px solid oklch(76% 0.06 56);
    }
    .sig-col { width: 58px; }
    .footer {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      margin-top: 14px;
    }
    .footer-block {
      text-align: center;
      color: oklch(31% 0.035 248);
      font-size: 8.5px;
      font-weight: 800;
    }
    .footer-line {
      width: 128px;
      margin: 16px auto 4px;
      border-top: 1px solid oklch(38% 0.025 248);
    }
    .footer-meta {
      display: flex;
      justify-content: space-between;
      margin-top: 7px;
      color: oklch(50% 0.024 248);
      font-size: 7px;
      font-weight: 700;
    }
    .note {
      margin: 6px 0;
      color: oklch(46% 0.025 248);
      font-size: 8px;
      font-weight: 700;
    }
  `,X=`
    @page { size: A4 portrait; margin: 8mm; }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      direction: rtl;
      background: oklch(99% 0.004 248);
      color: oklch(22% 0.035 248);
      font-family: "Segoe UI", Tahoma, Arial, sans-serif;
      font-size: 9px;
      line-height: 1.35;
    }
    .slip {
      position: relative;
      min-height: 64mm;
      margin-bottom: 3mm;
      padding: 4mm;
      break-inside: avoid;
      page-break-inside: avoid;
      border: 1px solid oklch(84% 0.017 248);
      border-radius: 12px;
      background: oklch(99.5% 0.004 248);
    }
    .slip::after {
      content: "";
      position: absolute;
      inset-inline: 4mm;
      bottom: -1.5mm;
      border-bottom: 1px dashed oklch(72% 0.02 248);
    }
    .slip-top {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 6px;
      margin-bottom: 3px;
      color: oklch(48% 0.025 248);
      font-size: 7px;
      font-weight: 800;
    }
    .slip-badge {
      padding: 2px 8px;
      border-radius: 999px;
      background: oklch(96% 0.018 248);
      color: oklch(38% 0.105 248);
      font-size: 7px;
      font-weight: 900;
    }
    .slip-title {
      text-align: center;
      color: oklch(25% 0.045 248);
      font-size: 12px;
      font-weight: 900;
      letter-spacing: -0.02em;
    }
    .employee-strip {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 6px;
      margin: 4px 0;
    }
    .employee-box {
      padding: 3px 6px;
      border: 1px solid oklch(88% 0.018 248);
      border-radius: 9px;
      background: oklch(98% 0.006 248);
    }
    .box-label {
      display: block;
      color: oklch(50% 0.025 248);
      font-size: 6.2px;
      font-weight: 700;
    }
    .box-value {
      display: block;
      margin-top: 1px;
      color: oklch(25% 0.045 248);
      font-size: 9.5px;
      font-weight: 900;
    }
    table.main {
      width: 100%;
      overflow: hidden;
      border: 1px solid oklch(84% 0.017 248);
      border-collapse: separate;
      border-spacing: 0;
      border-radius: 10px;
      margin-bottom: 3px;
    }
    table.main th {
      border-inline-start: 1px solid oklch(84% 0.017 248);
      border-bottom: 1px solid oklch(80% 0.02 248);
      background: oklch(93.5% 0.025 248);
      color: oklch(31% 0.047 248);
      padding: 2px 3px;
      text-align: center;
      white-space: nowrap;
      font-size: 6.4px;
      font-weight: 900;
    }
    table.main td {
      border-inline-start: 1px solid oklch(88% 0.012 248);
      border-bottom: 1px solid oklch(88% 0.012 248);
      background: oklch(99.5% 0.003 248);
      color: oklch(25% 0.03 248);
      padding: 2px 3px;
      text-align: center;
      font-size: 7.2px;
      font-weight: 750;
    }
    table.main tr:last-child td { border-bottom: 0; }
    .net-cell {
      min-width: 60px;
      border: 1px solid oklch(70% 0.095 56) !important;
      background: oklch(97% 0.038 56) !important;
      color: oklch(34% 0.075 56) !important;
      text-align: center;
      vertical-align: middle;
      padding: 3px 4px !important;
    }
    .net-label {
      display: block;
      margin-bottom: 2px;
      color: oklch(42% 0.065 56);
      font-size: 6px;
      font-weight: 800;
    }
    .net-val {
      display: block;
      color: oklch(31% 0.08 56);
      font-size: 12px;
      font-weight: 950;
    }
    .words {
      margin: 3px 0 1px;
      color: oklch(30% 0.035 248);
      text-align: right;
      font-size: 7.5px;
      font-weight: 800;
    }
    .sigs {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin-top: 5px;
    }
    .sig-block {
      text-align: center;
      color: oklch(31% 0.035 248);
      font-size: 7px;
      font-weight: 800;
    }
    .sig-line {
      width: 100px;
      margin: 9px auto 3px;
      border-top: 1px solid oklch(38% 0.025 248);
    }
  `;function Z(e,t,n){let r=`<!DOCTYPE html><html dir="rtl"><head><meta charset="utf-8"/><title>${C(t)}</title><style>${n}</style></head><body>${e}</body></html>`;if(te()){ee(t,r);return}let i=document.createElement(`iframe`);i.style.cssText=`position:fixed;top:0;left:0;width:0;height:0;border:none;visibility:hidden;`,document.body.appendChild(i);let a=i.contentDocument;a.open(),a.write(r),a.close();let o=()=>{i.remove(),window.removeEventListener(`afterprint`,o)};window.addEventListener(`afterprint`,o),i.contentWindow.focus(),i.contentWindow.print()}function Ce(e){let t=Math.round(e);if(t===0)return`صفر جنيه`;let n=[``,`واحد`,`اثنان`,`ثلاثة`,`أربعة`,`خمسة`,`ستة`,`سبعة`,`ثمانية`,`تسعة`,`عشرة`,`أحد عشر`,`اثنا عشر`,`ثلاثة عشر`,`أربعة عشر`,`خمسة عشر`,`ستة عشر`,`سبعة عشر`,`ثمانية عشر`,`تسعة عشر`],r=[``,``,`عشرون`,`ثلاثون`,`أربعون`,`خمسون`,`ستون`,`سبعون`,`ثمانون`,`تسعون`];function i(e){if(e<20)return n[e];let t=e%10;return(t?n[t]+` و`:``)+r[Math.floor(e/10)]}function a(e){if(e<100)return i(e);let t=Math.floor(e/100),r=e%100;return(t===1?`مائة`:t===2?`مئتان`:n[t]+`مائة`)+(r?` و`+i(r):``)}let o=Math.floor(t/1e3),s=t%1e3,c=``;return o===1?c=`ألف`:o===2?c=`ألفان`:o>=3&&o<=10?c=n[o]+` آلاف`:o>10&&(c=i(o)+` ألف`),s&&(c+=(c?` و`:``)+a(s)),c+` جنيه`}function we(e){return e===`عيادة`?{mark:`SEC`,name:`مركز أ.د محمد السعدني غرابة`,sub:`Sadany Eye Center`}:{mark:`S`,name:`مركز عيون الشروق`,sub:`SELRS`}}function Q(e,t,n=`نظام الرواتب`){let r=we(t);return`
        <header class="sheet-header">
          <div class="brand">
            <span class="brand-mark">${C(r.mark)}</span>
            <div>
              <div>${C(r.name)}</div>
              <div class="muted">${C(r.sub)}</div>
            </div>
          </div>
          <div class="report-title">
            <h1>${C(e)} — ${C(y[M-1])}</h1>
            <span class="period">${C(F)}</span>
          </div>
          <div class="report-title" style="text-align:left">
            <div class="muted">${C(n)}</div>
            <div class="dept">${C(t)}</div>
          </div>
        </header>`}function Te(){let e=new Date().toLocaleDateString(`ar-EG`),t=w===`عيادة`,n=B.filter(e=>!String(e.empCd).startsWith(`shift_`)),r=n.reduce((e,t)=>e+Number(t.basicSalary),0),i=n.reduce((e,t)=>e+Number(t.absentDeduction??0),0),a=n.reduce((e,t)=>e+Number(t.lateDeduction??0),0),o=n.reduce((e,t)=>e+Number(t.earlyLeaveDeduction??0),0),s=n.reduce((e,t)=>e+Number(t.penaltyDeduction??0),0),c=n.reduce((e,t)=>e+Number(t.totalDeductions),0),l=n.reduce((e,t)=>e+Number(t.netBasic),0),u=n.reduce((e,t)=>e+Number(t.attendanceCommission),0),d=n.reduce((e,t)=>e+Number(t.examCommission),0),f=n.reduce((e,t)=>e+Number(t.pentacamCommission),0),p=n.reduce((e,t)=>e+Number(t.overtimePay??0),0),m=n.reduce((e,t)=>e+Number(t.totalPay),0),h=n.map(e=>`
      <tr>
        <td class="emp-col">${C(e.fullName??e.empCd)}</td>
        <td>${x(e.basicSalary)}</td>
        <td>${x(e.absentDeduction)}</td>
        <td>${x(e.lateDeduction??0)}</td>
        <td>${x(e.earlyLeaveDeduction??0)}</td>
        <td>${x(e.penaltyDeduction)}</td>
        <td>${x(e.totalDeductions)}</td>
        <td>${x(e.netBasic)}</td>
        <td>${x(e.attendanceCommission)}</td>
        <td>${x(e.examCommission)}</td>
        ${t?``:`<td>${x(e.pentacamCommission)}</td>`}
        <td>${x(e.overtimePay??0)}</td>
        <td class="money-strong">${x(e.totalPay)}</td>
        <td class="sig-col"></td>
      </tr>`).join(``);Z(`
      <main class="payroll-sheet">
        ${Q(`كشف المرتبات الشهرية`,w)}
        <section class="summary-strip" aria-label="ملخص كشف المرتبات">
          <div class="summary-pill"><span class="summary-label">عدد الموظفين</span><span class="summary-value">${n.length}</span></div>
          <div class="summary-pill"><span class="summary-label">إجمالي الأساسي</span><span class="summary-value">${x(r)}</span></div>
          <div class="summary-pill"><span class="summary-label">إجمالي الخصومات</span><span class="summary-value">${x(c)}</span></div>
          <div class="summary-pill"><span class="summary-label">صافي الأساسي</span><span class="summary-value">${x(l)}</span></div>
          <div class="summary-pill"><span class="summary-label">صافي المستحق</span><span class="summary-value">${x(m)}</span></div>
        </section>
        <section class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>الاسم</th>
            <th>الأساسي</th>
            <th>خصم غياب</th>
            <th>خصم تأخير</th>
            <th>خصم مبكر</th>
            <th>جزاءات</th>
            <th>إجمالي الخصم</th>
            <th>صافي الأساسي</th>
            <th>عمولة حضور</th>
            <th>عمولة فحص</th>
            ${t?``:`<th>عمولة بنتاكام</th>`}
            <th>إضافي</th>
            <th>صافي المستحق</th>
            <th class="sig-col">التوقيع</th>
          </tr>
        </thead>
        <tbody>
          ${h}
          <tr class="total-row">
            <td class="emp-col">الإجمالي</td>
            <td>${x(r)}</td>
            <td>${x(i)}</td>
            <td>${x(a)}</td>
            <td>${x(o)}</td>
            <td>${x(s)}</td>
            <td>${x(c)}</td>
            <td>${x(l)}</td>
            <td>${x(u)}</td>
            <td>${x(d)}</td>
            ${t?``:`<td>${x(f)}</td>`}
            <td>${x(p)}</td>
            <td class="money-strong">${x(m)}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
        </section>
      <div class="footer">
        <div class="footer-block"><div class="footer-line"></div>المدير الإداري</div>
        <div class="footer-block"><div class="footer-line"></div>الحسابات</div>
        <div class="footer-block"><div class="footer-line"></div>شئون العاملين</div>
      </div>
      <div class="footer-meta">
        <span>صفحة 1 من 1</span>
        <span>تاريخ الطباعة: ${C(e)}</span>
      </div>
      </main>`,`كشف الرواتب — ${w} — ${F}`,Y)}function Ee(){let e=new Date().toLocaleDateString(`ar-EG`),t=K.reduce((e,t)=>e+t.shiftDayTotal,0),n=K.reduce((e,t)=>e+t.shiftNightTotal,0),r=K.reduce((e,t)=>e+Number(t.totalDeductions),0),i=K.reduce((e,t)=>e+Number(t.netBasic),0),a=K.map(e=>`
      <tr>
        <td class="emp-col">${C(e.fullName)}</td>
        <td>${C(e.type===`doctor`?`طبيب`:`فني`)}</td>
        <td>${e.shiftDayCount}</td><td>${x(e.shiftDayRate)}</td><td>${x(e.shiftDayTotal)}</td>
        <td>${e.shiftNightCount}</td><td>${x(e.shiftNightRate)}</td><td>${x(e.shiftNightTotal)}</td>
        <td>${x(e.totalDeductions)}</td><td>${S(e.leaveMultiplier)}</td>
        <td class="money-strong">${x(e.netBasic)}</td><td class="sig-col"></td>
      </tr>`).join(``);Z(`
      ${Q(`كشف رواتب الشفتات`,`مركز`)}
      <table><thead><tr>
        <th>الاسم</th><th>النوع</th><th>عدد الكبير</th><th>سعر الكبير</th><th>إجمالي الكبير</th>
        <th>عدد الصغير</th><th>سعر الصغير</th><th>إجمالي الصغير</th>
        <th>الخصومات</th><th>المعامل</th><th>صافي الشفتات</th><th class="sig-col">التوقيع</th>
      </tr></thead><tbody>${a}
        <tr class="total-row"><td class="emp-col" colspan="4">الإجمالي</td><td>${x(t)}</td><td colspan="2"></td><td>${x(n)}</td><td>${x(r)}</td><td></td><td class="money-strong">${x(i)}</td><td></td></tr>
      </tbody></table>
      <div class="footer"><div class="footer-block"><div class="footer-line"></div>المدير الإداري</div><div class="footer-block"><div class="footer-line"></div>الحسابات</div><div class="footer-block"><div class="footer-line"></div>شئون العاملين</div></div>
      <div class="footer-meta"><span>صفحة 1 من 1</span><span>تاريخ الطباعة: ${C(e)}</span></div>`,`كشف رواتب الشفتات — ${F}`,Y)}function De(){let e=K.filter(e=>e.type===`doctor`),t=e.reduce((e,t)=>e+Number(t.netBasic),0),n=e.map(e=>G.find(t=>t.empCd===`shift_${e.id}`)).filter(Boolean),r=n.reduce((e,t)=>e+Number(t.examCommission??0),0),i=n.reduce((e,t)=>e+Number(t.pentacamCommission??0),0);return e.map(e=>{let n=G.find(t=>t.empCd===`shift_${e.id}`),a=Number(e.netBasic),o=t>0?a/t:0,s=Number(n?.netBasic??0),c=Number(n?.attendanceCommissionRaw??n?.attendanceCommission??0),l=a*(s>0?c/s:.25)*Number(e.leaveMultiplier??1),u=r*o,d=i*o;return{...e,base:a,share:o,attend:l,examComm:u,pentComm:d,total:l+u+d}})}function Oe(){let e=new Date().toLocaleDateString(`ar-EG`),t=De(),n=t.reduce((e,t)=>({base:e.base+t.base,attend:e.attend+t.attend,exam:e.exam+t.examComm,pentacam:e.pentacam+t.pentComm,total:e.total+t.total}),{base:0,attend:0,exam:0,pentacam:0,total:0}),r=t.map(e=>`
      <tr><td class="emp-col">${C(e.fullName)}</td><td>${x(e.base)}</td><td>${S(e.share)}</td>
      <td>${x(e.attend)}</td><td>${x(e.examComm)}</td><td>${x(e.pentComm)}</td>
      <td class="money-strong">${x(e.total)}</td><td class="sig-col"></td></tr>`).join(``);Z(`
      ${Q(`كشف عمولات الشفتات`,`مركز`)}
      <table><thead><tr><th>الاسم</th><th>صافي الشفتات</th><th>نسبة التوزيع</th><th>الحضور</th><th>الفحص</th><th>البنتاكام</th><th>إجمالي العمولات</th><th class="sig-col">التوقيع</th></tr></thead>
      <tbody>${r}<tr class="total-row"><td class="emp-col">الإجمالي</td><td>${x(n.base)}</td><td></td><td>${x(n.attend)}</td><td>${x(n.exam)}</td><td>${x(n.pentacam)}</td><td class="money-strong">${x(n.total)}</td><td></td></tr></tbody></table>
      <div class="footer"><div class="footer-block"><div class="footer-line"></div>المدير الإداري</div><div class="footer-block"><div class="footer-line"></div>الحسابات</div><div class="footer-block"><div class="footer-line"></div>شئون العاملين</div></div>
      <div class="footer-meta"><span>صفحة 1 من 1</span><span>تاريخ الطباعة: ${C(e)}</span></div>`,`كشف عمولات الشفتات — ${F}`,Y)}function ke(){Z(K.map(e=>{let t=Number(e.netBasic),n=e.shiftDayTotal+e.shiftNightTotal,r=`
          <table class="main">
            <tr>
              <th colspan="2">شفت كبير</th>
              <th colspan="2">شفت صغير</th>
              <th>إجمالي الاستحقاقات</th>
              <th rowspan="5" class="net-cell"><span class="net-label">صافي المستحق</span><span class="net-val">${x(t)}</span></th>
            </tr>
            <tr>
              <th>عدد</th><th>قيمة</th>
              <th>عدد</th><th>قيمة</th>
              <th></th>
            </tr>
            <tr>
              <td>${e.shiftDayCount}</td><td>${x(e.shiftDayRate)}</td>
              <td>${e.shiftNightCount}</td><td>${x(e.shiftNightRate)}</td>
              <td>${x(n)}</td>
            </tr>
            <tr>
              <th colspan="2">خصومات</th>
              <th colspan="2">معامل الإجازة</th>
              <th>صافي الأساسي</th>
            </tr>
            <tr>
              <td colspan="2">${x(e.totalDeductions)}</td>
              <td colspan="2">${S(e.leaveMultiplier)}</td>
              <td>${x(t)}</td>
            </tr>
          </table>`;return $({...e,jobTitle:e.type===`doctor`?`طبيب`:`فني`},`مرتب الشفتات — يوم 1 — ${y[M-1]} ${j}`,r,t,w)}).join(``),`قسائم الشفتات يوم 1 — ${y[M-1]} ${j}`,X)}function Ae(){Z(K.map(e=>{let t=G.find(t=>t.empCd===`shift_${e.id}`),n=t?Number(t.attendanceCommission):0,r=t?Number(t.attendanceCommissionRaw??n):0,i=t?Number(t.examCommission):0,a=t?Number(t.examCommissionRaw??i):0,o=t?Number(t.pentacamCommission):0,s=t?Number(t.pentacamCommissionRaw??o):0,{cola:c,travel:l}=t?V(t):{cola:0,travel:0},u=t?Number(t.overtimePay??0):0,d=n+i+o+c+l+u,f=`
          <table class="main">
            <tr>
              <th colspan="2">الحضور</th>
              <th colspan="2">الكشف</th>
              <th colspan="2">البنتاكام</th>
              <th rowspan="2">غلاء معيشه</th>
              <th rowspan="2">بدل مواصلات</th>
              <th rowspan="2">أوفرتايم</th>
              <th rowspan="2">إجمالي المكافآت</th>
              <th rowspan="3" class="net-cell"><span class="net-label">صافي المستحق</span><span class="net-val">${x(d)}</span></th>
            </tr>
            <tr>
              <th>النسبة</th><th>المستحق</th>
              <th>النسبة</th><th>المستحق</th>
              <th>النسبة</th><th>المستحق</th>
            </tr>
            <tr>
              <td>${x(r)}</td><td>${x(n)}</td>
              <td>${x(a)}</td><td>${x(i)}</td>
              <td>${x(s)}</td><td>${x(o)}</td>
              <td>${x(c)}</td>
              <td>${x(l)}</td>
              <td>${x(u)}</td>
              <td>${x(d)}</td>
            </tr>
          </table>`;return $({...e,jobTitle:e.type===`doctor`?`طبيب`:`فني`},`نسب الشفتات — ${y[M-1]} ${j}`,f,d,w)}).join(``),`قسائم الشفتات يوم 10 — ${y[M-1]} ${j}`,X)}function je(){let e=new Date().toLocaleDateString(`ar-EG`),t=B.filter(e=>!String(e.empCd).startsWith(`shift_`)),n=t.reduce((e,t)=>e+Number(t.basicSalary),0),r=t.reduce((e,t)=>{let n=H(t);return e.late+=n.late,e.absent+=n.absent,e.penalty+=n.penalty,e.missingCheckout+=n.missingCheckout,e.advances+=n.advances,e.insurance+=n.insurance,e},{late:0,absent:0,penalty:0,missingCheckout:0,advances:0,insurance:0}),i=t.reduce((e,t)=>e+Number(t.totalDeductions),0),a=t.reduce((e,t)=>e+Number(t.netBasic),0),o=t.map(e=>{let t=H(e);return`
      <tr>
        <td class="emp-col">${C(e.fullName??e.empCd)}</td>
        <td>${x(e.basicSalary)}</td>
        <td>${x(t.late)}</td>
        <td>${x(t.absent)}</td>
        <td>${x(t.penalty)}</td>
        <td>${x(t.missingCheckout)}</td>
        <td>${x(t.advances)}</td>
        <td>${x(t.insurance)}</td>
        <td>${x(t.total)}</td>
        <td class="money-strong">${x(e.netBasic)}</td>
        <td class="sig-col"></td>
      </tr>`}).join(``);Z(`
      ${Q(`كشف الرواتب الأساسية`,w)}
      <table>
        <thead><tr>
          <th>الاسم</th><th>الأساسي</th><th>تأخير</th><th>غياب</th>
          <th>جزاء</th><th>بصمة واحدة</th><th>سلف</th><th>تأمين</th>
          <th>إجمالي الخصومات</th><th>صافي الأساسي</th>
          <th class="sig-col">التوقيع</th>
        </tr></thead>
        <tbody>
          ${o}
          <tr class="total-row">
            <td class="emp-col">الإجمالي</td>
            <td>${x(n)}</td>
            <td>${x(r.late)}</td>
            <td>${x(r.absent)}</td>
            <td>${x(r.penalty)}</td>
            <td>${x(r.missingCheckout)}</td>
            <td>${x(r.advances)}</td>
            <td>${x(r.insurance)}</td>
            <td>${x(i)}</td>
            <td class="money-strong">${x(a)}</td><td></td>
          </tr>
        </tbody>
      </table>
      <div class="footer">
        <div class="footer-block"><div class="footer-line"></div>المدير الإداري</div>
        <div class="footer-block"><div class="footer-line"></div>الحسابات</div>
        <div class="footer-block"><div class="footer-line"></div>شئون العاملين</div>
      </div>
      <div class="footer-meta"><span>صفحة 1 من 1</span><span>تاريخ الطباعة: ${e}</span></div>`,`كشف الأساسي — ${w} — ${F}`,Y)}function Me(){let e=new Date().toLocaleDateString(`ar-EG`),t=w===`عيادة`,n=B.filter(e=>!String(e.empCd).startsWith(`shift_`)),r=n.reduce((e,t)=>e+Number(t.attendanceCommission),0),i=n.reduce((e,t)=>e+Number(t.examCommission),0),a=n.reduce((e,t)=>e+Number(t.pentacamCommission),0),o=n.reduce((e,t)=>e+V(t).cola,0),s=n.reduce((e,t)=>e+V(t).travel,0),c=n.reduce((e,t)=>e+Number(t.overtimePay??0),0),l=n.reduce((e,t)=>e+U(t)+Number(t.overtimePay??0),0),u=n.reduce((e,t)=>e+Number(t.attendanceCommissionRaw??t.attendanceCommission),0),d=n.reduce((e,t)=>e+Number(t.examCommissionRaw??t.examCommission),0),f=n.reduce((e,t)=>e+Number(t.pentacamCommissionRaw??t.pentacamCommission),0),p=n.map(e=>`
      <tr>
        <td class="emp-col">${C(e.fullName??e.empCd)}</td>
        <td>${x(e.attendanceCommissionRaw??e.attendanceCommission)}</td>
        <td>${x(e.attendanceCommission)}</td>
        <td>${x(e.examCommissionRaw??e.examCommission)}</td>
        <td>${x(e.examCommission)}</td>
        ${t?``:`<td>${x(e.pentacamCommissionRaw??e.pentacamCommission)}</td><td>${x(e.pentacamCommission)}</td>`}
        <td>${x(V(e).cola)}</td>
        <td>${x(V(e).travel)}</td>
        <td>${x(e.overtimePay??0)}</td>
        <td style="font-weight:bold">${x(U(e)+Number(e.overtimePay??0))}</td>
        <td class="sig-col"></td>
      </tr>`).join(``);Z(`
      ${Q(`كشف العمولات`,w)}
      <table>
        <thead>
          <tr>
            <th rowspan="2">الاسم</th>
            <th colspan="2">عمولة حضور</th>
            <th colspan="2">عمولة فحص</th>
            ${t?``:`<th colspan="2">عمولة بنتاكام</th>`}
            <th rowspan="2">غلاء معيشه</th><th rowspan="2">بدل مواصلات</th><th rowspan="2">إضافي</th><th rowspan="2">إجمالي العمولات</th><th rowspan="2" class="sig-col">التوقيع</th>
          </tr>
          <tr>
            <th>النسبة</th><th>المستحق</th>
            <th>النسبة</th><th>المستحق</th>
            ${t?``:`<th>النسبة</th><th>المستحق</th>`}
          </tr>
        </thead>
        <tbody>
          ${p}
          <tr class="total-row">
            <td class="emp-col">الإجمالي</td>
            <td>${x(u)}</td><td>${x(r)}</td>
            <td>${x(d)}</td><td>${x(i)}</td>
            ${t?``:`<td>${x(f)}</td><td>${x(a)}</td>`}
            <td>${x(o)}</td><td>${x(s)}</td><td>${x(c)}</td><td style="font-weight:bold">${x(l)}</td><td></td>
          </tr>
        </tbody>
      </table>
      <div class="footer">
        <div class="footer-block"><div class="footer-line"></div>المدير الإداري</div>
        <div class="footer-block"><div class="footer-line"></div>الحسابات</div>
        <div class="footer-block"><div class="footer-line"></div>شئون العاملين</div>
      </div>
      <div class="footer-meta"><span>صفحة 1 من 1</span><span>تاريخ الطباعة: ${e}</span></div>`,`كشف العمولات — ${w} — ${F}`,Y)}function Ne(){let e=new Date().toLocaleDateString(`ar-EG`),t=z.map(e=>{let t=G.find(t=>t.empCd===`shift_${e.id}`);return{empCd:`shift_${e.id}`,fullName:e.name,department:`مناوبة`,supervisionBonus:t?.supervisionBonus??`0`}}),n=[...W,...t],r=n.reduce((e,t)=>e+Number(O[t.empCd]??t.supervisionBonus??0),0),i=n.map(e=>`
      <tr>
        <td class="emp-col">${C(e.fullName??e.empCd)}</td>
        <td>${x(Number(O[e.empCd]??e.supervisionBonus??0))}</td>
        <td class="sig-col"></td>
      </tr>`).join(``);Z(`
      ${Q(`كشف مكافآت الإشراف`,w)}
      <p class="note" style="margin-bottom:6px">ملاحظة: هذه المكافآت خارج إجمالي الراتب ولا تؤثر على الحسابات</p>
      <table>
        <thead><tr>
          <th>الاسم</th><th>مكافأة الإشراف</th><th class="sig-col">التوقيع</th>
        </tr></thead>
        <tbody>
          ${i}
          <tr class="total-row">
            <td class="emp-col">الإجمالي</td>
            <td>${x(r)}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div class="footer">
        <div class="footer-block"><div class="footer-line"></div>المدير الإداري</div>
        <div class="footer-block"><div class="footer-line"></div>الحسابات</div>
        <div class="footer-block"><div class="footer-line"></div>شئون العاملين</div>
      </div>
      <div class="footer-meta"><span>صفحة 1 من 1</span><span>تاريخ الطباعة: ${e}</span></div>`,`كشف مكافآت الإشراف — ${w} — ${F}`,Y)}function Pe(){let e=z.map(e=>{let t=G.find(t=>t.empCd===`shift_${e.id}`);return{empCd:`shift_${e.id}`,fullName:e.name,department:`مناوبة`,supervisionBonus:t?.supervisionBonus??`0`}}),t=[...W,...e].filter(e=>Number(O[e.empCd]??e.supervisionBonus??0)>0);if(!t.length){i.info(`لا توجد مكافآت إشراف للطباعة`);return}Z(t.map(e=>{let t=Number(O[e.empCd]??e.supervisionBonus??0),n=`
        <table class="main">
          <tr>
            <th>مكافأة الإشراف</th>
            <th rowspan="2" class="net-cell"><span class="net-label">صافي المستحق</span><span class="net-val">${x(t)}</span></th>
          </tr>
          <tr>
            <td>${x(t)}</td>
          </tr>
        </table>`;return $(e,`مكافأة إشراف ${y[M-1]} ${j}`,n,t)}).join(``),`مكافآت الإشراف — ${y[M-1]} ${j}`,X)}function $(e,t,n,r,i){let a=we(i??e._section??w);return`
      <div class="slip">
        <div class="slip-top">
          <span>${C(a.name)}</span>
          <span class="slip-badge">${C(a.mark)}</span>
          <span style="text-align:left">${C(a.sub)}</span>
        </div>
        <div class="slip-title">${C(t)}</div>
        <div class="employee-strip">
          <div class="employee-box">
            <span class="box-label">اسم الموظف</span>
            <span class="box-value">${C(e.fullName??e.empCd)}</span>
          </div>
          <div class="employee-box">
            <span class="box-label">الوظيفة/القسم</span>
            <span class="box-value">${C([e.jobTitle,i??e._section??w].filter(Boolean).join(`/`))}</span>
          </div>
        </div>
        ${n}
        <div class="words">${C(Ce(r))}</div>
        <div class="sigs">
          <div class="sig-block"><div class="sig-line"></div>توقيع المستلم</div>
          <div class="sig-block"><div class="sig-line"></div>يعتمد</div>
        </div>
      </div>`}function Fe(){new Date().toLocaleDateString(`ar-EG`);let e=B.filter(e=>!String(e.empCd).startsWith(`shift_`)),t=e.reduce((e,t)=>e+Number(t.penaltyDeduction),0),n=e.map(e=>`
      <tr>
        <td class="emp-col">${C(e.fullName??e.empCd)}</td>
        <td>${x(e.penaltyDeduction)}</td>
        <td class="sig-col"></td>
      </tr>`).join(``);Z(`
      ${Q(`كشف الجزاءات`,w)}
      <table>
        <thead><tr><th>الاسم</th><th>الجزاءات</th><th class="sig-col">التوقيع</th></tr></thead>
        <tbody>
          ${n}
          <tr class="total-row"><td class="emp-col">الإجمالي</td><td>${x(t)}</td><td></td></tr>
        </tbody>
      </table>`,`كشف الجزاءات — ${w} — ${F}`,Y)}function Ie(){new Date().toLocaleDateString(`ar-EG`);let e=B.filter(e=>!String(e.empCd).startsWith(`shift_`)),t=e.reduce((e,t)=>e+Number(t.advancesDeduction??0),0),n=e.map(e=>`
      <tr>
        <td class="emp-col">${C(e.fullName??e.empCd)}</td>
        <td>${x(e.advancesDeduction??0)}</td>
        <td class="sig-col"></td>
      </tr>`).join(``);Z(`
      ${Q(`كشف السلف`,w)}
      <table>
        <thead><tr><th>الاسم</th><th>السلف</th><th class="sig-col">التوقيع</th></tr></thead>
        <tbody>
          ${n}
          <tr class="total-row"><td class="emp-col">الإجمالي</td><td>${x(t)}</td><td></td></tr>
        </tbody>
      </table>`,`كشف السلف — ${w} — ${F}`,Y)}function Le(){new Date().toLocaleDateString(`ar-EG`);let e=B.filter(e=>!String(e.empCd).startsWith(`shift_`)),t=e.reduce((e,t)=>e+Number(t.lateDeduction??0),0),n=e.reduce((e,t)=>e+Number(t.earlyLeaveDeduction??0),0),r=e.map(e=>`
      <tr>
        <td class="emp-col">${C(e.fullName??e.empCd)}</td>
        <td>${e.lateMinutes??0}</td>
        <td>${x(e.lateDeduction??0)}</td>
        <td>${e.earlyLeaveMinutes??0}</td>
        <td>${x(e.earlyLeaveDeduction??0)}</td>
        <td class="sig-col"></td>
      </tr>`).join(``);Z(`
      ${Q(`كشف التأخيرات`,w)}
      <table>
        <thead><tr>
          <th>الاسم</th>
          <th>تأخير (د)</th><th>خصم تأخير</th>
          <th>مبكر (د)</th><th>خصم مبكر</th>
          <th class="sig-col">التوقيع</th>
        </tr></thead>
        <tbody>
          ${r}
          <tr class="total-row">
            <td class="emp-col">الإجمالي</td>
            <td></td><td>${x(t)}</td>
            <td></td><td>${x(n)}</td>
            <td></td>
          </tr>
        </tbody>
      </table>`,`كشف التأخيرات — ${w} — ${F}`,Y)}function Re(){new Date().toLocaleDateString(`ar-EG`);let e=B.filter(e=>!String(e.empCd).startsWith(`shift_`)),t=e.reduce((e,t)=>e+Number(t.insuranceDeduction??0),0),n=e.map(e=>`
      <tr>
        <td class="emp-col">${C(e.fullName??e.empCd)}</td>
        <td>${x(e.insuranceDeduction??0)}</td>
        <td class="sig-col"></td>
      </tr>`).join(``);Z(`
      ${Q(`كشف التأمينات الاجتماعية`,w)}
      <table>
        <thead><tr><th>الاسم</th><th>التأمينات</th><th class="sig-col">التوقيع</th></tr></thead>
        <tbody>
          ${n}
          <tr class="total-row"><td class="emp-col">الإجمالي</td><td>${x(t)}</td><td></td></tr>
        </tbody>
      </table>`,`كشف التأمينات — ${w} — ${F}`,Y)}function ze(){Z(q.filter(e=>e._section===w).map((e,t)=>{let n=Number(e.netBasic),r=me[e.empCd]??{},i=Number(r.basicAmount??e.basicSalary),a=Number(r.socialAllowance??0),o=Number(r.costOfLivingAllowance??0),s=Number(r.transportAllowance??0)+Number(r.workNatureAllowance??0)+Number(r.receptionAllowance??0),c=Number(r.yearlyRaise??0),l=i+a+o+s+c,u=H(e),d=`
        <table class="main">
          <tr>
            <th>اساسي الراتب</th>
            <th>اعانة اجتماعية</th>
            <th>غلاء معيشة</th>
            <th>بدلات</th>
            <th>زيادة سنوات سابقة</th>
            <th>زيادة يناير</th>
            <th>إجمالي أساسي</th>
            <th>ح عاملين</th>
            <th>إجمالي الاستحقاقات</th>
            <th rowspan="4" class="net-cell"><span class="net-label">صافي المستحق</span><span class="net-val">${x(n)}</span></th>
          </tr>
          <tr>
            <td>${x(i)}</td>
            <td>${x(a)}</td>
            <td>${x(o)}</td>
            <td>${x(s)}</td>
            <td>${x(c)}</td>
            <td>0.00</td>
            <td>${x(l)}</td>
            <td>0.00</td>
            <td>${x(l)}</td>
          </tr>
          <tr>
            <th>تأخير</th>
            <th>غياب</th>
            <th>جزاء</th>
            <th>بصمة واحدة</th>
            <th>سلف</th>
            <th>تأمين</th>
            <th colspan="3">إجمالي الخصومات</th>
          </tr>
          <tr>
            <td>${x(u.late)}</td>
            <td>${x(u.absent)}</td>
            <td>${x(u.penalty)}</td>
            <td>${x(u.missingCheckout)}</td>
            <td>${x(u.advances)}</td>
            <td>${x(u.insurance)}</td>
            <td colspan="3">${x(u.total)}</td>
          </tr>
        </table>`;return $(e,`مرتب ${y[M-1]} ${j}`,d,n)}).join(``),`دفعة يوم 1 — ${y[M-1]} ${j}`,X)}function Be(){Z(q.filter(e=>e._section===w).map((e,t)=>{let n=(e._section??w)===`عيادة`,r=Number(e.attendanceCommission),i=Number(e.attendanceCommissionRaw??r),a=Number(e.examCommission),o=Number(e.examCommissionRaw??a),s=Number(e.pentacamCommission),c=Number(e.pentacamCommissionRaw??s),l=Number(e.costOfLivingAllowance??0),u=Number(e.transportAllowance??0),d=Number(e.overtimePay??0),f=r+a+(n?0:s)+l+u+d,p=`
        <table class="main">
          <tr>
            <th colspan="2">الحضور</th>
            <th colspan="2">الكشف</th>
            ${n?``:`<th colspan="2">البنتاكام</th>`}
            <th rowspan="2">غلاء معيشه</th>
            <th rowspan="2">بدل مواصلات</th>
            <th rowspan="2">أوفرتايم</th>
            <th rowspan="2">إجمالي المكافآت</th>
            <th rowspan="3" class="net-cell"><span class="net-label">صافي المستحق</span><span class="net-val">${x(f)}</span></th>
          </tr>
          <tr>
            <th>النسبة</th><th>المستحق</th>
            <th>النسبة</th><th>المستحق</th>
            ${n?``:`<th>النسبة</th><th>المستحق</th>`}
          </tr>
          <tr>
            <td>${x(i)}</td><td>${x(r)}</td>
            <td>${x(o)}</td><td>${x(a)}</td>
            ${n?``:`<td>${x(c)}</td><td>${x(s)}</td>`}
            <td>${x(l)}</td>
            <td>${x(u)}</td>
            <td>${x(d)}</td>
            <td>${x(f)}</td>
          </tr>
        </table>`;return $(e,`نسب ${y[M-1]} ${j}`,p,f)}).join(``),`دفعة يوم 10 — ${y[M-1]} ${j}`,X)}return(0,_.jsxs)(`div`,{className:`space-y-6`,dir:`rtl`,children:[(0,_.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,_.jsxs)(`div`,{className:`flex flex-col lg:flex-row lg:items-center justify-between gap-4`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`p`,{className:`text-xs font-semibold uppercase tracking-widest text-muted-foreground`,children:`الرواتب`}),(0,_.jsx)(`h2`,{className:`text-2xl font-bold text-foreground`,children:`كشف الرواتب`})]}),(0,_.jsx)(`div`,{dir:`rtl`,className:`flex flex-1 justify-center`,children:(0,_.jsxs)(`div`,{className:`flex flex-col items-center text-center`,children:[(0,_.jsx)(`p`,{className:`w-full text-center text-lg font-bold tabular-nums`,children:j.toLocaleString(`ar-EG`,{useGrouping:!1})}),(0,_.jsxs)(`p`,{className:`flex flex-row items-center gap-1 text-xs text-muted-foreground`,children:[(0,_.jsx)(`span`,{children:`من`}),(0,_.jsx)(`bdi`,{dir:`ltr`,children:le}),(0,_.jsx)(`span`,{children:`-`}),(0,_.jsx)(`bdi`,{dir:`ltr`,children:ue})]})]})}),(0,_.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,_.jsx)(`div`,{className:`flex rounded-lg border border-border overflow-hidden text-sm w-full sm:w-auto`,children:ie.map(e=>(0,_.jsx)(`button`,{type:`button`,onClick:()=>ae(e),className:`flex-1 sm:flex-none px-4 py-2 transition-colors ${w===e?`bg-primary text-primary-foreground font-semibold`:`bg-background text-muted-foreground hover:bg-muted`}`,children:e},e))}),(0,_.jsxs)(a,{onClick:()=>J.mutate({year:j,month:M,section:w}),disabled:J.isPending,className:`gap-2 w-full sm:w-auto justify-center`,children:[(0,_.jsx)(s,{size:15,className:J.isPending?`animate-spin`:``}),`احتساب`]}),B.length>0&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(`div`,{className:`hidden lg:flex items-center gap-2`,children:[(0,_.jsxs)(a,{variant:`outline`,onClick:Te,className:`gap-2`,children:[(0,_.jsx)(c,{size:15}),` كامل`]}),(0,_.jsxs)(a,{variant:`outline`,onClick:ze,className:`gap-2`,children:[(0,_.jsx)(c,{size:15}),` يوم 1`]}),(0,_.jsxs)(a,{variant:`outline`,onClick:Be,className:`gap-2`,children:[(0,_.jsx)(c,{size:15}),` يوم 10`]}),(0,_.jsxs)(h,{children:[(0,_.jsx)(p,{asChild:!0,children:(0,_.jsxs)(a,{variant:`outline`,className:`gap-2`,children:[(0,_.jsx)(c,{size:15}),` كشوف`]})}),(0,_.jsxs)(f,{align:`end`,className:`w-48`,children:[(0,_.jsxs)(m,{onClick:Fe,className:`gap-2 justify-start cursor-pointer`,children:[(0,_.jsx)(c,{size:14}),` جزاءات`]}),(0,_.jsxs)(m,{onClick:Ie,className:`gap-2 justify-start cursor-pointer`,children:[(0,_.jsx)(c,{size:14}),` سلف`]}),(0,_.jsxs)(m,{onClick:Le,className:`gap-2 justify-start cursor-pointer`,children:[(0,_.jsx)(c,{size:14}),` تأخيرات`]}),(0,_.jsxs)(m,{onClick:Re,className:`gap-2 justify-start cursor-pointer`,children:[(0,_.jsx)(c,{size:14}),` تأمينات`]})]})]})]}),(0,_.jsx)(`div`,{className:`lg:hidden w-full sm:w-auto`,children:(0,_.jsxs)(h,{children:[(0,_.jsx)(p,{asChild:!0,children:(0,_.jsxs)(a,{variant:`outline`,className:`gap-2 w-full justify-center`,children:[(0,_.jsx)(c,{size:15}),` طباعة التقارير`]})}),(0,_.jsxs)(f,{align:`end`,className:`w-48`,children:[(0,_.jsxs)(m,{onClick:Te,className:`gap-2 justify-start cursor-pointer`,children:[(0,_.jsx)(c,{size:14}),` كامل`]}),(0,_.jsxs)(m,{onClick:ze,className:`gap-2 justify-start cursor-pointer`,children:[(0,_.jsx)(c,{size:14}),` يوم 1`]}),(0,_.jsxs)(m,{onClick:Be,className:`gap-2 justify-start cursor-pointer`,children:[(0,_.jsx)(c,{size:14}),` يوم 10`]}),(0,_.jsxs)(m,{onClick:Fe,className:`gap-2 justify-start cursor-pointer`,children:[(0,_.jsx)(c,{size:14}),` جزاءات`]}),(0,_.jsxs)(m,{onClick:Ie,className:`gap-2 justify-start cursor-pointer`,children:[(0,_.jsx)(c,{size:14}),` سلف`]}),(0,_.jsxs)(m,{onClick:Le,className:`gap-2 justify-start cursor-pointer`,children:[(0,_.jsx)(c,{size:14}),` تأخيرات`]}),(0,_.jsxs)(m,{onClick:Re,className:`gap-2 justify-start cursor-pointer`,children:[(0,_.jsx)(c,{size:14}),` تأمينات`]}),w===`مركز`&&K.length>0&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(m,{onClick:Ee,className:`gap-2 justify-start cursor-pointer`,children:[(0,_.jsx)(c,{size:14}),` كشف رواتب الشفتات`]}),(0,_.jsxs)(m,{onClick:Oe,className:`gap-2 justify-start cursor-pointer`,children:[(0,_.jsx)(c,{size:14}),` كشف عمولات الشفتات`]}),(0,_.jsxs)(m,{onClick:ke,className:`gap-2 justify-start cursor-pointer`,children:[(0,_.jsx)(c,{size:14}),` إيصالات الشفتات — يوم 1`]}),(0,_.jsxs)(m,{onClick:Ae,className:`gap-2 justify-start cursor-pointer`,children:[(0,_.jsx)(c,{size:14}),` إيصالات الشفتات — يوم 10`]})]})]})]})})]}),B.length>0&&!Se&&(0,_.jsxs)(a,{variant:`outline`,onClick:()=>{confirm(`اعتماد كشف الرواتب كنهائي؟`)&&be.mutate({year:j,month:M})},disabled:be.isPending,className:`gap-2 w-full sm:w-auto justify-center`,children:[(0,_.jsx)(l,{size:15}),` اعتماد`]})]})]}),(0,_.jsxs)(`div`,{className:`rounded-xl border border-border bg-card p-3`,children:[(0,_.jsxs)(`div`,{className:`mb-3 flex items-center justify-between gap-3`,children:[(0,_.jsx)(`button`,{type:`button`,onClick:()=>I(j-1,M),className:`min-h-10 rounded-md border border-border px-3 text-xs font-bold hover:bg-muted`,"aria-label":`السنة السابقة`,children:`‹ السنة السابقة`}),(0,_.jsx)(`p`,{className:`text-sm font-semibold text-muted-foreground`,children:`اختر الشهر`}),(0,_.jsx)(`button`,{type:`button`,onClick:()=>I(j+1,M),className:`min-h-10 rounded-md border border-border px-3 text-xs font-bold hover:bg-muted`,"aria-label":`السنة التالية`,children:`السنة التالية ›`})]}),(0,_.jsx)(`div`,{className:`grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-12`,children:y.map((e,t)=>{let n=t+1;return(0,_.jsxs)(`button`,{type:`button`,onClick:()=>I(j,n),className:`min-h-10 rounded-md border px-2 text-xs font-semibold transition-colors ${M===n?`border-primary bg-primary text-primary-foreground`:`border-border bg-background hover:bg-muted`}`,children:[n.toLocaleString(`ar-EG`),` - `,e]},e)})})]})]}),B.length>0&&(()=>{let e=xe(w);return(0,_.jsx)(`div`,{className:`grid gap-2 sm:grid-cols-2 lg:grid-cols-5`,children:[{label:`الرواتب الأساسية`,value:x(e.basic),tone:`text-foreground`},{label:`الخصومات`,value:x(e.deductions),tone:`text-destructive`},{label:`الإجمالي الكلي`,value:x(e.totalPay),tone:`text-primary font-bold`},{label:`دفعة يوم 1 — الراتب`,value:x(e.netBasic),tone:`text-foreground`},{label:`دفعة يوم 10 — المكافآت`,value:x(e.commission+e.overtime),tone:`text-success`}].map(e=>(0,_.jsxs)(`div`,{className:`rounded-xl border border-border bg-card px-4 py-3`,children:[(0,_.jsx)(`div`,{className:`text-xs text-muted-foreground`,children:e.label}),(0,_.jsx)(`div`,{className:`mt-1 text-base font-bold ${e.tone}`,children:e.value})]},e.label))})})(),B.length>0&&(0,_.jsxs)(`div`,{className:`flex flex-col gap-2 border-b border-border sm:flex-row sm:items-end sm:justify-between`,children:[w===`مركز`&&(0,_.jsxs)(`div`,{className:`flex gap-2`,children:[(0,_.jsx)(`button`,{onClick:()=>E(`salaries`),className:`px-4 py-3 font-medium text-sm transition-colors ${T===`salaries`?`border-b-2 border-primary text-primary`:`text-muted-foreground hover:text-foreground`}`,children:`الرواتب`}),(0,_.jsx)(`button`,{onClick:()=>E(`shifts`),className:`px-4 py-3 font-medium text-sm transition-colors ${T===`shifts`?`border-b-2 border-primary text-primary`:`text-muted-foreground hover:text-foreground`}`,children:`الشفتات`}),(0,_.jsx)(`button`,{onClick:()=>E(`supervision`),className:`px-4 py-3 font-medium text-sm transition-colors ${T===`supervision`?`border-b-2 border-primary text-primary`:`text-muted-foreground hover:text-foreground`}`,children:`مكافأة الإشراف`})]}),(0,_.jsxs)(`div`,{className:`relative mb-2 w-full sm:max-w-sm`,children:[(0,_.jsx)(o,{className:`absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground`}),(0,_.jsx)(`input`,{type:`text`,placeholder:`البحث باسم الموظف...`,value:D,onChange:e=>oe(e.target.value),className:`min-h-10 w-full rounded-md border border-border bg-background pr-9 pl-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary`})]})]}),(w===`عيادة`||T===`salaries`)&&(()=>{let e=W.filter(e=>!D||(e.fullName??e.empCd).toLowerCase().includes(D.toLowerCase()));return(0,_.jsxs)(`section`,{className:`rounded-xl border border-border bg-background overflow-hidden`,children:[(0,_.jsxs)(`div`,{className:`flex items-center justify-between border-b border-border px-4 py-3 bg-muted/10`,children:[(0,_.jsxs)(`h3`,{className:`text-base font-semibold`,children:[`الرواتب الأساسية — `,F]}),(0,_.jsxs)(`div`,{className:`flex items-center gap-2`,children:[Se&&(0,_.jsx)(`span`,{className:`rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-xs font-medium text-success font-semibold`,children:`نهائي`}),B.length>0&&!Se&&(0,_.jsx)(`span`,{className:`rounded-full border border-warning/30 bg-warning/10 px-2.5 py-1 text-xs font-medium text-warning font-semibold`,children:`مسودة`}),e.length>0&&(0,_.jsxs)(a,{variant:`outline`,size:`sm`,onClick:je,className:`gap-1.5 h-8 text-xs`,children:[(0,_.jsx)(c,{size:13}),` طباعة`]})]})]}),(0,_.jsx)(`div`,{className:`hidden lg:block overflow-x-auto`,dir:`rtl`,children:(0,_.jsxs)(`table`,{dir:`rtl`,className:`w-full text-sm`,children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{className:`border-b border-border bg-muted/30 text-xs`,children:[(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`الموظف`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`الأساسي`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`أيام عمل`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`تأخير`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`غياب`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`جزاء`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`بصمة واحدة`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`سلف`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`تأمين`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`إجمالي الخصومات`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`إجازة`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`معامل`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground font-bold`,children:`صافي الأساسي`})]})}),(0,_.jsxs)(`tbody`,{children:[e.map(e=>{let t=H(e);return(0,_.jsxs)(`tr`,{className:`border-b border-border/50 hover:bg-muted/20 transition-colors`,children:[(0,_.jsxs)(`td`,{className:`px-3 py-3 text-center`,children:[(0,_.jsx)(`div`,{className:`font-medium`,children:e.fullName??e.empCd}),(0,_.jsx)(`div`,{className:`text-xs text-muted-foreground`,children:e.salaryType??e.department??``})]}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center`,children:x(e.basicSalary)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center`,children:e.workingDays}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-warning`,children:x(t.late)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-destructive`,children:x(t.absent)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-destructive`,children:x(t.penalty)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-destructive`,children:x(t.missingCheckout)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-destructive`,children:x(t.advances)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-destructive`,children:x(t.insurance)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center font-medium text-destructive`,children:x(t.total)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center`,children:e.leaveDays}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center`,children:S(e.leaveMultiplier)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center font-bold text-primary`,children:x(e.netBasic)})]},e.empCd)}),e.length===0&&(0,_.jsx)(`tr`,{children:(0,_.jsx)(`td`,{colSpan:13,className:`px-4 py-10 text-center text-muted-foreground`,children:`لا توجد رواتب تطابق البحث`})})]}),e.length>0&&(0,_.jsx)(`tfoot`,{children:(0,_.jsxs)(`tr`,{className:`border-t border-border bg-muted/30 text-xs font-semibold`,children:[(0,_.jsx)(`td`,{className:`px-3 py-2`,colSpan:3,children:`الإجمالي`}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center`,children:x(e.reduce((e,t)=>e+H(t).late,0))}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center`,children:x(e.reduce((e,t)=>e+H(t).absent,0))}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center`,children:x(e.reduce((e,t)=>e+H(t).penalty,0))}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center`,children:x(e.reduce((e,t)=>e+H(t).missingCheckout,0))}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center`,children:x(e.reduce((e,t)=>e+H(t).advances,0))}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center`,children:x(e.reduce((e,t)=>e+H(t).insurance,0))}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center`,children:x(e.reduce((e,t)=>e+Number(t.totalDeductions),0))}),(0,_.jsx)(`td`,{colSpan:2}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center font-bold text-primary`,children:x(e.reduce((e,t)=>e+Number(t.netBasic),0))})]})})]})}),(0,_.jsxs)(`div`,{className:`block lg:hidden divide-y divide-border/60`,children:[e.map(e=>{let t=!!k[`salary-${e.empCd}`],n=H(e);return(0,_.jsxs)(`div`,{className:`bg-card p-4 transition-colors hover:bg-muted/5`,children:[(0,_.jsxs)(`div`,{className:`flex items-center justify-between cursor-pointer select-none`,onClick:()=>A(`salary-${e.empCd}`),children:[(0,_.jsxs)(`div`,{className:`space-y-0.5`,children:[(0,_.jsx)(`div`,{className:`font-semibold text-foreground text-sm`,children:e.fullName??e.empCd}),(0,_.jsx)(`div`,{className:`text-xs text-muted-foreground`,children:e.salaryType??e.department??``})]}),(0,_.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,_.jsxs)(`div`,{className:`text-left`,children:[(0,_.jsx)(`span`,{className:`text-[10px] text-muted-foreground block uppercase`,children:`صافي الأساسي`}),(0,_.jsx)(`span`,{className:`font-bold text-primary tabular-nums text-sm`,children:x(e.netBasic)})]}),(0,_.jsx)(`div`,{className:`text-muted-foreground`,children:t?(0,_.jsx)(u,{size:16}):(0,_.jsx)(d,{size:16})})]})]}),t&&(0,_.jsxs)(`div`,{className:`mt-4 pt-4 border-t border-border/40 grid grid-cols-2 gap-y-3 gap-x-4 text-xs`,children:[(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`الراتب الأساسي:`}),(0,_.jsx)(`span`,{className:`font-medium tabular-nums`,children:x(e.basicSalary)})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`أيام عمل:`}),(0,_.jsx)(`span`,{className:`font-medium tabular-nums`,children:e.workingDays})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`تأخير:`}),(0,_.jsx)(`span`,{className:`font-medium text-warning tabular-nums`,children:x(n.late)})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`غياب:`}),(0,_.jsx)(`span`,{className:`font-medium text-destructive tabular-nums`,children:x(n.absent)})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`جزاء:`}),(0,_.jsx)(`span`,{className:`font-medium text-destructive tabular-nums`,children:x(n.penalty)})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`بصمة واحدة:`}),(0,_.jsx)(`span`,{className:`font-medium text-destructive tabular-nums`,children:x(n.missingCheckout)})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`سلف:`}),(0,_.jsx)(`span`,{className:`font-medium text-destructive tabular-nums`,children:x(n.advances)})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`تأمين:`}),(0,_.jsx)(`span`,{className:`font-medium text-destructive tabular-nums`,children:x(n.insurance)})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي الخصم:`}),(0,_.jsx)(`span`,{className:`font-bold text-destructive tabular-nums`,children:x(n.total)})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`أيام الإجازة:`}),(0,_.jsx)(`span`,{className:`font-medium tabular-nums`,children:e.leaveDays})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1 col-span-2`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`معامل راتب الإجازة:`}),(0,_.jsx)(`span`,{className:`font-medium tabular-nums`,children:S(e.leaveMultiplier)})]})]})]},e.empCd)}),e.length===0&&(0,_.jsx)(`div`,{className:`p-8 text-center text-muted-foreground text-sm`,children:`لا توجد رواتب تطابق البحث`}),e.length>0&&(0,_.jsxs)(`div`,{className:`bg-muted/20 p-4 space-y-2 text-xs font-semibold`,children:[(0,_.jsxs)(`div`,{className:`flex justify-between`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي الخصومات:`}),(0,_.jsx)(`span`,{className:`text-destructive tabular-nums`,children:x(e.reduce((e,t)=>e+Number(t.totalDeductions),0))})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-t border-border/40 pt-2`,children:[(0,_.jsx)(`span`,{className:`text-foreground font-bold`,children:`إجمالي صافي الأساسي:`}),(0,_.jsx)(`span`,{className:`text-primary font-bold tabular-nums text-sm`,children:x(e.reduce((e,t)=>e+Number(t.netBasic),0))})]})]})]})]})})(),w===`مركز`&&T===`shifts`&&(()=>{let e=K.filter(e=>!D||e.fullName.toLowerCase().includes(D.toLowerCase()));return(0,_.jsxs)(`section`,{className:`rounded-xl border border-border bg-background overflow-hidden`,children:[(0,_.jsxs)(`div`,{className:`flex items-center justify-between border-b border-border px-4 py-3 bg-muted/10`,children:[(0,_.jsxs)(`h3`,{className:`text-base font-semibold`,children:[`الشفتات — `,F]}),K.length>0&&(0,_.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,_.jsxs)(a,{variant:`outline`,size:`sm`,onClick:Ee,className:`gap-1.5 h-8 text-xs`,children:[(0,_.jsx)(c,{size:13}),` طباعة كشف`]}),(0,_.jsxs)(a,{variant:`outline`,size:`sm`,onClick:ke,className:`gap-1.5 h-8 text-xs`,children:[(0,_.jsx)(c,{size:13}),` يوم 1`]}),(0,_.jsxs)(a,{variant:`outline`,size:`sm`,onClick:Ae,className:`gap-1.5 h-8 text-xs`,children:[(0,_.jsx)(c,{size:13}),` يوم 10`]})]})]}),(0,_.jsx)(`div`,{className:`hidden lg:block overflow-x-auto`,dir:`rtl`,children:(0,_.jsxs)(`table`,{dir:`rtl`,className:`w-full text-sm`,children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{className:`border-b border-border bg-muted/30 text-xs`,children:[(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`الموظف`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`شفت كبير`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`قيمة`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`إجمالي`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`شفت صغير`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`قيمة`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`إجمالي`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`الخصومات`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`معامل`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground font-bold`,children:`صافي الأساسي`})]})}),(0,_.jsxs)(`tbody`,{children:[e.map(e=>(0,_.jsxs)(`tr`,{className:`border-b border-border/50 hover:bg-muted/20 transition-colors`,children:[(0,_.jsxs)(`td`,{className:`px-3 py-3 text-center`,children:[(0,_.jsx)(`div`,{className:`font-medium`,children:e.fullName}),(0,_.jsx)(`div`,{className:`text-xs text-muted-foreground`,children:e.type===`doctor`?`طبيب`:`فني`})]}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center`,children:e.shiftDayCount}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center`,children:x(e.shiftDayRate)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center font-medium text-success`,children:x(e.shiftDayTotal)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center`,children:e.shiftNightCount}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center`,children:x(e.shiftNightRate)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center font-medium text-success`,children:x(e.shiftNightTotal)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-destructive`,children:x(e.totalDeductions)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center tabular-nums`,children:S(e.leaveMultiplier)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center font-bold text-primary`,children:x(e.netBasic)})]},e.id)),e.length===0&&(0,_.jsx)(`tr`,{children:(0,_.jsx)(`td`,{colSpan:10,className:`px-4 py-10 text-center text-muted-foreground`,children:`لا توجد موظفي شفتات تطابق البحث`})})]}),e.length>0&&(0,_.jsx)(`tfoot`,{children:(0,_.jsxs)(`tr`,{className:`border-t border-border bg-muted/30 text-xs font-semibold`,children:[(0,_.jsx)(`td`,{className:`px-3 py-2`,children:`الإجمالي`}),(0,_.jsx)(`td`,{colSpan:2}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center`,children:x(e.reduce((e,t)=>e+t.shiftDayTotal,0))}),(0,_.jsx)(`td`,{colSpan:2}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center`,children:x(e.reduce((e,t)=>e+t.shiftNightTotal,0))}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center`,children:x(e.reduce((e,t)=>e+Number(t.totalDeductions),0))}),(0,_.jsx)(`td`,{colSpan:1}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center font-bold text-primary`,children:x(e.reduce((e,t)=>e+Number(t.netBasic),0))})]})})]})}),(0,_.jsxs)(`div`,{className:`block lg:hidden divide-y divide-border/60`,children:[e.map(e=>{let t=!!k[`shift-${e.id}`];return(0,_.jsxs)(`div`,{className:`bg-card p-4 transition-colors hover:bg-muted/5`,children:[(0,_.jsxs)(`div`,{className:`flex items-center justify-between cursor-pointer select-none`,onClick:()=>A(`shift-${e.id}`),children:[(0,_.jsxs)(`div`,{className:`space-y-0.5`,children:[(0,_.jsx)(`div`,{className:`font-semibold text-foreground text-sm`,children:e.fullName}),(0,_.jsx)(`div`,{className:`text-xs text-muted-foreground`,children:e.type===`doctor`?`طبيب شفتات`:`فني شفتات`})]}),(0,_.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,_.jsxs)(`div`,{className:`text-left`,children:[(0,_.jsx)(`span`,{className:`text-[10px] text-muted-foreground block uppercase`,children:`صافي الأساسي`}),(0,_.jsx)(`span`,{className:`font-bold text-primary tabular-nums text-sm`,children:x(e.netBasic)})]}),(0,_.jsx)(`div`,{className:`text-muted-foreground`,children:t?(0,_.jsx)(u,{size:16}):(0,_.jsx)(d,{size:16})})]})]}),t&&(0,_.jsxs)(`div`,{className:`mt-4 pt-4 border-t border-border/40 space-y-3 text-xs`,children:[(0,_.jsxs)(`div`,{className:`bg-muted/30 p-2.5 rounded-lg space-y-1.5`,children:[(0,_.jsx)(`div`,{className:`font-medium text-foreground`,children:`شفت كبير`}),(0,_.jsxs)(`div`,{className:`grid grid-cols-3 gap-2 text-[11px] text-muted-foreground`,children:[(0,_.jsxs)(`div`,{children:[`العدد:`,` `,(0,_.jsx)(`span`,{className:`text-foreground font-medium tabular-nums`,children:e.shiftDayCount})]}),(0,_.jsxs)(`div`,{children:[`القيمة:`,` `,(0,_.jsx)(`span`,{className:`text-foreground font-medium tabular-nums`,children:x(e.shiftDayRate)})]}),(0,_.jsxs)(`div`,{className:`text-left`,children:[`الإجمالي:`,` `,(0,_.jsx)(`span`,{className:`text-success font-semibold tabular-nums`,children:x(e.shiftDayTotal)})]})]})]}),(0,_.jsxs)(`div`,{className:`bg-muted/30 p-2.5 rounded-lg space-y-1.5`,children:[(0,_.jsx)(`div`,{className:`font-medium text-foreground`,children:`شفت صغير`}),(0,_.jsxs)(`div`,{className:`grid grid-cols-3 gap-2 text-[11px] text-muted-foreground`,children:[(0,_.jsxs)(`div`,{children:[`العدد:`,` `,(0,_.jsx)(`span`,{className:`text-foreground font-medium tabular-nums`,children:e.shiftNightCount})]}),(0,_.jsxs)(`div`,{children:[`القيمة:`,` `,(0,_.jsx)(`span`,{className:`text-foreground font-medium tabular-nums`,children:x(e.shiftNightRate)})]}),(0,_.jsxs)(`div`,{className:`text-left`,children:[`الإجمالي:`,` `,(0,_.jsx)(`span`,{className:`text-success font-semibold tabular-nums`,children:x(e.shiftNightTotal)})]})]})]}),(0,_.jsxs)(`div`,{className:`grid grid-cols-2 gap-y-2 gap-x-4 px-1 pt-1`,children:[(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`الخصومات:`}),(0,_.jsx)(`span`,{className:`font-medium text-destructive tabular-nums`,children:x(e.totalDeductions)})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`معامل الحضور:`}),(0,_.jsx)(`span`,{className:`font-medium tabular-nums`,children:S(e.leaveMultiplier)})]})]})]})]},e.id)}),e.length===0&&(0,_.jsx)(`div`,{className:`p-8 text-center text-muted-foreground text-sm`,children:`لا توجد شفتات تطابق البحث`}),e.length>0&&(0,_.jsxs)(`div`,{className:`bg-muted/20 p-4 space-y-2 text-xs font-semibold`,children:[(0,_.jsxs)(`div`,{className:`flex justify-between`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي نهاري:`}),(0,_.jsx)(`span`,{className:`text-foreground tabular-nums`,children:x(e.reduce((e,t)=>e+t.shiftDayTotal,0))})]}),(0,_.jsxs)(`div`,{className:`flex justify-between`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي مسائي:`}),(0,_.jsx)(`span`,{className:`text-foreground tabular-nums`,children:x(e.reduce((e,t)=>e+t.shiftNightTotal,0))})]}),(0,_.jsxs)(`div`,{className:`flex justify-between`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي الخصومات:`}),(0,_.jsx)(`span`,{className:`text-destructive tabular-nums`,children:x(e.reduce((e,t)=>e+Number(t.totalDeductions),0))})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-t border-border/40 pt-2`,children:[(0,_.jsx)(`span`,{className:`text-foreground font-bold`,children:`إجمالي صافي الشفتات:`}),(0,_.jsx)(`span`,{className:`text-primary font-bold tabular-nums text-sm`,children:x(e.reduce((e,t)=>e+Number(t.netBasic),0))})]})]})]})]})})(),w===`مركز`&&T===`shifts`&&K.length>0&&(()=>{let e=K.filter(e=>e.type===`doctor`).reduce((e,t)=>e+Number(t.netBasic),0),t=K.filter(e=>e.type===`doctor`).map(e=>G.find(t=>t.empCd===`shift_${e.id}`)).filter(Boolean),n=t.reduce((e,t)=>e+Number(t.examCommission??0),0),r=t.reduce((e,t)=>e+Number(t.pentacamCommission??0),0),i=K.filter(e=>e.type===`doctor`).map(t=>{let i=G.find(e=>e.empCd===`shift_${t.id}`),a=Number(t.netBasic),o=e>0?a/e:0,s=Number(i?.netBasic??0),c=Number(i?.attendanceCommissionRaw??i?.attendanceCommission??0),l=s>0?c/s:.25,u=Number(t.leaveMultiplier??1),d=a*l*u,f=n*o,p=r*o;return{...t,base:a,share:o,attend:d,examComm:f,pentComm:p,total:d+f+p}}),o=i.reduce((e,t)=>e+t.examComm,0),s=i.reduce((e,t)=>e+t.pentComm,0),l=i.filter(e=>!D||e.fullName.toLowerCase().includes(D.toLowerCase())),f=l.reduce((e,t)=>e+t.attend,0),p=l.reduce((e,t)=>e+t.examComm,0),m=l.reduce((e,t)=>e+t.pentComm,0),h=l.reduce((e,t)=>e+t.total,0);return(0,_.jsxs)(`section`,{className:`rounded-xl border border-border bg-background overflow-hidden`,children:[(0,_.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 bg-muted/10`,children:[(0,_.jsx)(`h3`,{className:`text-base font-semibold`,children:`عمولات الشفتات`}),(0,_.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4 text-xs text-muted-foreground`,children:[(0,_.jsxs)(`span`,{children:[`إجمالي نسبة الفحص:`,` `,(0,_.jsxs)(`strong`,{className:`text-foreground`,children:[x(o),` ج`]})]}),(0,_.jsxs)(`span`,{children:[`إجمالي نسبة البنتاكام:`,` `,(0,_.jsxs)(`strong`,{className:`text-foreground`,children:[x(s),` ج`]})]}),(0,_.jsxs)(a,{variant:`outline`,size:`sm`,onClick:Oe,className:`gap-1.5 h-8 text-xs`,children:[(0,_.jsx)(c,{size:13}),` طباعة كشف`]})]})]}),(0,_.jsx)(`div`,{className:`hidden lg:block overflow-x-auto`,dir:`rtl`,children:(0,_.jsxs)(`table`,{dir:`rtl`,className:`w-full text-sm`,children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{className:`border-b border-border bg-muted/30 text-xs`,children:[(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`الموظف`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`الأساسي (صافي الشفتات)`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`النسبة %`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`حضور (٢٥٪)`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`فحص`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground`,children:`بنتاكام`}),(0,_.jsx)(`th`,{className:`px-3 py-3 text-center font-medium text-muted-foreground font-bold`,children:`الإجمالي`})]})}),(0,_.jsxs)(`tbody`,{children:[l.map(e=>(0,_.jsxs)(`tr`,{className:`border-b border-border/50 hover:bg-muted/20 transition-colors`,children:[(0,_.jsxs)(`td`,{className:`px-3 py-3 text-center`,children:[(0,_.jsx)(`div`,{className:`font-medium`,children:e.fullName}),(0,_.jsx)(`div`,{className:`text-xs text-muted-foreground`,children:e.type===`doctor`?`طبيب`:`فني`})]}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center tabular-nums`,children:x(e.base)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center tabular-nums`,children:S(e.share)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center tabular-nums`,children:x(e.attend)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center tabular-nums`,children:x(e.examComm)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center tabular-nums`,children:x(e.pentComm)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center tabular-nums font-bold text-primary`,children:x(e.total)})]},e.id)),l.length===0&&(0,_.jsx)(`tr`,{children:(0,_.jsx)(`td`,{colSpan:7,className:`px-4 py-10 text-center text-muted-foreground`,children:`لا توجد عمولات تطابق البحث`})})]}),l.length>0&&(0,_.jsx)(`tfoot`,{children:(0,_.jsxs)(`tr`,{className:`border-t border-border bg-muted/30 text-xs font-semibold`,children:[(0,_.jsx)(`td`,{className:`px-3 py-2`,colSpan:3,children:`الإجمالي`}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center tabular-nums`,children:x(f)}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center tabular-nums`,children:x(p)}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center tabular-nums`,children:x(m)}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center tabular-nums font-bold text-primary`,children:x(h)})]})})]})}),(0,_.jsxs)(`div`,{className:`block lg:hidden divide-y divide-border/60`,children:[l.map(e=>{let t=!!k[`shiftcomm-${e.id}`];return(0,_.jsxs)(`div`,{className:`bg-card p-4 transition-colors hover:bg-muted/5`,children:[(0,_.jsxs)(`div`,{className:`flex items-center justify-between cursor-pointer select-none`,onClick:()=>A(`shiftcomm-${e.id}`),children:[(0,_.jsxs)(`div`,{className:`space-y-0.5`,children:[(0,_.jsx)(`div`,{className:`font-semibold text-foreground text-sm`,children:e.fullName}),(0,_.jsx)(`div`,{className:`text-xs text-muted-foreground`,children:e.type===`doctor`?`طبيب`:`فني`})]}),(0,_.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,_.jsxs)(`div`,{className:`text-left`,children:[(0,_.jsx)(`span`,{className:`text-[10px] text-muted-foreground block uppercase`,children:`إجمالي العمولات`}),(0,_.jsx)(`span`,{className:`font-bold text-primary tabular-nums text-sm`,children:x(e.total)})]}),(0,_.jsx)(`div`,{className:`text-muted-foreground`,children:t?(0,_.jsx)(u,{size:16}):(0,_.jsx)(d,{size:16})})]})]}),t&&(0,_.jsxs)(`div`,{className:`mt-4 pt-4 border-t border-border/40 grid grid-cols-2 gap-y-3 gap-x-4 text-xs`,children:[(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`الأساسي (صافي الشفتات):`}),(0,_.jsx)(`span`,{className:`font-medium tabular-nums`,children:x(e.base)})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`نسبة المساهمة:`}),(0,_.jsx)(`span`,{className:`font-medium tabular-nums`,children:S(e.share)})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`عمولة حضور (25%):`}),(0,_.jsx)(`span`,{className:`font-medium text-success tabular-nums`,children:x(e.attend)})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`عمولة فحص:`}),(0,_.jsx)(`span`,{className:`font-medium text-success tabular-nums`,children:x(e.examComm)})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1 col-span-2`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`عمولة بنتاكام:`}),(0,_.jsx)(`span`,{className:`font-medium text-success tabular-nums`,children:x(e.pentComm)})]})]})]},e.id)}),l.length===0&&(0,_.jsx)(`div`,{className:`p-8 text-center text-muted-foreground text-sm`,children:`لا توجد عمولات تطابق البحث`}),l.length>0&&(0,_.jsxs)(`div`,{className:`bg-muted/20 p-4 space-y-2 text-xs font-semibold`,children:[(0,_.jsxs)(`div`,{className:`flex justify-between`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي حضور (25%):`}),(0,_.jsx)(`span`,{className:`text-success tabular-nums`,children:x(f)})]}),(0,_.jsxs)(`div`,{className:`flex justify-between`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي فحص:`}),(0,_.jsx)(`span`,{className:`text-success tabular-nums`,children:x(p)})]}),(0,_.jsxs)(`div`,{className:`flex justify-between`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي بنتاكام:`}),(0,_.jsx)(`span`,{className:`text-success tabular-nums`,children:x(m)})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-t border-border/40 pt-2`,children:[(0,_.jsx)(`span`,{className:`text-foreground font-bold`,children:`المجموع الكلي:`}),(0,_.jsx)(`span`,{className:`text-primary font-bold tabular-nums text-sm`,children:x(h)})]})]})]})]})})(),(w===`عيادة`||T===`salaries`)&&(()=>{let e=W.filter(e=>!D||(e.fullName??e.empCd).toLowerCase().includes(D.toLowerCase())),t=K.filter(e=>e.type!==`doctor`&&(!D||e.fullName.toLowerCase().includes(D.toLowerCase())));return(0,_.jsxs)(`section`,{className:`rounded-xl border border-border bg-background overflow-hidden`,children:[(0,_.jsxs)(`div`,{className:`flex items-center justify-between border-b border-border px-4 py-3 bg-muted/10`,children:[(0,_.jsxs)(`h3`,{className:`text-base font-semibold`,children:[`العمولات — `,F]}),e.length>0&&(0,_.jsxs)(a,{variant:`outline`,size:`sm`,onClick:Me,className:`gap-1.5 h-8 text-xs`,children:[(0,_.jsx)(c,{size:13}),` طباعة`]})]}),(0,_.jsx)(`div`,{className:`hidden lg:block overflow-x-auto`,dir:`rtl`,children:(0,_.jsxs)(`table`,{dir:`rtl`,className:`w-full text-sm`,children:[(0,_.jsxs)(`thead`,{children:[(0,_.jsxs)(`tr`,{className:`border-b border-border bg-muted/30 text-xs`,children:[(0,_.jsx)(`th`,{rowSpan:2,className:`px-3 py-3 text-center font-medium text-muted-foreground align-middle`,children:`الموظف`}),(0,_.jsx)(`th`,{colSpan:2,className:`px-3 py-2 text-center font-medium text-muted-foreground`,children:`حضور`}),(0,_.jsx)(`th`,{colSpan:2,className:`px-3 py-2 text-center font-medium text-muted-foreground`,children:`فحص`}),w!==`عيادة`&&(0,_.jsx)(`th`,{colSpan:2,className:`px-3 py-2 text-center font-medium text-muted-foreground`,children:`بنتاكام`}),(0,_.jsx)(`th`,{rowSpan:2,className:`px-3 py-3 text-center font-medium text-muted-foreground align-middle`,children:`غلاء معيشه`}),(0,_.jsx)(`th`,{rowSpan:2,className:`px-3 py-3 text-center font-medium text-muted-foreground align-middle`,children:`بدل مواصلات`}),(0,_.jsx)(`th`,{rowSpan:2,className:`px-3 py-3 text-center font-medium text-muted-foreground align-middle`,children:`إضافي (د)`}),(0,_.jsx)(`th`,{rowSpan:2,className:`px-3 py-3 text-center font-medium text-muted-foreground align-middle`,children:`إضافي (ج)`}),(0,_.jsx)(`th`,{rowSpan:2,className:`px-3 py-3 text-center font-medium text-muted-foreground font-bold align-middle`,children:`إجمالي العمولات`})]}),(0,_.jsxs)(`tr`,{className:`border-b border-border bg-muted/30 text-xs`,children:[(0,_.jsx)(`th`,{className:`px-2 py-1.5 text-center font-medium text-muted-foreground`,children:`النسبة`}),(0,_.jsx)(`th`,{className:`px-2 py-1.5 text-center font-medium text-muted-foreground`,children:`المستحق`}),(0,_.jsx)(`th`,{className:`px-2 py-1.5 text-center font-medium text-muted-foreground`,children:`النسبة`}),(0,_.jsx)(`th`,{className:`px-2 py-1.5 text-center font-medium text-muted-foreground`,children:`المستحق`}),w!==`عيادة`&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`th`,{className:`px-2 py-1.5 text-center font-medium text-muted-foreground`,children:`النسبة`}),(0,_.jsx)(`th`,{className:`px-2 py-1.5 text-center font-medium text-muted-foreground`,children:`المستحق`})]})]})]}),(0,_.jsxs)(`tbody`,{children:[e.map(e=>{let t=V(e);return(0,_.jsxs)(`tr`,{className:`border-b border-border/50 hover:bg-muted/20 transition-colors`,children:[(0,_.jsxs)(`td`,{className:`px-3 py-3 text-center`,children:[(0,_.jsx)(`div`,{className:`font-medium`,children:e.fullName??e.empCd}),(0,_.jsx)(`div`,{className:`text-xs text-muted-foreground`,children:e.salaryType??e.department??``})]}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-muted-foreground`,children:x(e.attendanceCommissionRaw??e.attendanceCommission)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:x(e.attendanceCommission)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-muted-foreground`,children:x(e.examCommissionRaw??e.examCommission)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:x(e.examCommission)}),w!==`عيادة`&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-muted-foreground`,children:x(e.pentacamCommissionRaw??e.pentacamCommission)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:x(e.pentacamCommission)})]}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:x(t.cola)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:x(t.travel)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:e.overtimeMinutes??0}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:x(e.overtimePay??0)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center font-bold text-primary`,children:x(U(e))})]},e.empCd)}),e.length===0&&(0,_.jsx)(`tr`,{children:(0,_.jsx)(`td`,{colSpan:w===`عيادة`?9:11,className:`px-4 py-10 text-center text-muted-foreground`,children:`لا توجد عمولات تطابق البحث`})}),w===`مركز`&&t.map(e=>{let t=Number(e.attendanceCommission??0),n=Number(e.examCommission??0),r=Number(e.pentacamCommission??0),i=V(e),a=i.cola,o=i.travel,s=e.overtimeMinutes??0,c=Number(e.overtimePay??0),l=t+n+r+a+o+c;return(0,_.jsxs)(`tr`,{className:`border-b border-border/50 bg-secondary/5 hover:bg-secondary/10 transition-colors`,children:[(0,_.jsxs)(`td`,{className:`px-3 py-3 text-center`,children:[(0,_.jsx)(`div`,{className:`font-medium`,children:e.fullName}),(0,_.jsx)(`div`,{className:`text-xs text-secondary font-medium`,children:`فني شفتات`})]}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-muted-foreground`,children:x(e.attendanceCommissionRaw??t)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:x(t)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-muted-foreground`,children:x(e.examCommissionRaw??n)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:x(n)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-muted-foreground`,children:x(e.pentacamCommissionRaw??r)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:x(r)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:x(a)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:x(o)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:s}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center text-success`,children:x(c)}),(0,_.jsx)(`td`,{className:`px-3 py-3 text-center font-bold text-primary`,children:x(l)})]},`tech-${e.id}`)})]}),(e.length>0||w===`مركز`&&t.length>0)&&(0,_.jsx)(`tfoot`,{children:(0,_.jsxs)(`tr`,{className:`border-t border-border bg-muted/30 text-xs font-semibold`,children:[(0,_.jsx)(`td`,{className:`px-3 py-2 text-center`,children:`الإجمالي`}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center`,children:x(e.reduce((e,t)=>e+Number(t.attendanceCommissionRaw??t.attendanceCommission),0)+(w===`مركز`?t.reduce((e,t)=>e+Number(t.attendanceCommissionRaw??t.attendanceCommission??0),0):0))}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center`,children:x(e.reduce((e,t)=>e+Number(t.attendanceCommission),0)+(w===`مركز`?t.reduce((e,t)=>e+Number(t.attendanceCommission??0),0):0))}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center`,children:x(e.reduce((e,t)=>e+Number(t.examCommissionRaw??t.examCommission),0)+(w===`مركز`?t.reduce((e,t)=>e+Number(t.examCommissionRaw??t.examCommission??0),0):0))}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center`,children:x(e.reduce((e,t)=>e+Number(t.examCommission),0)+(w===`مركز`?t.reduce((e,t)=>e+Number(t.examCommission??0),0):0))}),w!==`عيادة`&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`td`,{className:`px-3 py-2 text-center`,children:x(e.reduce((e,t)=>e+Number(t.pentacamCommissionRaw??t.pentacamCommission),0)+t.reduce((e,t)=>e+Number(t.pentacamCommissionRaw??t.pentacamCommission??0),0))}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center`,children:x(e.reduce((e,t)=>e+Number(t.pentacamCommission),0)+t.reduce((e,t)=>e+Number(t.pentacamCommission??0),0))})]}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center`,children:x(e.reduce((e,t)=>e+V(t).cola,0)+(w===`مركز`?t.reduce((e,t)=>e+V(t).cola,0):0))}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center`,children:x(e.reduce((e,t)=>e+V(t).travel,0)+(w===`مركز`?t.reduce((e,t)=>e+V(t).travel,0):0))}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center`,children:e.reduce((e,t)=>e+Number(t.overtimeMinutes??0),0)}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center`,children:x(e.reduce((e,t)=>e+Number(t.overtimePay??0),0)+(w===`مركز`?t.reduce((e,t)=>e+Number(t.overtimePay??0),0):0))}),(0,_.jsx)(`td`,{className:`px-3 py-2 text-center font-bold text-primary`,children:x(e.reduce((e,t)=>e+U(t)+Number(t.overtimePay??0),0)+(w===`مركز`?t.reduce((e,t)=>{let n=Number(t.attendanceCommission??0),r=Number(t.examCommission??0),i=Number(t.pentacamCommission??0),a=V(t),o=a.cola,s=a.travel,c=Number(t.overtimePay??0);return e+(n+r+i+o+s+c)},0):0))})]})})]})}),(0,_.jsxs)(`div`,{className:`block lg:hidden divide-y divide-border/60`,children:[e.map(e=>{let t=!!k[`comm-${e.empCd}`],n=V(e),r=U(e);return(0,_.jsxs)(`div`,{className:`bg-card p-4 transition-colors hover:bg-muted/5`,children:[(0,_.jsxs)(`div`,{className:`flex items-center justify-between cursor-pointer select-none`,onClick:()=>A(`comm-${e.empCd}`),children:[(0,_.jsxs)(`div`,{className:`space-y-0.5`,children:[(0,_.jsx)(`div`,{className:`font-semibold text-foreground text-sm`,children:e.fullName??e.empCd}),(0,_.jsx)(`div`,{className:`text-xs text-muted-foreground`,children:e.salaryType??e.department??``})]}),(0,_.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,_.jsxs)(`div`,{className:`text-left`,children:[(0,_.jsx)(`span`,{className:`text-[10px] text-muted-foreground block uppercase`,children:`إجمالي العمولات`}),(0,_.jsx)(`span`,{className:`font-bold text-primary tabular-nums text-sm`,children:x(r)})]}),(0,_.jsx)(`div`,{className:`text-muted-foreground`,children:t?(0,_.jsx)(u,{size:16}):(0,_.jsx)(d,{size:16})})]})]}),t&&(0,_.jsxs)(`div`,{className:`mt-4 pt-4 border-t border-border/40 grid grid-cols-2 gap-y-3 gap-x-4 text-xs`,children:[(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`عمولة الحضور (نسبة/مستحق):`}),(0,_.jsxs)(`span`,{className:`font-medium tabular-nums`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:x(e.attendanceCommissionRaw??e.attendanceCommission)}),` / `,(0,_.jsx)(`span`,{className:`text-success`,children:x(e.attendanceCommission)})]})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`عمولة الفحص (نسبة/مستحق):`}),(0,_.jsxs)(`span`,{className:`font-medium tabular-nums`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:x(e.examCommissionRaw??e.examCommission)}),` / `,(0,_.jsx)(`span`,{className:`text-success`,children:x(e.examCommission)})]})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`عمولة بنتاكام (نسبة/مستحق):`}),(0,_.jsxs)(`span`,{className:`font-medium tabular-nums`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:x(e.pentacamCommissionRaw??e.pentacamCommission)}),` / `,(0,_.jsx)(`span`,{className:`text-success`,children:x(e.pentacamCommission)})]})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`غلاء معيشة:`}),(0,_.jsx)(`span`,{className:`font-medium text-success tabular-nums`,children:x(n.cola)})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`بدل مواصلات:`}),(0,_.jsx)(`span`,{className:`font-medium text-success tabular-nums`,children:x(n.travel)})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`إضافي (دقائق):`}),(0,_.jsx)(`span`,{className:`font-medium tabular-nums`,children:e.overtimeMinutes??0})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`إضافي (قيمة):`}),(0,_.jsx)(`span`,{className:`font-medium text-success tabular-nums`,children:x(e.overtimePay??0)})]})]})]},e.empCd)}),w===`مركز`&&t.map(e=>{let t=!!k[`comm-tech-${e.id}`],n=Number(e.attendanceCommission??0),r=Number(e.examCommission??0),i=Number(e.pentacamCommission??0),a=V(e),o=a.cola,s=a.travel,c=e.overtimeMinutes??0,l=Number(e.overtimePay??0),f=n+r+i+o+s+l;return(0,_.jsxs)(`div`,{className:`bg-secondary/5 p-4 transition-colors hover:bg-secondary/10 divide-y divide-border/20`,children:[(0,_.jsxs)(`div`,{className:`flex items-center justify-between cursor-pointer select-none pb-2`,onClick:()=>A(`comm-tech-${e.id}`),children:[(0,_.jsxs)(`div`,{className:`space-y-0.5`,children:[(0,_.jsx)(`div`,{className:`font-semibold text-foreground text-sm`,children:e.fullName}),(0,_.jsx)(`div`,{className:`text-xs text-secondary font-medium`,children:`فني شفتات`})]}),(0,_.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,_.jsxs)(`div`,{className:`text-left`,children:[(0,_.jsx)(`span`,{className:`text-[10px] text-muted-foreground block uppercase`,children:`إجمالي العمولات`}),(0,_.jsx)(`span`,{className:`font-bold text-primary tabular-nums text-sm`,children:x(f)})]}),(0,_.jsx)(`div`,{className:`text-muted-foreground`,children:t?(0,_.jsx)(u,{size:16}):(0,_.jsx)(d,{size:16})})]})]}),t&&(0,_.jsxs)(`div`,{className:`mt-4 pt-4 border-t border-border/40 grid grid-cols-2 gap-y-3 gap-x-4 text-xs`,children:[(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`عمولة حضور:`}),(0,_.jsx)(`span`,{className:`font-medium text-success tabular-nums`,children:x(n)})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`عمولة فحص:`}),(0,_.jsx)(`span`,{className:`font-medium text-success tabular-nums`,children:x(r)})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`عمولة بنتاكام:`}),(0,_.jsx)(`span`,{className:`font-medium text-success tabular-nums`,children:x(i)})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`غلاء معيشة:`}),(0,_.jsx)(`span`,{className:`font-medium text-success tabular-nums`,children:x(o)})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`بدل مواصلات:`}),(0,_.jsx)(`span`,{className:`font-medium text-success tabular-nums`,children:x(s)})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`إضافي (دقائق):`}),(0,_.jsx)(`span`,{className:`font-medium tabular-nums`,children:c})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-b border-border/10 pb-1`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`إضافي (قيمة):`}),(0,_.jsx)(`span`,{className:`font-medium text-success tabular-nums`,children:x(l)})]})]})]},`tech-${e.id}`)}),e.length===0&&t.length===0&&(0,_.jsx)(`div`,{className:`p-8 text-center text-muted-foreground text-sm`,children:`لا توجد عمولات تطابق البحث`}),(e.length>0||t.length>0)&&(0,_.jsxs)(`div`,{className:`bg-muted/20 p-4 space-y-2 text-xs font-semibold`,children:[(0,_.jsxs)(`div`,{className:`flex justify-between`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي الحضور:`}),(0,_.jsx)(`span`,{className:`text-success tabular-nums`,children:x(e.reduce((e,t)=>e+Number(t.attendanceCommission),0)+(w===`مركز`?t.reduce((e,t)=>e+Number(t.attendanceCommission??0),0):0))})]}),(0,_.jsxs)(`div`,{className:`flex justify-between`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي الفحص:`}),(0,_.jsx)(`span`,{className:`text-success tabular-nums`,children:x(e.reduce((e,t)=>e+Number(t.examCommission),0)+(w===`مركز`?t.reduce((e,t)=>e+Number(t.examCommission??0),0):0))})]}),w!==`عيادة`&&(0,_.jsxs)(`div`,{className:`flex justify-between`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي البنتاكام:`}),(0,_.jsx)(`span`,{className:`text-success tabular-nums`,children:x(e.reduce((e,t)=>e+Number(t.pentacamCommission),0)+(w===`مركز`?t.reduce((e,t)=>e+Number(t.pentacamCommission??0),0):0))})]}),(0,_.jsxs)(`div`,{className:`flex justify-between`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي غلاء معيشة:`}),(0,_.jsx)(`span`,{className:`text-success tabular-nums`,children:x(e.reduce((e,t)=>e+V(t).cola,0)+(w===`مركز`?t.reduce((e,t)=>e+V(t).cola,0):0))})]}),(0,_.jsxs)(`div`,{className:`flex justify-between`,children:[(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`إجمالي بدل مواصلات:`}),(0,_.jsx)(`span`,{className:`text-success tabular-nums`,children:x(e.reduce((e,t)=>e+V(t).travel,0)+(w===`مركز`?t.reduce((e,t)=>e+V(t).travel,0):0))})]}),(0,_.jsxs)(`div`,{className:`flex justify-between border-t border-border/40 pt-2`,children:[(0,_.jsx)(`span`,{className:`text-foreground font-bold`,children:`المجموع الكلي للعمولات:`}),(0,_.jsx)(`span`,{className:`text-primary font-bold tabular-nums text-sm`,children:x(e.reduce((e,t)=>e+U(t)+Number(t.overtimePay??0),0)+(w===`مركز`?t.reduce((e,t)=>{let n=Number(t.attendanceCommission??0),r=Number(t.examCommission??0),i=Number(t.pentacamCommission??0),a=V(t),o=a.cola,s=a.travel,c=Number(t.overtimePay??0);return e+(n+r+i+o+s+c)},0):0))})]})]})]})]})})(),w===`مركز`&&T===`supervision`&&(()=>{let e=z.map(e=>{let t=G.find(t=>t.empCd===`shift_${e.id}`);return{empCd:`shift_${e.id}`,fullName:e.name,department:`مناوبة`,supervisionBonus:t?.supervisionBonus??`0`}}),t=[...W,...e],n=t.reduce((e,t)=>e+Number(O[t.empCd]??t.supervisionBonus??0),0);return(0,_.jsxs)(`section`,{className:`rounded-xl border border-border bg-background overflow-hidden`,children:[(0,_.jsxs)(`div`,{className:`border-b border-border bg-muted/25 px-4 py-3 flex items-center justify-between gap-3`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`h2`,{className:`text-base font-semibold text-foreground`,children:`مكافأة الإشراف`}),(0,_.jsx)(`p`,{className:`text-xs text-muted-foreground mt-0.5`,children:`خارج إجمالي الراتب — لا تؤثر على الحسابات`})]}),(0,_.jsxs)(`div`,{className:`flex gap-2 shrink-0`,children:[(0,_.jsxs)(a,{size:`sm`,variant:`outline`,onClick:Pe,className:`gap-1.5`,children:[(0,_.jsx)(c,{size:13}),` إيصالات`]}),(0,_.jsxs)(a,{size:`sm`,variant:`outline`,onClick:Ne,className:`gap-1.5`,children:[(0,_.jsx)(c,{size:13}),` كشف`]})]})]}),(0,_.jsx)(`div`,{className:`overflow-x-auto`,dir:`rtl`,children:(0,_.jsxs)(`table`,{dir:`rtl`,className:`w-full text-sm`,children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{className:`border-b border-border bg-muted/30 text-xs`,children:[(0,_.jsx)(`th`,{className:`px-4 py-3 text-right font-medium text-muted-foreground`,children:`الموظف`}),(0,_.jsx)(`th`,{className:`px-4 py-3 text-center font-medium text-muted-foreground`,children:`مكافأة الإشراف`}),(0,_.jsx)(`th`,{className:`px-4 py-3 text-center font-medium text-muted-foreground`,children:`حفظ`})]})}),(0,_.jsx)(`tbody`,{children:t.map(e=>{let t=e.empCd,n=O[t]??String(fe[e.empCd]??`0`);return(0,_.jsxs)(`tr`,{className:`border-b border-border/50 hover:bg-muted/20`,children:[(0,_.jsxs)(`td`,{className:`px-4 py-3`,children:[(0,_.jsx)(`div`,{className:`font-medium`,children:e.fullName??e.empCd}),(0,_.jsx)(`div`,{className:`text-xs text-muted-foreground`,children:e.salaryType??e.department??``})]}),(0,_.jsx)(`td`,{className:`px-4 py-3 text-center`,children:(0,_.jsx)(`input`,{type:`number`,min:`0`,step:`0.01`,value:n,onChange:e=>se(n=>({...n,[t]:e.target.value})),className:`w-28 rounded-md border border-border bg-background px-2 py-1 text-sm text-center outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 tabular-nums`})}),(0,_.jsx)(`td`,{className:`px-4 py-3 text-center`,children:(0,_.jsx)(`button`,{onClick:()=>{let t=parseFloat(n)||0;pe.mutate({empCd:e.empCd,year:j,month:M,section:w,amount:t})},disabled:pe.isPending,className:`rounded-md border border-border px-3 py-1 text-xs font-medium hover:bg-muted transition-colors disabled:opacity-50`,children:`حفظ`})})]},t)})}),(0,_.jsx)(`tfoot`,{children:(0,_.jsxs)(`tr`,{className:`border-t border-border bg-muted/30 text-xs font-semibold`,children:[(0,_.jsx)(`td`,{className:`px-4 py-2 text-right`,children:`الإجمالي (معلوماتي فقط)`}),(0,_.jsx)(`td`,{className:`px-4 py-2 text-center tabular-nums`,children:x(n)}),(0,_.jsx)(`td`,{})]})})]})})]})})()]})}export{w as default};