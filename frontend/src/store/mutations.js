import {
    FETCH_QUESTION_LIST,
    FETCH_SELECTED_ANSWERS,
    FETCH_IS_TEST_COMPLETED,
    FETCH_CURRENT_QUESTION_INDEX
} from "./types";

const mutations = {
    [FETCH_QUESTION_LIST](state, payload) {
        state.questionDataList = payload.payload;
    },
    [FETCH_SELECTED_ANSWERS](state, payload) {
        state.selectedAnswers = payload.payload;
    },
    [FETCH_IS_TEST_COMPLETED](state, payload) {
        state.isTestCompleted = payload;
    },
    [FETCH_CURRENT_QUESTION_INDEX](state, payload) {
        state.currentQuestionIndex = payload;
    }

};
export default mutations;