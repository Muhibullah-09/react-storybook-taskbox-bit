import React from "react";
import { TaskType } from "../../task";

export interface TaskProps {
  task: TaskType;
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => {onArchiveTask(id); alert('If You done this task Click OK...')}} />
      </label>

      <div className="title">
        <input
          type="text"
          value={title}
          // readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {/* {state !== "TASK_ARCHIVED" && (
          <div 
          onClick={() => {onPinTask(id); alert('You done this Task')}}>
            <span className={"icon-star"} />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Task;
