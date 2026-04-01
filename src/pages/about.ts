import { mountPage } from "../main";
import { aboutHeroSection, aboutSection, aboutValuesSection, ctaSection, marketsSection, processSection } from "../components/sections";

mountPage("about", `${aboutHeroSection()}${aboutSection()}${aboutValuesSection()}${marketsSection()}${processSection()}${ctaSection("global2")}`);
