/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const populerItems = data.filter((item) => item.category === "popular");
  //       console.log(data);
  //       setMenu(populerItems);
  //     });
  // }, []);

  const [menu] = useMenu()
  const popular = menu.filter(item => item.category === 'popular')

  return (
    <section className="my-32">
      <SectionTitle
        heading={"---Check it out---"}
        subHeading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10  my-32">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
