emailjs.init("h-fkRW088FoAvNTls");

const kohteetLisatiedot = [
  {id:"1", nimi:"Suojaantulotie", lisatiedot:"Suojaantulotiellä ei saa olla ylimääräistä palokuormaa, joka vaikeuttaa poistumista esimerkiksi tulipalotilanteessa. Rappukäytävässä saa olla vain kynnysmatto; ei tuoleja, lastenvaunuja tai muuta tavaraa."},
  {id:"2", nimi:"VSS-merkit ja viitoitus", lisatiedot:"Suojaan vievä tie on merkitty. Jos merkkitarroja ei ole paikoillaan, riittää että ne löytyvät varustelaatikosta ja voidaan asentaa käyttöönoton yhteydessä."},
  {id:"3", nimi:"Suojan ovet ja tiivisteet", lisatiedot:"Paineovi sulkeutuu ja salpautuu asianmukaisesti. Tiivisteen tiiveys voidaan tarkistaa taskulampulla; jos valo näkyy läpi, tiiviste on uusittava."},
  {id:"4", nimi:"Sulkuhuone / sulkuteltta ja rimoitus", lisatiedot:"S1-suojassa on sulkuteltta ja puurimoitus, johon teltta kiinnitetään tiiviisti. C-luokan suojassa on sulkuhuone. Tiivisteet ja väliovet tarkastetaan taskulampun avulla."},
  {id:"5", nimi:"Ylipaineventtiilit ja tiivisteet", lisatiedot:"Venttiilien liikkuvat osat liikkuvat vapaasti ja tiivisteet ovat ehjät. Osat tulee voidella säännöllisesti."},
  {id:"6", nimi:"Normaali-ilmanvaihdon sulku", lisatiedot:"Ilmanvaihtoventtiilit suljetaan sulkulaipoilla, jotka kiinnitetään pulttien ja rengastiivisteiden avulla ilmatiiviisti."},
  {id:"7", nimi:"Vesijohtojen sulkuventtiilit", lisatiedot:"Venttiilit testataan avaamalla vesihana; vedenkulun tulee pysähtyä venttiilien ollessa kiinni. Vialliset venttiilit vaativat putkimiehen huollon."},
  {id:"8", nimi:"Lämpöjohtojen sulkuventtiilit", lisatiedot:"Venttiilit testataan sulkemalla ja kuuntelemalla vedenkulun pysähtymistä. Vialliset venttiilit vaativat putkimiehen huollon."},
  {id:"9", nimi:"Vesipiste varusteineen", lisatiedot:"Vesihanan toimivuus tarkistetaan juoksuttamalla vettä. Suojassa on vesiletku, liitin ja kiristin varavesisäiliöiden täyttöä varten."},
  {id:"10", nimi:"Vuotovesien poistojärjestelmä", lisatiedot:"Lattiakaivon toiminta testataan kaatamalla vettä. Tukokset vaativat putkimiehen huollon."},
  {id:"11", nimi:"Viemärin sulkuventtiili", lisatiedot:"Venttiilin tulee sulkea viemärin vedenkulku. Vedenpinnan lasku sallitaan vasta venttiilin avaamisen jälkeen."},
  {id:"12", nimi:"Ilmanvaihtolaitteisto", lisatiedot:"Laitteen ohjeet löytyvät rungosta. Koekäytetään sähköllä ja käsikäytöllä, tarkistetaan ilmamittarin toiminta ja öljymäärä."},
  {id:"13", nimi:"Paineventtiili ja esisuodatin", lisatiedot:"Ilman tulee virrata vain venttiiliä avattaessa. Venttiili pidetään kiinni, kun laitetta ei käytetä."},
  {id:"14", nimi:"Erityissuodatin", lisatiedot:"Suojatulppien ei tule olla pullistuneita. Tarvittaessa ota yhteys laitteen valmistajaan."},
  {id:"15", nimi:"Ilmanjakokanavisto", lisatiedot:"Viisi tuloilmaventtiiliä. Toiminta tarkistetaan ilmanvaihtolaitteen koekäytön yhteydessä."},
  {id:"16", nimi:"Ylipainemittari ja putkisto", lisatiedot:"Mittarinesteen määrä tarkistetaan asteikolta. Nestepinta reagoi paineen vaihteluun koekäytön aikana."},
  {id:"17", nimi:"Hiekkasuodatin", lisatiedot:"Hiekan pinnalla ei saa olla epäpuhtauksia."},
  {id:"18", nimi:"Hätäpoistumiskäytävä", lisatiedot:"Käytävä on siisti, kuiva ja valaistu. Ulostuloaukon luukku on sisältäpäin suljettu ja ehjä."},
  {id:"19", nimi:"Käytävän luukku ja tiivisteet", lisatiedot:"Luukku sulkeutuu ja salpautuu asianmukaisesti. Tiivisteen tiiviys tarkistetaan taskulampulla."},
  {id:"20", nimi:"Ilmanottoputki ja -kanava", lisatiedot:"Putki on paikoillaan tai varastoituna. Ilmankulun tulee olla esteetöntä ja kiinnityspisteet kunnossa."},
  {id:"21", nimi:"Tiiveyskoe", lisatiedot:"Suoritetaan 10 vuoden välein. Kestoltaan hyväksytty, jos ylipaine laskee 200→50 Pa vähintään 20 sekunnissa."},
  {id:"22", nimi:"Varavesisäiliöt", lisatiedot:"Vettä 40 litraa/m² tai vesipisteen yhteydessä 15 litraa/m². Tarkista määrät."},
  {id:"23", nimi:"Jätevesisäiliöt", lisatiedot:"Jätevesisäiliöitä vähintään 15 litraa/m². Tarkista kunto ja määrä."},
  {id:"24", nimi:"Kuivakäymälät ja -komerot", lisatiedot:"Pussit ja pystytysohjeet löytyvät suojahäkistä. Yksi kaluste jokaista alkavaa 30 suojapaikkaa kohti."},
  {id:"25", nimi:"Väestönsuojelumateriaali", lisatiedot:"Varustelaatikossa on sisällysluettelo, joka vastaa sisältöä."},
  {id:"26", nimi:"Suojan työkalut", lisatiedot:"Työkalulaatikossa on sisällysluettelo, joka vastaa sisältöä."},
  {id:"27", nimi:"Suojahäkki", lisatiedot:"Häkki on ehjä ja lukittu. Siellä säilytetään vain suojautumiseen tarvittavaa materiaalia."},
  {id:"28", nimi:"Puhelinliitäntä ja matkapuhelimen kuuluvuus", lisatiedot:"Lankapuhelinpistorasia löytyy seinästä. GSM-toistin suositeltava, jos lankaliittymää ei ole."},
  {id:"29", nimi:"Suojan puhelinnumero", lisatiedot:"Jos lankapuhelin on käytössä, numero on ilmoitettu suojassa."},
  {id:"30", nimi:"Antenniliitäntä", lisatiedot:"Antennipistorasia löytyy seinästä. Toimivuus testataan radion avulla."},
  {id:"31", nimi:"Sähköasennukset", lisatiedot:"Sulkuteltan sisäpuolella ei ole sähköasennuksia. Pistorasiat ovat roiskesuojattuja."},
  {id:"32", nimi:"Varaläpimeno", lisatiedot:"Kaapelivetoaukot on tiivistetty tai käytössä. Tulpat ovat ilmatiiviit."},
  {id:"33", nimi:"Käyttö-, huolto- ja toimintaohjeet", lisatiedot:"Ohjeet löytyvät säilytyspusseista ja ilmanvaihtolaitteen rungosta."},
  {id:"34", nimi:"Pelastussuunnitelma", lisatiedot:"Taloyhtiöllä on pelastussuunnitelma, jossa on tiedot väestönsuojasta."},
  {id:"35", nimi:"Väestönsuojan hoitaja", lisatiedot:"Suojalle on nimetty hoitaja, joka perehtyy suojan käyttöön ja johtaa toimintaa suojautumistilanteessa."},
  {id:"36", nimi:"Käyttöönsaatto- ja purkusuunnitelma", lisatiedot:"Pelastussuunnitelman liitteenä on ohje suojan käyttöönotosta ja purkamisesta."},
  {id:"37", nimi:"Paloturvallisuus ja savunpoisto", lisatiedot:"Varustelaatikosta löytyy sankoruisku ja palosanko. Kiinteistössä on myös sammutuspeitteitä."},
  {id:"38", nimi:"Sirpale- ja säteilysuojaus", lisatiedot:"Ilmanottoputken ja ylipainemittarin ulkopäät ovat sirpalesuojattuja."},
  {id:"39", nimi:"Suojan käyttötarkoitus", lisatiedot:"Suojaa käytetään rauhan aikana siten, ettei käyttöönotto kolmen vuorokauden aikana vaarannu."},
  {id:"40", nimi:"Suojan siisteys", lisatiedot:"Suoja on siisti ja paloturvallinen. Se voidaan saattaa käyttökuntoon 72 tunnissa."}
];

const container = document.getElementById("kohteetContainer");

kohteetLisatiedot.forEach(item => {
    const div = document.createElement("div");
    div.className = "kohde";

    const label = document.createElement("label");
    label.textContent = item.id + ". " + item.nimi;
    div.appendChild(label);

    const vastauksetDiv = document.createElement("div");
    vastauksetDiv.className = "vastaukset";

    const kunnossaBtn = document.createElement("button");
    kunnossaBtn.type = "button";
    kunnossaBtn.className = "kunnossa";
    kunnossaBtn.textContent = "Kunnossa";

    const puutteitaBtn = document.createElement("button");
    puutteitaBtn.type = "button";
    puutteitaBtn.className = "puutteita";
    puutteitaBtn.textContent = "Puutteita";

    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "kohde_" + item.id;

    kunnossaBtn.addEventListener("click", () => {
        input.value = "Kunnossa";
        kunnossaBtn.style.opacity = "1";
        puutteitaBtn.style.opacity = "0.5";
    });

    puutteitaBtn.addEventListener("click", () => {
        input.value = "Puutteita";
        puutteitaBtn.style.opacisty = "1";
        kunnossaBtn.style.opacity = "0.5";
    });

    vastauksetDiv.appendChild(kunnossaBtn);
    vastauksetDiv.appendChild(puutteitaBtn);
    div.appendChild(vastauksetDiv);
    div.appendChild(input);

    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.textContent = "Lisätiedot";
    details.appendChild(summary);

    const textarea = document.createElement("textarea");
    textarea.readOnly = true;
    textarea.textContent = item.lisatiedot;
    textarea.style.resize = "none"; // estää koon muuttamisen sivulta
    details.appendChild(textarea);

    div.appendChild(details);
    container.appendChild(div);
});

document.getElementById("vssForm").addEventListener("submit", function(e) {
    e.preventDefault();
    if(!confirm("Haluatko varmasti lähettää lomakkeen?")) return;

    document.getElementById("lahetysaika").value = new Date().toLocaleString("fi-FI");

    const formData = new FormData(this);
    const params = {};
    formData.forEach((value, key) => {
        params[key] = value;
    });

    emailjs.send("service_f872iue", "template_q2h313l", params)
        .then(() => alert("Lomake lähetetty onnistuneesti!"))
        .catch(err => { alert("Lähetys epäonnistui."); console.error(err); });
});
