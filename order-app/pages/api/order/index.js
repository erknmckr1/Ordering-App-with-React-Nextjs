import dbConnect from "@/util/dbConnect";
import Order from "@/models/Order";

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
      const order = await Order.find();
      res.status(200).json(order);
    } catch (err) {
      console.log(err);
    }
  }

  if (method === "POST") {
    try {
      const newOrder = await Order.create(req.body);
      res.status(200).json(newOrder);
      console.log("İşlem başarılı");
    } catch (err) {
      console.log(err);
    }
  }
};

export default handler;
