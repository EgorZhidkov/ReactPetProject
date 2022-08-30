import React, { FC } from "react";
interface NotificationsCellProps {
  title: string;
  date: string;
  message: string;
}
const NotificationsCell: FC<NotificationsCellProps> = (props) => {
  const { title, message, date } = props;
  return (
    <div className="cell flex flex-col">
      <div className="cell-header">
        <h1>{title}</h1>
      </div>
      <div className="cell-message">{message}</div>
      <div className="cell-data">{date}</div>
    </div>
  );
};
export default NotificationsCell;
