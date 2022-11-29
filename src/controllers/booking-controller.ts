import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";
import httpStatus from "http-status";
// import bookingService from "@/services/booking-service";

export async function getBooking(req: AuthenticatedRequest, res: Response) {
  try {
    return;
  } catch (error) {
    return res.sendStatus(httpStatus.PAYMENT_REQUIRED);
  }
}

export async function postBooking(req: AuthenticatedRequest, res: Response) {
  try {
    return;
  } catch (error) {
    return res.sendStatus(httpStatus.PAYMENT_REQUIRED);
  }
}

export async function putBooking(req: AuthenticatedRequest, res: Response) {
  try {
    return;
  } catch (error) {
    return res.sendStatus(httpStatus.PAYMENT_REQUIRED);
  }
}

