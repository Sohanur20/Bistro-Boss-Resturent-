/* eslint-disable no-unused-vars */
import { useState } from "react";
import Cover from "../../Components/Shared/Cover/Cover";
import NavBer from "../../Components/Shared/NavBer/NavBer";
import orderImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
// import FooCard from "../../Components/Shared/FooCard/FooCard";
import { useParams } from "react-router-dom";
import OrderTab from "./OrderTab/OrderTab";
import { Helmet } from "react-helmet-async";

const OrderFood = () => {

const categories = ['salad','dessert','soup','pizza']
const {category} = useParams()
  const initialIndex = categories.indexOf(category)
  const defaultIndex = initialIndex !== -1 ? initialIndex : 0
  const [tabIndex, setTabIndex] = useState(defaultIndex);

  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  // const offered = menu.filter((item) => item.category === "offered");
  const pizza = menu.filter((item) => item.category === "pizza");

  return (
    <div>
        <Helmet>
            <title>BistroBoss order food</title>
        </Helmet>
      <NavBer></NavBer>
      <Cover img={orderImg} title={"Order Food"}></Cover>
      {/* tabs */}
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="text-center my-10 ">
          <TabList>
            <Tab>Salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            {/* <Tab>drinks</Tab> */}
          </TabList>
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
        
        </div>
      </Tabs>
    </div>
  );
};

export default OrderFood;
