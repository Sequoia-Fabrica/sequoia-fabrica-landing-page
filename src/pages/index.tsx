import DOMPurify from "isomorphic-dompurify";
import Logo from "@/src/components/Logo/Logo";
import NavigationBar from "../components/NavigationBar/NavigationBar";

export default function Home() {

  const tinyLetterHTML = `<form style="border:1px; margin-left:20%; margin-right:20%; solid #ccc;padding:3px;text-align:center;" action="https://tinyletter.com/sequoiafabrica" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/sequoiafabrica', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"><p><input type="text" style="width:200px" name="email" id="tlemail" placeholder="email address"/></p><input type="hidden" value="1" name="embed"/><input type="submit" value="Subscribe" /></form>`;
  const tinyLetterSanitized = DOMPurify.sanitize(tinyLetterHTML);
  

  return (
    <div className="App">
      <div className="About m-4 md:m-16">
        <h2 className="text-center">Upcoming Events</h2>
        <p className="md:m-4">Our events are visible on our <a href="https://www.meetup.com/sequoia-fabrica-community-workshop-and-classes/">Meetup page</a>.</p>

        <h2 className="text-center">Our Mission</h2>
        <p className="md:m-4">We aim to provide a space to disseminate knowledge and craftsmanship skills to a diverse community of people working in multiple disciplines of interest</p>
        <p className="md:m-4">Sequoia Fabrica (or SeqFab) grew out of other San Francisco makerspaces and hackerspaces with the intention of creating a space focused on building tangible projects through wood, textiles, and electronics. We expect the space to continually undergo change as it ages and welcomes new community members</p>

        <h2 className="text-center">Mailing List</h2>
        <p className="md:m-4">Want to learn more about our space and hear updates on our search for a physical home? Join our mailing list below!</p>
        <div dangerouslySetInnerHTML={{ __html: tinyLetterSanitized }} />

        <h2 className="text-center">Membership Opportunities</h2>
        <p className="md:m-4">We will be open to the general public for regular, hosted events and workshops. If you’d like access to the space or use our equipment at other times, you should become a member!</p>
        <p className="md:m-4">We’re aiming for standard monthly dues similar to other Bay Area workshops, about $100 a month. We are committed to serving our community and want to ensure no one is turned away from tools and knowledge due to lack of funds.</p>

        <h2 className="text-center">Donations</h2>
        <p className="md:m-4">Please visit our <a href="http://opencollective.com/sequoia-fabrica">donations page</a> on Open Collective to donate to our organization. We are a California Public Benefit Corporation and have filed an application for 501(c)(3) status with the IRS. Our application is pending. If this is approved your <a href="https://www.irs.gov/charities-non-profits/charitable-organizations/contributions-to-organization-with-irs-application-pending">contribution may be tax-deductible</a>.</p>

        <h2 className="text-center">Location</h2>
        <p className="md:m-4">We are in the process of securing a space for our community. The space will be in San Francisco</p>
        
        <h2 className="text-center">Code of Conduct</h2>
        <p className="md:m-4">We have a <a href="/docs/code_of_conduct">Code of Conduct</a> that is required reading for all members. Anyone involved either in classes or otherwise is expected to review this.</p>
      </div>
    </div>
  )
}
