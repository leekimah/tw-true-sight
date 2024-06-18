export const DocBadgePill = (document: 'purchase request' | 'purchase order' | 'abstract') => {
  if (document === 'purchase request')
    return (
      <div className="min-w-[3rem] max-w-[12rem] px-1 py-0.5 bg-sky-200 text-sky-600 border border-sky-400 rounded text-center ">
        Purchase Request
      </div>
    );
  else if (document === 'purchase order')
    return (
      <div className="min-w-[3rem] max-w-[12rem] px-1 py-0.5 bg-slate-200 text-slate-600 border border-slate-400 rounded text-center ">
        Purchase Order
      </div>
    );
  else if (document === 'abstract')
    return (
      <div className="min-w-[3rem] max-w-[12rem] px-1 py-0.5 bg-blue-200 text-blue-600 border border-blue-400 rounded text-center ">
        Abstract
      </div>
    );
};
