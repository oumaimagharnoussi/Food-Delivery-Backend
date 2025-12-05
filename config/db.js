import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://gharnoussioumaima_db_user:24485192@cluster0.zmt9zff.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}