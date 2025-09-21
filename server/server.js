import express from "express";
import cors from "cors";
import mercadopago from "mercadopago";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const MERCADOPAGO_ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN;

app.use(express.json());
app.use(cors());

mercadopago.configure({
  access_token: MERCADOPAGO_ACCESS_TOKEN,
});

app.post("/create_preference", function (req, res) {
  const items = req.body.items.map((item) => {
    return {
      title: item.title,
      unit_price: Number(item.price),
      quantity: Number(item.quantity),
    };
  });
  const preference = {
    items,
    back_urls: {
      success: "https://ecommerce-mate-arg.vercel.app/",
      failure: "https://ecommerce-mate-arg.vercel.app/",
      pending: "",
    },
    auto_return: "approved",
  };

  console.log("Preference:", preference);

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).json({ error: "Error al crear la preferencia de pago" });
    });
});

app.listen(8080, () => {
  console.log("The server is now running on Port 8080");
});
