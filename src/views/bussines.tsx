import { features } from "../util/constants";
import { layout, styles } from "../util/style";
import FeatureCard from '../components/feature-card';
import Button from '../components/button';

const Bussines = () => {
  return (
    <section id="features" className={`${layout.section} ml-5`}>
      <div className={layout.sectionIfo}>
        <h2 className={`${styles.heading2}`}>
          Develop a business, <br className="sm:block hidden" /> the money is from us!
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, incidunt? Tenetur sint magnam sed tempora aperiam,
          repellendus qui illo error.
        </p>
        <Button styles={"mt-10 mb-4"} />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, idx) => (
          <FeatureCard key={feature.id} {...feature} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Bussines;