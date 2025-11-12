import React from 'react';
import ReactDOM from 'react-dom/client';
import OverviewCards from 'components/card/OverviewCards';
import CoursesInProgress from 'components/card/CoursesInProgress';
import NotificationPanel from 'components/card/NotificationPanel';
import UpcomingClasses from 'components/card/UpcomingClasses';
import LearningGoal from 'components/card/LearningGoal';
import RankingTable from 'components/card/RankingTable';
import CertificateCard from 'components/card/CertificateCard';
import ProgressChart from 'components/card/ProgressChart';
import CoursesInProgressSection from 'components/card/CoursesInProgressSection';
import UpcomingClassesSection from 'components/card/UpcomingClassesSection';
import OverviewSection from 'components/card/OverviewSections';

const DashboardOverview = () => {
  return (
    <div className="container mx-auto p-6">
      <OverviewCards />
      <OverviewSection />
      <div className="grid grid-cols-3 gap-6">
        <CoursesInProgress />
        <CoursesInProgressSection />
        <UpcomingClasses />
        <UpcomingClassesSection />
        <NotificationPanel />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <LearningGoal />
        <RankingTable />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <CertificateCard />
        <ProgressChart />
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DashboardOverview />
  </React.StrictMode>
);
export default DashboardOverview;
