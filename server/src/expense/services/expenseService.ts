import { injectable, inject } from "tsyringe";
import { ExpenseData, ModelI } from "../types/mongoose";
import mongoose from "mongoose";

@injectable()
export default class ExpenseService {
  expenseModel: mongoose.Model<any, any>;

  constructor(@inject("ExpenseModel") expenseModel: ModelI) {
    this.expenseModel = expenseModel.model;
  }

  async addExpense(expenseData: ExpenseData) {
    const newExpense = await this.expenseModel.create(expenseData);
    return newExpense;
  }

  getExpenses() {
    return this.expenseModel.find().exec();
  }

  async deleteExpense(expenseId: string) {
    const expenseToDelete = await this.expenseModel.findOne({ _id: expenseId });
    await expenseToDelete.deleteOne();
    return "Deleted!";
  }

  async updateExpense(expenseId: string, expenseData: ExpenseData) {
    const { date, category, notes, total } = expenseData;
    console.log(date, category, notes, total);
    const updatedExpense = await this.expenseModel.findOne({ _id: expenseId });
    updatedExpense.date = date;
    updatedExpense.category = category;
    updatedExpense.notes = notes;
    updatedExpense.total = total;

    await updatedExpense.save();
    console.log(updatedExpense);
    return updatedExpense;
  }
}
