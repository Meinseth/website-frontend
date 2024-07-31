'use client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'


export default function Home() {

  const handleDateClick = (arg: { dateStr: any }) => {
    alert(arg.dateStr)
  }

  return (
    <main className="flex flex-col">

      <div className="test p-12 pt-6 pb-6" >

        <h1>
          Låne fotball bane
        </h1>

      </div>
      <div className='p-12'>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridWeek"
          headerToolbar={{ left: '', center: 'title', right: '' }}
          footerToolbar={{ left: 'prev,next', center: 'today', right: 'dayGridDay,dayGridWeek' }}
          height={600}
          editable={true}
          dateClick={handleDateClick}
        />
      </div>



    </main>
  );
}
