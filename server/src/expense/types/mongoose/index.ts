import mongoose from "mongoose";

export interface ModelI {
  schema: mongoose.Schema<any>;
  model: mongoose.Model<any, {}>;
}

export interface ExpenseData {
  date: Date;
  category: String;
  total: Number;
  notes: String;
}
export interface IExpense extends ExpenseData, Document {}
