import mongoose from "mongoose";

export async function connect() {
    try {
        // await mongoose.connect(process.env.MONGO_URI!);
        await mongoose.connect("mongodb+srv://admin123:admin123@cluster0.psewfip.mongodb.net/FreeProjectsDb");
        const connection = mongoose.connection;
        connection.on("connected", () => {
            console.log("MongoDB connected successfully");
        })

        connection.on('error', (err) => {
            console.log("MongoDB connection error.Please make sure MongoDB is running." + err);
            process.exit();
        }
        )

    } catch (error) {
        console.log("Something goes wrong");
        console.log(error);
    }
}