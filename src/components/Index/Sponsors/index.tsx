import { SponsorStacksList } from "../../SponsorStacksList";

const sponsors = {
  complete: [
    {
      name: "Living Spec",
      href: "https://livingspec.com",
      src: "/logos/livingspec.svg",
    },
    { name: "Twilio", href: "https://twilio.com", src: "/logos/twilio.svg" },
    {
      name: "American Express",
      href: "https://americanexpress.io",
      src: "/logos/americanexpress.svg",
    },
    {
      name: "Utopia",
      href: "https://utopiamusic.com",
      src: "/logos/utopia.svg",
    },
    { name: "CMD", href: "https://cmdhq.io", src: "/logos/cmd.svg" },
    {
      name: "Salesforce",
      href: "https://salesforce.com/tech",
      src: "/logos/salesforce.svg",
    },
    {
      name: "Orange Jellyfish",
      href: "https://orangejellyfish.com",
      src: "/logos/orangejellyfish.svg",
    },
    {
      name: "GoDaddy",
      href: "https://godaddy.github.io",
      src: "/logos/godaddy.svg",
    },
    {
      name: "Choice Hotels",
      href: "https://careers.choicehotels.com/careers",
      src: "/logos/choicehotels.svg",
    },
    { name: "ag-grid", href: "https://ag-grid.com", src: "/logos/ag-grid.svg" },
    {
      name: "EventHandler",
      href: "https://eventhandler.co.il",
      src: "/logos/eventhandler.svg",
    },
    { name: "Workiva", href: "https://workiva.com", src: "/logos/workiva.svg" },
    { name: "Lowe's", href: "https://lowes.com", src: "/logos/lowes.svg" },
    {
      name: "now4real",
      href: "https://now4real.com",
      src: "/logos/now4real.svg",
    },
    { name: "Range", href: "https://range.co", src: "/logos/range.svg" },
    {
      name: ".internal",
      href: "https://internal.io/halfstack",
      src: "/logos/internal.svg",
    },
    {
      name: "reclaimai",
      href: "https://reclaim.ai",
      src: "/logos/reclaimai.svg",
    },
    {
      name: "sitepen App Dev Team",
      href: "https://sitepen.com",
      src: "/logos/sitepen.svg",
    },
    {
      name: "Corvid by Wix",
      href: "https://wix.com/corvid",
      src: "/logos/corvid.svg",
    },
  ],
  large: [
    { name: "Beamery", href: "https://beamery.com", src: "/logos/beamery.svg" },
    {
      name: "Platformatic",
      href: "https://platformatic.dev",
      src: "/logos/platformatic.svg",
    },
    {
      name: "Mod Streaming",
      href: "https://modstreaming.com",
      src: "/logos/modstreaming.jpg",
    },
    {
      name: "Dazn",
      href: "https://engineering.dazn.com",
      src: "/logos/dazn.svg",
    },
    { name: "Esri", href: "https://esri.com", src: "/logos/esri.svg" },
    { name: "Trigo", href: "https://www.trigo.at", src: "/logos/trigo.svg" },
    {
      name: "Durchblicker",
      href: "https://durchblicker.at",
      src: "/logos/durchblicker.svg",
    },
    {
      name: "Formidable",
      href: "https://formidable.com",
      src: "/logos/formidable.svg",
    },
    {
      name: "TEKsystems",
      href: "https://teksystems.com",
      src: "/logos/teksystems.svg",
    },
    { name: "Nrwl", href: "https://nrwl.io", src: "/logos/nrwl.svg" },
    {
      name: "Mark43",
      href: "https://www.mark43.com",
      src: "/logos/mark43.svg",
    },
    {
      name: "FabConFab",
      href: "https://fabconfab.com",
      src: "/logos/fabconfab.svg",
    },
    { name: "Induro", href: "https://induro.io", src: "/logos/induro.svg" },
    {
      name: "TalkScript",
      href: "http://talkscript.fm",
      src: "/logos/talkscript.svg",
    },
    {
      name: "Wix Engineering",
      href: "https://www.wix",
      src: "/logos/wixengineering.svg",
    },
    { name: "Auth0", href: "https://auth0.com", src: "/logos/auth0.svg" },
  ],
  medium: [
    { name: "20i", href: "https://www.20i.com", src: "/logos/20i.svg" },
    { name: "DHD", href: "https://wearedhd.com", src: "/logos/dhd.svg" },
    {
      name: "InRhythm",
      href: "https://www.inrhythm.com",
      src: "/logos/inrhythm.png",
    },
    {
      name: "Not a Bot Studios",
      href: "https://byondreal.net",
      src: "/logos/notabot.svg",
    },
    {
      name: "Future Sync",
      href: "https://futuresync.co.uk",
      src: "/logos/futuresync.svg",
    },
    {
      name: "Tidelift",
      href: "https://tidelift.com",
      src: "/logos/tidelift.svg",
    },
    {
      name: "Venturplex",
      href: "https://venturplex.com",
      src: "/logos/venturplex.svg",
    },
    {
      name: "Samsung Internet",
      href: "https://samsunginter.net",
      src: "/logos/samsung.svg",
    },
    {
      name: "SiteGround",
      href: "https://www.siteground.com",
      src: "/logos/siteground.svg",
    },
    {
      name: "Isle of Code",
      href: "https://isleofcode.com",
      src: "/logos/isleofcode.svg",
    },
    {
      name: "Iced.dev",
      href: "https://iceddev.com",
      src: "/logos/iceddev.svg",
    },
    {
      name: "Hackajob",
      href: "https://hackajob.co",
      src: "/logos/hackajob.jpg",
    },
    {
      name: "Esriuk",
      href: "https://www.esriuk.com",
      src: "/logos/esriuk.svg",
    },
    { name: "Prisma", href: "https://www.prisma.io", src: "/logos/prisma.svg" },
    {
      name: "Salesbricks",
      href: "https://www.salesbricks.com",
      src: "/logos/salesbricks.svg",
    },
    {
      name: "Interval",
      href: "https://interval.com",
      src: "/logos/interval.png",
    },
  ],
  small: [
    { name: "Tito", href: "https://ti.to/", src: "/logos/tito.svg" },
    {
      name: "Mozilla",
      href: "https://www.mozilla.org/",
      src: "/logos/mozilla.svg",
    },
    {
      name: "GitKraken",
      href: "https://www.gitkraken.com/",
      src: "/logos/axosoft.svg",
    },
    { name: "Fluree", href: "https://flur.ee/", src: "/logos/fluree.svg" },
    {
      name: "APEX Systems",
      href: "https://www.apexsystems.com/",
      src: "/logos/apexsystems.svg",
    },
    {
      name: "Balsamiq",
      href: "https://balsamiq.com/",
      src: "/logos/balsamiq.svg",
    },
    {
      name: "OddBird",
      href: "https://www.oddbird.net/",
      src: "/logos/oddbird.svg",
    },
    {
      name: "Signature Consultants",
      href: "https://sigconsult.com/",
      src: "/logos/sigconsult.svg",
    },
    {
      name: "Kentico Kontent",
      href: "https://kontent.ai/",
      src: "/logos/kontent.svg",
    },
    {
      name: "Sticker Mule",
      href: "https://mule.to/p38e",
      src: "/logos/stickermule.svg",
    },
    { name: "Ably", href: "https://ably.com/", src: "/logos/ably.svg" },
    {
      name: "Cult by Honeypot",
      href: "https://cult.honeypot.io/",
      src: "/logos/cult-by-honeypot.svg",
    },
    {
      name: "React Vienna",
      href: "https://www.meetup.com/ReactVienna/",
      src: "/logos/reactvienna.svg",
    },
    {
      name: "Graphhql Finland",
      href: "https://react-finland.fi/",
      src: "/logos/reactfinland.svg",
    },
    {
      name: "Survive JS",
      href: "https://survivejs.com/",
      src: "/logos/survivejs.svg",
    },
    {
      name: "CityJSConf",
      href: "https://cityjsconf.org/",
      src: "/logos/cityjsconf.svg",
    },
    {
      name: "PHX TS",
      href: "https://www.meetup.com/Phoenix-TypeScript/",
      src: "/logos/phxts.svg",
    },
    {
      name: "PHX JS",
      href: "https://www.meetup.com/Phoenix-JavaScript/",
      src: "/logos/phxjs.svg",
    },
    {
      name: "JS Monthly London",
      href: "https://www.meetup.com/js-monthly/",
      src: "/logos/jsmonthly.jpg",
    },
    {
      name: "JS Fiddle",
      href: "https://jsfiddle.net/",
      src: "/logos/jsfiddle-logo.jpg",
    },
    {
      name: "Open JS Foundation",
      href: "https://openjsf.org/",
      src: "/logos/openjsfoundation.svg",
    },
    {
      name: "TS NYC",
      href: "https://www.meetup.com/TypeScriptNYC/",
      src: "/logos/tsnyc.svg",
    },
    {
      name: "Angular NYC",
      href: "https://www.meetup.com/AngularNYC/",
      src: "/logos/angularnyc.svg",
    },
    {
      name: "Qcon London",
      href: "http://bit.ly/2wfP2Ps",
      src: "/logos/qconlondon.jpg",
    },
    {
      name: "Qcon New York",
      href: "http://bit.ly/2YGqOId",
      src: "/logos/qconny.svg",
    },
    {
      name: "Qcon San Francisco",
      href: "http://bit.ly/2VHo1wK",
      src: "/logos/qconsf.svg",
    },
    { name: "Infoq", href: "https://infoq.com/", src: "/logos/infoq.jpg" },
    {
      name: "JS Nation",
      href: "https://jsnation.com/",
      src: "/logos/jsnation.svg",
    },
    {
      name: "React Advanced",
      href: "https://reactadvanced.com/",
      src: "/logos/reactadvanced.svg",
    },
    {
      name: "State of the Browser",
      href: "https://2019.stateofthebrowser.com/",
      src: "/logos/stateofthebrowser.svg",
    },
    {
      name: "Virtus Lab",
      href: "https://virtuslab.com/",
      src: "/logos/virtuslab.svg",
    },
    {
      name: "ScriptConf",
      href: "https://scriptconf.org/",
      src: "/logos/scriptconf.svg",
    },
    {
      name: "Desert Code Camp",
      href: "https://oct2019.desertcodecamp.com/home",
      src: "/logos/desertcodecamp.png",
    },
    {
      name: "JAMstack PHX",
      href: "https://www.meetup.com/JAMstack-PHX/",
      src: "/logos/jamstackphx.svg",
    },
    {
      name: "Hodash Dev",
      href: "https://www.meetup.com/Hodash-Dev/",
      src: "/logos/hodash.png",
    },
    {
      name: "JavaScript Israel",
      href: "https://www.jsisrael.com/",
      src: "/logos/javascriptisrael.svg",
    },
    {
      name: "Manning Publications",
      href: "https://manning.com/",
      src: "/logos/manning.svg",
    },
    {
      name: "React GraphQL Academy",
      href: "https://reactgraphql.academy/",
      src: "/logos/reactgraphqlacademy.svg",
    },
    {
      name: "JS Party",
      href: "https://changelog.com/jsparty",
      src: "/logos/js-party.svg",
    },
    {
      name: "Polypane",
      href: "https://polypane.app/",
      src: "/logos/polypane-logo.svg",
    },
    { name: "codebar", href: "http://codebar.io/", src: "/logos/codebar.svg" },
  ],
};

export function Sponsors() {
  return <SponsorStacksList {...sponsors} />;
}
