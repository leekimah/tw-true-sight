import { GetActionBadgePill } from '@/components/osprey/badge-pills/event-bp/view/GetActionBadgePill';
import { createColumnHelper } from '@tanstack/react-table';
import dayjs from 'dayjs';

export type Logs = {
  macAddress: string;
  action: string; // create, update, delete
  event: string; // details as to what happened
  trans: string; // Abstract, PO, PR, BCE, PR, Abstract
  refNo: string; // doc no
  updatedBy: string; // user
  timeStamp: string; // date time
};

export const useLogDocumentsDataTable = () => {
  const helper = createColumnHelper<Logs>();

  const columns = [
    helper.accessor('updatedBy', {
      header: 'User',
      cell: (info) => info.getValue(),
    }),

    helper.accessor('macAddress', {
      header: 'MAC Address',
      cell: (info) => info.getValue(),
    }),

    helper.accessor('trans', {
      header: 'Transaction',
      cell: (info) => info.getValue(),
    }),

    helper.accessor('refNo', {
      header: 'Ref. No',
      cell: (info) => info.getValue(),
    }),

    helper.accessor('action', {
      header: 'Action',
      cell: (info) =>
        GetActionBadgePill(
          info.getValue() === 'create' ? 'create' : info.getValue() === 'update' ? 'update' : 'delete'
        ),
    }),

    helper.accessor('event', {
      header: 'Event',
      cell: (info) => <div className="max-w-[8rem]">{info.getValue()}</div>,
    }),

    helper.accessor('timeStamp', {
      header: 'Date-Time',
      cell: (info) => dayjs(info.getValue()).format('MMM DD, YYYY HH:mm A'),
      //  filterFn:  (a) =>a.columnFilters([{id:'',value:''}])
    }),
  ];

  return { columns };
};
