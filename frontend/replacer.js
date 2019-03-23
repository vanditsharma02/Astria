function replacer(str) {
    var pairs = {
          "ACC":"<div class='tooltip'>ACC<span class='tooltiptext'>Accident and Compensation Cases</span></div>",
          "ACC(SC)":"<div class='tooltip'>ACC(SC)<span class='tooltiptext'>Accident and Compensation Cases (SC)</span></div>",
          "ACJ":"<div class='tooltip'>ACJ<span class='tooltiptext'>Accidents Claims Journal</span></div>",
          "AIHC":"<div class='tooltip'>AIHC<span class='tooltiptext'>All India High Court Cases</span></div>",
          "FAJ":"<div class='tooltip'>FAJ<span class='tooltiptext'>All India Prevention of Food Adulteration Journal</span></div>",
          "AIR":"<div class='tooltip'>AIR<span class='tooltiptext'>All India Reporter</span></div>",
          "AIR(Mys)":"<div class='tooltip'>AIR(Mys)<span class='tooltiptext'>All India Reporter (Mys)</span></div>",
          "ALLMR":"<div class='tooltip'>ALLMR<span class='tooltiptext'>ALL MAHARASHTRA LAW REPORTER</span></div>",
          "ALLMR (SC)":"<div class='tooltip'>ALLMR (SC)<span class='tooltiptext'>ALL MAHARASHTRA LAW REPORTER SC</span></div>",
          "ALLMR(Cri)":"<div class='tooltip'>ALLMR(Cri)<span class='tooltiptext'>ALL MAHARSHTRA LAW REPORTER (Cri)</span></div>",
          "ARC":"<div class='tooltip'>ARC<span class='tooltiptext'>Allahabad Rent Cases</span></div>",
          "AWC":"<div class='tooltip'>AWC<span class='tooltiptext'>Allahabad Weekly Cases</span></div>",
          "AWCSC":"<div class='tooltip'>AWCSC<span class='tooltiptext'>Allahabad Weekly Cases (Supp - SC)</span></div>",
          "AWCUHC":"<div class='tooltip'>AWCUHC<span class='tooltiptext'>Allahabad Weekly Cases UHC</span></div>",
          "ALT":"<div class='tooltip'>ALT<span class='tooltiptext'>Andhra Law Times</span></div>",
          "ALT(Cri)":"<div class='tooltip'>ALT(Cri)<span class='tooltiptext'>Andhra Law Times (Criminal)</span></div>",
          "ALT(SC)":"<div class='tooltip'>ALT(SC)<span class='tooltiptext'>Andhra Law Times(SC)</span></div>",
          "ALD(Cri)":"<div class='tooltip'>ALD(Cri)<span class='tooltiptext'>Andhra Legal Decision (Criminal)</span></div>",
          "ALD":"<div class='tooltip'>ALD<span class='tooltiptext'>Andhra Legal Decisions</span></div>",
          "ALD-SC":"<div class='tooltip'>ALD-SC<span class='tooltiptext'>Andhra Legal Decisions (SC)</span></div>",
          "APLJ":"<div class='tooltip'>APLJ<span class='tooltiptext'>Andhra Pradesh Law Journal</span></div>",
          "AnWR":"<div class='tooltip'>AnWR<span class='tooltiptext'>Andhra Weekly Reporter</span></div>",
          "AD":"<div class='tooltip'>AD<span class='tooltiptext'>Apex Decision</span></div>",
          "ARBLR":"<div class='tooltip'>ARBLR<span class='tooltiptext'>Arbitration Law Reporter</span></div>",
          "BC":"<div class='tooltip'>BC<span class='tooltiptext'>Banking Cases</span></div>",
          "BC-SC":"<div class='tooltip'>BC-SC<span class='tooltiptext'>Banking Cases with court</span></div>",
          "BLJR":"<div class='tooltip'>BLJR<span class='tooltiptext'>Bihar Law Journal Reports</span></div>",
          "BomCR":"<div class='tooltip'>BomCR<span class='tooltiptext'>Bombay Cases Reporter</span></div>",
          "BomCR(Cri)":"<div class='tooltip'>BomCR(Cri)<span class='tooltiptext'>Bombay Cases Reporter (Criminal)</span></div>",
          "BomCRSupp":"<div class='tooltip'>BomCRSupp<span class='tooltiptext'>Bombay Cases Reporter(Supp)</span></div>",
          "BOMLR":"<div class='tooltip'>BOMLR<span class='tooltiptext'>Bombay Law Reporter</span></div>",
          "BusLR":"<div class='tooltip'>BusLR<span class='tooltiptext'>Business Law Reports</span></div>",
          "CHN":"<div class='tooltip'>CHN<span class='tooltiptext'>Calcutta High Court Notes</span></div>",
          "CHN(SC)":"<div class='tooltip'>CHN(SC)<span class='tooltiptext'>Calcutta High Court Notes (SC)</span></div>",
          "CALLT":"<div class='tooltip'>CALLT<span class='tooltiptext'>Calcutta Law Times</span></div>",
          "CWN":"<div class='tooltip'>CWN<span class='tooltiptext'>Calcutta Weekly Notes</span></div>",
          "CivilCC":"<div class='tooltip'>CivilCC<span class='tooltiptext'>Civil Court Cases</span></div>",
          "CivilCCSup":"<div class='tooltip'>CivilCCSup<span class='tooltiptext'>Civil Court Cases (Supp)</span></div>",
          "CompCas":"<div class='tooltip'>CompCas<span class='tooltiptext'>Company Cases</span></div>",
          "CompLJ":"<div class='tooltip'>CompLJ<span class='tooltiptext'>Company Law Journal</span></div>",
          "CompAT":"<div class='tooltip'>CompAT<span class='tooltiptext'>Competition Law Reports</span></div>",
          "CPJ":"<div class='tooltip'>CPJ<span class='tooltiptext'>Consumer Protection Judgments</span></div>",
          "CTLJ":"<div class='tooltip'>CTLJ<span class='tooltiptext'>Contracts and Tenders Law Journal</span></div>",
          "CLA":"<div class='tooltip'>CLA<span class='tooltiptext'>Corporate Law Adviser</span></div>",
          "CLA-BL-Sup":"<div class='tooltip'>CLA-BL-Sup<span class='tooltiptext'>Corporate Law Advisor – Business Law Supplement</span></div>",
          "Crime":"<div class='tooltip'>Crime<span class='tooltiptext'>Crimes</span></div>",
          "Crimes":"<div class='tooltip'>Crimes<span class='tooltiptext'>Crimes (SC)</span></div>",
          "CriLJ":"<div class='tooltip'>CriLJ<span class='tooltiptext'>Criminal Law Journal</span></div>",
          "CCR":"<div class='tooltip'>CCR<span class='tooltiptext'>Current Criminal Reports</span></div>",
          "CCR(SC)":"<div class='tooltip'>CCR(SC)<span class='tooltiptext'>Current Criminal Reports (SC)</span></div>",
          "CTC":"<div class='tooltip'>CTC<span class='tooltiptext'>Current Tamil Nadu Cases</span></div>",
          "CTR":"<div class='tooltip'>CTR<span class='tooltiptext'>Current Tax Reporter</span></div>",
          "CLT":"<div class='tooltip'>CLT<span class='tooltiptext'>Cuttack Law Times</span></div>",
          "CLT(SC)":"<div class='tooltip'>CLT(SC)<span class='tooltiptext'>Cuttack Law Times (SC)</span></div>",
          "CWN":"<div class='tooltip'>CWN<span class='tooltiptext'>Calcutta Weekly Notes</span></div>",
          "DLT":"<div class='tooltip'>DLT<span class='tooltiptext'>Delhi Law Times</span></div>",
          "DLT(SC)":"<div class='tooltip'>DLT(SC)<span class='tooltiptext'>Delhi Law Times (SC)</span></div>",
          "DRJ":"<div class='tooltip'>DRJ<span class='tooltiptext'>Delhi Reported Journal</span></div>",
          "DRJSupp":"<div class='tooltip'>DRJSupp<span class='tooltiptext'>Delhi Reported Journal (Suppl)</span></div>",
          "DRJSupp NV":"<div class='tooltip'>DRJSupp NV<span class='tooltiptext'>Delhi Reported Journal (Suppl)without Volume</span></div>",
          "DMC":"<div class='tooltip'>DMC<span class='tooltiptext'>Divorce and Matrimonial Cases</span></div>",
          "DMC(SC)":"<div class='tooltip'>DMC(SC)<span class='tooltiptext'>Divorce and Matrimonial Cases (SC)</span></div>",
          "ESC":"<div class='tooltip'>ESC<span class='tooltiptext'>Education and Service Cases</span></div>",
          "ELR":"<div class='tooltip'>ELR<span class='tooltiptext'>Energy Law Reports</span></div>",
          "ECC":"<div class='tooltip'>ECC<span class='tooltiptext'>Excise & Customs Cases</span></div>",
          "ECR":"<div class='tooltip'>ECR<span class='tooltiptext'>Excise and Custom Reprots (Without Volume)</span></div>",
          "ELT":"<div class='tooltip'>ELT<span class='tooltiptext'>Excise Law Times</span></div>",
          "FLR":"<div class='tooltip'>FLR<span class='tooltiptext'>Factory Law Reporter</span></div>",
          "GLD":"<div class='tooltip'>GLD<span class='tooltiptext'>Gauhati Law Decisions</span></div>",
          "GLDSupp":"<div class='tooltip'>GLDSupp<span class='tooltiptext'>Gauhati Law Decisions Supp</span></div>",
          "GauLR":"<div class='tooltip'>GauLR<span class='tooltiptext'>Gauhati Law Reports</span></div>",
          "GLT":"<div class='tooltip'>GLT<span class='tooltiptext'>Gauhati Law Times</span></div>",
          "GLT(SC)":"<div class='tooltip'>GLT(SC)<span class='tooltiptext'>Gauhati Law Times (SC)</span></div>",
          "GLH":"<div class='tooltip'>GLH<span class='tooltiptext'>Gujarat Law Herald</span></div>",
          "GLR":"<div class='tooltip'>GLR<span class='tooltiptext'>Gujarat Law Reporter</span></div>",
          "GLR (FB)":"<div class='tooltip'>GLR (FB)<span class='tooltiptext'>Gujarat Law Reporter (FB)</span></div>",
          "GLR (SC)":"<div class='tooltip'>GLR (SC)<span class='tooltiptext'>Gujarat Law Reporter (SC)</span></div>",
          "ITR":"<div class='tooltip'>ITR<span class='tooltiptext'>Income Tax Reporter</span></div>",
          "ITD":"<div class='tooltip'>ITD<span class='tooltiptext'>Income-tax Tribunal Decisions</span></div>",
          "Ind.Cas.":"<div class='tooltip'>Ind.Cas.<span class='tooltiptext'>Indian Cases</span></div>",
          "ILR":"<div class='tooltip'>ILR<span class='tooltiptext'>Indian Law Reports</span></div>",
          "ILR (Bom)":"<div class='tooltip'>ILR (Bom)<span class='tooltiptext'>Indian Law Reports (Bombay)</span></div>",
          "ILR (PC)":"<div class='tooltip'>ILR (PC)<span class='tooltiptext'>Indian Law Reports (P C)</span></div>",
          "ILR Pre":"<div class='tooltip'>ILR Pre<span class='tooltiptext'>Indian Law Reports (Pre)</span></div>",
          "ITDSB":"<div class='tooltip'>ITDSB<span class='tooltiptext'>ITD Special Bench</span></div>",
          "JCR":"<div class='tooltip'>JCR<span class='tooltiptext'>Jharkhand Cases Reporter</span></div>",
          "JKJ":"<div class='tooltip'>JKJ<span class='tooltiptext'>JK Judgments</span></div>",
          "JKJ [SC]":"<div class='tooltip'>JKJ [SC]<span class='tooltiptext'>JK Judgments [SC]</span></div>",
          "JCC":"<div class='tooltip'>JCC<span class='tooltiptext'>Journal Of Criminal Cases</span></div>",
          "JCC(SC)":"<div class='tooltip'>JCC(SC)<span class='tooltiptext'>Journal Of Criminal Cases (SC)</span></div>",
          "JT":"<div class='tooltip'>JT<span class='tooltiptext'>Judgment Today</span></div>",
          "JT (Suppl)":"<div class='tooltip'>JT (Suppl)<span class='tooltiptext'>Judgment Today Supplement</span></div>",
          "KCCR":"<div class='tooltip'>KCCR<span class='tooltiptext'>Karnataka Civil and Criminal Reporter</span></div>",
          "KarLJ":"<div class='tooltip'>KarLJ<span class='tooltiptext'>Karnataka Law Journal</span></div>",
          "KLJ":"<div class='tooltip'>KLJ<span class='tooltiptext'>Kerala Law Journal</span></div>",
          "KLT":"<div class='tooltip'>KLT<span class='tooltiptext'>Kerala Law Times</span></div>",
          "KLT (SC)":"<div class='tooltip'>KLT (SC)<span class='tooltiptext'>Kerala Law Times (SC)</span></div>",
          "LabIC":"<div class='tooltip'>LabIC<span class='tooltiptext'>Labour and Industrial cases</span></div>",
          "LLJ":"<div class='tooltip'>LLJ<span class='tooltiptext'>Labour Law Journal</span></div>",
          "LS":"<div class='tooltip'>LS<span class='tooltiptext'>Law Summary</span></div>",
          "MPLJ":"<div class='tooltip'>MPLJ<span class='tooltiptext'>M.P. Law Journal</span></div>",
          "MPLJ(SC)":"<div class='tooltip'>MPLJ(SC)<span class='tooltiptext'>M.P. Law Journal(SC)</span></div>",
          "MLJ":"<div class='tooltip'>MLJ<span class='tooltiptext'>Madras Law Journal</span></div>",
          "MLJ(SC)":"<div class='tooltip'>MLJ(SC)<span class='tooltiptext'>Madras Law Journal (SC)</span></div>",
          "MhLj":"<div class='tooltip'>MhLj<span class='tooltiptext'>Maharashtra Law Journal</span></div>",
          "MhLJ(SC)":"<div class='tooltip'>MhLJ(SC)<span class='tooltiptext'>Maharastra Law Journal SC</span></div>",
          "MIPR":"<div class='tooltip'>MIPR<span class='tooltiptext'>MIPR</span></div>",
          "M.I.A.":"<div class='tooltip'>M.I.A.<span class='tooltiptext'>Moores Indian Appeals</span></div>",
          "MPHT":"<div class='tooltip'>MPHT<span class='tooltiptext'>MP High Court Today</span></div>",
          "MPHT(CG)":"<div class='tooltip'>MPHT(CG)<span class='tooltiptext'>MP High Court Today with court</span></div>",
          "MysLJ":"<div class='tooltip'>MysLJ<span class='tooltiptext'>Mysore Law Journal</span></div>",
          "MysLJ(SC)":"<div class='tooltip'>MysLJ(SC)<span class='tooltiptext'>Mysore Law Journal (SC)</span></div>",
          "OLR":"<div class='tooltip'>OLR<span class='tooltiptext'>Orissa Law Reviews</span></div>",
          "OLR (SC)":"<div class='tooltip'>OLR (SC)<span class='tooltiptext'>Orissa Law Reviews (SC)</span></div>",
          "PTC":"<div class='tooltip'>PTC<span class='tooltiptext'>Patent & Trade Marks Cases</span></div>",
          "PLR":"<div class='tooltip'>PLR<span class='tooltiptext'>Punjab Law Reporter</span></div>",
          "RLR":"<div class='tooltip'>RLR<span class='tooltiptext'>Rajasthan Law Reporter</span></div>",
          "RLW":"<div class='tooltip'>RLW<span class='tooltiptext'>Rajasthan Law Weekly</span></div>",
          "RAJ":"<div class='tooltip'>RAJ<span class='tooltiptext'>Rajdhani Law Reporter</span></div>",
          "RArJ":"<div class='tooltip'>RArJ<span class='tooltiptext'>Recent Arbitration Judgments</span></div>",
          "RAJ(SC)":"<div class='tooltip'>RAJ(SC)<span class='tooltiptext'>Recent Arbitration Judgments (SC)</span></div>",
          "RLT":"<div class='tooltip'>RLT<span class='tooltiptext'>Revenue Law Times</span></div>",
          "STC":"<div class='tooltip'>STC<span class='tooltiptext'>Sales Tax Cases</span></div>",
          "SCR no vol":"<div class='tooltip'>SCR no vol<span class='tooltiptext'>SCR Supp without Volume</span></div>",
          "SCL":"<div class='tooltip'>SCL<span class='tooltiptext'>Sebi and Corporate laws</span></div>",
          "SOT":"<div class='tooltip'>SOT<span class='tooltiptext'>Selected Orders of ITAT</span></div>",
          "SCT":"<div class='tooltip'>SCT<span class='tooltiptext'>Service Cases Today</span></div>",
          "STJ":"<div class='tooltip'>STJ<span class='tooltiptext'>Service Tax Journal</span></div>",
          "STR":"<div class='tooltip'>STR<span class='tooltiptext'>Service Tax Review</span></div>",
          "SLJ":"<div class='tooltip'>SLJ<span class='tooltiptext'>Services Law Journal</span></div>",
          "SLR":"<div class='tooltip'>SLR<span class='tooltiptext'>Services Law Reporter</span></div>",
          "SLR(SC)":"<div class='tooltip'>SLR(SC)<span class='tooltiptext'>Services Law Reporter (SC)</span></div>",
          "ShimLC":"<div class='tooltip'>ShimLC<span class='tooltiptext'>Shimla Law Cases</span></div>",
          "SCALE":"<div class='tooltip'>SCALE<span class='tooltiptext'>Supreme Court Almanac</span></div>",
          "SCC":"<div class='tooltip'>SCC<span class='tooltiptext'>Supreme Court Cases</span></div>",
          "SCC (Supp)":"<div class='tooltip'>SCC (Supp)<span class='tooltiptext'>Supreme Court Cases (Supp)</span></div>",
          "SCR":"<div class='tooltip'>SCR<span class='tooltiptext'>Supreme Court Reporter</span></div>",
          "TTJ":"<div class='tooltip'>TTJ<span class='tooltiptext'>Tax Tribunal Judgments</span></div>",
          "TAXLR":"<div class='tooltip'>TAXLR<span class='tooltiptext'>Taxation Law Reporter</span></div>",
          "TAXMAN":"<div class='tooltip'>TAXMAN<span class='tooltiptext'>TAXMAN</span></div>",
          "STT":"<div class='tooltip'>STT<span class='tooltiptext'>Taxman's Service Tax Today</span></div>",
          "Ind.Ap.":"<div class='tooltip'>Ind.Ap.<span class='tooltiptext'>The Law Report - Indian Appeals</span></div>",
          "Ind.Ap.sv":"<div class='tooltip'>Ind.Ap.sv<span class='tooltiptext'>The Law Report - Indian Appeals(Supp. Vol.)</span></div>",
          "UJ":"<div class='tooltip'>UJ<span class='tooltiptext'>The Unreported Judgments</span></div>",
          "UPLBEC":"<div class='tooltip'>UPLBEC<span class='tooltiptext'>U.P. Local Bodies & Educational Cases</span></div>",
          "VST":"<div class='tooltip'>VST<span class='tooltiptext'>VAT AND SERVICE TAX CASES</span></div>",
          "VR":"<div class='tooltip'>VR<span class='tooltiptext'>Vat Reporter</span></div>",
          "WLN":"<div class='tooltip'>WLN<span class='tooltiptext'>Weekly Law Notes</span></div>",
          "WLNRev":"<div class='tooltip'>WLNRev<span class='tooltiptext'>Weekly Law Notes Revenue</span></div>",
          "WLNUC":"<div class='tooltip'>WLNUC<span class='tooltiptext'>Weekly Law Notes UC</span></div>",
          "WLNWV":"<div class='tooltip'>WLNWV<span class='tooltiptext'>Weekly Law Notes Without Volume</span></div>",
          "WLC":"<div class='tooltip'>WLC<span class='tooltiptext'>Western Law Cases</span></div>",
          "WLC(Raj)UC":"<div class='tooltip'>WLC(Raj)UC<span class='tooltiptext'>Western Law Cases (Raj) UC</span></div>"
    };
    Object.keys(pairs).forEach(function (key) {
        str = str.split(key).join(pairs[key]);
    });
    return str;
}

