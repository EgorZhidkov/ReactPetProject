import moment from "moment";
const NOTIFICATION_COUNT = 100;
const MESSAGE = "asdasd  asdasdasdada asdasd asdbfvf fasdl,al!"

function generateNotification() {
    let result = [];
    let day = 1;
    let title = 'Уведомление номер: '
    let hour = 1;
    for (let i = 0; i < NOTIFICATION_COUNT; i++) {
        let object = {
            title: title + String(i + 1),
            date: moment().day(day).hour(hour).format("DD-MM-YYYY hh:mm:ss"),
            message: MESSAGE
        }

        if (i % 10 === 0) {
            day += 1;
            hour = 1
            object.date = moment().day(day).hour(hour).format("DD-MM-YYYY hh:mm:ss")
        }
        hour += 1;
        result.push(object)
    }
    return result
}

// const notifications = [{
//     title: 'Первое уведомление',
//     data: new Date().setDate(2)
// }]
export default generateNotification;