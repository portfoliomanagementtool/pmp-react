import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import SideNav from "./SideNav";
import Header from "./Header";
import View from "./View";
import ThemeConfigModal from "../Modals/ThemeConfigModal";
import { getMetrics } from "../../api";
import { useDispatch } from "react-redux";
import { saveEquityDistribution, saveMetrics, saveTimeInterval } from "../../state/slices/portfolioSlice";

const DashboardLayout = () => {
  const { user } = useUser();
  const dispatch = useDispatch(); 
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchMetrics = async () => {
      const today = new Date();
      const startDate = new Date(today.setMonth(today.getMonth() - 3));
      const endDate = new Date();

      try {
        const { data } = await getMetrics(startDate, endDate, user.primaryEmailAddress.emailAddress);
        dispatch(saveMetrics(data.metrics));
        dispatch(saveEquityDistribution(data.categories));
        dispatch(saveTimeInterval({ start: startDate.toString(), end: endDate.toString() }));
      } catch (error) {
        console.log(error.message)
      }
    }

    fetchMetrics();
  }, [user, dispatch])

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {user && (
        <>
          <main>
            <div className="flex flex-auto flex-col">
              <div className="flex flex-auto min-w-0">
                <SideNav />
                <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
                  <Header
                    className="shadow dark:shadow-2xl"
                    openModal={openModal}
                  />
                  <div className="h-full scroll-smooth flex flex-auto flex-col justify-between">
                    <View />
                  </div>
                </div>
              </div>
            </div>
          </main>
          <ThemeConfigModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
        </>
      )}
    </>
  );
};

export default DashboardLayout;
