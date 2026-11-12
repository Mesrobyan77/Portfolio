import { motion } from "framer-motion";

import { education, languages } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Education = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Learning and growth</p>
      <h2 className={styles.sectionHeadText}>Education.</h2>
    </motion.div>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {education.map((item, index) => (
        <motion.article
          key={item.school}
          variants={fadeIn("up", "spring", index * 0.15, 0.75)}
          className="rounded-2xl border border-white/10 bg-tertiary p-6 shadow-card"
        >
          <p className="text-sm font-semibold text-[#915EFF]">{item.date}</p>
          <h3 className="mt-3 text-xl font-bold text-white">{item.school}</h3>
          <p className="mt-3 text-sm leading-6 text-secondary">{item.program}</p>
        </motion.article>
      ))}
    </div>

    <motion.div
      variants={fadeIn("up", "spring", 0.3, 0.75)}
      className="mt-10 rounded-2xl border border-white/10 bg-black-100 p-6"
    >
      <h3 className="text-xl font-bold text-white">Languages</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {languages.map((language) => (
          <span
            key={language.name}
            className="rounded-full border border-[#915EFF]/40 bg-[#915EFF]/10 px-4 py-2 text-sm text-white-100"
          >
            {language.name} · {language.level}
          </span>
        ))}
      </div>
    </motion.div>
  </>
);

export default SectionWrapper(Education, "education");
