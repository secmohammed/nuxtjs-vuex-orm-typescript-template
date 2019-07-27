import { Database } from "@vuex-orm/core";
const database = new Database();
import User from "~/vuex-orm/models/User";
import users from "~/vuex-orm/modules/users";
database.register(User, users);
export default database;
