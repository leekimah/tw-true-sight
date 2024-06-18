import { HiSparkles } from 'react-icons/hi2';

export default function Index() {
  return (
    <>
      <div className="m-5 py-5 bg-white h-auto">
        <div className="flex w-full justify-end">
          <button className="px-3 py-2 bg-orange-500 text-white rounded w-auto mx-5 mt-8">
            <div className="flex gap-2 items-center text-center justify-center">
              <HiSparkles className="w-[20px] h-[20px]" />
              <span className="text-md">Generate Report</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
