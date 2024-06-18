import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { RootContainer } from '@/components/osprey/root-container/view/RootContainer';
import { PageWrapper } from '@/components/osprey/page-content/view/PageWrapper';
import { PageContent } from '@/components/osprey/page-content/view/PageContent';
import { Sidebar } from '@/components/osprey/navigations/side/sidebar/view/Sidebar';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'TW True Sight',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <RootContainer>
          <Sidebar />
          <PageContent>
            <PageWrapper>{children}</PageWrapper>
          </PageContent>
        </RootContainer>
      </body>
    </html>
  );
}
