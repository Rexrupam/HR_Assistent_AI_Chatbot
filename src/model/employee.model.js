import mongoose, {Schema} from "mongoose"

const employeeSchema = new Schema({
    "id":{
        type: Number,
        required: true
    },
    "name":{
        type: String,
        required: true
    },
    "skills":{
        type: [String],
        required: true
    },
    "experience_years":{
        type: Number,
        required: true
    },
    "projects":{
        type: [String],
        required: true
    },
    "availability":{
        type: String,
        required: true
    },
    "embedding":{
        type: [Number],
        required: true
    }
},
{
    timestamps: true
});

export const Employees = mongoose.model('Employees',employeeSchema);