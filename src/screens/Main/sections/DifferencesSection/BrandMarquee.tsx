import { motion } from "framer-motion";

const images: string[] = [
  "02eAJ32YZrr0X9ZtRbV2jDiM0EU.png",
  "9pzXisWJItxQ7SaFE8Vheal7HM.png",
  "CMkYfutjIzTZlKZllVRRxcCaQ8.png",
  "iOuNBMRdK0mAxuoZVUr3cDn5GQ.png",
  "MxaaetzbWStLS73BZEpwvmPxzpc.png",
  "o0N9BcNLrtppT1XrY6KtmAy2Q.png",
  "rooCIWiiXqRE89wBDTpe538qw.png",
  "rxtjQqs7u7uQfVTjmsup0rulzo.svg",
  "sIc8sZniOGDI8FoAWOgscdBPzoY.png",
];

const BrandMarquee: React.FC = () => {
  return (
    <div className="w-full relative overflow-hidden py-4">
      <motion.div
        className="flex gap-8 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 40,
        }}
      >
        {[...images, ...images].map((img, index) => (
          <img
            key={index}
            src={`/brands/${img}`}
            alt={`Brand ${index}`}
            className="h-10 object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default BrandMarquee;
