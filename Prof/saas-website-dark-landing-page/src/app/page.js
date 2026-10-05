"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const Banner_1 = require("@/components/Banner");
const Navbar_1 = require("@/components/Navbar");
const Hero_1 = require("@/components/Hero");
const LogoTicker_1 = require("@/components/LogoTicker");
const Features_1 = require("@/components/Features");
const ProductShowcase_1 = require("@/components/ProductShowcase");
const FAQs_1 = require("@/components/FAQs");
const CallToAction_1 = require("@/components/CallToAction");
const Footer_1 = require("@/components/Footer");
function Home() {
    return (<>
      <Banner_1.Banner />
      <Navbar_1.Navbar />
      <Hero_1.Hero />
      <LogoTicker_1.LogoTicker />
      <Features_1.Features />
      <ProductShowcase_1.ProductShowcase />
      <FAQs_1.FAQs />
      <CallToAction_1.CallToAction />
      <Footer_1.Footer />
    </>);
}
