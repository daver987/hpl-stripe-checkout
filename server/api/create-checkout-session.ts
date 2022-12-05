import { Stripe } from 'stripe'
import { Session } from '~/types/session'
import { Query } from '~/types/query'

const YOUR_DOMAIN = 'https://booking.highparklivery.com'
const stripeKey = useRuntimeConfig().stripeKey
const stripe = new Stripe(stripeKey, {
  apiVersion: '2022-11-15',
})

export default defineEventHandler(async (event) => {
  const query = (await getQuery(event)) as unknown as Query

  const customer = await stripe.customers.create({
    email: query.email,
    name: `${query.fname} ${query.lname}`,
  })
  const session = <Session>await stripe.checkout.sessions.create({
    billing_address_collection: 'auto',
    mode: 'setup',
    payment_method_types: ['card'],
    success_url: `${YOUR_DOMAIN}/success`,
    cancel_url: `${YOUR_DOMAIN}/cancel`,
    automatic_tax: { enabled: false },
    customer: customer.id,
  })
  console.log('session', session)
  return {
    statusCode: 200,
    url: session.url,
    customer: customer.id,
  }
})
