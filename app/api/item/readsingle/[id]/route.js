import { NextResponse } from "next/server";
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";

export async function GET(request, context) {
    const params = await context.params
    try {
        await connectDB()
        const singleItem = await ItemModel.findById(params.id)
        return NextResponse.json({message: "アイテム取得成功(シングル)", singleItem: singleItem})
    } catch (err) {
        return NextResponse.json({message: "アイテム取得失敗(シングル)"})
    }
}