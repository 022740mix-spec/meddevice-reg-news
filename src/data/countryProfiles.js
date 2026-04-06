/**
 * 国別規制プロファイル — 包括的データベース
 *
 * 医療機器規制に関する各国の詳細情報を構造化したデータ。
 * 法規制・分類体系・適合性評価・市販後監視・償還制度などを網羅。
 *
 * 各国データは ./profiles/ 以下の個別ファイルに分割。
 */

// --- 個別プロファイルのインポート ---
import USA from "./profiles/USA.js";
import CAN from "./profiles/CAN.js";
import EU from "./profiles/EU.js";
import JPN from "./profiles/JPN.js";
import CHN from "./profiles/CHN.js";
import KOR from "./profiles/KOR.js";
import GBR from "./profiles/GBR.js";
import AUS from "./profiles/AUS.js";
import BRA from "./profiles/BRA.js";
import IND from "./profiles/IND.js";
import TWN from "./profiles/TWN.js";
import SGP from "./profiles/SGP.js";
import THA from "./profiles/THA.js";
import IDN from "./profiles/IDN.js";
import VNM from "./profiles/VNM.js";
import MYS from "./profiles/MYS.js";
import SAU from "./profiles/SAU.js";
import CHE from "./profiles/CHE.js";
import SWE from "./profiles/SWE.js";
import DNK from "./profiles/DNK.js";
import NOR from "./profiles/NOR.js";
import FIN from "./profiles/FIN.js";
import IRL from "./profiles/IRL.js";
import AUT from "./profiles/AUT.js";
import MEX from "./profiles/MEX.js";
import ARE from "./profiles/ARE.js";
import ZAF from "./profiles/ZAF.js";
import PAK from "./profiles/PAK.js";
import KEN from "./profiles/KEN.js";
import NGA from "./profiles/NGA.js";
import MAR from "./profiles/MAR.js";
import ISR from "./profiles/ISR.js";
import EGY from "./profiles/EGY.js";
import COL from "./profiles/COL.js";
import CHL from "./profiles/CHL.js";
import NZL from "./profiles/NZL.js";
import PHL from "./profiles/PHL.js";
import ARG from "./profiles/ARG.js";
import TUR from "./profiles/TUR.js";
import RUS from "./profiles/RUS.js";
import POL from "./profiles/POL.js";
import KWT from "./profiles/KWT.js";
import QAT from "./profiles/QAT.js";
import JOR from "./profiles/JOR.js";
import BHR from "./profiles/BHR.js";
import OMN from "./profiles/OMN.js";
import PER from "./profiles/PER.js";
import ECU from "./profiles/ECU.js";
import CRI from "./profiles/CRI.js";
import URY from "./profiles/URY.js";
import PRY from "./profiles/PRY.js";
import DOM from "./profiles/DOM.js";
import PAN from "./profiles/PAN.js";
import GTM from "./profiles/GTM.js";
import HND from "./profiles/HND.js";
import BGD from "./profiles/BGD.js";
import LKA from "./profiles/LKA.js";
import KHM from "./profiles/KHM.js";
import MMR from "./profiles/MMR.js";
import LAO from "./profiles/LAO.js";
import MNG from "./profiles/MNG.js";
import NLD from "./profiles/NLD.js";
import BEL from "./profiles/BEL.js";
import ESP from "./profiles/ESP.js";
import ITA from "./profiles/ITA.js";
import ROU from "./profiles/ROU.js";
import BGR from "./profiles/BGR.js";
import HRV from "./profiles/HRV.js";
import TZA from "./profiles/TZA.js";
import ETH from "./profiles/ETH.js";
import UGA from "./profiles/UGA.js";
import RWA from "./profiles/RWA.js";
import SEN from "./profiles/SEN.js";
import GHA from "./profiles/GHA.js";
import TUN from "./profiles/TUN.js";
import DZA from "./profiles/DZA.js";
import IRQ from "./profiles/IRQ.js";
import LBN from "./profiles/LBN.js";
import NPL from "./profiles/NPL.js";
import IRN from "./profiles/IRN.js";
import SVK from "./profiles/SVK.js";
import LTU from "./profiles/LTU.js";
import LVA from "./profiles/LVA.js";
import EST from "./profiles/EST.js";
import MLT from "./profiles/MLT.js";
import MAC from "./profiles/MAC.js";
import CZE from "./profiles/CZE.js";
import HUN from "./profiles/HUN.js";
import PRT from "./profiles/PRT.js";
import GRC from "./profiles/GRC.js";
import UKR from "./profiles/UKR.js";
import HKG from "./profiles/HKG.js";
import VEN from "./profiles/VEN.js";
import BOL from "./profiles/BOL.js";
import SLV from "./profiles/SLV.js";
import CUB from "./profiles/CUB.js";
import BRN from "./profiles/BRN.js";
import FJI from "./profiles/FJI.js";
import KAZ from "./profiles/KAZ.js";
import UZB from "./profiles/UZB.js";
import DEU from "./profiles/DEU.js";
import FRA from "./profiles/FRA.js";
import LUX from "./profiles/LUX.js";
import SVN from "./profiles/SVN.js";
import SRB from "./profiles/SRB.js";
import CYP from "./profiles/CYP.js";
import GEO from "./profiles/GEO.js";
import NIC from "./profiles/NIC.js";
import JAM from "./profiles/JAM.js";
import CIV from "./profiles/CIV.js";
import CMR from "./profiles/CMR.js";
import ZMB from "./profiles/ZMB.js";
import ZWE from "./profiles/ZWE.js";
import MKD from "./profiles/MKD.js";
import BIH from "./profiles/BIH.js";
import AGO from "./profiles/AGO.js";
import GUY from "./profiles/GUY.js";
import TTO from "./profiles/TTO.js";
import ALB from "./profiles/ALB.js";
import MNE from "./profiles/MNE.js";
import MDA from "./profiles/MDA.js";
import BWA from "./profiles/BWA.js";
import NAM from "./profiles/NAM.js";
import MOZ from "./profiles/MOZ.js";
import KGZ from "./profiles/KGZ.js";
import ISL from "./profiles/ISL.js";
import TJK from "./profiles/TJK.js";
import PNG from "./profiles/PNG.js";
import HTI from "./profiles/HTI.js";
import AZE from "./profiles/AZE.js";
import LIE from "./profiles/LIE.js";
import BRB from "./profiles/BRB.js";
import BLZ from "./profiles/BLZ.js";
import ARM from "./profiles/ARM.js";
import TKM from "./profiles/TKM.js";
import MLI from "./profiles/MLI.js";
import BFA from "./profiles/BFA.js";
import NER from "./profiles/NER.js";
import SUR from "./profiles/SUR.js";
import TGO from "./profiles/TGO.js";
import SWZ from "./profiles/SWZ.js";
import MWI from "./profiles/MWI.js";
import MDG from "./profiles/MDG.js";
import LSO from "./profiles/LSO.js";
import AND from "./profiles/AND.js";
import MCO from "./profiles/MCO.js";
import SMR from "./profiles/SMR.js";
import TLS from "./profiles/TLS.js";
import BEN from "./profiles/BEN.js";
import GAB from "./profiles/GAB.js";
import MDV from "./profiles/MDV.js";

export const COUNTRY_FLAG = {
  USA: "🇺🇸", CAN: "🇨🇦", EU: "🇪🇺", JPN: "🇯🇵", CHN: "🇨🇳",
  KOR: "🇰🇷", AUS: "🇦🇺", GBR: "🇬🇧", BRA: "🇧🇷", IND: "🇮🇳",
  TWN: "🇹🇼", SGP: "🇸🇬", THA: "🇹🇭", IDN: "🇮🇩", VNM: "🇻🇳",
  MYS: "🇲🇾", SAU: "🇸🇦", ZAF: "🇿🇦", CHE: "🇨🇭", MEX: "🇲🇽",
  NZL: "🇳🇿", PHL: "🇵🇭", ARG: "🇦🇷", TUR: "🇹🇷",
  ARE: "🇦🇪",
  SWE: "🇸🇪", DNK: "🇩🇰", NOR: "🇳🇴", FIN: "🇫🇮", IRL: "🇮🇪", AUT: "🇦🇹",
  RUS: "🇷🇺", POL: "🇵🇱", KWT: "🇰🇼", QAT: "🇶🇦",
  ISR: "🇮🇱", EGY: "🇪🇬", COL: "🇨🇴", CHL: "🇨🇱",
  PAK: "🇵🇰", KEN: "🇰🇪", NGA: "🇳🇬", MAR: "🇲🇦",
  JOR: "🇯🇴", BHR: "🇧🇭", OMN: "🇴🇲",
  PER: "🇵🇪", ECU: "🇪🇨", CRI: "🇨🇷",
  BGD: "🇧🇩", LKA: "🇱🇰", KHM: "🇰🇭", MMR: "🇲🇲", LAO: "🇱🇦", MNG: "🇲🇳",
  URY: "🇺🇾", PRY: "🇵🇾", DOM: "🇩🇴", PAN: "🇵🇦", GTM: "🇬🇹", HND: "🇭🇳",
  TZA: "🇹🇿", ETH: "🇪🇹", UGA: "🇺🇬", RWA: "🇷🇼", SEN: "🇸🇳", GHA: "🇬🇭",
  CZE: "🇨🇿", HUN: "🇭🇺", PRT: "🇵🇹", GRC: "🇬🇷", UKR: "🇺🇦", HKG: "🇭🇰",
  TUN: "🇹🇳", DZA: "🇩🇿", IRQ: "🇮🇶", LBN: "🇱🇧", NPL: "🇳🇵", IRN: "🇮🇷",
  VEN: "🇻🇪", BOL: "🇧🇴", SLV: "🇸🇻", CUB: "🇨🇺",
  BRN: "🇧🇳", FJI: "🇫🇯", KAZ: "🇰🇿", UZB: "🇺🇿",
  NLD: "🇳🇱", BEL: "🇧🇪", ESP: "🇪🇸", ITA: "🇮🇹", ROU: "🇷🇴", BGR: "🇧🇬", HRV: "🇭🇷",
  SVK: "🇸🇰", LTU: "🇱🇹", LVA: "🇱🇻", EST: "🇪🇪", MLT: "🇲🇹", MAC: "🇲🇴",
  DEU: "🇩🇪", FRA: "🇫🇷", LUX: "🇱🇺", SVN: "🇸🇮", SRB: "🇷🇸",
  CYP: "🇨🇾", GEO: "🇬🇪", NIC: "🇳🇮", JAM: "🇯🇲",
  CIV: "🇨🇮", CMR: "🇨🇲", ZMB: "🇿🇲", ZWE: "🇿🇼",
  MKD: "🇲🇰", BIH: "🇧🇦", AGO: "🇦🇴", GUY: "🇬🇾", TTO: "🇹🇹",
  ALB: "🇦🇱", MNE: "🇲🇪", MDA: "🇲🇩",
  BWA: "🇧🇼", NAM: "🇳🇦", MOZ: "🇲🇿", KGZ: "🇰🇬",
  ISL: "🇮🇸", TJK: "🇹🇯", PNG: "🇵🇬",
  HTI: "🇭🇹",
  AZE: "🇦🇿",
  LIE: "🇱🇮",
  BRB: "🇧🇧",
  BLZ: "🇧🇿",
  ARM: "🇦🇲",
  TKM: "🇹🇲",
  MLI: "🇲🇱",
  BFA: "🇧🇫",
  NER: "🇳🇪",
  SUR: "🇸🇷",
  TGO: "🇹🇬",
  SWZ: "🇸🇿",
  MWI: "🇲🇼",
  MDG: "🇲🇬",
  LSO: "🇱🇸",
  AND: "🇦🇩",
  MCO: "🇲🇨",
  SMR: "🇸🇲",
  TLS: "🇹🇱",
  BEN: "🇧🇯",
  GAB: "🇬🇦",
  MDV: "🇲🇻",
};

export const REGION_ORDER = ["North America", "Europe", "ASPAC", "Latam", "Middle East & Africa"];

export const COUNTRY_PROFILES = [
  USA,
  CAN,
  EU,
  JPN,
  CHN,
  KOR,
  GBR,
  AUS,
  BRA,
  IND,
  TWN,
  SGP,
  THA,
  IDN,
  VNM,
  MYS,
  SAU,
  CHE,
  SWE,
  DNK,
  NOR,
  FIN,
  IRL,
  AUT,
  MEX,
  ARE,
  ZAF,
  PAK,
  KEN,
  NGA,
  MAR,
  ISR,
  EGY,
  COL,
  CHL,
  NZL,
  PHL,
  ARG,
  TUR,
  RUS,
  POL,
  KWT,
  QAT,
  JOR,
  BHR,
  OMN,
  PER,
  ECU,
  CRI,
  URY,
  PRY,
  DOM,
  PAN,
  GTM,
  HND,
  BGD,
  LKA,
  KHM,
  MMR,
  LAO,
  MNG,
  NLD,
  BEL,
  ESP,
  ITA,
  ROU,
  BGR,
  HRV,
  TZA,
  ETH,
  UGA,
  RWA,
  SEN,
  GHA,
  TUN,
  DZA,
  IRQ,
  LBN,
  NPL,
  IRN,
  SVK,
  LTU,
  LVA,
  EST,
  MLT,
  MAC,
  CZE,
  HUN,
  PRT,
  GRC,
  UKR,
  HKG,
  VEN,
  BOL,
  SLV,
  CUB,
  BRN,
  FJI,
  KAZ,
  UZB,
  DEU,
  FRA,
  LUX,
  SVN,
  SRB,
  CYP,
  GEO,
  NIC,
  JAM,
  CIV,
  CMR,
  ZMB,
  ZWE,
  MKD,
  BIH,
  AGO,
  GUY,
  TTO,
  ALB,
  MNE,
  MDA,
  BWA,
  NAM,
  MOZ,
  KGZ,
  ISL,
  TJK,
  PNG,
  HTI,
  AZE,
  LIE,
  BRB,
  BLZ,
  ARM,
  TKM,
  MLI,
  BFA,
  NER,
  SUR,
  TGO,
  SWZ,
  MWI,
  MDG,
  LSO,
  AND,
  MCO,
  SMR,
  TLS,
  BEN,
  GAB,
  MDV,
];

// ===========================================================================
// ヘルパー関数
// ===========================================================================

/** 国コードでプロファイル検索 */
export function findProfileByCode(code) {
  return COUNTRY_PROFILES.find((p) => p.code === code) ?? null;
}

/** 地域でグループ化 */
export function groupProfilesByRegion() {
  const map = {};
  for (const p of COUNTRY_PROFILES) {
    (map[p.region] ??= []).push(p);
  }
  return map;
}
