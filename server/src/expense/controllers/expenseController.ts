import { Router, Request, Response, NextFunction } from "express";
import { injectable, inject } from "tsyringe";
import ExpenseService from "../services/expenseService";
import { ExpenseData } from "../types/mongoose";
import { CREATED, OK } from "../../../utils/constants";

@injectable()
export default class ExpenseController {
  expenseService: ExpenseService;
  router: Router;

  constructor(@inject("ExpenseService") expenseService: ExpenseService) {
    this.expenseService = expenseService;
    this.router = new (Router as any)();
  }

  getExpensesRoute() {
    return this.expenseService.getExpenses();
  }
  postExpenseRoute(expenseData: ExpenseData) {
    return this.expenseService.addExpense(expenseData);
  }
  deleteExpenseRoute(expenseId: string) {
    return this.expenseService.deleteExpense(expenseId);
  }
  updateExpenseRoute(expenseId: string, expenseData: ExpenseData) {
    return this.expenseService.updateExpense(expenseId, expenseData);
  }

  routes() {
    this.router.get(
      "/expense",
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const expenses = await this.getExpensesRoute();
          res.status(OK).send(expenses);
        } catch (error) {
          next(error);
        }
      }
    );

    this.router.post(
      "/create-expense",
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const expense = await this.postExpenseRoute(req.body);
          res.status(CREATED).json({ status: "Created!", newExpense: expense });
        } catch (error) {
          next(error);
        }
      }
    );

    this.router.delete(
      "/delete-expense/:id",
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const { id } = req.params;
          await this.deleteExpenseRoute(id);
          res.status(OK).json({ status: "Deleted!", deletedExpenseId: id });
        } catch (error) {
          next(error);
        }
      }
    );

    this.router.put(
      "/edit-expense/:id",
      async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        try {
          const updatedExpense = await this.updateExpenseRoute(id, req.body);
          res
            .status(OK)
            .json({ status: "Updated!", updatedExpense: updatedExpense });
        } catch (error) {
          next(error);
        }
      }
    );
    return this.router;
  }
}
