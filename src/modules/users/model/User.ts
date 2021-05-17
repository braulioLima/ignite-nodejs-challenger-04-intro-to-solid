import { v4 as uuidV4, v4 } from "uuid";

class User {
  id: string;

  name: string;

  email: string;

  admin: boolean;

  created_at: Date;

  updated_at: Date;

  constructor() {
    this.id = v4();
    this.admin = false;
    this.initCreatedAndUpdatedAtDates();
  }

  private initCreatedAndUpdatedAtDates() {
    const now = new Date(Date.now());

    this.created_at = now;
    this.updated_at = now;
  }
}

export { User };
