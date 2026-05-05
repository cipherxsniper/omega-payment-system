import express from "express";
import { createPaymentIntent } from "../services/stripeService.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const { amount } = req.body;

    const payment = await createPaymentIntent(amount);

    res.json({
      clientSecret: payment.client_secret,
      id: payment.id
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
