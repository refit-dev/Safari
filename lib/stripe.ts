import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion : "2026-09-30.endive",
    typescript : true,
    appInfo : {
        name : "Safari",
        version : "1.0",
    }
});
