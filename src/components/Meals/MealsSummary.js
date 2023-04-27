import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>We offer a variety for all BBQ tastes!</p>
      <p>All meals are prepared using fresh ingredients.</p>
    </section>
  );
};

export default MealsSummary;
