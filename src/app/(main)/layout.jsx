import BreakingNews from "@/components/shaerd/BreakingNews";
import Header from "@/components/shaerd/Header";
import Navbar from "@/components/shaerd/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      {children}
    </>
  );
};

export default MainLayout;
