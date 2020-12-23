import config from '../config';
import mailgun from 'mailgun.js';

const API_KEY = config('MAILGUN_API_KEY');
const API_URL = config('MAILGUN_API_URL');
const DOMAIN = config('MAILGUN_DOMAIN');
const FROM = config('MAILGUN_FROM') || `<noreply@${DOMAIN}>`;

const mg =  mailgun({apiKey: API_KEY, domain: DOMAIN, url: API_URL});

export function sendMail({subject, to, text, html}) {
    return mg.messages()
        .create({
            from: FROM,
            to,
            subject,
            text,
            html
        });
}