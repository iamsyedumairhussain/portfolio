import node from "../../assets/images/tech-images/node.png";
import react from "../../assets/images/tech-images/react.png";
import aws from "../../assets/images/tech-images/aws.png";
import php from "../../assets/images/tech-images/php.png";
import mongodb from "../../assets/images/tech-images/mongodb.png";
import mysql from "../../assets/images/tech-images/mysql.png";
import docker from "../../assets/images/tech-images/docker.png";
import kubernetes from "../../assets/images/tech-images/kubernetes.png";
import pulumi from "../../assets/images/tech-images/pulumi.png";

const techImages = [node, react, aws, php, mongodb, mysql, docker, kubernetes, pulumi];

const TechImage = () => {
  return (
    <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 justify-items-center">
      {techImages.map((img, index) => (
        <div
          key={index}
          className="h-24 w-24 sm:h-28 sm:w-28 md:h-25 md:w-32 lg:h-20 lg:w-20 flex items-center justify-center"
        >
          <img
            src={img}
            alt={`tech-${index}`}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default TechImage;
