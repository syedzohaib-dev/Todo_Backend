import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const con = await mongoose.connect(
            // {
            //     serverSelectionTimeoutMS: 5000,
            //     socketTimeoutMS: 45000,
            // }
        )
        console.log('DB Connected: ' + con.connection.host)
    } catch (error) {
        console.log(error)
    }

}
