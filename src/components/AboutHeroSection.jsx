import { AboutUs } from "./AboutUs";
import { FoundingMember } from "./FoundingMember";
import { KlfBuildingBloks } from "./KLFbuildingBlocks";

export function AboutHeroSection(){
    return(
    <div>
        <AboutUs/>
        <FoundingMember/>
        <KlfBuildingBloks/>
    </div>
    )
}