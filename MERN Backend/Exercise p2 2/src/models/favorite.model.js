import mongoose from "mongoose";

const userFavoriteSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
        unique: true
    },
    favoriteList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "musics"
        }
    ]
}, { timestamps: true });


const userFavoriteModel = mongoose.model("favorites", userFavoriteSchema);

export default userFavoriteModel;