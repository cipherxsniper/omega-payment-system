import express from "express";
import dotenv from "dotenv";
import paymentRoutes from "./routes/paymentRoutes.js";
import stripeWebhook from "./webhooks/stripeWebhook.js";

dotenv.config();

const app = express();

// normal routes
app.use(express.json());
app.use("/api/payments", paymentRoutes);

// webhook MUST use raw body
app.use("/webhook", stripeWebhook);

// Render dynamic port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Omega payment system running on port", PORT);
});
