import React from "react";

const heading = 'Designed and Built by Caden Chen';


const design1 = 'Figma'
const design1Link = 'https://www.figma.com/file/LtM3Uo7Bd15BFHyZIceQXT/Caden-Linktree?type=design&node-id=1%3A29&mode=design&t=HYxCfWs1Teon1L6g-1'
const design2 = 'Github'
const design2Link = 'https://github.com/Caden0002/portfolioLink'

function Footer(props) {
    return (
        <div className="mt-24 bg-black h-full w-full">
            <div id="Footer" className="flex flex-col items-center p-8">
                <div className="font-mono text-xs text-neutral-50 text-center z-10">
                    {heading}
                </div>
                {/* Line break */}
                <div className="flex items-center space-x-2">
                    <a href={design1Link} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-neutral-50 hover:text-neutral-400 text-center z-10">
                        {design1}
                    </a>
                    <span className="text-neutral-50">•</span>
                    <a href={design2Link} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-neutral-50 hover:text-neutral-400 text-center z-10">
                        {design2}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
