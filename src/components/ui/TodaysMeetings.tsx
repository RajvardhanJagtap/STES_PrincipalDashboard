"use client";

import React from "react";
import { TodaysMeetingsProps } from "@/types";
import {
  Clock,
  MapPin,
  Users,
  Video,
  Building2,
  ClipboardList,
} from "lucide-react";

const TodaysMeetings: React.FC<TodaysMeetingsProps> = ({ data }) => {
  const getMeetingIcon = (icon?: string) => {
    const common = { size: 18 };
    switch (icon) {
      case "faculty":
        return <Building2 {...common} style={{ color: "#024698" }} />;
      case "project":
        return <ClipboardList {...common} style={{ color: "#024698" }} />;
      case "online":
        return <Video {...common} style={{ color: "#024698" }} />;
      default:
        return <Users {...common} style={{ color: "#024698" }} />;
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm h-[280px] flex flex-col">
      <div className="flex items-start justify-between mb-2.5">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Upcoming Meetings</h2>
        </div>
        <button className="bg-white border border-gray-200 text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
          {data.meetings.length} Meetings
        </button>
      </div>

      {/* Meeting Items Container */}
      <div className="space-y-2 flex-1 overflow-y-auto">
        {data.meetings.map((meeting, index) => (
          <div
            key={meeting.id}
            className="rounded-lg border p-3 border-gray-200"
            style={{ backgroundColor: index === 0 ? '#E8F4F8' : '#F0F9FF' }}
          >
            <div className="flex items-start gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                {getMeetingIcon(meeting.icon)}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-gray-900 text-sm truncate mb-1">
                  {meeting.title}
                </h3>

                <div className="space-y-0.5 text-xs text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} className="text-gray-500 flex-shrink-0" />
                    <span>{meeting.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-gray-500 flex-shrink-0" />
                    <span className="truncate">{meeting.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaysMeetings;


