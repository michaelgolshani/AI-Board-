import React from 'react';

const SchemaDiagram = () => {
  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      {/* User Table */}
      <div className="flex flex-col items-center bg-blue-200 p-4 rounded-md shadow-lg">
        <h2 className="text-lg font-bold">User</h2>
        <ul className="mt-2">
          <li>id (Integer, PK)</li>
          <li>name (String)</li>
          <li>email (String, Unique)</li>
          <li>password_hash (String)</li>
          <li>role (String)</li>
          <li>team_id (Integer, FK)</li>
          <li>created_at (DateTime)</li>
        </ul>
      </div>

      {/* Team Table */}
      <div className="flex flex-col items-center bg-green-200 p-4 rounded-md shadow-lg">
        <h2 className="text-lg font-bold">Team</h2>
        <ul className="mt-2">
          <li>id (Integer, PK)</li>
          <li>name (String)</li>
          <li>region (String)</li>
        </ul>
      </div>

      {/* Ticket Table */}
      <div className="flex flex-col items-center bg-yellow-200 p-4 rounded-md shadow-lg">
        <h2 className="text-lg font-bold">Ticket</h2>
        <ul className="mt-2">
          <li>id (Integer, PK)</li>
          <li>subject (String)</li>
          <li>description (Text)</li>
          <li>status (String)</li>
          <li>priority (String)</li>
          <li>created_by_id (Integer, FK)</li>
          <li>assigned_to_id (Integer, FK)</li>
          <li>team_id (Integer, FK)</li>
          <li>created_at (DateTime)</li>
          <li>updated_at (DateTime)</li>
        </ul>
      </div>

      {/* Other Tables */}
      <div className="flex flex-wrap justify-center space-x-8">
        {/* Message Table */}
        <div className="flex flex-col items-center bg-purple-200 p-4 rounded-md shadow-lg">
          <h2 className="text-lg font-bold">Message</h2>
          <ul className="mt-2">
            <li>id (Integer, PK)</li>
            <li>ticket_id (Integer, FK)</li>
            <li>user_id (Integer, FK)</li>
            <li>content (Text)</li>
            <li>created_at (DateTime)</li>
          </ul>
        </div>

        {/* Attachment Table */}
        <div className="flex flex-col items-center bg-red-200 p-4 rounded-md shadow-lg">
          <h2 className="text-lg font-bold">Attachment</h2>
          <ul className="mt-2">
            <li>id (Integer, PK)</li>
            <li>ticket_id (Integer, FK)</li>
            <li>file_name (String)</li>
            <li>file_path (String)</li>
            <li>uploaded_by_id (Integer, FK)</li>
            <li>created_at (DateTime)</li>
          </ul>
        </div>

        {/* VideoCall Table */}
        <div className="flex flex-col items-center bg-indigo-200 p-4 rounded-md shadow-lg">
          <h2 className="text-lg font-bold">VideoCall</h2>
          <ul className="mt-2">
            <li>id (Integer, PK)</li>
            <li>ticket_id (Integer, FK)</li>
            <li>started_by_id (Integer, FK)</li>
            <li>start_time (DateTime)</li>
            <li>end_time (DateTime)</li>
          </ul>
        </div>

        {/* Tag Table */}
        <div className="flex flex-col items-center bg-pink-200 p-4 rounded-md shadow-lg">
          <h2 className="text-lg font-bold">Tag</h2>
          <ul className="mt-2">
            <li>id (Integer, PK)</li>
            <li>name (String, Unique)</li>
          </ul>
        </div>

        {/* View Table */}
        <div className="flex flex-col items-center bg-teal-200 p-4 rounded-md shadow-lg">
          <h2 className="text-lg font-bold">View</h2>
          <ul className="mt-2">
            <li>id (Integer, PK)</li>
            <li>name (String)</li>
            <li>query (Text)</li>
            <li>created_by_id (Integer, FK)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SchemaDiagram;
