import styles from "./Loading.module.scss";

export const Loading = () => {
  return (
    <div className={styles.root}>
      <div className={styles.loading}>
        {new Array(16).fill("").map(() => (
          <div className={styles.block} />
        ))}
      </div>
    </div>
  );
};
