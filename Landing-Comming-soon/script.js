
const dateBtn = document.getElementById('btn');
const datepicker = document.getElementById('date');
const hoursCount = document.getElementById('hourscount');
const minutesCount = document.getElementById('minutescount');
const secondsCount = document.getElementById('secondscount');

// let userDateinput;

function showdate() {
    dateBtn.style.display = "none";
    datepicker.style.display = "block";
    document.getElementById('close').style.display="block";
}
document.getElementById('close').addEventListener('click',()=>{
    datepicker.style.display="none";
    dateBtn.style.display = "block";
    document.getElementById('close').style.display="none";
})

const updateTime = () => {
    userDateinput = new Date(datepicker.value);
    const userDate = userDateinput.toLocaleString();
    const currentTime = new Date();
    const systemDate = currentTime.toLocaleString();
    console.log("userDate=" + userDate);
    console.log("SystemDate=" + systemDate);

    // Get the user-input date
    if (isNaN(userDateinput.getTime())) {
        datepicker.value="";
        alert("Select a Date");
        console.log("Invalid DATE");
        return;
    }

    // Compare the two dates
    if (userDateinput < currentTime) {
        datepicker.value="";
        alert("Please enter a future date");
        console.log("past date");
        return;
    } else {
        // Calculate the time difference
        const timeDifference = userDateinput.getTime() - currentTime.getTime();

        // Convert the time difference to hours, minutes, and seconds
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        hoursCount.innerText = hours;
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        minutesCount.innerHTML = minutes;
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        secondsCount.innerHTML = seconds;

        console.log(hours + " " + minutes + " " + seconds);
    }

    // Call the function again after 1000 milliseconds (1 second)
    setTimeout(updateTime, 1000);

};

