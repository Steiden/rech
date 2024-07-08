import Calendar from "color-calendar";
import "color-calendar/dist/css/theme-basic.css";

const complexDateInput = document.querySelector("#complexDateInput");
const complexDate = new Calendar({
    id: "#complexDate",
    calendarSize: "small",
    theme: "basic",
    weekdayType: "short",
    primaryColor: "#0c71ae"
})

complexDate.dateChanged = (date) => {
    complexDateInput.value = new Date(date).toLocaleDateString();
}