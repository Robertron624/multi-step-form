export const FORM_STEPS = [
    {
        label: "1",
    },
    {
        label: "2",
    },
    {
        label: "3",
    },
    {
        label: "4",
    },
];

export interface Plan {
    id: string;
    name: string;
    price: {
        monthly: number;
        yearly: number;
    };
    yearlyDiscount: string;
    iconUrl: string;
}

export const PLANS: Plan[] = [
    {
        id: "arcade",
        name: "Arcade",
        price: {
            monthly: 9,
            yearly: 90,
        },
        yearlyDiscount: "2 months free",
        iconUrl: "/icon-arcade.svg"
    },
    {
        id: "advanced",
        name: "Advanced",
        price: {
            monthly: 12,
            yearly: 120,
        },
        yearlyDiscount: "2 months free",
        iconUrl: "/icon-advanced.svg"
    },
    {
        id: "pro",
        name: "Pro",
        price: {
            monthly: 15,
            yearly: 150,
        },
        yearlyDiscount: "2 months free",
        iconUrl: "/icon-pro.svg"
    },
];

export type Addon = {
    id: string;
    name: string;
    price: {
        monthly: number;
        yearly: number;
    };
    feature: string;
};

export const ADDONS = [
    {
        id: "online-service",
        name: "Online Service",
        price: {
            monthly: 1,
            yearly: 10,
        },
        feature: "Access to multiplayer games",
    },
    {
        id: "larger-storage",
        name: "Larger Storage",
        price: {
            monthly: 2,
            yearly: 20,
        },
        feature: "Extra 1TB of cloud save",
    },
    {
        id: "customizable-profile",
        name: "Customizable Profile",
        price: {
            monthly: 2,
            yearly: 20,
        },
        feature: "Custom theme on your profile",
    },
]