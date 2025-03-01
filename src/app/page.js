import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import SmallCard from './components/SmallCard'
import BigCard from './components/BigCard'
import Graph1 from './Graph1.png'
import Graph2 from './Graph2.png'
import Announcement from './components/Announcement'
import ActivityCard from './components/ActivityCard'
import ScheduleCard from './components/ScheduleCard'

const announcements = [
  { title: "Outing schedule for every department", time: "5 Minutes ago", pinned: true },
  { title: "Meeting HR Department", time: "Yesterday, 12:30 PM", pinned: false },
  { title: "IT Department needs UX/UI Designers", time: "Yesterday, 09:15 AM", pinned: true },
];

function page() {
  return (
    <div className='w-full min-h-screen flex  item-start lg:items-center justify-between'>
      {/* Sidebar  */}
      <div className='w-[15%] h-screen'>
        <Sidebar />
      </div>

      <div className='w-full lg:w-[85%]'>
        {/* Top Navbar  */}
        <Navbar />
        <div className='flex flex-col lg:flex-row items-center justify-center'>
          {/* Cards 1 */}
          <div className='w-full lg:w-[60%] min-h-screen lg:h-[91.6vh] p-3 lg:p-5'>
            <h1 className='text-xl lg:text-2xl mb-1 text-left'>Dashboard</h1>

            {/* Small Cards  */}
            <div className='flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-2'>
              <div className='w-full sm:w-[32%]'><SmallCard title={'Available Position'} value={'24'} urgent={'4 Urgently needed'} bgColor={'bg-red-50'} urgentText={'text-red-400'} /></div>
              <div className='w-full sm:w-[32%]'><SmallCard title={'Job Open'} value={'10'} urgent={'4 Active Hiring'} bgColor={'bg-blue-50'} urgentText={'text-blue-400'} /></div>
              <div className='w-full sm:w-[32%]'><SmallCard title={'New Employees'} value={'24'} urgent={'4 Department'} bgColor={'bg-purple-100'} urgentText={'text-purple-600'} /></div>
            </div>

            {/* Big Cards  */}
            <div className='flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-2 mt-3'>
              <div className='w-full sm:w-[49%]'><BigCard title="Total Employees" total={216} men={120} women={96} growth={2} graph={Graph1} /></div>
              <div className='w-full sm:w-[49%]'><BigCard title="Talent Request" total={16} men={6} women={10} growth={5} graph={Graph2} /></div>
            </div>

            <div className='mt-4'>
              <Announcement announcements={announcements} />
            </div>
          </div>

          {/* Events  */}
          <div className='w-full lg:w-[40%] flex flex-col justify-between items-center min-h-screen lg:h-[91.6vh] p-3 lg:p-0 lg:-ml-2'>
            <div className='w-full lg:w-[90%] mb-4 lg:mb-0'>
              <ActivityCard
                time="10:40 AM"
                date="Fri 10 Sept 2021"
                title="You Posted a New Job"
                description="Kindly check the requirements and terms of work and make sure everything is right."
                totalActivity={12}
              />
            </div>
            <div className='w-full lg:w-[90%]'>
              <ScheduleCard
                date="Today, 13 Sep 2021"
                priorityTasks={[
                  { title: "Review candidate applications", time: "Today - 11:30 AM" }
                ]}
                otherTasks={[
                  { title: "Interview with candidates", time: "Today - 10:30 AM" },
                  { title: "Short meeting with product designer from IT Department", time: "Today - 09:15 AM" }
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page