import { Fragment, FunctionComponent, useContext } from 'react';
import { sidebarItems } from '../../sidebar/constants/sidebar-items';
import { SidebarContext } from '../../sidebar/utils/contexts';
import { SidebarPanelItem } from '../../sidebar-panel-item/view/SidebarPanelItem';
import { SidebarPanelHeader } from '../../sidebar-panel-header/view/SidebarPanelHeader';
import { HiSearchCircle } from 'react-icons/hi';
import { Beagle } from '@/components/osprey/ui/avatar/view/Beagle';

export const SidebarPanel: FunctionComponent = () => {
  const { activeNav } = useContext(SidebarContext);

  return (
    <div className="flex-1 bg-slate-900">
      <div className="flex flex-col h-screen overflow-y-auto">
        <SidebarPanelHeader
          header={
            <div className="flex flex-col gap-0">
              <span className="text-lg text-sky-200 uppercase font-bold tracking-tighter">TW</span>
              <span className="text-lg text-sky-200 uppercase font-bold tracking-tighter">
                True<span className="text-cyan-500 animate-pulse">Sight</span>
              </span>
            </div>
          }
          icon={<HiSearchCircle className="h-[36px] w-[36px] text-cyan-500" />}
          // icon={<Beagle />}
        />

        <main className="flex-auto">
          <ul className="space-y-1">
            {sidebarItems.map((item, index) => (
              <Fragment key={index}>
                <SidebarPanelItem title={item.header} path={item.path}>
                  {item.icon}
                </SidebarPanelItem>
              </Fragment>
            ))}
          </ul>
        </main>

        {/* <SidebarPanelFooter
          photoUrl="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          name="John Doe"
          email="johndoe@gmail.com"
        /> */}
      </div>
    </div>
  );
};
