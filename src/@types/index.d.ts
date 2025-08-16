import { UserDocument } from "../models/user.model";
import { Session } from "express-session";

declare global {
  namespace Express {
    interface User extends UserDocument {
      _id?: any;
    }
  }
}

declare module "express-serve-static-core" {
  interface Request {
    sessionID: string;
    session: Session & {
      user?: any; // Or your specific user type
    };
  }
}
