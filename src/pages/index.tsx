import DOMPurify from "isomorphic-dompurify";
import Calendar from "@/src/components/Calendar/Calendar";
import { getCalendar } from "../common/calendarMap";
import { urlConstants } from "../text/urlConstants";
import Link from "next/link";
import ImageCarousel from "../components/Carousel/ImageCarousel";
import Head from "next/head"



export default function Home() {

  const metadata = {
    title: "Sequoia Fabrica Community Makerspace",
    description: "Volunteer-run, membership-based, community workshop in San Francisco. Classes and tools for woodworking, sewing, electronics, fabrication, crafts and fine arts."
  }

  return (
    <div className="App">
      <Head>
        <title key="metatitle">{metadata.title}</title>
        <meta key="metadesc" name="description" content={metadata.description} />
      </Head>
      <ImageCarousel images={["/images/banner_1.jpg", "/images/banner_2.jpg", "/images/banner_3.jpg", "/images/banner_4.jpg", "/images/banner_5.jpg", "/images/banner_6.png", "/images/banner_7.jpg"]} />
      <div className="About m-4 max-w-screen-md mx-auto grid grid-cols-2 gap-4 p-8">
        <div className="col-span-2">
          <p>We are Sequoia Fabrica, a community makerspace in <a href={urlConstants.googleMaps}>San Francisco’s Potrero Hill neighborhood</a> fostering the next generation of makers, designers and craftspeople. We’re home to a wood and textile workshop, 3D printers and a laser cutter, electronics, crafts and fine arts supplies. </p>
          <p>We are a volunteer-run 501(c)(3) non-profit, and host <a href={urlConstants.bookWhen} data-goatcounter-click={urlConstants.bookWhen}>classes, events and workshop hours</a> open to the public. </p>
          <p>We offer <Link href={'/docs/membership'}>memberships</Link> for makers who want to access the space and equipment outside of classes. Want to teach a class or organize an event at our workshop? Please <Link href="/docs/contact">contact us</Link>.</p>
          <hr />
        </div>

        <div className="col-span-2 md:col-span-1">
          <h2>Visit and Learn a New Skill</h2>
          <p>We are open to the public for events.</p>
          <p>Sign-up <a href={urlConstants.bookWhen} data-goatcounter-click={urlConstants.bookWhen}>for a class</a>, or <Link href="/docs/contact">contact us</Link>.</p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h2>Stay in Touch!</h2>
          <p>📬 <Link href={urlConstants.mailchimp}>Join our Newsletter</Link> 📬</p>
          <h3 className="mb-0 mt-0">Follow Us</h3>
          <p className="mt-0 col-span-2 clear-both">
            <a href={urlConstants.instagram}>Instagram</a><span>, </span>
            <a href={urlConstants.mastodon}>Mastodon</a><span>, </span>
            <a href={urlConstants.tiktok}>TikTok</a>
          </p>
        </div>
        <hr className="col-span-2" />
        <div id="calendar" className="col-span-2">
          <Calendar urls={[getCalendar('bookwhen')]} />
        </div>
        <hr className="col-span-2" />
        <div className="col-span-2 md:col-span-1">
          <h2>Donations</h2>
          <p>Please support makers of today and tomorrow with a <a href={urlConstants.donateOC} data-goatcounter-click={urlConstants.donateOC}>donation</a>! We are a California Public Benefit Corporation and tax-exempt public charity under Section 501(c)(3). EIN: 93-4496044</p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h2>Code of Conduct</h2>
          <p>Anyone involved in our space or events is expected to review and follow our <Link href="/docs/code_of_conduct">Code of Conduct</Link>.</p>
        </div>
      </div>
    </div>
  )
}
