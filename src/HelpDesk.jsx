import React, { useState } from "react";
import {
  Search,
  Star,
  ChevronDown,
  Video,
  Phone,
  Mic,
  LogOut,
  Send,
  Plus,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

const MenuItem = ({ icon, label, count, collapsed }) => (
  <div
    className={`flex items-center px-4 py-2 text-sm hover:bg-gray-100 ${
      collapsed ? "justify-center" : ""
    }`}
  >
    {icon}
    {!collapsed && <span className="ml-2">{label}</span>}
    {!collapsed && count !== undefined && (
      <span className="ml-auto">{count}</span>
    )}
  </div>
);

const ConversationItem = ({ name, message, time, isActive }) => (
  <div
    className={`p-4 border-b ${isActive ? "bg-blue-100" : "hover:bg-gray-50"}`}
  >
    <div className="flex items-center">
      <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
      <div className="flex-1">
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-gray-600 truncate">{message}</div>
      </div>
      <div className="text-xs text-gray-500">{time}</div>
    </div>
  </div>
);

const HelpDeskDashboard = () => {
  const [messageText, setMessageText] = useState("");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      {/* Left Sidebar */}
      <div
        className={`bg-white border-r flex flex-col transition-all duration-300 ${
          sidebarCollapsed ? "w-16" : "w-64"
        }`}
      >
        <div className="p-4 flex items-center justify-between">
          {!sidebarCollapsed && (
            <>
              <div className="w-8 h-8 bg-gray-800 rounded-sm mr-2"></div>
              <h2 className="text-xl font-bold">Help Desk</h2>
            </>
          )}
          <button
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-gray-700"
          >
            {sidebarCollapsed ? <Menu size={24} /> : <X size={24} />}
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <MenuItem
            icon={<div className="w-4 h-4 bg-blue-500 rounded-sm" />}
            label="Your Inbox"
            count={6}
            collapsed={sidebarCollapsed}
          />
          <MenuItem
            icon={<div className="w-4 h-4 bg-gray-400 rounded-sm" />}
            label="Mentions"
            count={10}
            collapsed={sidebarCollapsed}
          />
          <MenuItem
            icon={<div className="w-4 h-4 bg-gray-400 rounded-sm" />}
            label="Created by you"
            count={29}
            collapsed={sidebarCollapsed}
          />
          <MenuItem
            icon={<div className="w-4 h-4 bg-gray-400 rounded-sm" />}
            label="All"
            count={237}
            collapsed={sidebarCollapsed}
          />
          <MenuItem
            icon={<div className="w-4 h-4 bg-gray-400 rounded-sm" />}
            label="Unassigned"
            count={8}
            collapsed={sidebarCollapsed}
          />
          <MenuItem
            icon={<div className="w-4 h-4 bg-gray-400 rounded-sm" />}
            label="Dashboard"
            collapsed={sidebarCollapsed}
          />

          {!sidebarCollapsed && (
            <div className="px-4 py-2 text-xs font-semibold text-gray-500">
              TEAMS
            </div>
          )}
          <MenuItem
            icon={<div className="w-4 h-4 bg-blue-300 rounded-full" />}
            label="EMEA"
            count={12}
            collapsed={sidebarCollapsed}
          />
          <MenuItem
            icon={<div className="w-4 h-4 bg-green-300 rounded-full" />}
            label="APAC"
            count={42}
            collapsed={sidebarCollapsed}
          />
          <MenuItem
            icon={<div className="w-4 h-4 bg-red-300 rounded-full" />}
            label="USA"
            count={3}
            collapsed={sidebarCollapsed}
          />

          {!sidebarCollapsed && (
            <div className="px-4 py-2 text-xs font-semibold text-gray-500">
              TEAMMATES
            </div>
          )}
          <MenuItem
            icon={<div className="w-4 h-4 bg-gray-300 rounded-full" />}
            label="June Jenson"
            count={52}
            collapsed={sidebarCollapsed}
          />
          <MenuItem
            icon={<div className="w-4 h-4 bg-gray-300 rounded-full" />}
            label="Clara Richards"
            count={42}
            collapsed={sidebarCollapsed}
          />
          <MenuItem
            icon={<div className="w-4 h-4 bg-gray-300 rounded-full" />}
            label="David Lee"
            count={4}
            collapsed={sidebarCollapsed}
          />

          {!sidebarCollapsed && (
            <div className="px-4 py-2 text-xs font-semibold text-gray-500">
              VIEWS
            </div>
          )}
          <MenuItem
            icon={<div className="w-4 h-4 bg-yellow-400 rounded-sm" />}
            label="Waiting premium"
            count={7}
            collapsed={sidebarCollapsed}
          />
          <MenuItem
            icon={<div className="w-4 h-4 bg-purple-400 rounded-sm" />}
            label="Apps & integrations"
            count={62}
            collapsed={sidebarCollapsed}
          />
          <MenuItem
            icon={<div className="w-4 h-4 bg-red-400 rounded-sm" />}
            label="Social queries"
            count={21}
            collapsed={sidebarCollapsed}
          />
        </div>
        <div className="p-4 border-t">
          <MenuItem
            icon={<div className="w-4 h-4 bg-gray-400 rounded-full" />}
            label="Spam"
            count={3}
            collapsed={sidebarCollapsed}
          />
          <MenuItem
            icon={<div className="w-4 h-4 bg-gray-400 rounded-full" />}
            label="Practise shortcuts"
            collapsed={sidebarCollapsed}
          />
          <MenuItem
            icon={<div className="w-4 h-4 bg-gray-400 rounded-full" />}
            label="Edit sidebar"
            collapsed={sidebarCollapsed}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white p-4 flex items-center border-b">
          <Search className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent outline-none"
          />
          <div className="ml-4 flex items-center">
            <span className="font-semibold mr-2">Ellen Edwards</span>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
          <div className="ml-auto flex items-center space-x-4 text-gray-500">
            <Star />
            <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
            <ChevronDown />
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Conversation List */}
          <div className="w-1/3 bg-white border-r flex flex-col">
            <div className="p-4 border-b">
              <select className="w-full bg-transparent border-none outline-none">
                <option>6 Open</option>
              </select>
            </div>
            <div className="flex-1 overflow-y-auto">
              <ConversationItem
                name="Michael"
                message="Messenger call active"
                time=""
                isActive={true}
              />
              <ConversationItem
                name="Whitney Hall"
                message="Of course! I'll need to co..."
                time="3m"
              />
              <ConversationItem
                name="Heather Ho"
                message="Ok thank you!"
                time="9m"
              />
              <ConversationItem
                name="Alan Nader"
                message="Oh right, yes that's work..."
                time="11m"
              />
              <ConversationItem
                name="Steven Eze"
                message="Ah ok, I didn't know that..."
                time="17m"
              />
              <ConversationItem
                name="Aiden Sanchez"
                message="Sure, no worries."
                time="21m"
              />
            </div>
          </div>

          {/* Active Chat */}
          <div className="flex-1 flex flex-col bg-white">
            {/* Video Call Area */}
            <div className="bg-gray-800 p-4">
              <div className="text-white mb-2">Call with Michael • FlowFX</div>
              <div className="flex space-x-4 mb-4">
                <div className="w-1/2 h-40 bg-gray-700 rounded-lg overflow-hidden">
                  <img
                    src="/api/placeholder/320/180"
                    alt="Video call participant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 h-40 bg-gray-700 rounded-lg overflow-hidden">
                  <img
                    src="/api/placeholder/320/180"
                    alt="Video call participant"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <button className="p-2 rounded-full bg-gray-700">
                  <Video size={20} className="text-white" />
                </button>
                <button className="p-2 rounded-full bg-gray-700">
                  <Phone size={20} className="text-white" />
                </button>
                <button className="p-2 rounded-full bg-gray-700">
                  <Mic size={20} className="text-white" />
                </button>
                <button className="px-4 py-2 rounded-full bg-gray-700 text-white">
                  Leave call
                </button>
                <button className="px-4 py-2 rounded-full bg-red-600 text-white">
                  End call for all
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="mb-4">
                <div className="font-semibold">Ellen Edwards</div>
                <div className="bg-blue-100 rounded-lg p-3 mt-1 inline-block">
                  I understand your concern. It might be easier to troubleshoot
                  this over a video call.
                </div>
              </div>
              <div className="mb-4">
                <div className="font-semibold text-right">Michael</div>
                <div className="bg-gray-100 rounded-lg p-3 mt-1 inline-block float-right">
                  Sure, that sounds good. Let's do that.
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="border-t p-4">
              <div className="flex items-center">
                <input
                  type="text"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent outline-none"
                />
                <div className="flex space-x-2 text-gray-400">
                  <button>
                    <ChevronDown />
                  </button>
                  <button>
                    <Plus />
                  </button>
                </div>
                <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-full">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-64 bg-white border-l flex flex-col">
        <div className="p-4 border-b">
          <h3 className="font-semibold">Details</h3>
          <button className="absolute top-4 right-4 text-gray-500">
            <ChevronRight />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <div className="mb-4">
            <div className="text-sm text-gray-500">Assignee</div>
            <div className="flex items-center mt-1">
              <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
              <span>Ellen Edwards</span>
            </div>
          </div>
          <div className="mb-4">
            <div className="text-sm text-gray-500">Team</div>
            <div className="flex items-center mt-1">
              <div className="w-6 h-6 bg-red-300 rounded-sm mr-2"></div>
              <span>FastTrack</span>
            </div>
          </div>
          <div className="mb-4">
            <div className="text-sm text-gray-500">LINKS</div>
            <div className="mt-1 space-y-2">
              <div className="flex items-center">
                <Plus size={16} className="mr-2 text-gray-400" />
                <span>Tracker ticket</span>
              </div>
              <div className="flex items-center">
                <Plus size={16} className="mr-2 text-gray-400" />
                <span>Back-office tickets</span>
              </div>
              <div className="flex items-center">
                <Plus size={16} className="mr-2 text-gray-400" />
                <span>Side conversations</span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="text-sm text-gray-500">CONVERSATION ATTRIBUTES</div>
            <div className="mt-1 space-y-2">
              <div className="flex justify-between">
                <span>Subject</span>
                <Plus size={16} className="text-gray-400" />
              </div>
              <div className="flex justify-between">
                <span>ID</span>
                <span>#139018</span>
              </div>
              <div className="flex justify-between">
                <span>Priority</span>
                <span>High</span>
              </div>
              <div className="flex justify-between">
                <span>Version</span>
                <span>V3</span>
              </div>
              <div className="flex justify-between">
                <span>Language</span>
                <span>English</span>
              </div>
              <div className="flex justify-between">
                <span>Legacy</span>
                <span>False</span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="text-sm text-gray-500">USER DATA</div>
            <div className="mt-1 space-y-2">
              <div className="flex justify-between">
                <span>Name</span>
                <span>Michael</span>
                <div className="flex justify-between">
                  <span>Name</span>
                  <span>Michael</span>
                </div>
                <div className="flex justify-between">
                  <span>Company</span>
                  <div className="w-6 h-6 bg-gray-800 rounded-sm"></div>
                </div>
                <div className="flex justify-between">
                  <span>Location</span>
                  <span>London</span>
                </div>
                <div className="flex justify-between">
                  <span>Email</span>
                  <span className="truncate">michael@flow...</span>
                </div>
                <div className="text-blue-500">See all</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpDeskDashboard;
