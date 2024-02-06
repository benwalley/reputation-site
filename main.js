function initFakeTimer() {

    const endTime = generateEndDate();
    setTimes(endTime)

}

function generateEndDate() {
    const minSeconds = 3000;
    const maxSeconds = 2000000;
    // Get the current date and time
    const currentDate = new Date();

    // Calculate the minimum and maximum end dates
    const minEndDate = new Date(currentDate.getTime() + (minSeconds * 1000));
    const maxEndDate = new Date(currentDate.getTime() + (maxSeconds * 1000));

    // Get a random time between the minimum and maximum end dates
    const randomTime = minEndDate.getTime() + Math.random() * (maxEndDate.getTime() - minEndDate.getTime());

    // Create a new Date object with the random time
    return new Date(randomTime);
}

function setTimes(time) {
    const currentTime = new Date();
    if(time < currentTime) {
        handleTimerFinished();
        return;
    }
    setDaysTillTime(time)
    setHoursTillTime(time)
    setMinutesTillTime(time)
    setSecondsTillTime(time)
    const remainingMilliseconds = 1000 - currentTime.getMilliseconds();
    setTimeout(() => setTimes(time), remainingMilliseconds)
}

function handleTimerFinished() {
    alert("Congratulations! You waited until nothing!!!")
}

function setDaysTillTime(time) {
    const daysElement = document.querySelector('.fake-timer .days');
    const currentDate = new Date();
    const targetDate = new Date(time);
    const differenceMs = targetDate - currentDate;
    const daysRemaining = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    setNumbers(daysElement, daysRemaining)
}

function setNumbers(element, number) {
    const firstChar = element.querySelector('.first-char')
    const secondChar = element.querySelector('.second-char')
    const splitNumber = number.toString().padStart(2, '0').split('');
    firstChar.innerText = splitNumber[0];
    secondChar.innerText = splitNumber[1]
}

function setHoursTillTime(time) {
    const hoursElement = document.querySelector('.fake-timer .hours');
    const currentDate = new Date();
    const targetDate = new Date(time);
    const differenceMs = targetDate - currentDate;
    const hoursRemaining = Math.floor((differenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    setNumbers(hoursElement, hoursRemaining)
}

function setMinutesTillTime(time) {
    const minutesElement = document.querySelector('.fake-timer .minutes');
    const currentDate = new Date();
    const targetDate = new Date(time);
    const differenceMs = targetDate - currentDate;
    const minutesRemaining = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60));
    setNumbers(minutesElement, minutesRemaining)
}

function setSecondsTillTime(time) {
    const secondsElement = document.querySelector('.fake-timer .seconds');
    const currentDate = new Date();
    const targetDate = new Date(time);
    const differenceMs = targetDate - currentDate;
    const secondsRemaining = Math.floor((differenceMs % (1000 * 60)) / 1000);
    setNumbers(secondsElement, secondsRemaining)
}

initFakeTimer()
