import { MutationTree, GetterTree, ActionTree } from "vuex";
import { UserState as State, User } from "~/types";
const mutations: MutationTree<State> = {
    setFirst({ data }: State, payload: any): void {
        data[1].first_name = payload;
    }
};
const getters: GetterTree<State, any> = {
    // @ts-ignore
    first(state: State, getters: any): User {
        return getters.find(1);
    }
};
const actions: ActionTree<State, any> = {};
export default {
    getters,
    mutations,
    actions
};
