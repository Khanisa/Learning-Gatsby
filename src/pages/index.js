import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/hero";
import JobCard from "../components/jobCard";

const IndexPage = () => (
  <Layout>
    {/* <Seo title="Home" /> */}
    <Seo title="Employment Agency in Zurich" />
    <div className="homePage">
      <Hero 
        heroText="Recruitment Experts That Care." 
        heroImage="https://iet.ch/uploads/transforms/4ff0c9e5feb5093c616e26b18b51f3ef/1090/IET-Home_6c0c164bd2b597ee32b68b8b5755bd2e.png"
        heroSrcSet="https://iet.ch/uploads/transforms/4ff0c9e5feb5093c616e26b18b51f3ef/1090/IET-Home_616b2c32fb7bb9679ad560fc61635847.png 400w, https://iet.ch/uploads/transforms/4ff0c9e5feb5093c616e26b18b51f3ef/1090/IET-Home_5ae402c9837860cd6e4f65e304b3a5fa.png 800w, https://iet.ch/uploads/transforms/4ff0c9e5feb5093c616e26b18b51f3ef/1090/IET-Home_6c0c164bd2b597ee32b68b8b5755bd2e.png 1200w" />

      <div className="homePage__jobs">
          <div className="homePage__jobs--container">
            <div className="homePage__jobs--headerText">
              <h2 className="headerText">Find your ideal job today.</h2>
            </div>
            <div>
              <JobCard 
                refNo="7465"
                jobLink="https://iet.ch/jobs/senior-business-analyst-data-management"
                jobTitle="Senior Business Analyst - Data Management"
                jobType="Contract"
                jobLocation="Zurich"
              />
            </div>
          </div>
      </div>
    </div>
    
  </Layout>
)

export default IndexPage
