import React from 'react';
import { TodayClassesProps } from '@/types';
import ClassCard from '@/components/ui/ClassCard';

const TodayClasses: React.FC<TodayClassesProps> = ({ data }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 h-full flex flex-col">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="heading-lg">Today's Schedule</h2>
          <p className="muted-text mt-1 text-xs">{data.date}</p>
        </div>
        <button style={{ backgroundColor: '#0A6E8A' }} className="hover:opacity-90 text-white px-5 py-2 rounded-lg font-semibold text-xs transition-all active:scale-95">
          {data.totalClasses} Classes
        </button>
      </div>

      {/* Content */}
      {data.totalClasses === 0 ? (
        <div className="flex-1 flex items-center justify-center text-center">
          <div>
            <p className="text-gray-500 text-sm">No classes scheduled today</p>
            <p className="text-gray-400 text-xs mt-1">Enjoy your day!</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 flex-1">
          {data.classes.map((session) => (
            <ClassCard key={session.id} session={session} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodayClasses;
