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
    try {
      const newExpense = await this.expenseModel.create(expenseData);
      return newExpense;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  getExpenses() {
    return this.expenseModel.find().exec();
  }

  async deleteExpense(expenseId: string) {
    try {
      const expenseToDelete = await this.expenseModel.findOne({
        _id: expenseId,
      });
      await expenseToDelete.deleteOne();
      return "Deleted!";
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async updateExpense(expenseId: string, expenseData: ExpenseData) {
    const { date, category, notes, total } = expenseData;
    try {
      const updatedExpense = await this.expenseModel.findOne({
        _id: expenseId,
      });

      updatedExpense.date = date;
      updatedExpense.category = category;
      updatedExpense.notes = notes;
      updatedExpense.total = total;

      await updatedExpense.save();
      return updatedExpense;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
