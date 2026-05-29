import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

const mangoesRes = await dbConnect("mangoes");

export async function GET(request,{params}){
    const {id} = await params;
     if (!id || id.length !== 24) {
            return Response.json({ status: 400, message: "send correct_id" }, { status: 400 });
        }

    const mango = await mangoesRes.findOne({_id: new ObjectId(id)});

    return Response.json({
        mango,
        message: " Mangoes Data Ok",
    })
}

export async function PATCH(request,{params}){
    const {id} = await params;
    const data = await request.json();

     if (!id || id.length !== 24) {
            return Response.json({ status: 400, message: "send correct_id" }, { status: 400 });
        }

        const filter = {_id: new ObjectId(id)}
        const updateDoc = {
            $set: data,
        }

    const mango = await mangoesRes.updateOne(filter, updateDoc);

    return Response.json({
        mango,
        message: " Mangoes Data Updated Successfully",
    })
}

export async function DELETE(request,{params}){
    const {id} = await params;
    const data = await request.json();

     if (!id || id.length !== 24) {
            return Response.json({ status: 400, message: "send correct_id" }, { status: 400 });
        }

        const filter = {_id: new ObjectId(id)}
        

    
    const mango = await mangoesRes.deleteOne(filter);

    return Response.json({
        mango,
        message: " Mangoes Data Deleted Successfully",
    })
}