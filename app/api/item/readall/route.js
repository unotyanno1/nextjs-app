import { NextResponse } from "next/server";
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";

export async function GET() {
    try {
        await connectDB()
        const allItems = await ItemModel.find()
        return NextResponse.json({message: "アイテム取得成功(オール)", allItems: allItems})
    } catch (err){
        return NextResponse.json({message: "アイテム取得失敗(オール)"})
    }
}