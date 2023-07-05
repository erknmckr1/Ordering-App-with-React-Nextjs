import dbConnect from "@/util/dbConnect";
import Footer from "@/models/Footer";

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
        const res = await Footer.find();
        res.status(200).json(res)
    } catch (error) {
      console.log(error);
    }
  }


  if(method === "POST"){
    try{
        const newFooter = await Footer.create(req.body);
        res.status(200).json(newFooter)
    }catch(err){
        console.log(err)
    }
  }
};

export default handler;
