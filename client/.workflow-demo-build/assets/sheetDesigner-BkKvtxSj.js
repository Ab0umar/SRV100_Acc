var e=`selrs_sheet_designer_v1`,t={rtLabel:`RT`,ltLabel:`LT`,operationTypeLabel:`نوع العملية`,operationDateLabel:`تاريخ العملية`,nextFollowupLabel:`المتابعة القادمة`,followupDateLabel:`تاريخ المتابعة`,vaLabel:`V. A`,refractionLabel:`Refraction`,flapLabel:`Flap`,edgesLabel:`Edges`,bedLabel:`Bed`,iopLabel:`I.O.P`,treatmentLabel:`Treatment`,receptionLabel:`استقبال:`,nurseLabel:`تمريض:`,doctorLabel:`طبيب:`,followupNames:[`المتابعة الأولى`,`المتابعة الثانية`,`المتابعة الثالثة`,`المتابعة الرابعة`],offsetXmm:0,offsetYmm:0,scale:.72,tableGapMm:11},n={css:{consultant:`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Noto+Kufi+Arabic:wght@400;600;700&display=swap');
        body {
          font-family: 'Inter', 'Noto Kufi Arabic', sans-serif;
          background-color: #f3f4f6;
        }
        .clinical-table th, .clinical-table td {
          border: 1px solid #d1d5db;
          padding: 8px;
          text-align: center;
        }
        .ltr-content {
          direction: ltr;
        }
        .dotted-textarea {
          background-image: linear-gradient(to bottom, transparent 96%, #cbd5e1 96%) !important;
          background-size: 100% 28px !important;
          line-height: 28px !important;
          border: none !important;
          resize: none !important;
        }`,specialist:`body { 
            font-family: 'Inter', 'Noto Sans Arabic', sans-serif; 
        }
        .section-header {
            background-color: #f8f9fb;
            border-right: 4px solid #003d9b;
            padding: 6px 16px;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #003d9b;
            margin-bottom: 12px;
        }
        .data-label {
            font-size: 11px;
            color: #526069;
            font-weight: 600;
        }
        .data-value {
            font-size: 14px;
            font-weight: 700;
            color: #191c1e;
        }
        input[type="text"] {
            border: none;
            border-bottom: 1px dotted #c3c6d6;
            padding: 4px 0;
            background: transparent;
            font-size: 14px;
        }
        input:focus {
            outline: none;
            border-bottom: 1.5px solid #003d9b;
            box-shadow: none;
        }
        @media print {
            .no-print { display: none; }
            .print-area { padding: 0 !important; margin: 0 !important; box-shadow: none !important; border: none !important; width: 100% !important; max-width: 100% !important; }
            body { background: white; }
        }
        .ltr-table { direction: ltr; }`,lasik:`@media print {
            body { background: white; margin: 0; padding: 0; }
            .no-print { display: none !important; }
            .print-container { width: 100%; margin: 0; border: none; box-shadow: none; padding: 10mm; }
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            vertical-align: middle;
        }
        .clinical-table th, .clinical-table td {
            border: 1px solid #c3c6d6;
            padding: 8px 12px;
            font-size: 14px;
        }
        .ltr-data {
            direction: ltr;
            text-align: left;
        }
        input[type="text"] {
            border: none;
            border-bottom: 1px dotted #737685;
            padding: 2px 4px;
            background: transparent;
            font-family: inherit;
        }
        input:focus {
            outline: none;
            border-bottom-color: #003d9b;
        }
        .od-bg { background-color: rgba(0, 61, 155, 0.03); }
        .os-bg { background-color: rgba(82, 96, 105, 0.03); }`,external:`@media print {
            body { background: white; }
            .no-print { display: none !important; }
            .print-container { width: 100%; margin: 0; padding: 0; box-shadow: none !important; }
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f8f9fb; /* surface-bright */
        }
        .full-width-container {
            width: 100%;
            padding: 24px;
            background: white;
            min-height: 100vh;
        }
        .od-row { background-color: rgba(0, 61, 155, 0.03); }
        .diagnostic-table th { font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: #737685; padding: 12px 8px; }
        .diagnostic-table td { border-color: #e1e2e4; height: 48px; }`,pentacam:``},layout:{consultant:{offsetXmm:0,offsetYmm:0,scale:1},specialist:{offsetXmm:0,offsetYmm:0,scale:1},lasik:{offsetXmm:0,offsetYmm:0,scale:1},external:{offsetXmm:0,offsetYmm:0,scale:1},pentacam:{offsetXmm:0,offsetYmm:0,scale:1}},templates:{consultant:{sheetTitle:`Consultant Sheet`,patientInfoTitle:`Patient Information`,doctorLabel:`الطبيب`,examinationDateLabel:`Examination Date`,notesLabel:`Notes`,signatureLabel:`Signature`},specialist:{sheetTitle:`Specialist Sheet`,patientInfoTitle:`Patient Information`,doctorLabel:`Doctor`,examinationDateLabel:`Examination Date`,notesLabel:`Notes`,signatureLabel:`Signature`},lasik:{sheetTitle:`LASIK Sheet`,patientInfoTitle:`Patient Information`,doctorLabel:`Doctor`,examinationDateLabel:`Examination Date`,notesLabel:`Notes`,signatureLabel:`Signature`},external:{sheetTitle:`External Operation Sheet`,patientInfoTitle:`Patient Information`,doctorLabel:`Doctor`,examinationDateLabel:`Examination Date`,notesLabel:`Notes`,signatureLabel:`Signature`},pentacam:{sheetTitle:`Pentacam Sheet`,patientInfoTitle:`Patient Information`,doctorLabel:`Doctor`,examinationDateLabel:`Examination Date`,notesLabel:`Notes`,signatureLabel:`Signature`}},followupConsultant:{...t},followupLasik:{...t},refractionPrint:{nameLabel:`Name`,vaLabel:`V. A`,colourLabel:`Colour`,dateLabel:`Date`,rightTitle:`RIGHT`,leftTitle:`LEFT`,distLabel:`DIST`,nearLabel:`NEAR`,sLabel:`S`,cLabel:`C`,aLabel:`A`,pdLabel:`PD`,metaFontSizePx:14,titleFontSizePx:18,tableFontSizePx:18,rowLabelFontSizePx:16,rowHeightPx:74,cardWidthMm:132,topOffsetMm:28}};function r(e,t){let n=Number(e);return Number.isFinite(n)?n:t}function i(e){try{let t=e??{},i=t.followup??{},a=t.followupConsultant??i,o=t.followupLasik??t.followupConsultant??i,s=t.refractionPrint??{},c=Array.isArray(a.followupNames)?a.followupNames.slice(0,4):[],l=Array.isArray(o.followupNames)?o.followupNames.slice(0,4):[],u=t.templates?.consultant?.doctorLabel,d=u===`Doctor`||!u?n.templates.consultant.doctorLabel:u;return{css:{consultant:t.css?.consultant??n.css.consultant,specialist:t.css?.specialist??n.css.specialist,lasik:t.css?.lasik??n.css.lasik,external:t.css?.external??n.css.external,pentacam:t.css?.pentacam??n.css.pentacam},layout:{consultant:{offsetXmm:r(t.layout?.consultant?.offsetXmm,n.layout.consultant.offsetXmm),offsetYmm:r(t.layout?.consultant?.offsetYmm,n.layout.consultant.offsetYmm),scale:r(t.layout?.consultant?.scale,n.layout.consultant.scale)},specialist:{offsetXmm:r(t.layout?.specialist?.offsetXmm,n.layout.specialist.offsetXmm),offsetYmm:r(t.layout?.specialist?.offsetYmm,n.layout.specialist.offsetYmm),scale:r(t.layout?.specialist?.scale,n.layout.specialist.scale)},lasik:{offsetXmm:r(t.layout?.lasik?.offsetXmm,n.layout.lasik.offsetXmm),offsetYmm:r(t.layout?.lasik?.offsetYmm,n.layout.lasik.offsetYmm),scale:r(t.layout?.lasik?.scale,n.layout.lasik.scale)},external:{offsetXmm:r(t.layout?.external?.offsetXmm,n.layout.external.offsetXmm),offsetYmm:r(t.layout?.external?.offsetYmm,n.layout.external.offsetYmm),scale:r(t.layout?.external?.scale,n.layout.external.scale)},pentacam:{offsetXmm:r(t.layout?.pentacam?.offsetXmm,n.layout.pentacam.offsetXmm),offsetYmm:r(t.layout?.pentacam?.offsetYmm,n.layout.pentacam.offsetYmm),scale:r(t.layout?.pentacam?.scale,n.layout.pentacam.scale)}},templates:{consultant:{sheetTitle:t.templates?.consultant?.sheetTitle??n.templates.consultant.sheetTitle,patientInfoTitle:t.templates?.consultant?.patientInfoTitle??n.templates.consultant.patientInfoTitle,doctorLabel:d,examinationDateLabel:t.templates?.consultant?.examinationDateLabel??n.templates.consultant.examinationDateLabel,notesLabel:t.templates?.consultant?.notesLabel??n.templates.consultant.notesLabel,signatureLabel:t.templates?.consultant?.signatureLabel??n.templates.consultant.signatureLabel},specialist:{sheetTitle:t.templates?.specialist?.sheetTitle??n.templates.specialist.sheetTitle,patientInfoTitle:t.templates?.specialist?.patientInfoTitle??n.templates.specialist.patientInfoTitle,doctorLabel:t.templates?.specialist?.doctorLabel??n.templates.specialist.doctorLabel,examinationDateLabel:t.templates?.specialist?.examinationDateLabel??n.templates.specialist.examinationDateLabel,notesLabel:t.templates?.specialist?.notesLabel??n.templates.specialist.notesLabel,signatureLabel:t.templates?.specialist?.signatureLabel??n.templates.specialist.signatureLabel},lasik:{sheetTitle:t.templates?.lasik?.sheetTitle??n.templates.lasik.sheetTitle,patientInfoTitle:t.templates?.lasik?.patientInfoTitle??n.templates.lasik.patientInfoTitle,doctorLabel:t.templates?.lasik?.doctorLabel??n.templates.lasik.doctorLabel,examinationDateLabel:t.templates?.lasik?.examinationDateLabel??n.templates.lasik.examinationDateLabel,notesLabel:t.templates?.lasik?.notesLabel??n.templates.lasik.notesLabel,signatureLabel:t.templates?.lasik?.signatureLabel??n.templates.lasik.signatureLabel},external:{sheetTitle:t.templates?.external?.sheetTitle??n.templates.external.sheetTitle,patientInfoTitle:t.templates?.external?.patientInfoTitle??n.templates.external.patientInfoTitle,doctorLabel:t.templates?.external?.doctorLabel??n.templates.external.doctorLabel,examinationDateLabel:t.templates?.external?.examinationDateLabel??n.templates.external.examinationDateLabel,notesLabel:t.templates?.external?.notesLabel??n.templates.external.notesLabel,signatureLabel:t.templates?.external?.signatureLabel??n.templates.external.signatureLabel},pentacam:{sheetTitle:t.templates?.pentacam?.sheetTitle??n.templates.pentacam.sheetTitle,patientInfoTitle:t.templates?.pentacam?.patientInfoTitle??n.templates.pentacam.patientInfoTitle,doctorLabel:t.templates?.pentacam?.doctorLabel??n.templates.pentacam.doctorLabel,examinationDateLabel:t.templates?.pentacam?.examinationDateLabel??n.templates.pentacam.examinationDateLabel,notesLabel:t.templates?.pentacam?.notesLabel??n.templates.pentacam.notesLabel,signatureLabel:t.templates?.pentacam?.signatureLabel??n.templates.pentacam.signatureLabel}},followupConsultant:{rtLabel:a.rtLabel??n.followupConsultant.rtLabel,ltLabel:a.ltLabel??n.followupConsultant.ltLabel,operationTypeLabel:a.operationTypeLabel??n.followupConsultant.operationTypeLabel,operationDateLabel:a.operationDateLabel??n.followupConsultant.operationDateLabel,nextFollowupLabel:a.nextFollowupLabel??n.followupConsultant.nextFollowupLabel,followupDateLabel:a.followupDateLabel??n.followupConsultant.followupDateLabel,vaLabel:a.vaLabel??n.followupConsultant.vaLabel,refractionLabel:a.refractionLabel??n.followupConsultant.refractionLabel,flapLabel:a.flapLabel??n.followupConsultant.flapLabel,edgesLabel:a.edgesLabel??n.followupConsultant.edgesLabel,bedLabel:a.bedLabel??n.followupConsultant.bedLabel,iopLabel:a.iopLabel??n.followupConsultant.iopLabel,treatmentLabel:a.treatmentLabel??n.followupConsultant.treatmentLabel,receptionLabel:a.receptionLabel??n.followupConsultant.receptionLabel,nurseLabel:a.nurseLabel??n.followupConsultant.nurseLabel,doctorLabel:a.doctorLabel??n.followupConsultant.doctorLabel,followupNames:[c[0]??n.followupConsultant.followupNames[0],c[1]??n.followupConsultant.followupNames[1],c[2]??n.followupConsultant.followupNames[2],c[3]??n.followupConsultant.followupNames[3]],offsetXmm:r(a.offsetXmm,n.followupConsultant.offsetXmm),offsetYmm:r(a.offsetYmm,n.followupConsultant.offsetYmm),scale:r(a.scale,n.followupConsultant.scale),tableGapMm:r(a.tableGapMm,n.followupConsultant.tableGapMm)},followupLasik:{rtLabel:o.rtLabel??n.followupLasik.rtLabel,ltLabel:o.ltLabel??n.followupLasik.ltLabel,operationTypeLabel:o.operationTypeLabel??n.followupLasik.operationTypeLabel,operationDateLabel:o.operationDateLabel??n.followupLasik.operationDateLabel,nextFollowupLabel:o.nextFollowupLabel??n.followupLasik.nextFollowupLabel,followupDateLabel:o.followupDateLabel??n.followupLasik.followupDateLabel,vaLabel:o.vaLabel??n.followupLasik.vaLabel,refractionLabel:o.refractionLabel??n.followupLasik.refractionLabel,flapLabel:o.flapLabel??n.followupLasik.flapLabel,edgesLabel:o.edgesLabel??n.followupLasik.edgesLabel,bedLabel:o.bedLabel??n.followupLasik.bedLabel,iopLabel:o.iopLabel??n.followupLasik.iopLabel,treatmentLabel:o.treatmentLabel??n.followupLasik.treatmentLabel,receptionLabel:o.receptionLabel??n.followupLasik.receptionLabel,nurseLabel:o.nurseLabel??n.followupLasik.nurseLabel,doctorLabel:o.doctorLabel??n.followupLasik.doctorLabel,followupNames:[l[0]??n.followupLasik.followupNames[0],l[1]??n.followupLasik.followupNames[1],l[2]??n.followupLasik.followupNames[2],l[3]??n.followupLasik.followupNames[3]],offsetXmm:r(o.offsetXmm,n.followupLasik.offsetXmm),offsetYmm:r(o.offsetYmm,n.followupLasik.offsetYmm),scale:r(o.scale,n.followupLasik.scale),tableGapMm:r(o.tableGapMm,n.followupLasik.tableGapMm)},refractionPrint:{nameLabel:s.nameLabel??n.refractionPrint.nameLabel,vaLabel:s.vaLabel??n.refractionPrint.vaLabel,colourLabel:s.colourLabel??n.refractionPrint.colourLabel,dateLabel:s.dateLabel??n.refractionPrint.dateLabel,rightTitle:s.rightTitle??n.refractionPrint.rightTitle,leftTitle:s.leftTitle??n.refractionPrint.leftTitle,distLabel:s.distLabel??n.refractionPrint.distLabel,nearLabel:s.nearLabel??n.refractionPrint.nearLabel,sLabel:s.sLabel??n.refractionPrint.sLabel,cLabel:s.cLabel??n.refractionPrint.cLabel,aLabel:s.aLabel??n.refractionPrint.aLabel,pdLabel:s.pdLabel??n.refractionPrint.pdLabel,metaFontSizePx:r(s.metaFontSizePx,n.refractionPrint.metaFontSizePx),titleFontSizePx:r(s.titleFontSizePx,n.refractionPrint.titleFontSizePx),tableFontSizePx:r(s.tableFontSizePx,n.refractionPrint.tableFontSizePx),rowLabelFontSizePx:r(s.rowLabelFontSizePx,n.refractionPrint.rowLabelFontSizePx),rowHeightPx:r(s.rowHeightPx,n.refractionPrint.rowHeightPx),cardWidthMm:r(s.cardWidthMm,n.refractionPrint.cardWidthMm),topOffsetMm:r(s.topOffsetMm,n.refractionPrint.topOffsetMm)}}}catch{return n}}function a(){if(typeof window>`u`)return n;let t=localStorage.getItem(e);if(!t)return n;try{return i(JSON.parse(t))}catch{return n}}function o(t){typeof window>`u`||localStorage.setItem(e,JSON.stringify(t))}export{o as i,i as n,a as r,n as t};