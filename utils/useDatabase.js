import { supabaseAdmin } from './supabase-admin';
import { stripe } from './stripe';
import { toDateTime } from './helpers';
import Stripe from 'stripe';

import axios from 'axios';

// This entire file should be removed and moved to supabase-admin
// It's not a react hook, so it shouldn't have useDatabase format
// It should also properly catch and throw errors


const checkOut = async (data) => {
  
  
  const { info, err } = await supabaseAdmin
  .from('pending_reservations')
  .update({ status: 'Payedd', payment_method: 'Stripe' })
  .match({ id: data.metadata.id })
  
  
}



export { checkOut };
