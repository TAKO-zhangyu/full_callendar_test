import { Calendar} from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';

document.addEventListener('turbolinks:load', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new Calendar(calendarEl, {
        plugins: [ timeGridPlugin ],
        initialView: 'timeGridWeek',

        events: [
          {
            id: '1',
            title: 'やっ',
            start: '2022-06-10T10:00:00',
            end: '2022-06-10T16:00:00',
            display: 'background'
          }
        ],
        eventColor: '#378006',

        locale: 'ja',
        timeZone: 'Asia/Tokyo',
        firstDay: 1,
        headerToolbar: {
          start: '',
          center: 'title',
          end: 'today prev,next' 
        },
        expandRows: true,
        stickyHeaderDates: true,
        buttonText: {
           today: '今日'
        }, 
        allDayText: '終日',
        height: "auto",

    });
    //カレンダー表示
    calendar.render();

});