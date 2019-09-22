import React, { Component } from "react";
import CustomSelect from "./CustomSelect";
import "../resources/sass/components/int-mobile.scss";

export class InternationalMobileField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialCode: [
        { id: "50", value: "IND +91" },
        { id: "51", value: "USA +1" },
        { id: "52", value: "GBR +44" },
        { id: "53", value: "ARE +971" },
        { id: "54", value: "CAN +1" },
        { id: "55", value: "AUS +61" },
        { id: "56", value: "PAK +92" },
        { id: "57", value: "SAU +966" },
        { id: "58", value: "KWT +965" },
        { id: "59", value: "ZAF +27" },
        { id: "60", value: "AFG +93" },
        { id: "61", value: "ALB +355" },
        { id: "62", value: "DZA +213" },
        { id: "63", value: "ASM +684" },
        { id: "64", value: "AND +376" },
        { id: "65", value: "AGO +244" },
        { id: "66", value: "AIA +264" },
        { id: "67", value: "ATG +268" },
        { id: "68", value: "ARG +54" },
        { id: "69", value: "ARM +374" },
        { id: "70", value: "AUT +43" },
        { id: "71", value: "AZE +994" },
        { id: "72", value: "BHS +1242" },
        { id: "73", value: "BHR +973" },
        { id: "74", value: "BGD +880" },
        { id: "75", value: "BRB +1246" },
        { id: "76", value: "BLR +375" },
        { id: "77", value: "BEL +32" },
        { id: "78", value: "BLZ +501" },
        { id: "79", value: "BMU +1441" },
        { id: "80", value: "BTN +975" },
        { id: "81", value: "BOL +591" },
        { id: "82", value: "BIH +387" },
        { id: "83", value: "BWA +267" },
        { id: "84", value: "BRA +55" },
        { id: "85", value: "BRN +673" },
        { id: "86", value: "BGR +359" },
        { id: "87", value: "BFA +226" },
        { id: "88", value: "BDI +257" },
        { id: "89", value: "KHM +855" },
        { id: "90", value: "CMR +237" },
        { id: "91", value: "CPV +238" },
        { id: "92", value: "CYM +345" },
        { id: "93", value: "CAF +236" },
        { id: "94", value: "TCD +235" },
        { id: "95", value: "CHL +56" },
        { id: "96", value: "CHN +86" },
        { id: "97", value: "COL +57" },
        { id: "98", value: "COM +269" },
        { id: "99", value: "COD +243" },
        { id: "100", value: "COG +242" },
        { id: "101", value: "COK +682" },
        { id: "102", value: "CRI +506" },
        { id: "103", value: "CIV +225" },
        { id: "104", value: "HRV +385" },
        { id: "105", value: "CUB +53" },
        { id: "106", value: "CYP +357" },
        { id: "107", value: "CZE +420" },
        { id: "108", value: "DNK +45" },
        { id: "109", value: "DJI +253" },
        { id: "110", value: "DMA +767" },
        { id: "111", value: "DOM +1" },
        { id: "112", value: "TLS +670" },
        { id: "113", value: "ECU +593" },
        { id: "114", value: "EGY +20" },
        { id: "115", value: "SLV +503" },
        { id: "116", value: "GNQ +240" },
        { id: "117", value: "ERI +291" },
        { id: "118", value: "EST +372" },
        { id: "119", value: "ETH +251" },
        { id: "120", value: "FLK +500" },
        { id: "121", value: "FRO +298" },
        { id: "122", value: "FJI +679" },
        { id: "123", value: "FIN +358" },
        { id: "124", value: "FRA +33" },
        { id: "125", value: "GUF +594" },
        { id: "126", value: "PYF +689" },
        { id: "127", value: "GAB +241" },
        { id: "128", value: "GMB +220" },
        { id: "129", value: "GEO +995" },
        { id: "130", value: "DEU +49" },
        { id: "131", value: "GHA +233" },
        { id: "132", value: "GIB +350" },
        { id: "133", value: "GRC +30" },
        { id: "134", value: "GRL +299" },
        { id: "135", value: "GRD +473" },
        { id: "136", value: "GLP +590" },
        { id: "137", value: "GUM +671" },
        { id: "138", value: "GTM +502" },
        { id: "139", value: "GIN +224" },
        { id: "140", value: "GNB +245" },
        { id: "141", value: "GUY +592" },
        { id: "142", value: "HTI +509" },
        { id: "143", value: "HND +504" },
        { id: "144", value: "HKG +852" },
        { id: "145", value: "HUN +36" },
        { id: "146", value: "ISL +354" },
        { id: "147", value: "IDN +62" },
        { id: "148", value: "IRN +98" },
        { id: "149", value: "IRQ +964" },
        { id: "150", value: "IRL +353" },
        { id: "151", value: "ISR +972" },
        { id: "152", value: "ITA +39" },
        { id: "153", value: "JAM +1" },
        { id: "154", value: "JPN +81" },
        { id: "155", value: "JOR +962" },
        { id: "156", value: "KAZ +7" },
        { id: "157", value: "KEN +254" },
        { id: "158", value: "KIR +686" },
        { id: "159", value: "MDA +82" },
        { id: "160", value: "KGZ +996" },
        { id: "161", value: "LAO +856" },
        { id: "162", value: "LVA +371" },
        { id: "163", value: "LBN +961" },
        { id: "164", value: "LSO +266" },
        { id: "165", value: "LBR +231" },
        { id: "166", value: "LBY +218" },
        { id: "167", value: "LIE +423" },
        { id: "168", value: "LTU +370" },
        { id: "169", value: "LUX +352" },
        { id: "170", value: "MAC +853" },
        { id: "171", value: "MKD +389" },
        { id: "172", value: "MDG +261" },
        { id: "173", value: "MWI +265" },
        { id: "174", value: "MYS +60" },
        { id: "175", value: "MDV +960" },
        { id: "176", value: "MLI +223" },
        { id: "177", value: "MLT +356" },
        { id: "178", value: "MTQ +596" },
        { id: "179", value: "MRT +222" },
        { id: "180", value: "MUS +230" },
        { id: "181", value: "MYT +269" },
        { id: "182", value: "MEX +52" },
        { id: "183", value: "FSM +691" },
        { id: "184", value: "KOR +373" },
        { id: "185", value: "MCO +377" },
        { id: "186", value: "MNG +976" },
        { id: "187", value: "MSR +664" },
        { id: "188", value: "MAR +212" },
        { id: "189", value: "MOZ +258" },
        { id: "190", value: "MMR +95" },
        { id: "191", value: "NAM +264" },
        { id: "192", value: "NRU +674" },
        { id: "193", value: "NPL +977" },
        { id: "194", value: "ANT +599" },
        { id: "195", value: "NLD +31" },
        { id: "196", value: "NCL +687" },
        { id: "197", value: "NZL +64" },
        { id: "198", value: "NIC +505" },
        { id: "199", value: "NER +227" },
        { id: "200", value: "NGA +234" },
        { id: "201", value: "NIU +683" },
        { id: "202", value: "NFK +672" },
        { id: "203", value: "PRK +850" },
        { id: "204", value: "NOR +47" },
        { id: "205", value: "OMN +968" },
        { id: "206", value: "PAN +507" },
        { id: "207", value: "PNG +675" },
        { id: "208", value: "PRY +595" },
        { id: "209", value: "PER +51" },
        { id: "210", value: "PHL +63" },
        { id: "211", value: "PCN +649" },
        { id: "212", value: "POL +48" },
        { id: "213", value: "PRT +351" },
        { id: "214", value: "PRI +939" },
        { id: "215", value: "QAT +974" },
        { id: "216", value: "REU +262" },
        { id: "217", value: "ROU +40" },
        { id: "218", value: "RUS +7" },
        { id: "219", value: "RWA +250" },
        { id: "220", value: "WSM +685" },
        { id: "221", value: "SMR +378" },
        { id: "222", value: "STP +239" },
        { id: "223", value: "SEN +221" },
        { id: "224", value: "SCG +381" },
        { id: "225", value: "SYC +248" },
        { id: "226", value: "SLE +232" },
        { id: "227", value: "SGP +65" },
        { id: "228", value: "SVK +421" },
        { id: "229", value: "SVN +386" },
        { id: "230", value: "SLB +677" },
        { id: "231", value: "SOM +252" },
        { id: "232", value: "ESP +34" },
        { id: "233", value: "LKA +94" },
        { id: "234", value: "SHN +290" },
        { id: "235", value: "KNA +869" },
        { id: "236", value: "LCA +758" },
        { id: "237", value: "SPM +508" },
        { id: "238", value: "VCT +784" },
        { id: "239", value: "SDN +249" },
        { id: "240", value: "SUR +597" },
        { id: "241", value: "SWZ +268" },
        { id: "242", value: "SWE +46" },
        { id: "243", value: "CHE +41" },
        { id: "244", value: "SYR +963" },
        { id: "245", value: "TWN +886" },
        { id: "246", value: "TJK +992" },
        { id: "247", value: "TZA +255" },
        { id: "248", value: "THA +66" },
        { id: "249", value: "TGO +228" },
        { id: "250", value: "TKL +690" },
        { id: "251", value: "TON +676" },
        { id: "252", value: "TTO +868" },
        { id: "253", value: "TUN +216" },
        { id: "254", value: "TUR +90" },
        { id: "255", value: "TKM +993" },
        { id: "256", value: "TCA +649" },
        { id: "257", value: "TUV +688" },
        { id: "258", value: "UGA +256" },
        { id: "259", value: "UKR +380" },
        { id: "260", value: "URY +598" },
        { id: "261", value: "UZB +998" },
        { id: "262", value: "VUT +678" },
        { id: "263", value: "VEN +58" },
        { id: "264", value: "VNM +84" },
        { id: "265", value: "VGB +284" },
        { id: "266", value: "VIR +340" },
        { id: "267", value: "WLF +681" },
        { id: "268", value: "YEM +967" },
        { id: "269", value: "YUG +381" },
        { id: "270", value: "RNR +260" },
        { id: "271", value: "ZWE +263" }
      ]
    };
  }

  render() {
    const { dialCode } = this.state;
    const {
      inputType,
      name,
      id,
      labelText,
      helpText,
      value,
      eventHandler
    } = this.props;
    return (
      <React.Fragment>
        <div className="int-mobile">
          <div className="int-mobile__isd">
            <CustomSelect
              name="isdCode"
              title="Select Country Code"
              options={dialCode}
            />
          </div>
          <div className="int-mobile__field">
            <input
              type={inputType}
              name={name}
              id={id}
              className="int-mobile__input"
              defaultValue={value}
              onChange={eventHandler}
              required
            />
            <label className="int-mobile__label" htmlFor="mobile">
              {labelText}
            </label>
            <div className="int-mobile__help-text int-mobile__help-text--is-hidden">
              {helpText}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default InternationalMobileField;
