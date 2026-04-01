import { mountPage } from "../main";
import { faqSection, quoteSection } from "../components/sections";

mountPage("faq", `${faqSection()}${quoteSection()}`);
