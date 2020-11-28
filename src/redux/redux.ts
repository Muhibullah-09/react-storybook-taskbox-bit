import { createStore } from "redux";
import { TaskType } from "../task";

export const actions = {
  ARCHIVE_TASK: "ARCHIVE_TASK",
  PIN_TASK: "PIN_TASK",
};

export const archiveTask = (id: string) => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = (id: string) => ({ type: actions.PIN_TASK, id });

function taskStateReducer(taskState: any) {
  return (state: any, action: any) => {
    return {
      ...state,
      tasks: state.tasks.map((task: TaskType) =>
        task.id === action.id ? { ...taskState, state: taskState } : task
      ),
    };
  };
}

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case actions.ARCHIVE_TASK:
      return taskStateReducer("TASK_ARCHIVED")(state, action);
    case actions.PIN_TASK:
      return taskStateReducer("TASK_PINNED")(state, action);
    default:
      return state;
  }
};

const defaultTasks = [
  { id: "1", title: "Morning Prayer", state: "TASK_INBOX" },
  { id: "2", title: "Break Fast", state: "TASK_INBOX" },
  { id: "3", title: "Plan Meeting Schedule", state: "TASK_INBOX" },
  { id: "4", title: "Excersice", state: "TASK_INBOX" },
  { id: "5", title: "Read Newspaper", state: "TASK_INBOX" },
  { id: "6", title: "Office Work", state: "TASK_INBOX" },
  { id: "7", title: "Lunch", state: "TASK_INBOX" },
];

export default createStore(reducer, { tasks: defaultTasks });
