import { mountPage } from "../main";
import { ctaSection, productsSection, faqSection } from "../components/sections";

mountPage("retail", `${productsSection()}${ctaSection("global2")}${faqSection()}`);
