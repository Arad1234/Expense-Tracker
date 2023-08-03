import { Model, Schema, model } from "mongoose";
import { IExpense, ModelI } from "../types/mongoose";
import { injectable } from "tsyringe";

@injectable()
export default class ExpenseModel implements ModelI {
  schema: Schema<any> = new Schema(
    {
      date: { type: Date, required: true },
      category: {
        type: String,
        enum: ["sports", "toys", "food"],
        required: true,
      },
      total: { type: Number, required: true },
      notes: { type: String },
    },
    { versionKey: false }
  );
  model: Model<any, {}> = model<IExpense>("Expense", this.schema);
}
