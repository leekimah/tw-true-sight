'use client';

import { Logs, useLogDocumentsDataTable } from './documents-data-table/hooks/use-documents-data-table';
import { LogDataTable } from '@/components/osprey/ui/custom-tables/data-table/view/LogDataTable';

export const DocumentsDataTable = () => {
  const { columns } = useLogDocumentsDataTable();
  return (
    <>
      <LogDataTable<Logs>
        datasource={`${process.env.NEXT_PUBLIC_DOCUMENT_URL}/api/default-table`}
        queryKey={['default-table']}
        columns={columns}
        title="Document Logs"
        subtitle="List of all document event logs"
        className="shadow-sm border border-slate-200 m-5 rounded"
        enableGlobalFilter={false}
      />
    </>
  );
};
