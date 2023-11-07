import DOMPurify from "dompurify";
import './App.css';

function App() {

    const tinyLetterHTML = `<form style="border:1px solid #ccc;padding:3px;text-align:center;" action="https://tinyletter.com/sequoiafabrica" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/sequoiafabrica', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"><p><label for="tlemail">Enter your email address</label></p><p><input type="text" style="width:140px" name="email" id="tlemail" /></p><input type="hidden" value="1" name="embed"/><input type="submit" value="Subscribe" /></form>`;
  const tinyLetterSanitized = DOMPurify.sanitize(tinyLetterHTML);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sequoia Fabrica</h1>
        <h2>A San Francisco Community Workshop</h2>
      </header>

      <div className="About">
      <h2>Upcoming Events</h2>

      <h2>Our Mission</h2>
      <p>We aim to provide a space to disseminate knowledge and craftsmanship skills to a diverse community of people working in multiple disciplines of interest</p>
      <p>Sequoia Fabrica (or SeqFab) grew out of other San Francisco makerspaces and hackerspaces with the intention of creating a space focused on building tangible projects through wood, textiles, and electronics. We expect the space to continually undergo change as it ages and welcomes new community members</p>

      <h2>Mailing List</h2>
      Want to learn more about our space and hear updates on our search for a physical home? Join our mailing list!
      <div dangerouslySetInnerHTML={{ __html: tinyLetterSanitized }} />

      <h2>Membership Opportunities</h2>
      <p>We will be open to the general public for regular, hosted events and workshops. If you’d like access to the space or use our equipment at other times, you should become a member!</p>
      <p>We’re aiming for standard monthly dues similar to other Bay Area workshops, about $100 a month. We are committed to serving our community and want to ensure no one is turned away from tools and knowledge due to lack of funds.</p>

      <h2>Donations</h2>
      <p>We are a California Public Benefit Corporation and have filed an application for 501(c)(3) status with the IRS. Our application is pending. If this is approved your <a href="https://www.irs.gov/charities-non-profits/charitable-organizations/contributions-to-organization-with-irs-application-pending">contribution may be tax-deductible</a>.</p>

      <h2>Location</h2>
      <p>We are in the process of securing a space for our community. The space will be in San Francisco</p>
      </div>
    </div>
  );
}

export default App;
