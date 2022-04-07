const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { price,  id, name, description, } = req.body;

  const transformedItems = [{
    description: `total Nights ${description}`, 
    quantity: 1,
    price_data: {
      currency: "usd",
      unit_amount: price * 100,
      product_data: {
        name: name,
        
      },
    },
  }];
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: transformedItems,
    mode: "payment",
    success_url: `https://www.solocienadventures.com/success`,
    cancel_url: `https://www.solocienadventures.com/account`,
    metadata: {
      
      id: id,
      

      
    },
  });
  res.status(200).json({ id: session.id })
};
