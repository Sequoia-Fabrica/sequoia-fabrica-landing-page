import DOMPurify from "isomorphic-dompurify";

export default function Home() {

  const mailchimpHTML = `<div id="mc_embed_shell">
  
  <div id="mc_embed_signup">
      <form action="https://sequoiafabrica.us21.list-manage.com/subscribe/post?u=e67b644f9532ceb232cf38ac2&amp;id=28291a8406&amp;f_id=00e7f6e6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self" novalidate="">
          <div id="mc_embed_signup_scroll">
              <div class="mc-field-group"><label for="mce-EMAIL">Email Address </label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""><span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span></div>
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
                  <input class="p-1 flex-auto text-tea_green  bg-emerald-800 hover:text-tea_green-200 text-sm rounded" type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
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
      <div className="About m-4 max-w-screen-md mx-auto grid grid-cols-2 gap-4">
        <div className="col-span-2">
            <p className="md:m-4">We are Sequoia Fabrica, an intergenerational community workshop in the San Francisco’s Potrero Hill neighborhood fostering the next generation of makers, designers and craftspeople. We’re home to a wood and textile workshop, 3D printers and laser cutter, electronics, crafts and fine arts stations. </p>
            <p className="md:m-4">We are a volunteer-run non-profit (501c3 status pending), and host <a href="https://www.meetup.com/sequoia-fabrica-community-workshop-and-classes/">classes, events and workshop hours</a> open to the public. </p>
    
            <p className="md:m-4">We offer <a href="https://sequoiafabrica.org/docs/membership">memberships</a> for makers and families who want to access the space and equipment outside of classes. Want to teach a class or organize an event at Sequoia? Please contact us.
</p>
          </div>
        <div className="col-span-1">
          <h2>Visit and Learn a New Skill</h2>
          <p className="md:m-4">We will be opening to the public gradually from February 17. Sign-up <a href="https://www.meetup.com/sequoia-fabrica-community-workshop-and-classes/">for a visit or a class</a>.</p>
        </div>  
        <div className="col-span-1">
          <h2 className="text-center">Stay in Touch!</h2>
          <div className=""></div><div dangerouslySetInnerHTML={{ __html: mailchimpSanitized }} />
          <p><a href="https://instagram.com/sequoia.fabrica">Instagram</a>, <a href="https://sfba.social/@sequoiafabrica">Mastodon</a></p>
          <p><a href="/docs/membership">Become a member</a></p>
        </div>  

      
        <h2 className="text-center">Donations</h2>
        <p className="md:m-4">Please visit our <a href="http://opencollective.com/sequoia-fabrica">donations page</a> on Open Collective to donate to our organization. We are a California Public Benefit Corporation and have filed an application for 501(c)(3) status with the IRS. Our application is pending. If this is approved your <a href="https://www.irs.gov/charities-non-profits/charitable-organizations/contributions-to-organization-with-irs-application-pending">contribution may be tax-deductible</a>.</p>

        
        <h2 className="text-center">Code of Conduct</h2>
        <p className="md:m-4">We have a <a href="/docs/code_of_conduct">Code of Conduct</a> that is required reading for all members. Anyone involved either in classes or otherwise is expected to review this.</p>
      </div>
    </div>
  )
}
