
import { dbConnect } from "@/lib/dbConnect";

const mangoesData = [
  {
    id: 1,
    name: "Harivanga (A Grade)",
    description: "Naturally sweet & juicy",
    price: "1kg - 250tk",
    image: "/images/harivanga-a.jpg"
  },
  {
    id: 2,
    name: "Harivanga (B Grade)",
    description: "Great taste, best value",
    price: "1kg - 200tk",
    image: "/images/harivanga-b.jpg"
  },
  {
    id: 3,
    name: "Harivanga (Premium)",
    description: "Extra large & extra sweet",
    price: "1kg - 150tk",
    image: "/images/harivanga-premium.jpg"
  },
  {
    id: 4,
    name: "Harivanga (Mini Box)",
    description: "Perfect for small family",
    price: "1kg - 100tk",
    image: "/images/harivanga-mini.jpg"
  }
];

export async function POST(request){
    const newMango = await request.json();
    // console.log(newMango);
    const mangoesRes=await dbConnect("mangoes");
    const res = await mangoesRes.insertOne(newMango);

    return Response.json({
        message:"Mango Added Successfully!",
       mango: res,
    })
}

export async function GET(request){
    const mangoesRes = await dbConnect("mangoes");
    const mangoes = await mangoesRes.find({}).toArray();
    return Response.json({
        mangoes,
        message: " Mangoes Data Collected"
    })
}