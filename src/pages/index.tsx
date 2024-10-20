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

  const mailchimpHTML = `<div id="mc_embed_shell">
  
  <div id="mc_embed_signup">
      <form action="https://sequoiafabrica.us21.list-manage.com/subscribe/post?u=e67b644f9532ceb232cf38ac2&amp;id=28291a8406&amp;f_id=00e7f6e6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self" novalidate="">
          <div id="mc_embed_signup_scroll">
              <div class="mc-field-group"><label for="mce-EMAIL" class="hidden">Email Address</label><input type="email" name="EMAIL" class="required email float-left p-1" id="mce-EMAIL" required="" value="" placeholder="Your email address"><span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span></div>
  <div hidden=""><input type="hidden" name="tags" value="2893983"></div>
          <div id="mce-responses" class="clear foot">
              <div class="response" id="mce-error-response" style="display: none;"></div>
              <div class="response" id="mce-success-response" style="display: none;"></div>
          </div>
      <div style="position: absolute; left: -5000px;" aria-hidden="true">
          /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
          <input type="text" name="b_e67b644f9532ceb232cf38ac2_28291a8406" tabindex="-1" value="">
      </div>
          <div class="optionalParent">
              <div class="clear foot">
                  <input class="ms-4 p-1 mb-4 flex-auto text-tea_green  bg-emerald-800 hover:text-tea_green-200 text-sm rounded float-left" type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
              </div>
          </div>
      </div>
  </form>
  </div>
  </div>
  
`  
  const mailchimpSanitized = DOMPurify.sanitize(mailchimpHTML);
  


  return (
    <div className="App">
        <Head>
            <title key="metatitle">{metadata.title}</title>
            <meta key="metadesc" name="description" content={metadata.description} />
        </Head>
      <ImageCarousel images={["/images/banner_1.jpg", "/images/banner_2.jpg", "/images/banner_3.jpg", "/images/banner_4.jpg", "/images/banner_5.jpg","/images/banner_6.png","/images/banner_7.jpg"]} />
      <div className="About m-4 max-w-screen-md mx-auto grid grid-cols-2 gap-4 p-8">
        <div className="col-span-2">
            <p>We are Sequoia Fabrica, a community makerspace in <a href={urlConstants.googleMaps}>San Francisco’s Potrero Hill neighborhood</a> fostering the next generation of makers, designers and craftspeople. We’re home to a wood and textile workshop, 3D printers and a laser cutter, electronics, crafts and fine arts supplies. </p>
            <p>We are a volunteer-run 501(c)(3) non-profit, and host <a href={urlConstants.bookWhen} data-goatcounter-click={urlConstants.bookWhen}>classes, events and workshop hours</a> open to the public. </p>
            <p>We offer <Link href={'/docs/membership'}>memberships</Link> for makers who want to access the space and equipment outside of classes. Want to teach a class or organize an event at our workshop? Please <Link href="/docs/contact">contact us</Link>.</p>
            <hr/>
          </div>
        
        <div className="col-span-2 md:col-span-1">
          <h2>Visit and Learn a New Skill</h2>
          <p>We are open to the public for events.</p>
          <p>Sign-up <a href={urlConstants.bookWhen} data-goatcounter-click={urlConstants.bookWhen}>for a class</a>, or <Link href="/docs/contact">contact us</Link>.</p>
        </div>  
        <div className="col-span-2 md:col-span-1">
          <h2>Stay in Touch!</h2>
          <h3 className="mb-0 mt-0">Join our Newsletter</h3>
          <div className="float-left col-span-2"></div><div dangerouslySetInnerHTML={{ __html: mailchimpSanitized }} />
          <h3 className="mb-0 mt-0">Follow Us</h3>
          <p className="mt-0 col-span-2 clear-both">
            <a href={urlConstants.instagram}>Instagram</a><span>, </span>
            <a href={urlConstants.mastodon}>Mastodon</a><span>, </span>
            <a href={urlConstants.tiktok}>TikTok</a>
          </p>
        </div>  
        <hr className="col-span-2"/>
        <div id="calendar" className="col-span-2">
          <Calendar urls={[getCalendar('bookwhen')]}/>
        </div>
        <hr className="col-span-2"/>
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
