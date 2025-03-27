import React from "react";

const HistoryTab = ({ activeTab, onTabChange }) => (
  <div className="flex justify-center gap-8">
    <button 
      onClick={() => onTabChange('all time')}
      className={`text-white pb-2 transition-all ${
        activeTab === 'all time' ? 'border-b-2 border-white' : ''
      }`}
    >
      All time
    </button>
    <button 
      onClick={() => onTabChange('today')}
      className={`text-white pb-2 transition-all ${
        activeTab === 'today' ? 'border-b-2 border-white' : ''
      }`}
    >
      Today
    </button>
    <button 
      onClick={() => onTabChange('week')}
      className={`text-white pb-2 transition-all ${
        activeTab === 'week' ? 'border-b-2 border-white' : ''
      }`}
    >
      Week
    </button>
    <button 
      onClick={() => onTabChange('month')}
      className={`text-white pb-2 transition-all ${
        activeTab === 'month' ? 'border-b-2 border-white' : ''
      }`}
    >
      Month
    </button>
    <button 
      onClick={() => onTabChange('year')}
      className={`text-white pb-2 transition-all ${
        activeTab === 'year' ? 'border-b-2 border-white' : ''
      }`}
    >
      Year
    </button>
  </div>
);

export default HistoryTab;
