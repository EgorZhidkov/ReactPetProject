import React from "react";
import NotificationsCell from "../components/notifications/NotificationsCell";
import generateNotifications from "../staticData/notifications";

const Notifications = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full">
        <div className="ntf-window px-6 pt-10 pb-10 bg-slate-400 rounded-lg h-[33rem] overflow-y-scroll">
          {generateNotifications().map((ntf, index) => {
            return (
              <NotificationsCell
                key={index}
                title={ntf.title}
                date={ntf.date}
                message={ntf.message}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notifications;
