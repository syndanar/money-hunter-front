import {
  FIND_SEARCH_ID_BY_NAME_ACTION,
  GET_NEW_SEARCH_ID_ACTION,
  SET_SEARCH_ID_MUTATION
} from "@/store/modules/blackbox/constants";
import {ActionContext} from "vuex";
import {VuexBlackBoxStateInterface} from "@/store/modules/blackbox/index";
import {BlackboxService} from "@/services/blackbox_service";
import {GetSearchIDDataInterface} from "@/repositories/blackbox_repository";
import {DECREASE_BLACKBOX_SEARCHES_MUTATION} from "@/store/modules/user/constants";

export default {
  async [GET_NEW_SEARCH_ID_ACTION](context: ActionContext<VuexBlackBoxStateInterface, any>, payload: Record<string, any>) {
    const service = new BlackboxService();
    const response = await service.getNewSearchID(payload as GetSearchIDDataInterface);

    if (response) {
      context.commit(`user/${DECREASE_BLACKBOX_SEARCHES_MUTATION}`, undefined, {root: true});
      context.commit(SET_SEARCH_ID_MUTATION, {searchID: response.searchKey});
    }
  },
  async [FIND_SEARCH_ID_BY_NAME_ACTION](context: ActionContext<VuexBlackBoxStateInterface, any>, name: string) {
    const service = new BlackboxService();
    const response = await service.findSearchIDByName(name);

    if (response) {
      context.commit(`user/${DECREASE_BLACKBOX_SEARCHES_MUTATION}`, undefined, {root: true});
      context.commit(SET_SEARCH_ID_MUTATION, {searchID: response.searchID});
    }
  }
}