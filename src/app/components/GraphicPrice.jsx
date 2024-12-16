import { div } from "framer-motion/client";
import React from "react";

const GraphicPrice = () => {
    const graphicPlans = [
        // Monthly Plans
        [
            {
                name: "Starter Creative Plan",
                price: 1700,
                features: [
                    {
                        title: "Eye-Catching Graphics",
                        description: "Up to 25 designs/month (ads, social media, or branding)"
                    },
                    {
                        title: "Engaging Videos",
                        description: "Up to 5 professional edits/month tailored to captivate."
                    }
                ]
            },
            {
                name: "Growth Creative Plan",
                price: 2500,
                features: [
                    {
                        title: "Custom Visuals",
                        description: "Up to 50 stunning designs/month"
                    },
                    {
                        title: "High-Impact Videos",
                        description: "Up to 10 expertly crafted edits/month from ads to explainer."
                    }
                ]
            },
            {
                name: "Premium Creative Plan",
                price: 4000,
                features: [
                    {
                        title: "Unlimited Design Requests",
                        description: "Rapid delivery for all your visual needs"
                    },
                    {
                        title: "High-Volume Video Edits",
                        description: "Up to 15 edits/month, from promos to motion graphics."
                    }
                ]
            }
        ],
    
        // Project-Based Plans
        [
            {
                name: "Basic Creative Plan",
                price: 1700,
                features: [
                    {
                        title: "Eye-Catching Graphics",
                        description: "Up to 25 designs/month (ads, social media, or branding)"
                    },
                    {
                        title: "Engaging Videos",
                        description: "Up to 5 professional edits/month tailored to captivate."
                    }
                ]
            },
            {
                name: "Standard Creative Plan",
                price: 3000,
                features: [
                    {
                        title: "Custom Visuals",
                        description: "Up to 50 stunning designs/month"
                    },
                    {
                        title: "High-Impact Videos",
                        description: "Up to 10 expertly crafted edits/month from adds to explainer."
                    }
                ]
            },
            {
                name: "Advanced Creative Plan",
                price: 6000,
                features: [
                    {
                        title: "Unlimited Design Requests",
                        description: "Rapid delivery for all your visual needs"
                    },
                    {
                        title: "High-Volume Video Edits",
                        description: "Up to 10 edits/month, from promos to motion graphics."
                    }
                ]
            },
            // You can add more project-based plans here if needed
        ]
    ];
    
    const webPlans = [
        // Project-Based Plans
        [
            {
                name: "Basic Website Plan",
                price: 4500,
                features: [
                    {
                        title: "Clean, Modern Design",
                        description: "A professional online showcase that wows."
                    },
                    {
                        title: "SEO Foundation",
                        description: "Optimized to help you rank from day one."
                    },
                    {
                        title: "Custom Website",
                        description: "5-7 page custom website tailored to your brand."
                    }
                ]
            },
            {
                name: "Standard Website Plan",
                price: 6500,
                features: [
                    {
                        title: "Custom Pages",
                        description: "10-page custom website tailored to your brand."
                    },
                    {
                        title: "Mobile-First Design",
                        description: "Perfect performance across all devices."
                    },
                    {
                        title: "SEO and Speed Optimized",
                        description: "For maximum impact."
                    },

                ]
            },
            {
                name: "Advanced Website Plan",
                price: 10000,
                features: [
                    {
                        title: "E-commerce or Enterprise Website",
                        description: "with advanced integrations."
                    },
                    {
                        title: "Tailored Features",
                        description: "Payment gateway, custom APIs, or bespoke tools."
                    },
                    {
                        title: "SEO Mastery",
                        description: "Ensure your site ranks above your competitors."
                    },
                ]
            },
            // You can add more project-based plans here if needed
        ]
    ];

    const allPlans = [
        // Monthly Plans
        [
            {
                name: "Starter All Services Plan",
                price: 2720,
                features: [
                    {
                        title: "Eye-Catching Graphics",
                        description: "Up to 10 designs/month (ads, social media, or branding)"
                    },
                    {
                        title: "SEO Foundation",
                        description: "Optimized to help you rank from day one."
                    },
                    {
                        title: "Dynamic Updates",
                        description: "5 updates/month to keep your site fresh and engaging."
                    }
                ]
            },
            {
                name: "Growth All Services Plan",
                price: 4000,
                features: [
                    {
                        title: "Weekly Maintenance",
                        description: "Security, performance, and SEO updates ensure uninterrupted excellence."
                    },
                    {
                        title: "Custom Visuals",
                        description: "Up to 25 stunning designs/month."
                    },
                    {
                        title: "High-Impact Videos",
                        description: "5 expertly crafted edits/month from adds to explainer."
                    },

                ]
            },
            {
                name: "Advance All Services Plan",
                price: 6400,
                features: [
                    {
                        title: "Unlimited Design Requests",
                        description: "Rapid delivery for all your visual needs."
                    },
                    {
                        title: "High-Volume Video Edits",
                        description: "Up to 15 edits/month, from promos to motion graphics."
                    },
                    {
                        title: "Unlimited Updates",
                        description: "No limits to how much we support your site's growth."
                    },
                ]
            },
            // You can add more project-based plans here if needed
        ],
        // Project-based Plans
        [
            {
                name: "Basic All Services Plan",
                price: 3760,
                features: [
                    {
                        title: "Eye-Catching Graphics",
                        description: "Up to 10 designs/month (ads, social media, or branding)"
                    },
                    {
                        title: "SEO Foundation",
                        description: "Optimized to help you rank from day one."
                    },
                    {
                        title: "Dynamic Updates",
                        description: "5 updates/month to keep your site fresh and engaging."
                    }
                ]
            },
            {
                name: "Standard All Services Plan",
                price: 6800,
                features: [
                    {
                        title: "Weekly Maintenance",
                        description: "Up to 25 stunning designs/month."
                    },
                    {
                        title: "High-Impact Videos",
                        description: "6 expertly crafted edits/month from adds to explainer."
                    },
                    

                ]
            },
            {
                name: "Advance All Services Plan",
                price: 11600,
                features: [
                    {
                        title: "Unlimited Design Requests",
                        description: "Rapid delivery for all your visual needs."
                    },
                    {
                        title: "High-Volume Video Edits",
                        description: "Up to 15 edits/month, from promos to motion graphics."
                    },
                    {
                        title: "Unlimited Updates",
                        description: "No limits to how much we support your site's growth."
                    },
                ]
            },
            // You can add more project-based plans here if needed
        ]
    ];

    return (
        <section className="page-intro section-padding">
            <div className="container">
                {/* graphics */}
                <div className="flex flex-col gap-12 mb-32">
                    <div className="valign">
                        <div className="content md-mb50">
                            <h6 className="sub-title main-color mb-15 text-xl font-bold">Choose You Plan</h6>
                            <h3 className="fw-600 mb-30 text-6xl">
                                Graphic <span className="fw-300">Design</span> + Video Editing
                            </h3>
                            <p className="text-4xl">
                                Monthly Retainer Plans
                            </p>
                            {/* <a href="page-contact.html" className="butn butn-md butn-bord radius-30 mt-40">
                        <span>Let's Contact</span>
                    </a> */}
                        </div>
                    </div>

                    <div className="">
                        <div className="services">
                            <div className="grid grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3 gap-4">

                                {graphicPlans[0].map((plan, index) => (
                                    <div key={index} className="mb-2 d-flex">
                                        <div className="border border-gray-700 p-10 rounded-md relative show-element">
                                            {/* Plan Header */}
                                            <div className="border-b-2 border-gray-800 pb-6">
                                                <span className="text-4xl text-white font-bold">{plan.name}</span>
                                            </div>

                                            {/* Pricing */}
                                            <div className="flex gap-1 mt-12">
                                                <span className="text-4xl font-bold text-blue-700">$</span>
                                                <span className="text-7xl font-bold text-white">{plan.price}</span>
                                                <span className="mt-8 text-blue-700 text-xl">/month</span>
                                            </div>

                                            {/* Features */}
                                            <div className="mt-12">
                                                {plan.features.map((feature, idx) => (
                                                    <div key={idx} className="flex gap-4 items-center mb-6">
                                                        <svg
                                                            aria-hidden="true"
                                                            className="w-6 h-6 text-blue-700 flex-shrink-0"
                                                            fill="currentColor"
                                                            viewBox="0 0 512 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                                                        </svg>
                                                        <p className="text-slate-100">
                                                            {feature.title}: <span>{feature.description}</span>
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="p-10">

                                            </div>
                                            {/* Button */}
                                            <div className="mt-10 absolute bottom-0 left-5 right-0 p-5">
                                                <a
                                                    type="button"
                                                    className="flex gap-2 items-center justify-center avail-btn border p-3"
                                                >
                                                    <span className="text-md font-bold">Avail Now </span>
                                                    <i class="fa-solid fa-arrow-up-right"></i>
                                                    
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                    <div className="">
                        <h1 className="text-4xl mb-6">Project-Based Plans</h1>
                        <div className="services">
                            <div className="grid grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3 gap-4">

                                {graphicPlans[1].map((plan, index) => (
                                    <div key={index} className="mb-2 d-flex">
                                        <div className="border border-gray-700 p-10 rounded-md relative show-element">
                                            {/* Plan Header */}
                                            <div className="border-b-2 border-gray-800 pb-6">
                                                <span className="text-4xl text-white font-bold">{plan.name}</span>
                                            </div>

                                            {/* Pricing */}
                                            <div className="flex gap-1 mt-12">
                                                <span className="text-4xl font-bold text-blue-700">$</span>
                                                <span className="text-7xl font-bold text-white">{plan.price}</span>
                                                <span className="mt-8 text-blue-700 text-xl">/month</span>
                                            </div>

                                            {/* Features */}
                                            <div className="mt-12">
                                                {plan.features.map((feature, idx) => (
                                                    <div key={idx} className="flex gap-4 items-center mb-6">
                                                        <svg
                                                            aria-hidden="true"
                                                            className="w-6 h-6 text-blue-700 flex-shrink-0"
                                                            fill="currentColor"
                                                            viewBox="0 0 512 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                                                        </svg>
                                                        <p className="text-slate-100">
                                                            {feature.title}: <span>{feature.description}</span>
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="p-10">

                                            </div>
                                            {/* Button */}
                                            <div className="mt-10 absolute bottom-0 left-5 right-0 p-5">
                                                <a
                                                    type="button"
                                                    className="flex gap-2 items-center justify-center avail-btn border p-3"
                                                >
                                                    <span className="text-md font-bold">Avail Now </span>
                                                    <i class="fa-solid fa-arrow-up-right"></i>
                                                    
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                </div>

                {/* Web */}
                <div className="flex flex-col gap-12 mb-32">
                    <div className="valign">
                        <div className="content md-mb50">
                            <h6 className="sub-title main-color mb-15 text-xl font-bold">Choose You Plan</h6>
                            <h3 className="fw-600 mb-30 text-6xl">
                                Web <span className="fw-300">Solutions</span>
                            </h3>
                            <p className="text-4xl">
                                Project-Based Plans
                            </p>
                            {/* <a href="page-contact.html" className="butn butn-md butn-bord radius-30 mt-40">
                        <span>Let's Contact</span>
                    </a> */}
                        </div>
                    </div>

                    <div className="">
                        <div className="services">
                            <div className="grid grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3 gap-4">

                                {webPlans[0].map((plan, index) => (
                                    <div key={index} className="mb-2 d-flex">
                                        <div className="border border-gray-700 p-10 rounded-md relative show-element">
                                            {/* Plan Header */}
                                            <div className="border-b-2 border-gray-800 pb-6">
                                                <span className="text-4xl text-white font-bold">{plan.name}</span>
                                            </div>

                                            {/* Pricing */}
                                            <div className="flex gap-1 mt-12">
                                                <span className="text-4xl font-bold text-blue-700">$</span>
                                                <span className="text-7xl font-bold text-white">{plan.price}</span>
                                                <span className="mt-8 text-blue-700 text-xl">/month</span>
                                            </div>

                                            {/* Features */}
                                            <div className="mt-12">
                                                {plan.features.map((feature, idx) => (
                                                    <div key={idx} className="flex gap-4 items-center mb-6">
                                                        <svg
                                                            aria-hidden="true"
                                                            className="w-6 h-6 text-blue-700 flex-shrink-0"
                                                            fill="currentColor"
                                                            viewBox="0 0 512 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                                                        </svg>
                                                        <p className="text-slate-100">
                                                            {feature.title}: <span>{feature.description}</span>
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="p-10">

                                            </div>
                                            {/* Button */}
                                            <div className="mt-10 absolute bottom-0 left-5 right-0 p-5">
                                                <a
                                                    type="button"
                                                    className="flex gap-2 items-center justify-center avail-btn border p-3"
                                                >
                                                    <span className="text-md font-bold">Avail Now </span>
                                                    <i class="fa-solid fa-arrow-up-right"></i>
                                                    
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                </div>

                {/* All */}
                <div className="flex flex-col gap-12 mb-32">
                    <div className="valign">
                        <div className="content md-mb50">
                            <h6 className="sub-title main-color mb-15 text-xl font-bold">Choose You Plan</h6>
                            <h3 className="fw-600 mb-30 text-6xl">
                            Graphic Design <span className="fw-300">+</span> Video Editing <span className="fw-300">+</span>
                            Web Solutions (All Services)
                            </h3>
                            <p className="text-4xl">
                                Monthly Retainer Plans <span className="text-color-primary-blue">20% OFF</span>
                            </p>
                            {/* <a href="page-contact.html" className="butn butn-md butn-bord radius-30 mt-40">
                        <span>Let's Contact</span>
                    </a> */}
                        </div>
                    </div>

                    <div className="">
                        <div className="services">
                            <div className="grid grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3 gap-4">

                                {allPlans[0].map((plan, index) => (
                                    <div key={index} className="mb-2 d-flex">
                                        <div className="border border-gray-700 p-10 rounded-md relative show-element">
                                            {/* Plan Header */}
                                            <div className="border-b-2 border-gray-800 pb-6">
                                                <span className="text-4xl text-white font-bold">{plan.name}</span>
                                            </div>

                                            {/* Pricing */}
                                            <div className="flex gap-1 mt-12">
                                                <span className="text-4xl font-bold text-blue-700">$</span>
                                                <span className="text-7xl font-bold text-white">{plan.price}</span>
                                                <span className="mt-8 text-blue-700 text-xl">/month</span>
                                            </div>

                                            {/* Features */}
                                            <div className="mt-12">
                                                {plan.features.map((feature, idx) => (
                                                    <div key={idx} className="flex gap-4 items-center mb-6">
                                                        <svg
                                                            aria-hidden="true"
                                                            className="w-6 h-6 text-blue-700 flex-shrink-0"
                                                            fill="currentColor"
                                                            viewBox="0 0 512 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                                                        </svg>
                                                        <p className="text-slate-100">
                                                            {feature.title}: <span>{feature.description}</span>
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="p-10">

                                            </div>
                                            {/* Button */}
                                            <div className="mt-10 absolute bottom-0 left-5 right-0 p-5">
                                                <a
                                                    type="button"
                                                    className="flex gap-2 items-center justify-center avail-btn border p-3"
                                                >
                                                    <span className="text-md font-bold">Avail Now </span>
                                                    <i class="fa-solid fa-arrow-up-right"></i>
                                                    
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                    <div className="">
                        <h1 className="text-4xl mb-12">Project-Based Plan <span className="text-color-primary-blue">20% OFF</span></h1>
                        <div className="services">
                            <div className="grid grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3 gap-4">

                                {allPlans[0].map((plan, index) => (
                                    <div key={index} className="mb-2 d-flex">
                                        <div className="border border-gray-700 p-10 rounded-md relative show-element">
                                            {/* Plan Header */}
                                            <div className="border-b-2 border-gray-800 pb-6">
                                                <span className="text-4xl text-white font-bold">{plan.name}</span>
                                            </div>

                                            {/* Pricing */}
                                            <div className="flex gap-1 mt-12">
                                                <span className="text-4xl font-bold text-blue-700">$</span>
                                                <span className="text-7xl font-bold text-white">{plan.price}</span>
                                                <span className="mt-8 text-blue-700 text-xl">/month</span>
                                            </div>

                                            {/* Features */}
                                            <div className="mt-12">
                                                {plan.features.map((feature, idx) => (
                                                    <div key={idx} className="flex gap-4 items-center mb-6">
                                                        <svg
                                                            aria-hidden="true"
                                                            className="w-6 h-6 text-blue-700 flex-shrink-0"
                                                            fill="currentColor"
                                                            viewBox="0 0 512 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                                                        </svg>
                                                        <p className="text-slate-100">
                                                            {feature.title}: <span>{feature.description}</span>
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="p-10">

                                            </div>
                                            {/* Button */}
                                            <div className="mt-10 absolute bottom-0 left-5 right-0 p-5">
                                                <a
                                                    type="button"
                                                    className="flex gap-2 items-center justify-center avail-btn border p-3"
                                                >
                                                    <span className="text-md font-bold">Avail Now </span>
                                                    <i class="fa-solid fa-arrow-up-right"></i>
                                                    
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                </div>

                
            </div>
        </section>
    )
}

export default GraphicPrice