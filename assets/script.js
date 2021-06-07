
/* display current date */
function setDateDisplay(){
    var date = new Date();
    const localDateString = date.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.querySelector('#currentDay').innerText = localDateString
}
setDateDisplay();
/* ----------------------------------------------------- */

/* array that holds time from 9 - 5 */
const time = [9, 10, 11, 12, 13, 14, 15, 16, 17];
/* adding class of past present and future depending on current time*/
$('.time-block').each(function(i){
    const currentHour = parseInt(dayjs().format('HH'));
    var hour = time[i];
/* checks if current hour is less than, equal to, or ahead of the indexed time */
    if(hour < currentHour){
        $(this).children('.description').addClass('past');
    } else if (hour == currentHour){
        $(this).children('.description').addClass('present');
    } else{
        $(this).children('.description').addClass('future');
    }
});
/* ----------------------------------------------------- */

/* clicking save button sets textarea value into local storage */
$('.saveBtn').on('click', function(){
    var save = $(this).siblings('.description').val();
    var timeId = $(this).parent().attr('id');
    localStorage.setItem(timeId, save);
})
/* ----------------------------------------------------- */

/* get the value from local storage assigned to the hour*/
$('#nine .description').val(localStorage.getItem('nine'));
$('#ten .description').val(localStorage.getItem('ten'));
$('#eleven .description').val(localStorage.getItem('eleven'));
$('#twelve .description').val(localStorage.getItem('twelve'));
$('#one .description').val(localStorage.getItem('one'));
$('#two .description').val(localStorage.getItem('two'));
$('#three .description').val(localStorage.getItem('three'));
$('#four .description').val(localStorage.getItem('four'));
$('#five .description').val(localStorage.getItem('five'));
/* ----------------------------------------------------- */

/* delete set task */
$('.deleteBtn').on('click', function(){
    var timeId = $(this).parent().attr('id');
    localStorage.removeItem(timeId);
    location.reload();
})