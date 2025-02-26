import React from "react";

const Tabs = ({ activeTab, onTabChange }) => (
  <div className="flex justify-center gap-8 mb-8">
    <button 
      onClick={() => onTabChange('create')}
      className={`text-white pb-2 transition-all ${
        activeTab === 'create' ? 'border-b-2 border-[#4CD7E7]' : ''
      }`}
    >
      Create
    </button>
    <button 
      onClick={() => onTabChange('rooms')}
      className={`text-white pb-2 transition-all ${
        activeTab === 'rooms' ? 'border-b-2 border-[#4CD7E7]' : ''
      }`}
    >
      Rooms
    </button>
  </div>
);

export default Tabs;
