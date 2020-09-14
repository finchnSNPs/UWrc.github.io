import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./styles.module.css";

import * as PageContent from "../pageContent";
import Splash from "./components/Splash";
import HomeSection from "./components/HomeSection";
import StatContainer from "./components/StatContainer";


export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout
      title={PageContent.HEAD_TITLE}
      description={PageContent.HEAD_DESC}
    >
      <Splash
        logo={siteConfig.customFields.Graphics.SPLASH_LOGO}
        tagline={siteConfig.tagline}
        leftImgs={siteConfig.customFields.Graphics.SplashArt.LEFT}
        rightImgs={siteConfig.customFields.Graphics.SplashArt.RIGHT}
      />
      <StatContainer statItems={PageContent.STAT_ITEMS} />
      <HomeSection
        header={PageContent.HomePage.UserInterface.HEADER}
        imgs={siteConfig.customFields.Graphics.INTERFACES}
        content={PageContent.HomePage.UserInterface.SECTIONS}
      />
      <HomeSection
        header={PageContent.HomePage.ProgrammingLangs.HEADER}
        imgs={siteConfig.customFields.Graphics.PROGRAMMING_LANGS}
        content={PageContent.HomePage.ProgrammingLangs.SECTIONS}
      />
      <HomeSection
        header={PageContent.HomePage.AppStore.HEADER}
        imgs={siteConfig.customFields.Graphics.APP_STORE}
        content={PageContent.HomePage.AppStore.SECTIONS}
      />
      <HomeSection
        header={PageContent.HomePage.Help.HEADER}
        imgs={siteConfig.customFields.Graphics.CONTACT}
        content={PageContent.HomePage.Help.SECTIONS}
      />
      <HomeSection
        header={PageContent.HomePage.BuiltWith.HEADER}
        imgs={siteConfig.customFields.Graphics.BUILT_WITH}
      />
      <HomeSection
        header={PageContent.HomePage.PoweredBy.HEADER}
        imgs={siteConfig.customFields.Graphics.POWERED_BY}
      />
    </Layout>
  );
}
