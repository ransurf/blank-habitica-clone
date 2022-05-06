import React, { FC } from "react";

interface IProps {
  task: string;
}

/**
 * @author
 * @function @TaskListItem
 **/

export const TaskListItem: FC<IProps> = (props: IProps) => {
  const { task } = props;
  return (
    <div>
      <p>{task}</p>
    </div>
  );
};
