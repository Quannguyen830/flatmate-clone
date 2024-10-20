import React from "react";
import FacebookIcon from "../Logo/FacebookLogo";
import InstagramIcon from "../Logo/InstagramLogo";
import Logo from "../Logo/Logo";
import MortgageChoiceLogo from "../Logo/MortageChoiceLogo";
import PropertyLogo from "../Logo/PropertyLogo";
import PropTrackLogo from "../Logo/PropTrackLogo";
import REAGroupLogo from "../Logo/REAGroupLogo";
import RealCommercialLogo from "../Logo/RealCommercialLogo";
import SmartlineLogo from "../Logo/SmartlineLogo";
import TwitterIcon from "../Logo/TwitterLogo";
import RealEstateLogo from "../Logo/RealEstateLogo";

const Footer = () => {
    return (
        <footer className="bg-[#2f3a4a] min-h-[336px] mt-8 leading-6 m-0 p-0">
            <div className="pt-6 pr-6 pb-16 pl-6 max-w-[1200px] mx-auto">
                <a href="#">
                    <span className="text-center block">
                        <Logo />
                    </span>
                </a>

                <div className="text-base text-white">
                    <div className="flex flex-wrap">
                        <div className="w-[464px] pr-16 mb-0">
                            <p className="font-medium">
                                Flatmates.com.au is a peer-to-peer listing site for those looking for shared homes or those looking for a flatmate. Simply create a listing, search, and connect.
                            </p>
                        </div>

                        <div className="w-[370px] pr-16 mb-0 text-base leading-7 font-normal">
                            <ul className="flex flex-wrap justify-between w-full list-none quick-link">
                                <li className="w-1/2"><a href="#"><span>About us</span></a></li>
                                <li className="w-1/2"><a href="#"><span>Privacy policy</span></a></li>
                                <li className="w-1/2"><a href="#"><span>How it works</span></a></li>
                                <li className="w-1/2"><a href="#"><span>Terms & Conditions</span></a></li>
                                <li className="w-1/2"><a href="#"><span>Info</span></a></li>
                                <li className="w-1/2"><a href="#"><span>FAQ & Contact</span></a></li>
                            </ul>
                        </div>

                        <div className="mb-0">
                            <h3 className="mb-4">Connect with us on:</h3>
                            <ul className="flex space-x-6 logo-list items-center">
                                <li>
                                    <a href="#">
                                        <FacebookIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <InstagramIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <TwitterIcon />
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="mt-8 mb-6">
                        <ul className="partner-list list-none flex flex-row">
                            <li><a href="#"><span><REAGroupLogo /></span></a></li>
                            <li><a href="#"><span><RealEstateLogo /></span></a></li>
                            <li><a href="#"><span><RealCommercialLogo /></span></a></li>
                            <li><a href="#"><span><PropTrackLogo /></span></a></li>
                            <li><a href="#"><span><MortgageChoiceLogo /></span></a></li>
                            <li><a href="#"><span><SmartlineLogo /></span></a></li>
                            <li><a href="#"><span><PropertyLogo /></span></a></li>
                        </ul>
                    </div>

                    <div className="mt-8">
                        <p className="text-sm">
                            Flatmates.com.au is owned and operated by ASX-listed REA Group Ltd (REA:ASX) © REA Group Ltd.
                        </p>
                    </div>

                    <hr className="border-t border-[#abb0b6] my-8" />

                    <div className="mt-4">
                        <p className="text-sm">
                            In the spirit of reconciliation, Flatmates.com.au acknowledges the Traditional Custodians of Country throughout Australia and their connections to land, sea, and community. We pay our respects to their Elders past, present, and emerging.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;