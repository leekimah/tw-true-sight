export const GetActionBadgePill = (action: 'create' | 'update' | 'delete') => {
  if (action === 'create')
    return (
      <div className="min-w-[3rem] max-w-[6rem] px-1 py-0.5 bg-green-600 text-green-200 rounded text-center font-medium">
        Create
      </div>
    );
  else if (action === 'update')
    return (
      <div className="min-w-[3rem] max-w-[6rem] px-1 py-0.5 bg-yellow-600 text-yellow-200 rounded text-center font-medium">
        Update
      </div>
    );
  else if (action === 'delete')
    return (
      <div className="min-w-[3rem] max-w-[6rem] px-1 py-0.5 bg-red-600 text-red-200 rounded text-center font-medium">
        Delete
      </div>
    );
};
