import { ActionTypes } from "../constants/action-types";
const intialState = {
  studentList: [],
  formData: {},
  editStudentForm: {
    name: "",
    gender: "",
    physics: "",
    maths: "",
    english: "",
  },
};

export const studentReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_STUDENTS:
      return { ...state, studentList: payload };
    case ActionTypes.SET_FORM_DATA:
      return { ...state, formData: payload };
    case ActionTypes.SET_STUDENT_DATA:
      return { ...state, editStudentForm: payload };
    default:
      return state;
  }
};
