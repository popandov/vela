import { VStack } from '@chakra-ui/react';

import Layout from '../components/Layout';
import Header from '../components/main/Header';
import Footer from '../components/main/Footer';
import TopPageTabs from '../components/main/TopPageTabs';
import CardContainer from '../components/main/CardContainer';
import TopSection from '../components/main/TopSection';

const MainPage = () => {
  return (
    <Layout>
      <VStack>
        <Header />
        <TopSection />
        <TopPageTabs />
        <CardContainer />
        <Footer />
      </VStack>
    </Layout>
  );
};

export default MainPage;
