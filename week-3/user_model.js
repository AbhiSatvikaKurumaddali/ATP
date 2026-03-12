import { Schema, model, Types } from "mongoose";

//lets create cart schema to include it in users now
const cartSchema=new Schema({
    product:{
        type:Types.ObjectId,//so this is a object id  to products
        ref:"product",//name of the product model, areference to access products model
    },
    count:{
        type:Number,
        default:0
    }

})
const userSchema=new Schema({
username:{
    type:String,
    required:[true,"Username is required"],
    minLength:[4,"Min length of username is 4 chars"],
    maxLength:[6,"Max length of username is 6 chars"]
},
password:{
    type:String,
    required:[true,"password required"]
},
email:{
    type:String,
    required:[true,"user email required"],
    unique:[true,"user email already registered"]
},
age:{
    type:Number
},
cart:[cartSchema]//it accepts this format {product:"",count:2}
},
{
versionKey:false,
timestamps:true
}
)
export const UserModel=model("user",userSchema)
//a string(puts (s) at he end of string while displaying), a schema, collection name in db(users)
