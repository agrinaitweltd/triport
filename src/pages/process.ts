import { mountPage } from "../main";
import { ctaSection, processSection, quoteSection } from "../components/sections";

mountPage("process", `${processSection()}${ctaSection("global4")}${quoteSection()}`);
