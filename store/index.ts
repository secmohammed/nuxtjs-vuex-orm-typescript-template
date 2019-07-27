import { install } from "@vuex-orm/core";
import database from "~/vuex-orm/database";

export const plugins = [install(database)];
