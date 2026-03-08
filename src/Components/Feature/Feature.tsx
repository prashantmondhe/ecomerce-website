

import FeatureCard from "../FeatureCard/FeatureCard"; // 'C' capital केला आहे

import {
    LiaShippingFastSolid,
    LiaMoneyBillWaveSolid,
    LiaGiftSolid, // स्पेलिंग दुरुस्त केले (Gift)
} from "react-icons/lia";

import { FiPhoneCall } from "react-icons/fi";

// डेटा मध्ये ४था आयटम ऍड केला जेणेकरून ग्रिड पूर्ण भरेल
const data = [
    {
        title: "Free Shipping",
        icon: <LiaShippingFastSolid />
    },
    {
        title: "Best Price Guarantee",
        icon: <LiaMoneyBillWaveSolid />
    },
    {
        title: "Free Gift", 
        icon: <LiaGiftSolid />
    },
    {
        title: "Support 24/7",
        icon: <FiPhoneCall />
    },
];

const Feature = () => {
    return (
        <div className="container pt-16">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {data.map((el) => (
                    // इथे ket च्या जागी key केले आणि props मध्ये योग्य स्पेस दिला
                    <FeatureCard 
                        key={el.title} 
                        title={el.title} 
                        icon={el.icon} 
                    />
                ))}
            </div>
        </div>
    )
}

export default Feature;