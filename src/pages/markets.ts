import { mountPage } from "../main";
import { ctaSection, marketsSection, quoteSection } from "../components/sections";

mountPage("markets", `${marketsSection()}${ctaSection("global1")}${quoteSection()}`);
