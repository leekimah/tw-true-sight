import { NextRequest, NextResponse } from 'next/server';

// macAddress
// action // create, update, delete
// event // details as to what happened
// trans // Abstract, PO, PR, BCE, PR, Abstract
// refNo // doc no
// updatedBy // user
// timeStamp // date time

export async function GET(request: NextRequest) {
  return NextResponse.json({
    items: [
      {
        updatedBy: 'Malcolm Polish',
        macAddress: '00-B0-D0-63-C2-26',
        trans: 'PR',
        action: 'create',
        refNo: 'PR-20-2024',
        event: 'Added item #12323',
        timeStamp: '01/22/2024 08:42',
      },
      {
        updatedBy: 'Requiem Soul',
        macAddress: '00-B0-D0-63-C2-26',
        trans: 'BCE',
        action: 'update',
        refNo: 'PR-20-2024',
        event: 'Replaced item from #12323 to #456',
        timeStamp: '01/23/2024 09:13',
      },
      {
        updatedBy: 'Mark Aude',
        macAddress: '00-B0-D0-63-C2-26',
        trans: 'ABSTRACT',
        action: 'create',
        refNo: 'PR-20-2024',
        event: 'Updated item from #12321 to #1235',
        timeStamp: '01/25/2024 08:45',
      },
      {
        updatedBy: 'Malcolm Polish',
        macAddress: '00-B0-D0-63-C2-26',
        trans: 'PR',
        action: 'create',
        refNo: 'PR-20-2024',
        event: 'Updated item from #12321 to #1235',
        timeStamp: '01/25/2024 15:42',
      },
    ],
  });
}
