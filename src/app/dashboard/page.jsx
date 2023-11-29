import DisplayUser from "@/app/components/DisplayUser/DisplayUser";
import AddUser from "../components/AddUser/AddUser";

const Dashboard = () => {
  
  
  return (
    <div>
      <p>Our Users</p>
      <div>
        <AddUser />
      </div>
      <DisplayUser/>
    </div>
  );
};

export default Dashboard;
