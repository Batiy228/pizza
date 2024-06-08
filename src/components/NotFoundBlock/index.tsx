import React from "react";
import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😮</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>
        Понимаете ли... Что то пошло не так. <br />
        Либо такой страницы нет и Вы сами виноваты,
        <br />
        либо мы наложали (извините пж, все исправим)
      </p>
    </div>
  );
};

export default NotFoundBlock;
