import { Model, Fields } from "@vuex-orm/core";

export default class User extends Model {
    static entity: string = "users";

    static fields(): Fields {
        return {
            id: this.increment(),
            first_name: this.attr(""),
            username: this.attr(""),
            email: this.attr(""),
            last_name: this.attr("")
        };
    }
    get name() {
        //@ts-ignore
        return `${this.first_name}  ${this.last_name}`;
    }
}
