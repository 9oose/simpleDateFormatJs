let date = new Date();

const simpleDateFormat = (inputDate) => {
    let year    = inputDate.getFullYear(),
        month   = '' + (inputDate.getMonth()+1),
        day     = '' + inputDate.getDate(),
        hour    = '' + inputDate.getHours(),
        minute  = '' + inputDate.getMinutes(),
        second  = '' + inputDate.getSeconds()

    month   = month.length < 2 ? '0' + month : month;
    day     = day.length < 2 ? '0' + day : day;
    hour    = hour.length < 2 ? '0' + hour : hour;
    minute  = minute.length < 2 ? '0' + minute : minute;
    second  = second.length < 2 ? '0' + second : second;

    const rtnDate = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

    return rtnDate;
}

const timeCalculator = (type, inputDate, data) =>{
    switch (type.toUpperCase()){
        case 'YY' : inputDate.setFullYear(inputDate.getFullYear() + data);break;
        case 'MM' : inputDate.setMonth(inputDate.getMonth() + data);break;
        case 'DD' : inputDate.setDate(inputDate.getDate() + data);break;
        case 'HH' : inputDate.setHours(inputDate.getHours() + data);break;
        case 'MI' : inputDate.setMinutes(inputDate.getMinutes() + data);break;
        case 'SS' : inputDate.setSeconds(inputDate.getSeconds() + data);break;
    }
}
