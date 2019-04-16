
const courts = {"WL1A":"ALEKSANDRÓW KUJAWSKI",
"SU1A":"AUGUSTÓW",
"OL1Y":"BARTOSZYCE",
"PT1B":"BEŁCHATÓW",
"KA1B":"BĘDZIN",
"LU1B":"BIAŁA PODLASKA",
"RA2G":"BIAŁOBRZEGI",
"KO1B":"BIAŁOGARD",
"BI1B":"BIAŁYSTOK",
"BB1B":"BIELSKO-BIAŁA",
"BI1P":"BIELSK PODLASKI",
"ZA1B":"BIŁGORAJ",
"OL1B":"BISKUPIEC",
"TR1O":"BOCHNIA",
"JG1B":"BOLESŁAWIEC",
"EL1B":"BRANIEWO",
"TO1B":"BRODNICA",
"OP1B":"BRZEG",
"TR1B":"BRZESKO",
"LD1B":"BRZEZINY",
"KS1B":"BRZOZÓW",
"KI1B":"BUSKO ZDRÓJ",
"BY1B":"BYDGOSZCZ",
"KA1Y":"BYTOM",
"SL1B":"BYTÓW",
"LU1C":"CHEŁM",
"TO1C":"CHEŁMNO",
"PO1H":"CHODZIEŻ",
"SL1C":"CHOJNICE",
"KA1C":"CHORZÓW",
"SZ1C":"CHOSZCZNO",
"KR1C":"CHRZANÓW",
"PL1C":"CIECHANÓW",
"BB1C":"CIESZYN",
"PO2T":"CZARNKÓW",
"KR1K":"CZERNICHÓW",
"CZ1C":"CZĘSTOCHOWA",
"SL1Z":"CZŁUCHÓW",
"KA1D":"DĄBROWA GÓRNICZA",
"TR1D":"DĄBROWA TARNOWSKA",
"RZ1D":"DĘBICA",
"KR2Y":"DOBCZYCE",
"KO1D":"DRAWSKO POMORSKIE",
"EL1D":"DZIAŁDOWO",
"SW1D":"DZIERŻONIÓW",
"EL1E":"ELBLĄG",
"OL1E":"EŁK",
"SI1G":"GARWOLIN",
"GD1G":"GDAŃSK",
"GD1Y":"GDYNIA",
"OL1G":"GIŻYCKO",
"GL1G":"GLIWICE",
"LE1G":"GŁOGÓW",
"OP1G":"GŁUBCZYCE",
"PO1G":"GNIEZNO",
"SZ1O":"GOLENIÓW",
"TO1G":"GOLUB-DOBRZYŃ",
"NS1G":"GORLICE",
"GW1G":"GORZÓW WIELKOPOLSKI",
"PL1G":"GOSTYNIN",
"PO1Y":"GOSTYŃ",
"LM1G":"GRAJEWO",
"WA1G":"GRODZISK MAZOWIECKI",
"PO1S":"GRODZISK WLKP.",
"RA1G":"GRÓJEC",
"TO1U":"GRUDZIĄDZ",
"SZ1G":"GRYFICE",
"SZ1Y":"GRYFINO",
"ZG2K":"GUBIN",
"BI2P":"HAJNÓWKA",
"ZA1H":"HRUBIESZÓW",
"EL1I":"IŁAWA",
"BY1I":"INOWROCŁAW",
"ZA1J":"JANÓW LUBELSKI",
"KZ1J":"JAROCIN",
"PR1J":"JAROSŁAW",
"KS1J":"JASŁO",
"GL1J":"JASTRZĘBIE-ZDRÓJ",
"LE1J":"JAWOR",
"KA1J":"JAWORZNO",
"JG1J":"JELENIA GÓRA",
"KI1J":"JĘDRZEJÓW",
"KZ1A":"KALISZ",
"JG1K":"KAMIENNA GÓRA",
"SZ1K":"KAMIEŃ POMORSKI",
"GD1R":"KARTUZY",
"KA1K":"KATOWICE",
"KI1I":"KAZIMIERZA WIELKA",
"OP1K":"KĘDZIERZYN-KOŹLE",
"KZ1E":"KĘPNO",
"OL1K":"KĘTRZYN",
"KR2E":"KĘTY",
"KI1L":"KIELCE",
"OP1U":"KLUCZBORK",
"CZ2C":"KŁOBUCK",
"SW1K":"KŁODZKO",
"TB1K":"KOLBUSZOWA",
"KO1L":"KOŁOBRZEG",
"KN1K":"KOŁO",
"KN1N":"KONIN",
"KI1K":"KOŃSKIE",
"KO1K":"KOSZALIN",
"PO1K":"KOŚCIAN",
"GD1E":"KOŚCIERZYNA",
"RA1K":"KOZIENICE",
"KR1P":"KRAKÓW",
"ZA1K":"KRASNYSTAW",
"LU1K":"KRAŚNIK",
"KS1K":"KROSNO",
"ZG1K":"KROSNO ODRZAŃSKIE",
"KZ1R":"KROTOSZYN",
"KR2K":"KRZESZOWICE",
"LD1K":"KUTNO",
"GD1I":"KWIDZYN",
"WA1L":"LEGIONOWO",
"LE1L":"LEGNICA",
"KS1E":"LESKO",
"PO1L":"LESZNO",
"RZ1E":"LEŻAJSK",
"SL1L":"LĘBORK",
"OL1L":"LIDZBARK WARMIŃSKI",
"NS1L":"LIMANOWA",
"WL1L":"LIPNO",
"RA1L":"LIPSKO",
"PR1L":"LUBACZÓW",
"JG1L":"LUBAŃ",
"LU1A":"LUBARTÓW",
"LE1U":"LUBIN",
"CZ1L":"LUBLINIEC",
"LU1I":"LUBLIN",
"JG1S":"LWÓWEK ŚLĄSKI",
"RZ1A":"ŁAŃCUT",
"SR1L":"ŁASK",
"LD1Y":"ŁĘCZYCA",
"SZ1L":"ŁOBEZ",
"LM1L":"ŁOMŻA",
"SI2S":"ŁOSICE",
"LD1O":"ŁOWICZ",
"LD1M":"ŁÓDŹ",
"LU1U":"ŁUKÓW",
"GD1M":"MALBORK",
"SL1M":"MIASTKO",
"KR1M":"MIECHÓW",
"TB1M":"MIELEC",
"PO2A":"MIĘDZYCHÓD",
"GW1M":"MIĘDZYRZECZ",
"KA1M":"MIKOŁÓW",
"WR1M":"MILICZ",
"SI1M":"MIŃSK MAZOWIECKI",
"PL1M":"MŁAWA",
"BY1M":"MOGILNO",
"EL2O":"MORĄG",
"OL1M":"MRĄGOWO",
"NS2L":"MSZANA DOLNA",
"NS1M":"MUSZYNA",
"KA1L":"MYSŁOWICE",
"CZ1M":"MYSZKÓW",
"KR1Y":"MYŚLENICE",
"SZ1M":"MYŚLIBÓRZ",
"BY1N":"NAKŁO NAD NOTECIĄ",
"OL1N":"NIDZICA",
"KR2I":"NIEPOŁOMICE",
"TB1N":"NISKO",
"SW2K":"NOWA RUDA",
"ZG1N":"NOWA SÓL",
"EL1N":"NOWE MIASTO LUBAWSKIE",
"GD2M":"NOWY DWÓR GDAŃSKI",
"WA1N":"NOWY DWÓR MAZOWIECKI",
"NS1S":"NOWY SĄCZ",
"NS1T":"NOWY TARG",
"PO1N":"NOWY TOMYŚL",
"OP1N":"NYSA",
"PO1O":"OBORNIKI",
"OL1C":"OLECKO",
"OP1L":"OLESNO",
"WR1E":"OLEŚNICA",
"KR1O":"OLKUSZ",
"OL1O":"OLSZTYN",
"WR1O":"OŁAWA",
"KI1T":"OPATÓW",
"PT1O":"OPOCZNO",
"LU1O":"OPOLE LUBELSKIE",
"OP1O":"OPOLE",
"OS1O":"OSTROŁĘKA",
"KI1O":"OSTROWIEC ŚWIĘTOKRZYSKI",
"EL1O":"OSTRÓDA",
"OS1M":"OSTRÓW MAZOWIECKA",
"KZ1W":"OSTRÓW WIELKOPOLSKI",
"KZ1O":"OSTRZESZÓW",
"KR1E":"OŚWIĘCIM",
"WA1O":"OTWOCK",
"LD1P":"PABIANICE",
"SR2W":"PAJĘCZNO",
"WA1I":"PIASECZNO",
"PO1I":"PIŁA",
"KI1P":"PIŃCZÓW",
"RA2Z":"PIONKI",
"PT1P":"PIOTRKÓW TRYBUNALSKI",
"OL1P":"PISZ",
"KZ1P":"PLESZEW",
"PL1P":"PŁOCK",
"PL1L":"PŁOŃSK",
"SR2L":"PODDĘBICE",
"SZ2S":"POLICE",
"PO1P":"POZNAŃ (V)",
"PO2P":"POZNAŃ (VI)",
"KR1H":"PROSZOWICE",
"OP1P":"PRUDNIK",
"WA1P":"PRUSZKÓW",
"OS1P":"PRZASNYSZ",
"PR1P":"PRZEMYŚL",
"PR1R":"PRZEWORSK",
"RA1P":"PRZYSUCHA",
"KA1P":"PSZCZYNA",
"GD2W":"PUCK",
"LU1P":"PUŁAWY",
"OS1U":"PUŁTUSK",
"SZ2T":"PYRZYCE",
"GL1R":"RACIBÓRZ",
"RA1R":"RADOM",
"PT1R":"RADOMSKO",
"WL1R":"RADZIEJÓW",
"LU1R":"RADZYŃ PODLASKI",
"LD1R":"RAWA MAZOWIECKA",
"PO1R":"RAWICZ",
"RZ1R":"ROPCZYCE",
"GL1S":"RUDA ŚLĄSKA",
"GL1Y":"RYBNIK",
"LU1Y":"RYKI",
"WL1Y":"RYPIN",
"RZ1Z":"RZESZÓW",
"KI1S":"SANDOMIERZ",
"KS1S":"SANOK",
"SU1N":"SEJNY",
"BY2T":"SĘPÓLNO KRAJEŃSKIE",
"SI1S":"SIEDLCE",
"KA1I":"SIEMIANOWICE ŚLĄSKIE",
"BI3P":"SIEMIATYCZE",
"PR2R":"SIENIAWA",
"SR1S":"SIERADZ",
"PL1E":"SIERPC",
"KR2P":"SKAŁA",
"KI1R":"SKARŻYSKO-KAMIENNA",
"KR3I":"SKAWINA",
"LD1H":"SKIERNIEWICE",
"KO1E":"SŁAWNO",
"KR1S":"SŁOMNIKI",
"GW1S":"SŁUBICE",
"KN1S":"SŁUPCA",
"SL1S":"SŁUPSK",
"PL1O":"SOCHACZEW",
"SI1P":"SOKOŁÓW PODLASKI",
"BI1S":"SOKÓŁKA",
"GD1S":"SOPOT",
"KA1S":"SOSNOWIEC",
"TB1S":"STALOWA WOLA",
"KI1H":"STARACHOWICE",
"SZ1T":"STARGARD",
"GD1A":"STAROGARD GDAŃSKI",
"KI1A":"STASZÓW",
"GW1K":"STRZELCE KRAJEŃSKIE",
"OP1S":"STRZELCE OPOLSKIE",
"WR1T":"STRZELIN",
"RZ1S":"STRZYŻÓW",
"KR1B":"SUCHA BESKIDZKA",
"ZG2S":"SULECHÓW",
"GW1U":"SULĘCIN",
"SU1S":"SUWAŁKI",
"PO1A":"SZAMOTUŁY",
"KO1I":"SZCZECINEK",
"SZ1S":"SZCZECIN",
"OL1S":"SZCZYTNO",
"GD2I":"SZTUM",
"BY1U":"SZUBIN",
"RA1S":"SZYDŁOWIEC",
"PO1M":"ŚREM",
"WR1S":"ŚRODA ŚLĄSKA",
"PO1D":"ŚRODA WLKP.",
"SW1S":"ŚWIDNICA",
"LU1S":"ŚWIDNIK",
"KO2B":"ŚWIDWIN",
"ZG1S":"ŚWIEBODZIN",
"BY1S":"ŚWIECIE",
"SZ1W":"ŚWINOUJŚCIE",
"TB1T":"TARNOBRZEG",
"GL1T":"TARNOWSKIE GÓRY",
"TR1T":"TARNÓW",
"GD1T":"TCZEW",
"ZA1T":"TOMASZÓW LUBELSKI",
"PT1T":"TOMASZÓW MAZOWIECKI",
"TO1T":"TORUŃ",
"PO1T":"TRZCIANKA",
"WR1W":"TRZEBNICA",
"BY1T":"TUCHOLA",
"TR2T":"TUCHÓW",
"KN1T":"TUREK",
"KA1T":"TYCHY",
"RZ2Z":"TYCZYN",
"KS2E":"USTRZYKI DOLNE",
"KR1W":"WADOWICE",
"SW1W":"WAŁBRZYCH",
"KO1W":"WAŁCZ",
"WA3M":"WARSZAWA (IX)",
"WA1M":"WARSZAWA (VI)",
"WA2M":"WARSZAWA (VII)",
"WA4M":"WARSZAWA (X)",
"WA5M":"WARSZAWA (XIII)",
"WA6M":"WARSZAWA (XV)",
"CIKW":"WARSZAWA",
"TO1W":"WĄBRZEŹNO",
"PO1B":"WĄGROWIEC",
"GD1W":"WEJHEROWO",
"OL2G":"WĘGORZEWO",
"SI1W":"WĘGRÓW",
"KR1I":"WIELICZKA",
"SR1W":"WIELUŃ",
"WL1W":"WŁOCŁAWEK",
"LU1W":"WŁODAWA",
"KI1W":"WŁOSZCZOWA",
"GL1W":"WODZISŁAW ŚLĄSKI",
"PO1E":"WOLSZTYN",
"WA1W":"WOŁOMIN",
"WR1L":"WOŁÓW",
"WR1K":"WROCŁAW",
"PO1F":"WRZEŚNIA",
"ZG1W":"WSCHOWA",
"PO2H":"WYRZYSK",
"LM1W":"WYSOKIE MAZOWIECKIE",
"OS1W":"WYSZKÓW",
"GL1Z":"ZABRZE",
"NS1Z":"ZAKOPANE",
"LM1Z":"ZAMBRÓW",
"ZA1Z":"ZAMOŚĆ",
"CZ1Z":"ZAWIERCIE",
"SW1Z":"ZĄBKOWICE ŚLĄSKIE",
"SR1Z":"ZDUŃSKA WOLA",
"LD1G":"ZGIERZ",
"JG1Z":"ZGORZELEC",
"ZG1E":"ZIELONA GÓRA",
"LE1Z":"ZŁOTORYJA",
"PO1Z":"ZŁOTÓW",
"RA1Z":"ZWOLEŃ",
"ZG1G":"ŻAGAŃ",
"ZG1R":"ŻARY",
"BY1Z":"ŻNIN",
"GL1X":"ŻORY",
"PL2M":"ŻUROMIN",
"PL1Z":"ŻYRARDÓW",
"BB1Z":"ŻYWIEC",
"DIRS":"DIRS"};

const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'X', 'A', 'B',
	'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 
	'S', 'T', 'U', 'W', 'Y', 'Z'];

const weights = [1,3,7];

function getKW(kw) {
	
	if (typeof kw === "object") return kw;
	
	var parts = kw.toUpperCase().split(/[^0-9A-Z]/g);
	
	return {
		courtId: parts[0],
		court: courts[parts[0]],
		number: ('000000000000'+parts[1]).substr(-8),
		checksum: parts[2],
		parts: parts,
	}
}

function checksum(kw) {
	kw = getKW(kw);
	return Array.prototype.reduce.call(
		[kw.courtId, kw.number].join(''), 
		(pv,cv,i,a) => pv + chars.indexOf(cv) * weights[i%3], 0) % 10;
}

function isValid(kw) {
	
	let parts = getKW(kw).parts;
	if (parts.length !== 3) return false;
	if (!parts[0].match(/[0-9A-z]{4}/)) return false;
	if (!parts[1].match(/[0-9]+/)) return false;
	if (!parts[2].match(/[0-9]/)) return false;	
	
	if (parseInt(parts[2]) !== checksum(kw)) return false;
	return true;
	
}

function validate(kw) {
	kw = getKW(kw);
	let parts = [kw.courtId, kw.number, checksum(kw)];
	return parts.join('/');
}

exports.checksum = checksum;
exports.isValid = isValid;
exports.validate = validate;
exports.kw = getKW;

console.log(getKW("LU1B/00012345/3"))

