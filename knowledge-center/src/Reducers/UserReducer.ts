import moment from "moment-timezone";
import { UserType } from "../Actions/ActionType";
import { updateAccessData } from "../Util/Util";

let timer: ReturnType<typeof setTimeout> | null = null;

const initialState = {
  userInfo: false,
  adminUser: false,
  companyInfo: false,
  departmentInfo: false,
  access: [],
  lang: "en",
  country: "KSA",
  masterOptions: [],
  projects: [],
};

const getUser = (state: any, action: any) => {
  const access = action.payload.roleData ? action.payload.roleData.access || [] : [];

  if (action.payload.company && action.payload.userType === "Admin") {
    access.push("adminAccess");
  } else if (action.payload.userType === "Admin") {
    access.push("add-company");
  }

  updateAccessData(access);

  return {
    ...state,
    userInfo: action.payload,
    companyInfo: action.payload.companyData,
    departmentInfo:
      action.payload.departmentData && action.payload.departmentData.id
        ? action.payload.departmentData
        : false,
  };
};

const setData = (state: any, action: any) => ({
  ...state,
  ...action.payload,
});

const setTimerCount = (state: any, action: any) => {
  if (action.payload) {
    const difference = moment
      .tz("Asia/Kolkata")
      .diff(moment.tz(state.userInfo.timeEntryStartsAt, "Asia/Kolkata"), "millisecond");

    const onRenderTime = (diff: number) => {
      let seconds = Math.floor(diff / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);

      hours %= 24;
      minutes %= 60;
      seconds %= 60;

      const time = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

      if (typeof document !== "undefined") {
        const el = document.getElementById("timer_count");
        if (el) el.innerHTML = time;
        document.title = `${time} - ${action.payload.projectData.name}`;
      }

      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        const diffNow = moment
          .tz("Asia/Kolkata")
          .diff(moment(state.userInfo.timeEntryStartsAt), "millisecond");
        onRenderTime(diffNow + action.payload.totalMinutes * 60000);
      }, 1000);
    };

    onRenderTime(difference + action.payload.totalMinutes * 60000);
  } else {
    if (timer) clearTimeout(timer);
    if (typeof document !== "undefined") {
      document.title = "Online Accounting Solutions - Streamline Billing & Invoicing";
    }
  }

  return { ...state };
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case UserType.GET_USER:
      return getUser(state, action);
    case UserType.SET_USER_REDUCER:
      return setData(state, action);
    case UserType.SET_TIMER_COUNT:
      return setTimerCount(state, action);
    default:
      return state;
  }
}
