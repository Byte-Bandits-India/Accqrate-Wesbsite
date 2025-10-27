import { Card } from "@/components/ui/card";


interface UpdateCardProps {
  image: string;
  title: string;
  description: string;
}

const UpdateCard = ({ image, title, description }: UpdateCardProps) => {
  return (
    <div className="overflow-hidden   ">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-auto lg:w-[500px] lg:h-[276px] object-cover"
        />

      </div>
      <div className="py-6 max-w-lg">
        <h3 className="text-fluid-body lg:text-[26px] font-semibold mb-4 md:mb-6">{title}</h3>
        <p className="text-muted-foreground text-fluid-small text-left leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default UpdateCard;
