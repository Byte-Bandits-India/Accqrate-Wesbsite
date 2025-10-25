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
      <div className="p-6 max-w-lg">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm text-left leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default UpdateCard;
