import { mountPage } from "../main";
import {
  ctaSection,
  faqSection,
  heroSection,
  marketsSection,
  processSection,
  productsSection,
  proofStripSection,
  teamSection,
  teamModalMarkup,
  testimonialsSection
} from "../components/sections";

mountPage(
  "home",
  `${heroSection()}${processSection()}${productsSection()}${proofStripSection()}${marketsSection()}${teamSection()}${testimonialsSection()}${ctaSection("global1")}${faqSection()}`,
  teamModalMarkup()
);
