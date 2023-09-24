import mongoose, {Schema} from "mongoose";

const countSchema = new Schema(
    {
        count: String
    }
)

const Count = mongoose.models.Count || mongoose.model("Count", countSchema)
export default Count