import clsx from "clsx";
import Image from "next/future/image";
import Link from "next/link";

import { RoundLink } from "../../RoundLink";
import { Text } from "../../Text";
import styles from "./index.module.css";

const sponsors = {
  Complete: {
    areaClassName: styles.sponsorsComplete,
    buttonSize: "medium",
    companies: [
      ["Living Spec", "https://livingspec.com", "/logos/livingspec.svg"],
      ["Twilio", "https://twilio.com", "/logos/twilio.svg"],
      [
        "American Express",
        "https://americanexpress.io",
        "/logos/americanexpress.svg",
      ],
      ["Utopia", "https://utopiamusic.com", "/logos/utopia.svg"],
      ["CMD", "https://cmdhq.io", "/logos/cmd.svg"],
      ["Salesforce", "https://salesforce.com/tech", "/logos/salesforce.svg"],
      [
        "Orange Jellyfish",
        "https://orangejellyfish.com",
        "/logos/orangejellyfish.svg",
      ],
      ["GoDaddy", "https://godaddy.github.io", "/logos/godaddy.svg"],
      [
        "Choice Hotels",
        "https://careers.choicehotels.com/careers",
        "/logos/choicehotels.svg",
      ],
      ["agGrid", "https://ag-grid.com", "/logos/aggrid.svg"],
      ["EventHandler", "https://eventhandler.co.il", "/logos/eventhandler.svg"],
      ["Workiva", "https://workiva.com", "/logos/workiva.svg"],
      ["Lowe's", "https://lowes.com", "/logos/lowes.svg"],
      ["now4real", "https://now4real.com", "/logos/now4real.svg"],
      ["Range", "https://range.co", "/logos/range.svg"],
      [".internal", "https://internal.io/halfstack", "/logos/internal.svg"],
      ["reclaimai", "https://reclaim.ai", "/logos/reclaimai.svg"],
      ["sitepen App Dev Team", "https://sitepen.com", "/logos/sitepen.svg"],
      ["Corvid by Wix", "https://wix.com/corvid", "/logos/corvid.svg"],
    ],
  },
  Large: {
    areaClassName: styles.sponsorsLarge,
    buttonSize: "medium",
    companies: [
      ["Beamery", "https://beamery.com", "/logos/beamery.svg"],
      ["Platformatic", "https://platformatic.dev", "/logos/platformatic.svg"],
      ["Modstreaming", "https://modstreaming.com", "/logos/modstreaming.jpg"],
      ["Dazn", "https://engineering.dazn.com", "/logos/dazn.svg"],
      ["Esri", "https://esri.com", "/logos/esri.svg"],
      ["Trigo", "https://www.trigo.at", "/logos/trigo.svg"],
      ["Durchblicker", "https://durchblicker.at", "/logos/durchblicker.svg"],
      ["Formidable", "https://formidable.com", "/logos/formidable.svg"],
      ["TEKsystems", "https://teksystems.com", "/logos/teksystems.svg"],
      ["Nrwl", "https://nrwl.io", "/logos/nrwl.svg"],
      ["Mark43", "https://www.mark43.com", "/logos/mark43.svg"],
      ["FabConFab", "https://fabconfab.com", "/logos/fabconfab.svg"],
      ["Induro", "https://induro.io", "/logos/induro.svg"],
      ["TalkScript", "http://talkscript.fm", "/logos/talkscript.svg"],
      ["Wix Engineering", "https://www.wix", "/logos/wixengineering.svg"],
      ["Auth0", "https://auth0.com", "/logos/auth0.svg"],
    ],
  },
  Medium: {
    areaClassName: styles.sponsorsMedium,
    buttonSize: "small",
    companies: [
      ["20i", "https://www.20i.com", "/logos/20i.svg"],
      ["DHD", "https://wearedhd.com", "/logos/dhd.svg"],
      ["InRhythm", "https://www.inrhythm.com", "/logos/inrhythm.png"],
      ["Not a Bot Studios", "https://byondreal.net", "/logos/notabot.svg"],
      ["Future Sync", "https://futuresync.co.uk", "/logos/futuresync.svg"],
      ["Tidelift", "https://tidelift.com", "/logos/tidelift.svg"],
      ["Venturplex", "https://venturplex.com", "/logos/venturplex.svg"],
      ["Samsung Internet", "https://samsunginter.net", "/logos/samsung.svg"],
      ["SiteGround", "https://www.siteground.com", "/logos/siteground.svg"],
      ["Isle of Code", "https://isleofcode.com", "/logos/isleofcode.svg"],
      ["Iced.dev", "https://iceddev.com", "/logos/iceddev.svg"],
      ["Hackajob", "https://hackajob.co", "/logos/hackajob.jpg"],
      ["Esriuk", "https://www.esriuk.com", "/logos/esriuk.svg"],
      ["Prisma", "https://www.prisma.io", "/logos/prisma.svg"],
      ["Salesbricks", "https://www.salesbricks.com", "/logos/salesbricks.svg"],
      ["Interval", "https://interval.com", "/logos/interval.png"],
    ],
  },
  Small: {
    areaClassName: styles.sponsorsSmall,
    buttonSize: "small",
    companies: [
      ["Tito", "https://ti.to/", "/logos/tito.svg"],
      ["Mozilla", "https://www.mozilla.org/", "/logos/mozilla.svg"],
      ["GitKraken", "https://www.gitkraken.com/", "/logos/axosoft.svg"],
      ["Fluree", "https://flur.ee/", "/logos/fluree.svg"],
      [
        "APEX Systems",
        "https://www.apexsystems.com/",
        "/logos/apexsystems.svg",
      ],
      ["Balsamiq", "https://balsamiq.com/", "/logos/balsamiq.svg"],
      ["OddBird", "https://www.oddbird.net/", "/logos/oddbird.svg"],
      [
        "Signature Consultants",
        "https://sigconsult.com/",
        "/logos/sigconsult.svg",
      ],
      ["Kentico Kontent", "https://kontent.ai/", "/logos/kontent.svg"],
      ["Sticker Mule", "https://mule.to/p38e", "/logos/stickermule.svg"],
      ["Ably", "https://ably.com/", "/logos/ably.svg"],
      [
        "Cult by Honeypot",
        "https://cult.honeypot.io/",
        "/logos/cult-by-honeypot.svg",
      ],
      [
        "React Vienna",
        "https://www.meetup.com/ReactVienna/",
        "/logos/reactvienna.svg",
      ],
      [
        "Graphhql Finland",
        "https://react-finland.fi/",
        "/logos/reactfinland.svg",
      ],
      ["Survive JS", "https://survivejs.com/", "/logos/survivejs.svg"],
      ["CityJSConf", "https://cityjsconf.org/", "/logos/cityjsconf.svg"],
      [
        "PHX TS",
        "https://www.meetup.com/Phoenix-TypeScript/",
        "/logos/phxts.svg",
      ],
      [
        "PHX JS",
        "https://www.meetup.com/Phoenix-JavaScript/",
        "/logos/phxjs.svg",
      ],
      [
        "JS Monthly London",
        "https://www.meetup.com/js-monthly/",
        "/logos/jsmonthly.jpg",
      ],
      ["JS Fiddle", "https://jsfiddle.net/", "/logos/jsfiddle-logo.jpg"],
      [
        "Open JS Foundation",
        "https://openjsf.org/",
        "/logos/openjsfoundation.svg",
      ],
      ["TS NYC", "https://www.meetup.com/TypeScriptNYC/", "/logos/tsnyc.svg"],
      [
        "Angular NYC",
        "https://www.meetup.com/AngularNYC/",
        "/logos/angularnyc.svg",
      ],
      ["Qcon London", "http://bit.ly/2wfP2Ps", "/logos/qconlondon.jpg"],
      ["Qcon New York", "http://bit.ly/2YGqOId", "/logos/qconny.svg"],
      ["Qcon San Francisco", "http://bit.ly/2VHo1wK", "/logos/qconsf.svg"],
      ["Infoq", "https://infoq.com/", "/logos/infoq.jpg"],
      ["JS Nation", "https://jsnation.com/", "/logos/jsnation.svg"],
      [
        "React Advanced",
        "https://reactadvanced.com/",
        "/logos/reactadvanced.svg",
      ],
      [
        "State of the Browser",
        "https://2019.stateofthebrowser.com/",
        "/logos/stateofthebrowser.svg",
      ],
      ["Virtus Lab", "https://virtuslab.com/", "/logos/virtuslab.svg"],
      ["ScriptConf", "https://scriptconf.org/", "/logos/scriptconf.svg"],
      [
        "Desert Code Camp",
        "https://oct2019.desertcodecamp.com/home",
        "/logos/desertcodecamp.png",
      ],
      [
        "JAMstack PHX",
        "https://www.meetup.com/JAMstack-PHX/",
        "/logos/jamstackphx.svg",
      ],
      ["Hodash Dev", "https://www.meetup.com/Hodash-Dev/", "/logos/hodash.png"],
      [
        "JavaScript Israel",
        "https://www.jsisrael.com/",
        "/logos/javascriptisrael.svg",
      ],
      ["Manning Publications", "https://manning.com/", "/logos/manning.svg"],
      [
        "React GraphQL Academy",
        "https://reactgraphql.academy/",
        "/logos/reactgraphqlacademy.svg",
      ],
      ["JS Party", "https://changelog.com/jsparty", "/logos/js-party.svg"],
      ["Polypane", "https://polypane.app/", "/logos/polypane-logo.svg"],
      ["codebar", "http://codebar.io/", "/logos/codebar.svg"],
    ],
  },
} as const;

export function Sponsors() {
  return (
    <div className={styles.sponsors}>
      <Text as="h2" fontSize="extra-large" id="spon">
        Our Wonderful Sponsors
      </Text>
      <Text as="p">
        Our conferences wouldn&apos;t be possible without the generous support
        of our sponsors.
        <br />
        <br />
        Interested in becoming one?
      </Text>
      <RoundLink
        as={Link}
        className={styles.takeMe}
        href="/spon"
        variant="shadow"
      >
        Take me to the sponsors page
      </RoundLink>
      {Object.entries(sponsors).map(
        ([stack, { areaClassName, buttonSize, companies }]) => (
          <>
            <Text as="h3" fontSize="large" key={stack}>
              {stack} Sponsors
            </Text>
            <div className={clsx(styles.companies, areaClassName)}>
              {companies.map(([name, href, src]) => (
                <Link
                  className={styles.company}
                  href={href}
                  key={name}
                  target="_blank"
                >
                  <Image
                    alt={name}
                    className={styles.logo}
                    fill
                    sizes="100%"
                    src={src}
                  />
                </Link>
              ))}
              <Link
                className={clsx(styles.company, styles.promo)}
                href="/spon"
                target="_blank"
              >
                <Text>Want to sponsor?</Text>
                <RoundLink size={buttonSize}>Why not</RoundLink>
              </Link>
            </div>
          </>
        )
      )}
      <Text as="div" className={styles.bottomText}>
        There are loads of great reasons to sponsor a HalfStack conference this
        year. Want to find out more?
      </Text>
      <RoundLink as={Link} href="/spon" variant="shadow">
        Take me to the sponsors page
      </RoundLink>
    </div>
  );
}
