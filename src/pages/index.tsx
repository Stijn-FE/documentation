// SPDX-FileCopyrightText: 2021 iteratec GmbH
//
// SPDX-License-Identifier: Apache-2.0

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useThemeContext from "@theme/hooks/useThemeContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import FlipCard from "../components/FlipCard";
import Integration from "../components/Integration";
import Section from "../components/Section";
import styles from "../css/styles.module.scss";
import { Hooks, Scanners } from "../integrations";
import Sections from "../layouts/Sections";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const ScannerIntegrations = () => {
  return (
    <div className="container">
      <h3>Scanners</h3>
      <section className={styles.integrations}>
        {Scanners.map((props, idx) => (
          <Integration key={idx} {...props} />
        ))}
      </section>
    </div>
  );
};

const HookIntegrations = () => {
  return (
    <div className="container">
      <h3>Hooks</h3>
      <section className={styles.integrations}>
        {Hooks.map((props, idx) => (
          <Integration key={idx} {...props} />
        ))}
      </section>
    </div>
  );
};

const ThemedImage = ({ lightImgSrc, darkImgSrc }) => {
  const { isDarkTheme } = useThemeContext();
  return <img src={isDarkTheme ? darkImgSrc : lightImgSrc} />;
};

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig } = context;

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <h1>
            Identify vulnerabilities in your Network and Applications with the
            first of its kind Open-Source Multi-Scanner Platform.
          </h1>
          <p className={styles.description}>
            secureCodeBox is an automated and scalable Open-Source solution that
            integrates multiple security scanners with a simple and lightweight
            interface – for continuous and automated security testing.
          </p>
          <Link
            className={clsx(
              "button button--outline button--secondary button--lg",
              styles.getStarted
            )}
            to={useBaseUrl("docs/getting-started/installation")}
          >
            Get Started
          </Link>
        </div>
      </header>
      <main>
        <Sections>
          <Section
            title="Automated Security Testing"
            subtitle="Use the power of leading open-source security testing tools to run routine scans continuously and automatically on your network or application."
            alignment="center"
          >
            <FlipCard />
          </Section>
          <Section
            title="Security Use Cases"
            subtitle="Flexible configuration options make it possible to apply the secureCodeBox to a wide range of use cases, addressing security professionals as well as DevOps Teams. Discover the possibilities:"
          >
            <Accordion
              allowZeroExpanded={true}
              allowMultipleExpanded={false}
              className={styles.accordion}
            >
              <AccordionItem className={styles.accordionItem}>
                <AccordionItemHeading>
                  <AccordionItemButton className={styles.accordionButton}>
                    For Dev-Teams
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>...</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className={styles.accordionItem}>
                <AccordionItemHeading>
                  <AccordionItemButton className={styles.accordionButton}>
                    For Ops-Teams
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>...</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className={styles.accordionItem}>
                <AccordionItemHeading>
                  <AccordionItemButton className={styles.accordionButton}>
                    For Sec-Teams
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>...</p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </Section>
          <Section
            title="Your Go-to Solution for easy Security Scanning"
            subtitle="Flexible configuration options make it possible to apply the secureCodeBox to a wide range of use cases, addressing security professionals as well as DevOps Teams. Discover the possibilities:"
          >
            <div />
          </Section>
          <Section
            title="Multi Scanner Security Platform"
            subtitle="Combining more than 15 leading Open-Source Scanning Tools secureCodeBox covers a broad spectrum of possible threats and vulnerabilities for your network and applications; ranging from Kubernetes vulnerabilities, over SSL misconfigurations, to network authentication bruteforcing and many more:"
            alignment="center"
          >
            <ScannerIntegrations />
            <HookIntegrations />
          </Section>
          <Section
            title="About us"
            subtitle="secureCodeBox is an Open-Source project in cooperation with OWASP and with friendly support from iteratec."
          >
            <div />
          </Section>
          <Section title="Partners" alignment="center">
            <div className={styles.partners}>
              <ThemedImage
                lightImgSrc="static/img/Logo_Black.svg"
                darkImgSrc="static/img/Logo_White.svg"
              />
              <ThemedImage
                lightImgSrc="static/img/Logo_Black.svg"
                darkImgSrc="static/img/Logo_White.svg"
              />
              <ThemedImage
                lightImgSrc="static/img/Logo_Black.svg"
                darkImgSrc="static/img/Logo_White.svg"
              />
            </div>
          </Section>
        </Sections>
      </main>
    </Layout>
  );
}

export default Home;
