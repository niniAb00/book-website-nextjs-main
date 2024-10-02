import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import styles from "../page.module.css";
import React from "react";

const page = () => {
  return (
    <main className={styles.main}>
      <div>
        <Header />
      </div>
    </main>
  );
};

export default page;
