import { mountPage } from "../main";
import { ctaSection, productsSection, quoteSection } from "../components/sections";

mountPage("products", `${productsSection()}${ctaSection("global3")}${quoteSection()}`);
